import { useRef, useEffect, useState } from 'react'
import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
]

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (footerRef.current) observer.observe(footerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <footer ref={footerRef} className="bg-deep-forest">
      {/* Top Row */}
      <div className="mx-auto max-w-[1400px] px-[5%] py-[80px] md:py-[120px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Column 1: Contact */}
          <div
            className={
              'transition-all duration-700 ' +
              (visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0')
            }
            style={{ transitionDelay: '0s' }}
          >
            <h3 className="mb-4 font-serif text-[24px] text-cream">Contact Us</h3>
            <p className="mb-1 font-sans text-[14px] text-mid-gray">
              support@elevate.edu
            </p>
            <p className="mb-3 font-sans text-[14px] text-mid-gray">
              (212) 555-0140
            </p>
            <p className="font-sans text-[11px] text-mid-gray">
              Mon–Fri, 9am–6pm EST
            </p>
          </div>

          {/* Column 2: Newsletter */}
          <div
            className={
              'transition-all duration-700 ' +
              (visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0')
            }
            style={{ transitionDelay: '0.1s' }}
          >
            <h3 className="mb-4 font-serif text-[24px] text-cream">Stay Updated</h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-full border border-border-gray bg-off-white px-4 py-2.5 font-sans text-[14px] text-deep-forest placeholder:text-mid-gray focus:outline-none focus:ring-2 focus:ring-amber-gold"
              />
              <button className="rounded-full bg-amber-gold px-5 py-2.5 font-sans text-[14px] font-medium text-cream transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_20px_rgba(217,119,6,0.3)]">
                Subscribe
              </button>
            </div>
          </div>

          {/* Column 3: Social */}
          <div
            className={
              'transition-all duration-700 ' +
              (visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0')
            }
            style={{ transitionDelay: '0.2s' }}
          >
            <h3 className="mb-4 font-serif text-[24px] text-cream">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-mid-gray transition-all duration-200 hover:scale-110 hover:text-amber-gold"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t border-border-gray/20">
        <div className="mx-auto max-w-[1400px] px-[5%] py-8 text-center">
          <p className="mb-2 font-serif text-[32px] text-cream md:text-[40px]">
            Elevate Learning Institute
          </p>
          <p className="font-sans text-[12px] text-mid-gray">
            &copy; 2026 Elevate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
