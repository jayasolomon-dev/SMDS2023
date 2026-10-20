import React, { useState, useMemo, useEffect } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Calendar,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock,
  Phone,
  Search,
  Filter,
  Car,
  BookOpen,
  UserCheck,
  Users,
  AlertCircle,
  Save,
  Sparkles,
  MapPin,
  ChevronDown,
  LayoutDashboard,
  Settings,
  Plus,
  Trash2,
  Edit2,
  Eye,
  X,
  IndianRupee,
  Wallet,
  Key,
  Lock,
  User,
  Copy,
  Check,
  EyeOff,
  LogIn,
  LogOut,
  GraduationCap,
  ArrowRight,
  ArrowLeft,
  Smartphone,
  Landmark,
  Bell,
  CreditCard,
  Receipt,
  Printer,
  Download,
  CheckCheck,
  FileText,
  BadgeCheck,
  RotateCcw
} from 'lucide-react';
import { INITIAL_STUDENTS } from './initialStudents.js';

const getTraineeUsername = (enrollmentNo) => {
  const clean = String(enrollmentNo || '').replace(/[^0-9/]/g, '') || '1';
  return `SMDS${clean}`;
};

const getTraineePassword = (enrollmentNo) => {
  const clean = String(enrollmentNo || '').replace(/[^0-9/]/g, '') || '1';
  return `smds@${clean}`;
};


const getTodayKey = () => {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const numberToIndianWords = (num) => {
  const nVal = Number(num);
  if (!nVal || isNaN(nVal) || nVal <= 0) return 'Zero Rupees Only';
  const a = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  
  const inWords = (n) => {
    if (n < 20) return a[n];
    const digit = n % 10;
    return b[Math.floor(n / 10)] + (digit ? ' ' + a[digit] : '');
  };

  let rem = Math.floor(nVal);
  let str = '';
  if (Math.floor(rem / 100000) > 0) {
    str += inWords(Math.floor(rem / 100000)) + ' Lakh ';
    rem %= 100000;
  }
  if (Math.floor(rem / 1000) > 0) {
    str += inWords(Math.floor(rem / 1000)) + ' Thousand ';
    rem %= 1000;
  }
  if (Math.floor(rem / 100) > 0) {
    str += inWords(Math.floor(rem / 100)) + ' Hundred ';
    rem %= 100;
  }
  if (rem > 0) {
    if (str !== '') str += 'and ';
    str += inWords(rem) + ' ';
  }
  return `Rupees ${str.trim()} Only`;
};

const DrivingSchoolLogo = ({ className = "w-11 h-11 sm:w-12 sm:h-12" }) => (
  <div className={`relative flex items-center justify-center shrink-0 select-none group ${className}`}>
    <img 
      src="/logo.png" 
      alt="Sri Muruga Driving School Logo" 
      className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-300 group-hover:scale-105"
      loading="eager"
    />
  </div>
);

// 7 DRIVING SCHOOL CLASS TYPES & PACKAGES (ACCORDING TO SMDS ACCOUNTS RULES)
export const DRIVING_PACKAGES = {
  item_1: {
    id: 'item_1',
    itemNo: 'ITEM #1',
    duration: 'RTO PROCESS',
    category: 'LICENCE',
    sheetCategory: 'SINGLE',
    badge: null,
    badgeBg: 'bg-slate-700 text-white',
    title: '2 wh license - 2500 (single)',
    short: '2W Licence (single)',
    full: 'Only Two Wheeler Licence (MCWG / MCWOG)',
    subtitle: 'Motorcycle with Gear & Without Gear (MCWG / MCWOG)',
    features: 'Motorcycle with Gear & Without Gear (MCWG / MCWOG)',
    defaultFee: 2500,
    days: 10,
    tag: 'Govt. Approved',
    badgePillBg: 'bg-slate-100',
    badgePillText: 'text-slate-700',
    badgePillBorder: 'border-slate-200',
    dotColor: 'bg-slate-500'
  },
  item_2: {
    id: 'item_2',
    itemNo: 'ITEM #2',
    duration: 'RTO PROCESS',
    category: 'LICENCE',
    sheetCategory: 'SINGLE',
    badge: null,
    badgeBg: 'bg-slate-700 text-white',
    title: '4 wh license - 3000 (single)',
    short: '4W Licence (single)',
    full: 'Only Four Wheeler Licence (LMV Smart Card)',
    subtitle: 'LMV Smart Card License Slot Booking & Track Escort',
    features: 'LMV Smart Card License Slot Booking & Track Escort',
    defaultFee: 3000,
    days: 10,
    tag: 'Govt. Approved',
    badgePillBg: 'bg-cyan-50',
    badgePillText: 'text-cyan-700',
    badgePillBorder: 'border-cyan-200',
    dotColor: 'bg-cyan-500'
  },
  item_3: {
    id: 'item_3',
    itemNo: 'ITEM #3',
    duration: 'RTO PROCESS',
    category: 'LICENCE',
    sheetCategory: 'DOUBLE',
    badge: 'COMBO DL',
    badgeBg: 'bg-orange-500 text-white',
    title: '2 & 4 wh license - 4500 (double)',
    short: '2W & 4W Licence (double)',
    full: 'Two Wheeler & Four Wheeler Licence Only',
    subtitle: 'LLR, Slot Booking, Document Scrutiny & RTO Test Representation',
    features: 'LLR, Slot Booking, Document Scrutiny & RTO Test Representation',
    defaultFee: 4500,
    days: 15,
    tag: 'Govt. Approved',
    badgePillBg: 'bg-purple-50',
    badgePillText: 'text-purple-700',
    badgePillBorder: 'border-purple-200',
    dotColor: 'bg-purple-500'
  },
  item_8: {
    id: 'item_8',
    itemNo: 'ITEM #4',
    duration: '21 DAYS',
    category: 'PACKAGE',
    sheetCategory: 'DOUBLE',
    badge: 'BEST VALUE • MOST POPULAR',
    badgeBg: 'bg-amber-500 text-white',
    title: '2 & 4 wh license with traning - 8000 (double)',
    short: '2W & 4W + Training (double)',
    full: 'Four Wheeler Training with 2 & 4 Wheeler Licence',
    subtitle: 'Individual 1-on-1 Training • Flexible Installments • 2 Pre-RTO Test Trials Included',
    features: 'Individual 1-on-1 Training • Flexible Installments • 2 Pre-RTO Test Trials Included',
    defaultFee: 8000,
    days: 21,
    tag: 'Govt. Approved',
    badgePillBg: 'bg-emerald-50',
    badgePillText: 'text-emerald-700',
    badgePillBorder: 'border-emerald-200',
    dotColor: 'bg-emerald-500'
  },
  item_8_single: {
    id: 'item_8_single',
    itemNo: 'ITEM #5',
    duration: '21 DAYS',
    category: 'PACKAGE',
    sheetCategory: 'SINGLE',
    badge: 'CAR SPECIALIST',
    badgeBg: 'bg-amber-600 text-white',
    title: '4 wh license with training - 8000 (single)',
    short: '4W + Training (single)',
    full: 'Four Wheeler Training with 4 Wheeler Licence Only',
    subtitle: 'Individual 1-on-1 Training • Flexible Installments • Pre-RTO Test Trial Included',
    features: 'Individual 1-on-1 Training • Flexible Installments • Pre-RTO Test Trial Included',
    defaultFee: 8000,
    days: 21,
    tag: 'Govt. Approved',
    badgePillBg: 'bg-blue-50',
    badgePillText: 'text-blue-700',
    badgePillBorder: 'border-blue-200',
    dotColor: 'bg-blue-500'
  },
  item_12: {
    id: 'item_12',
    itemNo: 'ITEM #6',
    duration: '21 DAYS',
    category: 'TRAINING',
    sheetCategory: 'TRAINNING ONLY',
    badge: 'SKILL MASTERY',
    badgeBg: 'bg-orange-500 text-white',
    title: '21 days training - 6000 (training only)',
    short: '21D Training (training only)',
    full: 'Four Wheeler Training Only - 21 Days',
    subtitle: 'Full 21 Days 40-Min Daily On-Road & Highway Practice • Flexible Payment Options',
    features: 'Full 21 Days 40-Min Daily On-Road & Highway Practice • Flexible Payment Options',
    defaultFee: 6000,
    days: 21,
    tag: 'Govt. Approved',
    badgePillBg: 'bg-orange-50',
    badgePillText: 'text-orange-700',
    badgePillBorder: 'border-orange-200',
    dotColor: 'bg-orange-500'
  },
  item_13: {
    id: 'item_13',
    itemNo: 'ITEM #7',
    duration: '10 DAYS',
    category: 'TRAINING',
    sheetCategory: 'TRAINNING ONLY',
    badge: 'FAST TRACK REFRESHER',
    badgeBg: 'bg-amber-600 text-white',
    title: '10 days traning - 4000 (training only)',
    short: '10D Training (training only)',
    full: 'Four Wheeler Training Only (Individual - 10 Days)',
    subtitle: 'KMCH, Sulur Pirivu & Traffic Practice for Existing License Holders',
    features: 'KMCH, Sulur Pirivu & Traffic Practice for Existing License Holders',
    defaultFee: 4000,
    days: 10,
    tag: 'Govt. Approved',
    badgePillBg: 'bg-amber-50',
    badgePillText: 'text-amber-700',
    badgePillBorder: 'border-amber-200',
    dotColor: 'bg-amber-500'
  }
};

export const CLASS_TYPES = {
  ...DRIVING_PACKAGES,
  '21d_license': DRIVING_PACKAGES.item_8,
  '21d_training': DRIVING_PACKAGES.item_12,
  '10d_training': DRIVING_PACKAGES.item_13,
  'single': DRIVING_PACKAGES.item_2,
  'double': DRIVING_PACKAGES.item_8,
  'training_only': DRIVING_PACKAGES.item_12
};

export const getPackageDetails = (typeId) => {
  if (DRIVING_PACKAGES[typeId]) return DRIVING_PACKAGES[typeId];
  if (CLASS_TYPES[typeId]) return CLASS_TYPES[typeId];
  if (typeId === '21d_license') return DRIVING_PACKAGES.item_8;
  if (typeId === '21d_training') return DRIVING_PACKAGES.item_12;
  if (typeId === '10d_training') return DRIVING_PACKAGES.item_13;
  return DRIVING_PACKAGES.item_8;
};

// Google Apps Script Live Sync Helper
export const syncToGoogleSheets = async (action, data) => {
  const url = localStorage.getItem('smds_sheets_sync_url') || (typeof window !== 'undefined' ? window.SMDS_APPSCRIPT_URL : null);
  if (!url) {
    console.info('Google Sheets Live Sync URL not set. Trainee saved locally in portal.');
    return;
  }
  try {
    await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action, ...data })
    });
    console.log('✅ Dispatched live sync to Google Sheets:', action, data?.name || data?.sNo);
  } catch (err) {
    console.warn('⚠️ Google Sheets live sync network error:', err);
  }
};


const getStudentAvatarBg = (student) => {
  const init = student?.initials || (student?.name ? student.name.slice(0, 2).toUpperCase() : 'ST');
  if (init === 'AK') return 'bg-[#F97316]';
  if (init === 'PR') return 'bg-[#2563EB]';
  if (init === 'MA') return 'bg-[#10B981]';
  if (init === 'DS') return 'bg-[#F43F5E]';
  if (init === 'VT') return 'bg-[#8B5CF6]';
  if (init === 'SL') return 'bg-[#F59E0B]';
  if (init === 'RN') return 'bg-[#06B6D4]';
  return 'bg-[#F97316]';
};

const COLORS = [
  'from-orange-400 to-amber-500', 'from-blue-400 to-indigo-500', 
  'from-emerald-400 to-teal-500', 'from-rose-400 to-pink-500',
  'from-purple-400 to-fuchsia-500', 'from-cyan-400 to-blue-500'
];

const TIME_SLOTS = [
  "06:00 AM", "06:30 AM", "07:00 AM", "07:30 AM", 
  "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", 
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", 
  "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", 
  "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", 
  "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", 
  "06:00 PM"
];

const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAY_HEADERS = [
  { short: 'Sun', full: 'Sunday' },
  { short: 'Mon', full: 'Monday' },
  { short: 'Tue', full: 'Tuesday' },
  { short: 'Wed', full: 'Wednesday' },
  { short: 'Thu', full: 'Thursday' },
  { short: 'Fri', full: 'Friday' },
  { short: 'Sat', full: 'Saturday' }
];
const YEARS_LIST = Array.from({ length: 151 }, (_, i) => 1950 + i); // 1950 to 2100 (All Available Years)

const normalizeStudent = (s) => {
  let t = s.type;
  if (!t || (!DRIVING_PACKAGES[t] && !CLASS_TYPES[t])) {
    if (s.course?.includes('10 Days')) {
      t = 'item_13';
    } else if (t === 'theory') {
      t = 'item_12';
    } else {
      t = 'item_8';
    }
  }
  let cleanCourse = s.course ? s.course.replace(/ - \d+ Days/, '') : 'Four Wheeler (Car)';
  if (cleanCourse.includes('Two Wheeler') || cleanCourse === 'LMV (Car)' || cleanCourse.includes('Both')) {
    cleanCourse = 'Four Wheeler (Car)';
  }
  const pkgDetails = getPackageDetails(t);
  const days = pkgDetails?.days || 21;
  // Preserve and normalize Double Series 00/00
  let enrNo = String(s.enrollmentNo || '').trim();
  if (enrNo.includes('/')) {
    const parts = enrNo.split('/');
    const p1 = String(parseInt(parts[0], 10) || 1).padStart(2, '0');
    const p2 = String(parseInt(parts[1], 10) || 1).padStart(2, '0');
    enrNo = `${p1}/${p2}`;
  } else if (!enrNo) {
    const digits = String(s.id || '').replace(/\D/g, '');
    enrNo = digits ? String(parseInt(digits, 10)).padStart(2, '0') + '/01' : '01/01';
  } else {
    const m = s.enrollmentDate ? parseInt(s.enrollmentDate.substring(5, 7), 10) || 1 : 1;
    const p1 = String(parseInt(enrNo, 10) || 1).padStart(2, '0');
    const p2 = String(m).padStart(2, '0');
    enrNo = `${p1}/${p2}`;
  }
  const username = s.username || `SMDS${enrNo}`;
  const password = s.password || `smds@${enrNo}`;
  const todayKey = getTodayKey();

  let log = Array.isArray(s.attendanceLog) ? s.attendanceLog : [];
  const isPresentToday = (s.status === 'present' || log.some(item => item.date === todayKey)) && s.lastCheckInDate === todayKey;
  const lastCheckInDate = s.lastCheckInDate || null;
  const lastCheckInTime = s.lastCheckInTime || null;

  const currentPaid = Number(s.fees?.paid !== undefined ? s.fees.paid : 0);
  const currentTotal = Number(s.fees?.total || (pkgDetails?.defaultFee || 8000));
  const feeHistory = Array.isArray(s.fees?.history) && s.fees.history.length > 0
    ? s.fees.history
    : (currentPaid > 0 ? [{
        id: `pay_init_${enrNo}`,
        amount: currentPaid,
        method: currentPaid === currentTotal ? 'UPI' : 'Cash',
        date: '2026-10-01',
        note: currentPaid === currentTotal ? 'Full Tuition Settled' : 'Advance Fee Paid'
      }] : []);

  const normalizedFees = {
    total: currentTotal,
    paid: currentPaid,
    history: feeHistory
  };

  const enrollmentDate = s.enrollmentDate || s.fees?.history?.[0]?.date || '2026-10-01';

  return { 
    ...s, 
    enrollmentDate,
    enrollmentNo: enrNo,
    username,
    password,
    time: s.time || null,
    type: t, 
    course: cleanCourse,
    attendanceLog: log,
    lastCheckInDate,
    lastCheckInTime,
    status: isPresentToday ? 'present' : (s.status === 'absent' ? 'absent' : 'pending'),
    stats: {
      total: s.stats?.total || days,
      attended: s.stats?.attended || 0,
      missed: s.stats?.missed || 0
    },
    fees: normalizedFees
  };
};

