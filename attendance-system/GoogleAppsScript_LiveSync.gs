/**
 * =========================================================================================
 * SRI MURUGA DRIVING SCHOOL (SMDS) - GOOGLE APPS SCRIPT FOR LIVE SHEET SYNC
 * =========================================================================================
 * Spreadsheet: ACCOUNTS SMDS 2026
 * Description: Connects the Attendance & Accounts Portal to Google Sheets in real-time.
 * 
 * FEATURES:
 * 1. Automatically maps Class Types according to SMDS Accounts Rules:
 *    - 1. 2 wh license - 2500 (single)
 *    - 2. 4 wh license - 3000 (single)
 *    - 3. 2 & 4 wh license - 4500 (double)
 *    - 4. 2 & 4 wh license with training - ~8000 (double)
 *    - 5. 4 wh license with training - ~8000 (single)
 *    - 6. 21 days training - 6000 (training only)
 *    - 7. 10 days training - 4000 (training only)
 * 2. Starts enrollment number fresh from 1 for each month:
 *    - S.NO in Sheet: 1, 2, 3...
 *    - Portal Enrollment No: S.NO / Current Month Numeric (e.g. 1/1, 2/1 in Jan; 1/10, 2/10 in Oct)
 * 3. Identifies current active Month Tab (JANUARY, FEBRUARY, MARCH, etc.)
 * 4. Recalculates Month Summary (Total Billed, Total Advance, Total Outstanding) at Row 2
 * 5. Supports both doGet (Fetch/Ping) and doPost (Live Add Trainee & Update Payment)
 * =========================================================================================
 * 
 * HOW TO DEPLOY:
 * 1. Open your Google Sheet (ACCOUNTS SMDS 2026).
 * 2. In top menu, click Extensions > Apps Script.
 * 3. Delete any default code in Code.gs, paste this entire code, and press Save (Ctrl+S).
 * 4. Click the blue "Deploy" button at top right > "New deployment".
 * 5. Select type: "Web app".
 * 6. Configuration:
 *    - Description: "SMDS Live Portal Sync"
 *    - Execute as: "Me (your google account)"
 *    - Who has access: "Anyone" (Critical so portal can save data without Google login prompt)
 * 7. Click "Deploy", authorize permissions when prompted, and copy the "Web app URL".
 * 8. Paste that Web app URL into your Portal settings or keep it in localStorage as 'smds_sheets_sync_url'.
 * =========================================================================================
 */

// Month names list for matching sheet tabs
const MONTH_NAMES = [
  'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
  'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
];

/**
 * Handle HTTP GET Requests (Health check and data fetch)
 */
function doGet(e) {
  try {
    const params = e ? e.parameter : {};
    const action = params.action || 'ping';

    if (action === 'ping') {
      return jsonResponse({
        status: 'success',
        message: 'SMDS Google Sheets Sync Service is active and ready!',
        spreadsheet: SpreadsheetApp.getActiveSpreadsheet().getName(),
        timestamp: new Date().toISOString()
      });
    }

    if (action === 'get_month_data') {
      const monthParam = (params.month || getCurrentMonthName()).toUpperCase();
      const sheet = getMonthSheet(monthParam);
      if (!sheet) {
        return jsonResponse({ status: 'error', message: 'Sheet tab not found for ' + monthParam });
      }
      const data = getTraineesFromSheet(sheet);
      return jsonResponse({ status: 'success', month: sheet.getName(), count: data.length, data: data });
    }

    if (action === 'get_all_months_summary') {
      const ss = SpreadsheetApp.getActiveSpreadsheet();
      const summary = [];
      const sheets = ss.getSheets();
      for (let i = 0; i < sheets.length; i++) {
        const sName = sheets[i].getName();
        const billed = Number(sheets[i].getRange(2, 5).getValue() || 0);
        const collected = Number(sheets[i].getRange(2, 6).getValue() || 0);
        const due = Number(sheets[i].getRange(2, 8).getValue() || 0);
        summary.push({ month: sName, billed: billed, collected: collected, due: due });
      }
      return jsonResponse({ status: 'success', summary: summary });
    }

    return jsonResponse({ status: 'error', message: 'Unknown action: ' + action });
  } catch (err) {
    return jsonResponse({ status: 'error', message: err.toString() });
  }
}

