/**
 * =========================================================================================
 * SRI MURUGA DRIVING SCHOOL (SMDS) - GOOGLE APPS SCRIPT FOR LIVE SHEET SYNC
 * =========================================================================================
 * Spreadsheet: ACCOUNTS SMDS 2026
 * Description: Connects the Attendance & Accounts Portal to Google Sheets in real-time.
 * 
 * FEATURES:
 * 1. Automatically maps Class Types according to SMDS rules:
 *    - 2 wh license (2500) -> SINGLE
 *    - 4 wh license (3000) -> SINGLE
 *    - 2 & 4 wh license (4500) -> SINGLE
 *    - 2 & 4 wh license with training (~8000) -> DOUBLE
 *    - 4 wh license with training (~8000) -> SINGLE
 *    - 21 days training (6000) -> TRAINNING ONLY
 *    - 10 days training (4000) -> TRAINNING ONLY
 * 2. Identifies current active Month Tab (JANUARY, FEBRUARY, MARCH, etc.)
 * 3. Auto-calculates next S.NO and appends new trainee row
 * 4. Recalculates Month Summary (Total Billed, Total Advance, Total Outstanding)
 * 5. Returns JSON response for instant UI confirmation in the React portal
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
  
  // 1. Determine Target Month
  const targetMonth = determineMonth(data.startDate, data.month);
  const sheet = getOrCreateMonthSheet(ss, targetMonth);

  // 2. Map Class Type & Days according to SMDS Rules
  const mapped = mapClassTypeAndDays(data);

  // 3. Find next available S NO and row index
  const lastRow = sheet.getLastRow();
  let nextSNo = 1;
  let targetRow = 5; // Data starts at Row 5

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

  // 4. Prepare Row Values
  const sNo = nextSNo;
  const classDays = mapped.classDays || '';
  const name = (data.name || '').toUpperCase().trim();
  const classType = mapped.classType;
  const feesAmount = Number(data.feesAmount || data.feesTotal || 0);
  const advanceReceived = Number(data.advanceReceived || data.feesPaid || 0);
  const outstandingAmount = Math.max(0, feesAmount - advanceReceived);
  
  // Format Pay Date (e.g. "UPI 20/10/26" or "CASH 20/10/26")
  let payDate = data.payDate || '';
  if (!payDate && advanceReceived > 0) {
    const method = data.paymentMethod || 'UPI';
    const dateFormatted = formatDateDDMMYY(data.paymentDate ? new Date(data.paymentDate) : new Date());
    payDate = method + ' ' + dateFormatted;
  }

  const remark = data.remark || mapped.remark || '';
  const startDate = data.startDate ? formatInputDate(data.startDate) : formatDateDDMMYYYY(new Date());
  const endDate = data.endDate ? formatInputDate(data.endDate) : calculateEndDate(startDate, classDays);
  const contactNumber = String(data.phone || data.contactNumber || '').trim();
  const review = data.review || '';

  // Write row: [S NO, CLS. DAYS, NAME, CLASS TYPE, FEES AMOUNT, ADVANCE RECEIVED, PAY-DATE, OUTSTANDING AMOUNT, REMARK, START, END, CONTACT NUMBER, REVIEW]
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
      sheet: sheet.getName(),
      row: targetRow,
      name: name,
      classType: classType,
      classDays: classDays,
      feesAmount: feesAmount,
      advanceReceived: advanceReceived,
      outstandingAmount: outstandingAmount,
      phone: contactNumber
    }
  });
}

/**
 * Handle Updating Fee / Payment for an existing Trainee
 */
function handleUpdatePayment(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const targetMonth = determineMonth(data.paymentDate, data.month);
  const sheet = getMonthSheet(targetMonth);

  if (!sheet) {
    return jsonResponse({ status: 'error', message: 'Month sheet not found: ' + targetMonth });
  }

  const lastRow = sheet.getLastRow();
  if (lastRow < 5) {
    return jsonResponse({ status: 'error', message: 'No student data found in sheet ' + sheet.getName() });
  }

  const values = sheet.getRange(5, 1, lastRow - 4, 13).getValues();
  let foundRow = -1;

  for (let i = 0; i < values.length; i++) {
    const rowSNo = String(values[i][0]).trim();
    const rowName = String(values[i][2]).toUpperCase().trim();
    const rowPhone = String(values[i][11]).trim();

    if ((data.sNo && String(data.sNo).trim() === rowSNo) ||
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
  const additionalPaid = Number(data.additionalAmount || data.paidAmount || 0);
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
    message: 'Payment updated successfully',
    data: {
      row: foundRow,
      newAdvance: newAdvance,
      newOutstanding: newOutstanding,
      payDate: updatedPayDate
    }
  });
}

