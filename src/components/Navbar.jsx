import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Courses', href: '#courses' },
  { name: 'Why Momentum', href: '#why-momentum' },
  { name: 'About Educator', href: '#educator' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
  const sections = navLinks.map((link) =>
    document.querySelector(link.href)
  )

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10)
    let current = 'home'

    sections.forEach((section) => {
      if (!section) return

      const top = section.offsetTop - 120
      const height = section.offsetHeight

      if (
        window.scrollY >= top &&
        window.scrollY < top + height
      ) {
        current = section.id
      }
    })

    setActiveSection(current)
  }

  window.addEventListener('scroll', handleScroll)
  handleScroll()

  return () => window.removeEventListener('scroll', handleScroll)
}, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-navy-primary/10 transition-all duration-300 ${
      isScrolled ? 'shadow-lg' : 'shadow-none'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <a
          href="#home"
          className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric rounded"
        >
          <div className="h-9 w-9 rounded-full bg-navy-primary text-white grid place-items-center font-bold">
            M
          </div>

          <div className="leading-tight">
            <div className="font-brand font-extrabold text-navy-deep">
              Momentum Institute
            </div>
            <div className="text-xs text-text-muted">
              Build your momentum in Physics
            </div>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold rounded px-1 py-1 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric ${
                activeSection === link.href.substring(1)
                ? 'text-electric'
                : 'text-text-dark hover:text-electric'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden sm:flex items-center gap-2">
          <a
            href="tel:+917001961919"
            className="hidden md:inline-flex items-center gap-2 rounded-lg border border-navy-primary px-3 py-2 text-sm font-semibold text-navy-primary hover:bg-navy-primary hover:text-white transition"
          >
            <Phone size={16} />
            Call Now
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-accent-red px-4 py-2 text-sm font-bold text-white hover:brightness-95 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-red"
          >
            Enquire Now
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-navy-deep hover:bg-clean focus:outline-none focus-visible:ring-2 focus-visible:ring-electric"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden border-t border-navy-primary/10 bg-white"
          >
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
              <div className="grid gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg px-3 py-3 font-semibold text-text-dark hover:bg-clean focus:outline-none focus-visible:ring-2 focus-visible:ring-electric"
                  >
                    {link.name}
                  </a>
                ))}

                <div className="grid grid-cols-2 gap-2 pt-2 sm:hidden">
                  <a
                    href="tel:+917001961919"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-navy-primary px-3 py-3 text-sm font-bold text-navy-primary"
                  >
                    <Phone size={16} />
                    Call
                  </a>

                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center justify-center rounded-lg bg-accent-red px-3 py-3 text-sm font-bold text-white"
                  >
                    Enquire
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}