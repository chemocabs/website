import './CorporatePartners.css'

const tiers = [
    {
        icon: '🥈',
        name: 'Silver Partner',
        range: '$1,000–$4,999',
        description: 'Fund dozens of rides and gain brand visibility across our digital platforms.',
        perks: [
            'Logo on ChemoCabs.org',
            'Social media acknowledgement (2x/year)',
            'Tax receipt & annual impact report',
            'Digital Partner Badge for your website',
            'Certificate of partnership',
        ],
        style: 'silver',
        cta: 'Become a Silver Partner',
    },
    {
        icon: '🥇',
        name: 'Gold Partner',
        range: '$5,000–$24,999',
        description: 'Fund hundreds of rides with premium brand placement at all Chemo Cabs events and campaigns.',
        perks: [
            'Everything in Silver',
            'Featured logo placement (homepage + events)',
            'Co-branded content & press release',
            'VIP gala table (4 seats)',
            'Quarterly strategy calls with our team',
            'Employee volunteer day coordination',
            '"Powered by [Your Company]" on ride receipts (optional)',
        ],
        style: 'gold',
        badge: '★ MOST IMPACT',
        cta: 'Become a Gold Partner',
    },
    {
        icon: '💎',
        name: 'Platinum Partner',
        range: '$25,000+',
        description: 'Title-level sponsorship with naming rights, national media, and the ultimate brand placement.',
        perks: [
            'Everything in Gold',
            'Title sponsor at flagship events',
            'National media feature & press coverage',
            'Custom CSR case study produced for your brand',
            'Board advisory invitation',
            'Your logo on the Pink \'57 Bel Air (seen at events, in media, on social)',
            'Custom Comfort Bags co-branded with your logo',
            'Dedicated partnership manager',
        ],
        style: 'platinum',
        cta: 'Become a Platinum Partner',
    },
]

const CorporatePartners = () => (
    <section className="corporate" id="corporate" aria-labelledby="corporate-heading">
        <div className="corporate__orbs" aria-hidden="true">
            <div className="corporate__orb corporate__orb--1"></div>
            <div className="corporate__orb corporate__orb--2"></div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="text-center fade-up">
                <p className="section-label">CORPORATE PARTNERSHIPS</p>
                <h2 className="section-heading" id="corporate-heading" style={{ color: '#fff' }}>Align Your Brand With a Movement</h2>
                <p className="section-subheading" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    Chemo Cabs corporate partners don't just write cheques — they join a visible, high-impact movement
                    that employees, customers, and communities rally behind.
                </p>
                <p className="corporate__selling-point fade-up">
                    Our partners receive year-round brand visibility across events, media, social channels, and — for our top-tier
                    partners — on the iconic Pink '57 Bel Air itself.
                </p>
            </div>

            <div className="corporate__grid stagger-children">
                {tiers.map((tier, i) => (
                    <div className={`corporate__card card fade-up corporate__card--${tier.style}`} key={i}>
                        {tier.badge && <span className="corporate__badge">{tier.badge}</span>}
                        <span className="corporate__icon">{tier.icon}</span>
                        <h3 className="corporate__name">{tier.name}</h3>
                        <p className="corporate__range">{tier.range}</p>
                        <p className="corporate__desc">{tier.description}</p>
                        <ul className="corporate__perks">
                            {tier.perks.map((perk, j) => (
                                <li key={j}><span className="corporate__check">✓</span> {perk}</li>
                            ))}
                        </ul>
                        <a href="mailto:info@chemocabs.org" className={`btn btn-full ${tier.style === 'gold' ? 'btn-pink' : 'btn-outline'}`}>
                            {tier.cta}
                        </a>
                    </div>
                ))}
            </div>

            {/* Partner logos placeholder */}
            <div className="corporate__logos fade-up">
                <h3 className="corporate__logos-title">Current Partners</h3>
                <div className="corporate__logos-grid">
                    {[1, 2, 3, 4, 5].map(n => (
                        <div className="corporate__logo-placeholder" key={n}>Your Logo Here</div>
                    ))}
                </div>
                <p className="corporate__logos-sub">Join the growing list of organizations driving hope across Canada.</p>
            </div>
        </div>
    </section>
)

export default CorporatePartners
