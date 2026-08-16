import { ArrowRight, PhoneCall } from 'lucide-react'
import { motion } from 'framer-motion'


export default function AdmissionsCTA() {
  return (
    <section className="bg-clean py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-navy-deep px-6 py-10 text-white shadow-2xl sm:px-10 lg:px-14">
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-20 right-20 h-64 w-64 rounded-full bg-electric/20 blur-3xl"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]"
          >
            <div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-accent-red px-3 py-1 text-sm font-extrabold">
                  Admissions Open
                </span>

                <span className="rounded-full bg-accent-yellow px-3 py-1 text-sm font-extrabold text-navy-deep">
                  Limited Seats
                </span>
              </div>

              <h2 className="mt-5 max-w-3xl font-brand text-3xl font-extrabold tracking-tight sm:text-4xl">
                Start building stronger concepts and greater academic confidence
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-white/75">
                Enquire about Mathematics and Physics classes for school,
                boards, NEET and JEE preparation.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-accent-red px-5 py-3 font-extrabold text-white transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Enquire Now
                <ArrowRight size={18} />
              </a>

              <a
                href="tel:+917001961919"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/30 px-5 py-3 font-extrabold text-white transition hover:bg-white hover:text-navy-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <PhoneCall size={18} />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}