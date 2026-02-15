import './GivingTiers.css'

const tiers = [
    {
        emoji: '💛',
        name: 'Hope Giver',
        range: '$25–$99/month or one-time',
        description: 'Cover round-trip rides for patients in your community.',
        perks: [
            'Tax receipt',
            'Welcome email & quarterly impact update',
            'Name on our digital Donor Wall',
        ],
        cta: 'Become a Hope Giver',
        style: 'default',
    },
    {
        emoji: '💖',
        name: 'Care Champion',
        range: '$100–$499',
        description: 'Fund a week of rides and deliver a Comfort Bag to a patient in active treatment.',
        perks: [
            'Everything in Hope Giver',
            'Personalized thank-you card',
            'Quarterly impact report with patient stories',
            'Social media recognition',
        ],
        cta: 'Become a Care Champion',
        style: 'featured',
        badge: '★ MOST POPULAR',
    },
    {
        emoji: '🌟',
        name: 'Driving Force',
        range: '$500+',
        description: 'Cover a full month of treatment transportation for a patient in need.',
        perks: [
            'Everything in Care Champion',
            'Personal impact story from a patient you helped',
            'Invitation to annual Driving Hope gala',
            'Exclusive Chemo Cabs pin & certificate',
            'Phone call from our founder',
        ],
        cta: 'Become a Driving Force',
        style: 'premium',
    },
]

const GivingTiers = () => (
    <section className="giving-tiers" aria-labelledby="tiers-heading">
        <div className="container">
            <div className="text-center fade-up">
                <h2 className="section-heading" id="tiers-heading">Join Our Community of Supporters</h2>
                <p className="section-subheading">
                    Every tier includes a tax receipt and our heartfelt gratitude.
                </p>
            </div>
            <div className="giving-tiers__grid stagger-children">
                {tiers.map((tier, i) => (
                    <div className={`giving-tiers__card card fade-up giving-tiers__card--${tier.style}`} key={i}>
                        {tier.badge && <span className="giving-tiers__badge badge badge-pink">{tier.badge}</span>}
                        <span className="giving-tiers__emoji">{tier.emoji}</span>
                        <h3 className="giving-tiers__name">{tier.name}</h3>
                        <p className="giving-tiers__range">{tier.range}</p>
                        <p className="giving-tiers__desc">{tier.description}</p>
                        <ul className="giving-tiers__perks">
                            {tier.perks.map((perk, j) => (
                                <li key={j}><span className="giving-tiers__check">✓</span> {perk}</li>
                            ))}
                        </ul>
                        <a
                            href="#donate"
                            className={`btn ${tier.style === 'featured' ? 'btn-pink' : 'btn-outline-pink'} btn-full`}
                            onClick={(e) => { e.preventDefault(); document.querySelector('#donate')?.scrollIntoView({ behavior: 'smooth' }) }}
                        >
                            {tier.cta}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </section>
)

export default GivingTiers
