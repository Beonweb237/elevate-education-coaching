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
