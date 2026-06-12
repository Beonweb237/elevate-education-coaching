import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  GraduationCap,
  Users,
  Award,
  Star,
  ChevronDown,
  Clock,
  Monitor,
  BarChart3,
  Plus,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/* ──────────────────────────────────────────────
   Animated Counter Component
   ────────────────────────────────────────────── */
function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
}: {
  value: number
  suffix?: string
  prefix?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const obj = { val: 0 }
          gsap.to(obj, {
            val: value,
            duration: 1.2,
            ease: 'power2.out',
            onUpdate: () => {
              el.textContent = prefix + Math.floor(obj.val).toLocaleString() + suffix
            },
          })
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value, prefix, suffix])

  return <span ref={ref}>{prefix}0{suffix}</span>
}

/* ──────────────────────────────────────────────
   Scroll-Triggered Section Wrapper
   ────────────────────────────────────────────── */
function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    gsap.set(el.children, { opacity: 0, y: 40 })

    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(el.children, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
        })
      },
    })

    return () => st.kill()
  }, [])

  return ref
}

/* ──────────────────────────────────────────────
   FAQ Accordion Component
   ────────────────────────────────────────────── */
function AccordionItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <div className="border-b border-border-gray">
      <button
        className="flex w-full items-center justify-between py-5 text-left"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="pr-4 font-sans text-[18px] font-bold leading-[28px] text-deep-forest md:text-[24px] md:leading-[32px]">
          {question}
        </span>
        <span
          className={
            'flex h-8 w-8 shrink-0 items-center justify-center text-amber-gold transition-transform duration-300 ' +
            (isOpen ? 'rotate-45' : '')
          }
        >
          <Plus size={24} />
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{ maxHeight: isOpen ? '300px' : '0px' }}
      >
        <p className="pb-5 font-sans text-[14px] leading-[20px] text-mid-gray">
          {answer}
        </p>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════
   HOME PAGE
   ═══════════════════════════════════════════════ */