/**
 * Handle HTTP POST Requests (Live add trainee and live payment update)
 */
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({ status: 'error', message: 'Empty post data payload' });
    }

    const payload = JSON.parse(e.postData.contents);
    const action = payload.action || 'add_trainee';

    if (action === 'add_trainee') {
      return handleAddTrainee(payload);
    } else if (action === 'update_payment') {
      return handleUpdatePayment(payload);
    }

    return jsonResponse({ status: 'error', message: 'Unsupported action: ' + action });
  } catch (err) {
    return jsonResponse({ status: 'error', message: err.toString() });
  }
}

/**
 * Add New Trainee to the respective Month Sheet
 */
function handleAddTrainee(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // 1. Determine Target Month and numeric month (1 to 12)
  const monthInfo = determineMonthInfo(data.startDate || data.enrollmentDate, data.month);
  const sheet = getOrCreateMonthSheet(ss, monthInfo.name);

  // 2. Map Class Type & Days according to SMDS 7 User Rules
  const mapped = mapClassTypeAndDays(data);

  // 3. Find next available S NO fresh from 1 for this month
  const lastRow = sheet.getLastRow();
  let nextSNo = 1;
  let targetRow = 5; // Student data rows start at Row 5

  if (lastRow >= 5) {
    const sNoColumn = sheet.getRange(5, 1, lastRow - 4, 1).getValues();
    for (let i = sNoColumn.length - 1; i >= 0; i--) {
      const val = parseInt(sNoColumn[i][0]);
      if (!isNaN(val) && val > 0) {
        nextSNo = val + 1;
        targetRow = 5 + i + 1;
        break;
      }
    }
  }

  // Ensure targetRow is after existing content
  if (targetRow <= lastRow) {
    targetRow = lastRow + 1;
  }

  // Enrollment Number format: Double Series 00/00 (eg. 01/01, 02/01, 01/10, 18/10)
  const formattedSNo = String(nextSNo).padStart(2, '0');
  const formattedMonth = String(monthInfo.numeric).padStart(2, '0');
  const formattedEnrollmentNo = formattedSNo + '/' + formattedMonth;

  // 4. Prepare Row Values
  const sNo = nextSNo;
  const classDays = mapped.classDays || '';
  const name = (data.name || '').toUpperCase().trim();
  const classType = mapped.classType;
  const feesAmount = Number(data.feesAmount || data.feesTotal || data.fees?.total || mapped.defaultFee || 0);
  const advanceReceived = Number(data.advanceReceived || data.feesPaid || data.fees?.paid || 0);
  const outstandingAmount = Math.max(0, feesAmount - advanceReceived);
  
  // Format Pay Date (e.g. "UPI 20/10/26" or "CASH 20/10/26")
  let payDate = data.payDate || '';
  if (!payDate && advanceReceived > 0) {
    const method = data.paymentMethod || 'UPI';
    const dateFormatted = formatDateDDMMYY(data.paymentDate ? new Date(data.paymentDate) : new Date());
    payDate = method + ' ' + dateFormatted;
  }

  const remark = data.remark || mapped.remark || '';
  const startDate = data.startDate || data.enrollmentDate 
    ? formatInputDate(data.startDate || data.enrollmentDate) 
    : formatDateDDMMYYYY(new Date());
  const endDate = data.endDate 
    ? formatInputDate(data.endDate) 
    : calculateEndDate(startDate, classDays);
  const contactNumber = String(data.phone || data.contactNumber || '').trim();
  const review = data.review || '';

  // Write row matching SMDS Sheet columns:
  // [S NO, CLS. DAYS, NAME, CLASS TYPE, FEES AMOUNT, ADVANCE RECEIVED, PAY-DATE, OUTSTANDING AMOUNT, REMARK, START, END, CONTACT NUMBER, REVIEW]
  const rowData = [
    sNo,
    classDays,
    name,
    classType,
    feesAmount,
    advanceReceived,
    payDate,
    outstandingAmount,
    remark,
    startDate,
    endDate,
    contactNumber,
    review
  ];

  sheet.getRange(targetRow, 1, 1, 13).setValues([rowData]);

  // Center alignment & formatting for numbers/dates
  sheet.getRange(targetRow, 1).setHorizontalAlignment('center');
  sheet.getRange(targetRow, 2).setHorizontalAlignment('center');
  sheet.getRange(targetRow, 4).setHorizontalAlignment('center');
  sheet.getRange(targetRow, 5, 1, 2).setNumberFormat('#,##0');
  sheet.getRange(targetRow, 8).setNumberFormat('#,##0');

  // 5. Update Month Total formulas at Row 2
  updateMonthSummaryRow(sheet);

  return jsonResponse({
    status: 'success',
    message: 'Trainee successfully added to ' + sheet.getName(),
    data: {
      sNo: sNo,
      enrollmentNo: formattedEnrollmentNo,
      month: sheet.getName(),
      monthNumeric: monthInfo.numeric,
      row: targetRow,
      name: name,
      classType: classType,
      classDays: classDays,
      feesAmount: feesAmount,
      advanceReceived: advanceReceived,
      outstandingAmount: outstandingAmount,
      phone: contactNumber,
      startDate: startDate,
      endDate: endDate
    }
  });
}

