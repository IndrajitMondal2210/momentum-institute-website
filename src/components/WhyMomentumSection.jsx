import {
  Lightbulb,
  ClipboardCheck,
  Users,
  MessageCircleQuestion,
  LineChart,
  BookMarked,
} from 'lucide-react'
import { motion } from 'framer-motion'



const features = [
  {
    icon: Lightbulb,
    title: 'Concept Clarity',
    description:
      'Topics are explained from the fundamentals so students understand the reasoning behind formulas and methods.',
  },
  {
    icon: ClipboardCheck,
    title: 'Regular Practice',
    description:
      'Structured problem solving and revision help students convert conceptual understanding into examination performance.',
  },
  {
    icon: Users,
    title: 'Student-Centred Guidance',
    description:
      'Teaching is designed to support different learning speeds while keeping students engaged and academically focused.',
  },
  {
    icon: MessageCircleQuestion,
    title: 'Doubt Support',
    description:
      'Students are encouraged to ask questions and resolve conceptual gaps before they become long-term weaknesses.',
  },
  {
    icon: LineChart,
    title: 'Progress-Oriented Learning',
    description:
      'A disciplined approach helps students steadily improve accuracy, confidence and problem-solving ability.',
  },
  {
    icon: BookMarked,
    title: 'Exam-Relevant Preparation',
    description:
      'Learning remains aligned with school, board and competitive examination requirements without sacrificing fundamentals.',
  },
]

export default function WhyMomentumSection() {
    const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const cardVariants = {
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
    <section id="why-momentum" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-electric">
              Why Momentum
            </p>

            <h2 className="mt-3 font-brand text-3xl font-extrabold tracking-tight text-navy-deep sm:text-4xl">
              A learning environment built for clarity, confidence and progress
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-text-muted sm:text-lg">
              Momentum Institute focuses on disciplined academic growth through
              strong concepts, guided practice and consistent student support.
            </p>

            <div className="mt-7 rounded-3xl bg-navy-deep p-6 text-white shadow-xl">
              <p className="text-sm font-bold uppercase tracking-wider text-accent-yellow">
                The Momentum Approach
              </p>

              <p className="mt-3 font-brand text-2xl font-extrabold">
                Understand deeply. Practise consistently. Perform confidently.
              </p>
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {features.map(({ icon: Icon, title, description }) => (
              <motion.article
                key={title}
                variants={cardVariants}
                className="rounded-3xl border border-navy-primary/10 bg-clean p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-electric shadow-sm">
                  <Icon size={22} />
                </div>

                <h3 className="mt-5 font-brand text-xl font-extrabold text-navy-deep">
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-text-muted">
                  {description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}