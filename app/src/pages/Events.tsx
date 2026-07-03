import { useState } from 'react'
import { Calendar, Clock, Video } from 'lucide-react'

const upcomingEvents = [
  { title: 'Leading Through Change: Live Masterclass', date: '15 August 2026', time: '2:00 PM EST' },
  { title: 'Building Confidence as a New Manager', date: '22 August 2026', time: '1:00 PM EST' },
  { title: 'Strategic Planning Workshop for Founders', date: '5 September 2026', time: '3:00 PM EST' },
]

const pastEvents = [
  { title: 'Leading Through Uncertainty', date: '10 June 2026' },
  { title: 'Building a High-Performance Team', date: '22 May 2026' },
]

export default function Events() {
  const [email, setEmail] = useState('')
  const [registered, setRegistered] = useState<string | null>(null)

  const handleRegister = (title: string) => (e: React.FormEvent) => {
    e.preventDefault()
    setRegistered(title)
  }

  return (
    <div className="pt-24 min-h-[100dvh] bg-cream">
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <h1 className="font-serif text-[40px] text-deep-forest mb-4">Upcoming Events</h1>
          <p className="font-sans text-mid-gray max-w-[560px] mb-14">
            Join our live webinars and workshops to learn directly from our expert coaches.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            {upcomingEvents.map((event) => (
              <div key={event.title} className="p-6 rounded-2xl border border-border-gray flex flex-col">
                <h3 className="font-serif text-lg text-deep-forest mb-4">{event.title}</h3>
                <div className="space-y-2 mb-6 flex-1">
                  <div className="flex items-center gap-2 text-sm text-mid-gray">
                    <Calendar size={14} className="text-amber-gold shrink-0" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-mid-gray">
                    <Clock size={14} className="text-amber-gold shrink-0" />
                    {event.time}
                  </div>
                </div>
                {registered === event.title ? (
                  <p className="font-sans text-sm text-amber-gold">You're registered!</p>
                ) : (
                  <form onSubmit={handleRegister(event.title)} className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 h-10 px-3 text-sm border border-border-gray rounded-full outline-none focus:border-amber-gold"
                    />
                    <button
                      type="submit"
                      className="h-10 px-4 bg-amber-gold text-cream font-sans text-sm font-medium rounded-full hover:opacity-90 transition-opacity duration-200 shrink-0"
                    >
                      Register
                    </button>
                  </form>
                )}
              </div>
            ))}
          </div>

          <h2 className="font-serif text-2xl text-deep-forest mb-6">Past Events — Replays</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pastEvents.map((event) => (
              <div key={event.title} className="flex items-center gap-4 p-5 rounded-xl bg-warm-sand/40">
                <Video size={24} className="text-amber-gold shrink-0" />
                <div>
                  <p className="font-sans font-semibold text-deep-forest">{event.title}</p>
                  <p className="font-sans text-sm text-mid-gray">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
