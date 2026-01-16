export const patientProfile = {
  id: 'pat-1024',
  name: 'Avery Lewis',
  age: 34,
  bloodType: 'O+',
  primaryHospital: 'CityCare Medical Center',
  carePlan: 'Diabetes Management',
  language: 'en',
};

export const appointments = [
  {
    id: 'apt-101',
    doctor: 'Dr. J. Ramirez',
    specialty: 'Cardiology',
    hospital: 'CityCare Medical Center',
    date: '2026-01-20',
    time: '10:30 AM',
    type: 'Teleconsult',
    status: 'Confirmed',
  },
  {
    id: 'apt-102',
    doctor: 'Dr. M. Chen',
    specialty: 'Endocrinology',
    hospital: 'Metro Health Clinic',
    date: '2026-02-02',
    time: '9:00 AM',
    type: 'In-person',
    status: 'Pending',
  },
];

export const hospitalAvailability = [
  {
    id: 'hos-201',
    name: 'CityCare Medical Center',
    nextSlot: 'Today 4:00 PM',
    departments: ['Cardiology', 'Orthopedics', 'Radiology'],
  },
  {
    id: 'hos-202',
    name: 'Metro Health Clinic',
    nextSlot: 'Tomorrow 9:30 AM',
    departments: ['Endocrinology', 'Dermatology', 'Pediatrics'],
  },
];

export const records = [
  {
    id: 'rec-301',
    title: 'Blood Panel Results',
    type: 'Lab Result',
    date: '2026-01-10',
    sharedWith: ['Dr. J. Ramirez', 'CityCare Lab'],
  },
  {
    id: 'rec-302',
    title: 'Chest X-Ray',
    type: 'Imaging',
    date: '2025-12-28',
    sharedWith: ['Metro Radiology'],
  },
];

export const reminders = [
  {
    id: 'rem-401',
    title: 'Metformin 500mg',
    time: '8:00 AM',
    frequency: 'Daily',
    type: 'Medicine',
  },
  {
    id: 'rem-402',
    title: 'Follow-up call with Dr. Chen',
    time: 'Tomorrow 2:00 PM',
    frequency: 'One-time',
    type: 'Follow-up',
  },
];

export const notifications = [
  {
    id: 'not-501',
    message: 'Lab results uploaded to your record.',
    time: '5m ago',
  },
  {
    id: 'not-502',
    message: 'Prescription renewed by Dr. Ramirez.',
    time: '1h ago',
  },
  {
    id: 'not-503',
    message: 'Upcoming teleconsultation tomorrow at 10:30 AM.',
    time: '3h ago',
  },
];

export const healthTracking = [
  {
    id: 'trk-601',
    metric: 'Blood Pressure',
    value: '118/76 mmHg',
    trend: 'Stable',
  },
  {
    id: 'trk-602',
    metric: 'Blood Glucose',
    value: '98 mg/dL',
    trend: 'Improving',
  },
  {
    id: 'trk-603',
    metric: 'Symptoms',
    value: 'No dizziness reported',
    trend: 'Good',
  },
];

export const vitalsLog = [
  {
    id: 'vtl-1001',
    metric: 'Blood Pressure',
    value: '120/78 mmHg',
    date: '2026-01-14',
  },
  {
    id: 'vtl-1002',
    metric: 'Heart Rate',
    value: '72 bpm',
    date: '2026-01-15',
  },
  {
    id: 'vtl-1003',
    metric: 'Blood Glucose',
    value: '102 mg/dL',
    date: '2026-01-15',
  },
];

export const symptomLog = [
  {
    id: 'sym-1101',
    description: 'Mild headache after lunch',
    date: '2026-01-14',
  },
  {
    id: 'sym-1102',
    description: 'No dizziness reported',
    date: '2026-01-15',
  },
];

export const treatmentProgress = [
  {
    id: 'trt-1201',
    title: 'Diabetes care plan adherence',
    status: 'On track',
    notes: 'All meds taken this week, glucose within target.',
  },
  {
    id: 'trt-1202',
    title: 'Cardio rehab',
    status: 'Needs attention',
    notes: 'Two exercise sessions missed, reschedule advised.',
  },
];

export const teleconsultations = [
  {
    id: 'tel-701',
    doctor: 'Dr. J. Ramirez',
    date: '2026-01-20',
    time: '10:30 AM',
    mode: 'Video',
    status: 'Scheduled',
  },
  {
    id: 'tel-702',
    doctor: 'Dr. M. Chen',
    date: '2026-01-22',
    time: '11:15 AM',
    mode: 'Audio',
    status: 'Scheduled',
  },
];

export const careTeamMessages = [
  {
    id: 'msg-1301',
    sender: 'Dr. J. Ramirez',
    preview: 'Reviewed your vitals. Keep up the good work!',
    time: '20m ago',
  },
  {
    id: 'msg-1302',
    sender: 'Care Coordinator',
    preview: 'Your lab results are now available in records.',
    time: 'Yesterday',
  },
];

export const chatThread = [
  {
    id: 'chat-1401',
    sender: 'Dr. J. Ramirez',
    message: 'Please check your blood pressure twice daily this week.',
    time: '9:10 AM',
    direction: 'in',
  },
  {
    id: 'chat-1402',
    sender: 'You',
    message: 'Will do. Should I take readings before meals?',
    time: '9:12 AM',
    direction: 'out',
  },
  {
    id: 'chat-1403',
    sender: 'Dr. J. Ramirez',
    message: 'Yes, before breakfast and before dinner is best.',
    time: '9:15 AM',
    direction: 'in',
  },
];

export const hospitals = [
  {
    id: 'hos-301',
    name: 'CityCare Medical Center',
    address: '200 Park Avenue',
  },
  {
    id: 'hos-302',
    name: 'Metro Health Clinic',
    address: '45 East River Rd',
  },
];

export const doctors = [
  {
    id: 'doc-401',
    name: 'Dr. J. Ramirez',
    specialty: 'Cardiology',
    hospital: 'CityCare Medical Center',
  },
  {
    id: 'doc-402',
    name: 'Dr. M. Chen',
    specialty: 'Endocrinology',
    hospital: 'Metro Health Clinic',
  },
  {
    id: 'doc-403',
    name: 'Dr. S. Patel',
    specialty: 'Primary Care',
    hospital: 'CityCare Medical Center',
  },
];

export const appointmentSlots = [
  {
    id: 'slot-501',
    date: '2026-01-21',
    time: '2:30 PM',
    type: 'Teleconsult',
  },
  {
    id: 'slot-502',
    date: '2026-01-22',
    time: '9:00 AM',
    type: 'In-person',
  },
  {
    id: 'slot-503',
    date: '2026-01-23',
    time: '4:15 PM',
    type: 'Teleconsult',
  },
];

export const payments = [
  {
    id: 'pay-801',
    description: 'Teleconsultation - Cardiology',
    amount: '$45.00',
    status: 'Paid',
    date: '2026-01-05',
  },
  {
    id: 'pay-802',
    description: 'Lab Services Package',
    amount: '$120.00',
    status: 'Pending',
    date: '2026-01-12',
  },
];

export const consents = [
  {
    id: 'cons-901',
    name: 'Share lab results with hospitals',
    enabled: true,
  },
  {
    id: 'cons-902',
    name: 'Share imaging with specialists',
    enabled: true,
  },
  {
    id: 'cons-903',
    name: 'Share prescriptions with pharmacies',
    enabled: false,
  },
];
