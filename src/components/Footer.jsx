import { Phone, MapPin, Mail, ArrowUp } from 'lucide-react'

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Courses', href: '#courses' },
  { name: 'Why Momentum', href: '#why-momentum' },
  { name: 'About Educator', href: '#educator' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault()

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="relative overflow-hidden bg-navy-deep text-white">
      {/* Subtle decorative background */}
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-electric/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-32 right-10 h-80 w-80 rounded-full bg-electric/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-electric font-black text-white shadow-lg">
                M
              </div>

              <div>
                <div className="font-brand text-xl font-extrabold">
                  Momentum Institute
                </div>

                <div className="text-sm text-white/60">
                  Build your momentum in Physics & Mathematics
                </div>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/65">
              Concept-focused guidance in Mathematics and Physics for school,
              board and competitive examination preparation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-brand text-lg font-extrabold">
              Quick Links
            </h3>

            <nav
              className="mt-4 grid gap-3"
              aria-label="Footer navigation"
            >
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-fit text-sm font-semibold text-white/70 transition hover:translate-x-1 hover:text-accent-yellow focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-yellow rounded"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-brand text-lg font-extrabold">
              Contact
            </h3>

            <div className="mt-4 grid gap-4 text-sm text-white/70">
              
              {/* Location */}
              <a
                href="https://maps.app.goo.gl/zPmrQNAuBPRkNp8B7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 transition hover:text-accent-yellow focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-yellow rounded"
              >
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-accent-yellow"
                />

                <span>
                  Trilok Abasan, Gopalpur I, Kalipark, Bablatala,
                  <br />
                  Rajarhat, Kolkata, West Bengal 700136
                  <span className="mt-1 block text-xs font-semibold text-accent-yellow">
                    View on Google Maps →
                  </span>
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+917001961919"
                className="flex w-fit items-center gap-3 transition hover:text-accent-yellow focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-yellow rounded"
              >
                <Phone
                  size={18}
                  className="shrink-0 text-accent-yellow"
                />

                <span>+91 70019 61919</span>
              </a>

              {/* Email */}
              <a
                href="mailto:mou2711.mm@gmail.com"
                className="flex w-fit items-center gap-3 transition hover:text-accent-yellow focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-yellow rounded"
              >
                <Mail
                  size={18}
                  className="shrink-0 text-accent-yellow"
                />

                <span>mou2711.mm@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <div className="text-center text-sm text-white/50 sm:text-left">
            © {new Date().getFullYear()} Momentum Institute. All rights reserved.
          </div>

          {/* Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="group grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:-translate-y-1 hover:border-electric hover:bg-electric hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-electric"
          >
            <ArrowUp
              size={19}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </footer>
  )
}