import './ComfortBags.css'

const items = [
    { icon: '🧣', name: 'Ultra-soft microfleece blanket' },
    { icon: '🧦', name: 'Cozy non-slip socks' },
    { icon: '😴', name: 'Eye mask' },
    { icon: '💧', name: 'Unscented lip balm & lotion' },
    { icon: '🧴', name: 'Hand sanitizer' },
    { icon: '🚰', name: 'Quality water bottle' },
    { icon: '🍬', name: 'Dry-mouth & ginger lozenges' },
    { icon: '🍪', name: 'Light snacks' },
    { icon: '🤲', name: 'Nausea acupressure wristbands' },
    { icon: '🪥', name: 'Extra-soft toothbrush' },
    { icon: '📓', name: 'Notebook & pen' },
    { icon: '🧩', name: 'Puzzle or colouring book' },
    { icon: '💌', name: 'Handwritten encouragement card' },
    { icon: '🤧', name: 'Tissues' },
]

const bagTiers = [
    { name: 'Single Comfort Bag', bags: 1, price: '~$170', cta: 'Donate 1 Bag' },
    { name: 'Double the Comfort', bags: 2, price: '~$340', cta: 'Donate 2 Bags', featured: true, badge: '★ MOST POPULAR' },
    { name: 'Comfort Champion', bags: 5, price: '~$850', cta: 'Donate 5 Bags' },
]

const ComfortBags = () => (
    <section className="comfort-bags" id="comfort-bags" aria-labelledby="comfort-heading">
        <div className="container">
            <div className="text-center fade-up">
                <p className="section-label">COMFORT & CARE</p>
                <h2 className="section-heading" id="comfort-heading">The Deluxe Chemo Cabs Comfort Bag</h2>
                <p className="section-subheading">
                    Oncology-recommended comforts for long treatment days. Each bag is packed with love and delivered directly to a patient.
                </p>
            </div>

            <div className="comfort-bags__showcase fade-up">
                <div className="comfort-bags__image-side">
                    <div className="comfort-bags__image-frame">
                        <div className="comfort-bags__image-placeholder">
                            <span className="comfort-bags__placeholder-icon">🎁</span>
                            <span>Comfort Bag</span>
                        </div>
                        <div className="comfort-bags__image-badges">
                            <span className="badge badge-pink">~$150–$170 CAD Value</span>
                            <span className="badge" style={{ background: '#f3f4f6', color: '#374151' }}>Available in Pink or Black</span>
                        </div>
                    </div>
                </div>
                <div className="comfort-bags__details-side">
                    <p className="comfort-bags__description">
                        Each pink or black tote includes an ultra-soft microfleece blanket, cozy non-slip socks, eye mask,
                        unscented lip balm and lotion, tissues, hand sanitizer, a quality water bottle, dry-mouth and ginger
                        lozenges, light snacks, nausea acupressure wristbands, an extra-soft toothbrush, plus a notebook,
                        pen, puzzle or colouring book and a handwritten encouragement card. Built entirely from items
                        available on Amazon.ca.
                    </p>
                    <div className="comfort-bags__items-grid">
                        {items.map((item, i) => (
                            <div className="comfort-bags__item" key={i}>
                                <span className="comfort-bags__item-icon">{item.icon}</span>
                                <span className="comfort-bags__item-name">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bag donation tiers */}
            <div className="comfort-bags__tiers fade-up">
                <h3 className="comfort-bags__tiers-title">Gift a Comfort Bag</h3>
                <div className="comfort-bags__tiers-grid">
                    {bagTiers.map((tier, i) => (
                        <div className={`comfort-bags__tier-card ${tier.featured ? 'featured' : ''}`} key={i}>
                            {tier.badge && <span className="comfort-bags__tier-badge badge badge-pink">{tier.badge}</span>}
                            <p className="comfort-bags__tier-name">{tier.name}</p>
                            <p className="comfort-bags__tier-bags">{tier.bags} bag{tier.bags > 1 ? 's' : ''}</p>
                            <p className="comfort-bags__tier-price">{tier.price}</p>
                            <a
                                href="#donate"
                                className={`btn btn-sm btn-full ${tier.featured ? 'btn-pink' : 'btn-outline-pink'}`}
                                onClick={(e) => { e.preventDefault(); document.querySelector('#donate')?.scrollIntoView({ behavior: 'smooth' }) }}
                            >
                                {tier.cta}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
)

export default ComfortBags
