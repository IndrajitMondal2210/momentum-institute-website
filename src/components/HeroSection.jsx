import { ArrowRight, BookOpen, Sparkles, Atom, Orbit } from 'lucide-react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

const floatVariants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

const slowFloatVariants = {
  animate: {
    y: [0, -20, 0],
    rotate: [0, 4, -4, 0],
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-65px)] overflow-hidden bg-gradient-to-br from-white via-clean to-white"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 opacity-[0.06] bg-grid-pattern" />

        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-electric/5 blur-[100px]" />

        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-navy-primary/5 blur-[120px]" />

        <motion.div
          variants={slowFloatVariants}
          animate="animate"
          className="absolute left-[7%] top-1/4 text-navy-primary/5"
        >
          <Atom size={110} strokeWidth={1} />
        </motion.div>

        <motion.div
          variants={floatVariants}
          animate="animate"
          className="absolute bottom-1/4 right-[4%] text-electric/5"
        >
          <Orbit size={145} strokeWidth={1} />
        </motion.div>

        <div className="absolute -top-16 -right-16 h-72 w-72 rounded-full border border-electric/20" />

        <div className="absolute top-28 right-8 h-48 w-48 rounded-full border border-navy-primary/15" />

        <div className="absolute left-4 top-28 select-none text-4xl font-black text-navy-primary/10 sm:text-6xl">
          p = mv
        </div>

        <div className="absolute bottom-8 right-6 select-none text-3xl font-black text-navy-primary/10 sm:text-5xl">
          E = mc²
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-65px)] max-w-7xl items-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-20">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-10">
          
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                <span className="inline-flex items-center gap-2 rounded-full bg-accent-red px-4 py-2 text-sm font-bold text-white shadow-sm">
                  <Sparkles size={16} />
                  Admissions Open
                </span>

                <span className="inline-flex items-center rounded-full border border-accent-yellow bg-accent-yellow/20 px-4 py-2 text-sm font-bold text-navy-deep shadow-sm">
                  Limited Seats
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-brand text-[clamp(2.4rem,6vw,4.7rem)] font-extrabold leading-[1.05] tracking-tight text-navy-deep"
            >
              Build Your{' '}
              <span className="relative inline-block text-electric">
                Momentum
                <span className="absolute -bottom-1 left-0 -z-10 h-2 w-full rounded-full bg-accent-yellow/70" />
              </span>
              <br className="hidden sm:block" /> in Physics &amp; Mathematics
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-2xl text-base leading-7 text-text-muted sm:text-lg lg:max-w-xl"
            >
              Concept-focused guidance in Physics and Mathematics for school,
              board and competitive examination preparation.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start"
            >
              {['Classes VI–XII', 'CBSE', 'ICSE', 'NEET', 'JEE'].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-navy-primary/15 bg-white px-3 py-1.5 text-sm font-semibold text-navy-primary shadow-sm"
                  >
                    {item}
                  </span>
                )
              )}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-7 grid w-full max-w-xl gap-3 rounded-2xl border border-navy-primary/10 bg-white/80 p-4 shadow-sm backdrop-blur sm:grid-cols-3"
            >
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
                  NEET &amp; JEE
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
            >
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-accent-red px-6 py-3 font-extrabold text-white shadow-lg shadow-accent-red/20 transition duration-300 hover:-translate-y-0.5 hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-red"
              >
                Enquire for Admission
                <ArrowRight size={18} />
              </a>

              <a
                href="#courses"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-navy-primary bg-white px-6 py-3 font-extrabold text-navy-primary transition duration-300 hover:bg-navy-primary hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-electric"
              >
                <BookOpen size={18} />
                Explore Courses
              </a>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: 'easeOut',
            }}
            className="relative mx-auto w-full max-w-md lg:max-w-lg"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-electric/20 via-accent-yellow/10 to-navy-primary/20 blur-2xl"
            />

            <div className="relative overflow-visible rounded-[2rem] border border-navy-primary/15 bg-white p-3 shadow-2xl">
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
                      Teacher photograph unavailable
                    </p>
                  </div>
                </div>


              </div>
            </div>

            {/* Decorative Frames */}
            <div
              aria-hidden="true"
              className="absolute -inset-4 -z-10 rotate-3 rounded-3xl border border-navy-primary/10 transition-transform duration-700 hover:rotate-6"
            />

            <div
              aria-hidden="true"
              className="absolute -inset-4 -z-10 -rotate-2 rounded-3xl border border-electric/10 transition-transform duration-700 hover:-rotate-4"
            />

            {/* Floating Educator Card */}
            <motion.div
              variants={floatVariants}
              animate="animate"
              className="absolute -bottom-7 -left-4 max-w-[280px] rounded-2xl border border-white bg-white/85 p-4 shadow-xl backdrop-blur-xl sm:-left-10 sm:p-5"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy-primary text-white sm:h-12 sm:w-12">
                  <span className="text-lg font-bold">MM</span>
                </div>

                <div>
                  <h3 className="font-bold leading-tight text-navy-deep sm:text-lg">
                    Moumita Mondal
                  </h3>

                  <p className="mb-1 text-sm font-medium text-electric">
                    Physics Educator
                  </p>

                  <p className="text-xs font-medium text-text-muted">
                    M.Sc. Physics • B.Ed.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center sm:flex"
        aria-hidden="true"
      >
        <span className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-text-muted">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <span className="text-lg text-text-muted">↓</span>
        </motion.div>
      </motion.div>
    </section>
  )
}