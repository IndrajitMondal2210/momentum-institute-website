import { Phone, MapPin } from 'lucide-react'

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Courses', href: '#courses' },
  { name: 'Why Momentum', href: '#why-momentum' },
  { name: 'About Educator', href: '#educator' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-white font-black text-navy-deep">
                M
              </div>

              <div>
                <div className="font-brand text-lg font-extrabold">
                  Momentum Institute
                </div>

                <div className="text-sm text-white/60">
                  Build your momentum in Physics
                </div>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/65">
              Concept-focused guidance in Mathematics and Physics for school,
              board and competitive examination preparation.
            </p>
          </div>

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
                  className="w-fit text-sm font-semibold text-white/70 transition hover:text-accent-yellow focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-yellow rounded"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-brand text-lg font-extrabold">
              Contact
            </h3>

            <div className="mt-4 grid gap-4 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-accent-yellow"
                />

                <span>
                Trilok Abasan, Gopalpur I, Kalipark, Bablatala,
                <br />
                Rajarhat, Kolkata, West Bengal 700136
                </span>
              </div>

              <a
                href="tel:+917001961919"
                className="flex w-fit items-center gap-3 transition hover:text-accent-yellow focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-yellow rounded"
              >
                <Phone
                  size={18}
                  className="shrink-0 text-accent-yellow"
                />
                +91 70019 61919
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Momentum Institute. All rights reserved.
        </div>
      </div>
    </footer>
  )
}