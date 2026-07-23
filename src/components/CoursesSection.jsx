import { Calculator, Atom, Trophy, CheckCircle2 } from 'lucide-react'

const courses = [
  {
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

export default function CoursesSection() {
  return (
    <section id="courses" className="bg-clean py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-electric">
            Courses
          </p>

          <h2 className="mt-3 font-brand text-3xl font-extrabold tracking-tight text-navy-deep sm:text-4xl">
            Focused learning for every academic stage
          </h2>

          <p className="mt-4 text-base leading-7 text-text-muted sm:text-lg">
            Structured guidance in Mathematics and Physics for school,
            board and competitive examination preparation.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {courses.map(({ icon: Icon, label, title, classes, description, points }) => (
            <article
              key={title}
              className="group rounded-3xl border border-navy-primary/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-navy-primary text-white transition group-hover:bg-electric">
                  <Icon size={24} />
                </div>

                <span className="rounded-full bg-accent-yellow/25 px-3 py-1 text-xs font-extrabold text-navy-deep">
                  {label}
                </span>
              </div>

              <h3 className="mt-6 font-brand text-2xl font-extrabold text-navy-deep">
                {title}
              </h3>

              <p className="mt-1 font-bold text-electric">
                {classes}
              </p>

              <p className="mt-4 leading-7 text-text-muted">
                {description}
              </p>

              <ul className="mt-5 space-y-3">
                {points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm font-semibold text-text-dark"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-electric"
                    />
                    {point}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-6 inline-flex font-extrabold text-navy-primary transition hover:text-electric focus:outline-none focus-visible:ring-2 focus-visible:ring-electric rounded"
              >
                Enquire about this course →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}