/**
 * Handle Updating Fee / Payment for an existing Trainee
 */
function handleUpdatePayment(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const monthInfo = determineMonthInfo(data.paymentDate, data.month);
  const sheet = getMonthSheet(monthInfo.name);

  if (!sheet) {
    return jsonResponse({ status: 'error', message: 'Month sheet not found: ' + monthInfo.name });
  }

  const lastRow = sheet.getLastRow();
  if (lastRow < 5) {
    return jsonResponse({ status: 'error', message: 'No student data found in sheet ' + sheet.getName() });
  }

  const values = sheet.getRange(5, 1, lastRow - 4, 13).getValues();
  let foundRow = -1;

  // Search by S NO (or enrollmentNo formatted like "1/10" or "1"), phone, or name
  const targetSNo = data.sNo ? String(data.sNo).split('/')[0].trim() : (data.enrollmentNo ? String(data.enrollmentNo).split('/')[0].trim() : '');

  for (let i = 0; i < values.length; i++) {
    const rowSNo = String(values[i][0]).trim();
    const rowName = String(values[i][2]).toUpperCase().trim();
    const rowPhone = String(values[i][11]).trim();

    if ((targetSNo && targetSNo === rowSNo) ||
        (data.phone && String(data.phone).trim() === rowPhone) ||
        (data.name && String(data.name).toUpperCase().trim() === rowName)) {
      foundRow = 5 + i;
      break;
    }
  }

  if (foundRow === -1) {
    return jsonResponse({ status: 'error', message: 'Student record not found in ' + sheet.getName() });
  }

  const curFee = Number(sheet.getRange(foundRow, 5).getValue() || 0);
  const curAdvance = Number(sheet.getRange(foundRow, 6).getValue() || 0);
  const additionalPaid = Number(data.additionalAmount || data.paidAmount || data.amount || 0);
  const newAdvance = curAdvance + additionalPaid;
  const newOutstanding = Math.max(0, curFee - newAdvance);

  const curPayDate = String(sheet.getRange(foundRow, 7).getValue() || '');
  const newPayNote = (data.paymentMethod || 'UPI') + ' ' + formatDateDDMMYY(new Date());
  const updatedPayDate = curPayDate ? (curPayDate + ' ' + newPayNote) : newPayNote;

  sheet.getRange(foundRow, 6).setValue(newAdvance);
  sheet.getRange(foundRow, 7).setValue(updatedPayDate);
  sheet.getRange(foundRow, 8).setValue(newOutstanding);

  updateMonthSummaryRow(sheet);

  return jsonResponse({
    status: 'success',
    message: 'Payment updated successfully in ' + sheet.getName(),
    data: {
      row: foundRow,
      name: sheet.getRange(foundRow, 3).getValue(),
      newAdvance: newAdvance,
      newOutstanding: newOutstanding,
      payDate: updatedPayDate
    }
  });
}

/**
 * Read Trainees from a Sheet Tab
 */
function getTraineesFromSheet(sheet) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 5) return [];

  const values = sheet.getRange(5, 1, lastRow - 4, 13).getValues();
  const trainees = [];

  for (let i = 0; i < values.length; i++) {
    const sNo = values[i][0];
    const name = values[i][2];
    if (!name || String(name).trim() === '') continue;

    trainees.push({
      sNo: sNo,
      classDays: values[i][1],
      name: String(name).trim(),
      classType: values[i][3],
      feesAmount: Number(values[i][4] || 0),
      advanceReceived: Number(values[i][5] || 0),
      payDate: String(values[i][6] || ''),
      outstandingAmount: Number(values[i][7] || 0),
      remark: String(values[i][8] || ''),
      startDate: String(values[i][9] || ''),
      endDate: String(values[i][10] || ''),
      contactNumber: String(values[i][11] || ''),
      review: String(values[i][12] || '')
    });
  }

  return trainees;
}

