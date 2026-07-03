import { useState } from 'react'
import { Link } from 'react-router'
import { Clock, Monitor, Award, Users, TrendingUp } from 'lucide-react'

const programs = [
  { slug: 'leadership-executif', title: 'Leadership Executif', category: 'Leadership', duration: '8 weeks', format: 'Hybrid', image: '/program-leadership.jpg', price: '$2,400' },
  { slug: 'strategie-business', title: 'Strategy & Business', category: 'Business', duration: '6 weeks', format: 'Online', image: '/program-business.jpg', price: '$1,800' },
  { slug: 'developpement-personnel', title: 'Personal Development', category: 'Personal', duration: '4 weeks', format: 'Online', image: '/program-personal.jpg', price: '$1,200' },
  { slug: 'communication-impact', title: 'Impactful Communication', category: 'Leadership', duration: '5 weeks', format: 'In-person', image: '/program-leadership.jpg', price: '$1,600' },
  { slug: 'management-equipe', title: 'Team Management', category: 'Business', duration: '6 weeks', format: 'Hybrid', image: '/program-business.jpg', price: '$1,900' },
  { slug: 'confiance-en-soi', title: 'Confidence & Public Speaking', category: 'Personal', duration: '4 weeks', format: 'Online', image: '/program-personal.jpg', price: '$1,100' },
]

const categories = ['All', 'Leadership', 'Business', 'Personal']

const programBenefits = [
  { icon: Award, title: 'Certified Coaches', desc: 'Learn from ICF-certified coaches with real-world executive experience.' },
  { icon: Users, title: 'Small Cohorts', desc: 'Maximum 15 participants per cohort for personalized attention.' },
  { icon: TrendingUp, title: 'Measurable Growth', desc: '92% of graduates report a promotion or new role within 12 months.' },
]

export default function Programs() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = programs.filter((p) => activeCategory === 'All' || p.category === activeCategory)
  const featuredProgram = programs[0]

  return (
    <div className="pt-24 min-h-[100dvh] bg-cream">
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <h1 className="font-serif text-[40px] text-deep-forest mb-4">Our Programs</h1>
          <p className="font-sans text-mid-gray max-w-[560px] mb-10">
            Discover our coaching and training programs designed to accelerate your professional
            and personal growth.
          </p>

          {/* Why our programs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
            {programBenefits.map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-full bg-amber-gold/15 flex items-center justify-center shrink-0">
                  <benefit.icon size={20} className="text-amber-gold" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-deep-forest text-sm">{benefit.title}</h3>
                  <p className="font-sans text-xs text-mid-gray mt-1">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Featured program */}
          <div className="mb-16 rounded-2xl overflow-hidden border border-border-gray grid grid-cols-1 lg:grid-cols-2">
            <div className="aspect-video lg:aspect-auto">
              <img src={featuredProgram.image} alt={featuredProgram.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="font-sans text-xs uppercase tracking-wide text-amber-gold mb-2">Featured Program</span>
              <h2 className="font-serif text-2xl text-deep-forest mb-3">{featuredProgram.title}</h2>
              <p className="font-sans text-sm text-mid-gray mb-4">
                Our flagship program combining executive presence, strategic thinking and team leadership over 8 immersive weeks.
              </p>
              <div className="flex items-center gap-4 text-sm text-mid-gray mb-6">
                <span className="flex items-center gap-1.5"><Clock size={14} />{featuredProgram.duration}</span>
                <span className="flex items-center gap-1.5"><Monitor size={14} />{featuredProgram.format}</span>
              </div>
              <Link
                to={`/programs/${featuredProgram.slug}`}
                className="inline-flex w-fit h-11 px-6 items-center bg-amber-gold text-cream font-sans text-sm font-medium rounded-full hover:opacity-90 transition-opacity duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Filters */}
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

          {/* Comparison table */}
          <div className="mb-12 overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[560px]">
              <thead>
                <tr className="border-b border-border-gray text-left">
                  <th className="py-3 font-sans font-semibold text-deep-forest">Program</th>
                  <th className="py-3 font-sans font-semibold text-deep-forest">Duration</th>
                  <th className="py-3 font-sans font-semibold text-deep-forest">Format</th>
                  <th className="py-3 font-sans font-semibold text-deep-forest">Price</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((p) => (
                  <tr key={p.slug} className="border-b border-border-gray/50">
                    <td className="py-3 font-sans text-deep-forest">{p.title}</td>
                    <td className="py-3 font-sans text-mid-gray">{p.duration}</td>
                    <td className="py-3 font-sans text-mid-gray">{p.format}</td>
                    <td className="py-3 font-sans text-amber-gold font-semibold">{p.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
