import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  Calendar,
  Phone,
  ArrowRight,
  X,
  Star,
  Car,
  Check,
  ChevronDown,
  FileText,
  Copy,
  ExternalLink,
  MapPin,
  Quote,
  Send,
  MessageCircle,
  Compass,
  LogIn
} from 'lucide-react';

interface TariffItem {
  sNo: number;
  title: string;
  category: 'package' | 'training' | 'licence';
  duration?: string;
  fees?: number;
  badge?: string;
  isPopular?: boolean;
  highlight?: string;
}

interface SyllabusDay {
  day: number;
  classType: string;
  route: string;
  duration: string;
  badge?: string;
}

interface DocRequirement {
  id: string;
  title: string;
  badge: string;
  documents: string[];
}

const REVIEWS = [
  {
    id: 'r1',
    name: 'Praveena Sudherson',
    initials: 'PS',
    avatarColor: 'from-orange-400 to-amber-500',
    location: 'Verified Review • Neelambur',
    score: 5,
    car: '21 Days Combo',
    review: 'I had a great experience at Sri Muruga Driving School. The trainer was very kind, patient, and professional. Their teaching is clear and friendly, and they made me feel confident behind the wheel right from day one!',
    verified: 'Verified Student'
  },
  {
    id: 'r2',
    name: 'Rebekka',
    initials: 'RB',
    avatarColor: 'from-amber-400 to-yellow-500',
    location: 'Verified Review • Coimbatore',
    score: 5,
    car: 'Four Wheeler Training',
    review: 'Polite staff and great guidance. I had a wonderful training experience with expert instructors. They were extremely patient and gave crystal clear instructions. Passed my RTO driving test with zero fear!',
    verified: '1st Attempt Pass'
  },
  {
    id: 'r3',
    name: 'Nagarajan S.',
    initials: 'NS',
    avatarColor: 'from-orange-500 to-red-500',
    location: 'Verified Review • Avinashi Road',
    score: 5,
    car: '21 Days Combo',
    review: 'Polite staff and true individual training! They made me feel comfortable from the start. Highway practice to Karumathampati and flyover gradient control were taught thoroughly.',
    verified: 'Individual Training'
  },
  {
    id: 'r4',
    name: 'Karthikeyan M.',
    initials: 'KM',
    avatarColor: 'from-rose-400 to-orange-500',
    location: 'Verified Review • Sulur (TN 99)',
    score: 5,
    car: '10 Days Refresher',
    review: 'Best driving school near Neelambur and Sulur! Their 40 minutes individual steering time and mock RTO trial runs helped me master tight parking, reverse, and highway lane discipline smoothly.',
    verified: 'RTO Track Pass'
  },
  {
    id: 'r5',
    name: 'Gayathri R.',
    initials: 'GR',
    avatarColor: 'from-amber-500 to-orange-500',
    location: 'Verified Review • Neelambur',
    score: 5,
    car: 'Two & Four Wheeler',
    review: 'Outstanding school with dedicated coaching for women learners. Smooth process for learner license (LLR) and smart card driving license without multiple follow-ups.',
    verified: 'Women Friendly'
  },
  {
    id: 'r6',
    name: 'Senthil Kumar',
    initials: 'SK',
    avatarColor: 'from-orange-400 to-rose-400',
    location: 'Verified Review • TN 37',
    score: 5,
    car: 'Commercial Badge',
    review: 'Helped me complete St. John Ambulance First Aid certification and police verification for my commercial taxi badge. Genuine guidance and professional support throughout the process.',
    verified: 'Commercial Badge'
  }
];

const OFFICIAL_TARIFF: TariffItem[] = [
  { sNo: 8, title: 'Four Wheeler Training with 2 & 4 Wheeler Licence', category: 'package', duration: '21 Days', badge: 'Best Value • Most Popular', isPopular: true, highlight: 'Individual 1-on-1 Training • Flexible Installments • 2 Pre-RTO Test Trials Included' },
  { sNo: 12, title: 'Four Wheeler Training Only (Individual)', category: 'training', duration: '21 Days', badge: 'Skill Mastery', highlight: 'Full 21 Days 40-Min Daily On-Road & Highway Practice • Flexible Payment Options' },
  { sNo: 13, title: 'Four Wheeler Training Only (Individual)', category: 'training', duration: '10 Days', badge: 'Fast Track Refresher', highlight: 'KMCH, Sulur Pirivu & Traffic Practice for Existing License Holders' },
  { sNo: 3, title: 'Two Wheeler & Four Wheeler Licence Only', category: 'licence', duration: 'RTO Process', badge: 'Combo DL', highlight: 'LLR, Slot Booking, Document Scrutiny & RTO Test Representation' },
  { sNo: 1, title: 'Only Two Wheeler Licence', category: 'licence', duration: 'RTO Process', highlight: 'Motorcycle with Gear & Without Gear (MCWG / MCWOG)' },
  { sNo: 2, title: 'Only Four Wheeler Licence', category: 'licence', duration: 'RTO Process', highlight: 'LMV Smart Card License Slot Booking & Track Escort' }
];

const SYLLABUS_21_WITH_DL: SyllabusDay[] = [
  { day: 1, classType: 'Vehicle Overview Basics & Control Systems & Mirror', route: 'Office Premise (Neelambur)', duration: '40 Min', badge: 'Ground Basics' },
  { day: 2, classType: 'Base Practice for Gear 1-2 Start/Stop Method', route: 'NPS Nagar Internal Roads', duration: '40 Min', badge: 'Clutch Control' },
  { day: 3, classType: 'Base Practice for Gear 1-2 & 1-3 Start/Stop Method', route: 'Office to PSG Foundry to NPS Nagar', duration: '40 Min' },
  { day: 4, classType: 'OnRoad Practice with Gear 1-4 & 4-1', route: 'Highway Office to SULUR PIRIVU', duration: '40 Min', badge: 'Highway Entry' },
  { day: 5, classType: 'On Road Practice with Gear 1-4 & 4-1', route: 'Highway Office to SULUR PIRIVU', duration: '40 Min' },
  { day: 6, classType: 'Street Roads Practice', route: 'Office to Kuttai Street', duration: '40 Min' },
  { day: 7, classType: 'Village Road Practice (Breaker and Hump)', route: 'Office to Thennampalayam', duration: '40 Min', badge: 'Speed Breakers' },
  { day: 8, classType: 'Gradient Practice (Fwd and Reverse) & 2-Way Highway', route: 'Bypass Road Haryana Dhaba', duration: '40 Min', badge: 'Crucial Flyover' },
  { day: 9, classType: 'Village Road Practice (Curves and Bends)', route: 'Office to Muthugoundenpudur', duration: '40 Min' },
  { day: 10, classType: 'Reverse Practice (Left, Right & Cross)', route: 'NPS Nagar Dedicated Bay', duration: '40 Min', badge: 'Reverse Skills' },
  { day: 11, classType: 'Highway Ride Lane (Discipline)', route: 'Office to KPR Flyover', duration: '40 Min', badge: 'Lane Discipline' },
  { day: 12, classType: 'Highway Traffic Road Handling', route: 'Office to GOKULAM PARK', duration: '40 Min' },
  { day: 13, classType: 'Highway Ride Lane (Discipline & Overtaking)', route: 'Office to Karumathampati Toll', duration: '40 Min', badge: 'Toll Cruising' },
  { day: 14, classType: 'Highway Traffic Road Control', route: 'Office to Chinniyampalayam', duration: '40 Min' },
  { day: 15, classType: 'Highway Traffic Road Peak Flow', route: 'Office to RG PUDUR', duration: '40 Min' },
  { day: 16, classType: 'Night Drive – Street with Traffic', route: 'Office to PSG Foundry to NPS Nagar', duration: '40 Min', badge: 'Night Lighting' },
  { day: 17, classType: 'Night Drive – Highway Visibility & High Beam Management', route: 'Highway Office to SULUR PIRIVU', duration: '40 Min', badge: 'Night Highway' },
  { day: 18, classType: 'Reverse Practice (Left, Right & Cross) – Night Session', route: 'NPS Nagar Practice Ground', duration: '40 Min' },
  { day: 19, classType: 'Road Safety, Traffic Signs and Vehicle Maintenance', route: 'At Sri Muruga Driving School Classroom', duration: '40 Min', badge: 'Theory & Maintenance' },
  { day: 20, classType: 'Pre-RTO Test Trail', route: 'RTO Test Ground Practice Bay', duration: '40 Min', badge: 'Mock RTO Test' },
  { day: 21, classType: 'Final RTO Test Trail & Officer Simulation', route: 'RTO Test Ground (TN 37 / TN 99)', duration: '40 Min', badge: 'Final Test Day' }
];

const SYLLABUS_21_TRAINING_ONLY: SyllabusDay[] = [
  { day: 1, classType: 'Vehicle Overview Basics & Control Systems & Mirror', route: 'Office Premise', duration: '40 Min' },
  { day: 2, classType: 'Base Practice for Gear 1-2 Start/Stop Method', route: 'NPS Nagar', duration: '40 Min' },
  { day: 3, classType: 'Base Practice for Gear 1-2 & 1-3 Start/Stop Method', route: 'Office to PSG Foundry to NPS Nagar', duration: '40 Min' },
  { day: 4, classType: 'OnRoad Practice with Gear 1-4 & 4-1', route: 'Highway Office to SULUR PIRIVU', duration: '40 Min' },
  { day: 5, classType: 'On Road Practice with Gear 1-4 & 4-1', route: 'Highway Office to SULUR PIRIVU', duration: '40 Min' },
  { day: 6, classType: 'Street Roads Practice', route: 'Office to Kuttai Street', duration: '40 Min' },
  { day: 7, classType: 'Village Road Practice (Breaker and Hump)', route: 'Office to Thennampalayam', duration: '40 Min' },
  { day: 8, classType: 'Gradient Practice (Fwd and Reverse) & 2 Way Highway', route: 'Bypass Road Haryana Dhaba', duration: '40 Min' },
  { day: 9, classType: 'Village Road Practice (Curves and Bends)', route: 'Office to Muthugoundenpudur', duration: '40 Min' },
  { day: 10, classType: 'Mistakes Correction & Personal Feedback', route: 'NPS Nagar', duration: '40 Min', badge: 'Instructor Audit' },
  { day: 11, classType: 'Reverse Practice (Left, Right & Cross)', route: 'NPS Nagar', duration: '40 Min' },
  { day: 12, classType: 'Highway Ride Lane (Discipline)', route: 'Office to KPR Flyover', duration: '40 Min' },
  { day: 13, classType: 'Highway Traffic Road', route: 'Office to GOKULAM PARK', duration: '40 Min' },
  { day: 14, classType: 'Highway Ride Lane (Discipline)', route: 'Office to Karumathampati Toll', duration: '40 Min' },
  { day: 15, classType: 'Highway Traffic Road', route: 'Office to Chinniyampalayam', duration: '40 Min' },
  { day: 16, classType: 'Highway Traffic Road', route: 'Ofc to RG PUDUR', duration: '40 Min' },
  { day: 17, classType: 'Night Drive – Street with Traffic', route: 'NPS Nagar to PSG Foundry', duration: '40 Min', badge: 'Night Training' },
  { day: 18, classType: 'Night Drive – Highway', route: 'Highway Office to SULUR PIRIVU', duration: '40 Min' },
  { day: 19, classType: 'Reverse Practice (Left, Right & Cross) – Night', route: 'NPS Nagar', duration: '40 Min' },
  { day: 20, classType: 'Road Safety and Vehicle Maintenance and Mirror Positions', route: 'At Sri Muruga Driving School', duration: '40 Min' },
  { day: 21, classType: 'Advanced Independent Drive Review & Certification', route: 'Highway Office to SULUR PIRIVU Loop', duration: '40 Min', badge: 'Independence Test' }
];

const SYLLABUS_10_DAYS: SyllabusDay[] = [
  { day: 1, classType: 'OnRoad Practice with Gear 1-4 & 4-1 Traffic', route: 'Gokulam Park Route', duration: '40 Min', badge: 'Gear Sequencing' },
  { day: 2, classType: 'On Road Practice with Gear 1-4 & 4-1 Traffic', route: 'Office to RG PUDUR', duration: '40 Min' },
  { day: 3, classType: 'OnRoad Practice with Gear 1-4 & 4-1 Traffic', route: 'Office to Thottipalayam Pirivu', duration: '40 Min' },
  { day: 4, classType: 'On Road Practice with Gear 1-4 & 4-1 Traffic', route: 'Office to KMCH Junction', duration: '40 Min', badge: 'Dense City Traffic' },
  { day: 5, classType: 'Service Road Practice (Breaker and Hump)', route: 'Office to Sulur Pirivu', duration: '40 Min' },
  { day: 6, classType: 'Reverse Practice (Left, Right & Cross)', route: 'NPS Nagar Parking Bay', duration: '40 Min', badge: 'Reverse Mastery' },
  { day: 7, classType: 'Vehicle Controling & Mistake Review (Instructor View)', route: 'NPS Nagar', duration: '40 Min' },
  { day: 8, classType: 'Vehicle Controling & Mistake Review (Customer View)', route: 'NPS Nagar', duration: '40 Min', badge: 'Self Correction' },
  { day: 9, classType: 'Night Drive – Street with Traffic', route: 'Office to Sulur Pirivu', duration: '40 Min', badge: 'Night Vision' },
  { day: 10, classType: 'Night Drive – Street with Traffic & Final Confidence Run', route: 'Office to Sulur Pirivu', duration: '40 Min', badge: 'Completion' }
];

const DOCUMENT_REQUIREMENTS: DocRequirement[] = [
  {
    id: 'llr-2w-4w',
    title: 'Two and Four Wheeler LLR (Learner License)',
    badge: 'Beginners & Freshers',
    documents: [
      'Aadhaar Card (Must have active Mobile Number linked for OTP verification)',
      'Blood Group Report / Certificate',
      'Passport Size Photographs – 3 Nos',
      'Age Proof (Minimum 18 years completed for LMV Car / 16 years for Gearless 50cc)'
    ]
  },
  {
    id: 'four-wheeler-only',
    title: 'Four Wheeler Licence Only',
    badge: 'Existing 2W License Holders',
    documents: [
      'Two Wheeler Licence Original (Smart Card / Digital Driving Licence)',
      'Aadhaar Card Copy (Self-attested)',
      'Passport Size Photographs – 4 Nos',
      'Active Mobile Number for Sarathi Portal OTPs'
    ]
  },
  {
    id: 'badge-licence',
    title: 'Commercial Badge Licence (Taxi / Cab / Commercial)',
    badge: 'Commercial Drivers',
    documents: [
      'Police Verification Certificate (PCC)',
      'St. John Ambulance First Aid Training Certificate',
      'Original Four Wheeler (LMV) Driving Licence',
      'Age Proof – Aadhaar Card (Minimum 20 Years completed)',
      'Educational Qualification: 8th, 10th or 12th Mark Sheet (Any one original/copy)',
      'Passport Size Photographs – 5 Nos'
    ]
  },
  {
    id: 'heavy-licence',
    title: 'Heavy Licence (HGV / Heavy Transport Vehicle)',
    badge: 'Bus, Lorry & Truck',
    documents: [
      'Government Registered Doctor Medical Certificate (Form 1A & Eye Fitness)',
      '2 and 4 Wheeler Badge Licence Original (Minimum 1 year badge experience)',
      'Aadhaar Card Copy',
      'Passport Size Photographs – 5 Nos'
    ]
  }
];

const FAQS = [
  {
    q: 'Where is Sri Muruga Driving School located in Neelambur?',
    a: 'We are conveniently located at Shop No. 1/155, NPS Nagar Road, near Kannan Departmental Store, MBS Nagar, Neelambur, Coimbatore - 641062.'
  },
  {
    q: 'What are your driving class timings and office timings?',
    a: 'Our on-road driving classes run daily from 09:00 AM to 07:00 PM in convenient 40-minute individual slots. Our office is open for admissions, document verification, and general enquiries from 09:00 AM to 07:00 PM (Monday to Saturday).'
  },
  {
    q: 'Why do you emphasize "Individual Training Only"?',
    a: 'Unlike conventional schools where 3 to 4 students share one car and get only 10 minutes of steering time, Sri Muruga Driving School provides strictly individual training. For the full 40-minute slot, you are alone in the driver seat with our certified instructor.'
  },
  {
    q: 'What is included in the Four Wheeler Training with 2 & 4 Wheeler Licence package?',
    a: 'It includes complete 21 days of individual 40-minute on-road practice, highway drives (Karumathampati, KPR Flyover, Chinniyampalayam), gradient practice at Haryana Dhaba, 3 night drive sessions, vehicle maintenance theory, 2 mock RTO trial test ground sessions, and full government RTO processing assistance for both 2-wheeler and 4-wheeler permanent licenses.'
  },
  {
    q: 'Can I pay the course charges in installments?',
    a: 'Yes! We offer flexible installment options. You can pay an initial advance on joining day and the remaining balance during your training period.'
  },
  {
    q: 'What are your contact phone numbers?',
    a: 'You can directly call or WhatsApp our chief instructors at 89257 41347 or 73392 48247.'
  }
];

const LICENSE_PROCESS = [
  { step: 1, title: 'Document Verification', desc: 'Submit Aadhaar, blood group, and photos at our Neelambur office.', icon: FileText },
  { step: 2, title: 'LLR Issuance', desc: 'We process your application and secure your Learner License (LLR) quickly.', icon: ShieldCheck },
  { step: 3, title: 'Practical Training', desc: 'Individual 40-minute daily classes on highways and city traffic.', icon: Car },
  { step: 4, title: 'Mock RTO Trials', desc: 'Practice on the real testing ground to eliminate fear.', icon: MapPin },
  { step: 5, title: 'Final RTO Test', desc: 'Take the final driving test with our dual-control car and RTO inspector.', icon: CheckCircle2 },
  { step: 6, title: 'Digital E-Driving License', desc: 'Receive your officially approved permanent Digital E-Driving License directly on DigiLocker / mParivahan.', icon: Award }
];

const BOOKING_COURSE_GROUPS = [
  {
    group: 'Popular Packages',
    options: [
      {
        value: 'Four Wheeler Training with 2 & 4 Wheeler Licence',
        label: '21 Days 4W Combo + Licence',
        badge: 'Popular • Best Value'
      }
    ]
  },
  {
    group: 'Training Only',
    options: [
      {
        value: 'Four Wheeler Training Only',
        label: '21 Days 4W Training Only',
        badge: 'Individual 1-on-1'
      },
      {
        value: 'Four Wheeler Refresher',
        label: '10 Days 4W Refresher',
        badge: 'Traffic Refresher'
      }
    ]
  },
  {
    group: 'Licence Only',
    options: [
      {
        value: 'Two Wheeler & Four Wheeler Licence Only',
        label: '2W & 4W Licence Combo',
        badge: 'Combo DL'
      },
      {
        value: 'Only Four Wheeler Licence',
        label: '4W Licence Only',
        badge: 'Smart Card DL'
      },
      {
        value: 'Only Two Wheeler Licence',
        label: '2W Licence Only',
        badge: 'MCWG'
      }
    ]
  }
];

const BOOKING_TIME_SLOTS = [
  { value: 'early_morning', label: '6 AM – 9 AM', badge: 'Early Morning' },
  { value: 'morning', label: '9 AM – 12 PM', badge: 'Morning Slot' },
  { value: 'afternoon', label: '12 PM – 3 PM', badge: 'Afternoon' },
  { value: 'evening', label: '3 PM – 6 PM', badge: 'Evening Slot' }
];

interface FleetVehicle {
  id: string;
  name: string;
  fullName: string;
  regNo: string;
  type: string;
  transmission: string;
  dualControl: string;
  desc: string;
  specs: { label: string; val: string }[];
  exteriorImg: string;
  interiorImg: string;
  exteriorAlt: string;
  interiorAlt: string;
}

const TRAINING_FLEET: FleetVehicle[] = [
  {
    id: 'wagonr',
    name: 'WagonR VXi',
    fullName: 'Maruti Suzuki WagonR',
    regNo: 'TN 59 CJ 2702',
    type: 'Tall-Boy Hatchback',
    transmission: '100% Fully Manual (5-Speed)',
    dualControl: 'Govt. Approved Dual-Pedal Setup (Instructor Clutch & Brake)',
    desc: 'Spacious tall-boy design with commanding high seating position and wide windshield view. Ideal for road boundary judgment, slope balance, and highway control.',
    specs: [
      { label: 'Transmission', val: '5-Speed Manual' },
      { label: 'Pedal Control', val: 'Dual Clutch & Brake' },
      { label: 'Steering / View', val: 'High Command Wide Angle' },
      { label: 'Batch Type', val: '1-on-1 Individual' }
    ],
    exteriorImg: '/wagonr_exterior.jpg',
    interiorImg: '/wagonr_interior.jpg',
    exteriorAlt: 'WagonR VXi (TN 59 CJ 2702) - Exterior View',
    interiorAlt: 'WagonR VXi (TN 59 CJ 2702) Interior Cockpit with Dual-Control Pedals'
  },
  {
    id: 'alto',
    name: 'Alto K10 VXi+',
    fullName: 'Maruti Suzuki Alto K10',
    regNo: 'TN 38 / Fleet',
    type: 'Compact City Hatchback',
    transmission: '100% Fully Manual (5-Speed)',
    dualControl: 'Govt. Approved Dual-Pedal Setup (Instructor Clutch & Brake)',
    desc: 'Lightweight Heartect chassis with signature front honeycomb grille. Ultra-responsive clutch with forgiving bite point. The gold standard for beginners to effortlessly master complete driving control on RTO test grounds with zero stalling.',
    specs: [
      { label: 'Transmission', val: '5-Speed Manual' },
      { label: 'Pedal Control', val: 'Dual Clutch & Brake' },
      { label: 'RTO Test Trials', val: 'Smooth Control & Zero Stalling' },
      { label: 'Batch Type', val: '1-on-1 Individual' }
    ],
    exteriorImg: '/alto_k10_2026_exterior.jpg',
    interiorImg: '/alto_k10_interior.jpg',
    exteriorAlt: 'Maruti Suzuki Alto K10 - Exterior View',
    interiorAlt: 'Maruti Suzuki Alto K10 Interior Cockpit with Dual-Control Pedals'
  }
];


interface AiMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  time: string;
}

const AI_FAQ_CHIPS = [
  { id: 'timings', label: '⏰ Class Timings', prompt: 'Class timings?' },
  { id: 'fees', label: '💰 Course Fees', prompt: 'fees' },
  { id: 'course', label: '🚦 Which Course for Me?', prompt: 'Which driving course is best for me?' },
  { id: 'docs', label: '📄 RTO Documents Needed', prompt: 'What documents do I need for driving license?' },
  { id: 'individual', label: '🚘 1-on-1 Training Details', prompt: 'How does individual 1-on-1 coaching work?' },
  { id: 'location', label: '📍 Neelambur Location', prompt: 'Where is Sri Muruga Driving School located?' }
];

const getAiResponse = (query: string): string => {
  const q = query.toLowerCase().trim();

  if (q.includes('time') || q.includes('timing') || q.includes('slot') || q.includes('hour') || q.includes('morning') || q.includes('evening') || q.includes('schedule') || q.includes('class')) {
    return "⏰ **Sri Muruga Driving School Class Timings:**\n\n• **Daily Practical Training:** 6:00 AM – 6:00 PM every day\n• **Batch Options:**\n  - Early Morning: 6:00 AM – 9:00 AM\n  - Daytime: 9:00 AM – 3:00 PM\n  - Evening: 3:00 PM – 6:00 PM\n• **Strict 1-on-1 Training:** Dedicated 40 minutes steering time daily\n• **Office Enquiry Desk:** 09:00 AM – 07:00 PM (Monday to Saturday)\n\nYou can pick any slot that fits your routine! Call or WhatsApp us at 89257 41347 to reserve your slot.";
  }

  if (q.includes('fee') || q.includes('cost') || q.includes('price') || q.includes('rate') || q.includes('charges') || q.includes('package')) {
    return "💰 **Official Transparent Pricing (Sri Muruga Driving School):**\n\n• **4-Wheeler Training + 2W/4W Driving License (21 Days):** ₹8,000\n• **4-Wheeler Training Only for DL Holders (15 Days):** ₹5,500\n• **4-Wheeler Refresher Course (10 Days):** ₹4,000\n\n*All packages include dual-control vehicle, fuel, and Govt. RTO fees.* Call 89257 41347 to enroll!";
  }

  if (q.includes('doc') || q.includes('proof') || q.includes('aadhaar') || q.includes('llr') || q.includes('requirement')) {
    return "📄 **Mandatory Documents for Govt. RTO License (Coimbatore RTO 38):**\n\n1. **Aadhaar Card** (Address & Identity Proof)\n2. **10th Mark Sheet or Birth Certificate** (Age proof - minimum 18 years)\n3. **4 Passport Size Photos** (Recent white background)\n4. **Blood Group Test Report**\n\n*Our office team manages online Parivahan form filling, slot scheduling, and RTO test day support!*";
  }

  if (q.includes('course') || q.includes('which') || q.includes('learn') || q.includes('beginner') || q.includes('fresher') || q.includes('syllabus')) {
    return "🚦 **Which Course is Right For You?**\n\n• **Complete Beginners & Freshers:** 21 Days Four-Wheeler (LMV) + Licence Package. Covers dual-pedal controls, slope clutching, reverse parking, and Avinashi Road highway sessions.\n• **Already have a Driving License?** 15 Days Practical Training Only (₹5,500) for road & city traffic confidence.\n• **Need a Refresher?** 10 Days Refresher (₹4,000).";
  }

  if (q.includes('individual') || q.includes('1-on-1') || q.includes('one on one') || q.includes('single') || q.includes('car') || q.includes('vehicle')) {
    return "🚘 **1-on-1 Individual Training Guarantee:**\n\nSri Muruga Driving School strictly maintains **1 Student Per Vehicle**. You get:\n• **40 Full Minutes** of daily dedicated steering time\n• Certified Govt. Approved dual-control manual cars: WagonR VXi (TN 59 CJ 2702) & Alto K10 VXi+\n• Personal instructor focused solely on your clutch, brake, and steering habits.";
  }

  if (q.includes('location') || q.includes('address') || q.includes('where') || q.includes('near') || q.includes('map') || q.includes('landmark')) {
    return "📍 **Sri Muruga Driving School Neelambur Office:**\n\n• **Address:** SF No. 518/1, Avinashi Road, Near Neelambur Toll Plaza & Royal Care Hospital, Neelambur, Coimbatore - 641062\n• **Direct Phone / WhatsApp:** +91 89257 41347 / +91 94432 41347\n• **Govt. License:** Govt. Approved RTO 38 Driving Academy";
  }

  if (q.includes('phone') || q.includes('call') || q.includes('contact') || q.includes('whatsapp') || q.includes('number')) {
    return "📞 **Contact Sri Muruga Driving School:**\n\n• **Direct Phone:** +91 89257 41347 / +91 94432 41347\n• **WhatsApp:** +91 89257 41347\n• **Office Desk:** 09:00 AM – 07:00 PM (Monday to Saturday)\n• **Location:** Avinashi Road, Neelambur, Coimbatore";
  }

  if (q.includes('training') || q.includes('slot') || q.includes('trial') || q.includes('demo') || q.includes('book') || q.includes('enquire') || q.includes('join')) {
    return "🎉 **Book a Training Slot or Enquire Now!**\n\nYou can book a training slot right away to experience our individual 1-on-1 coaching and dual-control car before enrolling.\nClick the **Enquire Now** button in the top bar or WhatsApp us at +91 89257 41347 to reserve your slot!";
  }

  return "I'm sorry, I couldn't understand that.\n\nYou can ask me about:\n• **Class timings** (e.g. 'Class timings?')\n• **Official course fees** (e.g. 'fees')\n• **RTO documents required**\n• **1-on-1 coaching details**\n\nOr call us directly at 89257 41347 for more details.";
};

const SriMurugaLogo = ({ className = "w-9 h-9 xs:w-10 xs:h-10 sm:w-14 sm:h-14" }: { className?: string }) => (
  <div className={`relative flex items-center justify-center shrink-0 select-none group ${className}`}>
    <img 
      src="/logo.png" 
      alt="Sri Muruga Driving School Logo" 
      className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-300 group-hover:scale-105"
      loading="eager"
    />
  </div>
);

const renderChatMessageText = (text: string) => {
  return text.split('\n').map((line, lIdx) => {
    const parts = line.split(/(\*\*.*?\*\*)/g);
    return (
      <span key={lIdx} className="block leading-relaxed min-h-[1.15em]">
        {parts.map((part, pIdx) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={pIdx} className="font-bold">{part.slice(2, -2)}</strong>;
          }
          return part;
        })}
      </span>
    );
  });
};

const OfficeMap = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    const container = mapContainerRef.current;
    if (!container) return;
    
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }
    if ((container as any)._leaflet_id) {
      delete (container as any)._leaflet_id;
    }

    const lat = 11.0627487;
    const lng = 77.0896247;

    const map = L.map(container, {
      center: [lat, lng],
      zoom: 16,
      zoomControl: false,
      scrollWheelZoom: false,
      attributionControl: false
    });

    // Modern Rapido/Google Maps vector street tile layer (subdomains mt0-mt3)
    L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      maxZoom: 20,
      attribution: ''
    }).addTo(map);

    // Modern Pinned Location with logo.png
    const customIcon = L.divIcon({
      className: 'smds-rapido-marker',
      html: `
        <div style="position:relative;display:flex;flex-direction:column;align-items:center;transform:translate(-50%,-100%);cursor:pointer;" title="Sri Muruga Driving School - Click to Open Navigation">
          <!-- Floating Destination Pill -->
          <div style="margin-bottom:6px;display:flex;align-items:center;gap:6px;background:#0F172A;color:#FFFFFF;padding:4px 10px;border-radius:9999px;box-shadow:0 8px 24px rgba(15,23,42,0.35);border:1.5px solid rgba(250,204,21,0.7);white-space:nowrap;">
            <span style="width:6px;height:6px;border-radius:50%;background:#22C55E;box-shadow:0 0 6px #22C55E;"></span>
            <span style="font-size:11px;font-weight:900;letter-spacing:-0.01em;color:#FFFFFF;">SMDS Office</span>
            <span style="font-size:9px;font-weight:800;color:#FACC15;background:rgba(250,204,21,0.18);padding:1px 5px;border-radius:9999px;">★ 4.9</span>
          </div>
          <!-- Concentric pulse wave -->
          <div style="position:absolute;bottom:0px;width:48px;height:48px;border-radius:50%;background:rgba(15,23,42,0.25);animation:rapidoPulse 2s cubic-bezier(0,0,0.2,1) infinite;pointer-events:none;"></div>
          <!-- Sleek Modern Black Pin Body with High-Visibility Logo -->
          <div style="width:52px;height:52px;border-radius:50% 50% 50% 0;background:linear-gradient(145deg, #1E293B, #090D16);transform:rotate(-45deg);display:flex;align-items:center;justify-content:center;box-shadow:0 12px 28px rgba(15,23,42,0.55);border:2.5px solid #FFFFFF;">
            <div style="transform:rotate(45deg);width:40px;height:40px;border-radius:50%;overflow:hidden;background:#FFFFFF;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 6px rgba(0,0,0,0.25);padding:1px;">
              <img src="/logo.png" alt="SMDS Logo" style="width:100%;height:100%;object-fit:contain;display:block;" />
            </div>
          </div>
          <!-- Ground drop shadow -->
          <div style="width:18px;height:5px;border-radius:50%;background:rgba(15,23,42,0.4);margin-top:3px;"></div>
        </div>
      `,
      iconSize: [0, 0],
      iconAnchor: [0, 0]
    });

    const marker = L.marker([lat, lng], { icon: customIcon }).addTo(map);
    marker.on('click', () => {
      window.open('https://maps.app.goo.gl/xtMwE6q63Pr5Sjdk7?g_st=aw', '_blank');
    });

    mapInstanceRef.current = map;

    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 200);

    return () => {
      clearTimeout(timer);
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
      if (container) {
        delete (container as any)._leaflet_id;
      }
    };
  }, []);

  const handleZoomIn = () => mapInstanceRef.current?.zoomIn();
  const handleZoomOut = () => mapInstanceRef.current?.zoomOut();
  const handleRecenter = () => mapInstanceRef.current?.setView([11.0627487, 77.0896247], 16);

  return (
    <div className="relative w-full h-56 xs:h-64 sm:h-80 rounded-2xl sm:rounded-3xl overflow-hidden border border-amber-200/80 shadow-xl transition-all duration-300 mt-4 group bg-[#F4F3F0]">
      <div 
        ref={mapContainerRef} 
        className="w-full h-full z-0 rapido-map-container" 
      />

      {/* Sleek Minimal Glass Zoom Controls */}
      <div className="absolute top-3 right-3 flex flex-col gap-1.5 z-400">
        <button
          type="button"
          onClick={handleZoomIn}
          className="w-8 h-8 rounded-xl bg-white/95 backdrop-blur-md hover:bg-amber-400 hover:text-slate-950 text-slate-800 font-black text-sm shadow-md flex items-center justify-center border border-amber-200/60 transition-all active:scale-95 cursor-pointer"
          aria-label="Zoom in"
        >
          +
        </button>
        <button
          type="button"
          onClick={handleZoomOut}
          className="w-8 h-8 rounded-xl bg-white/95 backdrop-blur-md hover:bg-amber-400 hover:text-slate-950 text-slate-800 font-black text-sm shadow-md flex items-center justify-center border border-amber-200/60 transition-all active:scale-95 cursor-pointer"
          aria-label="Zoom out"
        >
          −
        </button>
      </div>

      {/* Recenter Button (Bottom Right) */}
      <div className="absolute bottom-3 right-3 z-400">
        <button
          type="button"
          onClick={handleRecenter}
          className="px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md hover:bg-amber-50 text-slate-800 hover:text-amber-700 font-bold text-[11px] shadow-md flex items-center gap-1.5 border border-amber-200/70 transition-all active:scale-95 cursor-pointer"
          title="Recenter Map"
        >
          <Compass className="w-3.5 h-3.5 text-amber-600 animate-[spin_8s_linear_infinite]" />
          <span>Recenter</span>
        </button>
      </div>
    </div>
  );
};