/**
 * =========================================================================================
 * SMDS CLASS TYPE & DAYS MAPPING LOGIC (EXACT USER RULES)
 * -----------------------------------------------------------------------------------------
 * 1. 2 wh license - 2500 (single)
 * 2. 4 wh license - 3000 (single)
 * 3. 2 & 4 wh license - 4500 (double)
 * 4. 2 & 4 wh license with training - ~8000 (double)
 * 5. 4 wh license with training - ~8000 (single)
 * 6. 21 days training - 6000 (training only)
 * 7. 10 days training - 4000 (training only)
 * =========================================================================================
 */
function mapClassTypeAndDays(data) {
  const pkgId = String(data.packageId || data.type || '').toLowerCase();
  const fee = Number(data.feesAmount || data.feesTotal || data.fees?.total || 0);
  const daysSpecified = parseInt(data.days || data.classDays) || 0;
  const categorySpecified = String(data.classType || '').toUpperCase().trim();

  // If already directly specified as TRAINNING ONLY
  if (categorySpecified === 'TRAINNING ONLY' || categorySpecified === 'TRAINING ONLY' || pkgId === 'item_12' || pkgId === 'item_13') {
    if (daysSpecified === 10 || fee <= 4000 || pkgId === 'item_13') {
      return { classType: 'TRAINNING ONLY', classDays: 10, remark: 'TRAINNING ONLY', defaultFee: 4000 };
    }
    return { classType: 'TRAINNING ONLY', classDays: 21, remark: 'TRAINNING ONLY', defaultFee: 6000 };
  }

  // Rule 6: 21 days training - 6000 (training only)
  if (pkgId === 'item_12' || (daysSpecified === 21 && fee === 6000)) {
    return { classType: 'TRAINNING ONLY', classDays: 21, remark: 'TRAINNING ONLY', defaultFee: 6000 };
  }

  // Rule 7: 10 days training - 4000 (training only)
  if (pkgId === 'item_13' || (daysSpecified === 10 && fee <= 4000)) {
    return { classType: 'TRAINNING ONLY', classDays: 10, remark: 'TRAINNING ONLY', defaultFee: 4000 };
  }

  // Rule 4: 2 & 4 wh license with training - 8000 or nearly 8000 (double)
  if (pkgId === 'item_8' || (categorySpecified === 'DOUBLE' && (fee >= 6500 || daysSpecified === 21))) {
    return { classType: 'DOUBLE', classDays: 21, remark: '', defaultFee: fee || 8000 };
  }

  // Rule 3: 2 & 4 wh license - 4500 (double)
  if (pkgId === 'item_3' || (categorySpecified === 'DOUBLE' && fee < 6500) || (fee >= 4200 && fee <= 5000 && categorySpecified !== 'SINGLE')) {
    return { classType: 'DOUBLE', classDays: '', remark: '', defaultFee: fee || 4500 };
  }

  // Rule 5: 4 wh license with training - 8000 or nearly 8000 (single)
  if (pkgId === 'item_8_single' || (categorySpecified === 'SINGLE' && (fee >= 7000 || daysSpecified === 21))) {
    return { classType: 'SINGLE', classDays: 21, remark: '', defaultFee: fee || 8000 };
  }

  // Rule 2: 4 wh license - 3000 (single)
  if (pkgId === 'item_2' || (fee > 2500 && fee <= 3500)) {
    return { classType: 'SINGLE', classDays: '', remark: '', defaultFee: fee || 3000 };
  }

  // Rule 1: 2 wh license - 2500 (single)
  if (pkgId === 'item_1' || fee <= 2500) {
    return { classType: 'SINGLE', classDays: '', remark: '', defaultFee: fee || 2500 };
  }

  // Default fallback based on category
  if (categorySpecified === 'DOUBLE') {
    return { classType: 'DOUBLE', classDays: daysSpecified || 21, remark: '', defaultFee: fee || 8000 };
  }

  return { classType: 'SINGLE', classDays: daysSpecified || '', remark: '', defaultFee: fee || 3000 };
}

/**
 * Determine Month Name & numeric index (1 to 12) from input date or string
 */
function determineMonthInfo(dateInput, monthInput) {
  // If month string like "JANUARY" or "10" passed directly
  if (monthInput) {
    const upper = String(monthInput).toUpperCase();
    const idx = MONTH_NAMES.indexOf(upper);
    if (idx !== -1) {
      return { name: upper, numeric: idx + 1 };
    }
    const num = parseInt(monthInput, 10);
    if (!isNaN(num) && num >= 1 && num <= 12) {
      return { name: MONTH_NAMES[num - 1], numeric: num };
    }
  }

  // Extract from date input
  if (dateInput) {
    let d;
    if (typeof dateInput === 'string' && dateInput.includes('/')) {
      const parts = dateInput.split('/');
      // Expecting DD/MM/YYYY
      d = new Date(parts[2], parseInt(parts[1], 10) - 1, parts[0]);
    } else {
      d = new Date(dateInput);
    }
    if (!isNaN(d.getTime())) {
      const monthIdx = d.getMonth();
      return { name: MONTH_NAMES[monthIdx], numeric: monthIdx + 1 };
    }
  }

  // Fallback to current date
  const now = new Date();
  const curIdx = now.getMonth();
  return { name: MONTH_NAMES[curIdx], numeric: curIdx + 1 };
}

