import { TrendingUp, Award, Users, Star } from 'lucide-react'

const impactStats = [
  { icon: TrendingUp, value: '68%', label: 'Received a promotion within 12 months' },
  { icon: Award, value: '$18K', label: 'Average salary increase reported' },
  { icon: Users, value: '12,000+', label: 'Professionals transformed' },
]

const stories = [
  {
    name: 'Amanda Foster',
    role: 'VP of Operations, TechCorp',
    before: 'Struggled with team delegation and burnout',
    after: 'Promoted to VP within 6 months, leading a team of 40',
    quote: 'The Leadership Executif program gave me the tools to lead with confidence instead of control.',
    featured: true,
  },
  {
    name: 'David Kim',
    role: 'Founder, Kim Ventures',
    before: 'Unclear business strategy, stagnant growth',
    after: 'Doubled revenue in 12 months with a clear growth roadmap',
    quote: 'Strategy & Business completely reshaped how I think about scaling my company.',
    featured: true,
  },
  {
    name: 'Priya Sharma',
    role: 'Product Manager',
    before: 'Anxious public speaker, avoided leadership opportunities',
    after: 'Now regularly presents to executive leadership with confidence',
    quote: 'I finally feel like I can speak up in the room and be heard.',
    featured: false,
  },
  {
    name: 'Marcus Webb',
    role: 'Financial Analyst',
    before: 'Avoided meetings and dreaded presentations',
    after: 'Now volunteers to lead quarterly business reviews',
    quote: 'I used to dread meetings. Now I volunteer to present. This program is life-changing.',
    featured: false,
  },
  {
    name: 'Laura Bennett',
    role: 'Engineering Team Lead',
    before: 'High team turnover, low engagement scores',
    after: 'Team engagement scores up 24%, zero turnover in 8 months',
    quote: 'My team\'s engagement scores improved dramatically after applying what I learned here.',
    featured: false,
  },
  {
    name: 'James Okafor',
    role: 'Director of Sales',
    before: 'Struggled to influence senior stakeholders',
    after: 'Now leads board-level presentations with confidence',
    quote: 'My presentations to the board are night and day compared to before this program.',
    featured: false,
  },
]

export default function SuccessStories() {
  const featuredStories = stories.filter((s) => s.featured)
  const otherStories = stories.filter((s) => !s.featured)

  return (
    <div className="pt-24 min-h-[100dvh] bg-cream">
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <h1 className="font-serif text-[40px] text-deep-forest mb-4">Success Stories</h1>
          <p className="font-sans text-mid-gray max-w-[560px] mb-10">
            Real transformations from professionals who took the leap with Elevate.
          </p>

          {/* Impact stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 py-10 border-y border-border-gray">
            {impactStats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-amber-gold/15 flex items-center justify-center shrink-0">
                  <stat.icon size={20} className="text-amber-gold" />
                </div>
                <div>
                  <p className="font-serif text-2xl text-deep-forest">{stat.value}</p>
                  <p className="font-sans text-xs text-mid-gray">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Featured video-style stories */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl text-deep-forest mb-8 flex items-center gap-2">
              <Star size={20} className="text-amber-gold fill-amber-gold" />
              Featured Transformations
            </h2>
            <div className="space-y-8">
              {featuredStories.map((story) => (
                <div key={story.name} className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 rounded-2xl bg-warm-sand/40">
                  <div>
                    <h3 className="font-serif text-xl text-deep-forest mb-1">{story.name}</h3>
                    <p className="font-sans text-sm text-amber-gold">{story.role}</p>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="font-serif text-lg text-deep-forest italic mb-4">"{story.quote}"</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <p className="font-sans text-xs uppercase tracking-wide text-mid-gray mb-1">Before</p>
                        <p className="font-sans text-sm text-deep-forest">{story.before}</p>
                      </div>
                      <div>
                        <p className="font-sans text-xs uppercase tracking-wide text-amber-gold mb-1">After</p>
                        <p className="font-sans text-sm text-deep-forest">{story.after}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other stories */}
          <div className="space-y-8">
            {otherStories.map((story) => (
              <div key={story.name} className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 rounded-2xl border border-border-gray">
                <div>
                  <h3 className="font-serif text-xl text-deep-forest mb-1">{story.name}</h3>
                  <p className="font-sans text-sm text-amber-gold">{story.role}</p>
                </div>
                <div className="lg:col-span-2">
                  <p className="font-serif text-lg text-deep-forest italic mb-4">"{story.quote}"</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="font-sans text-xs uppercase tracking-wide text-mid-gray mb-1">Before</p>
                      <p className="font-sans text-sm text-deep-forest">{story.before}</p>
                    </div>
                    <div>
                      <p className="font-sans text-xs uppercase tracking-wide text-amber-gold mb-1">After</p>
                      <p className="font-sans text-sm text-deep-forest">{story.after}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
