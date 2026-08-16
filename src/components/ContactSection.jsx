import { MapPin, Phone, MessageCircle, Clock3 } from 'lucide-react'
import { motion } from 'framer-motion'


export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-electric">
              Contact
            </p>

            <h2 className="mt-3 font-brand text-3xl font-extrabold tracking-tight text-navy-deep sm:text-4xl">
              Enquire about admissions and course guidance
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-text-muted sm:text-lg">
              Contact Momentum Institute for information about available
              classes, subject guidance and admission enquiries.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="flex items-start gap-4 rounded-2xl border border-navy-primary/10 bg-clean p-5">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-electric">
                  <MapPin size={21} />
                </div>

                <div>
                  <h3 className="font-extrabold text-navy-deep">
                    Location
                  </h3>

                  <p className="mt-1 leading-6 text-text-muted">
                    Trilok Abasan, Gopalpur I, Kalipark, Bablatala,
                    <br />
                    Rajarhat, Kolkata, West Bengal 700136
                  </p>

                  <a
                    href="https://maps.app.goo.gl/zPmrQNAuBPRkNp8B7"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex font-semibold text-electric transition hover:text-navy-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-electric rounded"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-navy-primary/10 bg-clean p-5">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-electric">
                  <Phone size={21} />
                </div>

                <div>
                  <h3 className="font-extrabold text-navy-deep">
                    Phone
                  </h3>

                  <a
                    href="tel:+917001961919"
                    className="mt-1 inline-block font-semibold text-text-muted transition hover:text-electric focus:outline-none focus-visible:ring-2 focus-visible:ring-electric rounded"
                  >
                    +91 70019 61919
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-navy-primary/10 bg-clean p-5">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-electric">
                  <Clock3 size={21} />
                </div>

                <div>
                  <h3 className="font-extrabold text-navy-deep">
                    Enquiry
                  </h3>

                  <p className="mt-1 leading-6 text-text-muted">
                    Call or message to discuss course availability and
                    admission details.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[2rem] border border-navy-primary/10 bg-clean p-6 shadow-sm sm:p-8"
          >            
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-electric">
              Quick Contact
            </p>

            <h3 className="mt-3 font-brand text-2xl font-extrabold text-navy-deep sm:text-3xl">
              Speak directly with Momentum Institute
            </h3>

            <p className="mt-4 leading-7 text-text-muted">
              For admission enquiries, course information or class-related
              questions, use the contact options below.
            </p>

            <div className="mt-7 grid gap-3">
              <a
                href="tel:+917001961919"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-navy-primary px-5 py-3 font-extrabold text-white transition hover:bg-electric focus:outline-none focus-visible:ring-2 focus-visible:ring-electric"
              >
                <Phone size={18} />
                Call +91 70019 61919
              </a>

              <a
                href="https://wa.me/917001961919"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-navy-primary px-5 py-3 font-extrabold text-navy-primary transition hover:bg-navy-primary hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-electric"
              >
                <MessageCircle size={18} />
                WhatsApp Enquiry
              </a>
            </div>

            <div className="mt-7 rounded-2xl bg-white p-5">
              <p className="text-sm font-bold text-text-muted">
                Momentum Institute
              </p>

              <p className="mt-2 font-brand text-xl font-extrabold text-navy-deep">
                Build your momentum in Physics
              </p>

              <p className="mt-2 text-sm leading-6 text-text-muted">
                Mathematics for Classes VI–X and Physics for Classes VI–XII,
                NEET & JEE preparation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}