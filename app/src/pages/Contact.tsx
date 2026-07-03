import { useState } from 'react'
import { Mail, Phone, Clock, HelpCircle } from 'lucide-react'

const faqs = [
  { q: 'How do I choose the right program?', a: 'Book a free consultation call and we\'ll help you find the program that matches your goals.' },
  { q: 'Are programs available online?', a: 'Yes, most of our programs offer online, hybrid or in-person formats.' },
  { q: 'Do you offer payment plans?', a: 'Yes, flexible payment plans are available for all our programs.' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

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
