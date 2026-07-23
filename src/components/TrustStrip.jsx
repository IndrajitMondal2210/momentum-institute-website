import { GraduationCap, Target, BrainCircuit, Award } from 'lucide-react'

const items = [
  {
    icon: GraduationCap,
    title: 'Qualified Educator',
    subtitle: 'M.Sc. Physics, B.Ed.',
  },
  {
    icon: Target,
    title: 'Exam-Focused',
    subtitle: 'Boards, NEET & JEE',
  },
  {
    icon: BrainCircuit,
    title: 'Concept First',
    subtitle: 'Strong fundamentals',
  },
  {
    icon: Award,
    title: 'Student-Centred',
    subtitle: 'Guided practice',
  },
]

export default function TrustStrip() {
  return (
    <section
      aria-label="Institute highlights"
      className="border-y border-navy-primary/10 bg-white"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 py-5 sm:px-6 md:grid-cols-4 lg:px-8">
        {items.map(({ icon: Icon, title, subtitle }) => (
          <div
            key={title}
            className="flex items-center gap-3 rounded-xl p-2"
          >
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-clean text-electric">
              <Icon size={20} />
            </div>

            <div>
              <div className="text-sm font-extrabold text-navy-deep">
                {title}
              </div>

              <div className="text-xs text-text-muted">
                {subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}