import { Search, Lightbulb, PenTool, Repeat2, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Identify',
    description:
      'Understand the student’s current level, conceptual gaps and academic requirements.',
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Explain',
    description:
      'Build concepts through clear explanations, reasoning and subject-specific examples.',
  },
  {
    icon: PenTool,
    number: '03',
    title: 'Practise',
    description:
      'Apply concepts through structured questions, numericals and guided problem solving.',
  },
  {
    icon: Repeat2,
    number: '04',
    title: 'Revise',
    description:
      'Strengthen retention through regular revision and focused reinforcement of key topics.',
  },
  {
    icon: TrendingUp,
    number: '05',
    title: 'Progress',
    description:
      'Develop accuracy, confidence and examination readiness through consistent improvement.',
  },
]

export default function TeachingApproachSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-electric">
            Teaching Approach
          </p>

          <h2 className="mt-3 font-brand text-3xl font-extrabold tracking-tight text-navy-deep sm:text-4xl">
            A structured path from understanding to performance
          </h2>

          <p className="mt-4 text-base leading-7 text-text-muted sm:text-lg">
            Learning is designed as a continuous process of identifying gaps,
            building concepts, practising applications and improving steadily.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-5">
          {steps.map(({ icon: Icon, number, title, description }) => (
            <article
              key={number}
              className="relative rounded-3xl border border-navy-primary/10 bg-clean p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-navy-primary text-white">
                  <Icon size={21} />
                </div>

                <span className="font-brand text-2xl font-extrabold text-navy-primary/15">
                  {number}
                </span>
              </div>

              <h3 className="mt-5 font-brand text-xl font-extrabold text-navy-deep">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-text-muted">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}