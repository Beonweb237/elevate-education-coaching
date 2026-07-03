import { useState } from 'react'
import { Link } from 'react-router'
import { Clock, Monitor } from 'lucide-react'

const programs = [
  { slug: 'leadership-executif', title: 'Leadership Executif', category: 'Leadership', duration: '8 weeks', format: 'Hybrid', image: '/program-leadership.jpg' },
  { slug: 'strategie-business', title: 'Strategy & Business', category: 'Business', duration: '6 weeks', format: 'Online', image: '/program-business.jpg' },
  { slug: 'developpement-personnel', title: 'Personal Development', category: 'Personal', duration: '4 weeks', format: 'Online', image: '/program-personal.jpg' },
  { slug: 'communication-impact', title: 'Impactful Communication', category: 'Leadership', duration: '5 weeks', format: 'In-person', image: '/program-leadership.jpg' },
  { slug: 'management-equipe', title: 'Team Management', category: 'Business', duration: '6 weeks', format: 'Hybrid', image: '/program-business.jpg' },
  { slug: 'confiance-en-soi', title: 'Confidence & Public Speaking', category: 'Personal', duration: '4 weeks', format: 'Online', image: '/program-personal.jpg' },
]

const categories = ['All', 'Leadership', 'Business', 'Personal']

export default function Programs() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = programs.filter((p) => activeCategory === 'All' || p.category === activeCategory)

  return (
    <div className="pt-24 min-h-[100dvh] bg-cream">
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <h1 className="font-serif text-[40px] text-deep-forest mb-4">Our Programs</h1>
          <p className="font-sans text-mid-gray max-w-[560px] mb-10">
            Discover our coaching and training programs designed to accelerate your professional
            and personal growth.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-sans text-sm transition-colors duration-200 ${
                  activeCategory === cat
                    ? 'bg-amber-gold text-cream'
                    : 'border border-border-gray text-deep-forest hover:border-amber-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((program) => (
              <Link
                key={program.slug}
                to={`/programs/${program.slug}`}
                className="group block rounded-2xl overflow-hidden border border-border-gray hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="font-sans text-xs uppercase tracking-wide text-amber-gold">
                    {program.category}
                  </span>
                  <h3 className="font-serif text-xl text-deep-forest mt-2 mb-4">{program.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-mid-gray">
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} />
                      {program.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Monitor size={14} />
                      {program.format}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
