export interface Experience {
  id: string
  role: string
  company: string
  period: string
  description: string
}

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 'edu-1',
    role: 'Student',
    company: 'SMK Raden Umar Said Kudus (RUS)',
    period: '2024 - Current',
    description:
      'Focused on software engineering. Studied software development through web development, mobile development, Internet of Things (IoT), databases, version control (Git), and completed various individual and team-based projects.',
  },
  {
    id: 'edu-2',
    role: 'Student',
    company: 'SMPN 19 Bekasi',
    period: '2021 - 2024',
    description:
      'Completed junior high school education while developing discipline, teamwork, softskills, basic programming, and problem-solving skills.',
  },
  {
    id: 'edu-3',
    role: 'Student',
    company: 'SD Harapan Indonesia (Harsia)',
    period: '2015 - 2021',
    description:
      'Completed elementary education while competing as a national Taekwondo athlete, developing discipline, perseverance, and teamwork.',
  },
]
