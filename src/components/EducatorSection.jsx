import { GraduationCap, BookOpenCheck, Atom, Calculator } from 'lucide-react'
import { motion } from 'framer-motion'



const qualifications = [
  {
    icon: GraduationCap,
    title: 'M.Sc. in Physics',
    description: 'Advanced academic foundation in Physics',
  },
  {
    icon: BookOpenCheck,
    title: 'B.Ed.',
    description: 'Professional training in teaching and pedagogy',
  },
  {
    icon: Calculator,
    title: 'Mathematics',
    description: 'Guidance for Classes VI–X',
  },
  {
    icon: Atom,
    title: 'Physics',
    description: 'Classes VI–XII, NEET & JEE',
  },
]

export default function EducatorSection() {
    const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }


  return (
    <section id="educator" className="bg-clean py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-lg">
            <div
              aria-hidden="true"
              className="absolute -left-5 -top-5 h-32 w-32 rounded-full bg-accent-yellow/30 blur-2xl"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-5 -right-5 h-40 w-40 rounded-full bg-electric/20 blur-2xl"
            />

            <div className="relative overflow-hidden rounded-[2rem] border border-navy-primary/10 bg-white p-3 shadow-xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-white">
                <img
                  src="/images/moumita-educator.jpeg"
                  alt="Moumita Mondal, educator at Momentum Institute"
                  className="h-full w-full object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling.style.display = 'grid'
                  }}
                />

                <div
                  className="absolute inset-0 hidden place-items-center bg-gradient-to-br from-white to-clean p-8 text-center"
                  role="img"
                  aria-label="Teacher photograph placeholder"
                >
                  <div>
                    <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-navy-primary text-3xl font-black text-white">
                      MM
                    </div>

                    <p className="mt-5 font-brand text-xl font-extrabold text-navy-deep">
                      Moumita Mondal
                    </p>

                    <p className="mt-2 text-sm leading-6 text-text-muted">
                      Teacher photograph placeholder
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-electric">
              About the Educator
            </p>

            <h2 className="mt-3 font-brand text-3xl font-extrabold tracking-tight text-navy-deep sm:text-4xl">
              Learn with Moumita Mondal
            </h2>

            <p className="mt-5 text-base leading-7 text-text-muted sm:text-lg">
              With a strong academic background in Physics and professional
              training in education, Moumita Mondal focuses on helping
              students build conceptual clarity, disciplined problem-solving
              habits and confidence in Mathematics and Physics.
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="mt-8 grid gap-4 sm:grid-cols-2"
            >
              {qualifications.map(({ icon: Icon, title, description }) => (
                <motion.div
                  key={title}
                  variants={itemVariants}
                  className="rounded-2xl border border-navy-primary/10 bg-white p-5 shadow-sm"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-clean text-electric">
                    <Icon size={20} />
                  </div>

                  <h3 className="mt-4 font-extrabold text-navy-deep">
                    {title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-text-muted">
                    {description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-7 rounded-2xl border-l-4 border-accent-yellow bg-white p-5 shadow-sm">
              <p className="font-brand text-lg font-extrabold text-navy-deep">
                “Strong concepts create strong confidence.”
              </p>

              <p className="mt-2 text-sm leading-6 text-text-muted">
                The teaching approach prioritises understanding, application
                and consistent academic improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}