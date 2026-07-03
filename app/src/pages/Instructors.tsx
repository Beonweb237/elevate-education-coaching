import { useState } from 'react'
import { Star, Award, Calendar } from 'lucide-react'

const instructors = [
  { name: 'Dr. Sarah Whitfield', specialty: 'Leadership', bio: 'Former Fortune 500 executive turned leadership coach with 15+ years of experience.', rating: 4.9, certifications: ['ICF Master Certified Coach', 'PhD Organizational Psychology'], availability: 'Next opening: 2 weeks', testimonial: 'Sarah helped me find my voice as a leader in ways I didn\'t think were possible.' },
  { name: 'Marcus Chen', specialty: 'Business', bio: 'Ex-McKinsey consultant specializing in strategy and growth for scaling companies.', rating: 4.8, certifications: ['MBA Wharton', 'Certified Business Coach'], availability: 'Next opening: 1 week', testimonial: 'Marcus\'s frameworks are directly responsible for our fundraising success.' },
  { name: 'Elena Rodriguez', specialty: 'Personal', bio: 'Certified psychologist and mindset coach helping professionals build lasting habits.', rating: 5.0, certifications: ['Licensed Psychologist', 'ICF Professional Certified Coach'], availability: 'Next opening: 3 weeks', testimonial: 'Elena\'s approach to habit-building actually stuck, unlike anything I\'d tried before.' },
  { name: 'James Okafor', specialty: 'Leadership', bio: 'Executive coach focused on communication and high-stakes decision making.', rating: 4.7, certifications: ['ICF Professional Certified Coach', 'MSc Communication'], availability: 'Next opening: Immediate', testimonial: 'James transformed how I handle high-pressure board meetings.' },
]

const specialties = ['All', 'Leadership', 'Business', 'Personal']
const featured = instructors.slice(0, 2)

export default function Instructors() {
  const [activeSpecialty, setActiveSpecialty] = useState('All')

  const filtered = instructors.filter((i) => activeSpecialty === 'All' || i.specialty === activeSpecialty)

  return (
    <div className="pt-24 min-h-[100dvh] bg-cream">
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <h1 className="font-serif text-[40px] text-deep-forest mb-4">Meet Our Coaches</h1>
          <p className="font-sans text-mid-gray max-w-[560px] mb-14">
            Learn from world-class coaches with proven expertise in leadership, business and
            personal growth.
          </p>

          {/* Featured coaches */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl text-deep-forest mb-8">Featured Coaches</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {featured.map((coach) => (
                <div key={coach.name} className="p-8 rounded-2xl bg-warm-sand/40">
                  <h3 className="font-serif text-xl text-deep-forest mb-1">{coach.name}</h3>
                  <p className="font-sans text-xs uppercase tracking-wide text-amber-gold mb-3">{coach.specialty}</p>
                  <p className="font-sans text-sm text-mid-gray mb-4">{coach.bio}</p>
                  <p className="font-serif text-sm text-deep-forest italic mb-4">"{coach.testimonial}"</p>
                  <div className="flex flex-wrap gap-2">
                    {coach.certifications.map((cert) => (
                      <span key={cert} className="flex items-center gap-1 px-3 py-1 rounded-full bg-white text-xs text-deep-forest">
                        <Award size={12} className="text-amber-gold" />
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

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
                <div className="flex items-center justify-center gap-1 mb-4">
                  <Star size={14} className="text-amber-gold fill-amber-gold" />
                  <span className="font-sans text-sm text-deep-forest">{instructor.rating}</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 text-xs text-mid-gray">
                  <Calendar size={12} />
                  {instructor.availability}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
