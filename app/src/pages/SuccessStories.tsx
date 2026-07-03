const stories = [
  {
    name: 'Amanda Foster',
    role: 'VP of Operations, TechCorp',
    before: 'Struggled with team delegation and burnout',
    after: 'Promoted to VP within 6 months, leading a team of 40',
    quote: 'The Leadership Executif program gave me the tools to lead with confidence instead of control.',
  },
  {
    name: 'David Kim',
    role: 'Founder, Kim Ventures',
    before: 'Unclear business strategy, stagnant growth',
    after: 'Doubled revenue in 12 months with a clear growth roadmap',
    quote: 'Strategy & Business completely reshaped how I think about scaling my company.',
  },
  {
    name: 'Priya Sharma',
    role: 'Product Manager',
    before: 'Anxious public speaker, avoided leadership opportunities',
    after: 'Now regularly presents to executive leadership with confidence',
    quote: 'I finally feel like I can speak up in the room and be heard.',
  },
]

export default function SuccessStories() {
  return (
    <div className="pt-24 min-h-[100dvh] bg-cream">
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <h1 className="font-serif text-[40px] text-deep-forest mb-4">Success Stories</h1>
          <p className="font-sans text-mid-gray max-w-[560px] mb-14">
            Real transformations from professionals who took the leap with Elevate.
          </p>

          <div className="space-y-8">
            {stories.map((story) => (
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
