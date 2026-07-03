import { useState, useMemo } from 'react'
import { FileText, PlayCircle, Mail, Search } from 'lucide-react'

const articles = [
  { title: 'The 5 Habits of Effective Leaders', category: 'Leadership' },
  { title: 'How to Build a Growth Strategy That Sticks', category: 'Business' },
  { title: 'Overcoming Imposter Syndrome at Work', category: 'Personal' },
  { title: 'Delegation Without Losing Control', category: 'Leadership' },
  { title: 'Reading Financial Statements as a Non-Finance Manager', category: 'Business' },
  { title: 'Building Better Habits in Under 10 Minutes a Day', category: 'Personal' },
]

const guides = [
  { title: 'The Leadership Self-Assessment Toolkit', format: 'PDF Guide' },
  { title: 'Business Strategy Canvas Template', format: 'Worksheet' },
  { title: 'The 30-Day Habit Tracker', format: 'Template' },
  { title: 'Difficult Conversations Framework', format: 'PDF Guide' },
]

const webinars = [
  { title: 'Leading Through Uncertainty', duration: '45 min' },
  { title: 'Building a High-Performance Team', duration: '38 min' },
  { title: 'Mastering the Art of Delegation', duration: '32 min' },
  { title: 'Public Speaking for Introverts', duration: '41 min' },
]

const categories = ['All', 'Leadership', 'Business', 'Personal']

export default function Resources() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
  }

  const filteredArticles = useMemo(() => {
    return articles.filter((a) => {
      const matchesCategory = activeCategory === 'All' || a.category === activeCategory
      const matchesSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  return (
    <div className="pt-24 min-h-[100dvh] bg-cream">
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <h1 className="font-serif text-[40px] text-deep-forest mb-4">Free Resources</h1>
          <p className="font-sans text-mid-gray max-w-[560px] mb-8">
            Articles, guides and recorded webinars to support your growth journey — free of charge.
          </p>

          {/* Search + filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <div className="flex items-center rounded-full border border-border-gray max-w-[320px] w-full">
              <Search size={16} className="text-mid-gray ml-4 shrink-0" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 h-11 px-3 text-sm bg-transparent outline-none"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full font-sans text-sm transition-colors duration-200 ${
                    activeCategory === cat
                      ? 'bg-amber-gold text-cream'
                      : 'border border-border-gray text-deep-forest hover:border-amber-gold'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Articles */}
          <h2 className="font-serif text-2xl text-deep-forest mb-6">Latest Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
            {filteredArticles.map((article) => (
              <div key={article.title} className="p-6 rounded-2xl border border-border-gray">
                <FileText size={22} className="text-amber-gold mb-4" />
                <span className="font-sans text-xs uppercase tracking-wide text-amber-gold">{article.category}</span>
                <h3 className="font-serif text-lg text-deep-forest mt-2">{article.title}</h3>
              </div>
            ))}
          </div>

          {/* Guides */}
          <h2 className="font-serif text-2xl text-deep-forest mb-6">Downloadable Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
            {guides.map((guide) => (
              <div key={guide.title} className="flex items-center justify-between gap-4 p-5 rounded-xl bg-warm-sand/40">
                <div>
                  <p className="font-sans font-semibold text-deep-forest">{guide.title}</p>
                  <p className="font-sans text-sm text-mid-gray">{guide.format}</p>
                </div>
                <button className="font-sans text-sm font-medium text-amber-gold shrink-0">Download</button>
              </div>
            ))}
          </div>

          {/* Webinars */}
          <h2 className="font-serif text-2xl text-deep-forest mb-6">Recorded Webinars</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
            {webinars.map((webinar) => (
              <div key={webinar.title} className="flex items-center gap-4 p-5 rounded-xl border border-border-gray">
                <PlayCircle size={28} className="text-amber-gold shrink-0" />
                <div>
                  <p className="font-sans font-semibold text-deep-forest">{webinar.title}</p>
                  <p className="font-sans text-sm text-mid-gray">{webinar.duration}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="max-w-[520px] p-8 rounded-2xl bg-deep-forest">
            <div className="flex items-center gap-2 mb-3">
              <Mail size={20} className="text-amber-gold" />
              <h3 className="font-serif text-lg text-cream">Subscribe to our Newsletter</h3>
            </div>
            {subscribed ? (
              <p className="font-sans text-cream/80">Thanks for subscribing!</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-11 px-4 rounded-full outline-none"
                />
                <button
                  type="submit"
                  className="h-11 px-5 bg-amber-gold text-cream font-sans text-sm font-medium rounded-full hover:opacity-90 transition-opacity duration-200 shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
