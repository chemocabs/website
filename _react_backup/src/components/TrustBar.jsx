import './TrustBar.css'

const trustItems = [
    { icon: '🇨🇦', text: 'Registered Canadian Charity' },
    { icon: '📋', text: 'Tax Receipts for Every Donation' },
    { icon: '💯', text: '100% of Ride Donations Fund Rides' },
    { icon: '🤝', text: 'Volunteer-Powered Across Canada' },
    { icon: '🏥', text: 'Partnered with Treatment Centres Nationwide' },
]

const TrustBar = () => (
    <section className="trust-bar" aria-label="Trust signals">
        <div className="trust-bar__track">
            <div className="trust-bar__scroll">
                {/* Duplicate for infinite scroll */}
                {[...trustItems, ...trustItems].map((item, i) => (
                    <div className="trust-bar__item" key={i}>
                        <span className="trust-bar__icon" aria-hidden="true">{item.icon}</span>
                        <span>{item.text}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
)

export default TrustBar
