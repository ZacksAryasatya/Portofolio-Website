export interface SkillSubcategory {
  name: string
  items: string[]
}

export interface SkillCategory {
  title: string
  skills?: string[]
  subcategories?: SkillSubcategory[]
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Tech Stack',
    subcategories: [
      {
        name: 'Core',
        items: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3']
      },
      {
        name: 'Frameworks & Libraries',
        items: ['React.js', 'Vue.js', 'Tailwind CSS', 'Flutter']
      }
    ]
  },
  {
    title: 'Tools',
    skills: [
      'Git', 
      'GitHub',
      'Figma',
      'Vite',
      'Visual Studio Code',
      'Prettier',
      'ESLint',
      'Postman',
    ],
  }
]
