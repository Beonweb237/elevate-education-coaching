import { useState } from 'react'
import { Users, Target, TrendingUp, Check } from 'lucide-react'

const benefits = [
  { icon: Users, title: 'Team-Wide Coaching', desc: 'Tailored programs designed for your teams and their specific challenges.' },
  { icon: Target, title: 'Measurable Outcomes', desc: 'Clear KPIs tracked throughout the engagement, aligned to your business goals.' },
  { icon: TrendingUp, title: 'Proven ROI', desc: 'Our corporate clients report an average 34% increase in team performance.' },
]

const caseStudies = [
  { company: 'Northgate Financial', result: '28% increase in leadership retention', quote: 'Elevate transformed how our managers communicate and lead.' },
  { company: 'Vertex Consulting', result: '40+ leaders coached in 2024', quote: 'The corporate program gave our teams tools they still use daily.' },
]

export default function Corporate() {
  const [form, setForm] = useState({ company: '', email: '', teamSize: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="pt-24 min-h-[100dvh] bg-cream">
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <h1 className="font-serif text-[40px] text-deep-forest mb-4">Corporate Solutions</h1>
          <p className="font-sans text-mid-gray max-w-[600px] mb-14">
            Custom coaching and training programs designed for your organization's unique needs
            and growth objectives.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-8 rounded-2xl border border-border-gray">
                <benefit.icon size={28} className="text-amber-gold mb-4" />
                <h3 className="font-serif text-xl text-deep-forest mb-2">{benefit.title}</h3>
                <p className="font-sans text-sm text-mid-gray">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-2xl text-deep-forest mb-8">Case Studies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
            {caseStudies.map((study) => (
              <div key={study.company} className="p-8 rounded-2xl bg-warm-sand/40">
                <p className="font-serif text-lg text-deep-forest italic mb-4">"{study.quote}"</p>
                <p className="font-sans font-semibold text-deep-forest">{study.company}</p>
                <p className="font-sans text-sm text-amber-gold">{study.result}</p>
              </div>
            ))}
          </div>

          {/* Quote form */}
          <div className="max-w-[600px]">
            <h2 className="font-serif text-2xl text-deep-forest mb-6">Request a Custom Quote</h2>
            {sent ? (
              <div className="p-6 rounded-xl bg-amber-gold/10 flex items-center gap-3">
                <Check size={20} className="text-amber-gold shrink-0" />
                <p className="font-sans text-deep-forest">Thank you, our team will reach out within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Company name"
                  required
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full h-12 px-4 border border-border-gray rounded-lg outline-none focus:border-amber-gold"
                />
                <input
                  type="email"
                  placeholder="Work email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full h-12 px-4 border border-border-gray rounded-lg outline-none focus:border-amber-gold"
                />
                <input
                  type="text"
                  placeholder="Team size"
                  value={form.teamSize}
                  onChange={(e) => setForm({ ...form, teamSize: e.target.value })}
                  className="w-full h-12 px-4 border border-border-gray rounded-lg outline-none focus:border-amber-gold"
                />
                <textarea
                  placeholder="Tell us about your needs"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full p-4 border border-border-gray rounded-lg outline-none focus:border-amber-gold resize-none"
                />
                <button
                  type="submit"
                  className="h-12 px-8 bg-amber-gold text-cream font-sans font-medium rounded-full hover:opacity-90 transition-opacity duration-200"
                >
                  Request Quote
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