export default function Home() {
  /* ── Hero refs ── */
  const heroRef = useRef<HTMLDivElement>(null)
  const heroTaglineRef = useRef<HTMLParagraphElement>(null)
  const heroHeadingRef = useRef<HTMLHeadingElement>(null)
  const heroSubtextRef = useRef<HTMLParagraphElement>(null)
  const heroCtaRef = useRef<HTMLAnchorElement>(null)
  const heroScrollRef = useRef<HTMLDivElement>(null)

  /* ── Section refs ── */
  const statsRef = useScrollReveal<HTMLDivElement>()
  const aboutRef = useScrollReveal<HTMLDivElement>()
  const programsRef = useScrollReveal<HTMLDivElement>()
  const storiesRef = useScrollReveal<HTMLDivElement>()
  const teamRef = useScrollReveal<HTMLDivElement>()
  const faqRef = useScrollReveal<HTMLDivElement>()
  const ctaRef = useScrollReveal<HTMLDivElement>()

  /* ── FAQ state ── */
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  /* ── Hero entrance animation ── */
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'cubic-bezier(0.16, 1, 0.3, 1)' } })

    tl.to(heroTaglineRef.current, {
      opacity: 0.7,
      y: 0,
      duration: 0.6,
      delay: 0.3,
    })
      .to(
        heroHeadingRef.current,
        { opacity: 1, y: 0, duration: 0.8 },
        0.5
      )
      .to(
        heroSubtextRef.current,
        { opacity: 0.8, y: 0, duration: 0.8 },
        0.7
      )
      .to(
        heroCtaRef.current,
        { opacity: 1, y: 0, duration: 0.6 },
        0.9
      )
      .to(
        heroScrollRef.current,
        { opacity: 0.5, duration: 0.5 },
        1.2
      )

    return () => { tl.kill() }
  }, [])

  /* ── Program filter state ── */
  const [activeCategory, setActiveCategory] = useState('All')
  const categories = ['All', 'Leadership', 'Data & Analytics', 'Strategy', 'Communication', 'Technology']

  /* ── Data ── */
  const stats = [
    { icon: GraduationCap, number: 24, label: 'Specialized Courses' },
    { icon: Users, number: 2400, label: 'Global Professionals' },
    { icon: Award, number: 12, label: 'Years of Excellence' },
  ]

  const programs = [
    {
      title: 'Executive Leadership Program',
      category: 'Leadership',
      duration: '12 Weeks',
      format: 'Hybrid',
      level: 'Advanced',
      image: '/program-leadership.jpg',
      description: 'Develop executive presence and strategic leadership skills.',
    },
    {
      title: 'Data Analytics Masterclass',
      category: 'Data & Analytics',
      duration: '8 Weeks',
      format: 'Online',
      level: 'Intermediate',
      image: '/program-data.jpg',
      description: 'Master data-driven decision making and visualization.',
    },
    {
      title: 'Strategic Management Certification',
      category: 'Strategy',
      duration: '16 Weeks',
      format: 'In-Person',
      level: 'Advanced',
      image: '/program-strategy.jpg',
      description: 'Comprehensive strategic planning and execution framework.',
    },
  ]

  const testimonials = [
    {
      name: 'Sarah K.',
      role: 'VP of Product',
      quote:
        'The Executive Leadership Program gave me the strategic framework I needed to lead through our company\'s biggest transformation. Within 6 months, I was promoted to VP.',
      photo: '/student-sarah.jpg',
    },
    {
      name: 'Marcus T.',
      role: 'Director of Finance',
      quote:
        'I\'ve taken many professional courses. None compared to the depth and practical application Elevate delivers. My team noticed the difference immediately.',
      photo: '/student-marcus.jpg',
    },
    {
      name: 'Elena R.',
      role: 'Data Science Lead',
      quote:
        'The Data Analytics Masterclass didn\'t just teach tools — it taught me how to think like a data strategist. Best investment in my career.',
      photo: '/student-elena.jpg',
    },
    {
      name: 'David L.',
      role: 'Operations Executive',
      quote:
        'At 52, I worried about staying relevant. Elevate\'s program proved that continuous learning has no age limit. I\'m now consulting for Fortune 500 companies.',
      photo: '/student-david.jpg',
    },
  ]

  const team = [
    {
      name: 'Sarah J. Morris',
      role: 'CEO',
      credentials: 'MBA, Wharton',
      photo: '/team-sarah.jpg',
    },
    {
      name: 'James Whitfield',
      role: 'Academic Director',
      credentials: 'PhD, Stanford',
      photo: '/team-james.jpg',
    },
    {
      name: 'Maya Patel',
      role: 'Head of Innovation',
      credentials: 'MSc, MIT',
      photo: '/team-maya.jpg',
    },
    {
      name: 'Robert Chen',
      role: 'Chief Learning Officer',
      credentials: 'EdD, Columbia',
      photo: '/team-robert.jpg',
    },
  ]

  const faqItems = [
    {
      question: 'What is the application process?',
      answer:
        'Our streamlined application takes 15 minutes. Submit your professional background, learning goals, and preferred program start date. Admissions decisions are returned within 5 business days.',
    },
    {
      question: 'Are there any prerequisites?',
      answer:
        'Most programs require 3+ years of professional experience. Advanced programs (Executive Leadership, Strategic Management) recommend 7+ years or prior managerial experience. Data programs require basic Excel proficiency.',
    },
    {
      question: 'What is the time commitment?',
      answer:
        'Programs range from 6–16 weeks. Expect 8–12 hours per week including live sessions, assignments, and peer collaboration. All sessions are recorded for flexible viewing.',
    },
    {
      question: 'Is financial aid available?',
      answer:
        'Yes — we offer flexible payment plans, early-enrollment discounts (save up to 20%), and corporate sponsorship programs. Contact our admissions team to discuss options.',
    },
    {
      question: 'What kind of certification will I receive?',
      answer:
        'All graduates receive an Elevate Professional Certificate recognized by 500+ employers. Advanced programs include industry-recognized credentials from our accreditation partners.',
    },
  ]

  return (
    <div>
      {/* ════════════ SECTION 2: HERO ════════════ */}
      <section
        ref={heroRef}
        className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-deep-forest"
      >
        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-poster.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(30, 41, 59, 0.58)' }}
        />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-[800px] px-[5%] text-center">
          <p
            ref={heroTaglineRef}
            className="mb-4 translate-y-5 font-sans text-[11px] font-medium uppercase tracking-[3px] text-cream opacity-0"
          >
            Elevate Your Career
          </p>
          <h1
            ref={heroHeadingRef}
            className="mb-6 translate-y-10 font-serif text-[40px] leading-[44px] text-cream opacity-0 md:text-[60px] md:leading-[60px]"
          >
            Transform Your Professional Future
          </h1>
          <p
            ref={heroSubtextRef}
            className="mb-8 translate-y-10 font-sans text-[18px] font-normal text-cream opacity-0"
            style={{ opacity: 0, maxWidth: '600px', margin: '0 auto 32px' }}
          >
            World-class coaching and certification programs designed for ambitious
            professionals. Join 15,000+ leaders who've accelerated their careers.
          </p>
          <Link
            ref={heroCtaRef}
            to="/programs"
            className="inline-block translate-y-5 rounded-full bg-amber-gold px-6 py-3 font-sans text-[16px] font-medium text-cream opacity-0 transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_20px_rgba(217,119,6,0.3)]"
          >
            Explore Programs
          </Link>
        </div>

        {/* Scroll indicator */}
        <div
          ref={heroScrollRef}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 opacity-0"
        >
          <div className="flex flex-col items-center gap-1">
            <span className="font-sans text-[11px] uppercase tracking-widest text-cream">
              Scroll
            </span>
            <ChevronDown
              size={20}
              className="animate-bounce text-cream"
              style={{ animationDuration: '2s' }}
            />
          </div>
        </div>
      </section>

      {/* ════════════ SECTION 3: STATS ════════════ */}
      <section className="bg-deep-forest py-[80px] md:py-[160px]">
        <div ref={statsRef} className="mx-auto max-w-[1400px] px-[5%]">
          {/* Heading */}
          <div className="mb-12 text-center md:mb-16">
            <div className="mx-auto mb-4 h-1 w-8 bg-amber-gold" />
            <h2 className="mb-2 font-serif text-[28px] leading-[34px] text-cream md:text-[40px] md:leading-[48px]">
              Our Impact
            </h2>
            <p className="font-sans text-[16px] text-mid-gray">
              Measurable results that speak for themselves
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 divide-y divide-border-gray border border-border-gray md:grid-cols-3 md:divide-x md:divide-y-0">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 px-6 py-8"
              >
                <stat.icon size={32} className="text-amber-gold" />
                <span className="font-serif text-[40px] leading-[40px] text-cream">
                  <AnimatedCounter value={stat.number} />
                </span>
                <span className="font-sans text-[14px] font-medium uppercase tracking-[0.48px] text-cream">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ SECTION 4: ABOUT ════════════ */}
      <section className="bg-warm-sand py-[80px] md:py-[160px]">
        <div ref={aboutRef} className="mx-auto max-w-[1400px] px-[5%]">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[55%_45%] md:gap-[5%]">
            {/* Left: Text */}
            <div>
              <div className="mb-4 h-1 w-8 bg-amber-gold" />
              <h2 className="mb-6 font-serif text-[28px] leading-[34px] text-deep-forest md:text-[40px] md:leading-[48px]">
                Who We Are
              </h2>
              <p className="mb-6 font-sans text-[16px] leading-[26px] text-deep-forest">
                For over a decade, Elevate has been the catalyst for professional
                transformation. We combine academic rigor with practical coaching to
                deliver programs that don't just teach — they transform careers.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-1 font-sans text-[16px] font-medium text-amber-gold transition-all duration-200 hover:gap-2"
              >
                Learn More About Us
                <span>→</span>
              </Link>
            </div>

            {/* Right: Image */}
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/about-classroom.jpg"
                alt="Elevate classroom"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ SECTION 5: PROGRAMS ════════════ */}
      <section className="bg-cream py-[80px] md:py-[160px]">
        <div ref={programsRef} className="mx-auto max-w-[1400px] px-[5%]">
          {/* Heading */}
          <div className="mb-8">
            <div className="mb-4 h-1 w-8 bg-amber-gold" />
            <h2 className="mb-2 font-serif text-[28px] leading-[34px] text-deep-forest md:text-[40px] md:leading-[48px]">
              Programs
            </h2>
            <p className="font-sans text-[16px] text-mid-gray">
              Our most popular professional development tracks
            </p>
          </div>

          {/* Filter */}
          <div className="mb-10 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={
                  'rounded-full px-4 py-1.5 font-sans text-[11px] font-normal uppercase transition-all duration-200 ' +
                  (activeCategory === cat
                    ? 'bg-amber-gold text-cream'
                    : 'border border-border-gray bg-off-white text-deep-forest hover:border-amber-gold')
                }
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, i) => (
              <Link
                to="/programs"
                key={i}
                className="group block overflow-hidden rounded-2xl bg-off-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-amber-gold px-3 py-1 font-sans text-[11px] font-normal uppercase text-cream">
                    {program.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="mb-2 font-serif text-[24px] leading-[30px] text-deep-forest">
                    {program.title}
                  </h3>
                  <p className="mb-4 line-clamp-2 font-sans text-[14px] leading-[20px] text-mid-gray">
                    {program.description}
                  </p>
                  <div className="mb-4 flex flex-wrap items-center gap-3 font-sans text-[11px] text-mid-gray">
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {program.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Monitor size={12} />
                      {program.format}
                    </span>
                    <span className="flex items-center gap-1">
                      <BarChart3 size={12} />
                      {program.level}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 font-sans text-[14px] text-amber-gold transition-all duration-200 group-hover:gap-2">
                    Learn More →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* View All */}
          <div className="mt-10 text-center">
            <Link
              to="/programs"
              className="inline-flex items-center gap-1 font-sans text-[16px] font-medium text-amber-gold transition-all duration-200 hover:gap-2"
            >
              View All Programs →
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════ SECTION 6: STUDENT STORIES ════════════ */}
      <section className="bg-deep-forest py-[80px] md:py-[160px]">
        <div ref={storiesRef} className="mx-auto max-w-[1400px] px-[5%]">
          {/* Heading */}
          <div className="mb-12 text-center md:mb-16">
            <div className="mx-auto mb-4 h-1 w-8 bg-amber-gold" />
            <h2 className="mb-2 font-serif text-[28px] leading-[34px] text-cream md:text-[40px] md:leading-[48px]">
              Student Stories
            </h2>
            <p className="font-sans text-[16px] text-mid-gray">
              Real outcomes from real professionals
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl bg-off-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Photo */}
                <img
                  src={t.photo}
                  alt={t.name}
                  className="mb-3 h-16 w-16 rounded-full border-2 border-amber-gold object-cover"
                />
                {/* Stars */}
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="fill-amber-gold text-amber-gold"
                    />
                  ))}
                </div>
                {/* Quote */}
                <p className="mb-4 font-sans text-[14px] italic leading-[20px] text-deep-forest">
                  "{t.quote}"
                </p>
                {/* Name & Role */}
                <p className="font-sans text-[14px] font-bold text-deep-forest">
                  {t.name}
                </p>
                <p className="font-sans text-[11px] text-mid-gray">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ SECTION 7: TEAM ════════════ */}
      <section className="bg-cream py-[80px] md:py-[160px]">
        <div ref={teamRef} className="mx-auto max-w-[1400px] px-[5%]">
          {/* Heading */}
          <div className="mb-12 text-center md:mb-16">
            <div className="mx-auto mb-4 h-1 w-8 bg-amber-gold" />
            <h2 className="mb-2 font-serif text-[28px] leading-[34px] text-deep-forest md:text-[40px] md:leading-[48px]">
              Meet Our Team
            </h2>
            <p className="font-sans text-[16px] text-mid-gray">
              Industry leaders dedicated to your growth
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <div
                key={i}
                className="group relative rounded-2xl bg-off-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 -z-10 rounded-2xl opacity-0 blur-[20px] transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    backgroundColor: 'rgba(217, 119, 6, 0.15)',
                    animation: 'glowPulse 4s ease-in-out infinite',
                  }}
                />
                {/* Photo */}
                <img
                  src={member.photo}
                  alt={member.name}
                  className="mx-auto mb-4 h-24 w-24 rounded-full border-[3px] border-amber-gold object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Info */}
                <p className="mb-1 font-sans text-[16px] font-bold text-deep-forest">
                  {member.name}
                </p>
                <p className="mb-1 font-sans text-[12px] text-mid-gray">
                  {member.role}
                </p>
                <p className="font-sans text-[11px] text-amber-gold">
                  {member.credentials}
                </p>
              </div>
            ))}
          </div>

          <style>{`
            @keyframes glowPulse {
              0%, 100% { opacity: 0.15; }
              50% { opacity: 0.25; }
            }
          `}</style>
        </div>
      </section>

      {/* ════════════ SECTION 8: FAQ ════════════ */}
      <section className="bg-warm-sand py-[80px] md:py-[160px]">
        <div ref={faqRef} className="mx-auto max-w-[800px] px-[5%]">
          {/* Heading */}
          <div className="mb-8">
            <div className="mb-4 h-1 w-8 bg-amber-gold" />
            <h2 className="font-serif text-[28px] leading-[34px] text-deep-forest md:text-[40px] md:leading-[48px]">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Accordion */}
          <div>
            {faqItems.map((item, i) => (
              <AccordionItem
                key={i}
                question={item.question}
                answer={item.answer}
                isOpen={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ SECTION 9: ENROLLMENT CTA ════════════ */}
      <section className="bg-deep-forest py-[80px] md:py-[160px]">
        <div ref={ctaRef} className="mx-auto max-w-[600px] px-[5%] text-center">
          <h2 className="mb-4 font-serif text-[28px] leading-[34px] text-cream md:text-[40px] md:leading-[48px]">
            Take the First Step
          </h2>
          <p className="mb-8 font-sans text-[16px] text-cream" style={{ opacity: 0.7 }}>
            Your next career chapter begins with a single decision. Join thousands of
            professionals who've already transformed their trajectory.
          </p>
          <Link
            to="/contact"
            className="mb-4 inline-block rounded-full bg-amber-gold px-8 py-4 font-sans text-[18px] font-medium text-cream transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_20px_rgba(217,119,6,0.3)]"
          >
            Apply Now
          </Link>
          <div>
            <Link
              to="/contact"
              className="inline-block font-sans text-[14px] text-amber-gold underline-offset-4 transition-all duration-200 hover:underline"
            >
              Schedule a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