function getCurrentMonthName() {
  return MONTH_NAMES[new Date().getMonth()];
}

/**
 * Find existing Month sheet tab (matches "JANUARY", "FEBRUARY(7) PENDING", "APRIL.", etc.)
 */
function getMonthSheet(monthName) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheets = ss.getSheets();
  const cleanTarget = monthName.toUpperCase();

  for (let i = 0; i < sheets.length; i++) {
    const sName = sheets[i].getName().toUpperCase();
    if (sName.startsWith(cleanTarget) || sName.includes(cleanTarget)) {
      return sheets[i];
    }
  }
  return null;
}

/**
 * Get or Create Month Sheet Tab with identical SMDS formatting
 */
function getOrCreateMonthSheet(ss, monthName) {
  let sheet = getMonthSheet(monthName);
  if (sheet) return sheet;

  // Create new tab with SMDS standard header
  sheet = ss.insertSheet(monthName);
  
  sheet.getRange(1, 1).setValue(monthName + ' 2026 CLASS TYPE , FEES AMOUNT AND TRAINNING REPORT');
  sheet.getRange(1, 1).setFontWeight('bold').setFontSize(11);
  
  sheet.getRange(2, 1).setValue(monthName + ' Month Amount');
  sheet.getRange(2, 1).setFontWeight('bold');
  
  const headers = [
    'S NO', 'CLS. DAYS', 'NAME', 'CLASS TYPE', 'FEES AMOUNT',
    'ADVANCE RECEIVED', 'PAY-DATE', 'OUTSTANDING AMOUNT', 'REMARK',
    'DATE OF ENROLLED', '', 'CONTACT NUMBER', 'REVIEW'
  ];
  sheet.getRange(3, 1, 1, 13).setValues([headers]).setFontWeight('bold').setBackground('#f3f4f6');
  
  const subHeaders = ['', '', '', '', '', '', '', '', '', 'START', 'END', '', ''];
  sheet.getRange(4, 1, 1, 13).setValues([subHeaders]).setFontWeight('bold').setBackground('#f3f4f6');

  return sheet;
}

/**
 * Update Month Summary row formulas at Row 2 (Total Billed, Total Advance, Total Outstanding)
 */
function updateMonthSummaryRow(sheet) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 5) return;

  sheet.getRange(2, 5).setFormula('=SUM(E5:E' + lastRow + ')');
  sheet.getRange(2, 6).setFormula('=SUM(F5:F' + lastRow + ')');
  sheet.getRange(2, 8).setFormula('=SUM(H5:H' + lastRow + ')');
  sheet.getRange(2, 5, 1, 4).setFontWeight('bold');
}

/**
 * Helper: Format Date as DD/MM/YYYY
 */
function formatDateDDMMYYYY(d) {
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return day + '/' + month + '/' + year;
}

/**
 * Helper: Format Date as DD/MM/YY
 */
function formatDateDDMMYY(d) {
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = String(d.getFullYear()).slice(-2);
  return day + '/' + month + '/' + year;
}

/**
 * Helper: Format user date input into standard DD/MM/YYYY
 */
function formatInputDate(str) {
  if (!str) return '';
  if (str.includes('/')) return str;
  if (str.includes('-')) {
    const parts = str.split('-');
    if (parts[0].length === 4) {
      // YYYY-MM-DD -> DD/MM/YYYY
      return parts[2] + '/' + parts[1] + '/' + parts[0];
    }
  }
  return str;
}

/**
 * Calculate End Date (typically 30 days after Start Date)
 */
function calculateEndDate(startStr, days) {
  if (!startStr) return '';
  const parts = startStr.split('/');
  if (parts.length < 3) return '';
  const d = new Date(parts[2], parseInt(parts[1], 10) - 1, parts[0]);
  const addDays = (parseInt(days) === 10) ? 15 : 30; // standard 1 month duration
  d.setDate(d.getDate() + addDays);
  return formatDateDDMMYYYY(d);
}

/**
 * Return JSON output for Web App
 */
function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
