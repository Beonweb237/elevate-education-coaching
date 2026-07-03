import { useState } from 'react'
import { Mail, Phone, Clock, HelpCircle, CalendarCheck, Star } from 'lucide-react'

const faqs = [
  { q: 'How do I choose the right program?', a: 'Book a free consultation call and we\'ll help you find the program that matches your goals.' },
  { q: 'Are programs available online?', a: 'Yes, most of our programs offer online, hybrid or in-person formats.' },
  { q: 'Do you offer payment plans?', a: 'Yes, flexible payment plans are available for all our programs.' },
  { q: 'What is your response time guarantee?', a: 'We guarantee a response within 24 hours for all inquiries, and same-day for enrolled participants.' },
]

const timeSlots = ['Mon 10:00 AM', 'Tue 2:00 PM', 'Wed 11:00 AM', 'Thu 3:00 PM', 'Fri 9:00 AM']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="pt-24 min-h-[100dvh] bg-cream">
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="font-serif text-[40px] text-deep-forest mb-6">Get in Touch</h1>
            {sent ? (
              <div className="p-6 rounded-xl bg-amber-gold/10">
                <p className="font-sans text-deep-forest">Thank you for reaching out. We'll respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Full name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full h-12 px-4 border border-border-gray rounded-lg outline-none focus:border-amber-gold"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full h-12 px-4 border border-border-gray rounded-lg outline-none focus:border-amber-gold"
                />
                <textarea
                  placeholder="How can we help?"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full p-4 border border-border-gray rounded-lg outline-none focus:border-amber-gold resize-none"
                />
                <button
                  type="submit"
                  className="h-12 px-8 bg-amber-gold text-cream font-sans font-medium rounded-full hover:opacity-90 transition-opacity duration-200"
                >
                  Send Message
                </button>
              </form>
            )}

            {/* Booking calendar */}
            <div className="mt-14 p-8 rounded-2xl bg-warm-sand/40">
              <div className="flex items-center gap-2 mb-2">
                <CalendarCheck size={20} className="text-amber-gold" />
                <h2 className="font-serif text-xl text-deep-forest">Book a Free Consultation</h2>
              </div>
              <p className="font-sans text-sm text-mid-gray mb-5">Choose a time that works for you.</p>
              <div className="flex flex-wrap gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className={`px-4 py-2 rounded-full font-sans text-sm transition-colors duration-200 ${
                      selectedSlot === slot
                        ? 'bg-amber-gold text-cream'
                        : 'bg-white text-deep-forest hover:bg-amber-gold/10'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
              {selectedSlot && (
                <p className="font-sans text-sm text-amber-gold mt-4">
                  You selected {selectedSlot}. We'll send a confirmation to your email.
                </p>
              )}
            </div>

            {/* Testimonial */}
            <div className="mt-10 p-6 rounded-2xl border border-border-gray">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="text-amber-gold fill-amber-gold" />
                ))}
              </div>
              <p className="font-serif text-lg text-deep-forest italic mb-3">
                "The consultation call alone gave me more clarity than months of trying to figure it out on my own."
              </p>
              <p className="font-sans text-sm text-mid-gray">Rachel Ito, Marketing Director</p>
            </div>

            <div className="mt-14">
              <h2 className="font-serif text-2xl text-deep-forest mb-6 flex items-center gap-2">
                <HelpCircle size={22} className="text-amber-gold" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.q} className="p-5 rounded-xl border border-border-gray">
                    <p className="font-sans font-semibold text-deep-forest mb-2">{faq.q}</p>
                    <p className="font-sans text-sm text-mid-gray">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="p-8 rounded-2xl border border-border-gray h-fit">
            <div className="flex items-start gap-3 mb-6">
              <Mail size={20} className="text-amber-gold mt-0.5 shrink-0" />
              <div>
                <p className="font-sans font-semibold text-deep-forest">Email</p>
                <p className="font-sans text-sm text-mid-gray">hello@elevate-institute.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3 mb-6">
              <Phone size={20} className="text-amber-gold mt-0.5 shrink-0" />
              <div>
                <p className="font-sans font-semibold text-deep-forest">Phone</p>
                <p className="font-sans text-sm text-mid-gray">(212) 555-0140</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock size={20} className="text-amber-gold mt-0.5 shrink-0" />
              <div>
                <p className="font-sans font-semibold text-deep-forest">Hours</p>
                <p className="font-sans text-sm text-mid-gray">Mon–Fri, 9am–6pm EST</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
