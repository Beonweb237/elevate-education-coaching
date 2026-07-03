import { useState } from 'react'
import { Star } from 'lucide-react'

const instructors = [
  { name: 'Dr. Sarah Whitfield', specialty: 'Leadership', bio: 'Former Fortune 500 executive turned leadership coach with 15+ years of experience.', rating: 4.9 },
  { name: 'Marcus Chen', specialty: 'Business', bio: 'Ex-McKinsey consultant specializing in strategy and growth for scaling companies.', rating: 4.8 },
  { name: 'Elena Rodriguez', specialty: 'Personal', bio: 'Certified psychologist and mindset coach helping professionals build lasting habits.', rating: 5.0 },
  { name: 'James Okafor', specialty: 'Leadership', bio: 'Executive coach focused on communication and high-stakes decision making.', rating: 4.7 },
]

const specialties = ['All', 'Leadership', 'Business', 'Personal']

export default function Instructors() {
  const [activeSpecialty, setActiveSpecialty] = useState('All')

  const filtered = instructors.filter((i) => activeSpecialty === 'All' || i.specialty === activeSpecialty)

  return (
    <div className="pt-24 min-h-[100dvh] bg-cream">
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <h1 className="font-serif text-[40px] text-deep-forest mb-4">Meet Our Coaches</h1>
          <p className="font-sans text-mid-gray max-w-[560px] mb-10">
            Learn from world-class coaches with proven expertise in leadership, business and
            personal growth.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            {specialties.map((spec) => (
              <button
                key={spec}
                onClick={() => setActiveSpecialty(spec)}
                className={`px-5 py-2 rounded-full font-sans text-sm transition-colors duration-200 ${
                  activeSpecialty === spec
                    ? 'bg-amber-gold text-cream'
                    : 'border border-border-gray text-deep-forest hover:border-amber-gold'
                }`}
              >
                {spec}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((instructor) => (
              <div key={instructor.name} className="p-6 rounded-2xl border border-border-gray text-center">
                <h3 className="font-serif text-lg text-deep-forest mb-1">{instructor.name}</h3>
                <p className="font-sans text-xs uppercase tracking-wide text-amber-gold mb-3">
                  {instructor.specialty}
                </p>
                <p className="font-sans text-sm text-mid-gray mb-4">{instructor.bio}</p>
                <div className="flex items-center justify-center gap-1">
                  <Star size={14} className="text-amber-gold fill-amber-gold" />
                  <span className="font-sans text-sm text-deep-forest">{instructor.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
