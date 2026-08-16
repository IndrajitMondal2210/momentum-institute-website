import { Calculator, Atom, Trophy } from 'lucide-react'

export const courses = [
  {
    id: 'mathematics',
    icon: Calculator,
    label: 'Foundation',
    title: 'Mathematics',
    classes: 'Classes VI–X',
    description:
      'Build strong mathematical fundamentals through concept clarity, structured problem solving and regular practice.',
    points: [
      'School syllabus support',
      'Core concept strengthening',
      'Problem-solving practice',
    ],
  },
  {
    id: 'physics',
    icon: Atom,
    label: 'School & Boards',
    title: 'Physics',
    classes: 'Classes VI–XII',
    description:
      'Learn Physics through clear explanations, visual reasoning, numerical practice and examination-oriented preparation.',
    points: [
      'Concept-focused teaching',
      'Board examination support',
      'Numerical problem practice',
    ],
  },
  {
    id: 'competitive-physics',
    icon: Trophy,
    label: 'Competitive',
    title: 'Physics for NEET & JEE',
    classes: 'Focused Preparation',
    description:
      'Develop the conceptual depth, analytical thinking and disciplined problem-solving approach required for competitive examinations.',
    points: [
      'NEET-oriented preparation',
      'JEE-oriented problem solving',
      'Concept and application focus',
    ],
  },
]