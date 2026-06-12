import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Programs', path: '/programs' },
  { label: 'Corporate', path: '/corporate' },
  { label: 'About', path: '/about' },
  { label: 'Resources', path: '/resources' },
  { label: 'Events', path: '/events' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled

  return (
    <>
      <nav
        className={
          'fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ' +
          (transparent
            ? 'bg-transparent'
            : 'bg-cream shadow-[0_1px_4px_rgba(0,0,0,0.05)]')
        }
      >
        <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-[5%]">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.svg"
              alt="Elevate"
              className="h-8 w-auto"
              style={{ filter: transparent ? 'none' : 'none' }}
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={
                  'group relative font-sans text-[16px] font-medium leading-[24px] tracking-[0.48px] transition-colors duration-200 ' +
                  (transparent ? 'text-cream' : 'text-deep-forest') +
                  ' hover:text-amber-gold'
                }
              >
                {link.label}
                <span
                  className={
                    'absolute -bottom-1 left-0 h-[2px] w-0 bg-amber-gold transition-all duration-300 ease-out group-hover:w-full ' +
                    (location.pathname === link.path ? 'w-full' : '')
                  }
                />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-block rounded-full bg-amber-gold px-5 py-2.5 font-sans text-[16px] font-medium text-cream transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_20px_rgba(217,119,6,0.3)]"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="flex flex-col items-center justify-center md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X
                size={24}
                className={
                  transparent && !mobileOpen ? 'text-cream' : 'text-deep-forest'
                }
              />
            ) : (
              <Menu
                size={24}
                className={transparent ? 'text-cream' : 'text-deep-forest'}
              />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-deep-forest/95 md:hidden">
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              className="font-serif text-[32px] text-cream opacity-0 animate-[fadeIn_0.3s_ease-out_forwards]"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-4 inline-block rounded-full bg-amber-gold px-6 py-3 font-sans text-[16px] font-medium text-cream opacity-0 animate-[fadeIn_0.3s_ease-out_forwards]"
            style={{ animationDelay: `${navLinks.length * 0.1}s` }}
          >
            Enroll Now
          </Link>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}
