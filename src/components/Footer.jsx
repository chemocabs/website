import './Footer.css'

const Footer = () => (
    <footer className="footer" role="contentinfo">
        <div className="container">
            <div className="footer__grid">
                {/* Column 1: Brand */}
                <div className="footer__brand">
                    <a href="#" className="footer__logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
                        <svg className="footer__logo-icon" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M4,22 Q4,16 10,14 L14,6 Q16,3 20,3 L32,3 Q36,3 38,6 L42,14 Q46,16 46,20 L46,22 Q46,26 42,28 L6,28 Q4,26 4,22 Z" fill="#E91E8C" opacity="0.9" />
                            <circle cx="14" cy="28" r="4" fill="#0A0A0A" stroke="#E91E8C" strokeWidth="2" />
                            <circle cx="38" cy="28" r="4" fill="#0A0A0A" stroke="#E91E8C" strokeWidth="2" />
                        </svg>
                        <span className="footer__logo-text">Chemo Cabs</span>
                    </a>
                    <p className="footer__tagline">
                        Driving Hope across Canada. Free rides and comfort for cancer patients — because no one should
                        face treatment alone.
                    </p>
                    <div className="footer__socials">
                        {['Facebook', 'X', 'Instagram', 'LinkedIn', 'TikTok'].map(s => (
                            <a href="#" className="footer__social-link" key={s} aria-label={`Follow us on ${s}`}>{s.charAt(0)}</a>
                        ))}
                    </div>
                </div>

                {/* Column 2: For Patients */}
                <div className="footer__col">
                    <h4 className="footer__col-title">For Patients</h4>
                    <ul>
                        <li><a href="#ride-request" onClick={(e) => { e.preventDefault(); document.querySelector('#ride-request')?.scrollIntoView({ behavior: 'smooth' }) }}>Request a Ride</a></li>
                        <li><a href="#how-it-works" onClick={(e) => { e.preventDefault(); document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' }) }}>How It Works</a></li>
                        <li><a href="#stories" onClick={(e) => { e.preventDefault(); document.querySelector('#stories')?.scrollIntoView({ behavior: 'smooth' }) }}>Patient Stories</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>

                {/* Column 3: For Supporters */}
                <div className="footer__col">
                    <h4 className="footer__col-title">For Supporters</h4>
                    <ul>
                        <li><a href="#donate" onClick={(e) => { e.preventDefault(); document.querySelector('#donate')?.scrollIntoView({ behavior: 'smooth' }) }}>Donate</a></li>
                        <li><a href="#comfort-bags" onClick={(e) => { e.preventDefault(); document.querySelector('#comfort-bags')?.scrollIntoView({ behavior: 'smooth' }) }}>Comfort Bags</a></li>
                        <li><a href="#volunteer" onClick={(e) => { e.preventDefault(); document.querySelector('#volunteer')?.scrollIntoView({ behavior: 'smooth' }) }}>Volunteer</a></li>
                        <li><a href="#corporate" onClick={(e) => { e.preventDefault(); document.querySelector('#corporate')?.scrollIntoView({ behavior: 'smooth' }) }}>Corporate Partnerships</a></li>
                    </ul>
                </div>

                {/* Column 4: About */}
                <div className="footer__col">
                    <h4 className="footer__col-title">About</h4>
                    <ul>
                        <li><a href="#problem" onClick={(e) => { e.preventDefault(); document.querySelector('#problem')?.scrollIntoView({ behavior: 'smooth' }) }}>Our Mission</a></li>
                        <li><a href="mailto:info@chemocabs.org">Contact Us</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer__bottom">
                <p className="footer__copyright">© 2025 Chemo Cabs — Driving Hope. Registered Canadian Charity. All donations are tax-deductible.</p>
                <div className="footer__trust-row">
                    <span>🔒 Secure Donations via Stripe</span>
                    <span>📋 Tax Receipts Issued Instantly</span>
                    <span>💯 100% Transparent</span>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer
