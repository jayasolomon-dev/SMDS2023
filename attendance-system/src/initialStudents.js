/**
 * Real Trainees Data - Parsed from Sri Muruga Driving School (SMDS) 2026 Accounts Ledger
 * Total Students: 363 across January to October 2026
 * Format: Fresh enrollment number starting from 1 for each month (S.NO/MonthNumeric)
 * Class Types mapped according to SMDS accounts rules:
 * 1. 2 wh license - 2500 (single) -> item_1
 * 2. 4 wh license - 3000 (single) -> item_2
 * 3. 2 & 4 wh license - 4500 (double) -> item_3
 * 4. 2 & 4 wh license with traning - ~8000 (double) -> item_8
 * 5. 4 wh license with training - ~8000 (single) -> item_8_single
 * 6. 21 days training - 6000 (training only) -> item_12
 * 7. 10 days traning - 4000 (training only) -> item_13
 */

export const INITIAL_STUDENTS = [
  {
    "id": "ST-001",
    "enrollmentNo": "1/1",
    "username": "SMDS1/1",
    "password": "smds@1/1",
    "name": "Raja",
    "initials": "R",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_2",
    "time": "06:00 AM",
    "status": "present",
    "phone": "9944207673",
    "enrollmentDate": "2026-01-08",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 3000,
      "paid": 3000,
      "history": [
        {
          "id": "p_ST-001_1",
          "amount": 3000,
          "method": "UPI",
          "date": "2026-01-08",
          "note": "Advance Fee (UPI 05/01/26 06/01/26 21/02/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-01-08",
        "formattedDate": "2026-01-08",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-002",
    "enrollmentNo": "2/1",
    "username": "SMDS2/1",
    "password": "smds@2/1",
    "name": "Sampathkumar",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_12",
    "time": "07:00 AM",
    "status": "present",
    "phone": "8870258739",
    "enrollmentDate": "2026-01-02",
    "avatarColor": "bg-blue-600",
    "remark": "TRAINNING ONLY",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 6000,
      "paid": 6000,
      "history": [
        {
          "id": "p_ST-002_1",
          "amount": 6000,
          "method": "Cash",
          "date": "2026-01-02",
          "note": "Advance Fee (CASH 05/01,03/02)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-01-02",
        "formattedDate": "2026-01-02",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-003",
    "enrollmentNo": "3/1",
    "username": "SMDS3/1",
    "password": "smds@3/1",
    "name": "Manojkumar",
    "initials": "M",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "08:00 AM",
    "status": "present",
    "phone": "8946062030",
    "enrollmentDate": "2026-01-27",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-003_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-01-27",
          "note": "Advance Fee (UPI 05/01/26 06/01/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-01-27",
        "formattedDate": "2026-01-27",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-004",
    "enrollmentNo": "4/1",
    "username": "SMDS4/1",
    "password": "smds@4/1",
    "name": "Magalingam",
    "initials": "M",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_2",
    "time": "09:00 AM",
    "status": "present",
    "phone": "9342056507",
    "enrollmentDate": "2026-01-09",
    "avatarColor": "bg-purple-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 3000,
      "paid": 3000,
      "history": [
        {
          "id": "p_ST-004_1",
          "amount": 3000,
          "method": "UPI",
          "date": "2026-01-09",
          "note": "Advance Fee (UPI/09/02/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-01-09",
        "formattedDate": "2026-01-09",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-005",
    "enrollmentNo": "5/1",
    "username": "SMDS5/1",
    "password": "smds@5/1",
    "name": "Velmurugan",
    "initials": "V",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_13",
    "time": "10:00 AM",
    "status": "present",
    "phone": "9042527482",
    "enrollmentDate": "2026-01-05",
    "avatarColor": "bg-amber-600",
    "remark": "TRAINNING ONLY",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 4000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-005_1",
          "amount": 4000,
          "method": "UPI",
          "date": "2026-01-05",
          "note": "Advance Fee (UPI 06/01/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-01-05",
        "formattedDate": "2026-01-05",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-006",
    "enrollmentNo": "6/1",
    "username": "SMDS6/1",
    "password": "smds@6/1",
    "name": "Tarun T R",
    "initials": "TT",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "04:00 PM",
    "status": "present",
    "phone": "9360285874",
    "enrollmentDate": "2026-01-09",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-006_1",
          "amount": 8000,
          "method": "Cash",
          "date": "2026-01-09",
          "note": "Advance Fee (CASH 08/01)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-01-09",
        "formattedDate": "2026-01-09",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-007",
    "enrollmentNo": "7/1",
    "username": "SMDS7/1",
    "password": "smds@7/1",
    "name": "Ajithkumar",
    "initials": "A",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_2",
    "time": "05:00 PM",
    "status": "present",
    "phone": "7010916429",
    "enrollmentDate": "2026-01-08",
    "avatarColor": "bg-teal-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 3000,
      "paid": 3000,
      "history": [
        {
          "id": "p_ST-007_1",
          "amount": 3000,
          "method": "UPI",
          "date": "2026-01-08",
          "note": "Advance Fee (UPI 08/01/26 21/02/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-01-08",
        "formattedDate": "2026-01-08",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-008",
    "enrollmentNo": "8/1",
    "username": "SMDS8/1",
    "password": "smds@8/1",
    "name": "Anishkumar (postal)",
    "initials": "A(",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "06:00 PM",
    "status": "present",
    "phone": "8760941700",
    "enrollmentDate": "2026-01-12",
    "avatarColor": "bg-indigo-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 0,
      "paid": 0,
      "history": []
    },
    "attendanceLog": [
      {
        "date": "2026-01-12",
        "formattedDate": "2026-01-12",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-009",
    "enrollmentNo": "9/1",
    "username": "SMDS9/1",
    "password": "smds@9/1",
    "name": "Aishwarya",
    "initials": "A",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "06:00 AM",
    "status": "present",
    "phone": "8489117230",
    "enrollmentDate": "2026-01-21",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-009_1",
          "amount": 2500,
          "method": "UPI",
          "date": "2026-01-21",
          "note": "Advance Fee (UPI 10/01/26 28/02/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-01-21",
        "formattedDate": "2026-01-21",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-010",
    "enrollmentNo": "10/1",
    "username": "SMDS10/1",
    "password": "smds@10/1",
    "name": "Thirumoorthy",
    "initials": "T",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "07:00 AM",
    "status": "present",
    "phone": "8098910604",
    "enrollmentDate": "2026-01-11",
    "avatarColor": "bg-blue-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-010_1",
          "amount": 2500,
          "method": "UPI",
          "date": "2026-01-11",
          "note": "Advance Fee (UPI 11/1/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-01-11",
        "formattedDate": "2026-01-11",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-011",
    "enrollmentNo": "11/1",
    "username": "SMDS11/1",
    "password": "smds@11/1",
    "name": "Mariyappan",
    "initials": "M",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "08:00 AM",
    "status": "present",
    "phone": "6382477378",
    "enrollmentDate": "2026-01-12",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-011_1",
          "amount": 2500,
          "method": "Cash",
          "date": "2026-01-12",
          "note": "Advance Fee (CASH)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-01-12",
        "formattedDate": "2026-01-12",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-012",
    "enrollmentNo": "12/1",
    "username": "SMDS12/1",
    "password": "smds@12/1",
    "name": "Dharun",
    "initials": "D",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "09:00 AM",
    "status": "present",
    "phone": "6385256685",
    "enrollmentDate": "2026-01-27",
    "avatarColor": "bg-purple-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-012_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-01-27",
          "note": "Advance Fee (CASH 13/01/26 UPI 02/03/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-01-27",
        "formattedDate": "2026-01-27",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-013",
    "enrollmentNo": "13/1",
    "username": "SMDS13/1",
    "password": "smds@13/1",
    "name": "Gowtham",
    "initials": "G",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_12",
    "time": "10:00 AM",
    "status": "present",
    "phone": "8608425995",
    "enrollmentDate": "2026-01-13",
    "avatarColor": "bg-amber-600",
    "remark": "TRAINNING ONLY",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 6000,
      "paid": 6000,
      "history": [
        {
          "id": "p_ST-013_1",
          "amount": 6000,
          "method": "UPI",
          "date": "2026-01-13",
          "note": "Advance Fee (UPI 13-01-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-01-13",
        "formattedDate": "2026-01-13",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-014",
    "enrollmentNo": "14/1",
    "username": "SMDS14/1",
    "password": "smds@14/1",
    "name": "Dhivya",
    "initials": "D",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "04:00 PM",
    "status": "present",
    "phone": "9566493655",
    "enrollmentDate": "2026-01-27",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-014_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-01-27",
          "note": "Advance Fee (UPI 18/01/26   11/04/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-01-27",
        "formattedDate": "2026-01-27",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-015",
    "enrollmentNo": "15/1",
    "username": "SMDS15/1",
    "password": "smds@15/1",
    "name": "Hari Krishna",
    "initials": "HK",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "05:00 PM",
    "status": "present",
    "phone": "9025131339",
    "enrollmentDate": "2026-01-20",
    "avatarColor": "bg-teal-600",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4500,
      "paid": 4500,
      "history": [
        {
          "id": "p_ST-015_1",
          "amount": 4500,
          "method": "Cash",
          "date": "2026-01-20",
          "note": "Advance Fee (CASH 18/01/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-01-20",
        "formattedDate": "2026-01-20",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-016",
    "enrollmentNo": "16/1",
    "username": "SMDS16/1",
    "password": "smds@16/1",
    "name": "Pasupathi",
    "initials": "P",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "06:00 PM",
    "status": "present",
    "phone": "9688933678",
    "enrollmentDate": "2026-01-19",
    "avatarColor": "bg-indigo-600",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4500,
      "paid": 4500,
      "history": [
        {
          "id": "p_ST-016_1",
          "amount": 4500,
          "method": "UPI",
          "date": "2026-01-19",
          "note": "Advance Fee (UPI 09/03/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-01-19",
        "formattedDate": "2026-01-19",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-017",
    "enrollmentNo": "17/1",
    "username": "SMDS17/1",
    "password": "smds@17/1",
    "name": "Umamaheshwari",
    "initials": "U",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "06:00 AM",
    "status": "present",
    "phone": "9578399427",
    "enrollmentDate": "2026-01-22",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-017_1",
          "amount": 4000,
          "method": "Cash",
          "date": "2026-01-22",
          "note": "Advance Fee (C+U 13/01/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-01-22",
        "formattedDate": "2026-01-22",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-018",
    "enrollmentNo": "18/1",
    "username": "SMDS18/1",
    "password": "smds@18/1",
    "name": "Ashmitha N S",
    "initials": "AN",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "07:00 AM",
    "status": "present",
    "phone": "9688546444",
    "enrollmentDate": "2026-01-20",
    "avatarColor": "bg-blue-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8900,
      "paid": 8900,
      "history": [
        {
          "id": "p_ST-018_1",
          "amount": 8900,
          "method": "Cash",
          "date": "2026-01-20",
          "note": "Advance Fee (19/01/2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-01-20",
        "formattedDate": "2026-01-20",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-019",
    "enrollmentNo": "19/1",
    "username": "SMDS19/1",
    "password": "smds@19/1",
    "name": "Akash",
    "initials": "A",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "08:00 AM",
    "status": "present",
    "phone": "6380991931",
    "enrollmentDate": "2026-01-21",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 7000,
      "paid": 7000,
      "history": [
        {
          "id": "p_ST-019_1",
          "amount": 7000,
          "method": "UPI",
          "date": "2026-01-21",
          "note": "Advance Fee (UPI CASH)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-01-21",
        "formattedDate": "2026-01-21",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-020",
    "enrollmentNo": "20/1",
    "username": "SMDS20/1",
    "password": "smds@20/1",
    "name": "Praveen",
    "initials": "P",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_13",
    "time": "09:00 AM",
    "status": "present",
    "phone": "9500470204",
    "enrollmentDate": "2026-01-20",
    "avatarColor": "bg-purple-600",
    "remark": "TRAINNING ONLY",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 4000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-020_1",
          "amount": 4000,
          "method": "UPI",
          "date": "2026-01-20",
          "note": "Advance Fee (UPI 09/02/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-01-20",
        "formattedDate": "2026-01-20",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-021",
    "enrollmentNo": "21/1",
    "username": "SMDS21/1",
    "password": "smds@21/1",
    "name": "Uma",
    "initials": "U",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8_single",
    "time": "10:00 AM",
    "status": "present",
    "phone": "9842256282",
    "enrollmentDate": "2026-01-23",
    "avatarColor": "bg-amber-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-021_1",
          "amount": 8000,
          "method": "Cash",
          "date": "2026-01-23",
          "note": "Advance Fee (CASH 21/01/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-01-23",
        "formattedDate": "2026-01-23",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-022",
    "enrollmentNo": "22/1",
    "username": "SMDS22/1",
    "password": "smds@22/1",
    "name": "Arun( Karmegam)",
    "initials": "AK",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "04:00 PM",
    "status": "present",
    "phone": "8124276001",
    "enrollmentDate": "2026-01-24",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-022_1",
          "amount": 2500,
          "method": "UPI",
          "date": "2026-01-24",
          "note": "Advance Fee (UPI)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-01-24",
        "formattedDate": "2026-01-24",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-023",
    "enrollmentNo": "23/1",
    "username": "SMDS23/1",
    "password": "smds@23/1",
    "name": "Selvinraj (karmegam)",
    "initials": "S(",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "05:00 PM",
    "status": "present",
    "phone": "8015468443",
    "enrollmentDate": "2026-01-24",
    "avatarColor": "bg-teal-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-023_1",
          "amount": 2500,
          "method": "UPI",
          "date": "2026-01-24",
          "note": "Advance Fee (UPI)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-01-24",
        "formattedDate": "2026-01-24",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-024",
    "enrollmentNo": "24/1",
    "username": "SMDS24/1",
    "password": "smds@24/1",
    "name": "Shobana",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "06:00 PM",
    "status": "present",
    "phone": "8072015319",
    "enrollmentDate": "2026-01-24",
    "avatarColor": "bg-indigo-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-024_1",
          "amount": 2500,
          "method": "UPI",
          "date": "2026-01-24",
          "note": "Advance Fee (UPI 23/01/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-01-24",
        "formattedDate": "2026-01-24",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-025",
    "enrollmentNo": "25/1",
    "username": "SMDS25/1",
    "password": "smds@25/1",
    "name": "Rajendran",
    "initials": "R",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "06:00 AM",
    "status": "present",
    "phone": "9789264455",
    "enrollmentDate": "2026-01-27",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 7500,
      "paid": 7500,
      "history": [
        {
          "id": "p_ST-025_1",
          "amount": 7500,
          "method": "UPI",
          "date": "2026-01-27",
          "note": "Advance Fee (CASH UPI)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-01-27",
        "formattedDate": "2026-01-27",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-026",
    "enrollmentNo": "26/1",
    "username": "SMDS26/1",
    "password": "smds@26/1",
    "name": "Vasanthakumar",
    "initials": "V",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "08:00 AM",
    "status": "pending",
    "phone": "9566447098",
    "enrollmentDate": "2026-01-28",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4960,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-027_1",
          "amount": 4000,
          "method": "Cash",
          "date": "2026-01-28",
          "note": "Advance Fee (CASH 27/01/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-01-28",
        "formattedDate": "2026-01-28",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-027",
    "enrollmentNo": "27/1",
    "username": "SMDS27/1",
    "password": "smds@27/1",
    "name": "Abirami",
    "initials": "A",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_13",
    "time": "09:00 AM",
    "status": "present",
    "phone": "9150797708",
    "enrollmentDate": "2026-01-28",
    "avatarColor": "bg-purple-600",
    "remark": "TRAINNING ONLY",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 4000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-028_1",
          "amount": 4000,
          "method": "UPI",
          "date": "2026-01-28",
          "note": "Advance Fee (UPI 28/01/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-01-28",
        "formattedDate": "2026-01-28",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-028",
    "enrollmentNo": "28/1",
    "username": "SMDS28/1",
    "password": "smds@28/1",
    "name": "Prabhakaran",
    "initials": "P",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_12",
    "time": "10:00 AM",
    "status": "present",
    "phone": "8489025070",
    "enrollmentDate": "2026-01-28",
    "avatarColor": "bg-amber-600",
    "remark": "TRAINNING ONLY",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 6000,
      "paid": 6000,
      "history": [
        {
          "id": "p_ST-029_1",
          "amount": 6000,
          "method": "UPI",
          "date": "2026-01-28",
          "note": "Advance Fee (UPI 27/28/01/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-01-28",
        "formattedDate": "2026-01-28",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-029",
    "enrollmentNo": "29/1",
    "username": "SMDS29/1",
    "password": "smds@29/1",
    "name": "Reshichezhiyan",
    "initials": "R",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "04:00 PM",
    "status": "present",
    "phone": "9445669151",
    "enrollmentDate": "2026-01-28",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-030_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-01-28",
          "note": "Advance Fee (UPI)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-01-28",
        "formattedDate": "2026-01-28",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-030",
    "enrollmentNo": "30/1",
    "username": "SMDS30/1",
    "password": "smds@30/1",
    "name": "Daraneesh",
    "initials": "D",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8_single",
    "time": "05:00 PM",
    "status": "present",
    "phone": "6380757977",
    "enrollmentDate": "2026-01-29",
    "avatarColor": "bg-teal-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-031_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-01-29",
          "note": "Advance Fee (UPI 28-01-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-01-29",
        "formattedDate": "2026-01-29",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-031",
    "enrollmentNo": "31/1",
    "username": "SMDS31/1",
    "password": "smds@31/1",
    "name": "Naveen Etk",
    "initials": "NE",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "06:00 PM",
    "status": "pending",
    "phone": "6374879948",
    "enrollmentDate": "2026-01-31",
    "avatarColor": "bg-indigo-600",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 5000,
      "paid": 2000,
      "history": [
        {
          "id": "p_ST-032_1",
          "amount": 2000,
          "method": "UPI",
          "date": "2026-01-31",
          "note": "Advance Fee (UPI)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-01-31",
        "formattedDate": "2026-01-31",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-032",
    "enrollmentNo": "1/2",
    "username": "SMDS1/2",
    "password": "smds@1/2",
    "name": "Ganikashini",
    "initials": "G",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "07:00 AM",
    "status": "present",
    "phone": "8778277173",
    "enrollmentDate": "2026-02-10",
    "avatarColor": "bg-blue-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 7500,
      "paid": 7500,
      "history": [
        {
          "id": "p_ST-026_1",
          "amount": 7500,
          "method": "UPI",
          "date": "2026-02-10",
          "note": "Advance Fee (UPI 18/02/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-02-10",
        "formattedDate": "2026-02-10",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-033",
    "enrollmentNo": "2/2",
    "username": "SMDS2/2",
    "password": "smds@2/2",
    "name": "Jegadheesan",
    "initials": "J",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "06:00 AM",
    "status": "present",
    "phone": "8903953549",
    "enrollmentDate": "2026-02-02",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-033_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-02-02",
          "note": "Advance Fee (UPI 05/02/26 14/03/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-02-02",
        "formattedDate": "2026-02-02",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-034",
    "enrollmentNo": "3/2",
    "username": "SMDS3/2",
    "password": "smds@3/2",
    "name": "Suganya",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_2",
    "time": "07:00 AM",
    "status": "present",
    "phone": "9940083932",
    "enrollmentDate": "2026-02-03",
    "avatarColor": "bg-blue-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 3000,
      "paid": 3000,
      "history": [
        {
          "id": "p_ST-034_1",
          "amount": 3000,
          "method": "UPI",
          "date": "2026-02-03",
          "note": "Advance Fee (UPI 31/01/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-02-03",
        "formattedDate": "2026-02-03",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-035",
    "enrollmentNo": "4/2",
    "username": "SMDS4/2",
    "password": "smds@4/2",
    "name": "Shanmathi S",
    "initials": "SS",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8_single",
    "time": "08:00 AM",
    "status": "present",
    "phone": "9629222071",
    "enrollmentDate": "2026-02-03",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-035_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-02-03",
          "note": "Advance Fee (UPI 310/0126 07/03/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-02-03",
        "formattedDate": "2026-02-03",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-036",
    "enrollmentNo": "5/2",
    "username": "SMDS5/2",
    "password": "smds@5/2",
    "name": "Arunkumar",
    "initials": "A",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8_single",
    "time": "09:00 AM",
    "status": "present",
    "phone": "9788321443",
    "enrollmentDate": "2026-02-03",
    "avatarColor": "bg-purple-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 7500,
      "paid": 7500,
      "history": [
        {
          "id": "p_ST-036_1",
          "amount": 7500,
          "method": "Cash",
          "date": "2026-02-03",
          "note": "Advance Fee (CASH 26/02/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-02-03",
        "formattedDate": "2026-02-03",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-037",
    "enrollmentNo": "6/2",
    "username": "SMDS6/2",
    "password": "smds@6/2",
    "name": "Badhamabalaji",
    "initials": "B",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "10:00 AM",
    "status": "present",
    "phone": "7825911091",
    "enrollmentDate": "2026-02-02",
    "avatarColor": "bg-amber-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-037_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-02-02",
          "note": "Advance Fee (UPI 31/01/26 05/03/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-02-02",
        "formattedDate": "2026-02-02",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-038",
    "enrollmentNo": "7/2",
    "username": "SMDS7/2",
    "password": "smds@7/2",
    "name": "Vishnuvarthan",
    "initials": "V",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "04:00 PM",
    "status": "present",
    "phone": "7708139358",
    "enrollmentDate": "2026-02-05",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4500,
      "paid": 4500,
      "history": [
        {
          "id": "p_ST-038_1",
          "amount": 4500,
          "method": "UPI",
          "date": "2026-02-05",
          "note": "Advance Fee (UPI 31/01/26 19/03/2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-02-05",
        "formattedDate": "2026-02-05",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-039",
    "enrollmentNo": "8/2",
    "username": "SMDS8/2",
    "password": "smds@8/2",
    "name": "Keerthana",
    "initials": "K",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "05:00 PM",
    "status": "present",
    "phone": "8678986021",
    "enrollmentDate": "2026-02-03",
    "avatarColor": "bg-teal-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8900,
      "paid": 8900,
      "history": [
        {
          "id": "p_ST-039_1",
          "amount": 8900,
          "method": "UPI",
          "date": "2026-02-03",
          "note": "Advance Fee (UPI 02/02/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-02-03",
        "formattedDate": "2026-02-03",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-040",
    "enrollmentNo": "9/2",
    "username": "SMDS9/2",
    "password": "smds@9/2",
    "name": "Arul Jothiamma",
    "initials": "AJ",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "06:00 PM",
    "status": "present",
    "phone": "9994150418",
    "enrollmentDate": "2026-02-03",
    "avatarColor": "bg-indigo-600",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-040_1",
          "amount": 4000,
          "method": "Cash",
          "date": "2026-02-03",
          "note": "Advance Fee (CASH 02/02/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-02-03",
        "formattedDate": "2026-02-03",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-041",
    "enrollmentNo": "10/2",
    "username": "SMDS10/2",
    "password": "smds@10/2",
    "name": "Vasanthakumar R",
    "initials": "VR",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "06:00 AM",
    "status": "present",
    "phone": "8220239742",
    "enrollmentDate": "2026-02-03",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 1000,
      "paid": 1000,
      "history": [
        {
          "id": "p_ST-041_1",
          "amount": 1000,
          "method": "UPI",
          "date": "2026-02-03",
          "note": "Advance Fee (UPI)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-02-03",
        "formattedDate": "2026-02-03",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-042",
    "enrollmentNo": "11/2",
    "username": "SMDS11/2",
    "password": "smds@11/2",
    "name": "Gokulakannan",
    "initials": "G",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8_single",
    "time": "07:00 AM",
    "status": "present",
    "phone": "8973246794",
    "enrollmentDate": "2026-02-03",
    "avatarColor": "bg-blue-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-042_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-02-03",
          "note": "Advance Fee (UPI 03/02/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-02-03",
        "formattedDate": "2026-02-03",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-043",
    "enrollmentNo": "12/2",
    "username": "SMDS12/2",
    "password": "smds@12/2",
    "name": "Ajith",
    "initials": "A",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "08:00 AM",
    "status": "present",
    "phone": "9514974012",
    "enrollmentDate": "2026-02-05",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-043_1",
          "amount": 2500,
          "method": "UPI",
          "date": "2026-02-05",
          "note": "Advance Fee (CASH 04/02/26 UPI)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-02-05",
        "formattedDate": "2026-02-05",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-044",
    "enrollmentNo": "13/2",
    "username": "SMDS13/2",
    "password": "smds@13/2",
    "name": "Sathyan",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "09:00 AM",
    "status": "present",
    "phone": "8098788837",
    "enrollmentDate": "2026-02-05",
    "avatarColor": "bg-purple-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-044_1",
          "amount": 2500,
          "method": "UPI",
          "date": "2026-02-05",
          "note": "Advance Fee (UPI 04/02/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-02-05",
        "formattedDate": "2026-02-05",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-045",
    "enrollmentNo": "14/2",
    "username": "SMDS14/2",
    "password": "smds@14/2",
    "name": "Santhosh",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "10:00 AM",
    "status": "present",
    "phone": "8523965210",
    "enrollmentDate": "2026-02-05",
    "avatarColor": "bg-amber-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-045_1",
          "amount": 8000,
          "method": "Cash",
          "date": "2026-02-05",
          "note": "Advance Fee (CASH 05/02/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-02-05",
        "formattedDate": "2026-02-05",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-046",
    "enrollmentNo": "15/2",
    "username": "SMDS15/2",
    "password": "smds@15/2",
    "name": "Vidyanidhi Mishra (prakash)",
    "initials": "VM",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "04:00 PM",
    "status": "present",
    "phone": "9965774579",
    "enrollmentDate": "2026-02-09",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 1000,
      "paid": 1000,
      "history": [
        {
          "id": "p_ST-046_1",
          "amount": 1000,
          "method": "UPI",
          "date": "2026-02-09",
          "note": "Advance Fee (UPI 13/02/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-02-09",
        "formattedDate": "2026-02-09",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-047",
    "enrollmentNo": "16/2",
    "username": "SMDS16/2",
    "password": "smds@16/2",
    "name": "Gowtham",
    "initials": "G",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "05:00 PM",
    "status": "present",
    "phone": "7092270223",
    "enrollmentDate": "2026-02-05",
    "avatarColor": "bg-teal-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-047_1",
          "amount": 2500,
          "method": "UPI",
          "date": "2026-02-05",
          "note": "Advance Fee (CASH 05/02/26 UPI 07/0/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-02-05",
        "formattedDate": "2026-02-05",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-048",
    "enrollmentNo": "17/2",
    "username": "SMDS17/2",
    "password": "smds@17/2",
    "name": "Senthilkumar",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "06:00 PM",
    "status": "present",
    "phone": "7358940313",
    "enrollmentDate": "2026-02-09",
    "avatarColor": "bg-indigo-600",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4500,
      "paid": 4500,
      "history": [
        {
          "id": "p_ST-048_1",
          "amount": 4500,
          "method": "UPI",
          "date": "2026-02-09",
          "note": "Advance Fee (UPI 23/03/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-02-09",
        "formattedDate": "2026-02-09",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-049",
    "enrollmentNo": "18/2",
    "username": "SMDS18/2",
    "password": "smds@18/2",
    "name": "Allwin",
    "initials": "A",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_12",
    "time": "06:00 AM",
    "status": "present",
    "phone": "9003432220",
    "enrollmentDate": "2026-02-13",
    "avatarColor": "bg-orange-500",
    "remark": "TRAINNING ONLY",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 7500,
      "paid": 7500,
      "history": [
        {
          "id": "p_ST-049_1",
          "amount": 7500,
          "method": "UPI",
          "date": "2026-02-13",
          "note": "Advance Fee (UPI 06/02/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-02-13",
        "formattedDate": "2026-02-13",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-050",
    "enrollmentNo": "19/2",
    "username": "SMDS19/2",
    "password": "smds@19/2",
    "name": "Prabhu",
    "initials": "P",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8_single",
    "time": "08:00 AM",
    "status": "present",
    "phone": "6383752973",
    "enrollmentDate": "2026-02-09",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 3600,
      "paid": 3600,
      "history": [
        {
          "id": "p_ST-051_1",
          "amount": 3600,
          "method": "UPI",
          "date": "2026-02-09",
          "note": "Advance Fee (UPI 07/02/26,23.03)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-02-09",
        "formattedDate": "2026-02-09",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-051",
    "enrollmentNo": "20/2",
    "username": "SMDS20/2",
    "password": "smds@20/2",
    "name": "Tarun Pranav",
    "initials": "TP",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "09:00 AM",
    "status": "present",
    "phone": "6382173875",
    "enrollmentDate": "2026-02-10",
    "avatarColor": "bg-purple-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8860,
      "paid": 8860,
      "history": [
        {
          "id": "p_ST-052_1",
          "amount": 8860,
          "method": "Cash",
          "date": "2026-02-10",
          "note": "Advance Fee (CASH 07/02/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-02-10",
        "formattedDate": "2026-02-10",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-052",
    "enrollmentNo": "21/2",
    "username": "SMDS21/2",
    "password": "smds@21/2",
    "name": "Muthuselvam",
    "initials": "M",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "10:00 AM",
    "status": "present",
    "phone": "8072716891",
    "enrollmentDate": "2026-02-10",
    "avatarColor": "bg-amber-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-053_1",
          "amount": 8000,
          "method": "Cash",
          "date": "2026-02-10",
          "note": "Advance Fee (CASH 09/02/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-02-10",
        "formattedDate": "2026-02-10",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-053",
    "enrollmentNo": "22/2",
    "username": "SMDS22/2",
    "password": "smds@22/2",
    "name": "Ziegan Suvishesh",
    "initials": "ZS",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "04:00 PM",
    "status": "present",
    "phone": "7604997763",
    "enrollmentDate": "2026-02-10",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-054_1",
          "amount": 8000,
          "method": "Cash",
          "date": "2026-02-10",
          "note": "Advance Fee (CASH 09/02/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-02-10",
        "formattedDate": "2026-02-10",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-054",
    "enrollmentNo": "23/2",
    "username": "SMDS23/2",
    "password": "smds@23/2",
    "name": "Pauline Mary",
    "initials": "PM",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "05:00 PM",
    "status": "pending",
    "phone": "9980157065",
    "enrollmentDate": "2026-02-10",
    "avatarColor": "bg-teal-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8900,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-055_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-02-10",
          "note": "Advance Fee (UPI 09/02/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-02-10",
        "formattedDate": "2026-02-10",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-055",
    "enrollmentNo": "24/2",
    "username": "SMDS24/2",
    "password": "smds@24/2",
    "name": "Nalinraj N",
    "initials": "NN",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_2",
    "time": "06:00 PM",
    "status": "present",
    "phone": "9597738805",
    "enrollmentDate": "2026-02-12",
    "avatarColor": "bg-indigo-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 3000,
      "paid": 3000,
      "history": [
        {
          "id": "p_ST-056_1",
          "amount": 3000,
          "method": "UPI",
          "date": "2026-02-12",
          "note": "Advance Fee (UPI 09-02-26 23/03/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-02-12",
        "formattedDate": "2026-02-12",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-056",
    "enrollmentNo": "25/2",
    "username": "SMDS25/2",
    "password": "smds@25/2",
    "name": "Sivaselvan Ts",
    "initials": "ST",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "06:00 AM",
    "status": "present",
    "phone": "8072684314",
    "enrollmentDate": "2026-02-12",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-057_1",
          "amount": 8000,
          "method": "Cash",
          "date": "2026-02-12",
          "note": "Advance Fee (CASH12/02/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-02-12",
        "formattedDate": "2026-02-12",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-057",
    "enrollmentNo": "26/2",
    "username": "SMDS26/2",
    "password": "smds@26/2",
    "name": "Ramya",
    "initials": "R",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "07:00 AM",
    "status": "present",
    "phone": "9944374610",
    "enrollmentDate": "2026-02-12",
    "avatarColor": "bg-blue-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 7000,
      "paid": 7000,
      "history": [
        {
          "id": "p_ST-058_1",
          "amount": 7000,
          "method": "UPI",
          "date": "2026-02-12",
          "note": "Advance Fee (UPI 18-03-2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-02-12",
        "formattedDate": "2026-02-12",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-058",
    "enrollmentNo": "27/2",
    "username": "SMDS27/2",
    "password": "smds@27/2",
    "name": "Sathyan",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "08:00 AM",
    "status": "present",
    "phone": "9600400395",
    "enrollmentDate": "2026-02-13",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4500,
      "paid": 4500,
      "history": [
        {
          "id": "p_ST-059_1",
          "amount": 4500,
          "method": "UPI",
          "date": "2026-02-13",
          "note": "Advance Fee (UPI13/02/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-02-13",
        "formattedDate": "2026-02-13",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-059",
    "enrollmentNo": "28/2",
    "username": "SMDS28/2",
    "password": "smds@28/2",
    "name": "Naveen",
    "initials": "N",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "09:00 AM",
    "status": "present",
    "phone": "8838197816",
    "enrollmentDate": "2026-02-18",
    "avatarColor": "bg-purple-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-060_1",
          "amount": 8000,
          "method": "Cash",
          "date": "2026-02-18",
          "note": "Advance Fee (CASH 16/02/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-02-18",
        "formattedDate": "2026-02-18",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-060",
    "enrollmentNo": "29/2",
    "username": "SMDS29/2",
    "password": "smds@29/2",
    "name": "Sathya K",
    "initials": "SK",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "10:00 AM",
    "status": "present",
    "phone": "9952270806",
    "enrollmentDate": "2026-02-18",
    "avatarColor": "bg-amber-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-061_1",
          "amount": 2500,
          "method": "UPI",
          "date": "2026-02-18",
          "note": "Advance Fee (UPI 16/02/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-02-18",
        "formattedDate": "2026-02-18",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-061",
    "enrollmentNo": "30/2",
    "username": "SMDS30/2",
    "password": "smds@30/2",
    "name": "Sanjay P",
    "initials": "SP",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "04:00 PM",
    "status": "present",
    "phone": "9789679738",
    "enrollmentDate": "2026-02-20",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-062_1",
          "amount": 2500,
          "method": "UPI",
          "date": "2026-02-20",
          "note": "Advance Fee (UPI 16/02/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-02-20",
        "formattedDate": "2026-02-20",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-062",
    "enrollmentNo": "31/2",
    "username": "SMDS31/2",
    "password": "smds@31/2",
    "name": "Deepika Palanisamy",
    "initials": "DP",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "05:00 PM",
    "status": "present",
    "phone": "8667373468",
    "enrollmentDate": "2026-02-18",
    "avatarColor": "bg-teal-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-063_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-02-18",
          "note": "Advance Fee (UPI 17/02/26 , 30/03/2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-02-18",
        "formattedDate": "2026-02-18",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-063",
    "enrollmentNo": "32/2",
    "username": "SMDS32/2",
    "password": "smds@32/2",
    "name": "Aravindh (ram Ref)",
    "initials": "A(",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "06:00 PM",
    "status": "present",
    "phone": "9003912330",
    "enrollmentDate": "2026-02-18",
    "avatarColor": "bg-indigo-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 0,
      "paid": 0,
      "history": []
    },
    "attendanceLog": [
      {
        "date": "2026-02-18",
        "formattedDate": "2026-02-18",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-064",
    "enrollmentNo": "33/2",
    "username": "SMDS33/2",
    "password": "smds@33/2",
    "name": "Solairaj T (ram Ref)",
    "initials": "ST",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "06:00 AM",
    "status": "present",
    "phone": "8524880679",
    "enrollmentDate": "2026-02-18",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 0,
      "paid": 0,
      "history": []
    },
    "attendanceLog": [
      {
        "date": "2026-02-18",
        "formattedDate": "2026-02-18",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-065",
    "enrollmentNo": "34/2",
    "username": "SMDS34/2",
    "password": "smds@34/2",
    "name": "Suresh",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_2",
    "time": "07:00 AM",
    "status": "present",
    "phone": "9629187596",
    "enrollmentDate": "2026-02-25",
    "avatarColor": "bg-blue-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 3000,
      "paid": 3000,
      "history": [
        {
          "id": "p_ST-066_1",
          "amount": 3000,
          "method": "UPI",
          "date": "2026-02-25",
          "note": "Advance Fee (UPI 23/02/26 CASH 24/04/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-02-25",
        "formattedDate": "2026-02-25",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-066",
    "enrollmentNo": "35/2",
    "username": "SMDS35/2",
    "password": "smds@35/2",
    "name": "Jamuna Devi",
    "initials": "JD",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "10:00 AM",
    "status": "present",
    "phone": "9042462746",
    "enrollmentDate": "2026-02-26",
    "avatarColor": "bg-amber-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8600,
      "paid": 8600,
      "history": [
        {
          "id": "p_ST-069_1",
          "amount": 8600,
          "method": "UPI",
          "date": "2026-02-26",
          "note": "Advance Fee (UPI)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-02-26",
        "formattedDate": "2026-02-26",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-067",
    "enrollmentNo": "36/2",
    "username": "SMDS36/2",
    "password": "smds@36/2",
    "name": "Priyanka P",
    "initials": "PP",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "04:00 PM",
    "status": "present",
    "phone": "9894890551",
    "enrollmentDate": "2026-02-26",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4500,
      "paid": 4500,
      "history": [
        {
          "id": "p_ST-070_1",
          "amount": 4500,
          "method": "UPI",
          "date": "2026-02-26",
          "note": "Advance Fee (UPI)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-02-26",
        "formattedDate": "2026-02-26",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-068",
    "enrollmentNo": "37/2",
    "username": "SMDS37/2",
    "password": "smds@37/2",
    "name": "Dhathanabal",
    "initials": "D",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_12",
    "time": "06:00 PM",
    "status": "present",
    "phone": "9976315657",
    "enrollmentDate": "2026-02-28",
    "avatarColor": "bg-indigo-600",
    "remark": "TRAINNING ONLY",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 6000,
      "paid": 6000,
      "history": [
        {
          "id": "p_ST-072_1",
          "amount": 6000,
          "method": "UPI",
          "date": "2026-02-28",
          "note": "Advance Fee (UPI 26/02/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-02-28",
        "formattedDate": "2026-02-28",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-069",
    "enrollmentNo": "38/2",
    "username": "SMDS38/2",
    "password": "smds@38/2",
    "name": "Vinith",
    "initials": "V",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_2",
    "time": "07:00 AM",
    "status": "pending",
    "phone": "8610296151",
    "enrollmentDate": "2026-02-28",
    "avatarColor": "bg-blue-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 3100,
      "paid": 1500,
      "history": [
        {
          "id": "p_ST-074_1",
          "amount": 1500,
          "method": "UPI",
          "date": "2026-02-28",
          "note": "Advance Fee (UPI 09-03/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-02-28",
        "formattedDate": "2026-02-28",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-070",
    "enrollmentNo": "1/3",
    "username": "SMDS1/3",
    "password": "smds@1/3",
    "name": "Beo",
    "initials": "B",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8_single",
    "time": "07:00 AM",
    "status": "present",
    "phone": "9003432220",
    "enrollmentDate": "2026-03-20",
    "avatarColor": "bg-blue-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-050_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-03-20",
          "note": "Advance Fee (UPI 13/02/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-03-20",
        "formattedDate": "2026-03-20",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-071",
    "enrollmentNo": "2/3",
    "username": "SMDS2/3",
    "password": "smds@2/3",
    "name": "Boopathi Annadurai",
    "initials": "BA",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "08:00 AM",
    "status": "present",
    "phone": "9524417422",
    "enrollmentDate": "2026-03-03",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-067_1",
          "amount": 8000,
          "method": "Cash",
          "date": "2026-03-03",
          "note": "Advance Fee (CASH 24/02/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-03-03",
        "formattedDate": "2026-03-03",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-072",
    "enrollmentNo": "3/3",
    "username": "SMDS3/3",
    "password": "smds@3/3",
    "name": "Sasikala",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8_single",
    "time": "09:00 AM",
    "status": "present",
    "phone": "9629079221",
    "enrollmentDate": "2026-03-03",
    "avatarColor": "bg-purple-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-068_1",
          "amount": 8000,
          "method": "Cash",
          "date": "2026-03-03",
          "note": "Advance Fee (CASH)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-03-03",
        "formattedDate": "2026-03-03",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-073",
    "enrollmentNo": "4/3",
    "username": "SMDS4/3",
    "password": "smds@4/3",
    "name": "Krishnamoorthi",
    "initials": "K",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "05:00 PM",
    "status": "present",
    "phone": "8754930528",
    "enrollmentDate": "2026-03-05",
    "avatarColor": "bg-teal-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 7000,
      "paid": 7000,
      "history": [
        {
          "id": "p_ST-071_1",
          "amount": 7000,
          "method": "Cash",
          "date": "2026-03-05",
          "note": "Advance Fee (CASH)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-03-05",
        "formattedDate": "2026-03-05",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-074",
    "enrollmentNo": "5/3",
    "username": "SMDS5/3",
    "password": "smds@5/3",
    "name": "Sangeetha M",
    "initials": "SM",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "06:00 AM",
    "status": "present",
    "phone": "8870399874",
    "enrollmentDate": "2026-03-06",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-073_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-03-06",
          "note": "Advance Fee (UPI 28/02/26     22/05/2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-03-06",
        "formattedDate": "2026-03-06",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-075",
    "enrollmentNo": "6/3",
    "username": "SMDS6/3",
    "password": "smds@6/3",
    "name": "Sathyamoorthy",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8_single",
    "time": "08:00 AM",
    "status": "present",
    "phone": "7598735127",
    "enrollmentDate": "2026-03-09",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-075_1",
          "amount": 8000,
          "method": "Cash",
          "date": "2026-03-09",
          "note": "Advance Fee (CASH 02/03/26  25/04/2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-03-09",
        "formattedDate": "2026-03-09",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-076",
    "enrollmentNo": "7/3",
    "username": "SMDS7/3",
    "password": "smds@7/3",
    "name": "Arun Prabhu",
    "initials": "AP",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "09:00 AM",
    "status": "present",
    "phone": "9385527154",
    "enrollmentDate": "2026-03-02",
    "avatarColor": "bg-purple-600",
    "remark": "30 DAYS COMPLETED",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4200,
      "paid": 4200,
      "history": [
        {
          "id": "p_ST-076_1",
          "amount": 4200,
          "method": "UPI",
          "date": "2026-03-02",
          "note": "Advance Fee (UPI 02/03/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-03-02",
        "formattedDate": "2026-03-02",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-077",
    "enrollmentNo": "8/3",
    "username": "SMDS8/3",
    "password": "smds@8/3",
    "name": "Maris",
    "initials": "M",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "10:00 AM",
    "status": "present",
    "phone": "7708872103",
    "enrollmentDate": "2026-03-03",
    "avatarColor": "bg-amber-600",
    "remark": "30 DAYS COMPLETED",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4200,
      "paid": 4200,
      "history": [
        {
          "id": "p_ST-077_1",
          "amount": 4200,
          "method": "UPI",
          "date": "2026-03-03",
          "note": "Advance Fee (UPI 02/03/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-03-03",
        "formattedDate": "2026-03-03",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-078",
    "enrollmentNo": "9/3",
    "username": "SMDS9/3",
    "password": "smds@9/3",
    "name": "Vignesh N",
    "initials": "VN",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8_single",
    "time": "04:00 PM",
    "status": "present",
    "phone": "9952526684",
    "enrollmentDate": "2026-03-10",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-078_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-03-10",
          "note": "Advance Fee (UPI 02/03/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-03-10",
        "formattedDate": "2026-03-10",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-079",
    "enrollmentNo": "10/3",
    "username": "SMDS10/3",
    "password": "smds@10/3",
    "name": "Kousalya",
    "initials": "K",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_12",
    "time": "05:00 PM",
    "status": "present",
    "phone": "8610954080",
    "enrollmentDate": "2026-03-05",
    "avatarColor": "bg-teal-600",
    "remark": "TRAINNING ONLY",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 6000,
      "paid": 6000,
      "history": [
        {
          "id": "p_ST-079_1",
          "amount": 6000,
          "method": "UPI",
          "date": "2026-03-05",
          "note": "Advance Fee (UPI 02/03/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-03-05",
        "formattedDate": "2026-03-05",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-080",
    "enrollmentNo": "11/3",
    "username": "SMDS11/3",
    "password": "smds@11/3",
    "name": "Gayathri",
    "initials": "G",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "06:00 PM",
    "status": "present",
    "phone": "9842222778",
    "enrollmentDate": "2026-03-04",
    "avatarColor": "bg-indigo-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-080_1",
          "amount": 8000,
          "method": "Cash",
          "date": "2026-03-04",
          "note": "Advance Fee (CASH 03/03/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-03-04",
        "formattedDate": "2026-03-04",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-081",
    "enrollmentNo": "12/3",
    "username": "SMDS12/3",
    "password": "smds@12/3",
    "name": "Sharan Navaroji",
    "initials": "SN",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "06:00 AM",
    "status": "present",
    "phone": "8220660993",
    "enrollmentDate": "2026-03-09",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-081_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-03-09",
          "note": "Advance Fee (UPI/UPI06/06/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-03-09",
        "formattedDate": "2026-03-09",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-082",
    "enrollmentNo": "13/3",
    "username": "SMDS13/3",
    "password": "smds@13/3",
    "name": "Sridhar",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "07:00 AM",
    "status": "present",
    "phone": "9535633488",
    "enrollmentDate": "2026-03-05",
    "avatarColor": "bg-blue-600",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4500,
      "paid": 4500,
      "history": [
        {
          "id": "p_ST-082_1",
          "amount": 4500,
          "method": "Cash",
          "date": "2026-03-05",
          "note": "Advance Fee Paid"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-03-05",
        "formattedDate": "2026-03-05",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-083",
    "enrollmentNo": "14/3",
    "username": "SMDS14/3",
    "password": "smds@14/3",
    "name": "Ninitha",
    "initials": "N",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_12",
    "time": "08:00 AM",
    "status": "present",
    "phone": "9035038048",
    "enrollmentDate": "2026-03-10",
    "avatarColor": "bg-emerald-600",
    "remark": "TRAINNING ONLY",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 6000,
      "paid": 6000,
      "history": [
        {
          "id": "p_ST-083_1",
          "amount": 6000,
          "method": "UPI",
          "date": "2026-03-10",
          "note": "Advance Fee (UPI 06/03/26   06-04-2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-03-10",
        "formattedDate": "2026-03-10",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-084",
    "enrollmentNo": "15/3",
    "username": "SMDS15/3",
    "password": "smds@15/3",
    "name": "Aadhikrishna",
    "initials": "A",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "09:00 AM",
    "status": "present",
    "phone": "8667712509",
    "enrollmentDate": "2026-03-13",
    "avatarColor": "bg-purple-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-084_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-03-13",
          "note": "Advance Fee (UPI 04/02/26, 06/03/26       25/04/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-03-13",
        "formattedDate": "2026-03-13",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-085",
    "enrollmentNo": "16/3",
    "username": "SMDS16/3",
    "password": "smds@16/3",
    "name": "Neelaveni",
    "initials": "N",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "10:00 AM",
    "status": "present",
    "phone": "7708330141",
    "enrollmentDate": "2026-03-07",
    "avatarColor": "bg-amber-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-085_1",
          "amount": 2500,
          "method": "UPI",
          "date": "2026-03-07",
          "note": "Advance Fee (UPI 06/03/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-03-07",
        "formattedDate": "2026-03-07",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-086",
    "enrollmentNo": "17/3",
    "username": "SMDS17/3",
    "password": "smds@17/3",
    "name": "Rajamani",
    "initials": "R",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "04:00 PM",
    "status": "present",
    "phone": "8344860361",
    "enrollmentDate": "2026-03-12",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 7500,
      "paid": 7500,
      "history": [
        {
          "id": "p_ST-086_1",
          "amount": 7500,
          "method": "UPI",
          "date": "2026-03-12",
          "note": "Advance Fee (UPI 12/03/26   UPI 25/04/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-03-12",
        "formattedDate": "2026-03-12",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-087",
    "enrollmentNo": "18/3",
    "username": "SMDS18/3",
    "password": "smds@18/3",
    "name": "Padmapriya",
    "initials": "P",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_13",
    "time": "05:00 PM",
    "status": "present",
    "phone": "9600796259",
    "enrollmentDate": "2026-03-14",
    "avatarColor": "bg-teal-600",
    "remark": "TRAINNING ONLY",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 4000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-087_1",
          "amount": 4000,
          "method": "Cash",
          "date": "2026-03-14",
          "note": "Advance Fee Paid"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-03-14",
        "formattedDate": "2026-03-14",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-088",
    "enrollmentNo": "19/3",
    "username": "SMDS19/3",
    "password": "smds@19/3",
    "name": "Praveen",
    "initials": "P",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_12",
    "time": "06:00 PM",
    "status": "present",
    "phone": "9843294247",
    "enrollmentDate": "2026-03-15",
    "avatarColor": "bg-indigo-600",
    "remark": "TRAINNING ONLY",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 5500,
      "paid": 5500,
      "history": [
        {
          "id": "p_ST-088_1",
          "amount": 5500,
          "method": "UPI",
          "date": "2026-03-15",
          "note": "Advance Fee (UPI 12/03/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-03-15",
        "formattedDate": "2026-03-15",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-089",
    "enrollmentNo": "20/3",
    "username": "SMDS20/3",
    "password": "smds@20/3",
    "name": "Sankar",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "06:00 AM",
    "status": "present",
    "phone": "8973949717",
    "enrollmentDate": "2026-03-18",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-089_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-03-18",
          "note": "Advance Fee (UPI14/03/26-4/6/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-03-18",
        "formattedDate": "2026-03-18",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-090",
    "enrollmentNo": "21/3",
    "username": "SMDS21/3",
    "password": "smds@21/3",
    "name": "Rubin",
    "initials": "R",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "07:00 AM",
    "status": "present",
    "phone": "9361918127",
    "enrollmentDate": "2026-03-26",
    "avatarColor": "bg-blue-600",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4500,
      "paid": 4500,
      "history": [
        {
          "id": "p_ST-090_1",
          "amount": 4500,
          "method": "UPI",
          "date": "2026-03-26",
          "note": "Advance Fee (UPI)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-03-26",
        "formattedDate": "2026-03-26",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-091",
    "enrollmentNo": "22/3",
    "username": "SMDS22/3",
    "password": "smds@22/3",
    "name": "Shesaprian",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "08:00 AM",
    "status": "present",
    "phone": "9940905663",
    "enrollmentDate": "2026-03-18",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 500,
      "paid": 500,
      "history": [
        {
          "id": "p_ST-091_1",
          "amount": 500,
          "method": "UPI",
          "date": "2026-03-18",
          "note": "Advance Fee (UPI 19/03/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-03-18",
        "formattedDate": "2026-03-18",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-092",
    "enrollmentNo": "23/3",
    "username": "SMDS23/3",
    "password": "smds@23/3",
    "name": "Vignesh (royal Care)2 Llr",
    "initials": "V(",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "09:00 AM",
    "status": "present",
    "phone": "7094979596",
    "enrollmentDate": "2026-03-26",
    "avatarColor": "bg-purple-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 3000,
      "paid": 3000,
      "history": [
        {
          "id": "p_ST-092_1",
          "amount": 3000,
          "method": "UPI",
          "date": "2026-03-26",
          "note": "Advance Fee (UPI 23/03/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-03-26",
        "formattedDate": "2026-03-26",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-093",
    "enrollmentNo": "24/3",
    "username": "SMDS24/3",
    "password": "smds@24/3",
    "name": "Vinoth (royal Care)2 Llr",
    "initials": "V(",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "10:00 AM",
    "status": "present",
    "phone": "9025264402",
    "enrollmentDate": "2026-03-26",
    "avatarColor": "bg-amber-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 3000,
      "paid": 3000,
      "history": [
        {
          "id": "p_ST-093_1",
          "amount": 3000,
          "method": "UPI",
          "date": "2026-03-26",
          "note": "Advance Fee (UPI 23/03/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-03-26",
        "formattedDate": "2026-03-26",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-094",
    "enrollmentNo": "25/3",
    "username": "SMDS25/3",
    "password": "smds@25/3",
    "name": "Sathish Chander",
    "initials": "SC",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "04:00 PM",
    "status": "present",
    "phone": "8500255060",
    "enrollmentDate": "2026-03-23",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-094_1",
          "amount": 2500,
          "method": "UPI",
          "date": "2026-03-23",
          "note": "Advance Fee (UPI)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-03-23",
        "formattedDate": "2026-03-23",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-095",
    "enrollmentNo": "26/3",
    "username": "SMDS26/3",
    "password": "smds@26/3",
    "name": "Arundeepakvel",
    "initials": "A",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "05:00 PM",
    "status": "present",
    "phone": "8130660525",
    "enrollmentDate": "2026-03-24",
    "avatarColor": "bg-teal-600",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4500,
      "paid": 4500,
      "history": [
        {
          "id": "p_ST-095_1",
          "amount": 4500,
          "method": "UPI",
          "date": "2026-03-24",
          "note": "Advance Fee (UPI 25/03/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-03-24",
        "formattedDate": "2026-03-24",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-096",
    "enrollmentNo": "27/3",
    "username": "SMDS27/3",
    "password": "smds@27/3",
    "name": "Samson Chrysol",
    "initials": "SC",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "06:00 PM",
    "status": "present",
    "phone": "7598211875",
    "enrollmentDate": "2026-03-25",
    "avatarColor": "bg-indigo-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 600,
      "paid": 600,
      "history": [
        {
          "id": "p_ST-096_1",
          "amount": 600,
          "method": "Cash",
          "date": "2026-03-25",
          "note": "Advance Fee Paid"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-03-25",
        "formattedDate": "2026-03-25",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-097",
    "enrollmentNo": "28/3",
    "username": "SMDS28/3",
    "password": "smds@28/3",
    "name": "Elanchezliyan",
    "initials": "E",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "06:00 AM",
    "status": "present",
    "phone": "8610222934",
    "enrollmentDate": "2026-03-26",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-097_1",
          "amount": 2500,
          "method": "Cash",
          "date": "2026-03-26",
          "note": "Advance Fee (CASH / 25-03-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-03-26",
        "formattedDate": "2026-03-26",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-098",
    "enrollmentNo": "29/3",
    "username": "SMDS29/3",
    "password": "smds@29/3",
    "name": "Packkeer",
    "initials": "P",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_13",
    "time": "07:00 AM",
    "status": "present",
    "phone": "8220221815",
    "enrollmentDate": "2026-03-25",
    "avatarColor": "bg-blue-600",
    "remark": "TRAINNING ONLY",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2000,
      "paid": 2000,
      "history": [
        {
          "id": "p_ST-098_1",
          "amount": 2000,
          "method": "Cash",
          "date": "2026-03-25",
          "note": "Advance Fee Paid"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-03-25",
        "formattedDate": "2026-03-25",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-099",
    "enrollmentNo": "30/3",
    "username": "SMDS30/3",
    "password": "smds@30/3",
    "name": "Yashodha",
    "initials": "Y",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "08:00 AM",
    "status": "present",
    "phone": "9790869506",
    "enrollmentDate": "2026-03-26",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 6000,
      "paid": 6000,
      "history": [
        {
          "id": "p_ST-099_1",
          "amount": 6000,
          "method": "UPI",
          "date": "2026-03-26",
          "note": "Advance Fee (UPI)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-03-26",
        "formattedDate": "2026-03-26",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-100",
    "enrollmentNo": "31/3",
    "username": "SMDS31/3",
    "password": "smds@31/3",
    "name": "Amit Kumar",
    "initials": "AK",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "09:00 AM",
    "status": "present",
    "phone": "7892187920",
    "enrollmentDate": "2026-03-27",
    "avatarColor": "bg-purple-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 6000,
      "paid": 6000,
      "history": [
        {
          "id": "p_ST-100_1",
          "amount": 6000,
          "method": "UPI",
          "date": "2026-03-27",
          "note": "Advance Fee (UPI 25/03/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-03-27",
        "formattedDate": "2026-03-27",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-101",
    "enrollmentNo": "32/3",
    "username": "SMDS32/3",
    "password": "smds@32/3",
    "name": "Sombir",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "10:00 AM",
    "status": "present",
    "phone": "9746845238",
    "enrollmentDate": "2026-03-28",
    "avatarColor": "bg-amber-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 6000,
      "paid": 6000,
      "history": [
        {
          "id": "p_ST-101_1",
          "amount": 6000,
          "method": "UPI",
          "date": "2026-03-28",
          "note": "Advance Fee (UPI 25/03/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-03-28",
        "formattedDate": "2026-03-28",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-102",
    "enrollmentNo": "33/3",
    "username": "SMDS33/3",
    "password": "smds@33/3",
    "name": "Udayakumar",
    "initials": "U",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8_single",
    "time": "04:00 PM",
    "status": "present",
    "phone": "9944558897",
    "enrollmentDate": "2026-03-26",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-102_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-03-26",
          "note": "Advance Fee (UPI 26/03/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-03-26",
        "formattedDate": "2026-03-26",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-103",
    "enrollmentNo": "34/3",
    "username": "SMDS34/3",
    "password": "smds@34/3",
    "name": "Deepankumar",
    "initials": "D",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "05:00 PM",
    "status": "present",
    "phone": "9123540657",
    "enrollmentDate": "2026-03-28",
    "avatarColor": "bg-teal-600",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4500,
      "paid": 4500,
      "history": [
        {
          "id": "p_ST-103_1",
          "amount": 4500,
          "method": "UPI",
          "date": "2026-03-28",
          "note": "Advance Fee (UPI 27/03/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-03-28",
        "formattedDate": "2026-03-28",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-104",
    "enrollmentNo": "35/3",
    "username": "SMDS35/3",
    "password": "smds@35/3",
    "name": "Mugilan",
    "initials": "M",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "06:00 PM",
    "status": "present",
    "phone": "7708446337",
    "enrollmentDate": "2026-03-29",
    "avatarColor": "bg-indigo-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-104_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-03-29",
          "note": "Advance Fee (UPI 28/03/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-03-29",
        "formattedDate": "2026-03-29",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-105",
    "enrollmentNo": "36/3",
    "username": "SMDS36/3",
    "password": "smds@36/3",
    "name": "Rajesh",
    "initials": "R",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "07:00 AM",
    "status": "present",
    "phone": "9360740529",
    "enrollmentDate": "2026-03-31",
    "avatarColor": "bg-blue-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2000,
      "paid": 2000,
      "history": [
        {
          "id": "p_ST-106_1",
          "amount": 2000,
          "method": "Cash",
          "date": "2026-03-31",
          "note": "Advance Fee Paid"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-03-31",
        "formattedDate": "2026-03-31",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-106",
    "enrollmentNo": "1/4",
    "username": "SMDS1/4",
    "password": "smds@1/4",
    "name": "Poomari",
    "initials": "P",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "06:00 AM",
    "status": "present",
    "phone": "6382319383",
    "enrollmentDate": "2026-04-02",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-105_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-04-02",
          "note": "Advance Fee (CASH/UPI5/06/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-04-02",
        "formattedDate": "2026-04-02",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-107",
    "enrollmentNo": "2/4",
    "username": "SMDS2/4",
    "password": "smds@2/4",
    "name": "Shiji",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "08:00 AM",
    "status": "present",
    "phone": "9715274746",
    "enrollmentDate": "2026-04-03",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-107_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-04-03",
          "note": "Advance Fee (UPI 02-04/ UPI 09-06-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-04-03",
        "formattedDate": "2026-04-03",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-108",
    "enrollmentNo": "3/4",
    "username": "SMDS3/4",
    "password": "smds@3/4",
    "name": "Sakila",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8_single",
    "time": "09:00 AM",
    "status": "present",
    "phone": "7448758537",
    "enrollmentDate": "2026-04-02",
    "avatarColor": "bg-purple-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-108_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-04-02",
          "note": "Advance Fee (UPI 02/04/2026 / 15/04/2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-04-02",
        "formattedDate": "2026-04-02",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-109",
    "enrollmentNo": "4/4",
    "username": "SMDS4/4",
    "password": "smds@4/4",
    "name": "Geevika",
    "initials": "G",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "10:00 AM",
    "status": "pending",
    "phone": "9600698473",
    "enrollmentDate": "2026-04-03",
    "avatarColor": "bg-amber-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-109_1",
          "amount": 4000,
          "method": "Cash",
          "date": "2026-04-03",
          "note": "Advance Fee (CASH 02/04/2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-04-03",
        "formattedDate": "2026-04-03",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-110",
    "enrollmentNo": "5/4",
    "username": "SMDS5/4",
    "password": "smds@5/4",
    "name": "Alagarsamy K",
    "initials": "AK",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "04:00 PM",
    "status": "present",
    "phone": "9095936116",
    "enrollmentDate": "2026-04-04",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-110_1",
          "amount": 2500,
          "method": "UPI",
          "date": "2026-04-04",
          "note": "Advance Fee (UPI 03/04/26 29-06-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-04-04",
        "formattedDate": "2026-04-04",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-111",
    "enrollmentNo": "6/4",
    "username": "SMDS6/4",
    "password": "smds@6/4",
    "name": "Guhan V",
    "initials": "GV",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "05:00 PM",
    "status": "present",
    "phone": "8870328983",
    "enrollmentDate": "2026-04-04",
    "avatarColor": "bg-teal-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-111_1",
          "amount": 2500,
          "method": "UPI",
          "date": "2026-04-04",
          "note": "Advance Fee (UPI)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-04-04",
        "formattedDate": "2026-04-04",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-112",
    "enrollmentNo": "7/4",
    "username": "SMDS7/4",
    "password": "smds@7/4",
    "name": "Ajithkumar Ramasamy",
    "initials": "AR",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "06:00 PM",
    "status": "present",
    "phone": "9361922181",
    "enrollmentDate": "2026-04-07",
    "avatarColor": "bg-indigo-600",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-112_1",
          "amount": 4000,
          "method": "Cash",
          "date": "2026-04-07",
          "note": "Advance Fee (CASH -MANOJ)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-04-07",
        "formattedDate": "2026-04-07",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-113",
    "enrollmentNo": "8/4",
    "username": "SMDS8/4",
    "password": "smds@8/4",
    "name": "Packiaraj",
    "initials": "P",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "06:00 AM",
    "status": "present",
    "phone": "9994455126",
    "enrollmentDate": "2026-04-08",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-113_1",
          "amount": 2500,
          "method": "Cash",
          "date": "2026-04-08",
          "note": "Advance Fee Paid"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-04-08",
        "formattedDate": "2026-04-08",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-114",
    "enrollmentNo": "9/4",
    "username": "SMDS9/4",
    "password": "smds@9/4",
    "name": "Karthickayan Ponnaiah",
    "initials": "KP",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "07:00 AM",
    "status": "present",
    "phone": "7824041918",
    "enrollmentDate": "2026-04-09",
    "avatarColor": "bg-blue-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-114_1",
          "amount": 2500,
          "method": "UPI",
          "date": "2026-04-09",
          "note": "Advance Fee (UPI  /cash08/04/2026-13-07-2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-04-09",
        "formattedDate": "2026-04-09",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-115",
    "enrollmentNo": "10/4",
    "username": "SMDS10/4",
    "password": "smds@10/4",
    "name": "Vigneshkumar",
    "initials": "V",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_2",
    "time": "08:00 AM",
    "status": "present",
    "phone": "9789105238",
    "enrollmentDate": "2026-04-09",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 3000,
      "paid": 3000,
      "history": [
        {
          "id": "p_ST-115_1",
          "amount": 3000,
          "method": "UPI",
          "date": "2026-04-09",
          "note": "Advance Fee (UPI 08/04/2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-04-09",
        "formattedDate": "2026-04-09",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-116",
    "enrollmentNo": "11/4",
    "username": "SMDS11/4",
    "password": "smds@11/4",
    "name": "David Selvaraj",
    "initials": "DS",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "09:00 AM",
    "status": "present",
    "phone": "8248280067",
    "enrollmentDate": "2026-04-09",
    "avatarColor": "bg-purple-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-116_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-04-09",
          "note": "Advance Fee (UPI 02/04/2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-04-09",
        "formattedDate": "2026-04-09",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-117",
    "enrollmentNo": "12/4",
    "username": "SMDS12/4",
    "password": "smds@12/4",
    "name": "Chellathangam",
    "initials": "C",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "10:00 AM",
    "status": "pending",
    "phone": "9489479100",
    "enrollmentDate": "2026-04-09",
    "avatarColor": "bg-amber-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-117_1",
          "amount": 4000,
          "method": "Cash",
          "date": "2026-04-09",
          "note": "Advance Fee (CASH)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-04-09",
        "formattedDate": "2026-04-09",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-118",
    "enrollmentNo": "13/4",
    "username": "SMDS13/4",
    "password": "smds@13/4",
    "name": "Jeevitha Sree",
    "initials": "JS",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "04:00 PM",
    "status": "present",
    "phone": "8807230559",
    "enrollmentDate": "2026-04-09",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-118_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-04-09",
          "note": "Advance Fee (UPI 09/04/2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-04-09",
        "formattedDate": "2026-04-09",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-119",
    "enrollmentNo": "14/4",
    "username": "SMDS14/4",
    "password": "smds@14/4",
    "name": "Tiny Ajesh",
    "initials": "TA",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "05:00 PM",
    "status": "present",
    "phone": "9791425197",
    "enrollmentDate": "2026-04-15",
    "avatarColor": "bg-teal-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-119_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-04-15",
          "note": "Advance Fee (UPI 02/04/2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-04-15",
        "formattedDate": "2026-04-15",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-120",
    "enrollmentNo": "15/4",
    "username": "SMDS15/4",
    "password": "smds@15/4",
    "name": "Sasikumar",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "06:00 PM",
    "status": "present",
    "phone": "9944588062",
    "enrollmentDate": "2026-04-14",
    "avatarColor": "bg-indigo-600",
    "remark": "2 WHEEL DL",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 800,
      "paid": 800,
      "history": [
        {
          "id": "p_ST-120_1",
          "amount": 800,
          "method": "UPI",
          "date": "2026-04-14",
          "note": "Advance Fee (UPI 11/04/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-04-14",
        "formattedDate": "2026-04-14",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-121",
    "enrollmentNo": "16/4",
    "username": "SMDS16/4",
    "password": "smds@16/4",
    "name": "Sundari",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "06:00 AM",
    "status": "pending",
    "phone": "9994512142",
    "enrollmentDate": "2026-04-11",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 0,
      "history": []
    },
    "attendanceLog": [
      {
        "date": "2026-04-11",
        "formattedDate": "2026-04-11",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-122",
    "enrollmentNo": "17/4",
    "username": "SMDS17/4",
    "password": "smds@17/4",
    "name": "Sivaraj",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "07:00 AM",
    "status": "present",
    "phone": "9677856478",
    "enrollmentDate": "2026-04-11",
    "avatarColor": "bg-blue-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-122_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-04-11",
          "note": "Advance Fee (UPI)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-04-11",
        "formattedDate": "2026-04-11",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-123",
    "enrollmentNo": "18/4",
    "username": "SMDS18/4",
    "password": "smds@18/4",
    "name": "Vikas",
    "initials": "V",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "08:00 AM",
    "status": "present",
    "phone": "9894052449",
    "enrollmentDate": "2026-04-13",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-123_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-04-13",
          "note": "Advance Fee (UPI 11/04/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-04-13",
        "formattedDate": "2026-04-13",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-124",
    "enrollmentNo": "19/4",
    "username": "SMDS19/4",
    "password": "smds@19/4",
    "name": "Yasmin 5.30 Pm",
    "initials": "Y5",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_13",
    "time": "09:00 AM",
    "status": "present",
    "phone": "9597332077",
    "enrollmentDate": "2026-04-18",
    "avatarColor": "bg-purple-600",
    "remark": "TRAINNING ONLY",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 3000,
      "paid": 3000,
      "history": [
        {
          "id": "p_ST-124_1",
          "amount": 3000,
          "method": "UPI",
          "date": "2026-04-18",
          "note": "Advance Fee (UPI 11/04/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-04-18",
        "formattedDate": "2026-04-18",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-125",
    "enrollmentNo": "20/4",
    "username": "SMDS20/4",
    "password": "smds@20/4",
    "name": "Uoorkalan K",
    "initials": "UK",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "10:00 AM",
    "status": "pending",
    "phone": "8220220133",
    "enrollmentDate": "2026-04-17",
    "avatarColor": "bg-amber-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-125_1",
          "amount": 4000,
          "method": "Cash",
          "date": "2026-04-17",
          "note": "Advance Fee (CASH 15/04/2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-04-17",
        "formattedDate": "2026-04-17",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-126",
    "enrollmentNo": "21/4",
    "username": "SMDS21/4",
    "password": "smds@21/4",
    "name": "Sindhu S 10.00 Am",
    "initials": "SS",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_12",
    "time": "04:00 PM",
    "status": "pending",
    "phone": "9788631194",
    "enrollmentDate": "2026-04-20",
    "avatarColor": "bg-rose-600",
    "remark": "TRAINNING ONLY",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 6000,
      "paid": 3000,
      "history": [
        {
          "id": "p_ST-126_1",
          "amount": 3000,
          "method": "Cash",
          "date": "2026-04-20",
          "note": "Advance Fee (CASH                 15/04/2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-04-20",
        "formattedDate": "2026-04-20",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-127",
    "enrollmentNo": "22/4",
    "username": "SMDS22/4",
    "password": "smds@22/4",
    "name": "\"shanmugapriya G V 5.00 Pm",
    "initials": "\"G",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_13",
    "time": "05:00 PM",
    "status": "present",
    "phone": "9842200000",
    "enrollmentDate": "2026-04-21",
    "avatarColor": "bg-teal-600",
    "remark": "TRAINNING ONLY",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 0,
      "paid": 0,
      "history": []
    },
    "attendanceLog": [
      {
        "date": "2026-04-21",
        "formattedDate": "2026-04-21",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-128",
    "enrollmentNo": "23/4",
    "username": "SMDS23/4",
    "password": "smds@23/4",
    "name": "Aarthi D 4.30 Pm",
    "initials": "AD",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "06:00 PM",
    "status": "present",
    "phone": "9677632192",
    "enrollmentDate": "2026-04-15",
    "avatarColor": "bg-indigo-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-128_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-04-15",
          "note": "Advance Fee (UPI 14/04/2026+5/06/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-04-15",
        "formattedDate": "2026-04-15",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-129",
    "enrollmentNo": "24/4",
    "username": "SMDS24/4",
    "password": "smds@24/4",
    "name": "Sanjev Kumar T",
    "initials": "SK",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "06:00 AM",
    "status": "present",
    "phone": "9976114684",
    "enrollmentDate": "2026-04-15",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-129_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-04-15",
          "note": "Advance Fee (UPI/UPI06/06/2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-04-15",
        "formattedDate": "2026-04-15",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-130",
    "enrollmentNo": "25/4",
    "username": "SMDS25/4",
    "password": "smds@25/4",
    "name": "Kumaresan M",
    "initials": "KM",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "07:00 AM",
    "status": "present",
    "phone": "9788356721",
    "enrollmentDate": "2026-04-16",
    "avatarColor": "bg-blue-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-130_1",
          "amount": 2500,
          "method": "Cash",
          "date": "2026-04-16",
          "note": "Advance Fee Paid"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-04-16",
        "formattedDate": "2026-04-16",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-131",
    "enrollmentNo": "26/4",
    "username": "SMDS26/4",
    "password": "smds@26/4",
    "name": "Suhanth",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_2",
    "time": "08:00 AM",
    "status": "present",
    "phone": "7708189411",
    "enrollmentDate": "2026-04-17",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 3000,
      "paid": 3000,
      "history": [
        {
          "id": "p_ST-131_1",
          "amount": 3000,
          "method": "UPI",
          "date": "2026-04-17",
          "note": "Advance Fee (UPI)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-04-17",
        "formattedDate": "2026-04-17",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-132",
    "enrollmentNo": "27/4",
    "username": "SMDS27/4",
    "password": "smds@27/4",
    "name": "Nandish Kumar",
    "initials": "NK",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_2",
    "time": "09:00 AM",
    "status": "pending",
    "phone": "9965020601",
    "enrollmentDate": "2026-04-20",
    "avatarColor": "bg-purple-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 3000,
      "paid": 1000,
      "history": [
        {
          "id": "p_ST-132_1",
          "amount": 1000,
          "method": "UPI",
          "date": "2026-04-20",
          "note": "Advance Fee (UPI 18/04/2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-04-20",
        "formattedDate": "2026-04-20",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-133",
    "enrollmentNo": "28/4",
    "username": "SMDS28/4",
    "password": "smds@28/4",
    "name": "Vasuki",
    "initials": "V",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "10:00 AM",
    "status": "present",
    "phone": "9677753202",
    "enrollmentDate": "2026-04-20",
    "avatarColor": "bg-amber-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-133_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-04-20",
          "note": "Advance Fee (UPI  21/04/2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-04-20",
        "formattedDate": "2026-04-20",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-134",
    "enrollmentNo": "29/4",
    "username": "SMDS29/4",
    "password": "smds@29/4",
    "name": "Thenmozhi",
    "initials": "T",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "04:00 PM",
    "status": "present",
    "phone": "8610211628",
    "enrollmentDate": "2026-04-21",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 7500,
      "paid": 7500,
      "history": [
        {
          "id": "p_ST-134_1",
          "amount": 7500,
          "method": "UPI",
          "date": "2026-04-21",
          "note": "Advance Fee (UPI 21/04/2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-04-21",
        "formattedDate": "2026-04-21",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-135",
    "enrollmentNo": "30/4",
    "username": "SMDS30/4",
    "password": "smds@30/4",
    "name": "Marichamy",
    "initials": "M",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "05:00 PM",
    "status": "present",
    "phone": "9842409243",
    "enrollmentDate": "2026-04-21",
    "avatarColor": "bg-teal-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 7500,
      "paid": 7500,
      "history": [
        {
          "id": "p_ST-135_1",
          "amount": 7500,
          "method": "Cash",
          "date": "2026-04-21",
          "note": "Advance Fee (CASH21/04/2026    08/05/2026  06/06/2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-04-21",
        "formattedDate": "2026-04-21",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-136",
    "enrollmentNo": "31/4",
    "username": "SMDS31/4",
    "password": "smds@31/4",
    "name": "Neeladevi",
    "initials": "N",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "06:00 PM",
    "status": "present",
    "phone": "9842200000",
    "enrollmentDate": "2026-04-28",
    "avatarColor": "bg-indigo-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-136_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-04-28",
          "note": "Advance Fee (\"UPI 22-04-26 /)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-04-28",
        "formattedDate": "2026-04-28",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-137",
    "enrollmentNo": "32/4",
    "username": "SMDS32/4",
    "password": "smds@32/4",
    "name": "Krishna",
    "initials": "K",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "06:00 AM",
    "status": "present",
    "phone": "8248649682",
    "enrollmentDate": "2026-04-27",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-137_1",
          "amount": 8000,
          "method": "Cash",
          "date": "2026-04-27",
          "note": "Advance Fee Paid"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-04-27",
        "formattedDate": "2026-04-27",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-138",
    "enrollmentNo": "33/4",
    "username": "SMDS33/4",
    "password": "smds@33/4",
    "name": "Siva",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "07:00 AM",
    "status": "present",
    "phone": "8754131579",
    "enrollmentDate": "2026-04-28",
    "avatarColor": "bg-blue-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 7000,
      "paid": 7000,
      "history": [
        {
          "id": "p_ST-138_1",
          "amount": 7000,
          "method": "Cash",
          "date": "2026-04-28",
          "note": "Advance Fee Paid"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-04-28",
        "formattedDate": "2026-04-28",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-139",
    "enrollmentNo": "34/4",
    "username": "SMDS34/4",
    "password": "smds@34/4",
    "name": "Sandhiya S",
    "initials": "SS",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "08:00 AM",
    "status": "present",
    "phone": "9994165259",
    "enrollmentDate": "2026-04-29",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-139_1",
          "amount": 8000,
          "method": "Cash",
          "date": "2026-04-29",
          "note": "Advance Fee (CASH 30/04/2026 cash 06/06/2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-04-29",
        "formattedDate": "2026-04-29",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-140",
    "enrollmentNo": "35/4",
    "username": "SMDS35/4",
    "password": "smds@35/4",
    "name": "Premkumar",
    "initials": "P",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_2",
    "time": "09:00 AM",
    "status": "present",
    "phone": "8682942308",
    "enrollmentDate": "2026-04-30",
    "avatarColor": "bg-purple-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 3000,
      "paid": 3000,
      "history": [
        {
          "id": "p_ST-140_1",
          "amount": 3000,
          "method": "Cash",
          "date": "2026-04-30",
          "note": "Advance Fee (CASH     30/04/2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-04-30",
        "formattedDate": "2026-04-30",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-141",
    "enrollmentNo": "36/4",
    "username": "SMDS36/4",
    "password": "smds@36/4",
    "name": "Suriya Prakash",
    "initials": "SP",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "10:00 AM",
    "status": "present",
    "phone": "7010946883",
    "enrollmentDate": "2026-04-30",
    "avatarColor": "bg-amber-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-141_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-04-30",
          "note": "Advance Fee (UPI        30/04/2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-04-30",
        "formattedDate": "2026-04-30",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-142",
    "enrollmentNo": "37/4",
    "username": "SMDS37/4",
    "password": "smds@37/4",
    "name": "Shanmugapriya Boopathi",
    "initials": "SB",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "04:00 PM",
    "status": "present",
    "phone": "8754679586",
    "enrollmentDate": "2026-04-30",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-142_1",
          "amount": 2500,
          "method": "UPI",
          "date": "2026-04-30",
          "note": "Advance Fee (UPI        30/04/2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-04-30",
        "formattedDate": "2026-04-30",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-143",
    "enrollmentNo": "38/4",
    "username": "SMDS38/4",
    "password": "smds@38/4",
    "name": "Rajesh Seeman",
    "initials": "RS",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "09:00 AM",
    "status": "present",
    "phone": "8489093063",
    "enrollmentDate": "2026-04-26",
    "avatarColor": "bg-purple-600",
    "remark": "soft copy missing",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-316_1",
          "amount": 2500,
          "method": "Cash",
          "date": "2026-04-26",
          "note": "Advance Fee (11/09/2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-04-26",
        "formattedDate": "2026-04-26",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-144",
    "enrollmentNo": "1/5",
    "username": "SMDS1/5",
    "password": "smds@1/5",
    "name": "Tushar",
    "initials": "T",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "05:00 PM",
    "status": "present",
    "phone": "9751201197",
    "enrollmentDate": "2026-05-01",
    "avatarColor": "bg-teal-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-143_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-05-01",
          "note": "Advance Fee (UPI                           02-05-2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-01",
        "formattedDate": "2026-05-01",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-145",
    "enrollmentNo": "2/5",
    "username": "SMDS2/5",
    "password": "smds@2/5",
    "name": "Ramkumar",
    "initials": "R",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "06:00 PM",
    "status": "present",
    "phone": "8870921936",
    "enrollmentDate": "2026-05-05",
    "avatarColor": "bg-indigo-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8500,
      "paid": 8500,
      "history": [
        {
          "id": "p_ST-144_1",
          "amount": 8500,
          "method": "UPI",
          "date": "2026-05-05",
          "note": "Advance Fee (UPI              02-05-2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-05",
        "formattedDate": "2026-05-05",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-146",
    "enrollmentNo": "3/5",
    "username": "SMDS3/5",
    "password": "smds@3/5",
    "name": "Vichithra",
    "initials": "V",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "06:00 AM",
    "status": "pending",
    "phone": "8940134704",
    "enrollmentDate": "2026-05-02",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8900,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-145_1",
          "amount": 8000,
          "method": "Cash",
          "date": "2026-05-02",
          "note": "Advance Fee (CASH-04/06/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-02",
        "formattedDate": "2026-05-02",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-147",
    "enrollmentNo": "4/5",
    "username": "SMDS4/5",
    "password": "smds@4/5",
    "name": "Ramya",
    "initials": "R",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "07:00 AM",
    "status": "present",
    "phone": "9578914320",
    "enrollmentDate": "2026-05-02",
    "avatarColor": "bg-blue-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-146_1",
          "amount": 8000,
          "method": "Cash",
          "date": "2026-05-02",
          "note": "Advance Fee (CASH)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-02",
        "formattedDate": "2026-05-02",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-148",
    "enrollmentNo": "5/5",
    "username": "SMDS5/5",
    "password": "smds@5/5",
    "name": "Mohan Easwaran",
    "initials": "ME",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "08:00 AM",
    "status": "pending",
    "phone": "8220586140",
    "enrollmentDate": "2026-05-04",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-147_1",
          "amount": 4000,
          "method": "UPI",
          "date": "2026-05-04",
          "note": "Advance Fee (UPI              04-05-2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-04",
        "formattedDate": "2026-05-04",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-149",
    "enrollmentNo": "6/5",
    "username": "SMDS6/5",
    "password": "smds@6/5",
    "name": "Swarna Devi",
    "initials": "SD",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "09:00 AM",
    "status": "present",
    "phone": "9003982628",
    "enrollmentDate": "2026-05-05",
    "avatarColor": "bg-purple-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-148_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-05-05",
          "note": "Advance Fee (CASH & UPI 04-05-2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-05",
        "formattedDate": "2026-05-05",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-150",
    "enrollmentNo": "7/5",
    "username": "SMDS7/5",
    "password": "smds@7/5",
    "name": "Palanivel",
    "initials": "P",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "10:00 AM",
    "status": "present",
    "phone": "9344563908",
    "enrollmentDate": "2026-05-11",
    "avatarColor": "bg-amber-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-149_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-05-11",
          "note": "Advance Fee (UPI               06-06-2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-11",
        "formattedDate": "2026-05-11",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-151",
    "enrollmentNo": "8/5",
    "username": "SMDS8/5",
    "password": "smds@8/5",
    "name": "Anitha",
    "initials": "A",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "04:00 PM",
    "status": "present",
    "phone": "9965569867",
    "enrollmentDate": "2026-05-04",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-150_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-05-04",
          "note": "Advance Fee (UPI              04-05-2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-04",
        "formattedDate": "2026-05-04",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-152",
    "enrollmentNo": "9/5",
    "username": "SMDS9/5",
    "password": "smds@9/5",
    "name": "Sujaya",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "05:00 PM",
    "status": "present",
    "phone": "9940080413",
    "enrollmentDate": "2026-05-04",
    "avatarColor": "bg-teal-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-151_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-05-04",
          "note": "Advance Fee (UPI 04-05-26 / 04-07-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-04",
        "formattedDate": "2026-05-04",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-153",
    "enrollmentNo": "10/5",
    "username": "SMDS10/5",
    "password": "smds@10/5",
    "name": "Ramraj",
    "initials": "R",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "06:00 PM",
    "status": "present",
    "phone": "9965406393",
    "enrollmentDate": "2026-05-05",
    "avatarColor": "bg-indigo-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 7000,
      "paid": 7000,
      "history": [
        {
          "id": "p_ST-152_1",
          "amount": 7000,
          "method": "UPI",
          "date": "2026-05-05",
          "note": "Advance Fee (UPI               15-05-2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-05",
        "formattedDate": "2026-05-05",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-154",
    "enrollmentNo": "11/5",
    "username": "SMDS11/5",
    "password": "smds@11/5",
    "name": "Dhanapandian",
    "initials": "D",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "06:00 AM",
    "status": "present",
    "phone": "9894634147",
    "enrollmentDate": "2026-05-05",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-153_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-05-05",
          "note": "Advance Fee (UPI              02-05-2026/CASH)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-05",
        "formattedDate": "2026-05-05",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-155",
    "enrollmentNo": "12/5",
    "username": "SMDS12/5",
    "password": "smds@12/5",
    "name": "Anusiya",
    "initials": "A",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "07:00 AM",
    "status": "present",
    "phone": "9894799142",
    "enrollmentDate": "2026-05-11",
    "avatarColor": "bg-blue-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-154_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-05-11",
          "note": "Advance Fee (UPI              11-05-2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-11",
        "formattedDate": "2026-05-11",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-156",
    "enrollmentNo": "13/5",
    "username": "SMDS13/5",
    "password": "smds@13/5",
    "name": "Subhashree",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "08:00 AM",
    "status": "pending",
    "phone": "9965537008",
    "enrollmentDate": "2026-05-06",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8900,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-155_1",
          "amount": 8000,
          "method": "Cash",
          "date": "2026-05-06",
          "note": "Advance Fee (CASH               06-05-2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-06",
        "formattedDate": "2026-05-06",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-157",
    "enrollmentNo": "14/5",
    "username": "SMDS14/5",
    "password": "smds@14/5",
    "name": "Jobin",
    "initials": "J",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "09:00 AM",
    "status": "present",
    "phone": "8903346278",
    "enrollmentDate": "2026-05-14",
    "avatarColor": "bg-purple-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-156_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-05-14",
          "note": "Advance Fee (UPI)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-14",
        "formattedDate": "2026-05-14",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-158",
    "enrollmentNo": "15/5",
    "username": "SMDS15/5",
    "password": "smds@15/5",
    "name": "Sangavi",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_13",
    "time": "10:00 AM",
    "status": "present",
    "phone": "9486026260",
    "enrollmentDate": "2026-05-15",
    "avatarColor": "bg-amber-600",
    "remark": "TRAINNING ONLY",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 4000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-157_1",
          "amount": 4000,
          "method": "Cash",
          "date": "2026-05-15",
          "note": "Advance Fee (CASH           08-05-2026 / 16-05-2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-15",
        "formattedDate": "2026-05-15",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-159",
    "enrollmentNo": "16/5",
    "username": "SMDS16/5",
    "password": "smds@16/5",
    "name": "Boomika",
    "initials": "B",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "04:00 PM",
    "status": "present",
    "phone": "9443904490",
    "enrollmentDate": "2026-05-22",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-158_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-05-22",
          "note": "Advance Fee (UPI              11-05-2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-22",
        "formattedDate": "2026-05-22",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-160",
    "enrollmentNo": "17/5",
    "username": "SMDS17/5",
    "password": "smds@17/5",
    "name": "Anusaranya",
    "initials": "A",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "05:00 PM",
    "status": "present",
    "phone": "8122267890",
    "enrollmentDate": "2026-05-11",
    "avatarColor": "bg-teal-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-159_1",
          "amount": 8000,
          "method": "Cash",
          "date": "2026-05-11",
          "note": "Advance Fee (CASH           12-05-2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-11",
        "formattedDate": "2026-05-11",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-161",
    "enrollmentNo": "18/5",
    "username": "SMDS18/5",
    "password": "smds@18/5",
    "name": "Balraj Av",
    "initials": "BA",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_13",
    "time": "06:00 PM",
    "status": "present",
    "phone": "9842786788",
    "enrollmentDate": "2026-05-13",
    "avatarColor": "bg-indigo-600",
    "remark": "TRAINNING ONLY",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 1000,
      "paid": 1000,
      "history": [
        {
          "id": "p_ST-160_1",
          "amount": 1000,
          "method": "Cash",
          "date": "2026-05-13",
          "note": "Advance Fee (CASH           13-05-2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-13",
        "formattedDate": "2026-05-13",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-162",
    "enrollmentNo": "19/5",
    "username": "SMDS19/5",
    "password": "smds@19/5",
    "name": "Sarithra",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "06:00 AM",
    "status": "present",
    "phone": "7667005553",
    "enrollmentDate": "2026-05-19",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-161_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-05-19",
          "note": "Advance Fee (UPI 15-05-2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-19",
        "formattedDate": "2026-05-19",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-163",
    "enrollmentNo": "20/5",
    "username": "SMDS20/5",
    "password": "smds@20/5",
    "name": "Hemalatha",
    "initials": "H",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "07:00 AM",
    "status": "present",
    "phone": "9942282398",
    "enrollmentDate": "2026-05-19",
    "avatarColor": "bg-blue-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-162_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-05-19",
          "note": "Advance Fee (UPI 15-05-2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-19",
        "formattedDate": "2026-05-19",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-164",
    "enrollmentNo": "21/5",
    "username": "SMDS21/5",
    "password": "smds@21/5",
    "name": "Malathi",
    "initials": "M",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_13",
    "time": "08:00 AM",
    "status": "present",
    "phone": "9842200000",
    "enrollmentDate": "2026-05-21",
    "avatarColor": "bg-emerald-600",
    "remark": "TRAINNING ONLY",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2000,
      "paid": 2000,
      "history": [
        {
          "id": "p_ST-163_1",
          "amount": 2000,
          "method": "UPI",
          "date": "2026-05-21",
          "note": "Advance Fee (UPI)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-21",
        "formattedDate": "2026-05-21",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-165",
    "enrollmentNo": "22/5",
    "username": "SMDS22/5",
    "password": "smds@22/5",
    "name": "Manikandan",
    "initials": "M",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_12",
    "time": "09:00 AM",
    "status": "present",
    "phone": "9842200000",
    "enrollmentDate": "2026-05-22",
    "avatarColor": "bg-purple-600",
    "remark": "TRAINNING ONLY",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 6000,
      "paid": 6000,
      "history": [
        {
          "id": "p_ST-164_1",
          "amount": 6000,
          "method": "UPI",
          "date": "2026-05-22",
          "note": "Advance Fee (UPI              19-05-2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-22",
        "formattedDate": "2026-05-22",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-166",
    "enrollmentNo": "23/5",
    "username": "SMDS23/5",
    "password": "smds@23/5",
    "name": "Kavin Raj",
    "initials": "KR",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "10:00 AM",
    "status": "present",
    "phone": "7540091410",
    "enrollmentDate": "2026-05-14",
    "avatarColor": "bg-amber-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-165_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-05-14",
          "note": "Advance Fee (UPI               14-05-2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-14",
        "formattedDate": "2026-05-14",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-167",
    "enrollmentNo": "24/5",
    "username": "SMDS24/5",
    "password": "smds@24/5",
    "name": "Maryshalini G",
    "initials": "MG",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "04:00 PM",
    "status": "pending",
    "phone": "9080142411",
    "enrollmentDate": "2026-05-14",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 1000,
      "history": [
        {
          "id": "p_ST-166_1",
          "amount": 1000,
          "method": "UPI",
          "date": "2026-05-14",
          "note": "Advance Fee (UPI               14-05-2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-14",
        "formattedDate": "2026-05-14",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-168",
    "enrollmentNo": "25/5",
    "username": "SMDS25/5",
    "password": "smds@25/5",
    "name": "Logeshwari",
    "initials": "L",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "05:00 PM",
    "status": "present",
    "phone": "9677632359",
    "enrollmentDate": "2026-05-14",
    "avatarColor": "bg-teal-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-167_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-05-14",
          "note": "Advance Fee (UPI 14-05-26 / 03/08/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-14",
        "formattedDate": "2026-05-14",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-169",
    "enrollmentNo": "26/5",
    "username": "SMDS26/5",
    "password": "smds@26/5",
    "name": "Vikas",
    "initials": "V",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "06:00 PM",
    "status": "present",
    "phone": "9092062635",
    "enrollmentDate": "2026-05-18",
    "avatarColor": "bg-indigo-600",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4500,
      "paid": 4500,
      "history": [
        {
          "id": "p_ST-168_1",
          "amount": 4500,
          "method": "Cash",
          "date": "2026-05-18",
          "note": "Advance Fee Paid"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-18",
        "formattedDate": "2026-05-18",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-170",
    "enrollmentNo": "27/5",
    "username": "SMDS27/5",
    "password": "smds@27/5",
    "name": "Salma Banu",
    "initials": "SB",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "06:00 AM",
    "status": "present",
    "phone": "9384057687",
    "enrollmentDate": "2026-05-19",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 7000,
      "paid": 7000,
      "history": [
        {
          "id": "p_ST-169_1",
          "amount": 7000,
          "method": "Cash",
          "date": "2026-05-19",
          "note": "Advance Fee (CASH             21-05-2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-19",
        "formattedDate": "2026-05-19",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-171",
    "enrollmentNo": "28/5",
    "username": "SMDS28/5",
    "password": "smds@28/5",
    "name": "Suriya Banu",
    "initials": "SB",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "07:00 AM",
    "status": "present",
    "phone": "9384057687",
    "enrollmentDate": "2026-05-19",
    "avatarColor": "bg-blue-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 7000,
      "paid": 7000,
      "history": [
        {
          "id": "p_ST-170_1",
          "amount": 7000,
          "method": "UPI",
          "date": "2026-05-19",
          "note": "Advance Fee (UPI                19-05-20296)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-19",
        "formattedDate": "2026-05-19",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-172",
    "enrollmentNo": "29/5",
    "username": "SMDS29/5",
    "password": "smds@29/5",
    "name": "Madhav",
    "initials": "M",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "08:00 AM",
    "status": "present",
    "phone": "9600240850",
    "enrollmentDate": "2026-05-20",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-171_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-05-20",
          "note": "Advance Fee (UPI               21-05-2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-20",
        "formattedDate": "2026-05-20",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-173",
    "enrollmentNo": "30/5",
    "username": "SMDS30/5",
    "password": "smds@30/5",
    "name": "Gobinath",
    "initials": "G",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "09:00 AM",
    "status": "present",
    "phone": "7871625494",
    "enrollmentDate": "2026-05-20",
    "avatarColor": "bg-purple-600",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-172_1",
          "amount": 4000,
          "method": "UPI",
          "date": "2026-05-20",
          "note": "Advance Fee (UPI-20/5/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-20",
        "formattedDate": "2026-05-20",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-174",
    "enrollmentNo": "31/5",
    "username": "SMDS31/5",
    "password": "smds@31/5",
    "name": "Yuvaraja",
    "initials": "Y",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8_single",
    "time": "10:00 AM",
    "status": "pending",
    "phone": "8144150098",
    "enrollmentDate": "2026-05-28",
    "avatarColor": "bg-amber-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8500,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-173_1",
          "amount": 4000,
          "method": "UPI",
          "date": "2026-05-28",
          "note": "Advance Fee (UPI                           23-05-2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-28",
        "formattedDate": "2026-05-28",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-175",
    "enrollmentNo": "32/5",
    "username": "SMDS32/5",
    "password": "smds@32/5",
    "name": "Sandhiya Shanmugam",
    "initials": "SS",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "04:00 PM",
    "status": "present",
    "phone": "9790696769",
    "enrollmentDate": "2026-05-22",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-174_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-05-22",
          "note": "Advance Fee (UPI               22-05-2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-22",
        "formattedDate": "2026-05-22",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-176",
    "enrollmentNo": "33/5",
    "username": "SMDS33/5",
    "password": "smds@33/5",
    "name": "Harsini",
    "initials": "H",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "05:00 PM",
    "status": "present",
    "phone": "9629738251",
    "enrollmentDate": "2026-05-22",
    "avatarColor": "bg-teal-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-175_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-05-22",
          "note": "Advance Fee (UPI 21-05-2026 / 04-07-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-22",
        "formattedDate": "2026-05-22",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-177",
    "enrollmentNo": "34/5",
    "username": "SMDS34/5",
    "password": "smds@34/5",
    "name": "Thangaraj",
    "initials": "T",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "06:00 PM",
    "status": "present",
    "phone": "9600771509",
    "enrollmentDate": "2026-05-22",
    "avatarColor": "bg-indigo-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-176_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-05-22",
          "note": "Advance Fee (UPI04/06/26 - 04/07/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-22",
        "formattedDate": "2026-05-22",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-178",
    "enrollmentNo": "35/5",
    "username": "SMDS35/5",
    "password": "smds@35/5",
    "name": "Sandhiya B",
    "initials": "SB",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8_single",
    "time": "06:00 AM",
    "status": "present",
    "phone": "9600771509",
    "enrollmentDate": "2026-05-22",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-177_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-05-22",
          "note": "Advance Fee (UPI04/06/26 - 04/07/26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-22",
        "formattedDate": "2026-05-22",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-179",
    "enrollmentNo": "36/5",
    "username": "SMDS36/5",
    "password": "smds@36/5",
    "name": "S Mathivathani",
    "initials": "SM",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "07:00 AM",
    "status": "present",
    "phone": "9480945151",
    "enrollmentDate": "2026-05-28",
    "avatarColor": "bg-blue-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-178_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-05-28",
          "note": "Advance Fee (UPI                               29-05-2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-28",
        "formattedDate": "2026-05-28",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-180",
    "enrollmentNo": "37/5",
    "username": "SMDS37/5",
    "password": "smds@37/5",
    "name": "Ragu",
    "initials": "R",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "08:00 AM",
    "status": "present",
    "phone": "9626230889",
    "enrollmentDate": "2026-05-26",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-179_1",
          "amount": 2500,
          "method": "UPI",
          "date": "2026-05-26",
          "note": "Advance Fee (UPI 30-06-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-26",
        "formattedDate": "2026-05-26",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-181",
    "enrollmentNo": "38/5",
    "username": "SMDS38/5",
    "password": "smds@38/5",
    "name": "Dinesh Kumar R",
    "initials": "DK",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "09:00 AM",
    "status": "present",
    "phone": "9095759337",
    "enrollmentDate": "2026-05-26",
    "avatarColor": "bg-purple-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-180_1",
          "amount": 2500,
          "method": "UPI",
          "date": "2026-05-26",
          "note": "Advance Fee (UPI 30-06-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-26",
        "formattedDate": "2026-05-26",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-182",
    "enrollmentNo": "39/5",
    "username": "SMDS39/5",
    "password": "smds@39/5",
    "name": "Surendran M",
    "initials": "SM",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "10:00 AM",
    "status": "present",
    "phone": "9894476555",
    "enrollmentDate": "2026-05-30",
    "avatarColor": "bg-amber-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 7200,
      "paid": 7200,
      "history": [
        {
          "id": "p_ST-181_1",
          "amount": 7200,
          "method": "Cash",
          "date": "2026-05-30",
          "note": "Advance Fee (CASH)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-30",
        "formattedDate": "2026-05-30",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-183",
    "enrollmentNo": "40/5",
    "username": "SMDS40/5",
    "password": "smds@40/5",
    "name": "Yogeshwaran",
    "initials": "Y",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "04:00 PM",
    "status": "present",
    "phone": "8124476886",
    "enrollmentDate": "2026-05-30",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-182_1",
          "amount": 8000,
          "method": "Cash",
          "date": "2026-05-30",
          "note": "Advance Fee (CASH 30-06-26 / 04-07-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-30",
        "formattedDate": "2026-05-30",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-184",
    "enrollmentNo": "41/5",
    "username": "SMDS41/5",
    "password": "smds@41/5",
    "name": "Ramanan",
    "initials": "R",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "05:00 PM",
    "status": "present",
    "phone": "7539961191",
    "enrollmentDate": "2026-05-28",
    "avatarColor": "bg-teal-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 7500,
      "paid": 7500,
      "history": [
        {
          "id": "p_ST-183_1",
          "amount": 7500,
          "method": "UPI",
          "date": "2026-05-28",
          "note": "Advance Fee (UPI)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-28",
        "formattedDate": "2026-05-28",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-185",
    "enrollmentNo": "42/5",
    "username": "SMDS42/5",
    "password": "smds@42/5",
    "name": "Kavinmozhi",
    "initials": "K",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "06:00 PM",
    "status": "present",
    "phone": "9789324808",
    "enrollmentDate": "2026-05-28",
    "avatarColor": "bg-indigo-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-184_1",
          "amount": 2500,
          "method": "UPI",
          "date": "2026-05-28",
          "note": "Advance Fee (UPI 18-09-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-28",
        "formattedDate": "2026-05-28",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-186",
    "enrollmentNo": "43/5",
    "username": "SMDS43/5",
    "password": "smds@43/5",
    "name": "Shobiya",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "06:00 AM",
    "status": "present",
    "phone": "9790686601",
    "enrollmentDate": "2026-05-28",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-185_1",
          "amount": 2500,
          "method": "UPI",
          "date": "2026-05-28",
          "note": "Advance Fee (UPI)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-05-28",
        "formattedDate": "2026-05-28",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-187",
    "enrollmentNo": "1/6",
    "username": "SMDS1/6",
    "password": "smds@1/6",
    "name": "Yakkesh",
    "initials": "Y",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "07:00 AM",
    "status": "present",
    "phone": "9042014644",
    "enrollmentDate": "2026-06-01",
    "avatarColor": "bg-blue-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-186_1",
          "amount": 2500,
          "method": "Cash",
          "date": "2026-06-01",
          "note": "Advance Fee Paid"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-01",
        "formattedDate": "2026-06-01",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-188",
    "enrollmentNo": "2/6",
    "username": "SMDS2/6",
    "password": "smds@2/6",
    "name": "Abijith",
    "initials": "A",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "08:00 AM",
    "status": "present",
    "phone": "9150792038",
    "enrollmentDate": "2026-06-02",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-187_1",
          "amount": 8000,
          "method": "Cash",
          "date": "2026-06-02",
          "note": "Advance Fee (CASH)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-02",
        "formattedDate": "2026-06-02",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-189",
    "enrollmentNo": "3/6",
    "username": "SMDS3/6",
    "password": "smds@3/6",
    "name": "Nadhiya",
    "initials": "N",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_12",
    "time": "09:00 AM",
    "status": "present",
    "phone": "9865642762",
    "enrollmentDate": "2026-06-03",
    "avatarColor": "bg-purple-600",
    "remark": "TRAINNING ONLY",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 6000,
      "paid": 6000,
      "history": [
        {
          "id": "p_ST-188_1",
          "amount": 6000,
          "method": "UPI",
          "date": "2026-06-03",
          "note": "Advance Fee (UPI 06-06-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-03",
        "formattedDate": "2026-06-03",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-190",
    "enrollmentNo": "4/6",
    "username": "SMDS4/6",
    "password": "smds@4/6",
    "name": "Varshini",
    "initials": "V",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "10:00 AM",
    "status": "present",
    "phone": "9842330848",
    "enrollmentDate": "2026-06-04",
    "avatarColor": "bg-amber-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-189_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-06-04",
          "note": "Advance Fee (UPI 09-06-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-04",
        "formattedDate": "2026-06-04",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-191",
    "enrollmentNo": "5/6",
    "username": "SMDS5/6",
    "password": "smds@5/6",
    "name": "Gokulkannan",
    "initials": "G",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "04:00 PM",
    "status": "present",
    "phone": "9597935082",
    "enrollmentDate": "2026-06-05",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-190_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-06-05",
          "note": "Advance Fee (UPI 09-06-26/ 20-07-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-05",
        "formattedDate": "2026-06-05",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-192",
    "enrollmentNo": "6/6",
    "username": "SMDS6/6",
    "password": "smds@6/6",
    "name": "Prakash",
    "initials": "P",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "05:00 PM",
    "status": "present",
    "phone": "8675703106",
    "enrollmentDate": "2026-06-06",
    "avatarColor": "bg-teal-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-191_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-06-06",
          "note": "Advance Fee (UPI 03-06-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-06",
        "formattedDate": "2026-06-06",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-193",
    "enrollmentNo": "7/6",
    "username": "SMDS7/6",
    "password": "smds@7/6",
    "name": "Rajeshwari",
    "initials": "R",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8_single",
    "time": "06:00 PM",
    "status": "present",
    "phone": "8489669924",
    "enrollmentDate": "2026-06-07",
    "avatarColor": "bg-indigo-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-192_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-06-07",
          "note": "Advance Fee (UPI 09-06-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-07",
        "formattedDate": "2026-06-07",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-194",
    "enrollmentNo": "8/6",
    "username": "SMDS8/6",
    "password": "smds@8/6",
    "name": "Harinisri",
    "initials": "H",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "06:00 AM",
    "status": "present",
    "phone": "9894888495",
    "enrollmentDate": "2026-06-08",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-193_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-06-08",
          "note": "Advance Fee (UPI 10-06-26 / 18-07-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-08",
        "formattedDate": "2026-06-08",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-195",
    "enrollmentNo": "9/6",
    "username": "SMDS9/6",
    "password": "smds@9/6",
    "name": "Sathiya",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "07:00 AM",
    "status": "present",
    "phone": "9353940689",
    "enrollmentDate": "2026-06-09",
    "avatarColor": "bg-blue-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-194_1",
          "amount": 8000,
          "method": "Cash",
          "date": "2026-06-09",
          "note": "Advance Fee (CASH 10-06-26/15-06-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-09",
        "formattedDate": "2026-06-09",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-196",
    "enrollmentNo": "10/6",
    "username": "SMDS10/6",
    "password": "smds@10/6",
    "name": "Vinothini",
    "initials": "V",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "08:00 AM",
    "status": "present",
    "phone": "6381027202",
    "enrollmentDate": "2026-06-10",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-195_1",
          "amount": 2500,
          "method": "UPI",
          "date": "2026-06-10",
          "note": "Advance Fee (UPI 10-06-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-10",
        "formattedDate": "2026-06-10",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-197",
    "enrollmentNo": "11/6",
    "username": "SMDS11/6",
    "password": "smds@11/6",
    "name": "Tanushree",
    "initials": "T",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "09:00 AM",
    "status": "present",
    "phone": "9952710620",
    "enrollmentDate": "2026-06-11",
    "avatarColor": "bg-purple-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-196_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-06-11",
          "note": "Advance Fee (CASH 10-06-26 / UPI 28-09-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-11",
        "formattedDate": "2026-06-11",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-198",
    "enrollmentNo": "12/6",
    "username": "SMDS12/6",
    "password": "smds@12/6",
    "name": "Dusyanth",
    "initials": "D",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "10:00 AM",
    "status": "present",
    "phone": "8883160292",
    "enrollmentDate": "2026-06-12",
    "avatarColor": "bg-amber-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 7600,
      "paid": 7600,
      "history": [
        {
          "id": "p_ST-197_1",
          "amount": 7600,
          "method": "Cash",
          "date": "2026-06-12",
          "note": "Advance Fee (CASH 12-06-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-12",
        "formattedDate": "2026-06-12",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-199",
    "enrollmentNo": "13/6",
    "username": "SMDS13/6",
    "password": "smds@13/6",
    "name": "Jeevasundran",
    "initials": "J",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "04:00 PM",
    "status": "present",
    "phone": "7339164121",
    "enrollmentDate": "2026-06-13",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-198_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-06-13",
          "note": "Advance Fee (UPI 13-06-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-13",
        "formattedDate": "2026-06-13",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-200",
    "enrollmentNo": "14/6",
    "username": "SMDS14/6",
    "password": "smds@14/6",
    "name": "Meera Gk",
    "initials": "MG",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "05:00 PM",
    "status": "present",
    "phone": "9894888495",
    "enrollmentDate": "2026-06-14",
    "avatarColor": "bg-teal-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-199_1",
          "amount": 2500,
          "method": "UPI",
          "date": "2026-06-14",
          "note": "Advance Fee (UPI 13-06-26 / 04-08-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-14",
        "formattedDate": "2026-06-14",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-201",
    "enrollmentNo": "15/6",
    "username": "SMDS15/6",
    "password": "smds@15/6",
    "name": "Prabha",
    "initials": "P",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "06:00 PM",
    "status": "present",
    "phone": "9025975594",
    "enrollmentDate": "2026-06-15",
    "avatarColor": "bg-indigo-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 6500,
      "paid": 6500,
      "history": [
        {
          "id": "p_ST-200_1",
          "amount": 6500,
          "method": "UPI",
          "date": "2026-06-15",
          "note": "Advance Fee (UPI 17-06-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-15",
        "formattedDate": "2026-06-15",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-202",
    "enrollmentNo": "16/6",
    "username": "SMDS16/6",
    "password": "smds@16/6",
    "name": "Kavinmathy",
    "initials": "K",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8_single",
    "time": "06:00 AM",
    "status": "present",
    "phone": "9894130362",
    "enrollmentDate": "2026-06-16",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 7500,
      "paid": 7500,
      "history": [
        {
          "id": "p_ST-201_1",
          "amount": 7500,
          "method": "UPI",
          "date": "2026-06-16",
          "note": "Advance Fee (CASH / UPI 18-07-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-16",
        "formattedDate": "2026-06-16",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-203",
    "enrollmentNo": "17/6",
    "username": "SMDS17/6",
    "password": "smds@17/6",
    "name": "Ganeshmorthy",
    "initials": "G",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_12",
    "time": "07:00 AM",
    "status": "present",
    "phone": "9894130362",
    "enrollmentDate": "2026-06-17",
    "avatarColor": "bg-blue-600",
    "remark": "TRAINNING ONLY",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 5500,
      "paid": 5500,
      "history": [
        {
          "id": "p_ST-202_1",
          "amount": 5500,
          "method": "UPI",
          "date": "2026-06-17",
          "note": "Advance Fee (UPI 18-07-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-17",
        "formattedDate": "2026-06-17",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-204",
    "enrollmentNo": "18/6",
    "username": "SMDS18/6",
    "password": "smds@18/6",
    "name": "Manjula",
    "initials": "M",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "08:00 AM",
    "status": "pending",
    "phone": "9944731316",
    "enrollmentDate": "2026-06-18",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-203_1",
          "amount": 4000,
          "method": "UPI",
          "date": "2026-06-18",
          "note": "Advance Fee (UPI 13-06-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-18",
        "formattedDate": "2026-06-18",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-205",
    "enrollmentNo": "19/6",
    "username": "SMDS19/6",
    "password": "smds@19/6",
    "name": "Sudha V",
    "initials": "SV",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "09:00 AM",
    "status": "present",
    "phone": "7639531636",
    "enrollmentDate": "2026-06-19",
    "avatarColor": "bg-purple-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-204_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-06-19",
          "note": "Advance Fee (UPI 15-06-26 / cash 28-09-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-19",
        "formattedDate": "2026-06-19",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-206",
    "enrollmentNo": "20/6",
    "username": "SMDS20/6",
    "password": "smds@20/6",
    "name": "Aravinthan",
    "initials": "A",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "10:00 AM",
    "status": "present",
    "phone": "7708306257",
    "enrollmentDate": "2026-06-20",
    "avatarColor": "bg-amber-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-205_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-06-20",
          "note": "Advance Fee (UPI 17-06-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-20",
        "formattedDate": "2026-06-20",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-207",
    "enrollmentNo": "21/6",
    "username": "SMDS21/6",
    "password": "smds@21/6",
    "name": "Gobinath",
    "initials": "G",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_12",
    "time": "04:00 PM",
    "status": "present",
    "phone": "8807368608",
    "enrollmentDate": "2026-06-21",
    "avatarColor": "bg-rose-600",
    "remark": "TRAINNING ONLY",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 6000,
      "paid": 6000,
      "history": [
        {
          "id": "p_ST-206_1",
          "amount": 6000,
          "method": "UPI",
          "date": "2026-06-21",
          "note": "Advance Fee (UPI 16-06-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-21",
        "formattedDate": "2026-06-21",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-208",
    "enrollmentNo": "22/6",
    "username": "SMDS22/6",
    "password": "smds@22/6",
    "name": "Vasudevan",
    "initials": "V",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "05:00 PM",
    "status": "present",
    "phone": "9840540681",
    "enrollmentDate": "2026-06-22",
    "avatarColor": "bg-teal-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-207_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-06-22",
          "note": "Advance Fee (UPI 18-06-26 / 21-09-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-22",
        "formattedDate": "2026-06-22",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-209",
    "enrollmentNo": "23/6",
    "username": "SMDS23/6",
    "password": "smds@23/6",
    "name": "Naveen R",
    "initials": "NR",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_2",
    "time": "06:00 PM",
    "status": "present",
    "phone": "9600735678",
    "enrollmentDate": "2026-06-23",
    "avatarColor": "bg-indigo-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 3000,
      "paid": 3000,
      "history": [
        {
          "id": "p_ST-208_1",
          "amount": 3000,
          "method": "UPI",
          "date": "2026-06-23",
          "note": "Advance Fee (UPI 19-06-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-23",
        "formattedDate": "2026-06-23",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-210",
    "enrollmentNo": "24/6",
    "username": "SMDS24/6",
    "password": "smds@24/6",
    "name": "Vinitha",
    "initials": "V",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8_single",
    "time": "06:00 AM",
    "status": "pending",
    "phone": "9384484104",
    "enrollmentDate": "2026-06-24",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-209_1",
          "amount": 4000,
          "method": "UPI",
          "date": "2026-06-24",
          "note": "Advance Fee (UPI 19-06-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-24",
        "formattedDate": "2026-06-24",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-211",
    "enrollmentNo": "25/6",
    "username": "SMDS25/6",
    "password": "smds@25/6",
    "name": "Saranya P",
    "initials": "SP",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "07:00 AM",
    "status": "present",
    "phone": "8344777435",
    "enrollmentDate": "2026-06-25",
    "avatarColor": "bg-blue-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-210_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-06-25",
          "note": "Advance Fee (UPI 22-06-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-25",
        "formattedDate": "2026-06-25",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-212",
    "enrollmentNo": "26/6",
    "username": "SMDS26/6",
    "password": "smds@26/6",
    "name": "Sindhu",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "08:00 AM",
    "status": "present",
    "phone": "9659175778",
    "enrollmentDate": "2026-06-26",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 9000,
      "paid": 9000,
      "history": [
        {
          "id": "p_ST-211_1",
          "amount": 9000,
          "method": "UPI",
          "date": "2026-06-26",
          "note": "Advance Fee (UPI 14-06-26/UPI 10-8-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-26",
        "formattedDate": "2026-06-26",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-213",
    "enrollmentNo": "27/6",
    "username": "SMDS27/6",
    "password": "smds@27/6",
    "name": "Sanjeev",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "09:00 AM",
    "status": "present",
    "phone": "9080616187",
    "enrollmentDate": "2026-06-27",
    "avatarColor": "bg-purple-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-212_1",
          "amount": 8000,
          "method": "Cash",
          "date": "2026-06-27",
          "note": "Advance Fee (CASH 24-06-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-27",
        "formattedDate": "2026-06-27",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-214",
    "enrollmentNo": "28/6",
    "username": "SMDS28/6",
    "password": "smds@28/6",
    "name": "Vinoth V",
    "initials": "VV",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8_single",
    "time": "10:00 AM",
    "status": "present",
    "phone": "9080983520",
    "enrollmentDate": "2026-06-28",
    "avatarColor": "bg-amber-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-213_1",
          "amount": 8000,
          "method": "Cash",
          "date": "2026-06-28",
          "note": "Advance Fee (CASH 17-06-26 / 04-08-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-28",
        "formattedDate": "2026-06-28",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-215",
    "enrollmentNo": "29/6",
    "username": "SMDS29/6",
    "password": "smds@29/6",
    "name": "Ruba",
    "initials": "R",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "04:00 PM",
    "status": "present",
    "phone": "9965227195",
    "enrollmentDate": "2026-06-28",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-214_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-06-28",
          "note": "Advance Fee (UPI / CASH)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-28",
        "formattedDate": "2026-06-28",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-216",
    "enrollmentNo": "30/6",
    "username": "SMDS30/6",
    "password": "smds@30/6",
    "name": "Rishi",
    "initials": "R",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "05:00 PM",
    "status": "present",
    "phone": "6380958903",
    "enrollmentDate": "2026-06-28",
    "avatarColor": "bg-teal-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-215_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-06-28",
          "note": "Advance Fee (UPI 22-06-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-28",
        "formattedDate": "2026-06-28",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-217",
    "enrollmentNo": "31/6",
    "username": "SMDS31/6",
    "password": "smds@31/6",
    "name": "Mahendran",
    "initials": "M",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_12",
    "time": "06:00 PM",
    "status": "present",
    "phone": "9842200000",
    "enrollmentDate": "2026-06-28",
    "avatarColor": "bg-indigo-600",
    "remark": "TRAINNING ONLY",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 6000,
      "paid": 6000,
      "history": [
        {
          "id": "p_ST-216_1",
          "amount": 6000,
          "method": "UPI",
          "date": "2026-06-28",
          "note": "Advance Fee (UPI)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-28",
        "formattedDate": "2026-06-28",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-218",
    "enrollmentNo": "32/6",
    "username": "SMDS32/6",
    "password": "smds@32/6",
    "name": "Moses",
    "initials": "M",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "06:00 AM",
    "status": "present",
    "phone": "8870235113",
    "enrollmentDate": "2026-06-28",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-217_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-06-28",
          "note": "Advance Fee (UPI 04-08-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-28",
        "formattedDate": "2026-06-28",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-219",
    "enrollmentNo": "33/6",
    "username": "SMDS33/6",
    "password": "smds@33/6",
    "name": "Gunal",
    "initials": "G",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "07:00 AM",
    "status": "present",
    "phone": "8124290175",
    "enrollmentDate": "2026-06-28",
    "avatarColor": "bg-blue-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-218_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-06-28",
          "note": "Advance Fee (UPI 15-06-26 / 01-08-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-28",
        "formattedDate": "2026-06-28",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-220",
    "enrollmentNo": "34/6",
    "username": "SMDS34/6",
    "password": "smds@34/6",
    "name": "Deepa",
    "initials": "D",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8_single",
    "time": "08:00 AM",
    "status": "present",
    "phone": "9600221090",
    "enrollmentDate": "2026-06-28",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-219_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-06-28",
          "note": "Advance Fee (UPI)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-28",
        "formattedDate": "2026-06-28",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-221",
    "enrollmentNo": "35/6",
    "username": "SMDS35/6",
    "password": "smds@35/6",
    "name": "Divya",
    "initials": "D",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_12",
    "time": "09:00 AM",
    "status": "present",
    "phone": "9600221090",
    "enrollmentDate": "2026-06-28",
    "avatarColor": "bg-purple-600",
    "remark": "TRAINNING ONLY",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 5000,
      "paid": 5000,
      "history": [
        {
          "id": "p_ST-220_1",
          "amount": 5000,
          "method": "UPI",
          "date": "2026-06-28",
          "note": "Advance Fee (UPI)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-28",
        "formattedDate": "2026-06-28",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-222",
    "enrollmentNo": "36/6",
    "username": "SMDS36/6",
    "password": "smds@36/6",
    "name": "Swatika",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_12",
    "time": "10:00 AM",
    "status": "present",
    "phone": "9600221090",
    "enrollmentDate": "2026-06-28",
    "avatarColor": "bg-amber-600",
    "remark": "TRAINNING ONLY",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 5000,
      "paid": 5000,
      "history": [
        {
          "id": "p_ST-221_1",
          "amount": 5000,
          "method": "UPI",
          "date": "2026-06-28",
          "note": "Advance Fee (UPI)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-28",
        "formattedDate": "2026-06-28",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-223",
    "enrollmentNo": "37/6",
    "username": "SMDS37/6",
    "password": "smds@37/6",
    "name": "Aerokiya Jero",
    "initials": "AJ",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "04:00 PM",
    "status": "present",
    "phone": "8489861429",
    "enrollmentDate": "2026-06-28",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-222_1",
          "amount": 2500,
          "method": "UPI",
          "date": "2026-06-28",
          "note": "Advance Fee (UPI 14-06-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-28",
        "formattedDate": "2026-06-28",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-224",
    "enrollmentNo": "38/6",
    "username": "SMDS38/6",
    "password": "smds@38/6",
    "name": "Santhosh Kumar",
    "initials": "SK",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "05:00 PM",
    "status": "present",
    "phone": "9597215009",
    "enrollmentDate": "2026-06-28",
    "avatarColor": "bg-teal-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-223_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-06-28",
          "note": "Advance Fee (UPI 22-06-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-28",
        "formattedDate": "2026-06-28",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-225",
    "enrollmentNo": "39/6",
    "username": "SMDS39/6",
    "password": "smds@39/6",
    "name": "Vignesh",
    "initials": "V",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "06:00 PM",
    "status": "present",
    "phone": "8778084682",
    "enrollmentDate": "2026-06-28",
    "avatarColor": "bg-indigo-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-224_1",
          "amount": 2500,
          "method": "UPI",
          "date": "2026-06-28",
          "note": "Advance Fee (UPI 22-06-26 / 28-06-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-28",
        "formattedDate": "2026-06-28",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-226",
    "enrollmentNo": "40/6",
    "username": "SMDS40/6",
    "password": "smds@40/6",
    "name": "Manojkumar",
    "initials": "M",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "06:00 AM",
    "status": "present",
    "phone": "6383821265",
    "enrollmentDate": "2026-06-28",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-225_1",
          "amount": 2500,
          "method": "UPI",
          "date": "2026-06-28",
          "note": "Advance Fee (UPI 29-06-26/24-08-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-28",
        "formattedDate": "2026-06-28",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-227",
    "enrollmentNo": "41/6",
    "username": "SMDS41/6",
    "password": "smds@41/6",
    "name": "Murugesan",
    "initials": "M",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "07:00 AM",
    "status": "present",
    "phone": "9790032381",
    "enrollmentDate": "2026-06-28",
    "avatarColor": "bg-blue-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-226_1",
          "amount": 2500,
          "method": "Cash",
          "date": "2026-06-28",
          "note": "Advance Fee Paid"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-28",
        "formattedDate": "2026-06-28",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-228",
    "enrollmentNo": "42/6",
    "username": "SMDS42/6",
    "password": "smds@42/6",
    "name": "Sreedevi",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "08:00 AM",
    "status": "present",
    "phone": "7402575730",
    "enrollmentDate": "2026-06-28",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-227_1",
          "amount": 8000,
          "method": "Cash",
          "date": "2026-06-28",
          "note": "Advance Fee (CASH 30-06-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-06-28",
        "formattedDate": "2026-06-28",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-229",
    "enrollmentNo": "1/7",
    "username": "SMDS1/7",
    "password": "smds@1/7",
    "name": "Karthikayini",
    "initials": "K",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "09:00 AM",
    "status": "pending",
    "phone": "9976677214",
    "enrollmentDate": "2026-07-01",
    "avatarColor": "bg-purple-600",
    "remark": "TEST",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-228_1",
          "amount": 4000,
          "method": "UPI",
          "date": "2026-07-01",
          "note": "Advance Fee (UPI 03-07-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-01",
        "formattedDate": "2026-07-01",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-230",
    "enrollmentNo": "2/7",
    "username": "SMDS2/7",
    "password": "smds@2/7",
    "name": "Prathiksha",
    "initials": "P",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "10:00 AM",
    "status": "pending",
    "phone": "9677507908",
    "enrollmentDate": "2026-07-02",
    "avatarColor": "bg-amber-600",
    "remark": "TEST",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-229_1",
          "amount": 4000,
          "method": "Cash",
          "date": "2026-07-02",
          "note": "Advance Fee (CASH 03-07-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-02",
        "formattedDate": "2026-07-02",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-231",
    "enrollmentNo": "3/7",
    "username": "SMDS3/7",
    "password": "smds@3/7",
    "name": "Vijay Aathithya",
    "initials": "VA",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "04:00 PM",
    "status": "present",
    "phone": "8098595967",
    "enrollmentDate": "2026-07-03",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-230_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-07-03",
          "note": "Advance Fee (UPI 01-07-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-03",
        "formattedDate": "2026-07-03",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-232",
    "enrollmentNo": "4/7",
    "username": "SMDS4/7",
    "password": "smds@4/7",
    "name": "Kowsalya",
    "initials": "K",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "05:00 PM",
    "status": "present",
    "phone": "6382920981",
    "enrollmentDate": "2026-07-04",
    "avatarColor": "bg-teal-600",
    "remark": "TEST",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-231_1",
          "amount": 8000,
          "method": "Cash",
          "date": "2026-07-04",
          "note": "Advance Fee (CASH 02-07-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-04",
        "formattedDate": "2026-07-04",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-233",
    "enrollmentNo": "5/7",
    "username": "SMDS5/7",
    "password": "smds@5/7",
    "name": "Kavan Kirat",
    "initials": "KK",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "06:00 PM",
    "status": "pending",
    "phone": "9842737697",
    "enrollmentDate": "2026-07-05",
    "avatarColor": "bg-indigo-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-232_1",
          "amount": 4000,
          "method": "UPI",
          "date": "2026-07-05",
          "note": "Advance Fee (UPI 02-07-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-05",
        "formattedDate": "2026-07-05",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-234",
    "enrollmentNo": "6/7",
    "username": "SMDS6/7",
    "password": "smds@6/7",
    "name": "Bhavin",
    "initials": "B",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_12",
    "time": "06:00 AM",
    "status": "pending",
    "phone": "9486815082",
    "enrollmentDate": "2026-07-06",
    "avatarColor": "bg-orange-500",
    "remark": "TRAINNING ONLY",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 6000,
      "paid": 5500,
      "history": [
        {
          "id": "p_ST-233_1",
          "amount": 5500,
          "method": "UPI",
          "date": "2026-07-06",
          "note": "Advance Fee (UPI 03-07-26 / 27-07-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-06",
        "formattedDate": "2026-07-06",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-235",
    "enrollmentNo": "7/7",
    "username": "SMDS7/7",
    "password": "smds@7/7",
    "name": "Emayavarma P",
    "initials": "EP",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "07:00 AM",
    "status": "present",
    "phone": "9943440206",
    "enrollmentDate": "2026-07-07",
    "avatarColor": "bg-blue-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-234_1",
          "amount": 2500,
          "method": "UPI",
          "date": "2026-07-07",
          "note": "Advance Fee (UPI 03-07-26 / 27-07-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-07",
        "formattedDate": "2026-07-07",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-236",
    "enrollmentNo": "8/7",
    "username": "SMDS8/7",
    "password": "smds@8/7",
    "name": "Rahulkarthick",
    "initials": "R",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "08:00 AM",
    "status": "present",
    "phone": "9942668251",
    "enrollmentDate": "2026-07-08",
    "avatarColor": "bg-emerald-600",
    "remark": "HARSHINI'S BROTHER",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4500,
      "paid": 4500,
      "history": [
        {
          "id": "p_ST-235_1",
          "amount": 4500,
          "method": "Cash",
          "date": "2026-07-08",
          "note": "Advance Fee (CASH 11-08-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-08",
        "formattedDate": "2026-07-08",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-237",
    "enrollmentNo": "9/7",
    "username": "SMDS9/7",
    "password": "smds@9/7",
    "name": "Subitha",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "09:00 AM",
    "status": "present",
    "phone": "9994269968",
    "enrollmentDate": "2026-07-09",
    "avatarColor": "bg-purple-600",
    "remark": "TEST",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-236_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-07-09",
          "note": "Advance Fee (UPI 07-07-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-09",
        "formattedDate": "2026-07-09",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-238",
    "enrollmentNo": "10/7",
    "username": "SMDS10/7",
    "password": "smds@10/7",
    "name": "Sanjay",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8_single",
    "time": "10:00 AM",
    "status": "pending",
    "phone": "7868954507",
    "enrollmentDate": "2026-07-10",
    "avatarColor": "bg-amber-600",
    "remark": "TEST COMPLETED PAYMENT PENDING",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 7500,
      "paid": 6500,
      "history": [
        {
          "id": "p_ST-237_1",
          "amount": 6500,
          "method": "UPI",
          "date": "2026-07-10",
          "note": "Advance Fee (UPI 06-07-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-10",
        "formattedDate": "2026-07-10",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-239",
    "enrollmentNo": "11/7",
    "username": "SMDS11/7",
    "password": "smds@11/7",
    "name": "Ramachandran",
    "initials": "R",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "04:00 PM",
    "status": "present",
    "phone": "8608782581",
    "enrollmentDate": "2026-07-11",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-238_1",
          "amount": 2500,
          "method": "UPI",
          "date": "2026-07-11",
          "note": "Advance Fee (UPI 07-07-26 / 27-09-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-11",
        "formattedDate": "2026-07-11",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-240",
    "enrollmentNo": "12/7",
    "username": "SMDS12/7",
    "password": "smds@12/7",
    "name": "Karthi M 9,o0 Am",
    "initials": "KM",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8_single",
    "time": "05:00 PM",
    "status": "pending",
    "phone": "9788452288",
    "enrollmentDate": "2026-07-12",
    "avatarColor": "bg-teal-600",
    "remark": "TEST",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-239_1",
          "amount": 4000,
          "method": "UPI",
          "date": "2026-07-12",
          "note": "Advance Fee (UPI 10-07-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-12",
        "formattedDate": "2026-07-12",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-241",
    "enrollmentNo": "13/7",
    "username": "SMDS13/7",
    "password": "smds@13/7",
    "name": "Susithra B",
    "initials": "SB",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "06:00 PM",
    "status": "present",
    "phone": "6384383303",
    "enrollmentDate": "2026-07-13",
    "avatarColor": "bg-indigo-600",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4500,
      "paid": 4500,
      "history": [
        {
          "id": "p_ST-240_1",
          "amount": 4500,
          "method": "UPI",
          "date": "2026-07-13",
          "note": "Advance Fee (UPI 10-07-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-13",
        "formattedDate": "2026-07-13",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-242",
    "enrollmentNo": "14/7",
    "username": "SMDS14/7",
    "password": "smds@14/7",
    "name": "Kowshika",
    "initials": "K",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8_single",
    "time": "06:00 AM",
    "status": "present",
    "phone": "9629092938",
    "enrollmentDate": "2026-07-14",
    "avatarColor": "bg-orange-500",
    "remark": "TEST",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-241_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-07-14",
          "note": "Advance Fee (UPI 10-07-26 / 21-09-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-14",
        "formattedDate": "2026-07-14",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-243",
    "enrollmentNo": "15/7",
    "username": "SMDS15/7",
    "password": "smds@15/7",
    "name": "Harshan Barath",
    "initials": "HB",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "07:00 AM",
    "status": "present",
    "phone": "9843024576",
    "enrollmentDate": "2026-07-15",
    "avatarColor": "bg-blue-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-242_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-07-15",
          "note": "Advance Fee (UPI 11-07/    21-09/cash 21-09)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-15",
        "formattedDate": "2026-07-15",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-244",
    "enrollmentNo": "16/7",
    "username": "SMDS16/7",
    "password": "smds@16/7",
    "name": "Ashok",
    "initials": "A",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8_single",
    "time": "08:00 AM",
    "status": "pending",
    "phone": "8270367098",
    "enrollmentDate": "2026-07-16",
    "avatarColor": "bg-emerald-600",
    "remark": "LICENCE MISSING NEW LLR",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-243_1",
          "amount": 4000,
          "method": "UPI",
          "date": "2026-07-16",
          "note": "Advance Fee (UPI 11-07-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-16",
        "formattedDate": "2026-07-16",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-245",
    "enrollmentNo": "17/7",
    "username": "SMDS17/7",
    "password": "smds@17/7",
    "name": "Yuvarani",
    "initials": "Y",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "09:00 AM",
    "status": "present",
    "phone": "8870666278",
    "enrollmentDate": "2026-07-17",
    "avatarColor": "bg-purple-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-244_1",
          "amount": 2500,
          "method": "UPI",
          "date": "2026-07-17",
          "note": "Advance Fee (UPI 13-06-26 / 24-08-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-17",
        "formattedDate": "2026-07-17",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-246",
    "enrollmentNo": "18/7",
    "username": "SMDS18/7",
    "password": "smds@18/7",
    "name": "Dhanalakshmi",
    "initials": "D",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "10:00 AM",
    "status": "present",
    "phone": "9944657923",
    "enrollmentDate": "2026-07-18",
    "avatarColor": "bg-amber-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-245_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-07-18",
          "note": "Advance Fee (UPI)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-18",
        "formattedDate": "2026-07-18",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-247",
    "enrollmentNo": "19/7",
    "username": "SMDS19/7",
    "password": "smds@19/7",
    "name": "Rajasekar(jayam Agence)",
    "initials": "RA",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "04:00 PM",
    "status": "present",
    "phone": "9597255235",
    "enrollmentDate": "2026-07-19",
    "avatarColor": "bg-rose-600",
    "remark": "TEST",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4500,
      "paid": 4500,
      "history": [
        {
          "id": "p_ST-246_1",
          "amount": 4500,
          "method": "UPI",
          "date": "2026-07-19",
          "note": "Advance Fee (CASH 15-07 UPI 18-09-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-19",
        "formattedDate": "2026-07-19",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-248",
    "enrollmentNo": "20/7",
    "username": "SMDS20/7",
    "password": "smds@20/7",
    "name": "Selvi",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "05:00 PM",
    "status": "present",
    "phone": "9659448209",
    "enrollmentDate": "2026-07-20",
    "avatarColor": "bg-teal-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-247_1",
          "amount": 2500,
          "method": "UPI",
          "date": "2026-07-20",
          "note": "Advance Fee (UPI 13-07-26 / 24-08-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-20",
        "formattedDate": "2026-07-20",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-249",
    "enrollmentNo": "21/7",
    "username": "SMDS21/7",
    "password": "smds@21/7",
    "name": "Yogeshbabu",
    "initials": "Y",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "06:00 PM",
    "status": "present",
    "phone": "7092932519",
    "enrollmentDate": "2026-07-21",
    "avatarColor": "bg-indigo-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-248_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-07-21",
          "note": "Advance Fee (UPI 17-07-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-21",
        "formattedDate": "2026-07-21",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-250",
    "enrollmentNo": "22/7",
    "username": "SMDS22/7",
    "password": "smds@22/7",
    "name": "Anandh",
    "initials": "A",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "06:00 AM",
    "status": "pending",
    "phone": "9791972068",
    "enrollmentDate": "2026-07-22",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2000,
      "history": [
        {
          "id": "p_ST-249_1",
          "amount": 2000,
          "method": "Cash",
          "date": "2026-07-22",
          "note": "Advance Fee Paid"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-22",
        "formattedDate": "2026-07-22",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-251",
    "enrollmentNo": "23/7",
    "username": "SMDS23/7",
    "password": "smds@23/7",
    "name": "Swathisree",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "07:00 AM",
    "status": "present",
    "phone": "8925692707",
    "enrollmentDate": "2026-07-23",
    "avatarColor": "bg-blue-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-250_1",
          "amount": 2500,
          "method": "UPI",
          "date": "2026-07-23",
          "note": "Advance Fee (UPI 15-07-26/17-08-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-23",
        "formattedDate": "2026-07-23",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-252",
    "enrollmentNo": "24/7",
    "username": "SMDS24/7",
    "password": "smds@24/7",
    "name": "Aravinth V",
    "initials": "AV",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8_single",
    "time": "08:00 AM",
    "status": "pending",
    "phone": "9655723806",
    "enrollmentDate": "2026-07-24",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 6500,
      "history": [
        {
          "id": "p_ST-251_1",
          "amount": 6500,
          "method": "UPI",
          "date": "2026-07-24",
          "note": "Advance Fee (UPI)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-24",
        "formattedDate": "2026-07-24",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-253",
    "enrollmentNo": "25/7",
    "username": "SMDS25/7",
    "password": "smds@25/7",
    "name": "Pon Sivasandhiran",
    "initials": "PS",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "09:00 AM",
    "status": "present",
    "phone": "6374128145",
    "enrollmentDate": "2026-07-25",
    "avatarColor": "bg-purple-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-252_1",
          "amount": 2500,
          "method": "UPI",
          "date": "2026-07-25",
          "note": "Advance Fee (UPI 24-08-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-25",
        "formattedDate": "2026-07-25",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-254",
    "enrollmentNo": "26/7",
    "username": "SMDS26/7",
    "password": "smds@26/7",
    "name": "Sakshin Sai",
    "initials": "SS",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "10:00 AM",
    "status": "pending",
    "phone": "9842938390",
    "enrollmentDate": "2026-07-26",
    "avatarColor": "bg-amber-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-253_1",
          "amount": 4000,
          "method": "UPI",
          "date": "2026-07-26",
          "note": "Advance Fee (UPI 17-07-06)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-26",
        "formattedDate": "2026-07-26",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-255",
    "enrollmentNo": "27/7",
    "username": "SMDS27/7",
    "password": "smds@27/7",
    "name": "Kumar M",
    "initials": "KM",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8_single",
    "time": "04:00 PM",
    "status": "present",
    "phone": "9842200000",
    "enrollmentDate": "2026-07-27",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-254_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-07-27",
          "note": "Advance Fee (\"UPI 18-07-26/)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-27",
        "formattedDate": "2026-07-27",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-256",
    "enrollmentNo": "28/7",
    "username": "SMDS28/7",
    "password": "smds@28/7",
    "name": "Baranidharan",
    "initials": "B",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "05:00 PM",
    "status": "present",
    "phone": "7810042802",
    "enrollmentDate": "2026-07-28",
    "avatarColor": "bg-teal-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-255_1",
          "amount": 8000,
          "method": "Cash",
          "date": "2026-07-28",
          "note": "Advance Fee (cash)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-28",
        "formattedDate": "2026-07-28",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-257",
    "enrollmentNo": "29/7",
    "username": "SMDS29/7",
    "password": "smds@29/7",
    "name": "Agalya Sri",
    "initials": "AS",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "06:00 PM",
    "status": "pending",
    "phone": "8148874554",
    "enrollmentDate": "2026-07-28",
    "avatarColor": "bg-indigo-600",
    "remark": "TEST",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 7600,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-256_1",
          "amount": 4000,
          "method": "Cash",
          "date": "2026-07-28",
          "note": "Advance Fee Paid"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-28",
        "formattedDate": "2026-07-28",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-258",
    "enrollmentNo": "30/7",
    "username": "SMDS30/7",
    "password": "smds@30/7",
    "name": "Manojkumar",
    "initials": "M",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8_single",
    "time": "06:00 AM",
    "status": "pending",
    "phone": "9894115524",
    "enrollmentDate": "2026-07-28",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-257_1",
          "amount": 4000,
          "method": "UPI",
          "date": "2026-07-28",
          "note": "Advance Fee (UPI 20-07-06)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-28",
        "formattedDate": "2026-07-28",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-259",
    "enrollmentNo": "31/7",
    "username": "SMDS31/7",
    "password": "smds@31/7",
    "name": "Jayanthi",
    "initials": "J",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_12",
    "time": "07:00 AM",
    "status": "present",
    "phone": "9842200000",
    "enrollmentDate": "2026-07-28",
    "avatarColor": "bg-blue-600",
    "remark": "TRAINNING ONLY",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 6000,
      "paid": 6000,
      "history": [
        {
          "id": "p_ST-258_1",
          "amount": 6000,
          "method": "UPI",
          "date": "2026-07-28",
          "note": "Advance Fee (\"UPI 17-07-06/)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-28",
        "formattedDate": "2026-07-28",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-260",
    "enrollmentNo": "32/7",
    "username": "SMDS32/7",
    "password": "smds@32/7",
    "name": "Akshitha",
    "initials": "A",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "08:00 AM",
    "status": "present",
    "phone": "7904041267",
    "enrollmentDate": "2026-07-28",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-259_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-07-28",
          "note": "Advance Fee (UPI 21-07-26 / 19-09-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-28",
        "formattedDate": "2026-07-28",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-261",
    "enrollmentNo": "33/7",
    "username": "SMDS33/7",
    "password": "smds@33/7",
    "name": "Saranya",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_12",
    "time": "09:00 AM",
    "status": "present",
    "phone": "9976262829",
    "enrollmentDate": "2026-07-28",
    "avatarColor": "bg-purple-600",
    "remark": "TRAINNING ONLY",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 6000,
      "paid": 6000,
      "history": [
        {
          "id": "p_ST-260_1",
          "amount": 6000,
          "method": "Cash",
          "date": "2026-07-28",
          "note": "Advance Fee (CASH 21-07-26/ 24-09-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-28",
        "formattedDate": "2026-07-28",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-262",
    "enrollmentNo": "34/7",
    "username": "SMDS34/7",
    "password": "smds@34/7",
    "name": "Thendral",
    "initials": "T",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "10:00 AM",
    "status": "present",
    "phone": "7708552954",
    "enrollmentDate": "2026-07-28",
    "avatarColor": "bg-amber-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-261_1",
          "amount": 2500,
          "method": "UPI",
          "date": "2026-07-28",
          "note": "Advance Fee (upi)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-28",
        "formattedDate": "2026-07-28",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-263",
    "enrollmentNo": "35/7",
    "username": "SMDS35/7",
    "password": "smds@35/7",
    "name": "Sanjay",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "04:00 PM",
    "status": "present",
    "phone": "7502581975",
    "enrollmentDate": "2026-07-28",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-262_1",
          "amount": 8000,
          "method": "Cash",
          "date": "2026-07-28",
          "note": "Advance Fee (CASH 03-10-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-28",
        "formattedDate": "2026-07-28",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-264",
    "enrollmentNo": "36/7",
    "username": "SMDS36/7",
    "password": "smds@36/7",
    "name": "Harini(jalikatu Bakery)",
    "initials": "HB",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "05:00 PM",
    "status": "pending",
    "phone": "9443344249",
    "enrollmentDate": "2026-07-28",
    "avatarColor": "bg-teal-600",
    "remark": "NO PAYMENT",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 0,
      "history": []
    },
    "attendanceLog": [
      {
        "date": "2026-07-28",
        "formattedDate": "2026-07-28",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-265",
    "enrollmentNo": "37/7",
    "username": "SMDS37/7",
    "password": "smds@37/7",
    "name": "Ajith",
    "initials": "A",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_12",
    "time": "06:00 PM",
    "status": "pending",
    "phone": "8098883076",
    "enrollmentDate": "2026-07-28",
    "avatarColor": "bg-indigo-600",
    "remark": "TRAINNING ONLY",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 6000,
      "paid": 3000,
      "history": [
        {
          "id": "p_ST-264_1",
          "amount": 3000,
          "method": "UPI",
          "date": "2026-07-28",
          "note": "Advance Fee (UPI 27-07-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-28",
        "formattedDate": "2026-07-28",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-266",
    "enrollmentNo": "38/7",
    "username": "SMDS38/7",
    "password": "smds@38/7",
    "name": "Sanjai",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "06:00 AM",
    "status": "present",
    "phone": "8940084753",
    "enrollmentDate": "2026-07-28",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-265_1",
          "amount": 2500,
          "method": "Cash",
          "date": "2026-07-28",
          "note": "Advance Fee Paid"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-28",
        "formattedDate": "2026-07-28",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-267",
    "enrollmentNo": "39/7",
    "username": "SMDS39/7",
    "password": "smds@39/7",
    "name": "Kannan",
    "initials": "K",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_13",
    "time": "07:00 AM",
    "status": "pending",
    "phone": "7708373893",
    "enrollmentDate": "2026-07-28",
    "avatarColor": "bg-blue-600",
    "remark": "TRAINNING ONLY",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 4000,
      "paid": 3500,
      "history": [
        {
          "id": "p_ST-266_1",
          "amount": 3500,
          "method": "UPI",
          "date": "2026-07-28",
          "note": "Advance Fee (UPI 28-07-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-28",
        "formattedDate": "2026-07-28",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-268",
    "enrollmentNo": "40/7",
    "username": "SMDS40/7",
    "password": "smds@40/7",
    "name": "Rekha",
    "initials": "R",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "08:00 AM",
    "status": "present",
    "phone": "9842200000",
    "enrollmentDate": "2026-07-28",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-267_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-07-28",
          "note": "Advance Fee (\"UPI 29-07-26 /)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-28",
        "formattedDate": "2026-07-28",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-269",
    "enrollmentNo": "41/7",
    "username": "SMDS41/7",
    "password": "smds@41/7",
    "name": "Thangavel",
    "initials": "T",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8_single",
    "time": "09:00 AM",
    "status": "pending",
    "phone": "9943279985",
    "enrollmentDate": "2026-07-28",
    "avatarColor": "bg-purple-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-268_1",
          "amount": 4000,
          "method": "UPI",
          "date": "2026-07-28",
          "note": "Advance Fee (UPI 29-07-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-28",
        "formattedDate": "2026-07-28",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-270",
    "enrollmentNo": "42/7",
    "username": "SMDS42/7",
    "password": "smds@42/7",
    "name": "Rajkumar(welding)",
    "initials": "R",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "10:00 AM",
    "status": "pending",
    "phone": "8056502312",
    "enrollmentDate": "2026-07-28",
    "avatarColor": "bg-amber-600",
    "remark": "TEST",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 1700,
      "history": [
        {
          "id": "p_ST-269_1",
          "amount": 1700,
          "method": "Cash",
          "date": "2026-07-28",
          "note": "Advance Fee Paid"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-28",
        "formattedDate": "2026-07-28",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-271",
    "enrollmentNo": "43/7",
    "username": "SMDS43/7",
    "password": "smds@43/7",
    "name": "Santhosh A",
    "initials": "SA",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8_single",
    "time": "04:00 PM",
    "status": "present",
    "phone": "9940899960",
    "enrollmentDate": "2026-07-28",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-270_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-07-28",
          "note": "Advance Fee (UPI 29-07-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-28",
        "formattedDate": "2026-07-28",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-272",
    "enrollmentNo": "44/7",
    "username": "SMDS44/7",
    "password": "smds@44/7",
    "name": "Madhav",
    "initials": "M",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "05:00 PM",
    "status": "present",
    "phone": "9345480274",
    "enrollmentDate": "2026-07-28",
    "avatarColor": "bg-teal-600",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4500,
      "paid": 4500,
      "history": [
        {
          "id": "p_ST-271_1",
          "amount": 4500,
          "method": "UPI",
          "date": "2026-07-28",
          "note": "Advance Fee (UPI 29-07-26 / 19-09-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-28",
        "formattedDate": "2026-07-28",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-273",
    "enrollmentNo": "45/7",
    "username": "SMDS45/7",
    "password": "smds@45/7",
    "name": "Sathish Madesh",
    "initials": "SM",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "06:00 PM",
    "status": "pending",
    "phone": "9994027441",
    "enrollmentDate": "2026-07-28",
    "avatarColor": "bg-indigo-600",
    "remark": "TEST",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 1000,
      "history": [
        {
          "id": "p_ST-272_1",
          "amount": 1000,
          "method": "UPI",
          "date": "2026-07-28",
          "note": "Advance Fee (UPI 28-07-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-28",
        "formattedDate": "2026-07-28",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-274",
    "enrollmentNo": "46/7",
    "username": "SMDS46/7",
    "password": "smds@46/7",
    "name": "Kannan Jayapandiyan",
    "initials": "KJ",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "06:00 AM",
    "status": "pending",
    "phone": "8760588673",
    "enrollmentDate": "2026-07-28",
    "avatarColor": "bg-orange-500",
    "remark": "TEST",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 1000,
      "history": [
        {
          "id": "p_ST-273_1",
          "amount": 1000,
          "method": "UPI",
          "date": "2026-07-28",
          "note": "Advance Fee (UPI 28-07-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-28",
        "formattedDate": "2026-07-28",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-275",
    "enrollmentNo": "47/7",
    "username": "SMDS47/7",
    "password": "smds@47/7",
    "name": "Swetha S",
    "initials": "SS",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "07:00 AM",
    "status": "pending",
    "phone": "7339599453",
    "enrollmentDate": "2026-07-28",
    "avatarColor": "bg-blue-600",
    "remark": "NO PAYMENT",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-274_1",
          "amount": 4000,
          "method": "Cash",
          "date": "2026-07-28",
          "note": "Advance Fee (05/09/2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-28",
        "formattedDate": "2026-07-28",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-276",
    "enrollmentNo": "48/7",
    "username": "SMDS48/7",
    "password": "smds@48/7",
    "name": "Selvakumar",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "08:00 AM",
    "status": "present",
    "phone": "7010658038",
    "enrollmentDate": "2026-07-28",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-275_1",
          "amount": 2500,
          "method": "UPI",
          "date": "2026-07-28",
          "note": "Advance Fee (upi 15-09-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-28",
        "formattedDate": "2026-07-28",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-277",
    "enrollmentNo": "49/7",
    "username": "SMDS49/7",
    "password": "smds@49/7",
    "name": "Priyadharshini",
    "initials": "P",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "09:00 AM",
    "status": "present",
    "phone": "9842200000",
    "enrollmentDate": "2026-07-28",
    "avatarColor": "bg-purple-600",
    "remark": "NO PAYMENT",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-276_1",
          "amount": 8000,
          "method": "Cash",
          "date": "2026-07-28",
          "note": "Advance Fee (05/09/2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-28",
        "formattedDate": "2026-07-28",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-278",
    "enrollmentNo": "50/7",
    "username": "SMDS50/7",
    "password": "smds@50/7",
    "name": "Sakthi Sree",
    "initials": "SS",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "10:00 AM",
    "status": "present",
    "phone": "8248143690",
    "enrollmentDate": "2026-07-28",
    "avatarColor": "bg-amber-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-277_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-07-28",
          "note": "Advance Fee (UPI 18-07-26 / UPI 19-09-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-07-28",
        "formattedDate": "2026-07-28",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-279",
    "enrollmentNo": "1/8",
    "username": "SMDS1/8",
    "password": "smds@1/8",
    "name": "Subavarshini",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "04:00 PM",
    "status": "pending",
    "phone": "8825424348",
    "enrollmentDate": "2026-08-01",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 1000,
      "history": [
        {
          "id": "p_ST-278_1",
          "amount": 1000,
          "method": "UPI",
          "date": "2026-08-01",
          "note": "Advance Fee (UPI)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-08-01",
        "formattedDate": "2026-08-01",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-280",
    "enrollmentNo": "2/8",
    "username": "SMDS2/8",
    "password": "smds@2/8",
    "name": "Chinnasamy",
    "initials": "C",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "05:00 PM",
    "status": "present",
    "phone": "9842200000",
    "enrollmentDate": "2026-08-02",
    "avatarColor": "bg-teal-600",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4500,
      "paid": 4500,
      "history": [
        {
          "id": "p_ST-279_1",
          "amount": 4500,
          "method": "Cash",
          "date": "2026-08-02",
          "note": "Advance Fee (\"CASH 06-08-26/)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-08-02",
        "formattedDate": "2026-08-02",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-281",
    "enrollmentNo": "3/8",
    "username": "SMDS3/8",
    "password": "smds@3/8",
    "name": "Rishanth",
    "initials": "R",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "06:00 PM",
    "status": "present",
    "phone": "7010997577",
    "enrollmentDate": "2026-08-03",
    "avatarColor": "bg-indigo-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 8000,
      "history": [
        {
          "id": "p_ST-280_1",
          "amount": 8000,
          "method": "UPI",
          "date": "2026-08-03",
          "note": "Advance Fee (UPI 10-08-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-08-03",
        "formattedDate": "2026-08-03",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-282",
    "enrollmentNo": "4/8",
    "username": "SMDS4/8",
    "password": "smds@4/8",
    "name": "Prasanth Kuppu(green Field)",
    "initials": "PK",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "06:00 AM",
    "status": "present",
    "phone": "8197135303",
    "enrollmentDate": "2026-08-04",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4500,
      "paid": 4500,
      "history": [
        {
          "id": "p_ST-281_1",
          "amount": 4500,
          "method": "Cash",
          "date": "2026-08-04",
          "note": "Advance Fee (CASH)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-08-04",
        "formattedDate": "2026-08-04",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-283",
    "enrollmentNo": "5/8",
    "username": "SMDS5/8",
    "password": "smds@5/8",
    "name": "Sanjay Palanisami",
    "initials": "SP",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "07:00 AM",
    "status": "pending",
    "phone": "7418356884",
    "enrollmentDate": "2026-08-05",
    "avatarColor": "bg-blue-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-282_1",
          "amount": 4000,
          "method": "UPI",
          "date": "2026-08-05",
          "note": "Advance Fee (UPI 11-08-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-08-05",
        "formattedDate": "2026-08-05",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-284",
    "enrollmentNo": "6/8",
    "username": "SMDS6/8",
    "password": "smds@6/8",
    "name": "Saranraj",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "08:00 AM",
    "status": "present",
    "phone": "9843747845",
    "enrollmentDate": "2026-08-06",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4500,
      "paid": 4500,
      "history": [
        {
          "id": "p_ST-283_1",
          "amount": 4500,
          "method": "UPI",
          "date": "2026-08-06",
          "note": "Advance Fee (UPI 10-08-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-08-06",
        "formattedDate": "2026-08-06",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-285",
    "enrollmentNo": "7/8",
    "username": "SMDS7/8",
    "password": "smds@7/8",
    "name": "Srinidhi",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "09:00 AM",
    "status": "present",
    "phone": "8056441532",
    "enrollmentDate": "2026-08-07",
    "avatarColor": "bg-purple-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-284_1",
          "amount": 2500,
          "method": "Cash",
          "date": "2026-08-07",
          "note": "Advance Fee Paid"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-08-07",
        "formattedDate": "2026-08-07",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-286",
    "enrollmentNo": "8/8",
    "username": "SMDS8/8",
    "password": "smds@8/8",
    "name": "Naveen (ondipudur)",
    "initials": "N(",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "10:00 AM",
    "status": "present",
    "phone": "6380568386",
    "enrollmentDate": "2026-08-08",
    "avatarColor": "bg-amber-600",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4500,
      "paid": 4500,
      "history": [
        {
          "id": "p_ST-285_1",
          "amount": 4500,
          "method": "Cash",
          "date": "2026-08-08",
          "note": "Advance Fee Paid"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-08-08",
        "formattedDate": "2026-08-08",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-287",
    "enrollmentNo": "9/8",
    "username": "SMDS9/8",
    "password": "smds@9/8",
    "name": "Ganesh",
    "initials": "G",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "04:00 PM",
    "status": "present",
    "phone": "9092209817",
    "enrollmentDate": "2026-08-09",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-286_1",
          "amount": 2500,
          "method": "UPI",
          "date": "2026-08-09",
          "note": "Advance Fee (UPI 18-08)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-08-09",
        "formattedDate": "2026-08-09",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-288",
    "enrollmentNo": "10/8",
    "username": "SMDS10/8",
    "password": "smds@10/8",
    "name": "Ganesh (rajendran)",
    "initials": "G(",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "05:00 PM",
    "status": "pending",
    "phone": "8610721225",
    "enrollmentDate": "2026-08-10",
    "avatarColor": "bg-teal-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 7500,
      "paid": 0,
      "history": []
    },
    "attendanceLog": [
      {
        "date": "2026-08-10",
        "formattedDate": "2026-08-10",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-289",
    "enrollmentNo": "11/8",
    "username": "SMDS11/8",
    "password": "smds@11/8",
    "name": "Kiruthika",
    "initials": "K",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "06:00 PM",
    "status": "pending",
    "phone": "8489629219",
    "enrollmentDate": "2026-08-11",
    "avatarColor": "bg-indigo-600",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4500,
      "paid": 2000,
      "history": [
        {
          "id": "p_ST-288_1",
          "amount": 2000,
          "method": "UPI",
          "date": "2026-08-11",
          "note": "Advance Fee (UPI 18-08)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-08-11",
        "formattedDate": "2026-08-11",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-290",
    "enrollmentNo": "12/8",
    "username": "SMDS12/8",
    "password": "smds@12/8",
    "name": "Sai Suthan",
    "initials": "SS",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "06:00 AM",
    "status": "present",
    "phone": "6374903683",
    "enrollmentDate": "2026-08-12",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4500,
      "paid": 4500,
      "history": [
        {
          "id": "p_ST-289_1",
          "amount": 4500,
          "method": "UPI",
          "date": "2026-08-12",
          "note": "Advance Fee (UPI 18-08)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-08-12",
        "formattedDate": "2026-08-12",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-291",
    "enrollmentNo": "13/8",
    "username": "SMDS13/8",
    "password": "smds@13/8",
    "name": "Venkatesh",
    "initials": "V",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "07:00 AM",
    "status": "pending",
    "phone": "9524670417",
    "enrollmentDate": "2026-08-13",
    "avatarColor": "bg-blue-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 6500,
      "paid": 0,
      "history": []
    },
    "attendanceLog": [
      {
        "date": "2026-08-13",
        "formattedDate": "2026-08-13",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-292",
    "enrollmentNo": "14/8",
    "username": "SMDS14/8",
    "password": "smds@14/8",
    "name": "Vishnu",
    "initials": "V",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "08:00 AM",
    "status": "pending",
    "phone": "9159717298",
    "enrollmentDate": "2026-08-14",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 0,
      "history": []
    },
    "attendanceLog": [
      {
        "date": "2026-08-14",
        "formattedDate": "2026-08-14",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-293",
    "enrollmentNo": "15/8",
    "username": "SMDS15/8",
    "password": "smds@15/8",
    "name": "Ravikumar",
    "initials": "R",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "09:00 AM",
    "status": "present",
    "phone": "9842200000",
    "enrollmentDate": "2026-08-15",
    "avatarColor": "bg-purple-600",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4600,
      "paid": 4600,
      "history": [
        {
          "id": "p_ST-292_1",
          "amount": 4600,
          "method": "UPI",
          "date": "2026-08-15",
          "note": "Advance Fee (UPI 19-08)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-08-15",
        "formattedDate": "2026-08-15",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-294",
    "enrollmentNo": "16/8",
    "username": "SMDS16/8",
    "password": "smds@16/8",
    "name": "Sujith",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "10:00 AM",
    "status": "present",
    "phone": "9750993135",
    "enrollmentDate": "2026-08-16",
    "avatarColor": "bg-amber-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-293_1",
          "amount": 2500,
          "method": "UPI",
          "date": "2026-08-16",
          "note": "Advance Fee (UPI 23-08-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-08-16",
        "formattedDate": "2026-08-16",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-295",
    "enrollmentNo": "17/8",
    "username": "SMDS17/8",
    "password": "smds@17/8",
    "name": "Gokila (anandh)",
    "initials": "G(",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "04:00 PM",
    "status": "pending",
    "phone": "9994443707",
    "enrollmentDate": "2026-08-17",
    "avatarColor": "bg-rose-600",
    "remark": "REF VIVEGAM ASSOSIATE",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 0,
      "history": []
    },
    "attendanceLog": [
      {
        "date": "2026-08-17",
        "formattedDate": "2026-08-17",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-296",
    "enrollmentNo": "18/8",
    "username": "SMDS18/8",
    "password": "smds@18/8",
    "name": "Kanishk",
    "initials": "K",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "05:00 PM",
    "status": "pending",
    "phone": "7598458999",
    "enrollmentDate": "2026-08-18",
    "avatarColor": "bg-teal-600",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4500,
      "paid": 2000,
      "history": [
        {
          "id": "p_ST-295_1",
          "amount": 2000,
          "method": "UPI",
          "date": "2026-08-18",
          "note": "Advance Fee (UPI 26-08-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-08-18",
        "formattedDate": "2026-08-18",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-297",
    "enrollmentNo": "19/8",
    "username": "SMDS19/8",
    "password": "smds@19/8",
    "name": "Arun Selvaraj",
    "initials": "AS",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "06:00 PM",
    "status": "present",
    "phone": "9600185631",
    "enrollmentDate": "2026-08-19",
    "avatarColor": "bg-indigo-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-296_1",
          "amount": 2500,
          "method": "Cash",
          "date": "2026-08-19",
          "note": "Advance Fee (CASH 27-08)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-08-19",
        "formattedDate": "2026-08-19",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-298",
    "enrollmentNo": "20/8",
    "username": "SMDS20/8",
    "password": "smds@20/8",
    "name": "Dinesh Kumar",
    "initials": "DK",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "06:00 AM",
    "status": "pending",
    "phone": "9790517905",
    "enrollmentDate": "2026-08-20",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4500,
      "paid": 2000,
      "history": [
        {
          "id": "p_ST-297_1",
          "amount": 2000,
          "method": "UPI",
          "date": "2026-08-20",
          "note": "Advance Fee (UPI 05-09-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-08-20",
        "formattedDate": "2026-08-20",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-299",
    "enrollmentNo": "21/8",
    "username": "SMDS21/8",
    "password": "smds@21/8",
    "name": "Vishnudeva",
    "initials": "V",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "07:00 AM",
    "status": "pending",
    "phone": "9566742799",
    "enrollmentDate": "2026-08-21",
    "avatarColor": "bg-blue-600",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4500,
      "paid": 2000,
      "history": [
        {
          "id": "p_ST-298_1",
          "amount": 2000,
          "method": "UPI",
          "date": "2026-08-21",
          "note": "Advance Fee (UPI)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-08-21",
        "formattedDate": "2026-08-21",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-300",
    "enrollmentNo": "22/8",
    "username": "SMDS22/8",
    "password": "smds@22/8",
    "name": "Swathi",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "08:00 AM",
    "status": "pending",
    "phone": "9384481607",
    "enrollmentDate": "2026-08-22",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 0,
      "history": []
    },
    "attendanceLog": [
      {
        "date": "2026-08-22",
        "formattedDate": "2026-08-22",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-301",
    "enrollmentNo": "23/8",
    "username": "SMDS23/8",
    "password": "smds@23/8",
    "name": "Muthukumar",
    "initials": "M",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "09:00 AM",
    "status": "pending",
    "phone": "7339353099",
    "enrollmentDate": "2026-08-23",
    "avatarColor": "bg-purple-600",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4500,
      "paid": 2000,
      "history": [
        {
          "id": "p_ST-300_1",
          "amount": 2000,
          "method": "Cash",
          "date": "2026-08-23",
          "note": "Advance Fee (CASH)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-08-23",
        "formattedDate": "2026-08-23",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-302",
    "enrollmentNo": "24/8",
    "username": "SMDS24/8",
    "password": "smds@24/8",
    "name": "Santhoshkumar",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8_single",
    "time": "10:00 AM",
    "status": "pending",
    "phone": "8870014674",
    "enrollmentDate": "2026-08-24",
    "avatarColor": "bg-amber-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 0,
      "history": []
    },
    "attendanceLog": [
      {
        "date": "2026-08-24",
        "formattedDate": "2026-08-24",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-303",
    "enrollmentNo": "25/8",
    "username": "SMDS25/8",
    "password": "smds@25/8",
    "name": "Karthikeyan",
    "initials": "K",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_2",
    "time": "04:00 PM",
    "status": "present",
    "phone": "9940708116",
    "enrollmentDate": "2026-08-25",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 3000,
      "paid": 3000,
      "history": [
        {
          "id": "p_ST-302_1",
          "amount": 3000,
          "method": "Cash",
          "date": "2026-08-25",
          "note": "Advance Fee Paid"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-08-25",
        "formattedDate": "2026-08-25",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-304",
    "enrollmentNo": "1/9",
    "username": "SMDS1/9",
    "password": "smds@1/9",
    "name": "Pandi",
    "initials": "P",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "05:00 PM",
    "status": "pending",
    "phone": "9361843440",
    "enrollmentDate": "2026-09-03",
    "avatarColor": "bg-teal-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 1000,
      "history": [
        {
          "id": "p_ST-303_1",
          "amount": 1000,
          "method": "UPI",
          "date": "2026-09-03",
          "note": "Advance Fee (UPI 05-09-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-09-03",
        "formattedDate": "2026-09-03",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-305",
    "enrollmentNo": "2/9",
    "username": "SMDS2/9",
    "password": "smds@2/9",
    "name": "Divya",
    "initials": "D",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "06:00 PM",
    "status": "pending",
    "phone": "8807662462",
    "enrollmentDate": "2026-09-05",
    "avatarColor": "bg-indigo-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-304_1",
          "amount": 4000,
          "method": "UPI",
          "date": "2026-09-05",
          "note": "Advance Fee (UPI 04-09-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-09-05",
        "formattedDate": "2026-09-05",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-306",
    "enrollmentNo": "3/9",
    "username": "SMDS3/9",
    "password": "smds@3/9",
    "name": "Diyanandh",
    "initials": "D",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "06:00 AM",
    "status": "pending",
    "phone": "9585652221",
    "enrollmentDate": "2026-09-05",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-305_1",
          "amount": 4000,
          "method": "UPI",
          "date": "2026-09-05",
          "note": "Advance Fee (UPI 04-09-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-09-05",
        "formattedDate": "2026-09-05",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-307",
    "enrollmentNo": "4/9",
    "username": "SMDS4/9",
    "password": "smds@4/9",
    "name": "Jenisha",
    "initials": "J",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "07:00 AM",
    "status": "pending",
    "phone": "7200232460",
    "enrollmentDate": "2026-09-07",
    "avatarColor": "bg-blue-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-306_1",
          "amount": 4000,
          "method": "Cash",
          "date": "2026-09-07",
          "note": "Advance Fee (CASH 07-09-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-09-07",
        "formattedDate": "2026-09-07",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-308",
    "enrollmentNo": "5/9",
    "username": "SMDS5/9",
    "password": "smds@5/9",
    "name": "Thangapandi",
    "initials": "T",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "08:00 AM",
    "status": "pending",
    "phone": "8631095254",
    "enrollmentDate": "2026-09-07",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-307_1",
          "amount": 4000,
          "method": "UPI",
          "date": "2026-09-07",
          "note": "Advance Fee (UPI 07-09-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-09-07",
        "formattedDate": "2026-09-07",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-309",
    "enrollmentNo": "6/9",
    "username": "SMDS6/9",
    "password": "smds@6/9",
    "name": "Prabhakaran",
    "initials": "P",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "09:00 AM",
    "status": "pending",
    "phone": "9342034051",
    "enrollmentDate": "2026-09-07",
    "avatarColor": "bg-purple-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-308_1",
          "amount": 4000,
          "method": "UPI",
          "date": "2026-09-07",
          "note": "Advance Fee (UPI 07-09-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-09-07",
        "formattedDate": "2026-09-07",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-310",
    "enrollmentNo": "7/9",
    "username": "SMDS7/9",
    "password": "smds@7/9",
    "name": "Suresh Chunnilal",
    "initials": "SC",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "10:00 AM",
    "status": "pending",
    "phone": "8237301439",
    "enrollmentDate": "2026-09-07",
    "avatarColor": "bg-amber-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-309_1",
          "amount": 4000,
          "method": "UPI",
          "date": "2026-09-07",
          "note": "Advance Fee (UPI 07-09-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-09-07",
        "formattedDate": "2026-09-07",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-311",
    "enrollmentNo": "8/9",
    "username": "SMDS8/9",
    "password": "smds@8/9",
    "name": "Eswaranathan",
    "initials": "E",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8_single",
    "time": "04:00 PM",
    "status": "pending",
    "phone": "8524946424",
    "enrollmentDate": "2026-09-08",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-310_1",
          "amount": 4000,
          "method": "UPI",
          "date": "2026-09-08",
          "note": "Advance Fee (UPI 05-09-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-09-08",
        "formattedDate": "2026-09-08",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-312",
    "enrollmentNo": "9/9",
    "username": "SMDS9/9",
    "password": "smds@9/9",
    "name": "Lakshmipathy",
    "initials": "L",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "05:00 PM",
    "status": "pending",
    "phone": "9952206362",
    "enrollmentDate": "2026-09-09",
    "avatarColor": "bg-teal-600",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4500,
      "paid": 0,
      "history": []
    },
    "attendanceLog": [
      {
        "date": "2026-09-09",
        "formattedDate": "2026-09-09",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-313",
    "enrollmentNo": "10/9",
    "username": "SMDS10/9",
    "password": "smds@10/9",
    "name": "Keerthishree",
    "initials": "K",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "06:00 PM",
    "status": "pending",
    "phone": "7092005622",
    "enrollmentDate": "2026-09-10",
    "avatarColor": "bg-indigo-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-312_1",
          "amount": 4000,
          "method": "UPI",
          "date": "2026-09-10",
          "note": "Advance Fee (UPI 10-09-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-09-10",
        "formattedDate": "2026-09-10",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-314",
    "enrollmentNo": "11/9",
    "username": "SMDS11/9",
    "password": "smds@11/9",
    "name": "Chunilal",
    "initials": "C",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "06:00 AM",
    "status": "pending",
    "phone": "8237301439",
    "enrollmentDate": "2026-09-10",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 1000,
      "history": [
        {
          "id": "p_ST-313_1",
          "amount": 1000,
          "method": "UPI",
          "date": "2026-09-10",
          "note": "Advance Fee (UPI 10-09-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-09-10",
        "formattedDate": "2026-09-10",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-315",
    "enrollmentNo": "12/9",
    "username": "SMDS12/9",
    "password": "smds@12/9",
    "name": "Dhanushkaran",
    "initials": "D",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "07:00 AM",
    "status": "present",
    "phone": "8838082626",
    "enrollmentDate": "2026-09-10",
    "avatarColor": "bg-blue-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 7500,
      "paid": 7500,
      "history": [
        {
          "id": "p_ST-314_1",
          "amount": 7500,
          "method": "UPI",
          "date": "2026-09-10",
          "note": "Advance Fee (UPI 21-09-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-09-10",
        "formattedDate": "2026-09-10",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-316",
    "enrollmentNo": "13/9",
    "username": "SMDS13/9",
    "password": "smds@13/9",
    "name": "Parthiban K",
    "initials": "PK",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_12",
    "time": "08:00 AM",
    "status": "present",
    "phone": "9786689262",
    "enrollmentDate": "2026-09-07",
    "avatarColor": "bg-emerald-600",
    "remark": "TRAINNING ONLY",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 6000,
      "paid": 6000,
      "history": [
        {
          "id": "p_ST-315_1",
          "amount": 6000,
          "method": "UPI",
          "date": "2026-09-07",
          "note": "Advance Fee (CASH 07-09-26 / UPI 22-09-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-09-07",
        "formattedDate": "2026-09-07",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-317",
    "enrollmentNo": "14/9",
    "username": "SMDS14/9",
    "password": "smds@14/9",
    "name": "Thoulath",
    "initials": "T",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "10:00 AM",
    "status": "pending",
    "phone": "9688815595",
    "enrollmentDate": "2026-09-11",
    "avatarColor": "bg-amber-600",
    "remark": "KARISHMA FATHER",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 0,
      "history": []
    },
    "attendanceLog": [
      {
        "date": "2026-09-11",
        "formattedDate": "2026-09-11",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-318",
    "enrollmentNo": "15/9",
    "username": "SMDS15/9",
    "password": "smds@15/9",
    "name": "Saravana Kumar",
    "initials": "SK",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "04:00 PM",
    "status": "present",
    "phone": "8754796110",
    "enrollmentDate": "2026-09-11",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 2500,
      "history": [
        {
          "id": "p_ST-318_1",
          "amount": 2500,
          "method": "UPI",
          "date": "2026-09-11",
          "note": "Advance Fee (UPI 11-09-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-09-11",
        "formattedDate": "2026-09-11",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-319",
    "enrollmentNo": "16/9",
    "username": "SMDS16/9",
    "password": "smds@16/9",
    "name": "Harka Singh",
    "initials": "HS",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "05:00 PM",
    "status": "pending",
    "phone": "7411440521",
    "enrollmentDate": "2026-09-11",
    "avatarColor": "bg-teal-600",
    "remark": "REF",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 7500,
      "paid": 0,
      "history": []
    },
    "attendanceLog": [
      {
        "date": "2026-09-11",
        "formattedDate": "2026-09-11",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-320",
    "enrollmentNo": "17/9",
    "username": "SMDS17/9",
    "password": "smds@17/9",
    "name": "Kalaiyarasi",
    "initials": "K",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "06:00 PM",
    "status": "pending",
    "phone": "9345588749",
    "enrollmentDate": "2026-09-12",
    "avatarColor": "bg-indigo-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-320_1",
          "amount": 4000,
          "method": "UPI",
          "date": "2026-09-12",
          "note": "Advance Fee (UPI 13-09-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-09-12",
        "formattedDate": "2026-09-12",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-321",
    "enrollmentNo": "18/9",
    "username": "SMDS18/9",
    "password": "smds@18/9",
    "name": "Abi Perumal",
    "initials": "AP",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "06:00 AM",
    "status": "pending",
    "phone": "7094989845",
    "enrollmentDate": "2026-09-15",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4500,
      "paid": 0,
      "history": []
    },
    "attendanceLog": [
      {
        "date": "2026-09-15",
        "formattedDate": "2026-09-15",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-322",
    "enrollmentNo": "19/9",
    "username": "SMDS19/9",
    "password": "smds@19/9",
    "name": "Thaleshwaran",
    "initials": "T",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "07:00 AM",
    "status": "pending",
    "phone": "8525077401",
    "enrollmentDate": "2026-09-02",
    "avatarColor": "bg-blue-600",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4500,
      "paid": 1500,
      "history": [
        {
          "id": "p_ST-322_1",
          "amount": 1500,
          "method": "UPI",
          "date": "2026-09-02",
          "note": "Advance Fee (CASH+UPI 02-09)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-09-02",
        "formattedDate": "2026-09-02",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-323",
    "enrollmentNo": "20/9",
    "username": "SMDS20/9",
    "password": "smds@20/9",
    "name": "Mohanraj",
    "initials": "M",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "08:00 AM",
    "status": "pending",
    "phone": "8525817445",
    "enrollmentDate": "2026-09-02",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4500,
      "paid": 2000,
      "history": [
        {
          "id": "p_ST-323_1",
          "amount": 2000,
          "method": "UPI",
          "date": "2026-09-02",
          "note": "Advance Fee (UPI 02-09-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-09-02",
        "formattedDate": "2026-09-02",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-324",
    "enrollmentNo": "21/9",
    "username": "SMDS21/9",
    "password": "smds@21/9",
    "name": "Seema",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "09:00 AM",
    "status": "pending",
    "phone": "9625210617",
    "enrollmentDate": "2026-09-02",
    "avatarColor": "bg-purple-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 1000,
      "history": [
        {
          "id": "p_ST-324_1",
          "amount": 1000,
          "method": "UPI",
          "date": "2026-09-02",
          "note": "Advance Fee (UPI)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-09-02",
        "formattedDate": "2026-09-02",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-325",
    "enrollmentNo": "22/9",
    "username": "SMDS22/9",
    "password": "smds@22/9",
    "name": "Jeevitha",
    "initials": "J",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "10:00 AM",
    "status": "pending",
    "phone": "9345364486",
    "enrollmentDate": "2026-09-11",
    "avatarColor": "bg-amber-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 1000,
      "history": [
        {
          "id": "p_ST-325_1",
          "amount": 1000,
          "method": "UPI",
          "date": "2026-09-11",
          "note": "Advance Fee (UPI 18-09-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-09-11",
        "formattedDate": "2026-09-11",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-326",
    "enrollmentNo": "23/9",
    "username": "SMDS23/9",
    "password": "smds@23/9",
    "name": "Deepak",
    "initials": "D",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "04:00 PM",
    "status": "pending",
    "phone": "9965348912",
    "enrollmentDate": "2026-09-18",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4500,
      "paid": 2000,
      "history": [
        {
          "id": "p_ST-326_1",
          "amount": 2000,
          "method": "UPI",
          "date": "2026-09-18",
          "note": "Advance Fee (UPI 18-09-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-09-18",
        "formattedDate": "2026-09-18",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-327",
    "enrollmentNo": "24/9",
    "username": "SMDS24/9",
    "password": "smds@24/9",
    "name": "Sivabarathi",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8_single",
    "time": "05:00 PM",
    "status": "pending",
    "phone": "8682970567",
    "enrollmentDate": "2026-09-18",
    "avatarColor": "bg-teal-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-327_1",
          "amount": 4000,
          "method": "UPI",
          "date": "2026-09-18",
          "note": "Advance Fee (UPI 18-09-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-09-18",
        "formattedDate": "2026-09-18",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-328",
    "enrollmentNo": "25/9",
    "username": "SMDS25/9",
    "password": "smds@25/9",
    "name": "Karthick S",
    "initials": "KS",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_12",
    "time": "06:00 PM",
    "status": "present",
    "phone": "9842200000",
    "enrollmentDate": "2026-09-26",
    "avatarColor": "bg-indigo-600",
    "remark": "TRAINNING ONLY",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 6000,
      "paid": 6000,
      "history": [
        {
          "id": "p_ST-328_1",
          "amount": 6000,
          "method": "Cash",
          "date": "2026-09-26",
          "note": "Advance Fee (\"CASH 19-09-26/)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-09-26",
        "formattedDate": "2026-09-26",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-329",
    "enrollmentNo": "26/9",
    "username": "SMDS26/9",
    "password": "smds@26/9",
    "name": "Karishma Gowri",
    "initials": "KG",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "06:00 AM",
    "status": "pending",
    "phone": "9150809252",
    "enrollmentDate": "2026-09-19",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-329_1",
          "amount": 4000,
          "method": "UPI",
          "date": "2026-09-19",
          "note": "Advance Fee (UPI 19-09-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-09-19",
        "formattedDate": "2026-09-19",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-330",
    "enrollmentNo": "27/9",
    "username": "SMDS27/9",
    "password": "smds@27/9",
    "name": "Sathish Kannan",
    "initials": "SK",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "07:00 AM",
    "status": "pending",
    "phone": "9894766700",
    "enrollmentDate": "2026-09-19",
    "avatarColor": "bg-blue-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-330_1",
          "amount": 4000,
          "method": "UPI",
          "date": "2026-09-19",
          "note": "Advance Fee (UPI 19-09-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-09-19",
        "formattedDate": "2026-09-19",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-331",
    "enrollmentNo": "28/9",
    "username": "SMDS28/9",
    "password": "smds@28/9",
    "name": "Kalaivani",
    "initials": "K",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "08:00 AM",
    "status": "pending",
    "phone": "8072507085",
    "enrollmentDate": "2026-09-19",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-331_1",
          "amount": 4000,
          "method": "UPI",
          "date": "2026-09-19",
          "note": "Advance Fee (UPI 26-09-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-09-19",
        "formattedDate": "2026-09-19",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-332",
    "enrollmentNo": "29/9",
    "username": "SMDS29/9",
    "password": "smds@29/9",
    "name": "Chitra",
    "initials": "C",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "09:00 AM",
    "status": "pending",
    "phone": "8220745112",
    "enrollmentDate": "2026-09-28",
    "avatarColor": "bg-purple-600",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4500,
      "paid": 200,
      "history": [
        {
          "id": "p_ST-332_1",
          "amount": 200,
          "method": "Cash",
          "date": "2026-09-28",
          "note": "Advance Fee (CASH)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-09-28",
        "formattedDate": "2026-09-28",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-333",
    "enrollmentNo": "30/9",
    "username": "SMDS30/9",
    "password": "smds@30/9",
    "name": "Vijay Kumar",
    "initials": "VK",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_13",
    "time": "10:00 AM",
    "status": "present",
    "phone": "9842200000",
    "enrollmentDate": "2026-09-28",
    "avatarColor": "bg-amber-600",
    "remark": "TRAINNING ONLY",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 0,
      "paid": 0,
      "history": []
    },
    "attendanceLog": [
      {
        "date": "2026-09-28",
        "formattedDate": "2026-09-28",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-334",
    "enrollmentNo": "31/9",
    "username": "SMDS31/9",
    "password": "smds@31/9",
    "name": "Sudha",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8_single",
    "time": "04:00 PM",
    "status": "pending",
    "phone": "9842200000",
    "enrollmentDate": "2026-09-28",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-334_1",
          "amount": 4000,
          "method": "Cash",
          "date": "2026-09-28",
          "note": "Advance Fee (\"CASH)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-09-28",
        "formattedDate": "2026-09-28",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-335",
    "enrollmentNo": "32/9",
    "username": "SMDS32/9",
    "password": "smds@32/9",
    "name": "Karuppusamy",
    "initials": "K",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "05:00 PM",
    "status": "pending",
    "phone": "9994168862",
    "enrollmentDate": "2026-09-28",
    "avatarColor": "bg-teal-600",
    "remark": "JOE REF",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4500,
      "paid": 0,
      "history": []
    },
    "attendanceLog": [
      {
        "date": "2026-09-28",
        "formattedDate": "2026-09-28",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-336",
    "enrollmentNo": "33/9",
    "username": "SMDS33/9",
    "password": "smds@33/9",
    "name": "Vijay Krishna",
    "initials": "VK",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "06:00 PM",
    "status": "pending",
    "phone": "9095967661",
    "enrollmentDate": "2026-09-28",
    "avatarColor": "bg-indigo-600",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4500,
      "paid": 0,
      "history": []
    },
    "attendanceLog": [
      {
        "date": "2026-09-28",
        "formattedDate": "2026-09-28",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-337",
    "enrollmentNo": "34/9",
    "username": "SMDS34/9",
    "password": "smds@34/9",
    "name": "Harsh Vardhan",
    "initials": "HV",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "06:00 AM",
    "status": "pending",
    "phone": "9842200000",
    "enrollmentDate": "2026-09-28",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4500,
      "paid": 0,
      "history": []
    },
    "attendanceLog": [
      {
        "date": "2026-09-28",
        "formattedDate": "2026-09-28",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-338",
    "enrollmentNo": "35/9",
    "username": "SMDS35/9",
    "password": "smds@35/9",
    "name": "Agalya Sri",
    "initials": "AS",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "07:00 AM",
    "status": "pending",
    "phone": "8148874554",
    "enrollmentDate": "2026-09-28",
    "avatarColor": "bg-blue-600",
    "remark": "ALREADY EXIST",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 0,
      "history": []
    },
    "attendanceLog": [
      {
        "date": "2026-09-28",
        "formattedDate": "2026-09-28",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-339",
    "enrollmentNo": "36/9",
    "username": "SMDS36/9",
    "password": "smds@36/9",
    "name": "Balakrishnan",
    "initials": "B",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "08:00 AM",
    "status": "pending",
    "phone": "7812803438",
    "enrollmentDate": "2026-09-28",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 1500,
      "history": [
        {
          "id": "p_ST-339_1",
          "amount": 1500,
          "method": "Cash",
          "date": "2026-09-28",
          "note": "Advance Fee (CASH 26-09-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-09-28",
        "formattedDate": "2026-09-28",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-340",
    "enrollmentNo": "37/9",
    "username": "SMDS37/9",
    "password": "smds@37/9",
    "name": "Nithya J",
    "initials": "NJ",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "09:00 AM",
    "status": "pending",
    "phone": "9941423260",
    "enrollmentDate": "2026-09-26",
    "avatarColor": "bg-purple-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 0,
      "history": []
    },
    "attendanceLog": [
      {
        "date": "2026-09-26",
        "formattedDate": "2026-09-26",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-341",
    "enrollmentNo": "38/9",
    "username": "SMDS38/9",
    "password": "smds@38/9",
    "name": "Gomathi",
    "initials": "G",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "10:00 AM",
    "status": "pending",
    "phone": "7418074929",
    "enrollmentDate": "2026-09-28",
    "avatarColor": "bg-amber-600",
    "remark": "SANDHOSH REF",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4500,
      "paid": 0,
      "history": []
    },
    "attendanceLog": [
      {
        "date": "2026-09-28",
        "formattedDate": "2026-09-28",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-342",
    "enrollmentNo": "39/9",
    "username": "SMDS39/9",
    "password": "smds@39/9",
    "name": "Harini Shree",
    "initials": "HS",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "04:00 PM",
    "status": "pending",
    "phone": "9952349589",
    "enrollmentDate": "2026-09-28",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 2000,
      "history": [
        {
          "id": "p_ST-342_1",
          "amount": 2000,
          "method": "UPI",
          "date": "2026-09-28",
          "note": "Advance Fee (UPI 28-09-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-09-28",
        "formattedDate": "2026-09-28",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-343",
    "enrollmentNo": "40/9",
    "username": "SMDS40/9",
    "password": "smds@40/9",
    "name": "Mathivanan",
    "initials": "M",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "05:00 PM",
    "status": "pending",
    "phone": "9524142063",
    "enrollmentDate": "2026-09-29",
    "avatarColor": "bg-teal-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-343_1",
          "amount": 4000,
          "method": "UPI",
          "date": "2026-09-29",
          "note": "Advance Fee (UPI 30-09-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-09-29",
        "formattedDate": "2026-09-29",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-344",
    "enrollmentNo": "41/9",
    "username": "SMDS41/9",
    "password": "smds@41/9",
    "name": "Suraj",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "06:00 PM",
    "status": "pending",
    "phone": "7339041090",
    "enrollmentDate": "2026-09-30",
    "avatarColor": "bg-indigo-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 1000,
      "history": [
        {
          "id": "p_ST-344_1",
          "amount": 1000,
          "method": "Cash",
          "date": "2026-09-30",
          "note": "Advance Fee (CASH 30-09-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-09-30",
        "formattedDate": "2026-09-30",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-345",
    "enrollmentNo": "42/9",
    "username": "SMDS42/9",
    "password": "smds@42/9",
    "name": "Angamuthu",
    "initials": "A",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "06:00 AM",
    "status": "pending",
    "phone": "9344767323",
    "enrollmentDate": "2026-09-30",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4000,
      "paid": 0,
      "history": []
    },
    "attendanceLog": [
      {
        "date": "2026-09-30",
        "formattedDate": "2026-09-30",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-346",
    "enrollmentNo": "43/9",
    "username": "SMDS43/9",
    "password": "smds@43/9",
    "name": "Paramasivam",
    "initials": "P",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "07:00 AM",
    "status": "pending",
    "phone": "6385740674",
    "enrollmentDate": "2026-09-30",
    "avatarColor": "bg-blue-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 3000,
      "history": [
        {
          "id": "p_ST-346_1",
          "amount": 3000,
          "method": "UPI",
          "date": "2026-09-30",
          "note": "Advance Fee (UPI 06-10-26)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-09-30",
        "formattedDate": "2026-09-30",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-347",
    "enrollmentNo": "1/10",
    "username": "SMDS1/10",
    "password": "smds@1/10",
    "name": "Vishnupriya",
    "initials": "V",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "08:00 AM",
    "status": "pending",
    "phone": "9600403825",
    "enrollmentDate": "2026-10-01",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-347_1",
          "amount": 4000,
          "method": "Cash",
          "date": "2026-10-01",
          "note": "Advance Fee Paid"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-10-01",
        "formattedDate": "2026-10-01",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-348",
    "enrollmentNo": "2/10",
    "username": "SMDS2/10",
    "password": "smds@2/10",
    "name": "Sathish",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "09:00 AM",
    "status": "pending",
    "phone": "9842200000",
    "enrollmentDate": "2026-10-02",
    "avatarColor": "bg-purple-600",
    "remark": "\"Amutha lakshmi hardwares",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4500,
      "paid": 0,
      "history": []
    },
    "attendanceLog": [
      {
        "date": "2026-10-02",
        "formattedDate": "2026-10-02",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-349",
    "enrollmentNo": "3/10",
    "username": "SMDS3/10",
    "password": "smds@3/10",
    "name": "Magi K",
    "initials": "MK",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "10:00 AM",
    "status": "pending",
    "phone": "9150854808",
    "enrollmentDate": "2026-10-03",
    "avatarColor": "bg-amber-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-349_1",
          "amount": 4000,
          "method": "UPI",
          "date": "2026-10-03",
          "note": "Advance Fee (UPI 13-10-2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-10-03",
        "formattedDate": "2026-10-03",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-350",
    "enrollmentNo": "4/10",
    "username": "SMDS4/10",
    "password": "smds@4/10",
    "name": "Niverthana",
    "initials": "N",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "04:00 PM",
    "status": "pending",
    "phone": "9942366615",
    "enrollmentDate": "2026-10-03",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 0,
      "history": []
    },
    "attendanceLog": [
      {
        "date": "2026-10-03",
        "formattedDate": "2026-10-03",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-351",
    "enrollmentNo": "5/10",
    "username": "SMDS5/10",
    "password": "smds@5/10",
    "name": "Kalpana",
    "initials": "K",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "05:00 PM",
    "status": "pending",
    "phone": "9150809252",
    "enrollmentDate": "2026-10-03",
    "avatarColor": "bg-teal-600",
    "remark": "KARISHMA REF",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4500,
      "paid": 0,
      "history": []
    },
    "attendanceLog": [
      {
        "date": "2026-10-03",
        "formattedDate": "2026-10-03",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-352",
    "enrollmentNo": "6/10",
    "username": "SMDS6/10",
    "password": "smds@6/10",
    "name": "Kiruthika",
    "initials": "K",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "06:00 PM",
    "status": "pending",
    "phone": "9344909157",
    "enrollmentDate": "2026-10-04",
    "avatarColor": "bg-indigo-600",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4500,
      "paid": 0,
      "history": []
    },
    "attendanceLog": [
      {
        "date": "2026-10-04",
        "formattedDate": "2026-10-04",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-353",
    "enrollmentNo": "7/10",
    "username": "SMDS7/10",
    "password": "smds@7/10",
    "name": "Sangavi",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "06:00 AM",
    "status": "pending",
    "phone": "8940661733",
    "enrollmentDate": "2026-10-06",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-353_1",
          "amount": 4000,
          "method": "UPI",
          "date": "2026-10-06",
          "note": "Advance Fee (UPI 06-10-2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-10-06",
        "formattedDate": "2026-10-06",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-354",
    "enrollmentNo": "8/10",
    "username": "SMDS8/10",
    "password": "smds@8/10",
    "name": "Rashik",
    "initials": "R",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "07:00 AM",
    "status": "pending",
    "phone": "9994647073",
    "enrollmentDate": "2026-10-07",
    "avatarColor": "bg-blue-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 5000,
      "history": [
        {
          "id": "p_ST-354_1",
          "amount": 5000,
          "method": "UPI",
          "date": "2026-10-07",
          "note": "Advance Fee (UPI 07-10-2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-10-07",
        "formattedDate": "2026-10-07",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-355",
    "enrollmentNo": "9/10",
    "username": "SMDS9/10",
    "password": "smds@9/10",
    "name": "Bharathi",
    "initials": "B",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "08:00 AM",
    "status": "pending",
    "phone": "6369339917",
    "enrollmentDate": "2026-10-06",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 1000,
      "history": [
        {
          "id": "p_ST-355_1",
          "amount": 1000,
          "method": "UPI",
          "date": "2026-10-06",
          "note": "Advance Fee (UPI 06-10-2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-10-06",
        "formattedDate": "2026-10-06",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-356",
    "enrollmentNo": "10/10",
    "username": "SMDS10/10",
    "password": "smds@10/10",
    "name": "Selvam P",
    "initials": "SP",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "09:00 AM",
    "status": "pending",
    "phone": "6380543541",
    "enrollmentDate": "2026-10-06",
    "avatarColor": "bg-purple-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 1000,
      "history": [
        {
          "id": "p_ST-356_1",
          "amount": 1000,
          "method": "UPI",
          "date": "2026-10-06",
          "note": "Advance Fee (UPI 06-10-2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-10-06",
        "formattedDate": "2026-10-06",
        "time": "09:00 AM",
        "slot": "09:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-357",
    "enrollmentNo": "11/10",
    "username": "SMDS11/10",
    "password": "smds@11/10",
    "name": "Pramoth",
    "initials": "P",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8_single",
    "time": "10:00 AM",
    "status": "pending",
    "phone": "8248317530",
    "enrollmentDate": "2026-10-11",
    "avatarColor": "bg-amber-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-357_1",
          "amount": 4000,
          "method": "UPI",
          "date": "2026-10-11",
          "note": "Advance Fee (UPI 08-10-2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-10-11",
        "formattedDate": "2026-10-11",
        "time": "10:00 AM",
        "slot": "10:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-358",
    "enrollmentNo": "12/10",
    "username": "SMDS12/10",
    "password": "smds@12/10",
    "name": "Miruthuvarshini",
    "initials": "M",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "04:00 PM",
    "status": "present",
    "phone": "9345401841",
    "enrollmentDate": "2026-10-09",
    "avatarColor": "bg-rose-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 0,
      "paid": 0,
      "history": []
    },
    "attendanceLog": [
      {
        "date": "2026-10-09",
        "formattedDate": "2026-10-09",
        "time": "04:00 PM",
        "slot": "04:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-359",
    "enrollmentNo": "13/10",
    "username": "SMDS13/10",
    "password": "smds@13/10",
    "name": "Praveenkumar",
    "initials": "P",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "05:00 PM",
    "status": "pending",
    "phone": "9047221326",
    "enrollmentDate": "2026-10-09",
    "avatarColor": "bg-teal-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 1000,
      "history": [
        {
          "id": "p_ST-359_1",
          "amount": 1000,
          "method": "UPI",
          "date": "2026-10-09",
          "note": "Advance Fee (UPI 09-10-2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-10-09",
        "formattedDate": "2026-10-09",
        "time": "05:00 PM",
        "slot": "05:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-360",
    "enrollmentNo": "14/10",
    "username": "SMDS14/10",
    "password": "smds@14/10",
    "name": "Loganandham",
    "initials": "L",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "06:00 PM",
    "status": "pending",
    "phone": "7904563393",
    "enrollmentDate": "2026-10-14",
    "avatarColor": "bg-indigo-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 6000,
      "paid": 5000,
      "history": [
        {
          "id": "p_ST-360_1",
          "amount": 5000,
          "method": "Cash",
          "date": "2026-10-14",
          "note": "Advance Fee (CASH 10-10-2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-10-14",
        "formattedDate": "2026-10-14",
        "time": "06:00 PM",
        "slot": "06:00 PM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-361",
    "enrollmentNo": "15/10",
    "username": "SMDS15/10",
    "password": "smds@15/10",
    "name": "Eswarapandiyan",
    "initials": "E",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_3",
    "time": "06:00 AM",
    "status": "pending",
    "phone": "9976255352",
    "enrollmentDate": "2026-10-12",
    "avatarColor": "bg-orange-500",
    "remark": "",
    "stats": {
      "total": 15,
      "attended": 10,
      "missed": 0
    },
    "fees": {
      "total": 4000,
      "paid": 2000,
      "history": [
        {
          "id": "p_ST-361_1",
          "amount": 2000,
          "method": "Cash",
          "date": "2026-10-12",
          "note": "Advance Fee (CASH 12-10-2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-10-12",
        "formattedDate": "2026-10-12",
        "time": "06:00 AM",
        "slot": "06:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-362",
    "enrollmentNo": "16/10",
    "username": "SMDS16/10",
    "password": "smds@16/10",
    "name": "Mutharasan",
    "initials": "M",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_1",
    "time": "07:00 AM",
    "status": "pending",
    "phone": "9363480659",
    "enrollmentDate": "2026-10-13",
    "avatarColor": "bg-blue-600",
    "remark": "",
    "stats": {
      "total": 10,
      "attended": 7,
      "missed": 0
    },
    "fees": {
      "total": 2500,
      "paid": 1000,
      "history": [
        {
          "id": "p_ST-362_1",
          "amount": 1000,
          "method": "UPI",
          "date": "2026-10-13",
          "note": "Advance Fee (UPI 13-10-2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-10-13",
        "formattedDate": "2026-10-13",
        "time": "07:00 AM",
        "slot": "07:00 AM",
        "status": "present"
      }
    ]
  },
  {
    "id": "ST-363",
    "enrollmentNo": "17/10",
    "username": "SMDS17/10",
    "password": "smds@17/10",
    "name": "Sarathbabu",
    "initials": "S",
    "course": "Light Motor Vehicle (LMV)",
    "type": "item_8",
    "time": "08:00 AM",
    "status": "pending",
    "phone": "9600623431",
    "enrollmentDate": "2026-10-13",
    "avatarColor": "bg-emerald-600",
    "remark": "",
    "stats": {
      "total": 21,
      "attended": 14,
      "missed": 0
    },
    "fees": {
      "total": 8000,
      "paid": 4000,
      "history": [
        {
          "id": "p_ST-363_1",
          "amount": 4000,
          "method": "UPI",
          "date": "2026-10-13",
          "note": "Advance Fee (UPI 13-10-2026)"
        }
      ]
    },
    "attendanceLog": [
      {
        "date": "2026-10-13",
        "formattedDate": "2026-10-13",
        "time": "08:00 AM",
        "slot": "08:00 AM",
        "status": "present"
      }
    ]
  }
];
