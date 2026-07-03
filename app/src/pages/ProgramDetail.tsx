import { useParams, Link } from 'react-router'
import { Clock, Monitor, Award, Check } from 'lucide-react'

const programs: Record<string, { title: string; category: string; duration: string; format: string; image: string; description: string; modules: string[]; coach: string }> = {
  'leadership-executif': {
    title: 'Leadership Executif',
    category: 'Leadership',
    duration: '8 weeks',
    format: 'Hybrid',
    image: '/program-leadership.jpg',
    description: 'Develop the executive presence and strategic vision needed to lead teams and organizations through change.',
    modules: ['Self-awareness & Executive Presence', 'Strategic Decision Making', 'Leading Through Change', 'Team Motivation & Delegation', 'Final Capstone Project'],
    coach: 'Dr. Sarah Whitfield',
  },
  'strategie-business': {
    title: 'Strategy & Business',
    category: 'Business',
    duration: '6 weeks',
    format: 'Online',
    image: '/program-business.jpg',
    description: 'Master the frameworks used by top consultants to build winning business strategies.',
    modules: ['Market Analysis', 'Competitive Positioning', 'Growth Strategy', 'Financial Modeling'],
    coach: 'Marcus Chen',
  },
  'developpement-personnel': {
    title: 'Personal Development',
    category: 'Personal',
    duration: '4 weeks',
    format: 'Online',
    image: '/program-personal.jpg',
    description: 'Build the habits, mindset and clarity needed to unlock your full potential.',
    modules: ['Goal Setting', 'Habit Formation', 'Emotional Intelligence', 'Work-Life Balance'],
    coach: 'Elena Rodriguez',
  },
}

export default function ProgramDetail() {
  const { slug } = useParams()
  const program = programs[slug ?? ''] ?? programs['leadership-executif']

  return (
    <div className="pt-24 min-h-[100dvh] bg-cream">
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <span className="font-sans text-xs uppercase tracking-wide text-amber-gold">
              {program.category}
            </span>
            <h1 className="font-serif text-[40px] text-deep-forest mt-2 mb-6">{program.title}</h1>
            <div className="aspect-video rounded-2xl overflow-hidden mb-8">
              <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
            </div>
            <p className="font-sans text-mid-gray leading-relaxed mb-10">{program.description}</p>

            <h2 className="font-serif text-2xl text-deep-forest mb-6">Program Modules</h2>
            <ul className="space-y-3">
              {program.modules.map((module, i) => (
                <li key={module} className="flex items-start gap-3 p-4 rounded-lg border border-border-gray">
                  <span className="w-7 h-7 rounded-full bg-amber-gold/15 text-amber-gold flex items-center justify-center text-sm font-semibold shrink-0">
                    {i + 1}
                  </span>
                  <span className="font-sans text-deep-forest">{module}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <div className="rounded-2xl border border-border-gray p-8 h-fit">
            <div className="space-y-4 mb-8 pb-8 border-b border-border-gray">
              <div className="flex items-center gap-3 text-sm text-mid-gray">
                <Clock size={16} className="text-amber-gold shrink-0" />
                <span>{program.duration}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-mid-gray">
                <Monitor size={16} className="text-amber-gold shrink-0" />
                <span>{program.format}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-mid-gray">
                <Award size={16} className="text-amber-gold shrink-0" />
                <span>Certificate of completion</span>
              </div>
            </div>
            <p className="font-sans text-sm text-mid-gray mb-1">Your coach</p>
            <p className="font-serif text-lg text-deep-forest mb-6">{program.coach}</p>
            <ul className="space-y-2 mb-8">
              {['Live cohort sessions', '1:1 coaching call', 'Lifetime resource access'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-deep-forest">
                  <Check size={14} className="text-amber-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="block w-full h-12 leading-[48px] text-center bg-amber-gold text-cream font-sans font-medium rounded-full hover:opacity-90 transition-opacity duration-200"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
