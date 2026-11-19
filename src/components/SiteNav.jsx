import { useEffect, useRef, useState } from 'react'
import './site-nav.css'

const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

function SiteNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 40rem)')
    const updateMobileState = (event) => {
      setIsMobile(event.matches)
      setIsOpen(false)
    }

    setIsMobile(mobileQuery.matches)
    mobileQuery.addEventListener('change', updateMobileState)

    return () => mobileQuery.removeEventListener('change', updateMobileState)
  }, [])

  function handleKeyDown(event) {
    if (event.key === 'Escape' && isOpen) {
      setIsOpen(false)
      menuButtonRef.current?.focus()
    }
  }

  function closeMenu() {
    setIsOpen(false)
    if (isMobile) {
      window.requestAnimationFrame(() => {
        menuButtonRef.current?.focus({ preventScroll: true })
      })
    }
  }

  return (
    <header className="site-header" id="home" onKeyDown={handleKeyDown}>
      <div className="container site-header__inner">
        <a className="site-header__brand" href="#home" onClick={closeMenu}>
          Eraiyanbu<span aria-hidden="true">.</span>
        </a>
        <button
          className={`site-nav__toggle${isOpen ? ' site-nav__toggle--open' : ''}`}
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((open) => !open)}
          ref={menuButtonRef}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className="site-nav" aria-label="Primary navigation">
          <ul
            className={`site-nav__links${isOpen ? ' site-nav__links--open' : ''}`}
            id="primary-navigation"
            aria-hidden={isMobile && !isOpen ? 'true' : undefined}
            inert={isMobile && !isOpen}
          >
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a className="site-nav__link" href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default SiteNav