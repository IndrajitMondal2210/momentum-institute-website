import { MessageCircle, Phone } from 'lucide-react'

export default function FloatingContactActions() {
  return (
    <div
      className="fixed bottom-4 right-4 z-40 flex flex-col gap-3"
      aria-label="Quick contact actions"
    >
      <a
        href="https://wa.me/917001961919"
        target="_blank"
        rel="noreferrer"
        aria-label="Contact Momentum Institute on WhatsApp"
        className="grid h-12 w-12 place-items-center rounded-full bg-green-600 text-white shadow-lg transition hover:-translate-y-0.5 hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
      >
        <MessageCircle size={22} />
      </a>

      <a
        href="tel:+917001961919"
        aria-label="Call Momentum Institute"
        className="grid h-12 w-12 place-items-center rounded-full bg-accent-red text-white shadow-lg transition hover:-translate-y-0.5 hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-red"
      >
        <Phone size={22} />
      </a>
    </div>
  )
}