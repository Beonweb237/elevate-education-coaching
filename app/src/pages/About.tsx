import { Award } from 'lucide-react'

const stats = [
  { value: '12,000+', label: 'Professionals Coached' },
  { value: '15', label: 'Years of Experience' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '40+', label: 'Expert Coaches' },
]

const team = [
  { name: 'Dr. Sarah Whitfield', role: 'Founder & Lead Coach' },
  { name: 'Marcus Chen', role: 'Director of Business Programs' },
  { name: 'Elena Rodriguez', role: 'Head of Personal Development' },
]

const timeline = [
  { year: '2010', event: 'Dr. Sarah Whitfield founds Elevate after 12 years as a Fortune 500 executive coach.' },
  { year: '2014', event: 'Launch of the first Leadership Executif cohort program.' },
  { year: '2017', event: 'Elevate expands into corporate solutions, partnering with its first enterprise clients.' },
  { year: '2020', event: 'Fully remote programs launched, reaching professionals across 30 countries.' },
  { year: '2023', event: 'Elevate reaches the milestone of 10,000 professionals coached.' },
  { year: '2025', event: '40+ expert coaches, 12,000+ professionals coached, 98% satisfaction rate.' },
]

const values = [
  { title: 'Authenticity', desc: 'We help leaders find their own voice, not imitate someone else\'s.' },
  { title: 'Evidence-Based', desc: 'Every framework we teach is grounded in behavioral science research.' },
  { title: 'Accountability', desc: 'Real change requires structure, follow-up and measurable outcomes.' },
  { title: 'Community', desc: 'Growth happens faster alongside peers on the same journey.' },
]

const awards = [
  { title: 'Top Executive Coaching Provider', org: 'Global Coaching Awards, 2023' },
  { title: 'Best Corporate Learning Program', org: 'HR Excellence Awards, 2024' },
  { title: 'Innovator in Leadership Development', org: 'Forbes Coaches Council, 2025' },
]

export default function About() {
  return (
    <div className="pt-24 min-h-[100dvh] bg-cream">
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <h1 className="font-serif text-[40px] text-deep-forest mb-6 max-w-[640px]">
            Our Mission and Methodology
          </h1>
          <p className="font-sans text-mid-gray max-w-[640px] leading-relaxed mb-4">
            Elevate Learning Institute was founded on a simple belief: everyone has untapped
            potential. Our methodology blends evidence-based coaching techniques with practical,
            real-world application to create lasting behavioral change.
          </p>
          <p className="font-sans text-mid-gray max-w-[640px] leading-relaxed mb-4">
            Dr. Sarah Whitfield spent over a decade as an executive coach inside Fortune 500
            companies before founding Elevate in 2010. She saw the same pattern again and again:
            talented professionals held back not by skill, but by a lack of structured, honest
            feedback and accountability. Elevate was built to close that gap.
          </p>
          <p className="font-sans text-mid-gray max-w-[640px] leading-relaxed mb-16">
            For over a decade, we've helped professionals and organizations unlock growth through
            structured programs, expert coaching, and a supportive community of learners.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 py-10 border-y border-border-gray">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-3xl text-amber-gold mb-1">{stat.value}</p>
                <p className="font-sans text-sm text-mid-gray">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl text-deep-forest mb-8">Our Journey</h2>
            <div className="space-y-6">
              {timeline.map((item) => (
                <div key={item.year} className="flex gap-6 items-start">
                  <span className="font-serif text-xl text-amber-gold shrink-0 w-16">{item.year}</span>
                  <p className="font-sans text-sm text-mid-gray pl-6 border-l border-border-gray">{item.event}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl text-deep-forest mb-8">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div key={value.title} className="p-6 rounded-2xl border border-border-gray">
                  <h3 className="font-serif text-lg text-deep-forest mb-2">{value.title}</h3>
                  <p className="font-sans text-sm text-mid-gray">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl text-deep-forest mb-8 flex items-center gap-2">
              <Award size={22} className="text-amber-gold" />
              Awards & Recognition
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {awards.map((award) => (
                <div key={award.title} className="p-6 rounded-2xl bg-warm-sand/40">
                  <p className="font-serif text-lg text-deep-forest mb-2">{award.title}</p>
                  <p className="font-sans text-xs text-mid-gray uppercase tracking-wide">{award.org}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 className="font-serif text-2xl text-deep-forest mb-8">Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="p-6 rounded-2xl border border-border-gray text-center">
                <h3 className="font-serif text-lg text-deep-forest mb-1">{member.name}</h3>
                <p className="font-sans text-sm text-amber-gold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
