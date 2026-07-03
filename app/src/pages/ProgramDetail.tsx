import { useParams, Link } from 'react-router'
import { Clock, Monitor, Award, Check, Star } from 'lucide-react'

interface ProgramData {
  title: string
  category: string
  duration: string
  format: string
  image: string
  description: string
  modules: string[]
  coach: string
  learnings: string[]
  testimonial: { name: string; text: string }
}

const programs: Record<string, ProgramData> = {
  'leadership-executif': {
    title: 'Leadership Executif',
    category: 'Leadership',
    duration: '8 weeks',
    format: 'Hybrid',
    image: '/program-leadership.jpg',
    description: 'Develop the executive presence and strategic vision needed to lead teams and organizations through change.',
    modules: ['Self-awareness & Executive Presence', 'Strategic Decision Making', 'Leading Through Change', 'Team Motivation & Delegation', 'Final Capstone Project'],
    coach: 'Dr. Sarah Whitfield',
    learnings: ['Develop authentic executive presence', 'Master high-stakes decision frameworks', 'Lead teams through organizational change', 'Build a personal leadership brand', 'Delegate effectively without losing control', 'Navigate difficult conversations with confidence'],
    testimonial: { name: 'Amanda Foster, VP Operations', text: 'This program gave me the tools to lead with confidence instead of control. I was promoted within 6 months of finishing.' },
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
    learnings: ['Conduct rigorous market analysis', 'Build defensible competitive positioning', 'Design scalable growth strategies', 'Build financial models for decision-making'],
    testimonial: { name: 'David Kim, Founder', text: 'Strategy & Business completely reshaped how I think about scaling my company. Revenue doubled in 12 months.' },
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
    learnings: ['Set and achieve meaningful goals', 'Build habits that stick long-term', 'Strengthen emotional intelligence', 'Design a sustainable work-life balance'],
    testimonial: { name: 'Priya Sharma, Product Manager', text: 'I finally feel like I can speak up in the room and be heard. This program changed my confidence at work.' },
  },
  'communication-impact': {
    title: 'Impactful Communication',
    category: 'Leadership',
    duration: '5 weeks',
    format: 'In-person',
    image: '/program-leadership.jpg',
    description: 'Master the art of persuasive, clear communication in high-stakes professional settings.',
    modules: ['Public Speaking Fundamentals', 'Storytelling for Business', 'Difficult Conversations', 'Executive Presentation Skills'],
    coach: 'Dr. Sarah Whitfield',
    learnings: ['Structure compelling presentations', 'Use storytelling to influence stakeholders', 'Navigate difficult conversations calmly', 'Command a room with executive presence'],
    testimonial: { name: 'James Okafor, Director', text: 'My presentations to the board are night and day compared to before this program.' },
  },
  'management-equipe': {
    title: 'Team Management',
    category: 'Business',
    duration: '6 weeks',
    format: 'Hybrid',
    image: '/program-business.jpg',
    description: 'Learn to build, motivate and retain high-performing teams in any environment.',
    modules: ['Team Building Fundamentals', 'Performance Management', 'Conflict Resolution', 'Remote Team Leadership'],
    coach: 'Marcus Chen',
    learnings: ['Build cohesive, high-performing teams', 'Design effective performance review systems', 'Resolve team conflict productively', 'Lead distributed and remote teams'],
    testimonial: { name: 'Laura Bennett, Team Lead', text: 'My team\'s engagement scores improved dramatically after applying what I learned here.' },
  },
  'confiance-en-soi': {
    title: 'Confidence & Public Speaking',
    category: 'Personal',
    duration: '4 weeks',
    format: 'Online',
    image: '/program-personal.jpg',
    description: 'Overcome public speaking anxiety and build lasting professional confidence.',
    modules: ['Overcoming Speaking Anxiety', 'Body Language & Presence', 'Structuring Your Message', 'Handling Q&A with Confidence'],
    coach: 'Elena Rodriguez',
    learnings: ['Manage public speaking anxiety', 'Project confident body language', 'Structure clear, memorable messages', 'Handle tough questions gracefully'],
    testimonial: { name: 'Marcus Webb, Analyst', text: 'I used to dread meetings. Now I volunteer to present. This program is life-changing.' },
  },
}

export default function ProgramDetail() {
  const { slug } = useParams()
  const program = programs[slug ?? ''] ?? programs['leadership-executif']
  const currentSlug = slug ?? 'leadership-executif'

  const similarPrograms = Object.entries(programs)
    .filter(([s, p]) => s !== currentSlug && p.category === program.category)
    .slice(0, 2)

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

            {/* What you'll learn */}
            <h2 className="font-serif text-2xl text-deep-forest mb-6">What You'll Learn</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {program.learnings.map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-deep-forest">
                  <Check size={16} className="text-amber-gold mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <h2 className="font-serif text-2xl text-deep-forest mb-6">Program Modules</h2>
            <ul className="space-y-3 mb-10">
              {program.modules.map((module, i) => (
                <li key={module} className="flex items-start gap-3 p-4 rounded-lg border border-border-gray">
                  <span className="w-7 h-7 rounded-full bg-amber-gold/15 text-amber-gold flex items-center justify-center text-sm font-semibold shrink-0">
                    {i + 1}
                  </span>
                  <span className="font-sans text-deep-forest">{module}</span>
                </li>
              ))}
            </ul>

            {/* Testimonial */}
            <div className="p-6 rounded-2xl bg-warm-sand/40 mb-10">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="text-amber-gold fill-amber-gold" />
                ))}
              </div>
              <p className="font-serif text-lg text-deep-forest italic mb-3">"{program.testimonial.text}"</p>
              <p className="font-sans text-sm text-mid-gray">{program.testimonial.name}</p>
            </div>

            {/* Similar programs */}
            {similarPrograms.length > 0 && (
              <div>
                <h2 className="font-serif text-2xl text-deep-forest mb-6">Similar Programs</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {similarPrograms.map(([s, p]) => (
                    <Link key={s} to={`/programs/${s}`} className="group block rounded-xl overflow-hidden border border-border-gray hover:shadow-lg transition-shadow duration-300">
                      <div className="aspect-video overflow-hidden">
                        <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                      </div>
                      <div className="p-4">
                        <h3 className="font-serif text-lg text-deep-forest">{p.title}</h3>
                        <p className="font-sans text-xs text-mid-gray mt-1">{p.duration} &middot; {p.format}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
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