/**
 * SMDS CLASS TYPE & DAYS MAPPING LOGIC (USER SPECIFIED RULES)
 * 1. 2 wh license - 2500 (single)
 * 2. 4 wh license - 3000 (single)
 * 3. 2 & 4 wh license - 4500 (single)
 * 4. 2 & 4 wh license with training - ~8000 (double)
 * 5. 4 wh license with training - ~8000 (single)
 * 6. 21 days training - 6000 (training only)
 * 7. 10 days training - 4000 (training only)
 */
function mapClassTypeAndDays(data) {
  const pkgId = String(data.packageId || data.type || '').toLowerCase();
  const fee = Number(data.feesAmount || data.feesTotal || 0);
  const daysSpecified = parseInt(data.days || data.classDays) || 0;
  const categorySpecified = (data.classType || '').toUpperCase();

  // If already directly specified as SINGLE / DOUBLE / TRAINNING ONLY
  if (categorySpecified === 'TRAINNING ONLY' || categorySpecified === 'TRAINING ONLY') {
    return {
      classType: 'TRAINNING ONLY',
      classDays: daysSpecified || (fee <= 4000 ? 10 : 21),
      remark: 'TRAINNING ONLY'
    };
  }

  // 1. 10 Days Training Only
  if (pkgId === 'item_13' || daysSpecified === 10 || (fee <= 4000 && categorySpecified.includes('TRAIN'))) {
    return { classType: 'TRAINNING ONLY', classDays: 10, remark: 'TRAINNING ONLY' };
  }

  // 2. 21 Days Training Only
  if (pkgId === 'item_12' || (daysSpecified === 21 && (fee === 6000 || categorySpecified.includes('TRAIN')))) {
    return { classType: 'TRAINNING ONLY', classDays: 21, remark: 'TRAINNING ONLY' };
  }

  // 3. 2 & 4 wh license with training (DOUBLE ~8000)
  if (pkgId === 'item_8' || categorySpecified === 'DOUBLE') {
    return { classType: 'DOUBLE', classDays: 21, remark: '' };
  }

  // 4. 4 wh license with training (SINGLE ~8000)
  if (pkgId === 'item_8_single' || (fee >= 7000 && categorySpecified === 'SINGLE')) {
    return { classType: 'SINGLE', classDays: 21, remark: '' };
  }

  // 5. 2 & 4 wh license Only (SINGLE 4500)
  if (pkgId === 'item_3' || (fee >= 4000 && fee <= 5000)) {
    return { classType: 'SINGLE', classDays: '', remark: '' };
  }

  // 6. 4 wh license Only (SINGLE 3000)
  if (pkgId === 'item_2' || (fee > 2500 && fee <= 3500)) {
    return { classType: 'SINGLE', classDays: '', remark: '' };
  }

  // 7. 2 wh license Only (SINGLE 2500)
  if (pkgId === 'item_1' || fee <= 2500) {
    return { classType: 'SINGLE', classDays: '', remark: '' };
  }

  // Default fallback
  return { classType: 'SINGLE', classDays: daysSpecified || '', remark: '' };
}

/**
 * Determine Month Name from start date or explicit parameter
 */
function determineMonth(dateInput, monthInput) {
  if (monthInput && MONTH_NAMES.indexOf(monthInput.toUpperCase()) !== -1) {
    return monthInput.toUpperCase();
  }

  if (dateInput) {
    // If date is "DD/MM/YYYY" or "YYYY-MM-DD"
    let d;
    if (typeof dateInput === 'string' && dateInput.includes('/')) {
      const parts = dateInput.split('/');
      d = new Date(parts[2], parts[1] - 1, parts[0]);
    } else {
      d = new Date(dateInput);
    }
    if (!isNaN(d.getTime())) {
      return MONTH_NAMES[d.getMonth()];
    }
  }

  return getCurrentMonthName();
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
      // YYYY-MM-DD
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
  const d = new Date(parts[2], parts[1] - 1, parts[0]);
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