let messageIdCounter = 0;
const createMessageId = () => `msg-${Date.now()}-${++messageIdCounter}`;
const getCurrentTimeString = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);
  const [aiInputText, setAiInputText] = useState('');
  const [aiMessages, setAiMessages] = useState<AiMessage[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: "Hi! I am Velan, Virtual assistant. How can I guide you today?",
      time: 'Just now'
    }
  ]);
  const aiChatEndRef = useRef<HTMLDivElement>(null);

  const handleSendAiQuery = (query: string) => {
    if (!query.trim()) return;
    const userMsg: AiMessage = {
      id: createMessageId(),
      sender: 'user',
      text: query,
      time: getCurrentTimeString()
    };
    const answer = getAiResponse(query);
    const aiMsg: AiMessage = {
      id: createMessageId(),
      sender: 'ai',
      text: answer,
      time: getCurrentTimeString()
    };
    setAiMessages(prev => [...prev, userMsg, aiMsg]);
  };

  const handleAiSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiInputText.trim()) return;
    const query = aiInputText;
    setAiInputText('');
    handleSendAiQuery(query);
  };
  
  const [activeSyllabusTab, setActiveSyllabusTab] = useState<'21-dl' | '21-training' | '10-days'>('21-dl');
  const [activeDocTab, setActiveDocTab] = useState<string>('llr-2w-4w');
  const [tariffFilter, setTariffFilter] = useState<'all' | 'package' | 'training' | 'licence'>('all');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [copiedDoc, setCopiedDoc] = useState<boolean>(false);
  const [fleetViews, setFleetViews] = useState<{ [key: string]: 'exterior' | 'interior' }>({
    wagonr: 'exterior',
    alto: 'exterior'
  });

  const timelineRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const carRef = useRef<HTMLDivElement>(null);
  const headlightRef = useRef<SVGPathElement>(null);
  const brakeLightsRef = useRef<SVGGElement>(null);
  const activeStepRef = useRef(0);
  const carPhysics = useRef({
    currentProgress: 0,
    targetProgress: 0,
    currentRot: 0,
    initialized: false,
    travelDir: 'south' as 'south' | 'north'
  });
  
  const [nodePoints, setNodePoints] = useState<{ x: number; y: number }[]>([]);
  const [timelineDims, setTimelineDims] = useState({ w: 0, h: 0 });
  const [activeTimelineStep, setActiveTimelineStep] = useState(0);

  const isMobile = timelineDims.w > 0 ? timelineDims.w < 768 : (typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  const landingRef = useRef<HTMLDivElement>(null);
  const [isPastLanding, setIsPastLanding] = useState(false);

  // Track scroll position: show floating side menu trigger only after scrolling past the landing page
  useEffect(() => {
    const updatePastLanding = () => {
      if (landingRef.current) {
        const rect = landingRef.current.getBoundingClientRect();
        setIsPastLanding(rect.bottom <= 80);
      } else {
        setIsPastLanding(window.scrollY > 480);
      }
    };

    window.addEventListener('scroll', updatePastLanding, { passive: true });
    window.addEventListener('resize', updatePastLanding);
    updatePastLanding();

    return () => {
      window.removeEventListener('scroll', updatePastLanding);
      window.removeEventListener('resize', updatePastLanding);
    };
  }, []);

  // Pre-warm fleet vehicle exterior and interior images into memory for zero-delay instant switching
  useEffect(() => {
    TRAINING_FLEET.forEach(vehicle => {
      const imgExt = new Image();
      imgExt.src = vehicle.exteriorImg;
      const imgInt = new Image();
      imgInt.src = vehicle.interiorImg;
    });
  }, []);

  // Measure exact (X, Y) pixel coordinates of all milestone nodes for authentic road alignment
  useEffect(() => {
    const measureNodes = () => {
      if (timelineRef.current) {
        const containerRect = timelineRef.current.getBoundingClientRect();
        const points = nodeRefs.current.map(node => {
          if (!node) return { x: 0, y: 0 };
          const rect = node.getBoundingClientRect();
          return {
            x: (rect.left - containerRect.left) + (rect.width / 2),
            y: (rect.top - containerRect.top) + (rect.height / 2)
          };
        });
        setNodePoints(points);
        setTimelineDims({
          w: timelineRef.current.clientWidth,
          h: timelineRef.current.clientHeight
        });
      }
    };
    
    measureNodes();
    window.addEventListener('resize', measureNodes);
    
    let observer: ResizeObserver;
    if (typeof ResizeObserver !== 'undefined' && timelineRef.current) {
      observer = new ResizeObserver(() => measureNodes());
      observer.observe(timelineRef.current);
    }
    
    return () => {
      window.removeEventListener('resize', measureNodes);
      if (observer) observer.disconnect();
    };
  }, []);

  // Generate map road path:
  // 1. Starts inside top white page (y = -150) coming straight into Step 1
  // 2. Weaves naturally between left & right milestone nodes with authentic highway curves
  // 3. Exits straight down into next page (y = h + 150)
  const generateCurvyRoadPath = () => {
    const { w, h } = timelineDims;
    if (w === 0 || h === 0 || nodePoints.length === 0 || nodePoints.some(p => p.y === 0)) return '';

    const p0 = nodePoints[0];
    const pLast = nodePoints[nodePoints.length - 1];
    if (!p0 || !pLast) return '';

    // Extends cleanly within timeline container below header
    const topExitY = 0;
    // Extends cleanly to bottom of timeline container
    const botExitY = h;

    // Straight vertical track coming from top of timeline into Step 1
    let path = `M ${p0.x},${topExitY} L ${p0.x},${p0.y} `;

    // Smooth highway S-curve connecting alternating milestone nodes:
    // Enters and leaves every milestone node purely vertically for seamless alignment and zero-kink driving
    for (let i = 0; i < nodePoints.length - 1; i++) {
      const p1 = nodePoints[i];
      const p2 = nodePoints[i + 1];
      if (!p1 || !p2) continue;

      const dy = p2.y - p1.y;
      const cpYOffset = dy * 0.5;

      const cp1X = p1.x;
      const cp1Y = p1.y + cpYOffset;
      const cp2X = p2.x;
      const cp2Y = p2.y - cpYOffset;

      path += `C ${cp1X},${cp1Y} ${cp2X},${cp2Y} ${p2.x},${p2.y} `;
    }

    // Straight vertical track going down from Step 6 into next page
    path += `L ${pLast.x},${botExitY}`;

    return path;
  };

  const roadPathData = generateCurvyRoadPath();

  // Physics-based butter-smooth scroll-synced car animation loop (North-to-South & South-to-North tracking)
  useEffect(() => {
    if (timelineDims.h === 0 || !pathRef.current || nodePoints.length === 0) return;

    const updateScrollTarget = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const winH = window.innerHeight;
      
      // Full container scroll coverage:
      // Car enters smoothly from inside top white page (winH * 0.90)
      // Car disappears smoothly into next page at bottom (winH * 0.15)
      const enterOffset = winH * 0.90;
      const exitOffset = winH * 0.15;
      
      const totalScrollRange = rect.height + (enterOffset - exitOffset);
      const currentScrolled = enterOffset - rect.top;
      
      const rawProgress = currentScrolled / Math.max(1, totalScrollRange);
      const clamped = Math.max(0, Math.min(1, rawProgress));
      carPhysics.current.targetProgress = clamped;
    };

    window.addEventListener('scroll', updateScrollTarget, { passive: true });
    updateScrollTarget();

    let rafId: number;

    const animationLoop = () => {
      const p = carPhysics.current;

      if (!p.initialized) {
        p.currentProgress = p.targetProgress;
        p.initialized = true;
      } else {
        // High-performance speed-responsive damping: instant reaction to scroll wheel speed with buttery smoothness
        p.currentProgress += (p.targetProgress - p.currentProgress) * 0.28;
      }

      if (pathRef.current && timelineRef.current) {
        const totalLen = pathRef.current.getTotalLength();
        if (totalLen > 0) {
          // Full uninterrupted travel: car travels from exact start (0) to exact end (totalLen) of the road
          const currentLen = Math.max(0, Math.min(totalLen, p.currentProgress * totalLen));
          const pt = pathRef.current.getPointAtLength(currentLen);

          // Velocity delta to detect scroll direction (North to South vs South to North)
          const delta = p.targetProgress - p.currentProgress;
          if (delta > 0.0002) {
            p.travelDir = 'south'; // scrolling down: heading south
          } else if (delta < -0.0002) {
            p.travelDir = 'north'; // scrolling up: heading north
          }

          // Symmetric tangent sampling baseline for micro-jitter-free angle calculation
          const sampleDist = 18;
          const ptAhead = pathRef.current.getPointAtLength(Math.min(totalLen, currentLen + sampleDist));
          const ptBehind = pathRef.current.getPointAtLength(Math.max(0, currentLen - sampleDist));

          const roadAngle = Math.atan2(ptAhead.y - ptBehind.y, ptAhead.x - ptBehind.x) * (180 / Math.PI);

          // Car orientation:
          // When going North to South: front of car faces SOUTH (roadAngle - 90)
          // When going South to North: front of car faces NORTH (roadAngle + 90)
          const targetRot = p.travelDir === 'south' ? (roadAngle - 90) : (roadAngle + 90);

          // Shortest angular distance interpolation for swift, crisp steering and seamless U-turn rotation
          let diffRot = targetRot - p.currentRot;
          while (diffRot < -180) diffRot += 360;
          while (diffRot > 180) diffRot -= 360;

          p.currentRot += diffRot * 0.24;

          // Hardware-accelerated GPU translate3d without scale jitter
          if (carRef.current) {
            const rect = timelineRef.current.getBoundingClientRect();
            const winH = window.innerHeight;
            const isVisible = rect.bottom > 20 && rect.top < winH - 20;
            // Car emerges cleanly from white page at start and disappears into next page at bottom
            const isWithinTrack = p.currentProgress > 0.015 && p.currentProgress < 0.985;
            const shouldShow = isVisible && isWithinTrack;
            carRef.current.style.opacity = shouldShow ? '1' : '0';
            carRef.current.style.transform = `translate3d(${pt.x}px, ${pt.y}px, 0) translate(-50%, -50%) rotate(${p.currentRot}deg)`;
          }

          // Reactive Headlights & Brake Lights:
          // Headlights always project forward in the direction the car is facing
          const isMoving = Math.abs(delta) > 0.0004;
          if (headlightRef.current) {
            headlightRef.current.style.opacity = isMoving ? '0.90' : '0.55';
          }
          if (brakeLightsRef.current) {
            brakeLightsRef.current.style.filter = !isMoving ? 'drop-shadow(0 0 6px #EF4444)' : 'none';
            brakeLightsRef.current.style.opacity = !isMoving ? '0.90' : '0.70';
          }

          // Active step highlight - synchronized with car's vertical position
          let activeStep = -1;
          for (let i = 0; i < nodePoints.length; i++) {
            const ptNode = nodePoints[i];
            if (ptNode && pt.y >= ptNode.y - 35) {
              activeStep = i;
            }
          }
          const lastNode = nodePoints[nodePoints.length - 1];
          if (lastNode && pt.y >= lastNode.y + 50) {
            activeStep = nodePoints.length;
          }
          if (activeStep !== activeStepRef.current) {
            activeStepRef.current = activeStep;
            setActiveTimelineStep(activeStep);
          }
        }
      }

      rafId = requestAnimationFrame(animationLoop);
    };

    rafId = requestAnimationFrame(animationLoop);

    return () => {
      window.removeEventListener('scroll', updateScrollTarget);
      cancelAnimationFrame(rafId);
    };
  }, [timelineDims, nodePoints]);

  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    service: 'Four Wheeler Training with 2 & 4 Wheeler Licence',
    preferredTime: 'morning',
    location: '',
    notes: ''
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);
  const courseDropdownRef = useRef<HTMLDivElement>(null);
  const timeDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (courseDropdownRef.current && !courseDropdownRef.current.contains(e.target as Node)) {
        setIsCourseDropdownOpen(false);
      }
      if (timeDropdownRef.current && !timeDropdownRef.current.contains(e.target as Node)) {
        setIsTimeDropdownOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsCourseDropdownOpen(false);
        setIsTimeDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const getSelectedCourse = () => {
    for (const grp of BOOKING_COURSE_GROUPS) {
      for (const opt of grp.options) {
        if (
          opt.value === bookingForm.service || 
          opt.label === bookingForm.service ||
          (bookingForm.service && opt.value.toLowerCase().includes(bookingForm.service.toLowerCase())) ||
          (bookingForm.service && bookingForm.service.toLowerCase().includes(opt.label.toLowerCase()))
        ) {
          return opt;
        }
      }
    }
    return { value: bookingForm.service, label: bookingForm.service || 'Select Course', badge: undefined };
  };

  const getSelectedTimeSlot = () => {
    return BOOKING_TIME_SLOTS.find(t => t.value === bookingForm.preferredTime) || BOOKING_TIME_SLOTS[1];
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingForm.name || !bookingForm.phone) return;
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setIsBookingOpen(false);
      setBookingForm({ name: '', phone: '', service: 'Four Wheeler Training with 2 & 4 Wheeler Licence', preferredTime: 'morning', location: '', notes: '' });
    }, 2800);
  };

  const copyDocList = (docs: string[], title: string) => {
    const textToCopy = `*SRI MURUGA DRIVING SCHOOL - ${title}*\n${docs.map((d, i) => `${i + 1}. ${d}`).join('\n')}\n\nCall / WhatsApp: 89257 41347 / 73392 48247\nLocation: Neelambur, Coimbatore`;
    if (document.execCommand) {
      const el = document.createElement('textarea');
      el.value = textToCopy;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopiedDoc(true);
      setTimeout(() => setCopiedDoc(false), 2500);
    }
  };

  const currentSyllabus = activeSyllabusTab === '21-dl' ? SYLLABUS_21_WITH_DL : activeSyllabusTab === '21-training' ? SYLLABUS_21_TRAINING_ONLY : SYLLABUS_10_DAYS;
  const filteredTariff = tariffFilter === 'all' ? OFFICIAL_TARIFF : OFFICIAL_TARIFF.filter(t => t.category === tariffFilter);

  return (
    <div className="min-h-dvh w-full overflow-x-clip font-sans antialiased text-slate-900 bg-[#FAFAFC] relative selection:bg-orange-500/20">
      <style>{`
        @keyframes framerSlideLeft {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes framerSlideRight {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .motion-ticker-left {
          display: flex;
          width: max-content;
          animation: framerSlideLeft 48s linear infinite;
          will-change: transform;
        }
        .motion-ticker-right {
          display: flex;
          width: max-content;
          animation: framerSlideRight 54s linear infinite;
          will-change: transform;
        }
        button, a, input, select, label {
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
        }
        .glass-panel {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.95);
          box-shadow: 0 10px 40px -10px rgba(0,0,0,0.04);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .mask-edges {
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
      `}</style>

      {/* AMBIENT LIGHT THEME ORBS */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-orange-400/10 blur-[130px] transition-all duration-1000" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-400/5 blur-[150px] transition-all duration-1000" />
        <div className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] rounded-full bg-amber-300/10 blur-[110px]" />
      </div>


      {/* LANDING PAGE CONTAINER (HEADER & HERO) */}
      <div ref={landingRef} className="relative">
        {/* MODERN FLOATING CURVED ISLAND NAVBAR WITH FULL RESPONSIVE AUTOLAYOUT */}
        <header className="relative pt-2 sm:pt-5 z-40 w-full px-2 xs:px-3 sm:px-6 max-w-7xl mx-auto transition-all duration-300">
          <div className="w-full bg-white/90 hover:bg-white/98 backdrop-blur-2xl border border-white/90 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.07),0_2px_10px_rgba(0,0,0,0.03)] rounded-2xl sm:rounded-full px-2.5 xs:px-3.5 sm:px-6 h-14 sm:h-20 flex items-center justify-between gap-1.5 xs:gap-2 sm:gap-3 transition-all">
            
            {/* BRAND LOGO & TITLE */}
            <a href="#" className="flex items-center gap-1.5 xs:gap-2.5 sm:gap-3.5 min-w-0 group shrink">
              <SriMurugaLogo className="w-8 h-8 xs:w-9 xs:h-9 sm:w-12 sm:h-12 shrink-0 drop-shadow-xs" />
              <div className="flex flex-col min-w-0 justify-center">
                <div className="flex flex-wrap items-baseline gap-x-1 sm:gap-x-1.5 leading-tight">
                  <span className="text-[10px] xs:text-xs sm:text-base lg:text-lg font-black tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors whitespace-nowrap">
                    SRI MURUGA
                  </span>
                  <span className="text-[10px] xs:text-xs sm:text-base lg:text-lg font-black tracking-tight text-orange-600 whitespace-nowrap">
                    DRIVING SCHOOL
                  </span>
                </div>
                <span className="text-[7.5px] xs:text-[8.5px] sm:text-[10px] tracking-wider sm:tracking-widest uppercase font-extrabold text-slate-500 truncate leading-tight mt-0.5">
                  Neelambur, Coimbatore
                </span>
              </div>
            </a>

            {/* ACTION PILLS */}
            <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 shrink-0">
              {/* ENQUIRE NOW ORANGE PILL BUTTON */}
              <button 
                onClick={() => setIsBookingOpen(true)} 
                className="px-3 xs:px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-black text-white bg-linear-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 shadow-md sm:shadow-lg shadow-orange-600/30 transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center gap-1.5 sm:gap-2 cursor-pointer shrink-0"
              >
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0" />
                <span className="whitespace-nowrap">Enquire<span className="hidden xs:inline"> Now</span></span>
              </button>
              
              {/* SLEEK WHITE GLASSMORPHIC MENU PILL BUTTON */}
              <button 
                onClick={() => setIsMenuOpen(true)} 
                className="w-8 h-8 xs:w-auto xs:px-3 sm:px-4 sm:py-2.5 rounded-full bg-white/80 hover:bg-white text-slate-800 hover:text-orange-600 transition-all shadow-[0_4px_16px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.9)] hover:shadow-[0_6px_20px_rgba(249,115,22,0.18)] border border-slate-200/90 hover:border-orange-300/80 backdrop-blur-xl flex items-center justify-center gap-2 font-black text-xs uppercase tracking-widest group cursor-pointer hover:scale-[1.02] active:scale-95 shrink-0"
                aria-label="Open Menu"
              >
                <div className="flex flex-col gap-1 w-3.5 justify-center">
                  <span className="h-0.5 w-full bg-slate-800 rounded-full transition-all group-hover:bg-orange-600" />
                  <span className="h-0.5 w-2.5 bg-orange-500 rounded-full transition-all group-hover:w-full group-hover:bg-orange-600" />
                  <span className="h-0.5 w-full bg-slate-800 rounded-full transition-all group-hover:bg-orange-600" />
                </div>
                <span className="tracking-widest font-black text-xs hidden sm:inline">MENU</span>
              </button>
            </div>
          </div>
        </header>

        {/* MODERN SLIDE-OVER MENU DRAWER */}
        <AnimatePresence>
          {isMenuOpen && (
            <div className="fixed inset-0 z-50 flex justify-end">
              {/* Dimmed backdrop with smooth fade */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm cursor-pointer"
                onClick={() => setIsMenuOpen(false)} 
              />

              {/* Slide-over panel with smooth spring slide */}
              <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 28, stiffness: 280, mass: 0.7 }}
                className="relative w-full sm:max-w-md h-dvh flex flex-col justify-between p-4 xs:p-5 sm:p-7 z-10 overflow-y-auto bg-white/98 backdrop-blur-2xl border-l border-slate-200/80 shadow-2xl"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-slate-100">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <SriMurugaLogo className="w-9 h-9 sm:w-10 sm:h-10" />
                      <div>
                        <h4 className="font-black text-xs sm:text-sm tracking-wide text-slate-900">
                          SRI MURUGA <span className="text-orange-600">DRIVING SCHOOL</span>
                        </h4>
                        <p className="text-[10px] sm:text-[11px] text-orange-600 font-bold">Neelambur, Coimbatore</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setIsMenuOpen(false)} 
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-orange-100 text-slate-700 hover:text-orange-600 flex items-center justify-center transition-all cursor-pointer hover:rotate-90"
                      aria-label="Close menu"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* TIMINGS DASHBOARD IN MENU */}
                  <div className="grid grid-cols-2 gap-2 xs:gap-2.5 sm:gap-3 mt-4 sm:mt-5">
                    <div className="bg-orange-50/80 rounded-xl xs:rounded-2xl p-2.5 xs:p-3 sm:p-4 border border-orange-100 flex flex-col justify-between">
                       <span className="text-[9px] xs:text-[10px] font-black uppercase tracking-widest text-orange-600 block mb-0.5">Classes</span>
                       <span className="text-xs xs:text-sm font-black text-slate-900 whitespace-nowrap">6 AM – 6 PM</span>
                       <span className="text-[9px] xs:text-[10px] font-bold text-slate-500 block mt-0.5">Daily Slots</span>
                    </div>
                    <div className="bg-slate-50 rounded-xl xs:rounded-2xl p-2.5 xs:p-3 sm:p-4 border border-slate-200 flex flex-col justify-between">
                       <span className="text-[9px] xs:text-[10px] font-black uppercase tracking-widest text-slate-500 block mb-0.5">Office Desk</span>
                       <span className="text-xs xs:text-sm font-black text-slate-900 whitespace-nowrap">9 AM – 7 PM</span>
                       <span className="text-[9px] xs:text-[10px] font-bold text-slate-500 block mt-0.5">Mon to Sat</span>
                    </div>
                  </div>

                  <div className="space-y-1.5 xs:space-y-2 mt-4 sm:mt-5">
                    <span className="text-[10px] xs:text-[11px] font-black uppercase tracking-widest text-slate-400 block mb-1.5 px-1">Navigation Directory</span>
                    {[
                      { num: '01', title: 'Packages', desc: 'Training Programs & Licensing', href: '#tariff' },
                      { num: '02', title: 'Syllabus', desc: 'Daily Practical Route Curriculum', href: '#syllabus' },
                      { num: '03', title: 'Process', desc: 'Step-by-Step RTO Licensing Roadmap', href: '#process' },
                      { num: '04', title: 'Documents', desc: 'Govt. Proofs & Checklist', href: '#documents' },
                      { num: '05', title: 'Fleet', desc: 'Dual-Control Certified Cars', href: '#fleet' },
                      { num: '06', title: 'Reviews', desc: 'Verified Google Student Ratings', href: '#reviews' },
                      { num: '07', title: 'Location', desc: 'Neelambur Office & Map Directions', href: '#location' }
                    ].map((item, idx) => (
                      <motion.a 
                        key={item.num} 
                        href={item.href} 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 + idx * 0.03, duration: 0.22 }}
                        onClick={() => setIsMenuOpen(false)} 
                        className="group flex items-center justify-between p-2.5 xs:p-3 sm:p-3.5 rounded-xl xs:rounded-2xl bg-white hover:bg-orange-50 border border-slate-100 hover:border-orange-200 text-slate-800 transition-all shadow-2xs hover:shadow-sm hover:translate-x-1"
                      >
                        <div className="flex items-center gap-2.5 sm:gap-3">
                          <span className="text-[11px] sm:text-xs font-black text-orange-600 bg-orange-100/60 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg">{item.num}</span>
                          <div className="flex flex-col">
                            <span className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-orange-600 transition-colors uppercase tracking-wide">{item.title}</span>
                            <span className="text-[10px] sm:text-[11px] font-medium text-slate-500">{item.desc}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-4 space-y-2">
                  {/* ACTIONS ROW: CONTACT US & LOGIN TO PORTAL (SIDE-BY-SIDE) */}
                  <div className="grid grid-cols-2 gap-2 xs:gap-2.5">
                    {/* 1. CONTACT US BUTTON (SCROLLS TO FOOTER CONTACT DETAILS) */}
                    <a 
                      href="#contact"
                      onClick={(e) => {
                        setIsMenuOpen(false);
                        const contactEl = document.getElementById('contact');
                        if (contactEl) {
                          e.preventDefault();
                          contactEl.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="py-3 px-2.5 xs:px-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white transition-all flex items-center justify-between font-bold text-xs tracking-wide shadow-md active:scale-98 group cursor-pointer"
                      title="View Contact Details at Bottom of Page"
                    >
                      <div className="flex items-center gap-1.5 xs:gap-2 min-w-0">
                        <div className="w-6.5 h-6.5 xs:w-7 xs:h-7 rounded-full bg-white/10 group-hover:bg-orange-500 flex items-center justify-center transition-colors shrink-0">
                          <Phone className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="font-black text-[11px] xs:text-xs sm:text-[13px] text-white group-hover:text-orange-400 transition-colors whitespace-nowrap">
                          Contact Us
                        </span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-orange-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
                    </a>

                    {/* 2. LOGIN TO PORTAL BUTTON (OPENS ATTENDANCE & TRAINEE PORTAL) */}
                    <a 
                      href={typeof window !== 'undefined' ? `${window.location.protocol}//${window.location.hostname}:5174` : 'http://localhost:5174'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-2.5 xs:px-3 rounded-2xl bg-white hover:bg-linear-to-r hover:from-orange-600 hover:to-amber-500 border border-slate-200/90 hover:border-transparent text-slate-800 hover:text-white transition-all duration-300 flex items-center justify-between font-bold text-xs tracking-wide shadow-xs hover:shadow-lg hover:shadow-orange-600/25 active:scale-95 group cursor-pointer"
                      title="Login to Attendance & Trainee Portal"
                    >
                      <div className="flex items-center gap-1.5 xs:gap-2 min-w-0">
                        <div className="w-6.5 h-6.5 xs:w-7 xs:h-7 rounded-full bg-orange-50 text-orange-600 group-hover:bg-white/20 group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                          <LogIn className="w-3.5 h-3.5 transition-transform group-hover:scale-105" />
                        </div>
                        <span className="font-black text-[11px] xs:text-xs sm:text-[13px] text-slate-800 group-hover:text-white transition-colors whitespace-nowrap">
                          Login to Portal
                        </span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                    </a>
                  </div>

                  {/* BOOK TRAINING SLOT NOW BUTTON */}
                  <button 
                    onClick={() => { setIsMenuOpen(false); setIsBookingOpen(true); }}
                    className="w-full py-3.5 sm:py-4 rounded-2xl bg-linear-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 active:scale-98 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-orange-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Training Slot Now</span>
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* HERO SECTION */}
        <section className="relative pt-8 pb-16 sm:pt-16 sm:pb-28 overflow-hidden z-10">
          <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative text-center">
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="relative group p-2.5 sm:p-4 rounded-3xl bg-white/90 backdrop-blur-xl border border-orange-200/80 shadow-2xl shadow-orange-500/15 hover:scale-105 transition-all duration-300">
                <img 
                  src="/logo.png" 
                  alt="Sri Muruga Driving School Official Logo" 
                  className="w-20 h-20 xs:w-24 xs:h-24 sm:w-32 sm:h-32 object-contain filter drop-shadow-md"
                />
              </div>
            </div>
            <h1 className="text-2xl xs:text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.12] mb-4 sm:mb-6">
              Master the Road with <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-600 to-amber-500">Individual</span> Training.
            </h1>
            <p className="text-sm sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
              Strictly one student per car. Experience 40 minutes of dedicated daily steering time with our certified instructors. Learn safely on dual-control vehicles.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto w-full">
              <button onClick={() => setIsBookingOpen(true)} className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl shadow-orange-600/20 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 cursor-pointer">
                <span>Book a Training Slot</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a href="#tariff" className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-sm border border-slate-200 flex items-center justify-center gap-2 active:scale-95">
                Explore Packages
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* RTO PROCESS TIMELINE WITH CURVY MAP ROAD & 3D SCROLL CAR */}
      <section id="process" className="py-20 sm:py-32 relative z-10 border-t border-slate-200/70 overflow-hidden bg-white/40 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-[11px] font-black uppercase tracking-widest text-orange-600">How It Works</span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-2 text-slate-900">Step-by-Step RTO Process</h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 font-medium">From learner's permit (LLR) to your permanent digital E-driving license, we handle the entire process smoothly.</p>
          </div>

          <div className="relative max-w-5xl mx-auto w-full" ref={timelineRef}>
            
            {/* Smooth SVG Map-Like Curvy Road Connector */}
            <div 
              className="absolute inset-0 pointer-events-none z-0"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent 0px, black 35px, black calc(100% - 35px), transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0px, black 35px, black calc(100% - 35px), transparent 100%)'
              }}
            >
               {timelineDims.h > 0 && nodePoints.length > 0 && (
                 <svg className="w-full h-full overflow-visible" style={{ filter: 'drop-shadow(0px 10px 24px rgba(15,23,42,0.14))' }}>
                   {/* Asphalt Road Track */}
                   <path 
                     d={roadPathData} 
                     fill="none" 
                     stroke="#0F172A" 
                     strokeWidth={isMobile ? "26" : "46"} 
                     strokeLinecap="round" 
                     strokeLinejoin="round" 
                   />
                   {/* Road Edge Inner Border Glow */}
                   <path 
                     d={roadPathData} 
                     fill="none" 
                     stroke="#334155" 
                     strokeWidth={isMobile ? "24" : "42"} 
                     strokeLinecap="round" 
                     strokeLinejoin="round" 
                     opacity="0.25"
                   />
                   {/* Dashed Amber/Yellow Centerline */}
                   <path 
                     ref={pathRef}
                     d={roadPathData} 
                     fill="none" 
                     stroke="#FBBF24" 
                     strokeWidth={isMobile ? "2.5" : "4"} 
                     strokeDasharray={isMobile ? "12 12" : "18 16"} 
                     strokeLinecap="round" 
                     strokeLinejoin="round" 
                   />
                 </svg>
               )}
            </div>

            {/* Scroll-Synced 3D Navigation Car (North-to-South & South-to-North) */}
            <div 
              ref={carRef}
              className="absolute top-0 left-0 z-40 pointer-events-none will-change-transform"
              style={{
                opacity: 0,
                transform: 'translate3d(0, 0, 0) translate(-50%, -50%) rotate(0deg)',
                transition: 'opacity 300ms ease-out',
              }}
            >
              <div className="relative w-9 h-16 md:w-11 md:h-19.5 drop-shadow-2xl">
                <svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
                  {/* Under-chassis Ambient Ground Shadow */}
                  <ellipse cx="30" cy="50" rx="22" ry="42" fill="rgba(0,0,0,0.38)" filter="blur(6px)"/>
                  
                  {/* Front Headlights Beam Projection on Asphalt (pointing South) */}
                  <path 
                    ref={headlightRef} 
                    d="M 14 86 L 2 135 L 58 135 L 46 86 Z" 
                    fill="url(#headlightBeamGrad)" 
                    opacity="0.55" 
                    filter="blur(5px)" 
                    className="transition-opacity duration-200" 
                  />

                  {/* Aerodynamic White Driving School Sedan Body */}
                  <rect x="9" y="5" width="42" height="88" rx="17" fill="url(#carBodyGrad)" stroke="#CBD5E1" strokeWidth="1.2"/>
                  
                  {/* Side Mirrors at Front Windshield A-pillar */}
                  <rect x="2" y="48" width="7" height="13" rx="3.5" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
                  <rect x="51" y="48" width="7" height="13" rx="3.5" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1"/>
                  <circle cx="5" cy="51" r="1.5" fill="#FBBF24" opacity="0.9"/>
                  <circle cx="55" cy="51" r="1.5" fill="#FBBF24" opacity="0.9"/>

                  {/* Front Windshield Curved Tint (facing South) */}
                  <path d="M 13 72 Q 30 78 47 72 L 43 56 Q 30 61 17 56 Z" fill="#0F172A"/>
                  {/* Windshield Glass Reflection */}
                  <path d="M 17 58 L 24 73" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>

                  {/* Rear Window Tint (facing North) */}
                  <path d="M 15 16 Q 30 11 45 16 L 42 28 Q 30 24 18 28 Z" fill="#0F172A"/>
                  {/* Rear Glass Reflection */}
                  <path d="M 20 18 L 26 27" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>

                  {/* Side Glass Panels */}
                  <rect x="12" y="32" width="4" height="20" rx="1.5" fill="#1E293B"/>
                  <rect x="44" y="32" width="4" height="20" rx="1.5" fill="#1E293B"/>

                  {/* Clean Aerodynamic Car Roof with Subtle Ribs */}
                  <line x1="22" y1="33" x2="22" y2="51" stroke="#E2E8F0" strokeWidth="1" strokeLinecap="round" />
                  <line x1="38" y1="33" x2="38" y2="51" stroke="#E2E8F0" strokeWidth="1" strokeLinecap="round" />
                  
                  {/* Dual Front Projector Headlights */}
                  <rect x="12" y="85" width="10" height="6" rx="3" fill="#FDE047" filter="blur(0.5px)"/>
                  <rect x="38" y="85" width="10" height="6" rx="3" fill="#FDE047" filter="blur(0.5px)"/>
                  <circle cx="17" cy="88" r="2.8" fill="#FFFFFF"/>
                  <circle cx="43" cy="88" r="2.8" fill="#FFFFFF"/>
                  
                  {/* Dual Rear Red LED Tail / Brake Lights */}
                  <g ref={brakeLightsRef} className="transition-all duration-150">
                    <rect x="12" y="5.5" width="11" height="4.5" rx="2" fill="#EF4444" filter="blur(0.5px)"/>
                    <rect x="37" y="5.5" width="11" height="4.5" rx="2" fill="#EF4444" filter="blur(0.5px)"/>
                    <circle cx="17.5" cy="7.7" r="1.8" fill="#FEE2E2"/>
                    <circle cx="42.5" cy="7.7" r="1.8" fill="#FEE2E2"/>
                    <rect x="25" y="5.5" width="10" height="3" rx="1.5" fill="#FFFFFF" opacity="0.9" />
                  </g>
                  
                  {/* Hood & Trunk Subtle Contour */}
                  <path d="M 18 80 Q 30 84 42 80" stroke="#E2E8F0" strokeWidth="1" strokeLinecap="round" fill="none"/>
                  
                  <defs>
                    <linearGradient id="carBodyGrad" x1="30" y1="5" x2="30" y2="93" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#FFFFFF"/>
                      <stop offset="50%" stopColor="#F8FAFC"/>
                      <stop offset="100%" stopColor="#E2E8F0"/>
                    </linearGradient>
                    <linearGradient id="headlightBeamGrad" x1="30" y1="86" x2="30" y2="135" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.85"/>
                      <stop offset="50%" stopColor="#FDE047" stopOpacity="0.35"/>
                      <stop offset="100%" stopColor="#FDE047" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="relative z-10 w-full pt-12 pb-12 flex flex-col gap-16 sm:gap-28">
              {LICENSE_PROCESS.map((item, idx) => {
                const isCurrent = activeTimelineStep === idx;
                const isCompleted = activeTimelineStep > idx;
                const isEven = idx % 2 === 0;
                
                return (
                <div key={item.step} className={`relative flex items-center w-full justify-end ${isEven ? 'md:justify-start' : 'md:justify-end'} group`}>
                  
                  {/* MILESTONE BEACON ON ROAD */}
                  <div 
                    ref={el => { nodeRefs.current[idx] = el; }}
                    className={`absolute left-0 ${isEven ? 'md:left-[calc(50%-4rem)]' : 'md:left-[calc(50%+4rem)]'} md:-translate-x-1/2 flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 rounded-full font-black shadow-xl shrink-0 z-30 transition-all duration-500 ${
                      isCurrent
                        ? 'scale-120 sm:scale-125 bg-linear-to-br from-orange-500 via-amber-500 to-orange-600 text-white shadow-orange-500/50 shadow-2xl ring-4 ring-orange-500/30 border-2 border-white'
                        : isCompleted
                          ? 'scale-105 bg-linear-to-br from-emerald-500 to-teal-600 text-white shadow-emerald-500/30 shadow-lg ring-4 ring-emerald-500/15 border-2 border-white'
                          : 'scale-95 bg-white text-slate-300 border-[3px] border-slate-200/90 shadow-sm opacity-60'
                    }`}
                  >
                    {/* Glowing pulse ping on current active milestone */}
                    {isCurrent && (
                      <span className="absolute -inset-1 rounded-full bg-orange-400 animate-ping opacity-60 pointer-events-none" />
                    )}

                    {isCompleted ? (
                      <Check className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-3 relative z-10" />
                    ) : (
                      <item.icon className={`w-5 h-5 sm:w-6 sm:h-6 relative z-10 ${isCurrent ? 'text-white stroke-[2.5]' : 'text-slate-400'}`} />
                    )}
                  </div>
                  
                  {/* STEP CONTENT CARD WITH DYNAMIC HIGHLIGHT */}
                  <div className={`w-[calc(100%-3.5rem)] sm:w-[calc(100%-4.5rem)] md:w-[calc(50%-6.5rem)] lg:w-[calc(50%-5.5rem)] max-w-sm sm:max-w-md p-4 sm:p-7 rounded-2xl sm:rounded-3xl transition-all duration-500 relative z-10 overflow-hidden ${
                    isCurrent
                      ? '-translate-y-2 scale-[1.02] bg-linear-to-br from-orange-50/98 via-white to-amber-50/70 border-2 border-orange-500 shadow-[0_20px_45px_-10px_rgba(249,115,22,0.35),0_0_20px_rgba(249,115,22,0.2)] ring-4 ring-orange-500/15'
                      : isCompleted
                        ? 'bg-white/95 border-2 border-emerald-400/80 shadow-lg shadow-emerald-500/10'
                        : 'bg-white/60 border border-slate-200/60 opacity-55 hover:opacity-85 shadow-2xs'
                  }`}>
                    
                    {/* Glowing Accent Top Bar on Current Step */}
                    {isCurrent && (
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-orange-500 via-amber-400 to-orange-600 shadow-sm" />
                    )}

                    {/* Status Top Row / Badge */}
                    <div className="flex items-center justify-between gap-2 mb-2 sm:mb-2.5">
                      {isCurrent ? (
                        <>
                          <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-linear-to-r from-orange-600 to-amber-500 text-white text-[9.5px] sm:text-[10px] font-black uppercase tracking-wider shadow-md shadow-orange-500/30 animate-pulse">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                            <span>STEP {item.step} • CURRENT STEP</span>
                          </span>
                          <span className="text-[9px] sm:text-[10px] font-black text-orange-600 bg-orange-100/90 px-2 sm:px-2.5 py-0.5 rounded-full border border-orange-200 uppercase tracking-wide">
                            Car Crossing
                          </span>
                        </>
                      ) : isCompleted ? (
                        <>
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[9.5px] sm:text-[10px] font-black uppercase tracking-wider border border-emerald-200">
                            <Check className="w-3 h-3 text-emerald-600 stroke-3" />
                            <span>STEP {item.step} • COMPLETED</span>
                          </span>
                          <span className="text-[9px] sm:text-[10px] font-black text-emerald-600 uppercase tracking-wide flex items-center gap-1">
                            ✓ Cleared
                          </span>
                        </>
                      ) : (
                        <span className="text-[9px] sm:text-[10px] font-black uppercase text-slate-400 tracking-widest block">
                          Step {item.step} • Upcoming
                        </span>
                      )}
                    </div>

                    {/* Step Title */}
                    <h3 className={`text-base sm:text-xl font-black mb-1 sm:mb-1.5 tracking-tight transition-colors ${
                      isCurrent 
                        ? 'text-slate-900' 
                        : isCompleted 
                          ? 'text-slate-900' 
                          : 'text-slate-500'
                    }`}>
                      {item.title}
                    </h3>

                    {/* Step Description */}
                    <p className={`text-xs sm:text-sm font-medium leading-relaxed transition-colors ${
                      isCurrent 
                        ? 'text-slate-700 font-semibold' 
                        : isCompleted 
                          ? 'text-slate-600' 
                          : 'text-slate-400'
                    }`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* OFFICIAL TARIFF & PRICING */}
      <section id="tariff" className="py-20 sm:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-orange-600">Our Training Programs</span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-2 text-slate-900">Courses & Services</h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 font-medium">Individual training with verified RTO process and personalized coaching for all vehicles.</p>

            <div className="mt-8 p-2 rounded-2xl inline-flex flex-wrap justify-center gap-1.5 glass-panel">
              {[{ id: 'all', label: `All Programs (${OFFICIAL_TARIFF.length})` }, { id: 'package', label: 'Packages + DL' }, { id: 'training', label: 'Training Only' }, { id: 'licence', label: 'Licence Only' }].map((tab) => (
                <button key={tab.id} onClick={() => setTariffFilter(tab.id as any)} className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${tariffFilter === tab.id ? 'bg-orange-600 text-white shadow-md' : 'bg-transparent text-slate-600 hover:bg-white/50'}`}>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredTariff.map((item) => (
              <div key={item.sNo} className={`glass-panel p-5 xs:p-7 sm:p-9 rounded-3xl sm:rounded-[2.5rem] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative ${item.isPopular ? 'ring-2 ring-orange-400/50 shadow-xl shadow-orange-600/10 bg-white/90' : ''}`}>
                {item.badge && (
                  <div className="absolute -top-3.5 xs:-top-4 left-6 xs:left-8 px-3 xs:px-4 py-1 xs:py-1.5 rounded-full bg-linear-to-r from-orange-500 to-amber-500 text-white text-[9.5px] xs:text-[10px] font-black uppercase tracking-wider shadow-md whitespace-nowrap">
                    {item.badge}
                  </div>
                )}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black text-slate-400 uppercase tracking-wider">{item.duration}</span>
                    <span className="text-[10px] font-black px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 border border-slate-200">{item.category.toUpperCase()}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-snug text-slate-900">{item.title}</h3>
                  {item.highlight && <p className="text-xs sm:text-sm text-slate-600 mt-3 font-medium leading-relaxed">{item.highlight}</p>}
                </div>
                <div className="mt-8 pt-6 border-t border-slate-200/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="text-xs font-bold text-slate-700 truncate">Govt. Approved</span>
                  </div>
                  <button onClick={() => { setBookingForm(prev => ({ ...prev, service: item.title })); setIsBookingOpen(true); }} className="px-4 xs:px-6 py-2.5 xs:py-3 rounded-xl text-xs sm:text-sm font-black bg-slate-900 hover:bg-orange-600 text-white shadow-md transition-all active:scale-95 shrink-0 whitespace-nowrap cursor-pointer">
                    Enquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING SYLLABUS / ROUTE TIMETABLE */}
      <section id="syllabus" className="py-20 sm:py-32 relative z-10 bg-white/40 backdrop-blur-md border-t border-slate-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-orange-600">Structured 40-Minute Road Curriculum</span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-2 text-slate-900">Practical Route Schedule</h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 font-medium">Every single day covers a specific road skill, route, and traffic condition. Guided step-by-step by certified instructors.</p>

            <div className="mt-8 p-1.5 xs:p-2 rounded-2xl inline-flex flex-wrap justify-center gap-1.5 xs:gap-2 glass-panel">
              <button onClick={() => setActiveSyllabusTab('21-dl')} className={`px-3.5 xs:px-5 py-2.5 xs:py-3 rounded-xl text-xs sm:text-sm font-black transition-all ${activeSyllabusTab === '21-dl' ? 'bg-orange-600 text-white shadow-md' : 'text-slate-600 hover:bg-white/50 bg-transparent'}`}>21 Days + Licence</button>
              <button onClick={() => setActiveSyllabusTab('21-training')} className={`px-3.5 xs:px-5 py-2.5 xs:py-3 rounded-xl text-xs sm:text-sm font-black transition-all ${activeSyllabusTab === '21-training' ? 'bg-orange-600 text-white shadow-md' : 'text-slate-600 hover:bg-white/50 bg-transparent'}`}>21 Days Training Only</button>
              <button onClick={() => setActiveSyllabusTab('10-days')} className={`px-3.5 xs:px-5 py-2.5 xs:py-3 rounded-xl text-xs sm:text-sm font-black transition-all ${activeSyllabusTab === '10-days' ? 'bg-orange-600 text-white shadow-md' : 'text-slate-600 hover:bg-white/50 bg-transparent'}`}>10 Days Refresher</button>
            </div>
          </div>

          <div className="glass-panel rounded-3xl sm:rounded-[2.5rem] p-4 xs:p-6 sm:p-10 relative overflow-hidden bg-white/80">
            <div className="space-y-4">
              {currentSyllabus.map((day) => (
                <div key={day.day} className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-slate-100 hover:border-orange-200 shadow-sm hover:shadow-md transition-all">
                  {/* Top Row on Mobile: Day Badge + Title (beside Day) */}
                  <div className="flex items-start sm:items-center gap-3.5 sm:gap-6">
                    {/* Day Badge */}
                    <div className="flex flex-col items-center justify-center w-12 h-12 rounded-xl bg-orange-50 text-orange-600 font-black border border-orange-100 shrink-0 shadow-2xs">
                      <span className="text-[10px] uppercase leading-none mb-0.5">Day</span>
                      <span className="text-lg leading-none">{day.day}</span>
                    </div>

                    {/* Title beside Day */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm sm:text-base font-black text-slate-900 leading-snug">
                        {day.classType}
                      </h4>

                      {/* Badges on Mobile */}
                      <div className="flex items-center gap-1.5 mt-1.5 sm:hidden">
                        <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-500 border border-slate-200">
                          {day.duration}
                        </span>
                        {day.badge && (
                          <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-amber-50 text-amber-600 border border-amber-200">
                            {day.badge}
                          </span>
                        )}
                      </div>

                      {/* Route on Desktop */}
                      <p className="hidden sm:flex text-xs text-slate-600 font-medium items-center gap-1.5 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                        <span className="truncate">{day.route}</span>
                      </p>
                    </div>

                    {/* Badges on Desktop */}
                    <div className="hidden sm:flex flex-col items-end gap-2 shrink-0">
                      {day.badge && (
                        <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded bg-amber-50 text-amber-600 border border-amber-200">
                          {day.badge}
                        </span>
                      )}
                      <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded bg-slate-100 text-slate-500 border border-slate-200">
                        {day.duration} Slot
                      </span>
                    </div>
                  </div>

                  {/* Bottom Row on Mobile: Route Only */}
                  <div className="sm:hidden mt-3 pt-2.5 border-t border-slate-100/90">
                    <p className="flex items-center gap-1.5 text-xs text-slate-600 font-medium min-w-0">
                      <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                      <span className="truncate">{day.route}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-orange-600 shrink-0" />
                <span className="font-bold">Every session is strictly individual training.</span>
              </div>
              <button onClick={() => setIsBookingOpen(true)} className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-black text-xs sm:text-sm transition-colors shadow-md shrink-0 w-full sm:w-auto">Reserve Schedule</button>
            </div>
          </div>
        </div>
      </section>

      {/* REQUIRED DOCUMENTS CHECKLIST */}
      <section id="documents" className="py-20 sm:py-32 relative z-10 border-t border-slate-200/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-orange-600">Official RTO Requirements</span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-2 text-slate-900">Document Checklist</h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 font-medium">Have these documents ready before visiting the office for seamless processing.</p>
          </div>

          <div className="max-w-4xl mx-auto flex flex-col gap-4">
            {DOCUMENT_REQUIREMENTS.map((doc) => {
              const isOpen = activeDocTab === doc.id;

              return (
                <div 
                  key={doc.id}
                  onMouseEnter={() => {
                    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
                      setActiveDocTab(doc.id);
                    }
                  }}
                  className={`glass-panel rounded-3xl transition-all duration-300 overflow-hidden border ${
                    isOpen 
                      ? 'border-orange-500/50 bg-white/95 shadow-xl shadow-orange-500/10 ring-2 ring-orange-500/15' 
                      : 'border-slate-200/80 bg-white/80 hover:bg-white hover:border-orange-200 hover:shadow-md'
                  }`}
                >
                  {/* Accordion Header / Trigger Button */}
                  <button 
                    type="button"
                    onClick={() => setActiveDocTab(prev => prev === doc.id ? '' : doc.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 flex-1">
                      <div className="flex items-center gap-2.5">
                        <span className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full transition-all ${
                          isOpen 
                            ? 'bg-orange-600 text-white shadow-sm shadow-orange-600/20' 
                            : 'bg-slate-100 text-slate-600'
                        }`}>
                          {doc.badge}
                        </span>
                        <span className="text-xs font-bold text-slate-400">
                          {doc.documents.length} Proofs
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                        {doc.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen ? 'bg-orange-100 text-orange-600 rotate-180 shadow-xs' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                      }`}>
                        <ChevronDown className="w-5 h-5 transition-transform duration-300" />
                      </div>
                    </div>
                  </button>

                  {/* Smooth Animated Dropdown Content */}
                  <div 
                    className="grid transition-all duration-300 ease-in-out"
                    style={{
                      gridTemplateRows: isOpen ? '1fr' : '0fr',
                    }}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 sm:px-7 pb-6 pt-1 border-t border-slate-100/90">
                        <div className="space-y-3 mt-3">
                          {doc.documents.map((req, idx) => (
                            <div 
                              key={idx} 
                              className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white/90 border border-slate-100 hover:border-orange-200 hover:bg-orange-50/20 transition-all shadow-xs"
                            >
                              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 shrink-0 mt-0.5 shadow-2xs">
                                <Check className="w-3.5 h-3.5 stroke-3" />
                              </div>
                              <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                                {req}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                          <span className="text-xs text-slate-500 font-medium">
                            Bring original documents & copies to our Neelambur office.
                          </span>
                          <button 
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              copyDocList(doc.documents, doc.title);
                            }}
                            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-orange-600 text-white text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95"
                          >
                            {copiedDoc && activeDocTab === doc.id ? (
                              <>
                                <Check className="w-4 h-4 text-emerald-400" />
                                <span>List Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-4 h-4" />
                                <span>Copy Checklist</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 100% MANUAL DUAL-CONTROL TRAINING FLEET */}
      <section id="fleet" className="py-20 sm:py-32 relative z-10 border-t border-slate-200/70 bg-white/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/90 border border-orange-200 text-orange-700 text-xs font-black uppercase tracking-wider mb-3 shadow-xs">
              <Car className="w-4 h-4 text-orange-600" />
              100% Fully Manual Transmission Only
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">Certified Training Vehicles</h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 font-medium">
              We exclusively train on fully manual transmission cars equipped with certified dual-control instructor co-pedals (clutch and brake) for authentic driving mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {TRAINING_FLEET.map((vehicle) => {
              const currentView = fleetViews[vehicle.id] || 'exterior';
              const isExterior = currentView === 'exterior';

              return (
                <div 
                  key={vehicle.id} 
                  className="glass-panel rounded-3xl sm:rounded-4xl overflow-hidden border border-slate-200/90 shadow-xl bg-white/95 hover:shadow-2xl hover:border-orange-300/80 transition-all duration-300 flex flex-col group"
                >
                  {/* Vehicle Media Header with Toggle */}
                  <div className="relative aspect-16/10 sm:aspect-video bg-slate-900 overflow-hidden">
                    {/* Exterior Image - Always kept in DOM for instant 0ms switching */}
                    <img 
                      src={vehicle.exteriorImg} 
                      alt={vehicle.exteriorAlt}
                      loading="eager"
                      decoding="sync"
                      fetchPriority="high"
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-150 ease-out group-hover:scale-103 ${
                        isExterior ? 'opacity-100 z-1 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                      }`}
                    />

                    {/* Interior & Dual-Pedals Image - Pre-rendered simultaneously for zero delay */}
                    <img 
                      src={vehicle.interiorImg} 
                      alt={vehicle.interiorAlt}
                      loading="eager"
                      decoding="sync"
                      fetchPriority="high"
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-150 ease-out group-hover:scale-103 ${
                        !isExterior ? 'opacity-100 z-1 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                      }`}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/20 to-slate-950/40 pointer-events-none z-2" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
                      {/* Number Plate Badge */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FFDF00] text-black font-mono font-black text-xs sm:text-sm tracking-wider border border-amber-500 shadow-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                        <span>{vehicle.regNo}</span>
                      </div>

                      {/* Certified Badge */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md text-white text-[11px] font-bold border border-white/20 shadow-md">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Govt. Approved</span>
                      </div>
                    </div>

                    {/* Bottom Image Mode Switcher (Exterior / Interior) */}
                    <div className="absolute bottom-3 xs:bottom-4 left-3 xs:left-4 right-3 xs:right-4 flex items-center justify-between gap-2 z-10">
                      <div className="p-1 rounded-xl xs:rounded-2xl bg-slate-900/85 backdrop-blur-md border border-white/20 inline-flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => setFleetViews(prev => ({ ...prev, [vehicle.id]: 'exterior' }))}
                          className={`px-2.5 xs:px-3 py-1.5 rounded-lg xs:rounded-xl text-[11px] xs:text-xs font-black transition-all cursor-pointer whitespace-nowrap ${
                            isExterior 
                              ? 'bg-orange-500 text-white shadow-md' 
                              : 'text-slate-300 hover:text-white'
                          }`}
                        >
                          Exterior View
                        </button>
                        <button
                          type="button"
                          onClick={() => setFleetViews(prev => ({ ...prev, [vehicle.id]: 'interior' }))}
                          className={`px-2.5 xs:px-3 py-1.5 rounded-lg xs:rounded-xl text-[11px] xs:text-xs font-black transition-all cursor-pointer whitespace-nowrap ${
                            !isExterior 
                              ? 'bg-orange-500 text-white shadow-md' 
                              : 'text-slate-300 hover:text-white'
                          }`}
                        >
                          Interior &amp; Pedals
                        </button>
                      </div>

                      <span className="hidden sm:inline-flex px-2.5 py-1 rounded-lg bg-emerald-500/90 text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                        Manual Dual-Pedals
                      </span>
                    </div>
                  </div>

                  {/* Vehicle Body Content */}
                  <div className="p-6 sm:p-8 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <span className="text-[11px] font-black uppercase text-orange-600 tracking-wider">
                          {vehicle.type}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                          {vehicle.fullName}
                        </h3>
                      </div>
                      <span className="px-3 py-1 rounded-xl bg-orange-50 text-orange-700 font-mono font-black text-xs border border-orange-200 shrink-0">
                        5-Speed MT
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-6">
                      {vehicle.desc}
                    </p>

                    {/* Spec Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                      {vehicle.specs.map((sp, sIdx) => (
                        <div key={sIdx} className="flex flex-col">
                          <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                            {sp.label}
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-slate-800">
                            {sp.val}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Key Dual Control Guarantee */}
                    <div className="flex items-center gap-2 mb-6 text-emerald-700 bg-emerald-50 px-3.5 py-2.5 rounded-xl border border-emerald-200/80">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="text-[11px] font-bold">
                        {vehicle.dualControl}
                      </span>
                    </div>

                    {/* Action Button */}
                    <div className="mt-auto pt-4 border-t border-slate-100 flex flex-col xs:flex-row items-stretch xs:items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-600 justify-center xs:justify-start">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>Govt. RTO Certified</span>
                      </div>
                      <button
                        onClick={() => {
                          setBookingForm(prev => ({
                            ...prev,
                            notes: `Preferred Training Car: ${vehicle.fullName} (${vehicle.regNo})`
                          }));
                          setIsBookingOpen(true);
                        }}
                        className="w-full xs:w-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-orange-600 text-white font-black text-xs sm:text-sm tracking-wide transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Book on this Car</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VERIFIED GOOGLE REVIEWS MARQUEE */}
      <section id="reviews" className="py-20 sm:py-32 relative z-10 overflow-hidden border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-orange-600">Success Stories</span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-2 text-slate-900">Verified Google Reviews</h2>
          <div className="mt-6 flex items-center justify-center">
             <div className="glass-panel bg-white/90 px-6 py-3 rounded-full flex items-center gap-4 shadow-sm border border-slate-100">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                <span className="text-sm font-black text-slate-900 border-l border-slate-200 pl-4">4.98 / 5.0</span>
             </div>
          </div>
        </div>

        <div className="relative w-full max-w-[100vw] mask-edges">
          <div className="flex flex-col gap-6">
            <div className="motion-ticker-left">
              {[...REVIEWS.slice(0, 3), ...REVIEWS.slice(0, 3)].map((review, i) => (
                <div key={`${review.id}-${i}`} className="w-70 sm:w-102.5 shrink-0 mx-3 p-6 sm:p-8 rounded-3xl glass-panel bg-white/90 hover:bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-200 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map(star => <Star key={star} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                    </div>
                    <span className="text-[9px] font-black uppercase px-2 py-1 rounded bg-emerald-50 text-emerald-600 border border-emerald-100">{review.verified}</span>
                  </div>
                  <Quote className="w-6 h-6 text-slate-200 mb-3 group-hover:text-orange-200 transition-colors" />
                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed line-clamp-4 mb-6">"{review.review}"</p>
                  <div className="flex items-center gap-3 pt-5 border-t border-slate-100 mt-auto">
                    <div className={`w-10 h-10 rounded-full bg-linear-to-br ${review.avatarColor} text-white font-black text-xs flex items-center justify-center shadow-inner`}>
                      {review.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-black text-slate-900 truncate">{review.name}</h4>
                      <p className="text-[10px] font-bold text-slate-500 truncate flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-orange-400" />
                        {review.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="motion-ticker-right">
               {[...REVIEWS.slice(3, 6), ...REVIEWS.slice(3, 6)].map((review, i) => (
                <div key={`${review.id}-r2-${i}`} className="w-70 sm:w-102.5 shrink-0 mx-3 p-6 sm:p-8 rounded-3xl glass-panel bg-white/90 hover:bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-200 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map(star => <Star key={star} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                    </div>
                    <span className="text-[9px] font-black uppercase px-2 py-1 rounded bg-amber-50 text-amber-600 border border-amber-100">{review.verified}</span>
                  </div>
                  <Quote className="w-6 h-6 text-slate-200 mb-3 group-hover:text-amber-200 transition-colors" />
                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed line-clamp-4 mb-6">"{review.review}"</p>
                  <div className="flex items-center gap-3 pt-5 border-t border-slate-100 mt-auto">
                    <div className={`w-10 h-10 rounded-full bg-linear-to-br ${review.avatarColor} text-white font-black text-xs flex items-center justify-center shadow-inner`}>
                      {review.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-black text-slate-900 truncate">{review.name}</h4>
                      <p className="text-[10px] font-bold text-slate-500 truncate flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-amber-400" />
                        {review.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION & FAQ SECTION */}
      <section id="location" className="py-20 sm:py-32 relative z-10 border-t border-slate-200/70 bg-white/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              
              <div className="glass-panel p-5 xs:p-7 sm:p-10 rounded-3xl sm:rounded-[2.5rem] flex flex-col relative overflow-hidden group bg-white/85">
                <div className="absolute top-0 right-0 p-8 opacity-5 transition-opacity group-hover:opacity-10 pointer-events-none">
                  <MapPin className="w-40 h-40 text-orange-600" />
                </div>
                
                <div className="mb-6 relative z-10 flex items-center gap-3">
                   <div className="p-3 rounded-2xl bg-orange-100 text-orange-600">
                      <MapPin className="w-6 h-6" />
                   </div>
                   <div>
                     <h3 className="text-xl sm:text-2xl font-black text-slate-900">Office Location</h3>
                     <p className="text-xs font-bold text-slate-500">Neelambur, Coimbatore</p>
                   </div>
                </div>

                <div className="space-y-5 flex-1 relative z-10 bg-white/90 p-4.5 xs:p-6 rounded-2xl xs:rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex gap-4">
                       <div className="w-1.5 h-auto bg-linear-to-b from-orange-400 to-amber-400 rounded-full shrink-0" />
                       <div>
                          <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider block mb-1">Official Address</span>
                          <p className="text-sm sm:text-base font-bold text-slate-800 leading-snug">
                            Shop No. 1/155, NPS Nagar Road,<br />
                            Near Kannan Departmental Store,<br />
                            MBS Nagar, Neelambur,<br />
                            Coimbatore, Tamil Nadu - 641062
                          </p>
                       </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
                       <div>
                          <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider block mb-0.5">Office Enquiries</span>
                          <p className="text-sm font-bold text-slate-800">09:00 AM – 07:00 PM</p>
                          <p className="text-[10px] text-slate-500 font-medium">Monday to Saturday</p>
                       </div>
                       <div>
                          <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider block mb-0.5">Practical Classes</span>
                          <p className="text-sm font-bold text-orange-600">6:00 AM – 6:00 PM</p>
                          <p className="text-[10px] text-slate-500 font-medium">Pre-booked 40-min slots</p>
                       </div>
                    </div>
                  </div>

                  {/* Modern Clean Map Box */}
                  <OfficeMap />
                </div>

                <div className="mt-8 relative z-10 flex flex-col sm:flex-row gap-3">
                  <a href="https://maps.app.goo.gl/xtMwE6q63Pr5Sjdk7?g_st=aw" target="_blank" rel="noreferrer" className="flex-1 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs sm:text-sm transition-colors shadow-lg flex items-center justify-center gap-2 group cursor-pointer">
                    <ExternalLink className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    <span>View Location Map</span>
                  </a>
                  <a href="tel:8925741347" className="flex-1 py-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-black text-xs sm:text-sm transition-colors shadow-lg shadow-orange-600/25 flex items-center justify-center gap-2 cursor-pointer">
                    <Phone className="w-4 h-4" />
                    <span>Call Admissions</span>
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <div className="mb-8">
                  <span className="text-xs font-black uppercase tracking-widest text-orange-600">Support</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">Frequently Asked Questions</h3>
                </div>
                {FAQS.map((faq, idx) => (
                  <div key={idx} className="glass-panel rounded-2xl overflow-hidden transition-all border border-slate-200/70 bg-white/80">
                    <button onClick={() => setActiveFaq(activeFaq === idx ? null : idx)} className="w-full p-5 sm:p-6 text-left flex justify-between items-center hover:bg-white/90 transition-colors">
                      <span className="font-bold text-sm sm:text-base text-slate-800 pr-4 leading-snug">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 shrink-0 text-orange-600 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`transition-all duration-300 ease-in-out bg-white/50 ${activeFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                      <div className="p-5 sm:p-6 pt-0 text-sm text-slate-600 font-medium leading-relaxed border-t border-slate-100 mt-2">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* REFINED MODERN FOOTER */}
      <footer id="contact" className="relative bg-white/90 backdrop-blur-2xl pt-16 sm:pt-24 pb-8 border-t border-slate-200/80 overflow-hidden scroll-mt-8">
        <div className="absolute top-0 left-1/4 w-[50vw] h-0.5 bg-linear-to-r from-transparent via-orange-400/40 to-transparent" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
            
            <div className="lg:col-span-4 flex flex-col items-start max-w-xl">
              <div className="inline-flex items-center gap-3 mb-6 bg-white px-3.5 py-2.5 rounded-2xl shadow-sm border border-slate-200/80 w-fit">
                <img 
                  src="/logo.png" 
                  alt="Sri Muruga Driving School Logo" 
                  className="w-11 h-11 object-contain shrink-0 drop-shadow-xs" 
                />
                <div className="flex flex-col justify-center">
                  <h4 className="font-black text-sm sm:text-base text-slate-900 tracking-tight leading-none uppercase">
                    SRI MURUGA
                  </h4>
                  <span className="text-[10px] font-black tracking-widest uppercase text-orange-600 mt-1 block leading-none">
                    Driving School
                  </span>
                </div>
              </div>
              <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6">
                Coimbatore's premier 1-on-1 driving academy since 2023. Dedicated individual training, certified RTO curriculum, practical trial ground runs, and seamless smart card licence assistance.
              </p>
              <div className="flex items-center gap-3">
                 <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-50 text-emerald-600">
                   <ShieldCheck className="w-4 h-4" />
                 </span>
                 <span className="text-xs font-black text-slate-700 uppercase tracking-wide">Govt. Registered</span>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-5 lg:gap-6">
              
              {/* 1. OFFICIAL LINKS */}
              <div className="flex flex-col">
                <h5 className="text-[13px] font-black text-slate-400 uppercase tracking-widest mb-6 block">Official Links</h5>
                <nav className="space-y-4">
                  {[
                    { label: 'Packages & Courses', href: '#tariff' },
                    { label: 'Route Timetable', href: '#syllabus' },
                    { label: 'RTO License Process', href: '#process' },
                    { label: 'Document Checklist', href: '#documents' },
                    { label: 'Location & FAQ', href: '#location' }
                  ].map((link, idx) => (
                    <a key={idx} href={link.href} className="group flex items-center text-sm font-bold text-slate-600 hover:text-orange-600 transition-colors">
                      <span className="w-0 overflow-hidden group-hover:w-5 group-hover:pr-2 transition-all duration-300 ease-out text-orange-600">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                      <span>{link.label}</span>
                    </a>
                  ))}
                </nav>
              </div>

              {/* 2. CONTACT ADMISSIONS (BESIDE OFFICIAL LINKS) */}
              <div className="flex flex-col">
                <h5 className="text-[13px] font-black text-slate-400 uppercase tracking-widest mb-6 block">Contact Admissions</h5>
                <div className="space-y-3">
                   <a href="tel:+918925741347" className="flex items-center gap-3 text-sm font-bold text-slate-700 hover:text-orange-600 transition-colors group">
                     <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-orange-100 flex items-center justify-center transition-colors shrink-0">
                        <Phone className="w-3.5 h-3.5 text-slate-700 group-hover:text-orange-600" />
                     </div>
                     <span className="font-mono text-xs sm:text-sm">+91 89257 41347</span>
                   </a>
                   <a href="tel:+917339248247" className="flex items-center gap-3 text-sm font-bold text-slate-700 hover:text-orange-600 transition-colors group">
                     <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-orange-100 flex items-center justify-center transition-colors shrink-0">
                        <Phone className="w-3.5 h-3.5 text-slate-700 group-hover:text-orange-600" />
                     </div>
                     <span className="font-mono text-xs sm:text-sm">+91 73392 48247</span>
                   </a>
                   <a href="tel:+917305541347" className="flex items-center gap-3 text-sm font-bold text-slate-700 hover:text-orange-600 transition-colors group">
                     <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-orange-100 flex items-center justify-center transition-colors shrink-0">
                        <Phone className="w-3.5 h-3.5 text-slate-700 group-hover:text-orange-600" />
                     </div>
                     <span className="font-mono text-xs sm:text-sm">+91 73055 41347</span>
                   </a>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">
                    Office Hours
                  </span>
                  <p className="text-xs font-bold text-slate-800">09:00 AM – 07:00 PM</p>
                  <p className="text-[10px] text-slate-500 font-medium">Monday to Saturday</p>
                </div>
              </div>

              {/* 3. OFFICE & RTO LOCATIONS (BESIDE CONTACT ADMISSIONS) */}
              <div className="flex flex-col">
                <h5 className="text-[13px] font-black text-slate-400 uppercase tracking-widest mb-6 block">Office &amp; RTO Locations</h5>
                <div className="space-y-3">
                  {/* Main Office (Neelambur) */}
                  <a 
                    href="https://maps.app.goo.gl/xtMwE6q63Pr5Sjdk7?g_st=aw" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="group flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-orange-50/80 border border-slate-200/70 hover:border-orange-200 transition-all cursor-pointer shadow-2xs hover:shadow-xs"
                    title="View Neelambur Office on Google Maps"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="w-7 h-7 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                        <MapPin className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs font-bold text-slate-900 group-hover:text-orange-700 truncate">Main Office</span>
                        <span className="text-[10px] text-slate-500 truncate">Neelambur, Avinashi Rd</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-black text-orange-600 bg-white px-2 py-0.5 rounded-md border border-orange-200 shadow-2xs shrink-0 flex items-center gap-1 group-hover:bg-orange-600 group-hover:text-white transition-colors ml-1.5">
                      <span>Maps</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </span>
                  </a>

                  {/* RTO Office Location */}
                  <a 
                    href="https://maps.app.goo.gl/d6wwdwXK3TfaqzFB9" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="group flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-orange-50/80 border border-slate-200/70 hover:border-orange-200 transition-all cursor-pointer shadow-2xs hover:shadow-xs"
                    title="View RTO Office on Google Maps"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="w-7 h-7 rounded-lg bg-slate-200/70 text-slate-700 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                        <MapPin className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs font-bold text-slate-900 group-hover:text-orange-700 truncate">RTO Unit Office</span>
                        <span className="text-[10px] text-slate-500 truncate">Sulur (TN 37 / RTO 38)</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-black text-orange-600 bg-white px-2 py-0.5 rounded-md border border-orange-200 shadow-2xs shrink-0 flex items-center gap-1 group-hover:bg-orange-600 group-hover:text-white transition-colors ml-1.5">
                      <span>Maps</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </span>
                  </a>

                  {/* RTO Test Ground Location */}
                  <a 
                    href="https://maps.app.goo.gl/YXELB8ddTwxH6Reo9" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="group flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-orange-50/80 border border-slate-200/70 hover:border-orange-200 transition-all cursor-pointer shadow-2xs hover:shadow-xs"
                    title="View RTO Test Ground on Google Maps"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="w-7 h-7 rounded-lg bg-slate-200/70 text-slate-700 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                        <MapPin className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs font-bold text-slate-900 group-hover:text-orange-700 truncate">RTO Test Ground</span>
                        <span className="text-[10px] text-slate-500 truncate">Practical Test Ground</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-black text-orange-600 bg-white px-2 py-0.5 rounded-md border border-orange-200 shadow-2xs shrink-0 flex items-center gap-1 group-hover:bg-orange-600 group-hover:text-white transition-colors ml-1.5">
                      <span>Maps</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          <div className="pt-8 border-t border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="order-2 md:order-1 flex flex-col sm:flex-row items-center md:items-start gap-1 sm:gap-3 text-center md:text-left text-xs text-slate-500 font-medium">
              <p>
                &copy; 2026 Sri Muruga Driving School. All rights reserved.
              </p>
              <span className="hidden sm:inline text-slate-400">•</span>
              <p>
                Designed &amp; Developed by jayasolomon-dev
              </p>
            </div>
            
            <a href="https://maps.app.goo.gl/xtMwE6q63Pr5Sjdk7?g_st=aw" target="_blank" rel="noreferrer" className="order-1 md:order-2 flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-orange-200 transition-all group cursor-pointer">
               <MapPin className="w-3.5 h-3.5 text-orange-600 group-hover:-translate-y-1 transition-transform duration-300 ease-bounce" />
               <span className="text-[11px] font-black text-slate-700 group-hover:text-orange-700 transition-colors">Verified RTO Sulur UO TN37Z</span>
            </a>
          </div>
        </div>
      </footer>

      {/* BOOKING MODAL */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-3 xs:p-4 sm:p-6 backdrop-blur-md bg-slate-900/60">
          <div className="w-full max-w-lg bg-white rounded-3xl sm:rounded-4xl shadow-2xl overflow-hidden flex flex-col max-h-[90dvh] relative border border-slate-100">
            <div className="shrink-0 p-4 xs:p-5 sm:p-6 bg-[#FAFAFC] border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="text-base sm:text-xl font-black text-slate-900">Reserve Your Slot</h3>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5 sm:mt-1">Individual 40-Min Classes (6 AM – 6 PM)</p>
              </div>
              <button onClick={() => setIsBookingOpen(false)} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 transition-colors cursor-pointer shrink-0">
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 xs:p-5 sm:p-6">
              {bookingSuccess ? (
                <div className="text-center py-10">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-2">Request Sent!</h4>
                  <p className="text-sm text-slate-600 font-medium">Our team will contact you shortly to confirm your joining date and document submission.</p>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-5">
                  <div>
                    <label className="block text-[11px] font-black uppercase text-slate-500 mb-2 pl-1 tracking-wider">Trainee Name</label>
                    <input type="text" required value={bookingForm.name} onChange={e => setBookingForm({ ...bookingForm, name: e.target.value })} className="w-full px-4 py-3.5 rounded-xl bg-[#FAFAFC] border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-base sm:text-sm font-bold text-slate-900 transition-all placeholder:text-slate-400 placeholder:font-medium" placeholder="Enter full name" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-black uppercase text-slate-500 mb-2 pl-1 tracking-wider">WhatsApp Number</label>
                    <input type="tel" required value={bookingForm.phone} onChange={e => setBookingForm({ ...bookingForm, phone: e.target.value })} className="w-full px-4 py-3.5 rounded-xl bg-[#FAFAFC] border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-base sm:text-sm font-bold text-slate-900 transition-all placeholder:text-slate-400 placeholder:font-medium" placeholder="10-digit mobile number" />
                  </div>
                  {/* Smooth Glassmorphic Course Selector */}
                  <div 
                    className="relative" 
                    ref={courseDropdownRef}
                  >
                    <label className="block text-[11px] font-black uppercase text-slate-500 mb-2 pl-1 tracking-wider">Select Course</label>
                    <button
                      type="button"
                      aria-haspopup="listbox"
                      aria-expanded={isCourseDropdownOpen}
                      onClick={() => {
                        setIsCourseDropdownOpen(prev => !prev);
                        setIsTimeDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#FAFAFC] hover:bg-white border text-left flex items-center justify-between gap-2.5 transition-all cursor-pointer ${
                        isCourseDropdownOpen 
                          ? 'border-orange-500 ring-2 ring-orange-200 bg-white shadow-sm' 
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-sm font-bold text-slate-900 truncate">
                          {getSelectedCourse().label}
                        </span>
                        {getSelectedCourse().badge && (
                          <span className="hidden sm:inline-flex text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-orange-100/90 text-orange-700 shrink-0">
                            {getSelectedCourse().badge}
                          </span>
                        )}
                      </div>
                      <ChevronDown className={`w-4 h-4 text-orange-600 shrink-0 transition-transform duration-300 ease-out ${isCourseDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Smooth Dropdown Menu */}
                    <AnimatePresence>
                      {isCourseDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -8, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute top-full left-0 right-0 mt-2 z-50 bg-white/98 backdrop-blur-2xl border border-slate-200/90 rounded-2xl shadow-[0_20px_45px_-10px_rgba(15,23,42,0.25)] p-2 max-h-72 overflow-y-auto"
                        >
                          {BOOKING_COURSE_GROUPS.map((grp, gIdx) => (
                            <div key={grp.group} className={gIdx > 0 ? "mt-2 pt-2 border-t border-slate-100" : ""}>
                              <div className="px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500/60" />
                                <span>{grp.group}</span>
                              </div>
                              <div className="space-y-1">
                                {grp.options.map(opt => {
                                  const isSelected = getSelectedCourse().value === opt.value;
                                  return (
                                    <button
                                      key={opt.value}
                                      type="button"
                                      onClick={() => {
                                        setBookingForm(prev => ({ ...prev, service: opt.value }));
                                        setIsCourseDropdownOpen(false);
                                      }}
                                      className={`w-full px-3 py-2.5 rounded-xl text-left flex items-center justify-between gap-2 transition-all cursor-pointer ${
                                        isSelected
                                          ? 'bg-linear-to-r from-orange-600 to-amber-500 text-white font-black shadow-md shadow-orange-600/20'
                                          : 'text-slate-800 hover:bg-orange-50 hover:text-orange-700 font-bold'
                                      }`}
                                    >
                                      <div className="flex items-center gap-2 min-w-0">
                                        <span className="text-xs sm:text-sm truncate">
                                          {opt.label}
                                        </span>
                                      </div>
                                      <div className="flex items-center gap-1.5 shrink-0">
                                        {opt.badge && (
                                          <span className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-md ${
                                            isSelected
                                              ? 'bg-white/20 text-white'
                                              : 'bg-slate-100 text-slate-500'
                                          }`}>
                                            {opt.badge}
                                          </span>
                                        )}
                                        {isSelected && (
                                          <Check className="w-4 h-4 text-white stroke-[2.5]" />
                                        )}
                                      </div>
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                    {/* Smooth Glassmorphic Class Slot Selector */}
                    <div 
                      className="relative" 
                      ref={timeDropdownRef}
                    >
                      <label className="block text-[11px] font-black uppercase text-slate-500 mb-2 pl-1 tracking-wider">Preferred Class Slot</label>
                      <button
                        type="button"
                        aria-haspopup="listbox"
                        aria-expanded={isTimeDropdownOpen}
                        onClick={() => {
                          setIsTimeDropdownOpen(prev => !prev);
                          setIsCourseDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-3.5 rounded-xl bg-[#FAFAFC] hover:bg-white border text-left flex items-center justify-between gap-2 transition-all cursor-pointer ${
                          isTimeDropdownOpen 
                            ? 'border-orange-500 ring-2 ring-orange-200 bg-white shadow-sm' 
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex flex-col min-w-0">
                          <span className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                            {getSelectedTimeSlot().label}
                          </span>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-orange-600 shrink-0 transition-transform duration-300 ease-out ${isTimeDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Smooth Dropdown Menu */}
                      <AnimatePresence>
                        {isTimeDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.98 }}
                            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute top-full left-0 right-0 mt-2 z-50 bg-white/98 backdrop-blur-2xl border border-slate-200/90 rounded-2xl shadow-[0_20px_45px_-10px_rgba(15,23,42,0.25)] p-1.5 space-y-1"
                          >
                            {BOOKING_TIME_SLOTS.map(opt => {
                              const isSelected = bookingForm.preferredTime === opt.value;
                              return (
                                <button
                                  key={opt.value}
                                  type="button"
                                  onClick={() => {
                                    setBookingForm(prev => ({ ...prev, preferredTime: opt.value }));
                                    setIsTimeDropdownOpen(false);
                                  }}
                                  className={`w-full px-3 py-2 rounded-xl text-left flex items-center justify-between gap-2 transition-all cursor-pointer ${
                                    isSelected
                                      ? 'bg-linear-to-r from-orange-600 to-amber-500 text-white font-black shadow-xs'
                                      : 'text-slate-800 hover:bg-orange-50 hover:text-orange-700 font-bold'
                                  }`}
                                >
                                  <div className="flex flex-col min-w-0">
                                    <span className="text-xs sm:text-sm truncate leading-snug">{opt.label}</span>
                                    <span className={`text-[9px] uppercase tracking-wider ${isSelected ? 'text-orange-100 font-bold' : 'text-slate-400 font-medium'}`}>
                                      {opt.badge}
                                    </span>
                                  </div>
                                  {isSelected && <Check className="w-4 h-4 text-white stroke-[2.5] shrink-0" />}
                                </button>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div>
                      <label className="block text-[11px] font-black uppercase text-slate-500 mb-2 pl-1 tracking-wider">Location / PIN</label>
                      <input type="text" value={bookingForm.location} onChange={e => setBookingForm({ ...bookingForm, location: e.target.value })} className="w-full px-4 py-3.5 rounded-xl bg-[#FAFAFC] border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none text-base sm:text-sm font-bold text-slate-900 transition-all placeholder:text-slate-400 placeholder:font-medium" placeholder="Neelambur" />
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <button type="submit" className="w-full py-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-black text-sm uppercase tracking-wider transition-all shadow-lg shadow-orange-600/25 flex items-center justify-center gap-2 active:scale-[0.98]">
                      <span>Submit Enquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* FLOATING CIRCULAR SIDE MENU BUTTON (ACCESSIBLE ONLY AFTER SCROLLING PAST LANDING PAGE) */}
      <AnimatePresence>
        {isPastLanding && (
          <motion.button
            key="floating-side-menu-trigger"
            initial={{ opacity: 0, scale: 0.6, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: -20 }}
            transition={{ type: 'spring', damping: 22, stiffness: 320 }}
            onClick={() => setIsMenuOpen(true)}
            className="fixed top-3 right-3 xs:top-4 xs:right-4 sm:top-5 sm:right-6 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-white text-slate-800 hover:text-orange-600 shadow-[0_8px_30px_rgba(0,0,0,0.12),0_2px_10px_rgba(249,115,22,0.12)] border border-slate-200/90 hover:border-orange-400/80 backdrop-blur-2xl flex items-center justify-center group cursor-pointer active:scale-95 transition-all"
            aria-label="Open Side Menu"
            title="Open Side Menu"
          >
            <div className="flex flex-col gap-1 w-4 justify-center items-center">
              <span className="h-0.5 w-full bg-slate-800 rounded-full transition-all group-hover:bg-orange-600" />
              <span className="h-0.5 w-2.5 bg-orange-500 rounded-full transition-all group-hover:w-full group-hover:bg-orange-600" />
              <span className="h-0.5 w-full bg-slate-800 rounded-full transition-all group-hover:bg-orange-600" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* RIGHT SIDE FLOATING ACTION STACK (VELAN VIRTUAL ASSISTANT + DIRECT WHATSAPP) */}
      <aside aria-label="Quick contact and guidance" className="fixed bottom-4 sm:bottom-6 right-3.5 sm:right-6 z-45 flex flex-col items-end gap-2.5 sm:gap-3 pointer-events-auto">
        {/* 1. VELAN VIRTUAL ASSISTANT CIRCULAR BUTTON */}
        <button
          onClick={() => setIsAiAssistantOpen(prev => !prev)}
          className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0d1527] hover:bg-[#1a253c] text-white shadow-2xl shadow-slate-900/50 border-2 border-amber-400/70 flex items-center justify-center hover:scale-108 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden p-0.5"
          title="Open Velan Virtual Assistant"
          aria-label="Open Velan Virtual Assistant"
        >
          <img 
            src="/velan_face.png" 
            alt="Velan Virtual Assistant" 
            className="w-full h-full object-cover rounded-full filter drop-shadow-sm group-hover:scale-110 transition-transform" 
          />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400 ring-2 ring-[#0d1527]" />
          </span>
        </button>

        {/* 2. DIRECT WHATSAPP CIRCULAR BUTTON */}
        <a
          href="https://wa.me/918925741347?text=Hello%20Sri%20Muruga%20Driving%20School%2C%20I%20would%20like%20to%20enquire%20about%20driving%20classes%20and%20licensing."
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl shadow-emerald-950/40 border border-emerald-300/40 flex items-center justify-center hover:scale-108 active:scale-95 transition-all duration-300 cursor-pointer"
          title="Direct Chat on WhatsApp (+91 89257 41347)"
          aria-label="Direct Chat on WhatsApp"
        >
          <svg className="w-7 h-7 sm:w-8.5 sm:h-8.5 fill-white group-hover:scale-110 transition-transform drop-shadow-xs" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.275-.1-.475-.15-.675.15-.2.3-.775.98-.95 1.18-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.414-1.489-.892-.796-1.494-1.78-1.669-2.08-.175-.3-.019-.462.131-.611.136-.134.301-.35.451-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.584-.492-.505-.675-.514l-.575-.01c-.2 0-.525.075-.8.375s-1.05 1.025-1.05 2.5 1.075 2.9 1.225 3.1c.15.2 2.116 3.231 5.126 4.53.716.31 1.275.494 1.711.632.72.228 1.375.196 1.893.119.577-.086 1.78-.727 2.03-1.428.25-.701.25-1.302.175-1.428-.075-.125-.275-.2-.575-.35zM12.04 2C6.52 2 2.03 6.49 2.03 12.01c0 1.93.55 3.73 1.5 5.27L2 22.5l5.37-1.41c1.47.8 3.14 1.26 4.67 1.26 5.52 0 10.01-4.49 10.01-10.01S17.56 2 12.04 2zm0 18.29c-1.57 0-3.1-.42-4.43-1.21l-.32-.19-3.29.86.88-3.21-.21-.33a8.23 8.23 0 0 1-1.27-4.4c0-4.57 3.72-8.29 8.29-8.29 4.57 0 8.29 3.72 8.29 8.29 0 4.58-3.72 8.28-8.29 8.28z"/>
          </svg>
        </a>
      </aside>

      {/* VELAN VIRTUAL ASSISTANT CHAT MODAL */}
      {isAiAssistantOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-end p-2 sm:p-6 pointer-events-none animate-in fade-in duration-200">
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs pointer-events-auto sm:hidden" onClick={() => setIsAiAssistantOpen(false)} />
          <div className="relative w-full sm:w-95 h-[75dvh] sm:h-130 max-h-[85vh] flex flex-col rounded-3xl bg-white border border-slate-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.25)] z-50 overflow-hidden pointer-events-auto sm:mb-20">
            
            {/* Modal Header */}
            <div className="p-3.5 sm:p-4 bg-[#0d1527] text-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-linear-to-tr from-amber-400 via-orange-500 to-amber-300 p-0.5 flex items-center justify-center shrink-0 shadow-md">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white/20 flex items-center justify-center">
                    <img 
                      src="/velan_face.png" 
                      alt="Velan Virtual Assistant" 
                      className="w-full h-full object-cover filter drop-shadow-xs" 
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-extrabold text-[15px] text-white tracking-tight leading-tight">Velan - Virtual Assistant</h4>
                  <p className="text-[11px] text-slate-300 font-medium leading-tight">Online &amp; Ready to help</p>
                </div>
              </div>
              <button 
                onClick={() => setIsAiAssistantOpen(false)} 
                className="w-8 h-8 rounded-full text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Velan Virtual Assistant"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick FAQ Tap Chips */}
            <div className="px-3 py-2 bg-slate-100 border-b border-slate-200/60 flex items-center gap-1.5 overflow-x-auto scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden shrink-0">
              {AI_FAQ_CHIPS.map(chip => (
                <button
                  key={chip.id}
                  onClick={() => handleSendAiQuery(chip.prompt)}
                  className="px-2.5 py-1 rounded-full bg-white hover:bg-orange-50 hover:text-orange-600 border border-slate-200/80 text-[11px] font-bold text-slate-700 whitespace-nowrap shadow-2xs transition-all active:scale-95 cursor-pointer"
                >
                  {chip.label}
                </button>
              ))}
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#F1F5F9]">
              {aiMessages.map(msg => (
                <div 
                  key={msg.id} 
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div 
                    className={`max-w-[85%] p-3.5 text-xs sm:text-[13px] leading-relaxed shadow-xs ${
                      msg.sender === 'user' 
                        ? 'bg-[#E25C08] text-white rounded-2xl rounded-tr-xs font-medium' 
                        : 'bg-white text-slate-800 rounded-2xl rounded-tl-xs border border-slate-200/60'
                    }`}
                  >
                    <div>
                      {renderChatMessageText(msg.text)}
                    </div>

                    {msg.sender === 'ai' && msg.id !== 'welcome' && (
                      <div className="mt-2.5 pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
                        <a 
                          href="https://wa.me/918925741347?text=Hello%20Sri%20Muruga%20Driving%20School%2C%20I%20have%20a%20question%20about%20driving%20classes."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-[10.5px] font-bold border border-emerald-200 transition-colors"
                        >
                          <MessageCircle className="w-3 h-3 text-emerald-600" />
                          <span>WhatsApp</span>
                        </a>
                        <a 
                          href="tel:8925741347"
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[10.5px] font-bold transition-colors"
                        >
                          <Phone className="w-3 h-3 text-slate-600" />
                          <span>Call 89257 41347</span>
                        </a>
                      </div>
                    )}
                  </div>
                  <span className="text-[9px] font-bold text-slate-400 mt-1 px-1">{msg.time}</span>
                </div>
              ))}
              <div ref={aiChatEndRef} />
            </div>

            {/* Input Footer */}
            <form 
              onSubmit={handleAiSubmit} 
              className="p-3 bg-white border-t border-slate-100 flex items-center gap-2 shrink-0"
            >
              <input
                type="text"
                value={aiInputText}
                onChange={e => setAiInputText(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2.5 rounded-full bg-[#F1F5F9] border-none text-xs sm:text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all"
              />
              <button
                type="submit"
                disabled={!aiInputText.trim()}
                className="w-11 h-11 rounded-full bg-[#E25C08] hover:bg-orange-600 disabled:opacity-40 text-white flex items-center justify-center shadow-md shadow-orange-600/30 transition-all shrink-0 cursor-pointer active:scale-95"
                aria-label="Send message"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </form>

          </div>
        </div>
      )}
    </div>
  );
}