import { ArrowRight, BookOpen, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-white via-clean to-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06] bg-grid-pattern"
      />

      <div
        aria-hidden="true"
        className="absolute -top-20 -right-20 h-72 w-72 rounded-full border border-electric/30"
      />

      <div
        aria-hidden="true"
        className="absolute top-24 right-10 h-48 w-48 rounded-full border border-navy-primary/20"
      />

      <div
        aria-hidden="true"
        className="absolute left-4 top-24 text-navy-primary/10 text-4xl sm:text-6xl font-black select-none"
      >
        p = mv
      </div>

      <div
        aria-hidden="true"
        className="absolute right-6 bottom-10 text-navy-primary/10 text-3xl sm:text-5xl font-black select-none"
      >
        E = mc²
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-red px-3 py-1 text-sm font-bold text-white">
              <Sparkles size={16} />
              Admissions Open
            </span>

            <span className="inline-flex rounded-full border border-accent-yellow bg-accent-yellow/20 px-3 py-1 text-sm font-bold text-navy-deep">
              Limited Seats
            </span>
          </div>

          <h1 className="font-brand text-[clamp(2.2rem,7vw,4.7rem)] font-extrabold leading-[1.05] tracking-tight text-navy-deep">
            Build Your{' '}
            <span className="relative inline-block text-electric">
              Momentum
              <span className="absolute left-0 -bottom-1 h-2 w-full rounded-full bg-accent-yellow/70 -z-10" />
            </span>{' '}
            in Physics
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-text-muted sm:text-lg">
            Concept-focused guidance in Physics and Mathematics for school,
            board and competitive examination preparation.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {['Classes VI–XII', 'CBSE', 'ICSE', 'NEET', 'JEE'].map((item) => (
              <span
                key={item}
                className="rounded-full border border-navy-primary/15 bg-white px-3 py-1.5 text-sm font-semibold text-navy-primary shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-7 grid gap-3 rounded-2xl border border-navy-primary/10 bg-white/80 p-4 shadow-sm sm:grid-cols-3">
            <div>
              <div className="text-xs font-bold uppercase tracking-wide text-text-muted">
                Mathematics
              </div>
              <div className="mt-1 font-extrabold text-navy-deep">
                Classes VI–X
              </div>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wide text-text-muted">
                Physics
              </div>
              <div className="mt-1 font-extrabold text-navy-deep">
                Classes VI–XII
              </div>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wide text-text-muted">
                Competitive Physics
              </div>
              <div className="mt-1 font-extrabold text-navy-deep">
                NEET & JEE
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-accent-red px-5 py-3 font-extrabold text-white shadow-lg shadow-accent-red/20 transition hover:-translate-y-0.5 hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-red"
            >
              Enquire for Admission
              <ArrowRight size={18} />
            </a>

            <a
              href="#courses"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-navy-primary bg-white px-5 py-3 font-extrabold text-navy-primary transition hover:bg-navy-primary hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-electric"
            >
              <BookOpen size={18} />
              Explore Courses
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-electric/20 via-accent-yellow/10 to-navy-primary/20 blur-2xl"
          />

          <div className="relative overflow-hidden rounded-[2rem] border border-navy-primary/15 bg-white p-3 shadow-2xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-clean">
              <img
                src="/images/moumita-mondal.jpg"
                alt="Moumita Mondal, Physics educator at Momentum Institute"
                className="h-full w-full object-cover object-center"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling.style.display = 'grid'
                }}
              />

              <div
                className="absolute inset-0 hidden place-items-center bg-gradient-to-br from-clean to-white p-8 text-center"
                role="img"
                aria-label="Teacher photograph placeholder"
              >
                <div>
                  <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-navy-primary text-3xl font-black text-white">
                    MM
                  </div>

                  <p className="mt-4 font-extrabold text-navy-deep">
                    Moumita Mondal
                  </p>

                  <p className="mt-1 text-sm text-text-muted">
                    Add the final photograph at
                    <br />
                    <code className="text-xs">
                      /public/images/moumita-mondal.jpg
                    </code>
                  </p>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="absolute inset-x-4 bottom-4 rounded-2xl bg-navy-deep/90 p-4 text-white backdrop-blur"
              >
                <div className="font-brand text-xl font-extrabold">
                  Moumita Mondal
                </div>

                <div className="mt-1 text-sm text-white/80">
                  Physics Educator • M.Sc. Physics • B.Ed.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}