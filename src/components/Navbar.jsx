import { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [mobileOpen])

    const handleNavClick = (e, href) => {
        e.preventDefault()
        setMobileOpen(false)
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    const navLinks = [
        { label: 'About', href: '#problem' },
        { label: 'Impact', href: '#donate' },
        { label: 'Donate', href: '#donate' },
        { label: 'Comfort Bags', href: '#comfort-bags' },
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'Stories', href: '#stories' },
    ]

    return (
        <>
            <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
                <div className="navbar__container container">
                    <a href="#" className="navbar__logo" aria-label="Chemo Cabs Home" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
                        <svg className="navbar__logo-icon" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M4,22 Q4,16 10,14 L14,6 Q16,3 20,3 L32,3 Q36,3 38,6 L42,14 Q46,16 46,20 L46,22 Q46,26 42,28 L6,28 Q4,26 4,22 Z" fill="currentColor" opacity="0.9" />
                            <circle cx="14" cy="28" r="4" fill="#0A0A0A" stroke="currentColor" strokeWidth="2" />
                            <circle cx="38" cy="28" r="4" fill="#0A0A0A" stroke="currentColor" strokeWidth="2" />
                            <rect x="18" y="9" width="6" height="5" rx="1" fill="#0A0A0A" opacity="0.2" />
                            <rect x="26" y="9" width="6" height="5" rx="1" fill="#0A0A0A" opacity="0.2" />
                        </svg>
                        <span className="navbar__logo-text">Chemo Cabs</span>
                    </a>

                    <ul className="navbar__links">
                        {navLinks.map(link => (
                            <li key={link.label}>
                                <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>{link.label}</a>
                            </li>
                        ))}
                    </ul>

                    <div className="navbar__actions">
                        <a href="#ride-request" className="btn btn-pink btn-sm" onClick={(e) => handleNavClick(e, '#ride-request')}>Request a Ride</a>
                        <a href="#donate" className="btn btn-outline-pink btn-sm" onClick={(e) => handleNavClick(e, '#donate')}>Donate</a>
                    </div>

                    <button
                        className={`navbar__hamburger ${mobileOpen ? 'active' : ''}`}
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={mobileOpen}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>

            {/* Mobile menu overlay */}
            <div className={`mobile-menu ${mobileOpen ? 'mobile-menu--open' : ''}`} role="dialog" aria-label="Mobile navigation">
                <div className="mobile-menu__actions">
                    <a href="#donate" className="btn btn-pink btn-lg btn-full" onClick={(e) => handleNavClick(e, '#donate')}>Donate Now</a>
                    <a href="#ride-request" className="btn btn-outline btn-lg btn-full" style={{ color: '#fff', borderColor: '#fff' }} onClick={(e) => handleNavClick(e, '#ride-request')}>Request a Ride</a>
                </div>
                <ul className="mobile-menu__links">
                    {navLinks.map(link => (
                        <li key={link.label}>
                            <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Navbar
