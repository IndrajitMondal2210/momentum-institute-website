import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, MessageCircleQuestion } from 'lucide-react'

const faqs = [
  {
    id: 1,
    question: 'What classes and subjects does Momentum Institute offer?',
    answer:
      'Momentum Institute offers Mathematics for Classes VI–X and Physics for Classes VI–XII. Dedicated Physics preparation is also available for NEET and JEE examinations. Students from CBSE, ICSE and the West Bengal Board (English medium) are supported.',
  },
  {
    id: 2,
    question: 'Who teaches the classes?',
    answer:
      'The classes are taught and mentored by Moumita Mondal, M.Sc. Physics and B.Ed., with a focus on clear concepts, structured practice and disciplined academic development.',
  },
  {
    id: 3,
    question: 'Do you provide Physics coaching for NEET and JEE?',
    answer:
      'Yes. Momentum Institute provides focused Physics preparation for NEET and JEE, with emphasis on conceptual understanding, numerical problem solving and application-based learning.',
  },
  {
    id: 4,
    question: 'Which boards and examinations are supported?',
    answer:
      'Momentum Institute supports students following CBSE, ICSE and the West Bengal Board (English medium) for school and board-level Physics and Mathematics. Focused Physics preparation is also available for competitive examinations such as NEET and JEE.',
  },
  {
    id: 5,
    question: 'How does Momentum Institute approach teaching?',
    answer:
      'The approach is concept-first and structured around understanding, guided practice, regular revision and progressive improvement. The aim is to help students understand the reasoning behind concepts rather than rely only on memorisation.',
  },
  {
    id: 6,
    question: 'How are students supported when they have doubts?',
    answer:
      'Students are encouraged to ask questions and clarify conceptual gaps during the learning process. Doubt support and guided practice are an important part of the teaching approach.',
  },
  {
    id: 7,
    question: 'Where is Momentum Institute located?',
    answer:
      'Momentum Institute is located at Trilok Abasan, Gopalpur I, Kalipark, Bablatala, Rajarhat, Kolkata, West Bengal 700136.',
  },
  {
    id: 8,
    question: 'How can I enquire about admission?',
    answer:
      'You can contact Momentum Institute by phone or WhatsApp to discuss available courses, class requirements and admission enquiries. You can also use the contact section on this website.',
  },
]

function FAQItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      layout
      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
        isOpen
          ? 'border-navy-primary/20 bg-clean shadow-md'
          : 'border-navy-primary/10 bg-white shadow-sm hover:border-navy-primary/20 hover:shadow-md'
      }`}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
        aria-expanded={isOpen}
      >
        <span
          className={`pr-2 font-brand text-base font-extrabold transition-colors sm:text-lg ${
            isOpen ? 'text-navy-deep' : 'text-text-dark'
          }`}
        >
          {faq.question}
        </span>

        <span
          className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-colors ${
            isOpen
              ? 'bg-navy-primary text-white'
              : 'bg-clean text-navy-primary'
          }`}
        >
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <ChevronDown size={19} />
          </motion.span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <div className="border-t border-navy-primary/10 px-5 pb-5 pt-4 leading-7 text-text-muted sm:px-6">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-clean py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-80 w-[700px] -translate-x-1/2 rounded-full bg-electric/5 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.2em] text-electric">
            <MessageCircleQuestion size={18} />
            FAQ
          </p>

          <h2 className="mt-3 font-brand text-3xl font-extrabold tracking-tight text-navy-deep sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-base leading-7 text-text-muted sm:text-lg">
            Find answers to common questions about courses, teaching,
            competitive preparation and admissions at Momentum Institute.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 lg:grid-cols-2 lg:items-start">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
              }}
            >
              <FAQItem faq={faq} />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-text-muted">
            Still have a question?
          </p>

          <a
            href="#contact"
            className="mt-3 inline-flex items-center justify-center rounded-xl bg-navy-primary px-6 py-3 font-extrabold text-white transition hover:bg-electric focus:outline-none focus-visible:ring-2 focus-visible:ring-electric"
          >
            Contact Momentum Institute
          </a>
        </div>
      </div>
    </section>
  )
}