export default function App() {
  // Authentication & Role Management ('admin' | 'trainee' | null)
  const [authRole, setAuthRole] = useState(() => {
    try {
      const saved = localStorage.getItem('smds_auth_role');
      return (saved === 'admin' || saved === 'trainee') ? saved : 'admin';
    } catch {
      return 'admin';
    }
  });

  const [currentTab, setCurrentTab] = useState(() => {
    try {
      const saved = localStorage.getItem('smds_auth_role');
      if (saved === 'trainee') return 'portal';
      return 'admin';
    } catch {
      return 'admin';
    }
  });

  const [adminSubTab, setAdminSubTab] = useState('directory'); // 'directory' | 'schedule' | 'accounts'
  const [loggedInTrainee, setLoggedInTrainee] = useState(null); // student object or null

  // Common Unified Login States (Admin & Trainee Roles)
  const [loginRoleTab, setLoginRoleTab] = useState('admin'); // 'admin' | 'trainee'
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  const [showModalPass, setShowModalPass] = useState(false);
  const [copiedKey, setCopiedKey] = useState(null);
  const [scheduleDate, setScheduleDate] = useState(new Date());
  const [showAllAttendanceLogs, setShowAllAttendanceLogs] = useState(false);

  // Accounts Dashboard & Filtering States
  const [accountsSearchTerm, setAccountsSearchTerm] = useState('');
  const [accountsPackageFilter, setAccountsPackageFilter] = useState('all');
  const [isAccountsPackageFilterOpen, setIsAccountsPackageFilterOpen] = useState(false);
  const [accountsStatusFilter, setAccountsStatusFilter] = useState('all'); // 'all' | 'due' | 'settled'
  const [receiptModal, setReceiptModal] = useState({ isOpen: false, student: null });

  // Accounts Period & Calendar States (User-friendly Months & Year options)
  const [accountsPeriodScope, setAccountsPeriodScope] = useState('monthly'); // 'monthly' | 'yearly' | 'all'
  const [accountsSelectedMonth, setAccountsSelectedMonth] = useState(9); // 0-indexed: 9 = October
  const [accountsSelectedYear, setAccountsSelectedYear] = useState(2026);

  // Trainee Directory Calendar Filter States
  const [traineeFilterMonth, setTraineeFilterMonth] = useState('all'); // 'all' | 'YYYY-MM'
  const [traineeCalDate, setTraineeCalDate] = useState(new Date(2026, 9, 1)); // October 2026

  // Daily Attendance Master States
  const [attendanceDate, setAttendanceDate] = useState(new Date(2026, 9, 14)); // 14 Oct 2026
  const [attendanceSearchTerm, setAttendanceSearchTerm] = useState('');
  const [attendanceStatusFilter, setAttendanceStatusFilter] = useState('all'); // 'all' | 'present' | 'absent' | 'pending'
  const [attendanceViewMode, setAttendanceViewMode] = useState('sheet'); // 'sheet' | 'log'

  // Shared Google Calendar Modal State
  const [showFullCalendar, setShowFullCalendar] = useState(false);
  const [calViewDate, setCalViewDate] = useState(new Date(2026, 9, 14));
  const [calViewMode, setCalViewMode] = useState('month'); // 'month' | 'year'
  const [calContext, setCalContext] = useState('schedule'); // 'schedule' | 'trainee' | 'accounts' | 'attendance'
  
  // LocalStorage persistence for Trainees & Attendance
  const [students, setStudents] = useState(() => {
    try {
      const saved = localStorage.getItem('smds_trainees_data_v9');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= 50) {
          const seen = new Set();
          return parsed.map((s, idx) => {
            const norm = normalizeStudent(s);
            if (seen.has(norm.id)) {
              norm.id = `${norm.id}_${idx + 1}`;
            }
            seen.add(norm.id);
            if (!norm.enrollmentNo) {
              norm.enrollmentNo = String(idx + 1);
            }
            norm.username = norm.username || `SMDS${norm.enrollmentNo}`;
            norm.password = norm.password || `smds@${norm.enrollmentNo}`;
            return norm;
          });
        }
      }
      return INITIAL_STUDENTS;
    } catch {
      return INITIAL_STUDENTS;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('smds_trainees_data_v9', JSON.stringify(students));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  }, [students]);

  // Restore Trainee session from localStorage on reload
  useEffect(() => {
    try {
      const savedRole = localStorage.getItem('smds_auth_role');
      const savedId = localStorage.getItem('smds_auth_trainee_id');
      if (savedRole === 'trainee' && savedId && !loggedInTrainee && students && students.length > 0) {
        const found = students.find(s => 
          s.id === savedId || 
          String(s.enrollmentNo) === String(savedId) || 
          (s.username && s.username.toUpperCase() === String(savedId).toUpperCase())
        );
        if (found) {
          setLoggedInTrainee(found);
          setCurrentTab('portal');
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, [students]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [adminListFilter, setAdminListFilter] = useState('all');
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const isSameDay = (d1, d2) => {
    if (!d1 || !d2) return false;
    return d1.getFullYear() === d2.getFullYear() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getDate() === d2.getDate();
  };

  // Google Calendar 42-cell matrix (6 weeks × 7 days)
  const calendarGridDays = useMemo(() => {
    const year = calViewDate.getFullYear();
    const month = calViewDate.getMonth();
    
    const firstDayOfWeek = new Date(year, month, 1).getDay(); // 0 = Sunday
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    
    const days = [];
    
    // Previous month padding
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      const d = daysInPrevMonth - i;
      const dateObj = new Date(year, month - 1, d);
      days.push({
        date: dateObj,
        dayNum: d,
        isCurrentMonth: false,
        monthType: 'prev'
      });
    }
    
    // Current month days
    for (let d = 1; d <= daysInMonth; d++) {
      const dateObj = new Date(year, month, d);
      days.push({
        date: dateObj,
        dayNum: d,
        isCurrentMonth: true,
        monthType: 'curr'
      });
    }
    
    // Next month padding to fill exactly 42 cells (6 rows × 7 columns like Google Calendar)
    const remaining = 42 - days.length;
    for (let d = 1; d <= remaining; d++) {
      const dateObj = new Date(year, month + 1, d);
      days.push({
        date: dateObj,
        dayNum: d,
        isCurrentMonth: false,
        monthType: 'next'
      });
    }
    
    return days;
  }, [calViewDate]);

  const attendanceHistory = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem('smds_attendance_history_v9') || '{}');
    } catch {
      return {};
    }
  }, [showFullCalendar, scheduleDate]);

  const jumpToToday = () => {
    const now = new Date();
    setScheduleDate(now);
    setCalViewDate(now);
    showToast('Today');
  };

  const isTodayDate = (d) => {
    if (!d) return false;
    const now = new Date();
    return d.getDate() === now.getDate() && d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  };

  // Admin / Action Modals State
  const [modalConfig, setModalConfig] = useState({ isOpen: false, mode: 'add', data: null });
  const [formData, setFormData] = useState({
    name: '', phone: '', course: 'Light Motor Vehicle (LMV)', type: 'item_8', time: '06:00 AM', 
    totalFees: 8000, paidFees: 0, paymentAmount: '',
    paymentMethod: 'UPI', paymentDate: getTodayKey(), paymentNote: ''
  });

  // Auto-fill Total Fees based on Class Type selection
  useEffect(() => {
    if (modalConfig.mode === 'add') {
      const classCfg = getPackageDetails(formData.type);
      setFormData(prev => ({
        ...prev,
        totalFees: classCfg?.defaultFee || 8000
      }));
    }
  }, [formData.type, modalConfig.mode]);

  // Selected month and year keys for Accounts
  const selectedMonthKey = `${accountsSelectedYear}-${String(accountsSelectedMonth + 1).padStart(2, '0')}`;
  const selectedYearKey = `${accountsSelectedYear}`;

  // Trainees count enrolled in the active Trainee Directory calendar month
  const traineesForTraineeCalMonth = useMemo(() => {
    const mKey = `${traineeCalDate.getFullYear()}-${String(traineeCalDate.getMonth() + 1).padStart(2, '0')}`;
    return students.filter(s => (s.enrollmentDate || '').startsWith(mKey));
  }, [students, traineeCalDate]);

  const filteredStudents = useMemo(() => {
    return students.filter(student => {
      const q = searchTerm.toLowerCase();
      const uName = (student.username || getTraineeUsername(student.enrollmentNo)).toLowerCase();
      const pkg = getPackageDetails(student.type);
      const matchesSearch = !q ||
                            student.name.toLowerCase().includes(q) || 
                            student.id.toLowerCase().includes(q) ||
                            (student.enrollmentNo && String(student.enrollmentNo).toLowerCase().includes(q)) ||
                            uName.includes(q) ||
                            (student.phone && student.phone.includes(q)) ||
                            (pkg?.short && pkg.short.toLowerCase().includes(q));

      // Month filter from Trainee Directory Calendar
      const matchesMonth = traineeFilterMonth === 'all' || 
                           (student.enrollmentDate || '').startsWith(traineeFilterMonth);

      return matchesSearch && matchesMonth;
    });
  }, [students, searchTerm, traineeFilterMonth]);

  const todayKey = getTodayKey();
  const stats = useMemo(() => {
    const total = students.length;
    const present = students.filter(s => s.lastCheckInDate === todayKey || s.status === 'present').length;
    const pending = total - present;
    const withDue = students.filter(s => (Number(s.fees?.total || 0)) > (Number(s.fees?.paid || 0))).length;
    return { total, present, pending, withDue };
  }, [students, todayKey]);

  const totalFeeDueAmount = useMemo(() => {
    return students.reduce((acc, s) => {
      const tot = Number(s.fees?.total || 0);
      const paid = Number(s.fees?.paid || 0);
      return acc + Math.max(0, tot - paid);
    }, 0);
  }, [students]);

  // Trainee Directory Display: Strictly sorted Alphabetically A to Z by name
  const adminDisplayStudents = useMemo(() => {
    const list = filteredStudents.filter(student => {
      const isPresentToday = student.lastCheckInDate === todayKey || student.status === 'present';
      if (adminListFilter === 'all') return true;
      if (adminListFilter === 'present') return isPresentToday;
      if (adminListFilter === 'pending') return !isPresentToday;
      if (adminListFilter === 'due') return (Number(student.fees?.total || 0)) > (Number(student.fees?.paid || 0));
      return true;
    });
    // Alphabetical order (A to Z) as requested by user
    return [...list].sort((a, b) => (a.name || '').localeCompare(b.name || '', undefined, { sensitivity: 'base' }));
  }, [filteredStudents, adminListFilter, todayKey]);

  // Accounts Financial Analytics: Dynamic Monthly, Yearly & All-Time calculations
  const accountsStats = useMemo(() => {
    // 1. All-Time totals
    const allBilled = students.reduce((sum, s) => sum + Number(s.fees?.total || 0), 0);
    const allPaid = students.reduce((sum, s) => sum + Number(s.fees?.paid || 0), 0);
    const allDue = students.reduce((sum, s) => {
      const tot = Number(s.fees?.total || 0);
      const paid = Number(s.fees?.paid || 0);
      return sum + Math.max(0, tot - paid);
    }, 0);
    const allSettledCount = students.filter(s => {
      const tot = Number(s.fees?.total || 0);
      const paid = Number(s.fees?.paid || 0);
      return tot > 0 && paid >= tot;
    }).length;
    const allDueCount = students.length - allSettledCount;

    // 2. Monthly totals (for selectedMonthKey, e.g. '2026-10')
    const curMonthSuffix = `/${String(accountsSelectedMonth + 1).padStart(2, '0')}`;
    const monthlyStudents = students.filter(s => (s.enrollmentDate || '').startsWith(selectedMonthKey) || (s.enrollmentNo && String(s.enrollmentNo).endsWith(curMonthSuffix)));
    const monthlyBilled = monthlyStudents.reduce((sum, s) => sum + Number(s.fees?.total || 0), 0);
    const monthlyPaid = students.reduce((sum, s) => {
      const hist = Array.isArray(s.fees?.history) ? s.fees.history : [];
      const mHist = hist.filter(h => (h.date || '').startsWith(selectedMonthKey));
      return sum + mHist.reduce((acc, h) => acc + Number(h.amount || 0), 0);
    }, 0);
    const monthlyDue = monthlyStudents.reduce((sum, s) => {
      const tot = Number(s.fees?.total || 0);
      const paid = Number(s.fees?.paid || 0);
      return sum + Math.max(0, tot - paid);
    }, 0);
    const monthlySettledCount = monthlyStudents.filter(s => {
      const tot = Number(s.fees?.total || 0);
      const paid = Number(s.fees?.paid || 0);
      return tot > 0 && paid >= tot;
    }).length;
    const monthlyDueCount = monthlyStudents.length - monthlySettledCount;

    // 3. Yearly totals (for selectedYearKey, e.g. '2026')
    const yearlyStudents = students.filter(s => (s.enrollmentDate || '').startsWith(selectedYearKey));
    const yearlyBilled = yearlyStudents.reduce((sum, s) => sum + Number(s.fees?.total || 0), 0);
    const yearlyPaid = students.reduce((sum, s) => {
      const hist = Array.isArray(s.fees?.history) ? s.fees.history : [];
      const yHist = hist.filter(h => (h.date || '').startsWith(selectedYearKey));
      return sum + yHist.reduce((acc, h) => acc + Number(h.amount || 0), 0);
    }, 0);
    const yearlyDue = yearlyStudents.reduce((sum, s) => {
      const tot = Number(s.fees?.total || 0);
      const paid = Number(s.fees?.paid || 0);
      return sum + Math.max(0, tot - paid);
    }, 0);
    const yearlySettledCount = yearlyStudents.filter(s => {
      const tot = Number(s.fees?.total || 0);
      const paid = Number(s.fees?.paid || 0);
      return tot > 0 && paid >= tot;
    }).length;
    const yearlyDueCount = yearlyStudents.length - yearlySettledCount;

    // Collection Rates
    const monthlyRate = monthlyBilled > 0 ? ((monthlyPaid / monthlyBilled) * 100).toFixed(1) : '0';
    const yearlyRate = yearlyBilled > 0 ? ((yearlyPaid / yearlyBilled) * 100).toFixed(1) : '0';
    const allRate = allBilled > 0 ? ((allPaid / allBilled) * 100).toFixed(1) : '0';

    // Active KPI metrics depending on accountsPeriodScope
    let displayBilled = allBilled;
    let displayPaid = allPaid;
    let displayDue = allDue;
    let displaySettled = allSettledCount;
    let displayDueCount = allDueCount;
    let displayRate = allRate;
    let displayStudentCount = students.length;

    if (accountsPeriodScope === 'monthly') {
      displayBilled = monthlyBilled;
      displayPaid = monthlyPaid;
      displayDue = monthlyDue;
      displaySettled = monthlySettledCount;
      displayDueCount = monthlyDueCount;
      displayRate = monthlyRate;
      displayStudentCount = monthlyStudents.length;
    } else if (accountsPeriodScope === 'yearly') {
      displayBilled = yearlyBilled;
      displayPaid = yearlyPaid;
      displayDue = yearlyDue;
      displaySettled = yearlySettledCount;
      displayDueCount = yearlyDueCount;
      displayRate = yearlyRate;
      displayStudentCount = yearlyStudents.length;
    }

    return {
      // Dynamic totals based on selected scope
      totalBilled: displayBilled,
      totalPaid: displayPaid,
      totalDue: displayDue,
      settledCount: displaySettled,
      dueCount: displayDueCount,
      collectionRate: displayRate,
      studentCount: displayStudentCount,
      // Dedicated Monthly breakdown for comparison
      monthly: {
        billed: monthlyBilled,
        paid: monthlyPaid,
        due: monthlyDue,
        rate: monthlyRate,
        traineesCount: monthlyStudents.length,
        settledCount: monthlySettledCount,
        dueCount: monthlyDueCount
      },
      // Dedicated Yearly breakdown for comparison
      yearly: {
        billed: yearlyBilled,
        paid: yearlyPaid,
        due: yearlyDue,
        rate: yearlyRate,
        traineesCount: yearlyStudents.length,
        settledCount: yearlySettledCount,
        dueCount: yearlyDueCount
      },
      // All-time breakdown
      allTime: {
        billed: allBilled,
        paid: allPaid,
        due: allDue,
        rate: allRate,
        traineesCount: students.length,
        settledCount: allSettledCount,
        dueCount: allDueCount
      }
    };
  }, [students, selectedMonthKey, selectedYearKey, accountsPeriodScope]);

  const accountsDisplayStudents = useMemo(() => {
    const curMonthSuffix = `/${String(accountsSelectedMonth + 1).padStart(2, '0')}`;

    return students.filter(student => {
      const q = accountsSearchTerm.toLowerCase().trim();
      const uName = (student.username || getTraineeUsername(student.enrollmentNo)).toLowerCase();
      const pkg = getPackageDetails(student.type);
      const matchesSearch = !q ||
                            student.name.toLowerCase().includes(q) || 
                            student.id.toLowerCase().includes(q) ||
                            (student.enrollmentNo && String(student.enrollmentNo).toLowerCase().includes(q)) ||
                            uName.includes(q) ||
                            (student.phone && student.phone.includes(q)) ||
                            (pkg?.title && pkg.title.toLowerCase().includes(q)) ||
                            (pkg?.short && pkg.short.toLowerCase().includes(q));

      const matchesPackage = accountsPackageFilter === 'all' || 
                            student.type === accountsPackageFilter ||
                            (accountsPackageFilter === 'item_8' && student.type === '21d_license') ||
                            (accountsPackageFilter === 'item_12' && student.type === '21d_training') ||
                            (accountsPackageFilter === 'item_13' && student.type === '10d_training');

      // Month/Period Filtering based on top ledger ribbon
      const matchesPeriod = accountsStatusFilter === 'all_time' ? true : (
        accountsPeriodScope === 'monthly'
          ? ((student.enrollmentDate || '').startsWith(selectedMonthKey) || (student.enrollmentNo && String(student.enrollmentNo).endsWith(curMonthSuffix)))
          : accountsPeriodScope === 'yearly'
          ? ((student.enrollmentDate || '').startsWith(selectedYearKey))
          : true
      );

      const balance = (Number(student.fees?.total || 0)) - (Number(student.fees?.paid || 0));
      const isSettled = Number(student.fees?.total || 0) > 0 && balance <= 0;
      const matchesStatus = (accountsStatusFilter === 'all' || accountsStatusFilter === 'all_time') ||
                            (accountsStatusFilter === 'due' && balance > 0) ||
                            (accountsStatusFilter === 'settled' && isSettled);

      return matchesPeriod && matchesSearch && matchesPackage && matchesStatus;
    });
  }, [students, accountsSearchTerm, accountsPackageFilter, accountsStatusFilter, accountsPeriodScope, accountsSelectedMonth, selectedMonthKey, selectedYearKey]);

  const handleQuickLog = (student, targetStatus) => {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
    const dateFormatted = now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
    const existingLog = Array.isArray(student.attendanceLog) ? student.attendanceLog : [];
    const filteredLog = existingLog.filter(l => l.date !== todayKey);

    let updatedStudent;
    if (targetStatus === 'present') {
      const newEntry = {
        date: todayKey,
        formattedDate: dateFormatted,
        time: timeStr,
        slot: student.time,
        status: 'present',
        timestamp: now.getTime()
      };
      const wasPresent = student.status === 'present' || student.lastCheckInDate === todayKey;
      const newAttended = Math.min((student.stats?.total || 21), (student.stats?.attended || 0) + (wasPresent ? 0 : 1));
      updatedStudent = {
        ...student,
        status: 'present',
        lastCheckInDate: todayKey,
        lastCheckInTime: timeStr,
        attendanceLog: [newEntry, ...filteredLog],
        stats: { ...student.stats, attended: newAttended }
      };
      showToast(`Marked ${student.name} as Present ✓`);
    } else if (targetStatus === 'absent') {
      const newEntry = {
        date: todayKey,
        formattedDate: dateFormatted,
        time: 'Missed Session',
        slot: student.time,
        status: 'absent',
        timestamp: now.getTime()
      };
      const wasPresent = student.status === 'present' || student.lastCheckInDate === todayKey;
      const newAttended = Math.max(0, (student.stats?.attended || 0) - (wasPresent ? 1 : 0));
      const newMissed = (student.stats?.missed || 0) + (student.status === 'absent' ? 0 : 1);
      updatedStudent = {
        ...student,
        status: 'absent',
        lastCheckInDate: todayKey,
        lastCheckInTime: 'Absent',
        attendanceLog: [newEntry, ...filteredLog],
        stats: { ...student.stats, attended: newAttended, missed: newMissed }
      };
      showToast(`Marked ${student.name} as Absent`);
    } else {
      // Pending
      const wasPresent = student.status === 'present' || student.lastCheckInDate === todayKey;
      const newAttended = Math.max(0, (student.stats?.attended || 0) - (wasPresent ? 1 : 0));
      updatedStudent = {
        ...student,
        status: 'pending',
        lastCheckInDate: null,
        lastCheckInTime: null,
        attendanceLog: filteredLog,
        stats: { ...student.stats, attended: newAttended }
      };
      showToast(`Marked ${student.name} as Pending`);
    }

    setStudents(prev => prev.map(s => s.id === updatedStudent.id ? updatedStudent : s));
    if (loggedInTrainee && loggedInTrainee.id === updatedStudent.id) {
      setLoggedInTrainee(updatedStudent);
    }
    try {
      const history = JSON.parse(localStorage.getItem('smds_attendance_history_v9') || '{}');
      if (!history[todayKey]) history[todayKey] = [];
      const idx = history[todayKey].findIndex(h => h.id === updatedStudent.id);
      if (targetStatus === 'pending') {
        if (idx >= 0) history[todayKey].splice(idx, 1);
      } else {
        const item = { id: updatedStudent.id, status: targetStatus, time: updatedStudent.time, checkInTime: updatedStudent.lastCheckInTime };
        if (idx >= 0) history[todayKey][idx] = item;
        else history[todayKey].push(item);
      }
      localStorage.setItem('smds_attendance_history_v9', JSON.stringify(history));
    } catch (e) {
      console.error(e);
    }
  };

  // Date Key for the selected Attendance Date (YYYY-MM-DD)
  const attendanceDateKey = useMemo(() => {
    const y = attendanceDate.getFullYear();
    const m = String(attendanceDate.getMonth() + 1).padStart(2, '0');
    const d = String(attendanceDate.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }, [attendanceDate]);

  // Helper: Retrieve status and log info for a student on any dateKey
  const getTraineeAttendanceForDate = (student, dateKey) => {
    const log = Array.isArray(student.attendanceLog) ? student.attendanceLog.find(l => l.date === dateKey) : null;
    if (log) {
      const validTime = (log.time && log.time !== 'Absent' && log.time !== 'Missed Session') 
        ? log.time 
        : (student.lastCheckInTime && student.lastCheckInTime !== 'Absent' ? student.lastCheckInTime : (log.slot || student.time || '—'));
      return {
        status: log.status,
        time: validTime,
        slot: log.slot || student.time || 'Unscheduled',
        formattedDate: log.formattedDate || dateKey,
        isRecorded: true
      };
    }
    const history = attendanceHistory[dateKey];
    if (history) {
      const entry = history.find(h => h.id === student.id);
      if (entry) {
        const validTime = (entry.checkInTime && entry.checkInTime !== 'Absent') 
          ? entry.checkInTime 
          : (entry.time || student.time || '—');
        return {
          status: entry.status,
          time: validTime,
          slot: entry.time || student.time || 'Unscheduled',
          formattedDate: dateKey,
          isRecorded: true
        };
      }
    }
    if (dateKey === todayKey && (student.status === 'present' || (student.lastCheckInDate === todayKey && student.status !== 'absent'))) {
      return {
        status: 'present',
        time: student.lastCheckInTime || student.time || '—',
        slot: student.time || 'Unscheduled',
        formattedDate: dateKey,
        isRecorded: true
      };
    }
    if (dateKey === todayKey && student.status === 'absent') {
      return {
        status: 'absent',
        time: (student.lastCheckInTime && student.lastCheckInTime !== 'Absent') ? student.lastCheckInTime : 'Absent',
        slot: student.time || 'Unscheduled',
        formattedDate: dateKey,
        isRecorded: true
      };
    }
    return {
      status: 'pending',
      time: student.time || '—',
      slot: student.time || 'Unscheduled',
      formattedDate: dateKey,
      isRecorded: false
    };
  };

  // KPI Statistics for the selected Attendance Date
  const attendanceDateStats = useMemo(() => {
    let presentCount = 0;
    let absentCount = 0;
    let pendingCount = 0;

    students.forEach(s => {
      const rec = getTraineeAttendanceForDate(s, attendanceDateKey);
      if (rec.status === 'present') presentCount++;
      else if (rec.status === 'absent') absentCount++;
      else pendingCount++;
    });

    const total = students.length;
    const turnoutRate = total > 0 ? Math.round((presentCount / total) * 100) : 0;
    const absenteeRate = total > 0 ? Math.round((absentCount / total) * 100) : 0;

    return {
      total,
      presentCount,
      absentCount,
      pendingCount,
      turnoutRate,
      absenteeRate
    };
  }, [students, attendanceDateKey, attendanceHistory, todayKey]);

  // Filtered Students list for Attendance Sheet
  const filteredAttendanceStudents = useMemo(() => {
    return students.filter(student => {
      const q = attendanceSearchTerm.toLowerCase().trim();
      const uName = (student.username || getTraineeUsername(student.enrollmentNo)).toLowerCase();
      const pkg = getPackageDetails(student.type);
      const matchesSearch = !q ||
        student.name.toLowerCase().includes(q) ||
        student.id.toLowerCase().includes(q) ||
        (student.enrollmentNo && String(student.enrollmentNo).toLowerCase().includes(q)) ||
        uName.includes(q) ||
        (student.phone && student.phone.includes(q)) ||
        (student.time && student.time.toLowerCase().includes(q)) ||
        (pkg?.short && pkg.short.toLowerCase().includes(q));

      const rec = getTraineeAttendanceForDate(student, attendanceDateKey);
      const matchesStatus = attendanceStatusFilter === 'all' || rec.status === attendanceStatusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [students, attendanceSearchTerm, attendanceStatusFilter, attendanceDateKey, attendanceHistory, todayKey]);

  // Chronological Daily Attendance Logs for the selected date
  const attendanceDateLogs = useMemo(() => {
    const list = [];
    students.forEach(s => {
      const rec = getTraineeAttendanceForDate(s, attendanceDateKey);
      if (rec.isRecorded && rec.status !== 'pending') {
        const validTime = (rec.time && rec.time !== 'Absent' && rec.time !== 'Missed Session')
          ? rec.time
          : ((s.lastCheckInTime && s.lastCheckInTime !== 'Absent') ? s.lastCheckInTime : (rec.slot || s.time || '10:00 AM'));
        list.push({
          id: s.id,
          name: s.name,
          enrollmentNo: s.enrollmentNo || s.id,
          course: CLASS_TYPES[s.type]?.short || s.course,
          slot: rec.slot,
          time: validTime,
          status: rec.status,
          avatarBg: getStudentAvatarBg(s)
        });
      }
    });
    return list;
  }, [students, attendanceDateKey, attendanceHistory, todayKey]);

  // Mark Attendance for a trainee on the selected date
  const handleMarkAttendanceForDate = (studentId, targetStatus, customTime = null) => {
    const targetDateObj = attendanceDate;
    const targetKey = attendanceDateKey;
    const dateFormatted = targetDateObj.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
    const now = new Date();
    const timeStr = customTime || now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });

    setStudents(prevStudents => {
      return prevStudents.map(student => {
        if (student.id !== studentId) return student;

        const existingLog = Array.isArray(student.attendanceLog) ? student.attendanceLog : [];
        const filteredLog = existingLog.filter(l => l.date !== targetKey);

        let newLog = [...filteredLog];
        let newStatus = student.status;
        let lastDate = student.lastCheckInDate;
        let lastTime = student.lastCheckInTime;

        if (targetStatus === 'present') {
          const entry = {
            date: targetKey,
            formattedDate: dateFormatted,
            time: timeStr,
            slot: student.time || '06:00 AM',
            status: 'present',
            timestamp: targetDateObj.getTime()
          };
          newLog = [entry, ...filteredLog];
          if (targetKey === todayKey) {
            newStatus = 'present';
            lastDate = targetKey;
            lastTime = timeStr;
          }
        } else if (targetStatus === 'absent') {
          const entry = {
            date: targetKey,
            formattedDate: dateFormatted,
            time: timeStr,
            slot: student.time || '06:00 AM',
            status: 'absent',
            timestamp: targetDateObj.getTime()
          };
          newLog = [entry, ...filteredLog];
          if (targetKey === todayKey) {
            newStatus = 'absent';
            lastDate = targetKey;
            lastTime = timeStr;
          }
        } else {
          // pending / clear
          if (targetKey === todayKey) {
            newStatus = 'pending';
            lastDate = null;
            lastTime = null;
          }
        }

        const attendedDays = newLog.filter(l => l.status === 'present').length;
        const missedDays = newLog.filter(l => l.status === 'absent').length;

        const updated = {
          ...student,
          status: newStatus,
          lastCheckInDate: lastDate,
          lastCheckInTime: lastTime,
          attendanceLog: newLog,
          stats: {
            ...student.stats,
            attended: attendedDays,
            missed: missedDays
          }
        };

        if (loggedInTrainee && loggedInTrainee.id === updated.id) {
          setLoggedInTrainee(updated);
        }

        return updated;
      });
    });

    try {
      const history = JSON.parse(localStorage.getItem('smds_attendance_history_v9') || '{}');
      if (!history[targetKey]) history[targetKey] = [];
      const idx = history[targetKey].findIndex(h => h.id === studentId);
      if (targetStatus === 'pending') {
        if (idx >= 0) history[targetKey].splice(idx, 1);
      } else {
        const stTime = students.find(s => s.id === studentId)?.time || '06:00 AM';
        const item = { id: studentId, status: targetStatus, time: stTime, checkInTime: timeStr };
        if (idx >= 0) history[targetKey][idx] = item;
        else history[targetKey].push(item);
      }
      localStorage.setItem('smds_attendance_history_v9', JSON.stringify(history));
    } catch (e) {
      console.error(e);
    }

    const stName = students.find(s => s.id === studentId)?.name || 'Trainee';
    showToast(`${stName}: ${targetStatus === 'present' ? 'Marked Present ✓' : targetStatus === 'absent' ? 'Marked Absent ✕' : 'Attendance Cleared'}`);
  };

  // Bulk mark all trainees as present or absent for attendanceDateKey
  const handleBulkMarkAttendance = (targetStatus) => {
    students.forEach(s => {
      handleMarkAttendanceForDate(s.id, targetStatus);
    });
    showToast(`All trainees marked as ${targetStatus.toUpperCase()} for ${attendanceDate.toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}!`);
  };

  // Per-date count calculation for calendar cells (Present vs Absent)
  const getPerDateCounts = (dateObj) => {
    const y = dateObj.getFullYear();
    const m = String(dateObj.getMonth() + 1).padStart(2, '0');
    const d = String(dateObj.getDate()).padStart(2, '0');
    const dKey = `${y}-${m}-${d}`;

    let present = 0;
    let absent = 0;
    let pending = 0;

    students.forEach(s => {
      const rec = getTraineeAttendanceForDate(s, dKey);
      if (rec.status === 'present') present++;
      else if (rec.status === 'absent') absent++;
      else pending++;
    });

    return { present, absent, pending, total: students.length };
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3000);
  };

  const handleCopyText = (text, key) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
    }
    setCopiedKey(key);
    showToast(`Copied: ${text}`);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleCopyCredentials = (user, pass) => {
    const cred = `Username: ${user}\nPassword: ${pass}`;
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(cred);
    }
    setCopiedKey('all');
    showToast('Copied Username & Password!');
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleLaunchPortalAsStudent = (student) => {
    setLoggedInTrainee(student);
    setCurrentTab('portal');
    closeModal();
    showToast(`Viewing Trainee Portal for ${student.name}`);
  };

  const handleCommonLogin = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const cleanUser = loginUsername.trim().toUpperCase();
    const cleanPass = loginPassword.trim();
    setLoginError('');

    // 1. Check Admin Credentials: ( username : SMDS2023 , password : Smds@2023 )
    if (cleanUser === 'SMDS2023' && cleanPass === 'Smds@2023') {
      setAuthRole('admin');
      setCurrentTab('admin');
      try {
        localStorage.setItem('smds_auth_role', 'admin');
        localStorage.removeItem('smds_auth_trainee_id');
      } catch (err) {
        console.error(err);
      }
      showToast('Welcome, Administrator! Signed in successfully.');
      return;
    }

    // 2. Check Trainee Credentials against registered students
    const matched = students.find(s => {
      const u = (s.username || getTraineeUsername(s.enrollmentNo)).toUpperCase();
      const rawEnr = String(s.enrollmentNo || '').toUpperCase();
      
      // Normalized forms without leading zeros (e.g. 01/01 -> 1/1)
      const normEnr = rawEnr.split('/').map(p => String(parseInt(p, 10) || p)).join('/');
      const cleanWithoutSMDS = cleanUser.replace(/^SMDS/, '');
      const normInput = cleanWithoutSMDS.split('/').map(p => String(parseInt(p, 10) || p)).join('/');
      
      const p = s.password || getTraineePassword(s.enrollmentNo);
      const isUserMatch = (
        u === cleanUser || 
        rawEnr === cleanUser || 
        `SMDS${rawEnr}` === cleanUser || 
        normEnr === normInput || 
        `SMDS${normEnr}` === cleanUser
      );
      const isPassMatch = (
        p === cleanPass || 
        p.toLowerCase() === cleanPass.toLowerCase() || 
        `smds@${normEnr}` === cleanPass.toLowerCase()
      );
      return isUserMatch && isPassMatch;
    });

    if (matched) {
      setAuthRole('trainee');
      setLoggedInTrainee(matched);
      setCurrentTab('portal');
      try {
        localStorage.setItem('smds_auth_role', 'trainee');
        localStorage.setItem('smds_auth_trainee_id', matched.id);
      } catch (err) {
        console.error(err);
      }
      showToast(`Welcome ${matched.name}! Signed in to Trainee Portal.`);
      return;
    }

    // 3. Invalid credentials handling for both roles
    setLoginError('Invalid Credentials!');
  };

  const handleLogout = () => {
    setAuthRole(null);
    setLoggedInTrainee(null);
    setLoginUsername('');
    setLoginPassword('');
    setLoginError('');
    try {
      localStorage.removeItem('smds_auth_role');
      localStorage.removeItem('smds_auth_trainee_id');
    } catch (err) {
      console.error(err);
    }
    showToast('Logged out successfully.');
  };

  const handlePortalLogin = handleCommonLogin;

  const isMarkedToday = useMemo(() => {
    if (!loggedInTrainee) return false;
    const todayKey = getTodayKey();
    if (loggedInTrainee.lastCheckInDate === todayKey) return true;
    if (Array.isArray(loggedInTrainee.attendanceLog)) {
      return loggedInTrainee.attendanceLog.some(item => item.date === todayKey);
    }
    return loggedInTrainee.status === 'present';
  }, [loggedInTrainee]);

  const traineeLogs = useMemo(() => {
    if (!loggedInTrainee) return [];
    if (Array.isArray(loggedInTrainee.attendanceLog) && loggedInTrainee.attendanceLog.length > 0) {
      return loggedInTrainee.attendanceLog;
    }
    return [
      { date: '2026-10-12', formattedDate: '12 Oct 2026', time: 'Missed Session', slot: loggedInTrainee.time || '06:00 AM', status: 'absent' },
      { date: '2026-10-10', formattedDate: '10 Oct 2026', time: '05:55 AM', slot: loggedInTrainee.time || '06:00 AM', status: 'present' },
      { date: '2026-10-10', formattedDate: '10 Oct 2026', time: '06:01 AM', slot: loggedInTrainee.time || '06:00 AM', status: 'present' },
      { date: '2026-10-09', formattedDate: '09 Oct 2026', time: '06:05 AM', slot: loggedInTrainee.time || '06:00 AM', status: 'present' },
      { date: '2026-10-08', formattedDate: '08 Oct 2026', time: '06:12 AM', slot: loggedInTrainee.time || '06:00 AM', status: 'present' },
    ];
  }, [loggedInTrainee]);

  const displayLogs = useMemo(() => {
    return showAllAttendanceLogs ? traineeLogs : traineeLogs.slice(0, 5);
  }, [traineeLogs, showAllAttendanceLogs]);

  const handleSelfAttendance = () => {
    if (!loggedInTrainee) return;
    const todayKey = getTodayKey();
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
    const dateFormatted = now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });

    const existingLog = Array.isArray(loggedInTrainee.attendanceLog) ? loggedInTrainee.attendanceLog : [];
    const alreadyMarked = existingLog.some(item => item.date === todayKey) || loggedInTrainee.lastCheckInDate === todayKey;

    if (alreadyMarked) {
      showToast("Today's attendance has already been recorded!", 'info');
      return;
    }

    const newLogEntry = {
      date: todayKey,
      formattedDate: dateFormatted,
      time: timeStr,
      slot: loggedInTrainee.time,
      status: 'present',
      timestamp: now.getTime()
    };

    const updatedLog = [newLogEntry, ...existingLog];
    const newAttended = Math.min(
      (loggedInTrainee.stats?.total || 21),
      (loggedInTrainee.stats?.attended || 0) + 1
    );

    const updatedTrainee = {
      ...loggedInTrainee,
      status: 'present',
      lastCheckInDate: todayKey,
      lastCheckInTime: timeStr,
      attendanceLog: updatedLog,
      stats: {
        ...loggedInTrainee.stats,
        attended: newAttended,
        missed: Math.max(0, (loggedInTrainee.stats?.missed || 0) - (loggedInTrainee.status === 'absent' ? 1 : 0))
      }
    };

    setLoggedInTrainee(updatedTrainee);
    setStudents(prev => prev.map(s => s.id === updatedTrainee.id ? updatedTrainee : s));

    try {
      const history = JSON.parse(localStorage.getItem('smds_attendance_history_v9') || '{}');
      if (!history[todayKey]) history[todayKey] = [];
      const idx = history[todayKey].findIndex(h => h.id === updatedTrainee.id);
      if (idx >= 0) {
        history[todayKey][idx] = { id: updatedTrainee.id, status: 'present', time: updatedTrainee.time, checkInTime: timeStr };
      } else {
        history[todayKey].push({ id: updatedTrainee.id, status: 'present', time: updatedTrainee.time, checkInTime: timeStr });
      }
      localStorage.setItem('smds_attendance_history_v9', JSON.stringify(history));
    } catch (e) {
      console.error(e);
    }

    showToast(`Attendance marked successfully for today! 🎉`);
  };

  const handleUndoSelfAttendance = () => {
    if (!loggedInTrainee) return;
    const todayKey = getTodayKey();
    const existingLog = Array.isArray(loggedInTrainee.attendanceLog) ? loggedInTrainee.attendanceLog : [];
    const updatedLog = existingLog.filter(item => item.date !== todayKey);
    const newAttended = Math.max(0, (loggedInTrainee.stats?.attended || 1) - 1);

    const updatedTrainee = {
      ...loggedInTrainee,
      status: 'pending',
      lastCheckInDate: null,
      lastCheckInTime: null,
      attendanceLog: updatedLog,
      stats: {
        ...loggedInTrainee.stats,
        attended: newAttended
      }
    };

    setLoggedInTrainee(updatedTrainee);
    setStudents(prev => prev.map(s => s.id === updatedTrainee.id ? updatedTrainee : s));

    try {
      const history = JSON.parse(localStorage.getItem('smds_attendance_history_v9') || '{}');
      if (history[todayKey]) {
        history[todayKey] = history[todayKey].filter(h => h.id !== updatedTrainee.id);
        localStorage.setItem('smds_attendance_history_v9', JSON.stringify(history));
      }
    } catch (e) {
      console.error(e);
    }

    showToast("Today's check-in has been cancelled.", 'info');
  };

  const handleAdminToggleAttendance = (student) => {
    const todayKey = getTodayKey();
    const isPresent = student.lastCheckInDate === todayKey || student.status === 'present';
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
    const dateFormatted = now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });

    if (isPresent) {
      const existingLog = Array.isArray(student.attendanceLog) ? student.attendanceLog : [];
      const updatedLog = existingLog.filter(item => item.date !== todayKey);
      const newAttended = Math.max(0, (student.stats?.attended || 1) - 1);
      const updated = {
        ...student,
        status: 'pending',
        lastCheckInDate: null,
        lastCheckInTime: null,
        attendanceLog: updatedLog,
        stats: { ...student.stats, attended: newAttended }
      };
      setStudents(prev => prev.map(s => s.id === updated.id ? updated : s));
      if (loggedInTrainee && loggedInTrainee.id === updated.id) setLoggedInTrainee(updated);
      try {
        const history = JSON.parse(localStorage.getItem('smds_attendance_history_v9') || '{}');
        if (history[todayKey]) {
          history[todayKey] = history[todayKey].filter(h => h.id !== updated.id);
          localStorage.setItem('smds_attendance_history_v9', JSON.stringify(history));
        }
      } catch (e) {
        console.error(e);
      }
      showToast(`Marked ${student.name} as Pending`);
    } else {
      const existingLog = Array.isArray(student.attendanceLog) ? student.attendanceLog : [];
      const newEntry = {
        date: todayKey,
        formattedDate: dateFormatted,
        time: timeStr,
        slot: student.time,
        status: 'present',
        timestamp: now.getTime()
      };
      const updatedLog = [newEntry, ...existingLog];
      const newAttended = Math.min((student.stats?.total || 21), (student.stats?.attended || 0) + 1);
      const updated = {
        ...student,
        status: 'present',
        lastCheckInDate: todayKey,
        lastCheckInTime: timeStr,
        attendanceLog: updatedLog,
        stats: { ...student.stats, attended: newAttended }
      };
      setStudents(prev => prev.map(s => s.id === updated.id ? updated : s));
      if (loggedInTrainee && loggedInTrainee.id === updated.id) setLoggedInTrainee(updated);
      try {
        const history = JSON.parse(localStorage.getItem('smds_attendance_history_v9') || '{}');
        if (!history[todayKey]) history[todayKey] = [];
        const idx = history[todayKey].findIndex(h => h.id === updated.id);
        if (idx >= 0) history[todayKey][idx] = { id: updated.id, status: 'present', time: updated.time, checkInTime: timeStr };
        else history[todayKey].push({ id: updated.id, status: 'present', time: updated.time, checkInTime: timeStr });
        localStorage.setItem('smds_attendance_history_v9', JSON.stringify(history));
      } catch (e) {
        console.error(e);
      }
      showToast(`Marked ${student.name} as Present ✓`);
    }
  };

  const openModal = (mode, data = null) => {
    setShowModalPass(false);
    setModalConfig({ isOpen: true, mode, data });
    if (mode === 'edit' || mode === 'view' || mode === 'reschedule' || mode === 'payment' || mode === 'confirm_remove_slot') {
      const digits = String(data.enrollmentNo || data.id || '').replace(/\D/g, '');
      const currentCourse = (data.course === 'None') ? 'None' : 'Light Motor Vehicle (LMV)';
      const bal = Math.max(0, (data.fees?.total || 0) - (data.fees?.paid || 0));
      setFormData({
        enrollmentNo: digits ? String(parseInt(digits, 10)) : '1',
        name: data.name, phone: data.phone, course: currentCourse, type: data.type, time: data.time,
        totalFees: data.fees?.total || 0, paidFees: data.fees?.paid || 0, 
        paymentAmount: (mode === 'payment') ? (bal > 0 ? String(bal) : '4000') : '',
        paymentMethod: 'UPI',
        paymentDate: getTodayKey(),
        paymentNote: ''
      });
    } else {
      const curMonthNum = (accountsPeriodScope === 'monthly' && typeof accountsSelectedMonth === 'number')
        ? accountsSelectedMonth + 1
        : (new Date().getMonth() + 1);

      let maxMonthSNo = 0;
      students.forEach(s => {
        const enr = String(s.enrollmentNo || '');
        if (enr.includes('/')) {
          const [sNoStr, mStr] = enr.split('/');
          if (parseInt(mStr, 10) === curMonthNum) {
            const val = parseInt(sNoStr, 10);
            if (!isNaN(val) && val > maxMonthSNo) maxMonthSNo = val;
          }
        }
      });
      const nextSNoPadded = String(maxMonthSNo + 1).padStart(2, '0');
      const monthPadded = String(curMonthNum).padStart(2, '0');
      const nextEnr = `${nextSNoPadded}/${monthPadded}`;
      const defaultDate = `${accountsSelectedYear || 2026}-${monthPadded}-01`;
      setFormData({ 
        enrollmentNo: nextEnr, 
        name: '', phone: '', course: 'Light Motor Vehicle (LMV)', type: 'item_8', 
        time: data?.time || null, 
        totalFees: 8000, paidFees: 0, paymentAmount: '',
        paymentMethod: 'Cash',
        paymentDate: defaultDate,
        paymentNote: ''
      });
    }
  };

  const closeModal = () => {
    setShowModalPass(false);
    setModalConfig({ isOpen: false, mode: 'add', data: null });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (modalConfig.mode === 'add') {
      const maxNum = students.reduce((max, s) => {
        const num = parseInt(String(s.id || '').replace(/\D/g, '') || '0', 10);
        return Math.max(max, isNaN(num) ? 0 : num);
      }, 0);
      const newId = `ST-${String(maxNum + 1).padStart(3, '0')}`;
      const initials = formData.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
      const classCfg = CLASS_TYPES[formData.type] || CLASS_TYPES['21d_license'];
      const rawNum = String(formData.enrollmentNo || '').replace(/[^0-9/]/g, '').trim();
      let finalEnr = rawNum;
      if (!finalEnr) {
        const curM = String(new Date().getMonth() + 1).padStart(2, '0');
        finalEnr = `01/${curM}`;
      } else if (finalEnr.includes('/')) {
        const [sNoP, mP] = finalEnr.split('/');
        finalEnr = `${String(sNoP).padStart(2, '0')}/${String(mP).padStart(2, '0')}`;
      }
      const genUser = getTraineeUsername(finalEnr);
      const genPass = getTraineePassword(finalEnr);
      const paidAdvance = Number(formData.paidFees) || 0;
      const advMethod = formData.paymentMethod || 'Cash';
      const defaultEnrollDate = (accountsPeriodScope === 'monthly' && typeof accountsSelectedMonth === 'number')
        ? `${accountsSelectedYear || 2026}-${String(accountsSelectedMonth + 1).padStart(2, '0')}-01`
        : getTodayKey();
      const advDate = formData.paymentDate || defaultEnrollDate;
      
      const newStudent = {
        ...formData,
        id: newId,
        enrollmentNo: finalEnr,
        enrollmentDate: advDate,
        username: genUser,
        password: genPass,
        initials: initials || 'ST',
        status: 'pending',
        time: formData.time || null,
        avatarColor: COLORS[Math.floor(Math.random() * COLORS.length)],
        stats: { total: classCfg.days, attended: 0, missed: 0 },
        attendanceLog: [],
        lastCheckInDate: null,
        lastCheckInTime: null,
        fees: { 
          total: Number(formData.totalFees), 
          paid: paidAdvance,
          history: paidAdvance > 0 ? [{
            id: `pay_adv_${Date.now()}`,
            amount: paidAdvance,
            method: advMethod,
            date: advDate,
            note: 'Advance Fee Paid at Registration',
            timestamp: Date.now()
          }] : []
        }
      };
      setStudents([...students, newStudent]);
      
      // Dispatch Live Sync to Google Sheets
      const pkgDetails = getPackageDetails(formData.type);
      syncToGoogleSheets('add_trainee', {
        name: formData.name,
        phone: formData.phone,
        packageId: formData.type,
        classType: pkgDetails.sheetCategory || 'SINGLE',
        classDays: classCfg.days || '',
        feesAmount: Number(formData.totalFees) || 0,
        advanceReceived: paidAdvance,
        paymentMethod: advMethod,
        paymentDate: advDate,
        startDate: advDate,
        remark: classCfg.full || ''
      });

      showToast(`New trainee registered (No. ${finalEnr} | Login: ${genUser})!`);
    } else if (modalConfig.mode === 'edit' || modalConfig.mode === 'reschedule') {
      const rawNum = String(formData.enrollmentNo || '').replace(/[^0-9/]/g, '').trim();
      setStudents(students.map(s => {
        if (s.id === modalConfig.data.id) {
          let finalEnr = rawNum || s.enrollmentNo;
          if (finalEnr && finalEnr.includes('/')) {
            const [sNoP, mP] = finalEnr.split('/');
            finalEnr = `${String(sNoP).padStart(2, '0')}/${String(mP).padStart(2, '0')}`;
          }
          const newTot = Math.max(0, Number(formData.totalFees) || 0);
          const newPaid = Math.max(0, Number(formData.paidFees) || 0);
          let currentHistory = Array.isArray(s.fees?.history) ? [...s.fees.history] : [];
          if (newPaid > 0 && currentHistory.length === 0) {
            currentHistory = [{
              id: `pay_adj_${Date.now()}`,
              amount: newPaid,
              method: 'Cash',
              date: s.enrollmentDate || getTodayKey(),
              note: 'Tuition Payment (Admin Updated)',
              timestamp: Date.now()
            }];
          } else if (currentHistory.length === 1 && currentHistory[0].amount !== newPaid) {
            currentHistory[0] = {
              ...currentHistory[0],
              amount: newPaid,
              note: newPaid >= newTot ? 'Full Tuition Settled' : 'Tuition Fee Adjusted'
            };
          }
          return {
            ...s,
            ...formData,
            enrollmentNo: finalEnr,
            username: getTraineeUsername(finalEnr),
            password: getTraineePassword(finalEnr),
            fees: { 
              ...s.fees,
              total: newTot, 
              paid: newPaid,
              history: currentHistory
            }
          };
        }
        return s;
      }));
      showToast(modalConfig.mode === 'reschedule' ? `Slot rescheduled to ${formData.time} successfully!` : 'Fee and trainee details updated successfully!');
    } else if (modalConfig.mode === 'payment') {
      const payAmount = Number(formData.paymentAmount) || 0;
      const method = formData.paymentMethod || 'UPI';
      const date = formData.paymentDate || getTodayKey();
      const note = formData.paymentNote || '';

      // Dispatch Live Sync Payment to Google Sheets
      syncToGoogleSheets('update_payment', {
        sNo: modalConfig.data.enrollmentNo || '',
        phone: modalConfig.data.phone || '',
        name: modalConfig.data.name || '',
        additionalAmount: payAmount,
        paymentMethod: method,
        paymentDate: date
      });

      setStudents(students.map(s => {
        if (s.id === modalConfig.data.id) {
          const currentPaid = Number(s.fees?.paid || 0);
          const newPaid = currentPaid + payAmount;
          const cappedPaid = newPaid > s.fees.total ? s.fees.total : newPaid;
          const currentHistory = Array.isArray(s.fees?.history) ? [...s.fees.history] : [];
          const newHistory = [
            ...currentHistory,
            {
              id: `pay_${Date.now()}`,
              amount: payAmount,
              method: method,
              date: date,
              note: note || (currentPaid === 0 ? 'Advance Fee' : 'Tuition Payment'),
              timestamp: Date.now()
            }
          ];
          const updated = {
            ...s,
            fees: {
              ...s.fees,
              paid: cappedPaid,
              history: newHistory
            }
          };
          if (loggedInTrainee && loggedInTrainee.id === updated.id) {
            setLoggedInTrainee(updated);
          }
          return updated;
        }
        return s;
      }));
      showToast(`₹${payAmount} payment recorded via ${method} on ${date}!`);
    }
    closeModal();
  };

  const handleDelete = () => {
    setStudents(students.filter(s => s.id !== modalConfig.data.id));
    showToast('Trainee record deleted!', 'error');
    closeModal();
  };

  const handleRemoveFromSlot = (id) => {
    setStudents(prev => prev.map(s => {
      if (s.id === id) {
        return { ...s, time: 'Unassigned' };
      }
      return s;
    }));
    showToast('Trainee removed from schedule slot!');
    closeModal();
  };

  const openCalendarModal = () => {
    setCalContext('schedule');
    setCalViewDate(new Date(scheduleDate));
    setShowFullCalendar(true);
  };

  return (
    <div className="min-h-dvh w-full overflow-x-clip font-sans antialiased text-slate-900 bg-[#FAFAFC] relative selection:bg-orange-500/20">
      
      <style>{`
        button, input, select { touch-action: manipulation; -webkit-tap-highlight-color: transparent; }
        .glass-panel {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.95);
          box-shadow: 0 10px 40px -10px rgba(0,0,0,0.04);
        }
        /* Enhanced Scrollbar Styling for Modals & Lists */
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: rgba(241, 245, 249, 0.5); border-radius: 10px; }
        ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #ea580c; }
        .custom-scroll {
          scrollbar-width: thin;
          scrollbar-color: #cbd5e1 rgba(241, 245, 249, 0.5);
        }
      `}</style>

      {!authRole ? (
        /* COMMON UNIFIED LOGIN PAGE */
        <div className="min-h-dvh flex flex-col justify-between relative overflow-hidden bg-radial from-orange-50/60 via-[#F8FAFC] to-slate-100/90 py-8 px-4 sm:px-6 lg:px-8">
          
          {/* Decorative Ambient Background Glows */}
          <div className="w-96 h-96 rounded-full bg-orange-400/10 blur-3xl pointer-events-none absolute -top-20 -right-20" />
          <div className="w-96 h-96 rounded-full bg-amber-400/10 blur-3xl pointer-events-none absolute -bottom-20 -left-20" />

          {/* Top Brand Bar */}
          <div className="max-w-4xl w-full mx-auto flex items-center justify-between pb-6">
            <div className="flex items-center gap-3.5">
              <DrivingSchoolLogo className="w-12 h-12 shrink-0" />
              <div>
                <h1 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-tight">
                  Sri Muruga Driving School
                </h1>
                <p className="text-[11px] sm:text-xs font-black text-orange-600 uppercase tracking-wide">
                  Govt Approved Driving Training School • Neelambur
                </p>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200/80 text-xs font-bold text-slate-600 shadow-2xs">
              <Calendar className="w-3.5 h-3.5 text-orange-600" />
              <span>{attendanceDate.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
            </div>
          </div>

          {/* Centered Login Card */}
          <div className="max-w-md w-full mx-auto my-auto relative z-10">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl border border-slate-200/80 shadow-[0_20px_50px_rgba(234,88,12,0.08)] p-6 sm:p-8 space-y-6 relative overflow-hidden">
              
              {/* Top Accent Gradient Line */}
              <div className="h-1.5 bg-linear-to-r from-orange-500 via-amber-500 to-orange-600 absolute top-0 left-0 right-0" />

              {/* Card Header */}
              <div className="text-center space-y-2">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-200/70 text-orange-600 flex items-center justify-center mx-auto shadow-2xs">
                  {loginRoleTab === 'admin' ? (
                    <ShieldCheck className="w-7 h-7" />
                  ) : (
                    <GraduationCap className="w-7 h-7" />
                  )}
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                    {loginRoleTab === 'admin' ? 'Administrator Login' : 'Trainee Portal Login'}
                  </h2>
                  <p className="text-xs text-slate-500 font-bold mt-1">
                    {loginRoleTab === 'admin' 
                      ? 'Sign in to access student registers, attendance & accounts'
                      : 'Sign in to mark daily attendance and view class slots'}
                  </p>
                </div>
              </div>

              {/* Role Switcher Pill Tabs */}
              <div className="grid grid-cols-2 p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200/60 gap-1.5">
                <button
                  type="button"
                  onClick={() => {
                    setLoginRoleTab('admin');
                    setLoginError('');
                  }}
                  className={`py-2.5 px-3 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    loginRoleTab === 'admin'
                      ? 'bg-linear-to-r from-[#E85D04] to-[#F77F00] text-white shadow-md shadow-orange-500/20'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Admin</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setLoginRoleTab('trainee');
                    setLoginError('');
                  }}
                  className={`py-2.5 px-3 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    loginRoleTab === 'trainee'
                      ? 'bg-linear-to-r from-[#E85D04] to-[#F77F00] text-white shadow-md shadow-orange-500/20'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  <GraduationCap className="w-4 h-4 shrink-0" />
                  <span>Trainee</span>
                </button>
              </div>

              {/* Login Form */}
              <form onSubmit={handleCommonLogin} className="space-y-4">
                {loginError && (
                  <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold flex items-start gap-2.5 animate-in fade-in duration-150">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
                    <span>{loginError}</span>
                  </div>
                )}

                {/* Username Input */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400">
                    {loginRoleTab === 'admin' ? 'Admin Username' : 'Trainee Username / ID'}
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={loginUsername}
                      onChange={(e) => setLoginUsername(e.target.value.toUpperCase())}
                      placeholder="Username"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50/80 border border-slate-200 text-sm font-black font-mono tracking-wider text-slate-900 outline-none focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all uppercase placeholder:normal-case placeholder:font-bold placeholder:tracking-normal placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400">
                    {loginRoleTab === 'admin' ? 'Admin Password' : 'Password'}
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showLoginPassword ? "text" : "password"}
                      required
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="Password"
                      className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-50/80 border border-slate-200 text-sm font-black font-mono tracking-wider text-slate-900 outline-none focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all placeholder:normal-case placeholder:font-bold placeholder:tracking-normal placeholder:text-slate-400"
                    />
                    <button
                      type="button"
                      onClick={() => setShowLoginPassword(!showLoginPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                    >
                      {showLoginPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-linear-to-r from-[#E85D04] to-[#F77F00] hover:from-[#DC5303] hover:to-[#E85D04] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-md shadow-orange-500/20 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer transition-all mt-2"
                >
                  {loginRoleTab === 'admin' ? (
                    <>
                      <ShieldCheck className="w-4 h-4" />
                      <span>Sign In as Administrator</span>
                    </>
                  ) : (
                    <>
                      <LogIn className="w-4 h-4" />
                      <span>Sign In to Trainee Portal</span>
                    </>
                  )}
                </button>
              </form>

              {/* Card Footer Help */}
              <div className="pt-2 text-center text-[11px] text-slate-400 font-bold border-t border-slate-100">
                <span>Credentials issue? Contact Office: </span>
                <span className="text-slate-700 font-black">+91 98422 12345</span>
              </div>
            </div>
          </div>

          {/* Bottom Footer Bar */}
          <div className="max-w-4xl w-full mx-auto text-center pt-6 text-[11px] font-bold text-slate-400">
            <p>© 2026 Sri Muruga Driving School • Avinashi Road, Neelambur, Coimbatore • Govt Approved</p>
          </div>

        </div>
      ) : (
        <>
          {/* Header */}
          <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
              
              <div 
                className={`flex items-center gap-2.5 sm:gap-3.5 min-w-0 ${authRole === 'admin' ? 'cursor-pointer' : ''}`} 
                onClick={() => authRole === 'admin' && setCurrentTab('admin')}
              >
                <DrivingSchoolLogo className="w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 shrink-0" />
                <div className="flex flex-col justify-center min-w-0">
                  <span className="text-sm xs:text-base sm:text-lg md:text-xl font-black tracking-tight text-slate-900 truncate">
                    Sri Muruga Driving School
                  </span>
                  <span className="text-[9px] xs:text-[10px] sm:text-xs font-black tracking-wide text-[#EA580C] uppercase mt-0.5 truncate hidden xs:block">
                    {authRole === 'admin' 
                      ? 'ADMINISTRATOR DASHBOARD & ATTENDANCE SYSTEM'
                      : 'TRAINEE SELF-ATTENDANCE & MANAGEMENT PORTAL'}
                  </span>
                </div>
              </div>

              {authRole === 'admin' ? (
                <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
                  <div className="flex items-center bg-[#F1F5F9]/90 p-1 sm:p-1.5 rounded-full border border-slate-200/60 shadow-2xs">
                    <button 
                      type="button"
                      onClick={() => setCurrentTab('admin')}
                      className={`px-2.5 xs:px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-1.5 sm:gap-2 transition-all cursor-pointer ${
                        currentTab === 'admin'
                          ? 'bg-[#E85D04] text-white shadow-sm' 
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Settings className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                      <span className="hidden md:inline">ADMIN PANEL</span>
                    </button>

                    <button 
                      type="button"
                      onClick={() => setCurrentTab('schedule')}
                      className={`px-2.5 xs:px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-1.5 sm:gap-2 transition-all cursor-pointer ${
                        currentTab === 'schedule' 
                          ? 'bg-[#E85D04] text-white shadow-sm' 
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                      <span className="hidden md:inline">CLASS SCHEDULE</span>
                    </button>

                    {loggedInTrainee && (
                      <button 
                        type="button"
                        onClick={() => setCurrentTab('portal')}
                        className={`px-2.5 xs:px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-1.5 sm:gap-2 transition-all cursor-pointer ${
                          currentTab === 'portal' 
                            ? 'bg-[#E85D04] text-white shadow-sm' 
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                        <span className="hidden md:inline">TRAINEE PREVIEW</span>
                      </button>
                    )}
                  </div>

                  {/* Admin Profile Pill & Logout */}
                  <div className="flex items-center gap-1.5 sm:gap-2 pl-1.5 sm:pl-2 border-l border-slate-200">
                    <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3.5 py-1 sm:py-1.5 bg-orange-50/90 border border-orange-200/70 rounded-full shadow-2xs">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white border border-orange-200 p-0.5 overflow-hidden flex items-center justify-center shrink-0 shadow-2xs">
                        <img 
                          src="/logo.png" 
                          alt="SMDS Logo" 
                          className="w-full h-full object-contain" 
                        />
                      </div>
                      <div className="hidden lg:flex flex-col text-left">
                        <span className="text-xs font-black text-slate-900 leading-tight">
                          Administrator
                        </span>
                        <span className="text-[10px] font-bold text-orange-600 font-mono leading-none">
                          Admin Profile
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="px-2.5 xs:px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-full bg-[#0B1528] hover:bg-rose-600 text-white text-xs font-black uppercase tracking-wider flex items-center gap-1.5 sm:gap-2 shadow-xs transition-all cursor-pointer active:scale-95"
                      title="Log out of Admin Portal"
                    >
                      <LogOut className="w-3.5 h-3.5 shrink-0" />
                      <span className="hidden sm:inline">Logout</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Trainee Top Header Bar */
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-orange-50/90 border border-orange-200/70 rounded-full">
                    <div className="w-6 h-6 rounded-full bg-orange-600 text-white text-[11px] font-black flex items-center justify-center shrink-0">
                      {loggedInTrainee?.initials || (loggedInTrainee?.name ? loggedInTrainee.name.slice(0, 2).toUpperCase() : 'ST')}
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-xs font-black text-slate-900 leading-tight truncate max-w-30 sm:max-w-none">
                        {loggedInTrainee?.name}
                      </span>
                      <span className="text-[10px] font-bold text-orange-600 font-mono leading-none">
                        {loggedInTrainee?.enrollmentNo ? `SMDS${loggedInTrainee.enrollmentNo}` : loggedInTrainee?.id}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="px-4 py-2 sm:py-2.5 rounded-full bg-[#0B1528] hover:bg-rose-600 text-white text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-xs transition-all cursor-pointer active:scale-95"
                    title="Log out of Trainee Portal"
                  >
                    <LogOut className="w-3.5 h-3.5 shrink-0" />
                    <span className="hidden sm:inline">Logout</span>
                  </button>
                </div>
              )}

            </div>
          </header>

          {/* Main Content Area */}
          <main className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-5 sm:py-8 lg:py-10 relative z-10">
            
            {/* TAB: ADMIN PANEL */}
            {authRole === 'admin' && currentTab === 'admin' && (
          <div className="space-y-4 sm:space-y-6">
            {/* Sub-Navigation Pill Tabs */}
            <div className="flex items-center gap-1.5 sm:gap-2 pt-1 pb-1 overflow-x-auto no-scrollbar scroll-smooth -mx-3 xs:-mx-4 px-3 xs:px-4 sm:mx-0 sm:px-0">
              <button
                type="button"
                onClick={() => setAdminSubTab('directory')}
                className={`px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs font-black uppercase tracking-wider flex items-center gap-1.5 sm:gap-2 transition-all cursor-pointer shrink-0 whitespace-nowrap ${
                  adminSubTab === 'directory'
                    ? 'bg-[#0B1528] text-white shadow-sm'
                    : 'bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span>TRAINEE DIRECTORY</span>
              </button>

              <button
                type="button"
                onClick={() => setAdminSubTab('schedule')}
                className={`px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs font-black uppercase tracking-wider flex items-center gap-1.5 sm:gap-2 transition-all cursor-pointer shrink-0 whitespace-nowrap ${
                  adminSubTab === 'schedule'
                    ? 'bg-[#0B1528] text-white shadow-sm'
                    : 'bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span>SCHEDULE MASTER</span>
              </button>

              <button
                type="button"
                onClick={() => setAdminSubTab('attendance')}
                className={`px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs font-black uppercase tracking-wider flex items-center gap-1.5 sm:gap-2 transition-all cursor-pointer shrink-0 whitespace-nowrap ${
                  adminSubTab === 'attendance'
                    ? 'bg-[#0B1528] text-white shadow-sm'
                    : 'bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <UserCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span>ATTENDANCE MASTER</span>
              </button>

              <button
                type="button"
                onClick={() => setAdminSubTab('accounts')}
                className={`px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs font-black uppercase tracking-wider flex items-center gap-1.5 sm:gap-2 transition-all cursor-pointer shrink-0 whitespace-nowrap ${
                  adminSubTab === 'accounts'
                    ? 'bg-[#0B1528] text-white shadow-sm'
                    : 'bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <CreditCard className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span>ACCOUNTS MASTER</span>
              </button>
            </div>

            {/* Main Content Container inside Admin Panel */}
            <div className="bg-white rounded-2xl sm:rounded-3xl lg:rounded-[28px] border border-slate-100 shadow-[0_4px_30px_-5px_rgba(0,0,0,0.03)] p-4 sm:p-6 lg:p-10">
              
              {/* SUBTAB 1: TRAINEE DIRECTORY */}
              {adminSubTab === 'directory' && (
                <div>
                  {/* Trainee Directory Dedicated Dashboard Cards (White Theme) */}
                  <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
                    {/* Card 1: TOTAL TRAINEES */}
                    <button
                      type="button"
                      onClick={() => setAdminListFilter('all')}
                      className={`text-left p-5 sm:p-6 rounded-3xl bg-white transition-all cursor-pointer flex items-center gap-4.5 outline-none ${
                        adminListFilter === 'all'
                          ? 'border-2 border-blue-500 ring-4 ring-blue-500/10 shadow-sm'
                          : 'border border-slate-100 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] hover:border-slate-200'
                      }`}
                    >
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <Users className="w-6 h-6 stroke-[2.2]" />
                      </div>
                      <div>
                        <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
                          TOTAL TRAINEES
                        </span>
                        <span className="text-3xl sm:text-4xl font-black text-slate-900 block mt-0.5 font-sans">
                          {traineeFilterMonth === 'all' ? students.length : traineesForTraineeCalMonth.length}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400 block mt-0.5">
                          {traineeFilterMonth === 'all' ? 'All Months Enrolled' : `${MONTH_NAMES[traineeCalDate.getMonth()]} Batch`}
                        </span>
                      </div>
                    </button>

                    {/* Card 2: PRESENT TODAY */}
                    <button
                      type="button"
                      onClick={() => setAdminListFilter('present')}
                      className={`text-left p-5 sm:p-6 rounded-3xl bg-white transition-all cursor-pointer flex items-center gap-4.5 outline-none ${
                        adminListFilter === 'present'
                          ? 'border-2 border-emerald-500 ring-4 ring-emerald-500/10 shadow-sm'
                          : 'border border-slate-100 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] hover:border-slate-200'
                      }`}
                    >
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                        <UserCheck className="w-6 h-6 stroke-[2.2]" />
                      </div>
                      <div>
                        <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
                          PRESENT TODAY
                        </span>
                        <span className="text-3xl sm:text-4xl font-black text-slate-900 block mt-0.5 font-sans">
                          {stats.present}
                        </span>
                        <span className="text-[10px] font-bold text-emerald-600 block mt-0.5">
                          Attended Sessions
                        </span>
                      </div>
                    </button>

                    {/* Card 3: PENDING TODAY */}
                    <button
                      type="button"
                      onClick={() => setAdminListFilter('pending')}
                      className={`text-left p-5 sm:p-6 rounded-3xl bg-white transition-all cursor-pointer flex items-center gap-4.5 outline-none ${
                        adminListFilter === 'pending'
                          ? 'border-2 border-amber-500 ring-4 ring-amber-500/10 shadow-sm'
                          : 'border border-slate-100 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] hover:border-slate-200'
                      }`}
                    >
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                        <Clock className="w-6 h-6 stroke-[2.2]" />
                      </div>
                      <div>
                        <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
                          PENDING TODAY
                        </span>
                        <span className="text-3xl sm:text-4xl font-black text-slate-900 block mt-0.5 font-sans">
                          {stats.pending}
                        </span>
                        <span className="text-[10px] font-bold text-amber-600 block mt-0.5">
                          Awaiting Check-in
                        </span>
                      </div>
                    </button>

                    {/* Card 4: FEES DUE */}
                    <button
                      type="button"
                      onClick={() => setAdminListFilter('due')}
                      className={`text-left p-5 sm:p-6 rounded-3xl bg-white transition-all cursor-pointer flex items-center gap-4.5 outline-none ${
                        adminListFilter === 'due'
                          ? 'border-2 border-rose-500 ring-4 ring-rose-500/10 shadow-sm'
                          : 'border border-slate-100 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] hover:border-slate-200'
                      }`}
                    >
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                        <IndianRupee className="w-6 h-6 stroke-[2.2]" />
                      </div>
                      <div>
                        <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
                          FEES DUE
                        </span>
                        <span className="text-3xl sm:text-4xl font-black text-rose-600 block mt-0.5 font-sans">
                          ₹{totalFeeDueAmount.toLocaleString('en-IN')}
                        </span>
                        <span className="text-[10px] font-bold text-rose-500 block mt-0.5">
                          {stats.withDue} Trainees Pending
                        </span>
                      </div>
                    </button>
                  </div>

                  {/* Top Search & Action Bar */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
                    {/* Search Input */}
                    <div className="relative flex-1 w-full">
                      <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Search by name, ID, or username..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-11 pr-10 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm font-bold text-slate-900 placeholder:text-slate-400 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 shadow-2xs transition-all"
                      />
                      {searchTerm && (
                        <button 
                          type="button" 
                          onClick={() => setSearchTerm('')} 
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
                      {/* Calendar Month Filter Button (Replaces previous package filter as requested) */}
                      <div className="flex items-center gap-2 flex-1 md:flex-none">
                        <button
                          type="button"
                          onClick={() => {
                            setCalContext('trainee');
                            setCalViewDate(traineeCalDate || new Date(2026, 9, 1));
                            setShowFullCalendar(true);
                          }}
                          className={`w-full md:w-auto flex items-center justify-between gap-3 px-5 py-3.5 rounded-2xl border text-xs sm:text-sm font-black transition-all cursor-pointer shadow-2xs ${
                            traineeFilterMonth !== 'all'
                              ? 'bg-orange-50 border-orange-500 text-orange-950 ring-2 ring-orange-100'
                              : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                          }`}
                          title="Open Calendar to filter trainees monthly"
                        >
                          <div className="flex items-center gap-2.5">
                            <CalendarDays className="w-4 h-4 text-orange-600 shrink-0" />
                            <span>
                              {traineeFilterMonth === 'all'
                                ? `All Months (${students.length} Trainees)`
                                : `${MONTH_NAMES[traineeCalDate.getMonth()]} ${traineeCalDate.getFullYear()} (${traineesForTraineeCalMonth.length} Trainees)`}
                            </span>
                          </div>
                          <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                        </button>

                        {traineeFilterMonth !== 'all' && (
                          <button
                            type="button"
                            onClick={() => {
                              setTraineeFilterMonth('all');
                              showToast('Showing all trainees');
                            }}
                            className="p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-rose-300 text-slate-400 hover:text-rose-600 transition-colors cursor-pointer shadow-2xs"
                            title="Reset to All Months"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>

                      {/* Add Trainee Button */}
                      <button
                        type="button"
                        onClick={() => openModal('add')}
                        className="bg-[#E85D04] hover:bg-[#d45302] text-white font-black text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-2xl shadow-sm transition-all active:scale-95 flex items-center gap-2 cursor-pointer shrink-0"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add Trainee</span>
                      </button>
                    </div>
                  </div>

                  {/* Active Month Filter Ribbon if filter is active */}
                  {traineeFilterMonth !== 'all' && (
                    <div className="mb-6 flex items-center justify-between bg-orange-50/80 border border-orange-200/90 px-4.5 py-3 rounded-2xl text-xs font-bold text-orange-950 animate-in fade-in">
                      <div className="flex items-center gap-2.5">
                        <Calendar className="w-4 h-4 text-orange-600 shrink-0" />
                        <span>
                          Showing <strong>{adminDisplayStudents.length} trainees</strong> enrolled in <strong>{MONTH_NAMES[traineeCalDate.getMonth()]} {traineeCalDate.getFullYear()}</strong> &bull; Arranged alphabetically A to Z
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setTraineeFilterMonth('all');
                          showToast('Showing all enrolled trainees');
                        }}
                        className="text-orange-700 hover:text-orange-900 font-black underline cursor-pointer text-xs shrink-0 ml-2"
                      >
                        Reset to All Months
                      </button>
                    </div>
                  )}

                  {/* Trainee Directory Cards - Alphabetical Order & View Only Option */}
                  <div className="space-y-4">
                    {adminDisplayStudents.length > 0 ? (
                      adminDisplayStudents.map(student => {
                        const balance = (student.fees?.total || 0) - (student.fees?.paid || 0);
                        const isPresentToday = student.lastCheckInDate === todayKey || student.status === 'present';
                        const isAbsentToday = student.status === 'absent';
                        const isPendingToday = !isPresentToday && !isAbsentToday;
                        const traineeUser = student.username || getTraineeUsername(student.enrollmentNo);

                        return (
                          <div
                            key={student.id}
                            className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.03)] p-4 sm:p-5 hover:border-slate-200 transition-all flex flex-col xl:flex-row xl:items-center justify-between gap-4"
                          >
                            {/* 1. Identity */}
                            <div className="flex items-center gap-4 min-w-0">
                              <div
                                onClick={() => openModal('view', student)}
                                className="min-w-15.5 sm:min-w-17.5 px-2 py-1 h-12 sm:h-13 rounded-2xl bg-[#FFF6EF] border border-[#FED7AA] hover:border-orange-400 hover:bg-[#FFEEDB] text-[#E85D04] flex flex-col items-center justify-center shrink-0 cursor-pointer shadow-2xs transition-all font-sans group"
                                title={`Enrollment No: ${student.enrollmentNo || student.id}`}
                              >
                                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#E85D04] leading-none mb-0.5">
                                  NO.
                                </span>
                                <span className="text-sm sm:text-base font-black text-[#E85D04] leading-tight font-mono tracking-tight">
                                  {student.enrollmentNo || student.id}
                                </span>
                              </div>

                              <div className="min-w-0">
                                <h4 
                                  onClick={() => openModal('view', student)}
                                  className="text-base sm:text-lg font-black text-slate-900 hover:text-orange-600 transition-colors cursor-pointer truncate"
                                >
                                  {student.name}
                                </h4>

                                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mt-1 flex-wrap">
                                  <span className="flex items-center gap-1 text-slate-700 font-semibold">
                                    <Phone className="w-3 h-3 text-orange-600" />
                                    <span>{student.phone}</span>
                                  </span>
                                  <span className="text-slate-300">•</span>
                                  <span className="font-extrabold text-slate-700 uppercase tracking-wide">
                                    {CLASS_TYPES[student.type]?.short?.toUpperCase() || student.type?.toUpperCase()}
                                  </span>
                                  {student.enrollmentDate && (
                                    <>
                                      <span className="text-slate-300">•</span>
                                      <span className="text-[11px] text-slate-500 font-medium">
                                        Joined: {student.enrollmentDate}
                                      </span>
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>

                            {/* Center-Right Blocks */}
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between xl:justify-end gap-3 sm:gap-4 lg:gap-6 pt-3 xl:pt-0 border-t border-slate-100 xl:border-t-0">
                              {/* 2. Tuition Fee Block */}
                              <div className="w-full sm:w-auto bg-[#F8FAFC] border border-slate-100 rounded-xl sm:rounded-2xl px-3.5 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between sm:justify-start gap-4 sm:gap-6 shrink-0">
                                <div>
                                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider block mb-0.5">
                                    TOTAL FEE
                                  </span>
                                  <span className="font-black text-sm text-slate-900 font-mono">
                                    ₹{student.fees?.total || 0}
                                  </span>
                                </div>

                                <div>
                                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider block mb-0.5">
                                    PAID
                                  </span>
                                  <span className="font-black text-sm text-emerald-600 font-mono">
                                    ₹{student.fees?.paid || 0}
                                  </span>
                                </div>

                                <div>
                                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider block mb-0.5">
                                    BALANCE
                                  </span>
                                  {balance > 0 ? (
                                    <span className="font-black text-sm text-rose-600 font-mono">
                                      ₹{balance}
                                    </span>
                                  ) : (
                                    <span className="font-black text-sm text-emerald-600">
                                      Settled
                                    </span>
                                  )}
                                </div>
                              </div>

                              {/* 3. Action Buttons - Strictly View Only as requested */}
                              <div className="flex items-center gap-2 shrink-0">
                                <button
                                  type="button"
                                  onClick={() => openModal('view', student)}
                                  className="bg-white hover:bg-orange-50 text-slate-700 hover:text-orange-600 font-black text-xs px-4 py-2.5 rounded-xl border border-slate-200 hover:border-orange-300 flex items-center gap-2 transition-all cursor-pointer shadow-2xs group"
                                  title="View Full Profile (View Only)"
                                >
                                  <Eye className="w-3.5 h-3.5 text-slate-400 group-hover:text-orange-600 transition-colors" />
                                  <span>View Profile</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className="py-16 text-center text-slate-400 font-bold flex flex-col items-center justify-center gap-2">
                        <CheckCircle2 className="w-12 h-12 text-slate-300" />
                        <p className="text-base font-black text-slate-700">No trainees found</p>
                        <p className="text-xs text-slate-400">Try adjusting your search or class filter</p>
                        {adminListFilter !== 'all' && (
                          <button
                            type="button"
                            onClick={() => setAdminListFilter('all')}
                            className="mt-2 text-xs font-black uppercase tracking-wider text-orange-600 hover:underline cursor-pointer"
                          >
                            Reset filter to All
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* SUBTAB 2: SCHEDULE MASTER */}
              {adminSubTab === 'schedule' && (
                <div>
                  {/* Schedule Management Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-100">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                        Schedule Management
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                        Assign, edit, or clear time slots (06:00 AM - 06:00 PM)
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => openModal('add')}
                        className="bg-[#E85D04] hover:bg-[#d45302] text-white font-black text-xs sm:text-sm uppercase tracking-wider px-5 py-2.5 rounded-2xl shadow-sm transition-all active:scale-95 flex items-center gap-2 cursor-pointer shrink-0"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add New Trainee</span>
                      </button>

                      <button
                        type="button"
                        onClick={openCalendarModal}
                        className="flex items-center gap-2 border border-slate-200/90 rounded-2xl px-4 py-2.5 font-black text-xs sm:text-sm text-slate-800 bg-white hover:bg-orange-50/60 hover:border-orange-300 shadow-2xs cursor-pointer transition-all group"
                        title="Select Date"
                      >
                        <CalendarDays className="w-4 h-4 text-orange-500 group-hover:scale-110 transition-transform" />
                        <span className="text-orange-600 font-mono text-xs sm:text-sm font-bold">
                          {scheduleDate.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Schedule Master Dedicated Dashboard Cards (White Theme) */}
                  <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
                    <div className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-100 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] flex items-center gap-4.5">
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                        <CalendarDays className="w-6 h-6 stroke-[2.2]" />
                      </div>
                      <div>
                        <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
                          SCHEDULED TODAY
                        </span>
                        <span className="text-3xl sm:text-4xl font-black text-slate-900 block mt-0.5 font-sans">
                          {students.filter(s => Boolean(s.time)).length}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400 block mt-0.5">
                          Active 1-on-1 Slots
                        </span>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-100 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] flex items-center gap-4.5">
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                        <Clock className="w-6 h-6 stroke-[2.2]" />
                      </div>
                      <div>
                        <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
                          MORNING SLOTS
                        </span>
                        <span className="text-3xl sm:text-4xl font-black text-slate-900 block mt-0.5 font-sans">
                          {students.filter(s => (s.time || '').includes('AM')).length}
                        </span>
                        <span className="text-[10px] font-bold text-amber-600 block mt-0.5">
                          06:00 AM - 11:00 AM
                        </span>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-100 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] flex items-center gap-4.5">
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                        <Clock className="w-6 h-6 stroke-[2.2]" />
                      </div>
                      <div>
                        <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
                          EVENING SLOTS
                        </span>
                        <span className="text-3xl sm:text-4xl font-black text-slate-900 block mt-0.5 font-sans">
                          {students.filter(s => (s.time || '').includes('PM')).length}
                        </span>
                        <span className="text-[10px] font-bold text-indigo-600 block mt-0.5">
                          03:00 PM - 06:00 PM
                        </span>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-100 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] flex items-center gap-4.5">
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                        <Car className="w-6 h-6 stroke-[2.2]" />
                      </div>
                      <div>
                        <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
                          AVAILABLE SLOTS
                        </span>
                        <span className="text-3xl sm:text-4xl font-black text-emerald-600 block mt-0.5 font-sans">
                          {TIME_SLOTS.filter(slot => !students.some(s => s.time === slot)).length}
                        </span>
                        <span className="text-[10px] font-bold text-emerald-600 block mt-0.5">
                          Ready to Assign
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Slot Timeline Rows */}
                  <div className="space-y-3.5">
                    {TIME_SLOTS.map((slot) => {
                      const assignedStudents = students.filter(s => s.time === slot);
                      return (
                        <div key={slot} className="flex flex-col sm:flex-row sm:items-center gap-3.5">
                          {/* Left Time Box */}
                          <div className="w-full sm:w-36 h-18 sm:h-20 rounded-2xl bg-[#F8FAFC] border border-slate-200/60 p-4 flex items-center gap-3 shrink-0 shadow-2xs">
                            <Clock className="w-4 h-4 text-slate-500" />
                            <span className="font-black text-slate-900 text-sm sm:text-base font-sans">
                              {slot}
                            </span>
                          </div>

                          {/* Right Card (Assigned or Available) */}
                          {assignedStudents.length > 0 ? (
                            <div className="flex-1 flex flex-col gap-2">
                              {assignedStudents.map(student => (
                                <div
                                  key={student.id}
                                  className="h-18 sm:h-20 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.02)] px-5 py-3 flex items-center justify-between"
                                >
                                  {/* Trainee Identity */}
                                  <div className="flex items-center gap-3.5 min-w-0">
                                      <div 
                                        onClick={() => openModal('view', student)}
                                        className="min-w-15.5 sm:min-w-17.5 px-2 py-1 h-12 sm:h-13 rounded-2xl bg-[#FFF6EF] border border-[#FED7AA] hover:border-orange-400 hover:bg-[#FFEEDB] text-[#E85D04] flex flex-col items-center justify-center shrink-0 cursor-pointer shadow-2xs transition-all font-sans"
                                        title={`Enrollment No: ${student.enrollmentNo || student.id}`}
                                      >
                                        <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#E85D04] leading-none mb-0.5">
                                          NO.
                                        </span>
                                        <span className="text-sm sm:text-base font-black text-[#E85D04] leading-tight font-mono tracking-tight">
                                          {student.enrollmentNo || student.id}
                                        </span>
                                      </div>
                                    <div className="min-w-0">
                                      <h4 
                                        onClick={() => openModal('view', student)}
                                        className="font-black text-base text-slate-900 hover:text-orange-600 transition-colors cursor-pointer truncate leading-tight"
                                      >
                                        {student.name}
                                      </h4>
                                      <div className="flex items-center gap-2 mt-0.5">
                                        <span className="font-black text-xs text-emerald-600 uppercase tracking-wide">
                                          {CLASS_TYPES[student.type]?.short?.toUpperCase() || student.type?.toUpperCase()}
                                        </span>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Action Buttons */}
                                  <div className="flex items-center gap-2 shrink-0">
                                    <button
                                      type="button"
                                      onClick={() => openModal('reschedule', student)}
                                      className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-black text-xs px-4 py-2 rounded-xl transition-colors cursor-pointer shadow-2xs"
                                    >
                                      Change
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => handleRemoveFromSlot(student.id)}
                                      className="bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-100 font-black text-xs px-4 py-2 rounded-xl transition-colors cursor-pointer shadow-2xs"
                                    >
                                      Clear
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="flex-1 h-18 sm:h-20 rounded-2xl border-2 border-dashed border-slate-200/90 bg-slate-50/30 px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
                              <span className="text-slate-400 font-semibold italic text-xs sm:text-sm">
                                Slot Available
                              </span>
                              <div className="flex items-center gap-2">
                                <button
                                  type="button"
                                  onClick={() => openModal('assign_slot', { time: slot })}
                                  className="bg-orange-50 hover:bg-orange-100 text-orange-700 border border-orange-200/90 font-black text-xs px-3.5 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs"
                                  title="Assign an existing registered trainee to this slot"
                                >
                                  <Users className="w-3.5 h-3.5 text-orange-600" />
                                  <span>Assign Trainee</span>
                                </button>
                                <button
                                  type="button"
                                  onClick={() => openModal('add', { time: slot })}
                                  className="bg-[#0B1528] hover:bg-slate-800 text-white font-black text-xs px-3.5 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs"
                                  title="Register and schedule a new trainee"
                                >
                                  <Plus className="w-3.5 h-3.5" />
                                  <span className="hidden sm:inline">Add New</span>
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* SUBTAB: ATTENDANCE MASTER / DAILY ATTENDANCE DASHBOARD */}
              {adminSubTab === 'attendance' && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  {/* 1. Date Navigation & View Mode Ribbon */}
                  <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-100 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    {/* Left: View Mode Pills (Daily Attendance Sheet vs Date Audit Log) */}
                    <div className="flex items-center gap-1.5 p-1 bg-slate-100/90 rounded-2xl self-start sm:self-auto">
                      <button
                        type="button"
                        onClick={() => setAttendanceViewMode('sheet')}
                        className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
                          attendanceViewMode === 'sheet'
                            ? 'bg-white text-slate-900 shadow-xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <UserCheck className="w-3.5 h-3.5 text-orange-600" />
                        <span>Attendance Sheet</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setAttendanceViewMode('log')}
                        className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
                          attendanceViewMode === 'log'
                            ? 'bg-white text-slate-900 shadow-xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <FileText className="w-3.5 h-3.5 text-blue-600" />
                        <span>Daily Logs ({attendanceDateLogs.length})</span>
                      </button>
                    </div>

                    {/* Center/Right: Interactive Date Navigation & Monthly Calendar Button */}
                    <div className="flex items-center gap-2 flex-wrap">
                      {/* Quick Today Jump */}
                      <button
                        type="button"
                        onClick={() => {
                          const now = new Date();
                          setAttendanceDate(now);
                          setCalViewDate(now);
                          showToast('Jumped to Today');
                        }}
                        className={`px-3.5 py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer border ${
                          isSameDay(attendanceDate, new Date())
                            ? 'bg-orange-500 text-white border-orange-500 shadow-xs'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                        title="Jump to Today"
                      >
                        Today
                      </button>

                      {/* Previous Day Arrow */}
                      <button
                        type="button"
                        onClick={() => {
                          const prev = new Date(attendanceDate);
                          prev.setDate(prev.getDate() - 1);
                          setAttendanceDate(prev);
                          setCalViewDate(prev);
                        }}
                        className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer shadow-2xs"
                        title="Previous Day"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>

                      {/* Selected Date Badge Display */}
                      <div className="px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-orange-600" />
                        <span className="text-xs sm:text-sm font-black text-slate-800 font-sans">
                          {attendanceDate.toLocaleDateString('en-IN', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' })}
                        </span>
                      </div>

                      {/* Next Day Arrow */}
                      <button
                        type="button"
                        onClick={() => {
                          const next = new Date(attendanceDate);
                          next.setDate(next.getDate() + 1);
                          setAttendanceDate(next);
                          setCalViewDate(next);
                        }}
                        className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer shadow-2xs"
                        title="Next Day"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      {/* Open Attendance Monthly Calendar Modal */}
                      <button
                        type="button"
                        onClick={() => {
                          setCalContext('attendance');
                          setCalViewDate(new Date(attendanceDate));
                          setShowFullCalendar(true);
                        }}
                        className="px-4 py-2.5 rounded-xl bg-orange-50 hover:bg-orange-100 text-orange-700 border border-orange-200/90 text-xs font-black flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs group"
                        title="Open Attendance Monthly Calendar (View Present & Absent per date)"
                      >
                        <CalendarDays className="w-4 h-4 text-orange-600 group-hover:scale-110 transition-transform" />
                        <span className="hidden sm:inline">Attendance Monthly Calendar</span>
                        <span className="sm:hidden">Calendar</span>
                      </button>
                    </div>
                  </div>

                  {/* 2. Top 4 KPI Metrics Cards for Selected Date */}
                  <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
                    {/* Card 1: TOTAL SCHEDULED */}
                    <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] flex items-center gap-4.5">
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#EEF4FF] text-[#3B82F6] flex items-center justify-center shrink-0">
                        <Users className="w-6 h-6 stroke-[2.2]" />
                      </div>
                      <div>
                        <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
                          TOTAL SCHEDULED
                        </span>
                        <span className="text-3xl sm:text-4xl font-black text-slate-900 block mt-0.5 font-sans">
                          {attendanceDateStats.total}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400 mt-0.5 block">
                          enrolled trainees
                        </span>
                      </div>
                    </div>

                    {/* Card 2: PRESENT TODAY */}
                    <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] flex items-center gap-4.5">
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#ECFDF5] text-[#10B981] flex items-center justify-center shrink-0">
                        <UserCheck className="w-6 h-6 stroke-[2.2]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
                            PRESENT
                          </span>
                          <span className="text-[10px] font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60 font-mono">
                            {attendanceDateStats.turnoutRate}%
                          </span>
                        </div>
                        <span className="text-3xl sm:text-4xl font-black text-emerald-600 block mt-0.5 font-sans">
                          {attendanceDateStats.presentCount}
                        </span>
                        <div className="w-full h-1.5 bg-slate-100 rounded-full mt-2 overflow-hidden">
                          <div 
                            className="h-full bg-emerald-500 rounded-full transition-all duration-500" 
                            style={{ width: `${attendanceDateStats.turnoutRate}%` }} 
                          />
                        </div>
                      </div>
                    </div>

                    {/* Card 3: ABSENT / MISSED */}
                    <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] flex items-center gap-4.5">
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#FFF1F2] text-[#F43F5E] flex items-center justify-center shrink-0">
                        <XCircle className="w-6 h-6 stroke-[2.2]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
                            ABSENT
                          </span>
                          <span className="text-[10px] font-black text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200/60 font-mono">
                            {attendanceDateStats.absenteeRate}%
                          </span>
                        </div>
                        <span className="text-3xl sm:text-4xl font-black text-rose-600 block mt-0.5 font-sans">
                          {attendanceDateStats.absentCount}
                        </span>
                        <span className="text-[10px] font-bold text-rose-500 mt-0.5 block">
                          missed training
                        </span>
                      </div>
                    </div>

                    {/* Card 4: PENDING / NOT MARKED */}
                    <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] flex items-center gap-4.5">
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#FFFBEB] text-[#F59E0B] flex items-center justify-center shrink-0">
                        <Clock className="w-6 h-6 stroke-[2.2]" />
                      </div>
                      <div>
                        <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
                          PENDING
                        </span>
                        <span className="text-3xl sm:text-4xl font-black text-amber-600 block mt-0.5 font-sans">
                          {attendanceDateStats.pendingCount}
                        </span>
                        <span className="text-[10px] font-bold text-amber-600/90 mt-0.5 block">
                          awaiting check-in
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 3. Search Bar, Status Filter Pills & Quick Bulk Actions */}
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Search Input */}
                    <div className="relative flex-1 w-full">
                      <Search className="w-4 h-4 text-slate-400 absolute left-4.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Search by trainee name, enrollment no, or slot..."
                        value={attendanceSearchTerm}
                        onChange={(e) => setAttendanceSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-white border border-slate-200 text-sm font-bold text-slate-900 placeholder:text-slate-400 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 shadow-2xs transition-all"
                      />
                      {attendanceSearchTerm && (
                        <button 
                          type="button" 
                          onClick={() => setAttendanceSearchTerm('')} 
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    {/* Quick Bulk Action Buttons */}
                    <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
                      <button
                        type="button"
                        onClick={() => handleBulkMarkAttendance('present')}
                        className="px-4 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer shadow-sm active:scale-95 shrink-0"
                        title="Mark all trainees as present for this date"
                      >
                        <Check className="w-4 h-4 stroke-[2.5]" />
                        <span>Mark All Present</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleBulkMarkAttendance('absent')}
                        className="px-4 py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer shadow-sm active:scale-95 shrink-0"
                        title="Mark all trainees as absent for this date"
                      >
                        <X className="w-4 h-4 stroke-[2.5]" />
                        <span>Mark All Absent</span>
                      </button>
                    </div>
                  </div>

                  {/* Filter Pills */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-1">
                    <button
                      type="button"
                      onClick={() => setAttendanceStatusFilter('all')}
                      className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer shrink-0 ${
                        attendanceStatusFilter === 'all'
                          ? 'bg-slate-900 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      All Trainees ({students.length})
                    </button>

                    <button
                      type="button"
                      onClick={() => setAttendanceStatusFilter('present')}
                      className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer shrink-0 flex items-center gap-1.5 ${
                        attendanceStatusFilter === 'present'
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : 'bg-emerald-50 text-emerald-700 border border-emerald-200/60 hover:bg-emerald-100'
                      }`}
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>Present ({attendanceDateStats.presentCount})</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setAttendanceStatusFilter('absent')}
                      className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer shrink-0 flex items-center gap-1.5 ${
                        attendanceStatusFilter === 'absent'
                          ? 'bg-rose-600 text-white shadow-xs'
                          : 'bg-rose-50 text-rose-700 border border-rose-200/60 hover:bg-rose-100'
                      }`}
                    >
                      <span className="w-2 h-2 rounded-full bg-rose-400" />
                      <span>Absent ({attendanceDateStats.absentCount})</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setAttendanceStatusFilter('pending')}
                      className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer shrink-0 flex items-center gap-1.5 ${
                        attendanceStatusFilter === 'pending'
                          ? 'bg-amber-600 text-white shadow-xs'
                          : 'bg-amber-50 text-amber-700 border border-amber-200/60 hover:bg-amber-100'
                      }`}
                    >
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <span>Pending ({attendanceDateStats.pendingCount})</span>
                    </button>
                  </div>

                  {/* 4. MAIN VIEW: Sheet Mode vs Log Mode */}
                  {attendanceViewMode === 'sheet' ? (
                    /* SHEET MODE: Trainee Attendance Cards with 1-Click Action Buttons */
                    <div className="space-y-3.5">
                      {filteredAttendanceStudents.length > 0 ? (
                        filteredAttendanceStudents.map(student => {
                          const att = getTraineeAttendanceForDate(student, attendanceDateKey);
                          const isPresent = att.status === 'present';
                          const isAbsent = att.status === 'absent';
                          const isPending = att.status === 'pending';
                          const pkg = getPackageDetails(student.type);
                          const totalDays = student.stats?.total || 21;
                          const attendedDays = student.stats?.attended || 0;
                          const progressPct = Math.round((attendedDays / totalDays) * 100);

                          return (
                            <div
                              key={student.id}
                              className={`bg-white rounded-2xl border transition-all p-4 sm:p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.02)] ${
                                isPresent
                                  ? 'border-emerald-200/80 bg-emerald-50/10'
                                  : isAbsent
                                  ? 'border-rose-200/80 bg-rose-50/10'
                                  : 'border-slate-100 hover:border-slate-200'
                              }`}
                            >
                              {/* Left: Identity */}
                              <div className="flex items-center gap-3.5 min-w-0">
                                <div className="min-w-15.5 sm:min-w-17.5 px-2 py-1 h-12 sm:h-13 rounded-2xl bg-[#FFF6EF] border border-[#FED7AA] text-[#E85D04] flex flex-col items-center justify-center shrink-0 shadow-2xs font-sans">
                                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#E85D04] leading-none mb-0.5">
                                    NO.
                                  </span>
                                  <span className="text-sm sm:text-base font-black text-[#E85D04] leading-tight font-mono tracking-tight">
                                    {student.enrollmentNo || student.id}
                                  </span>
                                </div>

                                <div className="min-w-0">
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <h4 className="font-black text-base text-slate-900 leading-tight truncate">
                                      {student.name}
                                    </h4>
                                    <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-orange-50 text-orange-700 font-mono">
                                      {pkg?.short || student.type?.toUpperCase()}
                                    </span>
                                  </div>

                                  <div className="flex items-center gap-3 mt-1 text-xs text-slate-500 font-bold flex-wrap">
                                    <span className="flex items-center gap-1">
                                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                                      <span>Slot: {student.time || '06:00 AM'}</span>
                                    </span>
                                    {student.phone && (
                                      <>
                                        <span className="text-slate-300">•</span>
                                        <span className="flex items-center gap-1 font-mono text-[11px]">
                                          <Phone className="w-3 h-3 text-slate-400" />
                                          {student.phone}
                                        </span>
                                      </>
                                    )}
                                    <span className="text-slate-300">•</span>
                                    <span className="text-[11px] text-slate-400">
                                      Total Attended: <strong className="text-slate-700">{attendedDays}/{totalDays}</strong> ({progressPct}%)
                                    </span>
                                  </div>
                                </div>
                              </div>

                              {/* Middle: Current Status Pill */}
                              <div className="flex items-center gap-2">
                                {isPresent && (
                                  <div className="px-3.5 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-black flex items-center gap-1.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                    <span>Present at {att.time}</span>
                                  </div>
                                )}
                                {isAbsent && (
                                  <div className="px-3.5 py-1.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-black flex items-center gap-1.5">
                                    <XCircle className="w-4 h-4 text-rose-600" />
                                    <span>Absent (Missed Session)</span>
                                  </div>
                                )}
                                {isPending && (
                                  <div className="px-3.5 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs font-black flex items-center gap-1.5">
                                    <Clock className="w-4 h-4 text-amber-600" />
                                    <span>Pending (Not Marked)</span>
                                  </div>
                                )}
                              </div>

                              {/* Right: Instant 1-Click Action Buttons */}
                              <div className="flex items-center gap-2 shrink-0 self-end lg:self-center">
                                <button
                                  type="button"
                                  onClick={() => handleMarkAttendanceForDate(student.id, 'present')}
                                  className={`px-4 py-2.5 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs ${
                                    isPresent
                                      ? 'bg-emerald-600 text-white ring-2 ring-emerald-600/20'
                                      : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200'
                                  }`}
                                  title="Mark Trainee Present"
                                >
                                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                                  <span>Present</span>
                                </button>

                                <button
                                  type="button"
                                  onClick={() => handleMarkAttendanceForDate(student.id, 'absent')}
                                  className={`px-4 py-2.5 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs ${
                                    isAbsent
                                      ? 'bg-rose-600 text-white ring-2 ring-rose-600/20'
                                      : 'bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200'
                                  }`}
                                  title="Mark Trainee Absent"
                                >
                                  <X className="w-3.5 h-3.5 stroke-[2.5]" />
                                  <span>Absent</span>
                                </button>

                                <button
                                  type="button"
                                  onClick={() => handleMarkAttendanceForDate(student.id, 'pending')}
                                  className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer shadow-2xs"
                                  title="Reset to Pending"
                                >
                                  <RotateCcw className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <div className="py-16 text-center text-slate-400 font-bold flex flex-col items-center justify-center gap-2">
                          <CheckCircle2 className="w-12 h-12 text-slate-300" />
                          <p className="text-base font-black text-slate-700">No trainees found</p>
                          <p className="text-xs text-slate-400">Try adjusting your search query or status filter</p>
                          {attendanceStatusFilter !== 'all' && (
                            <button
                              type="button"
                              onClick={() => setAttendanceStatusFilter('all')}
                              className="mt-2 text-xs font-black uppercase tracking-wider text-orange-600 hover:underline cursor-pointer"
                            >
                              Reset to All Trainees
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    /* LOG MODE: Daily Attendance Chronological Log Table */
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.02)] overflow-hidden">
                      <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <FileText className="w-5 h-5 text-orange-600" />
                          <div>
                            <h4 className="text-sm font-black text-slate-900 leading-tight">
                              Daily Attendance Audit Log
                            </h4>
                            <span className="text-[11px] font-bold text-slate-500">
                              {attendanceDate.toLocaleDateString('en-IN', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' })}
                            </span>
                          </div>
                        </div>
                        <span className="text-xs font-black text-slate-600 bg-slate-100 px-3 py-1 rounded-xl">
                          {attendanceDateLogs.length} Records
                        </span>
                      </div>

                      {attendanceDateLogs.length > 0 ? (
                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-xs">
                            <thead className="bg-slate-50 border-b border-slate-100 text-slate-400 font-black uppercase tracking-wider text-[10px]">
                              <tr>
                                <th className="py-3.5 px-4">Time</th>
                                <th className="py-3.5 px-4">Trainee</th>
                                <th className="py-3.5 px-4">Course</th>
                                <th className="py-3.5 px-4">Scheduled Slot</th>
                                <th className="py-3.5 px-4">Status</th>
                                <th className="py-3.5 px-4 text-right">Quick Action</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                              {attendanceDateLogs.map(log => {
                                const validTime = log.time && log.time !== 'Absent' && log.time !== 'Missed Session' 
                                  ? log.time 
                                  : (log.slot || '10:00 AM');
                                return (
                                  <tr key={log.id} className="hover:bg-slate-50/60 transition-colors font-medium">
                                    <td className="py-3.5 px-4 font-mono font-black text-slate-900">
                                      <div className="flex items-center gap-1.5">
                                        <Clock className="w-3.5 h-3.5 text-orange-500" />
                                        <span>{validTime}</span>
                                      </div>
                                    </td>
                                    <td className="py-3.5 px-4">
                                      <div className="flex items-center gap-2.5">
                                        <span className="font-sans text-[10px] font-black text-[#E85D04] bg-[#FFF6EF] border border-[#FED7AA] px-2 py-0.5 rounded-lg shadow-2xs">
                                          NO. {log.enrollmentNo}
                                        </span>
                                        <strong className="text-slate-900 font-black">{log.name}</strong>
                                      </div>
                                    </td>
                                  <td className="py-3.5 px-4 text-slate-600">
                                    {log.course}
                                  </td>
                                  <td className="py-3.5 px-4 font-mono text-slate-600">
                                    {log.slot}
                                  </td>
                                  <td className="py-3.5 px-4">
                                    {log.status === 'present' ? (
                                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 font-black text-[11px] border border-emerald-200/60">
                                        <Check className="w-3 h-3 stroke-[2.5]" />
                                        Present
                                      </span>
                                    ) : (
                                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-rose-50 text-rose-700 font-black text-[11px] border border-rose-200/60">
                                        <X className="w-3 h-3 stroke-[2.5]" />
                                        Absent
                                      </span>
                                    )}
                                  </td>
                                  <td className="py-3.5 px-4 text-right">
                                    <button
                                      type="button"
                                      onClick={() => handleMarkAttendanceForDate(log.id, log.status === 'present' ? 'absent' : 'present')}
                                      className="text-orange-600 hover:text-orange-700 font-black hover:underline cursor-pointer"
                                    >
                                      Toggle Status
                                    </button>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                          </table>
                        </div>
                      ) : (
                        <div className="p-12 text-center text-slate-400 font-bold">
                          <Clock className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                          <p className="text-sm font-black text-slate-700">No attendance records logged for this date yet</p>
                          <p className="text-xs text-slate-400 mt-0.5">Switch to Attendance Sheet above to mark trainees present or absent</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* SUBTAB 3: ACCOUNTS MASTER / DASHBOARD */}
              {adminSubTab === 'accounts' && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  {/* Top Accounts Calendar & Period Navigation Ribbon */}
                  <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-100 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    {/* Left: Scope Selector Tabs */}
                    <div className="flex items-center gap-1.5 p-1 bg-slate-100/90 rounded-2xl self-start sm:self-auto">
                      <button
                        type="button"
                        onClick={() => setAccountsPeriodScope('monthly')}
                        className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                          accountsPeriodScope === 'monthly'
                            ? 'bg-white text-slate-900 shadow-xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Monthly View
                      </button>
                      <button
                        type="button"
                        onClick={() => setAccountsPeriodScope('yearly')}
                        className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                          accountsPeriodScope === 'yearly'
                            ? 'bg-white text-slate-900 shadow-xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Yearly View
                      </button>
                      <button
                        type="button"
                        onClick={() => setAccountsPeriodScope('all')}
                        className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                          accountsPeriodScope === 'all'
                            ? 'bg-white text-slate-900 shadow-xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        All Time
                      </button>
                    </div>

                    {/* Center/Right: Interactive Month & Year Controls */}
                    <div className="flex items-center gap-2 flex-wrap">
                      {/* Previous Period Arrow */}
                      <button
                        type="button"
                        onClick={() => {
                          if (accountsPeriodScope === 'monthly') {
                            if (accountsSelectedMonth === 0) {
                              setAccountsSelectedMonth(11);
                              setAccountsSelectedYear(prev => prev - 1);
                            } else {
                              setAccountsSelectedMonth(prev => prev - 1);
                            }
                          } else {
                            setAccountsSelectedYear(prev => prev - 1);
                          }
                        }}
                        className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer shadow-2xs"
                        title="Previous Month/Year"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>

                      {/* Month Dropdown (Used in Monthly View) */}
                      {accountsPeriodScope === 'monthly' && (
                        <select
                          value={accountsSelectedMonth}
                          onChange={(e) => setAccountsSelectedMonth(Number(e.target.value))}
                          className="px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-black text-slate-800 outline-none focus:border-orange-500 cursor-pointer shadow-2xs"
                        >
                          {MONTH_NAMES.map((m, idx) => (
                            <option key={m} value={idx}>{m}</option>
                          ))}
                        </select>
                      )}

                      {/* Year Dropdown */}
                      <select
                        value={accountsSelectedYear}
                        onChange={(e) => setAccountsSelectedYear(Number(e.target.value))}
                        className="px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-black text-slate-800 outline-none focus:border-orange-500 cursor-pointer shadow-2xs font-mono"
                      >
                        {YEARS_LIST.map(y => (
                          <option key={y} value={y}>{y}</option>
                        ))}
                      </select>

                      {/* Next Period Arrow */}
                      <button
                        type="button"
                        onClick={() => {
                          if (accountsPeriodScope === 'monthly') {
                            if (accountsSelectedMonth === 11) {
                              setAccountsSelectedMonth(0);
                              setAccountsSelectedYear(prev => prev + 1);
                            } else {
                              setAccountsSelectedMonth(prev => prev + 1);
                            }
                          } else {
                            setAccountsSelectedYear(prev => prev + 1);
                          }
                        }}
                        className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer shadow-2xs"
                        title="Next Month/Year"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      {/* Open Calendar Modal Button */}
                      <button
                        type="button"
                        onClick={() => {
                          setCalContext('accounts');
                          setCalViewDate(new Date(accountsSelectedYear, accountsSelectedMonth, 1));
                          setShowFullCalendar(true);
                        }}
                        className="px-4 py-2.5 rounded-xl bg-orange-50 hover:bg-orange-100 text-orange-700 border border-orange-200/90 text-xs font-black flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
                        title="Open Financial Calendar Modal"
                      >
                        <Calendar className="w-3.5 h-3.5 text-orange-600" />
                        <span className="hidden sm:inline">Calendar View</span>
                      </button>
                    </div>
                  </div>

                  {/* Dedicated Financial Dashboard for Selected Period Scope (100% White Theme) */}
                  {(() => {
                    const isM = accountsPeriodScope === 'monthly';
                    const isY = accountsPeriodScope === 'yearly';
                    const activeData = isM ? accountsStats.monthly : isY ? accountsStats.yearly : accountsStats.allTime;
                    const activeTitle = isM 
                      ? `${MONTH_NAMES[accountsSelectedMonth]} ${accountsSelectedYear}` 
                      : isY 
                      ? `Full Year ${accountsSelectedYear}` 
                      : 'All-Time Cumulative';
                    const activeTag = isM ? 'MONTHLY LEDGER' : isY ? 'ANNUAL FISCAL' : 'LIFETIME LEDGER';
                    const activeSub = isM 
                      ? 'Monthly Operational Ledger & Turnout' 
                      : isY 
                      ? 'Annual Fiscal Revenue & Overview' 
                      : 'Lifetime Cumulative Revenue & History';
                    const ActiveIcon = isM ? Calendar : isY ? CalendarDays : Receipt;

                    return (
                      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] space-y-6">
                        {/* Top Header Row */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
                          <div className="flex items-center gap-3.5">
                            <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 border border-orange-100 flex items-center justify-center font-black shadow-2xs shrink-0">
                              <ActiveIcon className="w-6 h-6 stroke-[2.2]" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-orange-100/80 text-orange-800 font-mono">
                                  {activeTag}
                                </span>
                                <span className="text-[11px] font-bold text-slate-400">
                                  &bull; {activeSub}
                                </span>
                              </div>
                              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5 leading-tight font-sans">
                                {activeTitle}
                              </h3>
                            </div>
                          </div>

                          {/* Trainee Count Chip */}
                          <div className="flex items-center gap-2 self-start sm:self-auto">
                            <div className="px-4 py-2 rounded-2xl bg-slate-50 border border-slate-200/80 text-right">
                              <span className="text-xs sm:text-sm font-black text-slate-900 block font-sans">
                                {activeData.traineesCount} <span className="text-slate-400 font-bold text-[11px]">Trainees</span>
                              </span>
                              <span className="text-[10px] font-bold text-slate-400 block mt-0.5">
                                <strong className="text-emerald-600">{activeData.settledCount} cleared</strong> &bull; <strong className="text-rose-500">{activeData.dueCount} pending</strong>
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* 3 Financial KPI Metrics Cards in Pure White Theme */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                          {/* Card 1: Fee Collected */}
                          <div className="p-5.5 rounded-2xl bg-slate-50/80 border border-slate-100 flex flex-col justify-between">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                                <Wallet className="w-4 h-4 text-emerald-600" />
                                FEE COLLECTED
                              </span>
                            </div>
                            <div>
                              <span className="text-2xl sm:text-3xl font-black text-emerald-600 font-sans tracking-tight block">
                                ₹{activeData.paid.toLocaleString('en-IN')}
                              </span>
                              <span className="text-[11px] font-bold text-slate-400 block mt-0.5">
                                of ₹{activeData.billed.toLocaleString('en-IN')} total billed
                              </span>
                              <div className="w-full h-1.5 bg-slate-200/70 rounded-full mt-3 overflow-hidden">
                                <div 
                                  className="h-full bg-linear-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-500"
                                  style={{ width: `${Math.min(100, activeData.billed > 0 ? (activeData.paid / activeData.billed) * 100 : 0)}%` }}
                                />
                              </div>
                            </div>
                          </div>

                          {/* Card 2: Total Billed */}
                          <div className="p-5.5 rounded-2xl bg-slate-50/80 border border-slate-100 flex flex-col justify-between">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                                <Receipt className="w-4 h-4 text-blue-600" />
                                TOTAL BILLED
                              </span>
                              <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200/60 font-mono">
                                {activeData.traineesCount} pkgs
                              </span>
                            </div>
                            <div>
                              <span className="text-2xl sm:text-3xl font-black text-slate-900 font-sans tracking-tight block">
                                ₹{activeData.billed.toLocaleString('en-IN')}
                              </span>
                              <span className="text-[11px] font-bold text-slate-400 block mt-0.5">
                                Gross package value
                              </span>
                            </div>
                          </div>

                          {/* Card 3: Balance Due */}
                          <div className="p-5.5 rounded-2xl bg-rose-50/50 border border-rose-100/70 flex flex-col justify-between">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[11px] font-black uppercase tracking-wider text-rose-500 flex items-center gap-1.5">
                                <IndianRupee className="w-4 h-4 text-rose-600" />
                                BALANCE DUE
                              </span>
                              <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-rose-100 text-rose-700 border border-rose-200/60 font-mono">
                                {activeData.dueCount} pending
                              </span>
                            </div>
                            <div>
                              <span className="text-2xl sm:text-3xl font-black text-rose-600 font-sans tracking-tight block">
                                ₹{activeData.due.toLocaleString('en-IN')}
                              </span>
                              <span className="text-[11px] font-bold text-rose-500/80 block mt-0.5">
                                Awaiting collection
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })()}

                  {/* Top Search & Filter Bar (Matching Image 3) */}
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Search Input */}
                    <div className="relative flex-1 w-full">
                      <Search className="w-4 h-4 text-slate-400 absolute left-4.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Search by name, ID, or username..."
                        value={accountsSearchTerm}
                        onChange={(e) => setAccountsSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-white border border-slate-200 text-sm font-bold text-slate-900 placeholder:text-slate-400 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 shadow-2xs transition-all"
                      />
                      {accountsSearchTerm && (
                        <button 
                          type="button" 
                          onClick={() => setAccountsSearchTerm('')} 
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto">
                      {/* Filter Dropdown with 6 Packages from Image 2 */}
                      <div className="relative flex-1 md:flex-none">
                        <button
                          type="button"
                          onClick={() => setIsAccountsPackageFilterOpen(!isAccountsPackageFilterOpen)}
                          className={`w-full md:w-auto flex items-center justify-between gap-3 px-5 py-3.5 rounded-2xl border text-xs sm:text-sm font-black transition-all cursor-pointer shadow-2xs ${
                            isAccountsPackageFilterOpen || accountsPackageFilter !== 'all'
                              ? 'bg-white border-orange-500 text-slate-900 ring-2 ring-orange-100'
                              : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <Filter className="w-4 h-4 text-slate-400" />
                            <span>
                              {accountsPackageFilter === 'all'
                                ? 'All Classes'
                                : (DRIVING_PACKAGES[accountsPackageFilter]?.title || accountsPackageFilter)}
                            </span>
                          </div>
                          <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isAccountsPackageFilterOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isAccountsPackageFilterOpen && (
                          <>
                            <div className="fixed inset-0 z-30" onClick={() => setIsAccountsPackageFilterOpen(false)}></div>
                            <div className="absolute top-full left-0 right-0 md:left-auto md:right-0 md:w-80 mt-2 p-2 rounded-2xl bg-white border border-slate-200 shadow-2xl z-40 max-h-95 overflow-y-auto custom-scroll animate-in fade-in zoom-in-95 duration-150">
                              <div className="px-3 py-2 border-b border-slate-100 mb-1 flex items-center justify-between">
                                <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                                  Filter by Package
                                </span>
                                {accountsPackageFilter !== 'all' && (
                                  <button
                                    type="button"
                                    onClick={() => { setAccountsPackageFilter('all'); setIsAccountsPackageFilterOpen(false); }}
                                    className="text-[10px] font-black uppercase tracking-wider text-orange-600 hover:underline cursor-pointer"
                                  >
                                    Reset
                                  </button>
                                )}
                              </div>

                              <button
                                type="button"
                                onClick={() => { setAccountsPackageFilter('all'); setIsAccountsPackageFilterOpen(false); }}
                                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs transition-colors cursor-pointer mb-1 ${
                                  accountsPackageFilter === 'all' ? 'bg-orange-50 text-orange-700 font-black' : 'text-slate-700 hover:bg-slate-50 font-bold'
                                }`}
                              >
                                <span>All Classes & Packages</span>
                                <Check className={`w-4 h-4 ${accountsPackageFilter === 'all' ? 'opacity-100 text-orange-600' : 'opacity-0'}`} />
                              </button>

                              {Object.values(DRIVING_PACKAGES).map(pkg => {
                                const isSelected = accountsPackageFilter === pkg.id;
                                return (
                                  <button
                                    key={pkg.id}
                                    type="button"
                                    onClick={() => { setAccountsPackageFilter(pkg.id); setIsAccountsPackageFilterOpen(false); }}
                                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs transition-colors cursor-pointer mb-1 text-left ${
                                      isSelected
                                        ? 'bg-orange-50 text-orange-700 font-black'
                                        : 'text-slate-700 hover:bg-slate-50 font-semibold'
                                    }`}
                                  >
                                    <span className="truncate pr-2">{pkg.title}</span>
                                    <Check className={`w-4 h-4 shrink-0 ${isSelected ? 'opacity-100 text-orange-600' : 'opacity-0'}`} />
                                  </button>
                                );
                              })}
                            </div>
                          </>
                        )}
                      </div>

                      {/* Add Trainee Button */}
                      <button
                        type="button"
                        onClick={() => openModal('add')}
                        className="bg-[#E85D04] hover:bg-[#d45302] text-white font-black text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-2xl shadow-sm transition-all active:scale-95 flex items-center gap-2 cursor-pointer shrink-0"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add Trainee</span>
                      </button>
                    </div>
                  </div>

                  {/* Quick Fee Status Filter Pills & Dynamic Period Scope */}
                  {(() => {
                    const isM = accountsPeriodScope === 'monthly';
                    const isY = accountsPeriodScope === 'yearly';
                    const activeScopeData = isM ? accountsStats.monthly : isY ? accountsStats.yearly : accountsStats.allTime;
                    const periodPillTitle = isM 
                      ? `${MONTH_NAMES[accountsSelectedMonth]} Trainees (${activeScopeData.traineesCount})`
                      : isY 
                      ? `${accountsSelectedYear} Trainees (${activeScopeData.traineesCount})`
                      : `All-Time (${students.length})`;

                    return (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 overflow-x-auto pb-1">
                          <button
                            type="button"
                            onClick={() => setAccountsStatusFilter('all')}
                            className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer shrink-0 flex items-center gap-1.5 ${
                              accountsStatusFilter === 'all'
                                ? 'bg-slate-900 text-white shadow-xs'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                            }`}
                          >
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{periodPillTitle}</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setAccountsStatusFilter('due')}
                            className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer shrink-0 flex items-center gap-2 ${
                              accountsStatusFilter === 'due'
                                ? 'bg-rose-600 text-white shadow-xs'
                                : 'bg-rose-50 text-rose-700 border border-rose-200/60 hover:bg-rose-100'
                            }`}
                          >
                            <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                            <span>Balance Due ({activeScopeData.dueCount})</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setAccountsStatusFilter('settled')}
                            className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer shrink-0 flex items-center gap-2 ${
                              accountsStatusFilter === 'settled'
                                ? 'bg-emerald-600 text-white shadow-xs'
                                : 'bg-emerald-50 text-emerald-700 border border-emerald-200/60 hover:bg-emerald-100'
                            }`}
                          >
                            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                            <span>Fully Settled ({activeScopeData.settledCount})</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setAccountsStatusFilter('all_time')}
                            className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer shrink-0 flex items-center gap-1.5 ${
                              accountsStatusFilter === 'all_time'
                                ? 'bg-blue-600 text-white shadow-xs'
                                : 'bg-blue-50 text-blue-700 border border-blue-200/60 hover:bg-blue-100'
                            }`}
                            title="View all trainees from all months"
                          >
                            <Users className="w-3.5 h-3.5" />
                            <span>All Months ({students.length})</span>
                          </button>
                        </div>

                        {/* Month & Trainees Indicator Bar */}
                        <div className="flex items-center justify-between text-xs font-bold text-slate-500 px-1">
                          <span>
                            Showing <strong className="text-slate-900 font-black">{accountsDisplayStudents.length}</strong> {accountsStatusFilter === 'all_time' ? 'All Months' : accountsPeriodScope === 'monthly' ? `${MONTH_NAMES[accountsSelectedMonth]} ${accountsSelectedYear}` : accountsPeriodScope === 'yearly' ? `${accountsSelectedYear}` : 'All-Time'} records
                          </span>
                          {accountsStatusFilter !== 'all' && (
                            <span className="text-orange-600 font-black uppercase text-[11px] tracking-wider">
                              Filter: {accountsStatusFilter === 'due' ? 'Balance Due' : accountsStatusFilter === 'settled' ? 'Fully Settled' : 'All Months'}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })()}

                  {/* Trainee Accounts Cards (Exact visual styling from Image 3) */}
                  <div className="space-y-4">
                    {accountsDisplayStudents.length > 0 ? (
                      accountsDisplayStudents.map(student => {
                        const totFee = Number(student.fees?.total || 0);
                        const paidFee = Number(student.fees?.paid || 0);
                        const balance = Math.max(0, totFee - paidFee);
                        const isSettled = totFee > 0 && balance === 0;
                        const isPresentToday = student.lastCheckInDate === todayKey || student.status === 'present';
                        const isAbsentToday = student.status === 'absent';
                        const isPendingToday = !isPresentToday && !isAbsentToday;
                        const traineeUser = student.username || getTraineeUsername(student.enrollmentNo);
                        const pkg = getPackageDetails(student.type);
                        const percentPaid = totFee > 0 ? Math.min(100, Math.round((paidFee / totFee) * 100)) : 0;

                        return (
                          <div
                            key={student.id}
                            className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.03)] p-4 sm:p-5 hover:border-slate-200 transition-all flex flex-col xl:flex-row xl:items-center justify-between gap-4"
                          >
                            {/* Left: Identity */}
                            <div className="flex items-center gap-4 min-w-0">
                              <div
                                onClick={() => openModal('view', student)}
                                className="min-w-15.5 sm:min-w-17.5 px-2 py-1 h-12 sm:h-13 rounded-2xl bg-[#FFF6EF] border border-[#FED7AA] hover:border-orange-400 hover:bg-[#FFEEDB] text-[#E85D04] flex flex-col items-center justify-center shrink-0 cursor-pointer shadow-2xs transition-all font-sans group"
                                title={`Enrollment No: ${student.enrollmentNo || student.id}`}
                              >
                                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#E85D04] leading-none mb-0.5">
                                  NO.
                                </span>
                                <span className="text-sm sm:text-base font-black text-[#E85D04] leading-tight font-mono tracking-tight">
                                  {student.enrollmentNo || student.id}
                                </span>
                              </div>

                              <div className="min-w-0">
                                <h4 
                                  onClick={() => openModal('view', student)}
                                  className="text-base sm:text-lg font-black text-slate-900 hover:text-orange-600 transition-colors cursor-pointer truncate"
                                >
                                  {student.name}
                                </h4>

                                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mt-1 flex-wrap">
                                  <span className="flex items-center gap-1 text-slate-700 font-semibold">
                                    <Phone className="w-3 h-3 text-orange-600" />
                                    <span>{student.phone}</span>
                                  </span>
                                  <span className="text-slate-300">•</span>
                                  <span className="font-extrabold text-slate-700 uppercase tracking-wide">
                                    {pkg?.short?.toUpperCase() || student.type?.toUpperCase()}
                                  </span>
                                  {student.enrollmentDate && (
                                    <>
                                      <span className="text-slate-300">•</span>
                                      <span className="text-[11px] text-slate-500 font-medium">
                                        Joined: {student.enrollmentDate}
                                      </span>
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>

                            {/* Center-Right: Metrics + Actions */}
                            <div className="flex items-center justify-between xl:justify-end gap-4 sm:gap-6 flex-wrap pt-3 xl:pt-0 border-t border-slate-100 xl:border-t-0">
                              {/* 2. Fee Capsule Block matching Image 3 */}
                              <div className="bg-[#F8FAFC] border border-slate-100 rounded-2xl px-5 py-2.5 flex items-center gap-6 shrink-0 relative">
                                <div>
                                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider block mb-0.5">
                                    TOTAL FEE
                                  </span>
                                  <span className="font-black text-sm text-slate-900 font-mono">
                                    ₹{totFee}
                                  </span>
                                </div>

                                <div>
                                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider block mb-0.5">
                                    PAID
                                  </span>
                                  <span className="font-black text-sm text-emerald-600 font-mono">
                                    ₹{paidFee}
                                  </span>
                                </div>

                                <div>
                                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider block mb-0.5">
                                    BALANCE
                                  </span>
                                  {balance > 0 ? (
                                    <span className="font-black text-sm text-rose-600 font-mono">
                                      ₹{balance}
                                    </span>
                                  ) : (
                                    <span className="font-black text-sm text-emerald-600">
                                      Settled
                                    </span>
                                  )}
                                </div>
                              </div>

                              {/* 3. Action Buttons with Edit Fee, Pay, Receipt, View, Delete */}
                              <div className="flex items-center gap-2 shrink-0">
                                <button
                                  type="button"
                                  onClick={() => openModal('payment', student)}
                                  className="bg-[#ECFDF5] hover:bg-emerald-100 text-emerald-700 font-black text-xs px-3.5 py-2 rounded-xl border border-emerald-200/80 flex items-center gap-1 transition-all cursor-pointer shadow-2xs"
                                  title="Record Payment"
                                >
                                  <IndianRupee className="w-3.5 h-3.5" />
                                  <span>Pay</span>
                                </button>

                                <button
                                  type="button"
                                  onClick={() => setReceiptModal({ isOpen: true, student })}
                                  className="w-9 h-9 rounded-xl border border-slate-200 hover:border-orange-300 bg-white hover:bg-orange-50 text-slate-500 hover:text-orange-600 flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
                                  title="Print Digital Fee Receipt"
                                >
                                  <Receipt className="w-3.5 h-3.5" />
                                </button>

                                <button
                                  type="button"
                                  onClick={() => openModal('edit', student)}
                                  className="bg-white hover:bg-amber-50 text-slate-700 hover:text-amber-800 font-black text-xs px-3 py-2 rounded-xl border border-slate-200 hover:border-amber-300 flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
                                  title="Edit Fee & Trainee Details"
                                >
                                  <Edit2 className="w-3.5 h-3.5 text-amber-600" />
                                  <span>Edit Fee</span>
                                </button>

                                <button
                                  type="button"
                                  onClick={() => openModal('view', student)}
                                  className="w-9 h-9 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
                                  title="View Full Profile & Financial Ledger"
                                >
                                  <Eye className="w-3.5 h-3.5" />
                                </button>

                                <button
                                  type="button"
                                  onClick={() => setModalConfig({ isOpen: true, mode: 'delete', data: student })}
                                  className="w-9 h-9 rounded-xl border border-slate-200 hover:border-rose-200 bg-white hover:bg-rose-50 text-slate-400 hover:text-rose-600 flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
                                  title="Delete Trainee"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className="py-16 text-center text-slate-400 font-bold flex flex-col items-center justify-center gap-2">
                        <Receipt className="w-12 h-12 text-slate-300" />
                        <p className="text-base font-black text-slate-700">No accounts match your search/filter</p>
                        <p className="text-xs text-slate-400">Try adjusting your query or resetting filters</p>
                        {(accountsSearchTerm || accountsPackageFilter !== 'all' || accountsStatusFilter !== 'all') && (
                          <button
                            type="button"
                            onClick={() => {
                              setAccountsSearchTerm('');
                              setAccountsPackageFilter('all');
                              setAccountsStatusFilter('all');
                            }}
                            className="mt-2 text-xs font-black uppercase tracking-wider text-orange-600 hover:underline cursor-pointer"
                          >
                            Reset all filters
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB: CLASS SCHEDULE */}
        {authRole === 'admin' && currentTab === 'schedule' && (
          <div className="bg-white rounded-[28px] sm:rounded-4xl border border-slate-100 shadow-[0_4px_30px_-5px_rgba(0,0,0,0.03)] p-6 sm:p-8 lg:p-10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Today's Class Schedule
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                  View assigned slots from 06:00 AM to 06:00 PM
                </p>
              </div>

              <button
                type="button"
                onClick={openCalendarModal}
                className="flex items-center gap-2 border border-slate-200/90 rounded-2xl px-4 py-2.5 font-black text-xs sm:text-sm text-slate-800 bg-white hover:bg-orange-50/60 hover:border-orange-300 shadow-2xs cursor-pointer transition-all self-start sm:self-auto group"
                title="Select Date"
              >
                <CalendarDays className="w-4 h-4 text-orange-500 group-hover:scale-110 transition-transform" />
                <span className="text-orange-600 font-mono text-xs sm:text-sm font-bold">
                  {scheduleDate.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                </span>
              </button>
            </div>

            {/* Slots Timeline */}
            <div className="space-y-3.5">
              {TIME_SLOTS.map((slot) => {
                const assignedStudents = students.filter(s => s.time === slot);
                return (
                  <div key={slot} className="flex flex-col sm:flex-row sm:items-center gap-3.5">
                    {/* Left Time Box */}
                    <div className="w-full sm:w-36 h-18 sm:h-20 rounded-2xl bg-[#F8FAFC] border border-slate-200/60 p-4 flex items-center gap-3 shrink-0 shadow-2xs">
                      <Clock className="w-4 h-4 text-slate-500" />
                      <span className="font-black text-slate-900 text-sm sm:text-base font-sans">
                        {slot}
                      </span>
                    </div>

                    {/* Right Card */}
                    {assignedStudents.length > 0 ? (
                      <div className="flex-1 flex flex-col gap-2">
                        {assignedStudents.map(student => (
                          <div
                            key={student.id}
                            className="h-18 sm:h-20 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.02)] px-5 py-3 flex items-center justify-between"
                          >
                            <div className="flex items-center gap-3.5 min-w-0">
                              <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-[#FFF6EF] border border-[#FED7AA] text-[#E85D04] flex flex-col items-center justify-center shrink-0 shadow-2xs font-sans">
                                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#E85D04] leading-none mb-0.5">
                                  NO.
                                </span>
                                <span className="text-lg sm:text-xl font-black text-[#E85D04] leading-none">
                                  {student.enrollmentNo || student.id}
                                </span>
                              </div>
                              <div className="min-w-0">
                                <h4 className="font-black text-base text-slate-900 truncate leading-tight">
                                  {student.name}
                                </h4>
                                <span className="font-black text-xs text-teal-600 uppercase tracking-wide mt-0.5 block">
                                  {CLASS_TYPES[student.type]?.short?.toUpperCase() || student.type?.toUpperCase()}
                                </span>
                              </div>
                            </div>

                            <span className="bg-slate-100 text-slate-500 font-extrabold text-[11px] px-3.5 py-1.5 rounded-lg uppercase tracking-wider shrink-0">
                              ASSIGNED
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex-1 h-18 sm:h-20 rounded-2xl border-2 border-dashed border-slate-200/90 bg-slate-50/30 px-6 flex items-center">
                        <span className="text-slate-400 font-semibold italic text-xs sm:text-sm">
                          Slot Available
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 4: TRAINEE PORTAL */}
        {((currentTab === 'portal') || (authRole === 'trainee')) && (
          <div className="space-y-6">
            {!loggedInTrainee ? (
              <div className="max-w-md mx-auto py-12 text-center bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center mx-auto text-orange-600">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-black text-slate-900">Select a Trainee to Preview</h3>
                <p className="text-xs text-slate-500 font-bold">
                  Choose any trainee from the directory to inspect their attendance cards, slot timings, and payment receipts.
                </p>
                <button
                  type="button"
                  onClick={() => setCurrentTab('admin')}
                  className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-black uppercase tracking-wider transition-all cursor-pointer shadow-xs inline-flex items-center gap-2"
                >
                  <span>Go to Trainee Directory</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              /* MODERN TRAINEE DASHBOARD */
              <div className="space-y-6 max-w-5xl mx-auto py-2">
                {/* Admin Preview Mode Notice */}
                {authRole === 'admin' && (
                  <div className="bg-amber-500/10 border border-amber-300 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-amber-900 shadow-xs">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center font-black shrink-0">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-black">
                          Admin Preview Mode: <span className="font-extrabold text-amber-950">{loggedInTrainee.name}</span> ({loggedInTrainee.enrollmentNo ? `ST-${String(loggedInTrainee.enrollmentNo).padStart(3, '0')}` : loggedInTrainee.id})
                        </p>
                        <p className="text-[11px] text-amber-700 font-bold">
                          You are viewing this portal as an administrator.
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setCurrentTab('admin');
                        showToast('Returned to Admin Panel');
                      }}
                      className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-black uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-sm transition-all"
                    >
                      <ArrowRight className="w-4 h-4 rotate-180" />
                      <span>Return to Admin Panel</span>
                    </button>
                  </div>
                )}

                {/* TOP WELCOME & IDENTITY HEADER CARD */}
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                  <div className="flex items-center gap-4">
                    {/* Orange Avatar */}
                    <div className="w-16 h-16 rounded-2xl bg-orange-500 text-white font-black text-2xl flex items-center justify-center shrink-0 shadow-md shadow-orange-500/20">
                      {loggedInTrainee.initials || (loggedInTrainee.name ? loggedInTrainee.name.slice(0, 2).toUpperCase() : 'AK')}
                    </div>

                    <div>
                      <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
                        WELCOME BACK
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                        {loggedInTrainee.name}
                      </h2>
                      <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                        <span className="px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-600 font-bold text-xs border border-slate-200/60 font-mono">
                          ID: {loggedInTrainee.enrollmentNo ? `ST-${String(loggedInTrainee.enrollmentNo).padStart(3, '0')}` : (loggedInTrainee.id || 'ST-001')}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-lg bg-orange-50 text-orange-700 font-black text-xs border border-orange-200/60 uppercase tracking-wide">
                          {loggedInTrainee.type === '21d_license' ? '21D + LICENSE' : (CLASS_TYPES[loggedInTrainee.type]?.short?.toUpperCase() || '21D + LICENSE')}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-auto">
                    {/* Notification Bell */}
                    <button
                      type="button"
                      onClick={() => showToast('No new notifications for today')}
                      className="w-11 h-11 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center relative cursor-pointer transition-colors shadow-2xs"
                      title="Notifications"
                    >
                      <Bell className="w-4 h-4" />
                      <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                    </button>

                    {/* Logout Button */}
                    <button
                      type="button"
                      onClick={() => {
                        if (authRole === 'admin') {
                          setCurrentTab('admin');
                          setLoggedInTrainee(null);
                          showToast('Returned to Admin Panel');
                        } else {
                          handleLogout();
                        }
                      }}
                      className="px-5 py-2.5 rounded-2xl bg-[#0B1528] hover:bg-[#15233c] text-white font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-xs transition-all cursor-pointer active:scale-95"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>{authRole === 'admin' ? 'EXIT PREVIEW' : 'LOGOUT'}</span>
                    </button>
                  </div>
                </div>

                {/* 3-COLUMN DASHBOARD GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Card 1: DAILY ATTENDANCE */}
                  <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-xs flex flex-col justify-between relative overflow-hidden">
                    {/* Orange Top Accent Line */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-orange-500"></div>

                    <div className="space-y-4">
                      {/* Title */}
                      <div className="flex items-center gap-2 text-orange-600 font-black text-xs sm:text-sm tracking-wider uppercase">
                        <CheckCircle2 className="w-4 h-4 text-orange-500" />
                        <span>DAILY ATTENDANCE</span>
                      </div>

                      {/* Center User Circle */}
                      <div className="py-6 flex justify-center">
                        <div className="w-20 h-20 rounded-full bg-orange-50/70 border border-orange-100 flex items-center justify-center text-orange-500 shadow-2xs">
                          <UserCheck className="w-10 h-10 stroke-[2.2]" />
                        </div>
                      </div>
                    </div>

                    {/* Action Button & Hint */}
                    <div className="space-y-2.5 pt-2">
                      {isMarkedToday ? (
                        <div className="space-y-2">
                          <div className="w-full py-3.5 rounded-2xl bg-emerald-600 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 select-none">
                            <CheckCircle2 className="w-4 h-4 text-emerald-200" />
                            <span>ATTENDANCE RECORDED ✓</span>
                          </div>
                          <button
                            type="button"
                            onClick={handleUndoSelfAttendance}
                            className="w-full text-center text-[10px] font-black text-slate-400 hover:text-rose-600 uppercase tracking-wider transition-colors cursor-pointer"
                          >
                            Cancel / Undo Check-in
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={handleSelfAttendance}
                          className="w-full py-4 rounded-2xl bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-md shadow-orange-500/25 transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
                        >
                          <span>MARK SELF-ATTENDANCE</span>
                        </button>
                      )}
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 text-center">
                        {isMarkedToday ? `RECORDED AT ${loggedInTrainee.lastCheckInTime || loggedInTrainee.time}` : 'TAP TO RECORD PRESENCE'}
                      </p>
                    </div>
                  </div>

                  {/* Card 2: COURSE PROGRESS */}
                  <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 font-black text-xs uppercase tracking-wider">
                          COURSE PROGRESS
                        </span>
                        <span className="px-3 py-1 rounded-xl bg-slate-100 text-slate-600 font-bold text-xs">
                          {loggedInTrainee.stats?.total || 21} Days Total
                        </span>
                      </div>

                      <div className="mt-5">
                        <div className="flex items-baseline">
                          <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                            {loggedInTrainee.stats?.attended ?? 12}
                          </span>
                          <span className="text-slate-400 font-bold text-sm sm:text-base ml-1.5">
                            / {loggedInTrainee.stats?.total || 21} Completed
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden mt-3.5">
                          <div
                            className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                            style={{
                              width: `${Math.min(100, Math.round(((loggedInTrainee.stats?.attended ?? 12) / (loggedInTrainee.stats?.total || 21)) * 100))}%`
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Bottom 2 Stat Boxes */}
                    <div className="flex items-center gap-3 pt-6">
                      <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-3.5 flex-1">
                        <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 block">
                          ATTENDED
                        </span>
                        <span className="text-2xl font-black text-emerald-600 block mt-0.5">
                          {loggedInTrainee.stats?.attended ?? 12}
                        </span>
                      </div>
                      <div className="bg-rose-50/70 border border-rose-100 rounded-2xl p-3.5 flex-1">
                        <span className="text-[10px] font-black uppercase tracking-wider text-rose-600 block">
                          MISSED
                        </span>
                        <span className="text-2xl font-black text-rose-600 block mt-0.5">
                          {loggedInTrainee.stats?.missed ?? 1}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: FEE SUMMARY */}
                  <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 font-black text-xs uppercase tracking-wider">
                          FEE SUMMARY
                        </span>
                        <span className="text-slate-300 font-bold text-lg select-none">
                          ₹
                        </span>
                      </div>

                      <div className="mt-5 space-y-3.5">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-500 font-bold text-xs sm:text-sm">Total Course Fee</span>
                          <span className="font-black text-slate-900 text-lg">
                            ₹{(loggedInTrainee.fees?.total || 8000).toLocaleString('en-IN')}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-500 font-bold text-xs sm:text-sm">Amount Paid</span>
                          <span className="font-black text-emerald-600 text-lg">
                            ₹{(loggedInTrainee.fees?.paid || 4000).toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Balance Due Highlight Box & Securely Pay Button */}
                    {(() => {
                      const totalFee = Number(loggedInTrainee.fees?.total || 8000);
                      const paidFee = Number(loggedInTrainee.fees?.paid || 0);
                      const balanceDue = Math.max(0, totalFee - paidFee);

                      return (
                        <div className="mt-6 space-y-3">
                          {/* Balance Due Capsule */}
                          <div className={`border rounded-2xl p-3.5 sm:p-4 flex items-center justify-between transition-colors ${
                            balanceDue > 0
                              ? 'bg-rose-50/80 border-rose-200/80 text-rose-600'
                              : 'bg-emerald-50/80 border-emerald-200/80 text-emerald-700'
                          }`}>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-black uppercase tracking-wider">
                                BALANCE DUE
                              </span>
                              {balanceDue === 0 && (
                                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200">
                                  ✓ Cleared
                                </span>
                              )}
                            </div>
                            <span className={`text-xl sm:text-2xl font-black font-mono ${
                              balanceDue > 0 ? 'text-rose-600' : 'text-emerald-700'
                            }`}>
                              ₹{balanceDue.toLocaleString('en-IN')}
                            </span>
                          </div>

                          {/* Securely Pay Button (When Due > 0) OR Download Bill Button (When Due === 0) */}
                          {balanceDue > 0 ? (
                            <button
                              type="button"
                              onClick={() => openModal('payment', loggedInTrainee)}
                              className="w-full py-3.5 px-4 rounded-2xl bg-linear-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:via-amber-600 hover:to-orange-700 text-white font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-md shadow-orange-500/25 active:scale-[0.98] transition-all cursor-pointer group"
                            >
                              <ShieldCheck className="w-4 h-4 text-orange-100 shrink-0 group-hover:scale-110 transition-transform" />
                              <span>Securely Pay</span>
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={() => setReceiptModal({ isOpen: true, student: loggedInTrainee })}
                              className="w-full py-3.5 px-4 rounded-2xl bg-linear-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 text-white font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-md shadow-emerald-600/25 active:scale-[0.98] transition-all cursor-pointer group"
                            >
                              <Download className="w-4 h-4 text-emerald-100 shrink-0 group-hover:scale-110 transition-transform" />
                              <span>Download Bill / Receipt</span>
                            </button>
                          )}

                          {balanceDue > 0 && paidFee > 0 && (
                            <button
                              type="button"
                              onClick={() => setReceiptModal({ isOpen: true, student: loggedInTrainee })}
                              className="w-full py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-black text-[11px] uppercase tracking-wider flex items-center justify-center gap-2 border border-slate-200/80 transition-colors cursor-pointer"
                            >
                              <Receipt className="w-3.5 h-3.5 text-orange-600" />
                              <span>View Official Fee Receipt</span>
                            </button>
                          )}
                        </div>
                      );
                    })()}
                  </div>

                  {/* Row 2: YOUR TRAINING SLOT (Col 1) */}
                  <div className="bg-[#0B1528] text-white rounded-3xl p-6 sm:p-7 relative overflow-hidden shadow-md flex flex-col justify-between min-h-42.5">
                    <div className="relative z-10 space-y-1">
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                        YOUR TRAINING SLOT
                      </span>
                      <div className="text-3xl sm:text-4xl font-black text-white tracking-tight font-mono">
                        {loggedInTrainee.time || '06:00 AM'}
                      </div>
                    </div>

                    <div className="relative z-10 mt-6">
                      <span className="inline-block px-3 py-1.5 rounded-xl bg-amber-400/10 border border-amber-400/25 text-amber-300 text-xs font-bold">
                        100% Individual 30-Min Drive
                      </span>
                    </div>

                    {/* Subtle decorative Clock icon */}
                    <Clock className="w-28 h-28 text-white/5 absolute -right-3 -bottom-3 pointer-events-none stroke-[1.5]" />
                  </div>

                  {/* Row 2: RECENT ATTENDANCE LOG (Cols 2 & 3: md:col-span-2) */}
                  <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-xs md:col-span-2 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 font-black text-xs uppercase tracking-wider">
                        RECENT ATTENDANCE LOG
                      </span>
                      <button
                        type="button"
                        onClick={() => setShowAllAttendanceLogs(!showAllAttendanceLogs)}
                        className="text-orange-600 hover:text-orange-700 font-bold text-xs cursor-pointer transition-colors"
                      >
                        {showAllAttendanceLogs ? 'Show Less' : 'View All'}
                      </button>
                    </div>

                    {/* Log items list */}
                    <div className="space-y-3">
                      {displayLogs.length > 0 ? (
                        displayLogs.map((log, idx) => {
                          const isAbsent = log.status === 'absent';
                          return (
                            <div
                              key={idx}
                              className="p-3.5 sm:p-4 rounded-2xl bg-slate-50/70 border border-slate-100/90 flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors"
                            >
                              <div className="flex items-center gap-3.5">
                                <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center shrink-0 border ${
                                  isAbsent ? 'bg-rose-50 border-rose-100 text-rose-500' : 'bg-emerald-50 border-emerald-100 text-emerald-600'
                                }`}>
                                  {isAbsent ? (
                                    <XCircle className="w-5 h-5 stroke-[2.2]" />
                                  ) : (
                                    <CheckCircle2 className="w-5 h-5 stroke-[2.2]" />
                                  )}
                                </div>

                                <div>
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <span className="font-black text-slate-800 text-sm">
                                      {log.formattedDate || log.date}
                                    </span>
                                    <span className="bg-slate-200/60 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded-md">
                                      Slot: {log.slot || loggedInTrainee.time}
                                    </span>
                                  </div>
                                  <div className={`text-xs font-bold flex items-center gap-1.5 mt-0.5 ${
                                    isAbsent ? 'text-rose-500' : 'text-slate-500'
                                  }`}>
                                    <Clock className="w-3.5 h-3.5" />
                                    <span>
                                      {isAbsent ? 'Missed Session' : `Recorded at ${log.time}`}
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <span className={`px-3.5 py-1.5 rounded-xl text-[11px] font-black uppercase tracking-wider shrink-0 ${
                                isAbsent
                                  ? 'bg-rose-50 text-rose-600 border border-rose-100'
                                  : 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                              }`}>
                                {isAbsent ? 'ABSENT' : 'PRESENT'}
                              </span>
                            </div>
                          );
                        })
                      ) : (
                        <div className="p-8 text-center text-slate-400 font-bold text-xs">
                          No recent attendance sessions logged.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

      </main>
        </>
      )}

      {/* EASY ACCESS CALENDAR MODAL (REUSED FOR SCHEDULE, TRAINEE DIRECTORY & ACCOUNTS MASTER) */}
      {showFullCalendar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className={`bg-white rounded-[2.5rem] p-5 sm:p-7 ${calContext === 'attendance' ? 'max-w-lg' : 'max-w-md'} w-full shadow-2xl border border-slate-100 relative animate-in zoom-in-95 duration-200`}>
            
            {/* Header: Title and Close button */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                {calContext === 'accounts' ? (
                  <IndianRupee className="w-5 h-5 text-emerald-600" />
                ) : calContext === 'attendance' ? (
                  <UserCheck className="w-5 h-5 text-emerald-600" />
                ) : (
                  <Calendar className="w-5 h-5 text-orange-600" />
                )}
                <div>
                  <h3 className="text-base font-black text-slate-900 leading-tight">
                    {calContext === 'trainee' && 'Trainee Monthly Calendar'}
                    {calContext === 'accounts' && 'Accounts Period Calendar'}
                    {calContext === 'schedule' && 'Class Schedule Calendar'}
                    {calContext === 'attendance' && 'Daily Attendance Calendar'}
                  </h3>
                  <span className="text-[11px] font-bold text-slate-400 block">
                    {calContext === 'trainee' && 'Track and filter monthly trainee enrollments'}
                    {calContext === 'accounts' && 'Select month/year for financial calculations'}
                    {calContext === 'schedule' && 'Monthly calendar for class timings & daily attendance'}
                    {calContext === 'attendance' && 'Select any date to view and mark attendance & turnout'}
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setShowFullCalendar(false)} 
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Month & Year Controls with < and > arrows */}
            <div className="flex items-center justify-between mb-3 bg-slate-50 p-2 rounded-2xl border border-slate-200">
              <button 
                onClick={() => setCalViewDate(new Date(calViewDate.getFullYear(), calViewDate.getMonth() - 1, 1))}
                className="p-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 shadow-xs transition-colors cursor-pointer"
                title="Previous Month"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <div className="flex items-center gap-1.5">
                <select 
                  value={calViewDate.getMonth()}
                  onChange={(e) => setCalViewDate(new Date(calViewDate.getFullYear(), Number(e.target.value), 1))}
                  className="bg-white px-3 py-1.5 rounded-xl text-xs font-black text-slate-800 border border-slate-200 outline-none cursor-pointer hover:border-orange-500 shadow-2xs"
                >
                  {MONTH_NAMES.map((m, idx) => (
                    <option key={m} value={idx}>{m}</option>
                  ))}
                </select>

                <select 
                  value={calViewDate.getFullYear()}
                  onChange={(e) => setCalViewDate(new Date(Number(e.target.value), calViewDate.getMonth(), 1))}
                  className="bg-white px-3 py-1.5 rounded-xl text-xs font-black text-slate-800 border border-slate-200 outline-none cursor-pointer hover:border-orange-500 shadow-2xs font-mono"
                >
                  {YEARS_LIST.map(y => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>

              <button 
                onClick={() => setCalViewDate(new Date(calViewDate.getFullYear(), calViewDate.getMonth() + 1, 1))}
                className="p-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 shadow-xs transition-colors cursor-pointer"
                title="Next Month"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Schedule Context: Month Schedule Overview Banner */}
            {calContext === 'schedule' && (
              <div className="mb-3 px-3.5 py-2 rounded-xl bg-orange-50/80 border border-orange-200/80 flex items-center justify-between text-xs font-black text-orange-950">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="w-3.5 h-3.5 text-orange-600" />
                  <span>{MONTH_NAMES[calViewDate.getMonth()]} {calViewDate.getFullYear()} Schedule</span>
                </span>
                <span className="text-[11px] font-bold text-slate-500">
                  Selected: <strong className="text-orange-700">{scheduleDate.toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}</strong>
                </span>
              </div>
            )}

            {/* Attendance Context: Monthly Turnout Summary */}
            {calContext === 'attendance' && (
              (() => {
                const curYear = calViewDate.getFullYear();
                const curMonth = calViewDate.getMonth();
                const daysInMonth = new Date(curYear, curMonth + 1, 0).getDate();
                let mTotalPresent = 0;
                let mTotalAbsent = 0;
                for (let d = 1; d <= daysInMonth; d++) {
                  const dayDate = new Date(curYear, curMonth, d);
                  const counts = getPerDateCounts(dayDate);
                  mTotalPresent += counts.present;
                  mTotalAbsent += counts.absent;
                }
                const mTotal = mTotalPresent + mTotalAbsent;
                const turnoutPercent = mTotal > 0 ? Math.round((mTotalPresent / mTotal) * 100) : 0;
                return (
                  <div className="mb-3 px-3.5 py-2.5 rounded-2xl bg-slate-900 text-white flex items-center justify-between text-xs shadow-md">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black">
                        <UserCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-black text-slate-100 leading-none">
                          {MONTH_NAMES[calViewDate.getMonth()]} {calViewDate.getFullYear()} Turnout
                        </div>
                        <div className="text-[10px] text-slate-400 font-bold mt-0.5">
                          Turnout: <span className="text-emerald-400 font-bold">{turnoutPercent}%</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 font-mono text-[11px]">
                      <span className="px-2 py-0.5 rounded-lg bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30" title="Total Came">
                        ✓ {mTotalPresent}
                      </span>
                      <span className="px-2 py-0.5 rounded-lg bg-rose-500/20 text-rose-300 font-bold border border-rose-500/30" title="Total Absent">
                        ✕ {mTotalAbsent}
                      </span>
                    </div>
                  </div>
                );
              })()
            )}

            {/* Trainee Context: Month Enrollment Badge Banner */}
            {calContext === 'trainee' && (
              (() => {
                const curMKey = `${calViewDate.getFullYear()}-${String(calViewDate.getMonth() + 1).padStart(2, '0')}`;
                const mEnrolled = students.filter(s => (s.enrollmentDate || '').startsWith(curMKey));
                return (
                  <div className="mb-3 px-3.5 py-2 rounded-xl bg-orange-50 border border-orange-200/80 flex items-center justify-between text-xs font-black text-orange-950">
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-orange-600" />
                      <span>{MONTH_NAMES[calViewDate.getMonth()]} {calViewDate.getFullYear()}</span>
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-white border border-orange-200 text-orange-800 text-[11px] font-mono">
                      {mEnrolled.length} Trainees Enrolled
                    </span>
                  </div>
                );
              })()
            )}

            {/* Accounts Context: Financial Snapshot for Month */}
            {calContext === 'accounts' && (
              (() => {
                const curMKey = `${calViewDate.getFullYear()}-${String(calViewDate.getMonth() + 1).padStart(2, '0')}`;
                const mStudents = students.filter(s => (s.enrollmentDate || '').startsWith(curMKey));
                const mBilled = mStudents.reduce((sum, s) => sum + Number(s.fees?.total || 0), 0);
                const mPaid = students.reduce((sum, s) => {
                  const hist = Array.isArray(s.fees?.history) ? s.fees.history : [];
                  const mH = hist.filter(h => (h.date || '').startsWith(curMKey));
                  return sum + mH.reduce((acc, h) => acc + Number(h.amount || 0), 0);
                }, 0);
                return (
                  <div className="mb-3 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs font-bold text-slate-700">
                    <span>{MONTH_NAMES[calViewDate.getMonth()]} Total:</span>
                    <span className="font-mono font-black text-slate-900">
                      Billed ₹{mBilled.toLocaleString('en-IN')} &bull; <span className="text-emerald-600">Rec ₹{mPaid.toLocaleString('en-IN')}</span>
                    </span>
                  </div>
                );
              })()
            )}

            {/* 7-Day Header */}
            <div className="grid grid-cols-7 gap-1 text-center text-[10px] sm:text-[11px] font-black uppercase text-slate-400 mb-2">
              <span className="text-orange-500">Su</span>
              <span>Mo</span>
              <span>Tu</span>
              <span>We</span>
              <span>Th</span>
              <span>Fr</span>
              <span className="text-orange-500">Sa</span>
            </div>

            {/* 42-Day Matrix */}
            <div className="grid grid-cols-7 gap-1">
              {calendarGridDays.map((cell, idx) => {
                const isSelected = isSameDay(
                  cell.date,
                  calContext === 'schedule' ? scheduleDate : calContext === 'attendance' ? attendanceDate : calViewDate
                );
                const isToday = isTodayDate(cell.date);
                const cellIso = `${cell.date.getFullYear()}-${String(cell.date.getMonth() + 1).padStart(2, '0')}-${String(cell.date.getDate()).padStart(2, '0')}`;
                const cellMonthIso = `${cell.date.getFullYear()}-${String(cell.date.getMonth() + 1).padStart(2, '0')}`;
                const hasSavedSchedule = Boolean(attendanceHistory[cellIso]);
                const dayEnrolledCount = students.filter(s => s.enrollmentDate === cellIso).length;
                const attendanceCounts = calContext === 'attendance' ? getPerDateCounts(cell.date) : null;

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      if (calContext === 'attendance') {
                        setAttendanceDate(cell.date);
                        setCalViewDate(cell.date);
                        setShowFullCalendar(false);
                        showToast(`Selected ${cell.date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })} Attendance`);
                      } else if (calContext === 'trainee') {
                        setTraineeFilterMonth(cellMonthIso);
                        setTraineeCalDate(cell.date);
                        setShowFullCalendar(false);
                        showToast(`Filtered to ${MONTH_NAMES[cell.date.getMonth()]} ${cell.date.getFullYear()}`);
                      } else if (calContext === 'accounts') {
                        setAccountsSelectedMonth(cell.date.getMonth());
                        setAccountsSelectedYear(cell.date.getFullYear());
                        setAccountsPeriodScope('monthly');
                        setShowFullCalendar(false);
                        showToast(`Accounts period: ${MONTH_NAMES[cell.date.getMonth()]} ${cell.date.getFullYear()}`);
                      } else {
                        setScheduleDate(cell.date);
                        setCalViewDate(cell.date);
                        setShowFullCalendar(false);
                        showToast(`Selected ${cell.date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}`);
                      }
                    }}
                    className={`${calContext === 'attendance' ? 'h-11 sm:h-12' : 'h-9 sm:h-10'} rounded-xl font-black text-xs transition-all flex flex-col items-center justify-center relative outline-none cursor-pointer ${
                      isSelected
                        ? calContext === 'attendance'
                          ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30 scale-105 ring-2 ring-emerald-400'
                          : 'bg-orange-600 text-white shadow-md shadow-orange-600/30 scale-105'
                        : isToday
                        ? 'bg-orange-50 text-orange-600 border border-orange-200'
                        : cell.isCurrentMonth
                        ? 'hover:bg-slate-100 text-slate-700'
                        : 'text-slate-300 hover:text-slate-500'
                    }`}
                  >
                    <span className={calContext === 'attendance' ? 'text-[11px] leading-tight font-black' : ''}>{cell.dayNum}</span>
                    
                    {/* Per-date turnout for Attendance Context */}
                    {calContext === 'attendance' && attendanceCounts && (
                      <div className="flex items-center gap-0.5 mt-0.5">
                        {attendanceCounts.present > 0 && (
                          <span 
                            className={`text-[8.5px] font-black px-1 rounded leading-tight ${isSelected ? 'bg-white/90 text-emerald-800' : 'bg-emerald-100 text-emerald-800'}`} 
                            title={`${attendanceCounts.present} Present`}
                          >
                            ✓{attendanceCounts.present}
                          </span>
                        )}
                        {attendanceCounts.absent > 0 && (
                          <span 
                            className={`text-[8.5px] font-black px-1 rounded leading-tight ${isSelected ? 'bg-white/90 text-rose-800' : 'bg-rose-100 text-rose-800'}`} 
                            title={`${attendanceCounts.absent} Absent`}
                          >
                            ✕{attendanceCounts.absent}
                          </span>
                        )}
                        {attendanceCounts.present === 0 && attendanceCounts.absent === 0 && (
                          <span className="text-[9px] text-slate-300 font-bold">&middot;</span>
                        )}
                      </div>
                    )}

                    {calContext === 'trainee' && dayEnrolledCount > 0 && (
                      <span className={`w-1.5 h-1.5 rounded-full absolute bottom-1 ${isSelected ? 'bg-white' : 'bg-orange-500'}`} title={`${dayEnrolledCount} enrolled`} />
                    )}
                    {calContext === 'schedule' && hasSavedSchedule && (
                      <span className={`w-1 h-1 rounded-full absolute bottom-1 ${isSelected ? 'bg-white' : 'bg-emerald-500'}`} />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Custom Modal Footer based on Context */}
            {calContext === 'attendance' && (
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-500">
                    Selected: <strong className="text-slate-900">{attendanceDate.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</strong>
                  </span>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold">
                    <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">✓ Came</span>
                    <span className="text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200">✕ Absent</span>
                  </div>
                </div>
                <button 
                  type="button"
                  onClick={() => {
                    const today = new Date();
                    setAttendanceDate(today);
                    setCalViewDate(today);
                    setShowFullCalendar(false);
                    showToast("Jumped to Today's Attendance");
                  }}
                  className="font-black text-emerald-600 hover:text-emerald-700 hover:underline uppercase tracking-wider text-[11px] shrink-0 ml-2 cursor-pointer"
                >
                  Today's Sheet
                </button>
              </div>
            )}

            {calContext === 'trainee' && (
              <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                <button
                  type="button"
                  onClick={() => {
                    const mKey = `${calViewDate.getFullYear()}-${String(calViewDate.getMonth() + 1).padStart(2, '0')}`;
                    setTraineeFilterMonth(mKey);
                    setTraineeCalDate(new Date(calViewDate.getFullYear(), calViewDate.getMonth(), 1));
                    setShowFullCalendar(false);
                    const count = students.filter(s => (s.enrollmentDate || '').startsWith(mKey)).length;
                    showToast(`Showing ${count} trainees enrolled in ${MONTH_NAMES[calViewDate.getMonth()]} ${calViewDate.getFullYear()}`);
                  }}
                  className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-black text-xs uppercase tracking-wider transition-all shadow-sm cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>
                    Apply {MONTH_NAMES[calViewDate.getMonth()]} {calViewDate.getFullYear()} ({students.filter(s => (s.enrollmentDate || '').startsWith(`${calViewDate.getFullYear()}-${String(calViewDate.getMonth() + 1).padStart(2, '0')}`)).length} Trainees)
                  </span>
                </button>

                <div className="flex items-center justify-between text-xs pt-1">
                  <button 
                    type="button"
                    onClick={() => {
                      setTraineeFilterMonth('all');
                      setShowFullCalendar(false);
                      showToast('Showing all enrolled trainees');
                    }}
                    className="font-black text-slate-600 hover:text-slate-900 underline text-[11px] cursor-pointer"
                  >
                    View All Months ({students.length} Trainees)
                  </button>

                  <button 
                    type="button"
                    onClick={() => {
                      const today = new Date();
                      setCalViewDate(today);
                      setTraineeCalDate(today);
                      setTraineeFilterMonth(`${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`);
                      setShowFullCalendar(false);
                      showToast('Jumped to Current Month');
                    }}
                    className="font-black text-orange-600 hover:underline uppercase tracking-wider text-[11px] cursor-pointer"
                  >
                    Current Month
                  </button>
                </div>
              </div>
            )}

            {calContext === 'accounts' && (
              <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setAccountsSelectedMonth(calViewDate.getMonth());
                      setAccountsSelectedYear(calViewDate.getFullYear());
                      setAccountsPeriodScope('monthly');
                      setShowFullCalendar(false);
                      showToast(`Set to Monthly View: ${MONTH_NAMES[calViewDate.getMonth()]} ${calViewDate.getFullYear()}`);
                    }}
                    className="py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-black text-xs uppercase tracking-wider transition-all shadow-sm cursor-pointer"
                  >
                    Monthly View
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setAccountsSelectedYear(calViewDate.getFullYear());
                      setAccountsPeriodScope('yearly');
                      setShowFullCalendar(false);
                      showToast(`Set to Yearly View: Year ${calViewDate.getFullYear()}`);
                    }}
                    className="py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider transition-all shadow-sm cursor-pointer"
                  >
                    Yearly View ({calViewDate.getFullYear()})
                  </button>
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setAccountsPeriodScope('all');
                      setShowFullCalendar(false);
                      showToast('Set to All-Time Ledger');
                    }}
                    className="font-black text-slate-600 hover:text-slate-900 underline text-[11px] cursor-pointer"
                  >
                    All Time Ledger
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const now = new Date();
                      setAccountsSelectedMonth(now.getMonth());
                      setAccountsSelectedYear(now.getFullYear());
                      setAccountsPeriodScope('monthly');
                      setCalViewDate(now);
                      setShowFullCalendar(false);
                      showToast('Reset to Current Month');
                    }}
                    className="font-black text-orange-600 hover:underline uppercase tracking-wider text-[11px] cursor-pointer"
                  >
                    Today / Current
                  </button>
                </div>
              </div>
            )}

            {calContext === 'schedule' && (
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-bold text-slate-400 truncate">
                  Selected: <strong className="text-slate-800">{scheduleDate.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</strong>
                </span>
                <button 
                  type="button"
                  onClick={() => {
                    const today = new Date();
                    setScheduleDate(today);
                    setCalViewDate(today);
                    setShowFullCalendar(false);
                    showToast('Jumped to Today');
                  }}
                  className="font-black text-orange-600 hover:underline uppercase tracking-wider text-[11px] shrink-0 ml-2 cursor-pointer"
                >
                  Jump to Today
                </button>
              </div>
            )}

          </div>
        </div>
      )}

      {/* ACTION MODALS (ADD, EDIT, VIEW, DELETE, RESCHEDULE, PAYMENT) */}
      {modalConfig.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-[2.5rem] max-w-lg w-full shadow-2xl border border-slate-100 relative max-h-[85vh] sm:max-h-[90vh] flex flex-col overflow-hidden">
            
            {/* Modal Fixed Header */}
            <div className="flex items-center justify-between p-6 sm:p-7 pb-4 border-b border-slate-100 shrink-0 bg-white">
              <div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900">
                  {modalConfig.mode === 'assign_slot' && 'Assign Trainee to Slot'}
                  {modalConfig.mode === 'add' && 'Add New Trainee'}
                  {modalConfig.mode === 'edit' && 'Edit Trainee Details'}
                  {modalConfig.mode === 'reschedule' && 'Reschedule Slot'}
                  {modalConfig.mode === 'confirm_remove_slot' && 'Remove from Schedule'}
                  {modalConfig.mode === 'view' && 'Trainee Progress & Details'}
                  {modalConfig.mode === 'delete' && 'Confirm Deletion'}
                  {modalConfig.mode === 'payment' && 'Record Fee Payment'}
                </h3>
                <p className="text-xs font-bold text-slate-500 mt-0.5">
                  {modalConfig.mode === 'assign_slot' && `Select an existing registered trainee to schedule for ${modalConfig.data?.time}`}
                  {modalConfig.mode === 'add' && 'Register new student and assign initial time slot'}
                  {modalConfig.mode === 'edit' && `Update records for ${modalConfig.data?.name}`}
                  {modalConfig.mode === 'reschedule' && `Change training timing for ${modalConfig.data?.name}`}
                  {modalConfig.mode === 'confirm_remove_slot' && `Unassign current active training slot`}
                  {modalConfig.mode === 'view' && `Enrolment ID: ${modalConfig.data?.enrollmentNo ? `ST-${String(modalConfig.data.enrollmentNo).padStart(3, '0')}` : modalConfig.data?.id}`}
                  {modalConfig.mode === 'delete' && 'Permanent action cannot be undone'}
                  {modalConfig.mode === 'payment' && `Direct tuition fee entry for ${modalConfig.data?.name}`}
                </p>
              </div>
              <button onClick={closeModal} className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-7 pt-5 custom-scroll space-y-4">
              
              {modalConfig.mode === 'assign_slot' ? (
                <div className="space-y-4">
                  <div className="p-4 bg-orange-50/70 rounded-2xl border border-orange-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center font-black">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase text-orange-600 tracking-wider">Target Slot</span>
                        <h4 className="text-base font-black text-slate-900">{modalConfig.data?.time}</h4>
                      </div>
                    </div>
                    <span className="text-xs font-black text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded-lg">Available</span>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-400 mb-2 tracking-wider">
                      Select Registered Trainee
                    </label>
                    <select
                      id="assign_trainee_select"
                      defaultValue=""
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-bold text-slate-800 outline-none focus:border-orange-500 cursor-pointer"
                    >
                      <option value="" disabled>-- Select a trainee ({students.length} registered) --</option>
                      {students.map(s => (
                        <option key={s.id} value={s.id}>
                          {s.enrollmentNo || s.id} — {s.name} ({s.time ? `Slot: ${s.time}` : 'No Slot Assigned'})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-center gap-3 pt-3">
                    <button
                      type="button"
                      onClick={() => {
                        const sel = document.getElementById('assign_trainee_select');
                        const sId = sel ? sel.value : null;
                        if (!sId) {
                          showToast('Please select a trainee');
                          return;
                        }
                        const targetStudent = students.find(s => s.id === sId);
                        setStudents(prev => prev.map(s => s.id === sId ? { ...s, time: modalConfig.data?.time } : s));
                        showToast(`Assigned ${targetStudent?.name} to ${modalConfig.data?.time} ✓`);
                        closeModal();
                      }}
                      className="flex-1 py-3.5 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-black text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md shadow-orange-600/20 active:scale-95"
                    >
                      Confirm Slot Assignment
                    </button>
                    <button
                      type="button"
                      onClick={() => openModal('add', { time: modalConfig.data?.time })}
                      className="px-4 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-black text-xs uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      + New Trainee
                    </button>
                  </div>
                </div>
              ) : modalConfig.mode === 'delete' ? (
                <div className="space-y-4 text-center py-4">
                  <AlertCircle className="w-12 h-12 text-rose-500 mx-auto" />
                  <p className="text-sm font-bold text-slate-700">Are you sure you want to delete <span className="text-slate-900 font-black">{modalConfig.data?.name}</span>'s record?</p>
                  <div className="flex items-center gap-3 pt-4">
                    <button onClick={closeModal} className="flex-1 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase transition-colors">Cancel</button>
                    <button onClick={handleDelete} className="flex-1 py-3.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs uppercase shadow-lg shadow-rose-600/20 transition-all">Delete</button>
                  </div>
                </div>
              ) : modalConfig.mode === 'confirm_remove_slot' ? (
                <div className="space-y-4 text-center py-2">
                  <div className="w-14 h-14 rounded-3xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto border border-rose-100 shadow-sm">
                    <Trash2 className="w-7 h-7" />
                  </div>

                  <div>
                    <h4 className="text-base font-black text-slate-900 flex items-center justify-center gap-2 flex-wrap">
                      <span>Remove {modalConfig.data?.name}?</span>
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-orange-100 text-orange-800 border border-orange-200 font-mono">
                        No. {modalConfig.data?.enrollmentNo || modalConfig.data?.id}
                      </span>
                    </h4>
                    <p className="text-xs font-bold text-slate-500 mt-1 flex items-center justify-center gap-1">
                      <span>Currently assigned to slot:</span>
                      <strong className="text-orange-600 bg-orange-50 px-2 py-0.5 rounded-md border border-orange-200">{modalConfig.data?.time || 'Unassigned'}</strong>
                    </p>
                  </div>

                  <p className="text-xs font-medium text-slate-600 px-4">
                    Choose whether to unassign this trainee from the slot only, or delete the entire trainee record.
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <button 
                      type="button"
                      onClick={() => handleRemoveFromSlot(modalConfig.data?.id)}
                      className="w-full py-3.5 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-black text-xs uppercase tracking-wider shadow-md shadow-orange-600/20 transition-all flex items-center justify-center gap-2 active:scale-[0.98] cursor-pointer"
                    >
                      <Clock className="w-4 h-4" />
                      Remove from Slot Only (Unassign)
                    </button>

                    <button 
                      type="button"
                      onClick={handleDelete}
                      className="w-full py-3 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete Trainee Record Completely
                    </button>

                    <button 
                      type="button"
                      onClick={() => openModal('view', modalConfig.data)}
                      className="w-full py-2.5 rounded-2xl text-slate-500 hover:text-slate-800 font-bold text-xs transition-colors cursor-pointer"
                    >
                      Cancel / Back
                    </button>
                  </div>
                </div>
              ) : modalConfig.mode === 'reschedule' ? (
                <form onSubmit={handleFormSubmit} className="space-y-5 pb-2">
                  <div className="bg-orange-50/70 p-4 rounded-2xl border border-orange-100 flex items-center gap-3.5">
                    <div className={`w-12 h-12 rounded-2xl bg-linear-to-br ${modalConfig.data?.avatarColor} text-white font-black text-sm flex items-center justify-center shrink-0 shadow-sm`}>
                      {modalConfig.data?.initials}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-sm font-black text-slate-900">{modalConfig.data?.name}</h4>
                        <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-orange-100 text-orange-800 border border-orange-200 font-mono">
                          No. {modalConfig.data?.enrollmentNo || modalConfig.data?.id}
                        </span>
                      </div>
                      <p className="text-xs font-bold text-slate-500 flex items-center gap-1.5 mt-0.5">
                        <span>Current Slot:</span>
                        <span className="font-black text-slate-700 bg-white px-2 py-0.5 rounded-md border border-orange-200 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-orange-500" /> {modalConfig.data?.time}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-400 mb-2 tracking-wider">
                      Select New 30-Minute Time Slot
                    </label>
                    <select 
                      value={formData.time} 
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-black outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all cursor-pointer text-slate-800"
                    >
                      {TIME_SLOTS.map(t => (
                        <option key={t} value={t}>
                          {t} {t === modalConfig.data?.time ? '— (Current Slot)' : ''}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button 
                      type="button" 
                      onClick={() => openModal('view', modalConfig.data)} 
                      className="flex-1 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Back
                    </button>
                    <button 
                      type="submit" 
                      className="flex-1 py-3.5 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-orange-600/25 transition-all active:scale-[0.98] cursor-pointer"
                    >
                      Confirm Reschedule
                    </button>
                  </div>
                </form>
              ) : modalConfig.mode === 'view' ? (
                <div className="space-y-6 pb-2">
                  {/* Trainee Header Info */}
                  <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <div className="w-14 h-14 rounded-2xl bg-[#FFF6EF] border border-[#FED7AA] text-[#E85D04] flex flex-col items-center justify-center shrink-0 shadow-2xs font-sans">
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#E85D04] leading-none mb-0.5">
                        NO.
                      </span>
                      <span className="text-2xl font-black text-[#E85D04] leading-none">
                        {modalConfig.data?.enrollmentNo || modalConfig.data?.id}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-base font-black text-slate-900 truncate">{modalConfig.data?.name}</h4>
                        <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-lg bg-orange-100 text-orange-800 border border-orange-200/80 font-mono" title="Enrollment Number">
                          Enrollment No: {modalConfig.data?.enrollmentNo || modalConfig.data?.id}
                        </span>
                        <span className="text-[10px] font-black uppercase px-1.5 py-0.5 rounded bg-slate-200/70 text-slate-500 font-mono">
                          {modalConfig.data?.id}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-black ${CLASS_TYPES[modalConfig.data?.type]?.badgeBg || 'bg-slate-100'} ${CLASS_TYPES[modalConfig.data?.type]?.badgeText || 'text-slate-700'} border ${CLASS_TYPES[modalConfig.data?.type]?.badgeBorder || 'border-slate-200'}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${CLASS_TYPES[modalConfig.data?.type]?.dotColor || 'bg-slate-400'}`}></span>
                          {CLASS_TYPES[modalConfig.data?.type]?.full} ({CLASS_TYPES[modalConfig.data?.type]?.short})
                        </span>
                        <span className="text-xs font-bold text-slate-500">• {modalConfig.data?.course}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2 flex-wrap">
                        <span className="text-xs font-black text-slate-700 bg-white px-2.5 py-1 rounded-lg border border-slate-200 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-orange-500" />
                          <span>Assigned Slot: <strong className="text-orange-600">{modalConfig.data?.time || 'Unassigned'}</strong></span>
                        </span>
                        {currentTab === 'admin' && (
                          <span className="text-xs font-black text-slate-600 flex items-center gap-1 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                            <Phone className="w-3 h-3 text-orange-500" /> {modalConfig.data?.phone}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Attendance Progress Tracker */}
                  <div className="space-y-3 bg-orange-50/50 p-5 rounded-2xl border border-orange-100">
                    <div className="flex items-center justify-between text-xs font-black">
                      <span className="text-slate-700 uppercase tracking-wider">Attendance Completion</span>
                      <span className="text-orange-600">
                        {modalConfig.data?.stats?.attended} / {modalConfig.data?.stats?.total} Days
                      </span>
                    </div>

                    <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-linear-to-r from-orange-500 to-amber-500 rounded-full transition-all duration-500"
                        style={{ width: `${Math.min(100, ((modalConfig.data?.stats?.attended || 0) / (modalConfig.data?.stats?.total || 1)) * 100)}%` }}
                      ></div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 pt-2 text-center">
                      <div className="bg-white p-2.5 rounded-xl border border-slate-100 shadow-sm">
                        <span className="text-[9px] font-black uppercase text-slate-400 block">Total</span>
                        <span className="text-sm font-black text-slate-800">{modalConfig.data?.stats?.total} Days</span>
                      </div>
                      <div className="bg-white p-2.5 rounded-xl border border-slate-100 shadow-sm">
                        <span className="text-[9px] font-black uppercase text-emerald-600 block">Attended</span>
                        <span className="text-sm font-black text-emerald-600">{modalConfig.data?.stats?.attended} Days</span>
                      </div>
                      <div className="bg-white p-2.5 rounded-xl border border-slate-100 shadow-sm">
                        <span className="text-[9px] font-black uppercase text-rose-500 block">Missed</span>
                        <span className="text-sm font-black text-rose-500">{modalConfig.data?.stats?.missed} Days</span>
                      </div>
                    </div>
                  </div>

                  {/* Today's Check-in Status Badge */}
                  <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-2xl border border-slate-100 text-xs">
                    <span className="font-bold text-slate-500">Today's Self Check-in:</span>
                    <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider ${
                      (modalConfig.data?.lastCheckInDate === getTodayKey() || modalConfig.data?.status === 'present')
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                        : 'bg-amber-100 text-amber-800 border border-amber-200'
                    }`}>
                      {(modalConfig.data?.lastCheckInDate === getTodayKey() || modalConfig.data?.status === 'present')
                        ? `✓ Marked Present (${modalConfig.data?.lastCheckInTime || modalConfig.data?.time})`
                        : '⌛ Pending Check-in'}
                    </span>
                  </div>

                  {/* Fees Section for Admin Only */}
                  {currentTab === 'admin' && (
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Financial Status</span>
                        {((modalConfig.data?.fees?.total || 0) - (modalConfig.data?.fees?.paid || 0)) > 0 && (
                          <button
                            type="button"
                            onClick={() => openModal('payment', modalConfig.data)}
                            className="text-[10px] font-black uppercase tracking-wider text-orange-600 hover:text-orange-700 hover:underline cursor-pointer flex items-center gap-1"
                          >
                            <IndianRupee className="w-3 h-3" /> Record Payment →
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                          <span className="text-[9px] font-black uppercase text-slate-400 block">Total Fee</span>
                          <span className="text-sm font-black text-slate-900 font-mono mt-0.5 block">
                            ₹{modalConfig.data?.fees?.total || 0}
                          </span>
                        </div>
                        <div className="bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
                          <span className="text-[9px] font-black uppercase text-emerald-700 block">Advance / Paid</span>
                          <span className="text-sm font-black text-emerald-800 font-mono mt-0.5 block">
                            ₹{modalConfig.data?.fees?.paid || 0}
                          </span>
                        </div>
                        <div className="bg-rose-50 p-2.5 rounded-xl border border-rose-200">
                          <span className="text-[9px] font-black uppercase text-rose-700 block">Balance Due</span>
                          <span className="text-sm font-black text-rose-600 font-mono mt-0.5 block">
                            ₹{(modalConfig.data?.fees?.total || 0) - (modalConfig.data?.fees?.paid || 0)}
                          </span>
                        </div>
                      </div>

                      {/* Payment History List */}
                      {Array.isArray(modalConfig.data?.fees?.history) && modalConfig.data.fees.history.length > 0 && (
                        <div className="pt-2 border-t border-slate-200/80 space-y-1.5">
                          <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider block">
                            Payment Logs ({modalConfig.data.fees.history.length}):
                          </span>
                          <div className="space-y-1.5 max-h-32 overflow-y-auto custom-scroll pr-1">
                            {modalConfig.data.fees.history.map((h, i) => (
                              <div key={i} className="flex items-center justify-between text-xs bg-white p-2 rounded-lg border border-slate-100">
                                <div className="flex items-center gap-1.5">
                                  <span className={`px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider ${
                                    h.method === 'Cash' ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800'
                                  }`}>
                                    {h.method}
                                  </span>
                                  <span className="font-mono text-slate-600 text-xs font-bold">{h.date}</span>
                                  {h.note && <span className="text-slate-400 text-[10px] font-medium hidden sm:inline">({h.note})</span>}
                                </div>
                                <span className="font-black text-emerald-700 font-mono text-xs">₹{h.amount}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}



                  {/* Action Buttons: Reschedule & Remove */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                    <button 
                      type="button"
                      onClick={() => openModal('reschedule', modalConfig.data)}
                      className="w-full sm:flex-1 py-3.5 px-4 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-black text-xs uppercase tracking-wider transition-all shadow-md shadow-orange-600/20 flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                    >
                      <Clock className="w-4 h-4" />
                      Reschedule Slot
                    </button>

                    <button 
                      type="button"
                      onClick={() => setModalConfig({ isOpen: true, mode: 'confirm_remove_slot', data: modalConfig.data })}
                      className="w-full sm:flex-1 py-3.5 px-4 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                      Remove from Schedule
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 pb-2">
                  {modalConfig.mode !== 'payment' && (
                    <>
                      {modalConfig.mode !== 'reschedule' && (
                        <div>
                          <label className="flex items-center justify-between text-[10px] font-black uppercase text-slate-400 mb-1.5 tracking-wider">
                            <span className="flex items-center gap-1.5 text-slate-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                              Enrollment Number
                            </span>
                            <span className="text-[10px] text-orange-600 font-bold uppercase tracking-wider">Step 1</span>
                          </label>
                          <input 
                            type="text" 
                            required 
                            value={formData.enrollmentNo || ''} 
                            onChange={(e) => setFormData({ ...formData, enrollmentNo: e.target.value.replace(/[^0-9/]/g, '') })}
                            className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-black text-slate-900 outline-none focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all font-mono placeholder:normal-case placeholder:font-normal placeholder:text-slate-400"
                            placeholder="e.g. 1/10, 2/10, 1/1"
                          />
                          <p className="text-[11px] font-bold text-slate-400 mt-1 pl-1">
                            Format: S.NO / Current Month Numeric (e.g. 1/10 for 1st student of October)
                          </p>

                          {/* Portal Credentials Live Preview (Clean White Theme) */}
                          {Boolean(formData.enrollmentNo) && (
                            <div className="mt-2.5 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2 animate-in fade-in">
                              <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-slate-700">
                                <span className="flex items-center gap-1.5">
                                  <Key className="w-3.5 h-3.5 text-orange-600" />
                                  Portal Credentials
                                </span>
                                <span className="text-[9px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-mono font-bold border border-slate-200/80">
                                  Live Preview
                                </span>
                              </div>
                              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                                <div className="bg-slate-50 px-3 py-2 rounded-xl border border-slate-200 flex items-center justify-between">
                                  <span className="text-[10px] text-slate-400 font-sans font-bold">User:</span>
                                  <strong className="text-orange-600 font-black">{getTraineeUsername(formData.enrollmentNo)}</strong>
                                </div>
                                <div className="bg-slate-50 px-3 py-2 rounded-xl border border-slate-200 flex items-center justify-between">
                                  <span className="text-[10px] text-slate-400 font-sans font-bold">Pass:</span>
                                  <strong className="text-slate-900 font-black">{getTraineePassword(formData.enrollmentNo)}</strong>
                                </div>
                              </div>
                              <p className="text-[10px] text-slate-500 font-medium">
                                Formula: Username = <span className="font-mono font-bold text-slate-700">SMDS{formData.enrollmentNo}</span> &bull; Password = <span className="font-mono font-bold text-slate-700">smds@{formData.enrollmentNo}</span>
                              </p>
                            </div>
                          )}
                        </div>
                      )}

                      <div>
                        <label className="block text-[10px] font-black uppercase text-slate-400 mb-1.5 tracking-wider">Full Name</label>
                        <input 
                          type="text" 
                          required 
                          disabled={modalConfig.mode === 'reschedule'}
                          value={formData.name} 
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-bold outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                          placeholder="e.g. Arun Kumar"
                        />
                      </div>

                      {modalConfig.mode !== 'reschedule' && (
                        <div>
                          <label className="block text-[10px] font-black uppercase text-slate-400 mb-1.5 tracking-wider">Phone Number</label>
                          <input 
                            type="tel" 
                            required 
                            value={formData.phone} 
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-bold outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                            placeholder="10-digit number"
                          />
                        </div>
                      )}

                      <div>
                        <label className="block text-[10px] font-black uppercase text-slate-400 mb-1.5 tracking-wider">Course Package (6 Options from Catalog)</label>
                        <select 
                          value={formData.type} 
                          onChange={(e) => {
                            const newType = e.target.value;
                            const classCfg = getPackageDetails(newType);
                            setFormData(prev => ({ 
                              ...prev, 
                              type: newType,
                              totalFees: modalConfig.mode === 'add' ? (classCfg?.defaultFee || prev.totalFees) : prev.totalFees
                            }));
                          }}
                          className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-bold outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all cursor-pointer text-slate-900"
                        >
                          <option value="item_8">Four Wheeler Training with 2 & 4 Wheeler Licence</option>
                          <option value="item_12">Four Wheeler Training Only - 21 Days</option>
                          <option value="item_13">Four Wheeler Training Only - 10 Days</option>
                          <option value="item_3">Two Wheeler & Four Wheeler Licence Only</option>
                          <option value="item_1">Only Two Wheeler Licence</option>
                          <option value="item_2">Only Four Wheeler Licence</option>
                        </select>
                        <p className="text-[11px] font-bold text-slate-400 mt-1 pl-1">
                          Short Form on card: <span className="text-orange-600 font-extrabold">{getPackageDetails(formData.type)?.short}</span>
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-black uppercase text-slate-400 mb-1.5 tracking-wider">
                            Vehicle Course
                          </label>
                          <select 
                            value={formData.course === 'None' ? 'None' : 'Light Motor Vehicle (LMV)'} 
                            onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                            className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-black outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all cursor-pointer text-slate-800"
                          >
                            <option value="Light Motor Vehicle (LMV)">Light Motor Vehicle (LMV)</option>
                            <option value="None">None</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[10px] font-black uppercase text-slate-400 mb-1.5 tracking-wider">Time Slot</label>
                          <select 
                            value={formData.time} 
                            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                            className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-bold outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all cursor-pointer"
                          >
                            {TIME_SLOTS.map(t => <option key={t} value={t}>{t}</option>)}
                          </select>
                        </div>
                      </div>

                      {(modalConfig.mode === 'add' || modalConfig.mode === 'edit') && (
                        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3 pt-3.5 mt-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                              <IndianRupee className="w-3.5 h-3.5 text-orange-600" />
                              Tuition Fee Details {modalConfig.mode === 'edit' ? '(Editable)' : ''}
                            </span>
                            <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 font-mono">
                              {modalConfig.mode === 'edit' ? 'Modify Fee Values' : 'Registration Payment'}
                            </span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[10px] font-black uppercase text-slate-500 mb-1 tracking-wider">
                                Total Course Fee (₹)
                              </label>
                              <input 
                                type="number" 
                                min="0"
                                required
                                value={formData.totalFees} 
                                onChange={(e) => setFormData({ ...formData, totalFees: e.target.value })}
                                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-black text-slate-900 outline-none focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all font-mono"
                              />
                            </div>
                            <div>
                              <label className="block text-[10px] font-black uppercase text-slate-500 mb-1 tracking-wider">
                                {modalConfig.mode === 'edit' ? 'Paid Fee / Advance (₹)' : 'Paid Advance (₹)'}
                              </label>
                              <input 
                                type="number" 
                                min="0"
                                required
                                value={formData.paidFees} 
                                onChange={(e) => setFormData({ ...formData, paidFees: e.target.value })}
                                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-black text-emerald-600 outline-none focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all font-mono"
                              />
                            </div>
                          </div>

                          {/* Live Balance Due Indicator */}
                          <div className="flex items-center justify-between pt-2.5 border-t border-slate-100 text-xs font-bold">
                            <span className="text-slate-600">Calculated Balance Due:</span>
                            {Math.max(0, (Number(formData.totalFees) || 0) - (Number(formData.paidFees) || 0)) === 0 ? (
                              <span className="text-emerald-600 font-black">₹0 (Fully Settled ✓)</span>
                            ) : (
                              <span className="text-rose-600 font-mono font-black text-sm">
                                ₹{Math.max(0, (Number(formData.totalFees) || 0) - (Number(formData.paidFees) || 0))}
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  {modalConfig.mode === 'payment' && (
                    <div className="space-y-4 pt-1">
                      {/* Trainee Info & Financial Status Summary */}
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <div>
                            <span className="text-[10px] font-black uppercase text-slate-400 block tracking-wider">
                              Trainee
                            </span>
                            <h4 className="text-sm font-black text-slate-900">{modalConfig.data?.name}</h4>
                            <span className="text-[11px] font-mono font-bold text-slate-500">
                              {modalConfig.data?.enrollmentNo ? `No. ${modalConfig.data.enrollmentNo}` : modalConfig.data?.id}
                            </span>
                          </div>
                          <span className="px-3 py-1 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-black uppercase tracking-wider shadow-2xs">
                            {getPackageDetails(modalConfig.data?.type)?.short || '21D + LICENSE'}
                          </span>
                        </div>

                        {/* Financial Snapshot */}
                        {(() => {
                          const totalFee = Number(modalConfig.data?.fees?.total || 8000);
                          const paidFee = Number(modalConfig.data?.fees?.paid || 0);
                          const balanceDue = Math.max(0, totalFee - paidFee);

                          return (
                            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-200/60 text-center">
                              <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                                <span className="text-[9px] font-black uppercase text-slate-400 block">Total</span>
                                <span className="text-xs sm:text-sm font-black text-slate-900 font-mono">₹{totalFee.toLocaleString('en-IN')}</span>
                              </div>
                              <div className="bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
                                <span className="text-[9px] font-black uppercase text-emerald-700 block">Paid</span>
                                <span className="text-xs sm:text-sm font-black text-emerald-800 font-mono">₹{paidFee.toLocaleString('en-IN')}</span>
                              </div>
                              <div className="bg-rose-50 p-2.5 rounded-xl border border-rose-200">
                                <span className="text-[9px] font-black uppercase text-rose-700 block">Balance Due</span>
                                <span className="text-xs sm:text-sm font-black text-rose-800 font-mono">₹{balanceDue.toLocaleString('en-IN')}</span>
                              </div>
                            </div>
                          );
                        })()}
                      </div>

                      {/* Payment Amount Input */}
                      {(() => {
                        const totalFee = Number(modalConfig.data?.fees?.total || 8000);
                        const paidFee = Number(modalConfig.data?.fees?.paid || 0);
                        const balanceDue = Math.max(0, totalFee - paidFee);
                        const maxPayable = balanceDue > 0 ? balanceDue : totalFee;

                        return (
                          <div className="bg-[#FFF8F3] border border-orange-200/70 rounded-2xl p-4 space-y-2">
                            <label className="block text-xs font-black uppercase text-[#EA580C] tracking-wider">
                              Amount to Record (₹)
                            </label>
                            <div className="bg-white border-2 border-orange-200 focus-within:border-orange-500 rounded-2xl px-4 py-3 flex items-center gap-3 transition-colors shadow-2xs">
                              <span className="text-xl sm:text-2xl font-black text-[#EA580C]">₹</span>
                              <input
                                type="number"
                                min="1"
                                max={maxPayable > 0 ? maxPayable : undefined}
                                required
                                value={formData.paymentAmount}
                                onChange={(e) => setFormData({ ...formData, paymentAmount: e.target.value })}
                                className="w-full bg-transparent text-xl sm:text-2xl font-black text-slate-900 outline-none font-mono"
                                placeholder={String(maxPayable > 0 ? maxPayable : 4000)}
                              />
                            </div>
                            <div className="flex items-center justify-between text-xs font-bold text-[#EA580C]">
                              <span>Balance due: ₹{balanceDue.toLocaleString('en-IN')}</span>
                              {balanceDue > 0 && (
                                <button
                                  type="button"
                                  onClick={() => setFormData({ ...formData, paymentAmount: String(balanceDue) })}
                                  className="underline text-[11px] font-extrabold cursor-pointer hover:text-orange-700"
                                >
                                  Pay Full Balance
                                </button>
                              )}
                            </div>
                          </div>
                        );
                      })()}

                      {/* Payment Method Selector (Manual/Direct) */}
                      <div>
                        <label className="block text-[10px] font-black uppercase text-slate-500 mb-1.5 tracking-wider">
                          Payment Mode / Method
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {[
                            { id: 'Cash', label: 'Cash', icon: Wallet },
                            { id: 'UPI', label: 'UPI / QR', icon: Smartphone },
                            { id: 'Net Banking', label: 'Bank Transfer', icon: Landmark },
                            { id: 'Card', label: 'Card / POS', icon: CreditCard }
                          ].map(m => {
                            const IconComponent = m.icon;
                            const isSelected = (formData.paymentMethod || 'Cash') === m.id;
                            return (
                              <button
                                key={m.id}
                                type="button"
                                onClick={() => setFormData({ ...formData, paymentMethod: m.id })}
                                className={`p-3 rounded-2xl border-2 text-center transition-all cursor-pointer flex flex-col items-center gap-1.5 ${
                                  isSelected
                                    ? 'border-orange-500 bg-orange-50/50 text-orange-950 font-black shadow-2xs'
                                    : 'border-slate-200 bg-white hover:border-slate-300 text-slate-600 font-bold'
                                }`}
                              >
                                <IconComponent className={`w-4 h-4 ${isSelected ? 'text-orange-600' : 'text-slate-400'}`} />
                                <span className="text-xs">{m.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Payment Date & Note in a 2-column grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-black uppercase text-slate-500 mb-1.5 tracking-wider">
                            Payment Date
                          </label>
                          <input
                            type="date"
                            required
                            value={formData.paymentDate || getTodayKey()}
                            onChange={(e) => setFormData({ ...formData, paymentDate: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-bold text-slate-800 outline-none focus:bg-white focus:border-orange-500 transition-all font-mono"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-black uppercase text-slate-500 mb-1.5 tracking-wider">
                            Receipt / Note (Optional)
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Counter payment / GPay ref"
                            value={formData.paymentNote || ''}
                            onChange={(e) => setFormData({ ...formData, paymentNote: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-800 outline-none focus:bg-white focus:border-orange-500 transition-all"
                          />
                        </div>
                      </div>

                      {/* Record Payment Submit Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full py-4 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-orange-600/25 transition-all active:scale-[0.98] cursor-pointer"
                        >
                          <IndianRupee className="w-4 h-4" />
                          <span>
                            Record Payment {formData.paymentAmount ? `(₹${Number(formData.paymentAmount).toLocaleString('en-IN')})` : ''}
                          </span>
                        </button>
                      </div>
                    </div>
                  )}

                  {modalConfig.mode !== 'payment' && (
                    <>
                      {modalConfig.mode !== 'reschedule' && (
                        <div>
                          <label className="flex items-center justify-between text-[10px] font-black uppercase text-slate-400 mb-1.5 tracking-wider">
                            <span className="flex items-center gap-1.5 text-slate-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                              Enrollment Number
                            </span>
                            <span className="text-[10px] text-orange-600 font-bold uppercase tracking-wider">Step 1</span>
                          </label>
                          <input 
                            type="text" 
                            required 
                            value={formData.enrollmentNo || ''} 
                            onChange={(e) => setFormData({ ...formData, enrollmentNo: e.target.value.replace(/[^0-9/]/g, '') })}
                            className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-black text-slate-900 outline-none focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all font-mono placeholder:normal-case placeholder:font-normal placeholder:text-slate-400"
                            placeholder="e.g. 1/10, 2/10, 1/1"
                          />
                          <p className="text-[11px] font-bold text-slate-400 mt-1 pl-1">
                            Format: S.NO / Current Month Numeric (e.g. 1/10 for 1st student of October)
                          </p>

                          {/* Portal Credentials Live Preview (Clean White Theme) */}
                          {Boolean(formData.enrollmentNo) && (
                            <div className="mt-2.5 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2 animate-in fade-in">
                              <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-slate-700">
                                <span className="flex items-center gap-1.5">
                                  <Key className="w-3.5 h-3.5 text-orange-600" />
                                  Portal Credentials
                                </span>
                                <span className="text-[9px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-mono font-bold border border-slate-200/80">
                                  Live Preview
                                </span>
                              </div>
                              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                                <div className="bg-slate-50 px-3 py-2 rounded-xl border border-slate-200 flex items-center justify-between">
                                  <span className="text-[10px] text-slate-400 font-sans font-bold">User:</span>
                                  <strong className="text-orange-600 font-black">{getTraineeUsername(formData.enrollmentNo)}</strong>
                                </div>
                                <div className="bg-slate-50 px-3 py-2 rounded-xl border border-slate-200 flex items-center justify-between">
                                  <span className="text-[10px] text-slate-400 font-sans font-bold">Pass:</span>
                                  <strong className="text-slate-900 font-black">{getTraineePassword(formData.enrollmentNo)}</strong>
                                </div>
                              </div>
                              <p className="text-[10px] text-slate-500 font-medium">
                                Formula: Username = <span className="font-mono font-bold text-slate-700">SMDS{formData.enrollmentNo}</span> &bull; Password = <span className="font-mono font-bold text-slate-700">smds@{formData.enrollmentNo}</span>
                              </p>
                            </div>
                          )}
                        </div>
                      )}

                      <div>
                        <label className="block text-[10px] font-black uppercase text-slate-400 mb-1.5 tracking-wider">Full Name</label>
                        <input 
                          type="text" 
                          required 
                          disabled={modalConfig.mode === 'reschedule'}
                          value={formData.name} 
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-bold outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                          placeholder="e.g. Arun Kumar"
                        />
                      </div>

                      {modalConfig.mode !== 'reschedule' && (
                        <div>
                          <label className="block text-[10px] font-black uppercase text-slate-400 mb-1.5 tracking-wider">Phone Number</label>
                          <input 
                            type="tel" 
                            required 
                            value={formData.phone} 
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-bold outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                            placeholder="10-digit number"
                          />
                        </div>
                      )}

                      <div>
                        <label className="block text-[10px] font-black uppercase text-slate-400 mb-1.5 tracking-wider">Course Package (6 Options from Catalog)</label>
                        <select 
                          value={formData.type} 
                          onChange={(e) => {
                            const newType = e.target.value;
                            const classCfg = getPackageDetails(newType);
                            setFormData(prev => ({ 
                              ...prev, 
                              type: newType,
                              totalFees: modalConfig.mode === 'add' ? (classCfg?.defaultFee || prev.totalFees) : prev.totalFees
                            }));
                          }}
                          className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-bold outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all cursor-pointer text-slate-900"
                        >
                          <option value="item_8">Four Wheeler Training with 2 & 4 Wheeler Licence</option>
                          <option value="item_12">Four Wheeler Training Only - 21 Days</option>
                          <option value="item_13">Four Wheeler Training Only - 10 Days</option>
                          <option value="item_3">Two Wheeler & Four Wheeler Licence Only</option>
                          <option value="item_1">Only Two Wheeler Licence</option>
                          <option value="item_2">Only Four Wheeler Licence</option>
                        </select>
                        <p className="text-[11px] font-bold text-slate-400 mt-1 pl-1">
                          Short Form on card: <span className="text-orange-600 font-extrabold">{getPackageDetails(formData.type)?.short}</span>
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-black uppercase text-slate-400 mb-1.5 tracking-wider">
                            Vehicle Course
                          </label>
                          <select 
                            value={formData.course === 'None' ? 'None' : 'Light Motor Vehicle (LMV)'} 
                            onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                            className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-black outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all cursor-pointer text-slate-800"
                          >
                            <option value="Light Motor Vehicle (LMV)">Light Motor Vehicle (LMV)</option>
                            <option value="None">None</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[10px] font-black uppercase text-slate-400 mb-1.5 tracking-wider">Time Slot</label>
                          <select 
                            value={formData.time} 
                            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                            className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-bold outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all cursor-pointer"
                          >
                            {TIME_SLOTS.map(t => <option key={t} value={t}>{t}</option>)}
                          </select>
                        </div>
                      </div>

                      {(modalConfig.mode === 'add' || modalConfig.mode === 'edit') && (
                        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3 pt-3.5 mt-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                              <IndianRupee className="w-3.5 h-3.5 text-orange-600" />
                              Tuition Fee Details {modalConfig.mode === 'edit' ? '(Editable)' : ''}
                            </span>
                            <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 font-mono">
                              {modalConfig.mode === 'edit' ? 'Modify Fee Values' : 'Registration Payment'}
                            </span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[10px] font-black uppercase text-slate-500 mb-1 tracking-wider">
                                Total Course Fee (₹)
                              </label>
                              <input 
                                type="number" 
                                min="0"
                                required
                                value={formData.totalFees} 
                                onChange={(e) => setFormData({ ...formData, totalFees: e.target.value })}
                                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-black text-slate-900 outline-none focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all font-mono"
                              />
                            </div>
                            <div>
                              <label className="block text-[10px] font-black uppercase text-slate-500 mb-1 tracking-wider">
                                {modalConfig.mode === 'edit' ? 'Paid Fee / Advance (₹)' : 'Paid Advance (₹)'}
                              </label>
                              <input 
                                type="number" 
                                min="0"
                                required
                                value={formData.paidFees} 
                                onChange={(e) => setFormData({ ...formData, paidFees: e.target.value })}
                                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-black text-emerald-600 outline-none focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all font-mono"
                              />
                            </div>
                          </div>

                          {/* Live Balance Due Indicator */}
                          <div className="flex items-center justify-between pt-2.5 border-t border-slate-100 text-xs font-bold">
                            <span className="text-slate-600">Calculated Balance Due:</span>
                            {Math.max(0, (Number(formData.totalFees) || 0) - (Number(formData.paidFees) || 0)) === 0 ? (
                              <span className="text-emerald-600 font-black">₹0 (Fully Settled ✓)</span>
                            ) : (
                              <span className="text-rose-600 font-mono font-black text-sm">
                                ₹{Math.max(0, (Number(formData.totalFees) || 0) - (Number(formData.paidFees) || 0))}
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </>
                  )}



                  {modalConfig.mode !== 'payment' && (
                    <div className="pt-4">
                      <button type="submit" className="w-full py-4 rounded-2xl text-white font-black text-xs uppercase tracking-wider shadow-lg bg-orange-600 hover:bg-orange-700 shadow-orange-600/25 transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2">
                        {modalConfig.mode === 'add' && 'Save New Trainee'}
                        {modalConfig.mode === 'edit' && 'Update Details'}
                        {modalConfig.mode === 'reschedule' && 'Confirm New Slot'}
                      </button>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Official Fee Receipt & Invoice Modal */}
      {receiptModal.isOpen && receiptModal.student && (() => {
        const student = receiptModal.student;
        const total = student.fees?.total || 0;
        const paid = student.fees?.paid || 0;
        const balance = Math.max(0, total - paid);
        const pkg = getPackageDetails(student.type);
        // Receipt ID Format: SMDS-{enrollmentNo}/{currentYear}-{DateOfIssue DDMMYYYY}
        // e.g. SMDS-02/2026-18112006
        const now = new Date();
        const currentYear = now.getFullYear();
        const enrDigits = String(student.enrollmentNo || student.id || '1').replace(/\D/g, '') || '1';
        const enrPadded = enrDigits.padStart(2, '0');
        const dayStr = String(now.getDate()).padStart(2, '0');
        const monthStr = String(now.getMonth() + 1).padStart(2, '0');
        const dateOfIssueCode = `${dayStr}${monthStr}${currentYear}`;
        const receiptId = `SMDS-${enrPadded}/${currentYear}-${dateOfIssueCode}`;

        const issueDate = now.toLocaleDateString('en-IN', {
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        });

        const username = student.username || getTraineeUsername(student.enrollmentNo);
        const password = student.password || getTraineePassword(student.enrollmentNo);

        return (
          <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
            <div 
              id="printable-receipt-modal"
              className="bg-white rounded-3xl border border-slate-200/80 shadow-2xl max-w-2xl w-full p-6 sm:p-8 relative overflow-hidden animate-in fade-in zoom-in-95 duration-200 my-auto"
            >
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-linear-to-r from-orange-500 via-amber-500 to-[#0B1528]" />

              {/* Header with SMDS Branding & Govt Approved */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-200">
                <div className="flex items-start gap-3.5">
                  <DrivingSchoolLogo className="w-12 h-12" />
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight font-sans">
                        SRI MURUGA DRIVING SCHOOL
                      </h3>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                        <BadgeCheck className="w-3 h-3 text-emerald-600" />
                        Govt. Approved
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-slate-500 mt-0.5">
                      Govt Reg. No: TN-38/MDS/2018 • RTO Track: CB-09-TN-2023
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Neelambur Bypass, Avinashi Road, Coimbatore - 641062 • Ph: +91 98765 43210
                    </p>
                  </div>
                </div>

                {/* Close Button (Hidden on Print) */}
                <button
                  type="button"
                  onClick={() => setReceiptModal({ isOpen: false, student: null })}
                  className="print:hidden w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer self-start sm:self-auto"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Receipt Title & Meta Badge Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 my-5 py-3 px-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/60">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-orange-600 block">
                    Receipt ID
                  </span>
                  <span className="text-sm font-black font-mono text-slate-900 tracking-tight">
                    {receiptId}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs font-semibold text-slate-600">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                      Date of Issue
                    </span>
                    <span className="font-mono font-bold text-slate-800">{issueDate}</span>
                  </div>
                  <div className="h-6 w-px bg-slate-200" />
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                      Status
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider ${
                      balance === 0 ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                    }`}>
                      {balance === 0 ? 'SETTLED' : 'PARTIAL DUE'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Trainee & Package Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs mb-5">
                {/* Trainee Info */}
                <div className="p-3.5 rounded-2xl bg-white border border-slate-100 shadow-2xs space-y-2 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                      Trainee Information
                    </span>
                    <div className="font-black text-slate-900 text-sm">{student.name}</div>
                    <div className="flex items-center gap-2 text-slate-600 font-mono">
                      <span className="px-1.5 py-0.5 rounded bg-orange-50 text-orange-700 font-black text-[10px]">
                        NO. {student.enrollmentNo || student.id}
                      </span>
                    </div>
                    <div className="text-slate-500 font-medium text-[11px]">
                      Phone: <span className="font-bold text-slate-700 font-mono">{student.phone}</span>
                    </div>
                    <div className="text-slate-500 font-medium text-[11px]">
                      Assigned Slot: <span className="font-bold text-slate-700">{student.time || '06:00 AM'}</span>
                    </div>
                  </div>

                  {/* Portal Credentials inside Trainee Information */}
                  <div className="pt-2 border-t border-slate-100 space-y-1">
                    <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 block">
                      Portal Credentials
                    </span>
                    <div className="grid grid-cols-2 gap-1.5 text-[11px] font-mono">
                      <div className="px-2 py-1 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                        <span className="text-[9px] text-slate-400 font-sans font-bold">User:</span>
                        <strong className="text-orange-600 font-black">{username}</strong>
                      </div>
                      <div className="px-2 py-1 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                        <span className="text-[9px] text-slate-400 font-sans font-bold">Pass:</span>
                        <strong className="text-slate-900 font-black">{password}</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Package Info */}
                <div className="p-3.5 rounded-2xl bg-white border border-slate-100 shadow-2xs space-y-2 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                      Package Enrolled
                    </span>
                    <div className="font-black text-slate-900 text-sm">
                      {pkg?.title || student.course}
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 font-black text-[10px] font-mono">
                        {pkg?.duration || '21 DAYS'}
                      </span>
                      <span className={`px-1.5 py-0.5 rounded text-[10px] font-black uppercase ${
                        pkg?.category === 'PACKAGE' ? 'bg-orange-100 text-orange-800' :
                        pkg?.category === 'TRAINING' ? 'bg-blue-100 text-blue-800' : 'bg-slate-100 text-slate-800'
                      }`}>
                        {pkg?.category || 'TRAINING'}
                      </span>
                    </div>
                  </div>
                  <div className="text-slate-500 text-[11px] leading-relaxed line-clamp-3 pt-1 border-t border-slate-100">
                    {pkg?.features || pkg?.subtitle || 'Complete driving coaching with on-road training.'}
                  </div>
                </div>
              </div>

              {/* Financial Breakdown Table */}
              <div className="border border-slate-200 rounded-2xl overflow-hidden mb-4">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase text-[10px] font-black tracking-wider">
                      <th className="py-2.5 px-4">Description</th>
                      <th className="py-2.5 px-4 text-center">Batch / Days</th>
                      <th className="py-2.5 px-4 text-right">Amount (₹)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr>
                      <td className="py-3 px-4 font-bold text-slate-900">
                        {pkg?.title || student.course} (Tuition & RTO)
                      </td>
                      <td className="py-3 px-4 text-center font-mono font-semibold">
                        {pkg?.duration || '21 Days'}
                      </td>
                      <td className="py-3 px-4 text-right font-black font-mono text-slate-900">
                        ₹{total.toLocaleString('en-IN')}
                      </td>
                    </tr>
                    <tr className="bg-emerald-50/40">
                      <td colSpan="2" className="py-2.5 px-4 font-black text-emerald-800">
                        Total Amount Received:
                      </td>
                      <td className="py-2.5 px-4 text-right font-black font-mono text-emerald-700 text-sm">
                        ₹{paid.toLocaleString('en-IN')}
                      </td>
                    </tr>
                    <tr className={balance === 0 ? 'bg-slate-50/60' : 'bg-rose-50/40'}>
                      <td colSpan="2" className="py-2.5 px-4 font-black text-slate-700">
                        Balance Due:
                      </td>
                      <td className="py-2.5 px-4 text-right font-black font-mono text-sm">
                        {balance === 0 ? (
                          <span className="text-emerald-700">₹0 (Settled)</span>
                        ) : (
                          <span className="text-rose-600">₹{balance.toLocaleString('en-IN')}</span>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Amount In Words Capsule */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs mb-4 flex items-start gap-2">
                <FileText className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                    Amount Received in Words
                  </span>
                  <span className="font-black text-slate-900 italic">
                    {numberToIndianWords(paid)}
                  </span>
                </div>
              </div>

              {/* Payment Log History (if any) */}
              {Array.isArray(student.fees?.history) && student.fees.history.length > 0 && (
                <div className="mb-5">
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider block mb-1.5">
                    Payment Transactions
                  </span>
                  <div className="space-y-1.5">
                    {student.fees.history.map((tx, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs p-2 rounded-xl bg-slate-50 border border-slate-100 font-mono">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                            tx.method === 'Cash'
                              ? 'bg-amber-100 text-amber-800'
                              : String(tx.method || '').toLowerCase().includes('cashfree')
                                ? 'bg-purple-100 text-[#7B1FA2] border border-purple-200'
                                : 'bg-blue-100 text-blue-800 border border-blue-200'
                          }`}>
                            {tx.method}
                          </span>
                          <span className="text-slate-600">{tx.date}</span>
                          {tx.note && <span className="text-slate-400 text-[10px]">({tx.note})</span>}
                        </div>
                        <span className="font-black text-emerald-700">₹{tx.amount.toLocaleString('en-IN')}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}


              {/* Footer Actions (Hidden on Print) */}
              <div className="print:hidden flex items-center justify-between gap-3 pt-6 border-t border-slate-100 mt-6">
                <button
                  type="button"
                  onClick={() => setReceiptModal({ isOpen: false, student: null })}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-black uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Close
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="px-5 py-2.5 rounded-xl bg-[#0B1528] hover:bg-slate-800 text-white text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    <Download className="w-4 h-4 text-emerald-400" />
                    <span>Download PDF / Print</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-300">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <span className="text-xs font-black">{toast.message}</span>
        </div>
      )}

    </div>
  );
}
