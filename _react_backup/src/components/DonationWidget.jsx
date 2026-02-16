import { useState } from 'react'
import './DonationWidget.css'

const amounts = [
    { value: 35, label: 'One round-trip ride to treatment', icon: '🚗' },
    { value: 75, label: 'Two rides + snack pack', icon: '🎒' },
    { value: 170, label: 'One Deluxe Comfort Bag for a patient', icon: '🎁', featured: true },
    { value: 500, label: 'A full month of rides for one patient', icon: '📅' },
]

const DonationWidget = () => {
    const [frequency, setFrequency] = useState('monthly')
    const [selectedAmount, setSelectedAmount] = useState(170)
    const [customAmount, setCustomAmount] = useState('')
    const [showDedication, setShowDedication] = useState(false)
    const [dedicateName, setDedicateName] = useState('')
    const [dedicateMessage, setDedicateMessage] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [processing, setProcessing] = useState(false)
    const [success, setSuccess] = useState(false)
    const [errors, setErrors] = useState({})

    const activeAmount = customAmount ? parseInt(customAmount) || 0 : selectedAmount

    const handleAmountClick = (val) => {
        setSelectedAmount(val)
        setCustomAmount('')
    }

    const validate = () => {
        const errs = {}
        if (!name.trim()) errs.name = 'Full name is required'
        if (!email.trim()) errs.email = 'Email is required'
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Enter a valid email'
        if (activeAmount < 1) errs.amount = 'Please select or enter a donation amount'
        setErrors(errs)
        return Object.keys(errs).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!validate()) return

        setProcessing(true)
        // Simulating Stripe payment processing
        // In production, this would call your backend to create a Stripe PaymentIntent
        // or redirect to Stripe Checkout
        await new Promise(resolve => setTimeout(resolve, 2000))
        setProcessing(false)
        setSuccess(true)
    }

    if (success) {
        return (
            <section className="donation" id="donate">
                <div className="container">
                    <div className="donation__success">
                        <div className="donation__success-icon">✅</div>
                        <h2>Thank You for Your Generosity!</h2>
                        <p>Your ${activeAmount} {frequency === 'monthly' ? 'monthly ' : ''}donation will directly fund rides for cancer patients across Canada.</p>
                        <p>A tax receipt has been emailed to <strong>{email}</strong>.</p>
                        <p className="donation__success-sub">You are a part of something incredible. Thank you, {name.split(' ')[0]}. 🩷</p>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="donation" id="donate" aria-labelledby="donate-heading">
            <div className="container">
                <div className="text-center fade-up">
                    <p className="section-label">MAKE A DIFFERENCE TODAY</p>
                    <h2 className="section-heading" id="donate-heading">Your Donation Gets Patients to Treatment</h2>
                    <p className="section-subheading">
                        Choose how you want to help — every dollar has a direct, tangible impact on a cancer patient's journey.
                    </p>
                </div>

                <form className="donation__card card fade-up" onSubmit={handleSubmit} noValidate>
                    {/* Step 1: Frequency Toggle */}
                    <div className="donation__toggle">
                        <button
                            type="button"
                            className={`donation__toggle-btn ${frequency === 'one-time' ? 'active' : ''}`}
                            onClick={() => setFrequency('one-time')}
                        >
                            One-Time
                        </button>
                        <button
                            type="button"
                            className={`donation__toggle-btn ${frequency === 'monthly' ? 'active' : ''}`}
                            onClick={() => setFrequency('monthly')}
                        >
                            Monthly
                            <span className="badge badge-pink" style={{ marginLeft: '8px', fontSize: '0.65rem' }}>RECOMMENDED</span>
                        </button>
                    </div>
                    {frequency === 'monthly' && (
                        <p className="donation__monthly-note">
                            💖 Partners in Hope give monthly — it helps us plan ahead
                        </p>
                    )}

                    {/* Step 2: Amount Grid */}
                    <div className="donation__amounts">
                        {amounts.map(amt => (
                            <button
                                key={amt.value}
                                type="button"
                                className={`donation__amount-btn ${selectedAmount === amt.value && !customAmount ? 'active' : ''} ${amt.featured ? 'featured' : ''}`}
                                onClick={() => handleAmountClick(amt.value)}
                            >
                                {amt.featured && <span className="donation__amount-badge">MOST CHOSEN</span>}
                                <span className="donation__amount-icon">{amt.icon}</span>
                                <span className="donation__amount-value">${amt.value}</span>
                                <span className="donation__amount-label">{amt.label}</span>
                            </button>
                        ))}
                        <div className={`donation__amount-btn donation__custom ${customAmount ? 'active' : ''}`}>
                            <span className="donation__amount-icon">✨</span>
                            <span className="donation__amount-value">Custom</span>
                            <div className="donation__custom-input-wrap">
                                <span className="donation__custom-prefix">$</span>
                                <input
                                    type="number"
                                    className="donation__custom-input"
                                    placeholder="Enter amount"
                                    min="1"
                                    value={customAmount}
                                    onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(0) }}
                                    aria-label="Custom donation amount"
                                />
                            </div>
                        </div>
                    </div>
                    {errors.amount && <p className="form-error" style={{ textAlign: 'center' }}>{errors.amount}</p>}

                    {/* Step 3: Dedication */}
                    <div className="donation__dedication">
                        <label className="donation__dedication-toggle">
                            <input
                                type="checkbox"
                                checked={showDedication}
                                onChange={(e) => setShowDedication(e.target.checked)}
                            />
                            <span>Make this gift in honour or memory of someone</span>
                        </label>
                        {showDedication && (
                            <div className="donation__dedication-fields">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-input"
                                        placeholder="Their name"
                                        value={dedicateName}
                                        onChange={(e) => setDedicateName(e.target.value)}
                                        aria-label="Dedication name"
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        className="form-input"
                                        placeholder="A short message (optional)"
                                        rows="2"
                                        value={dedicateMessage}
                                        onChange={(e) => setDedicateMessage(e.target.value)}
                                        aria-label="Dedication message"
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Step 4: Donor Info */}
                    <div className="donation__fields">
                        <div className="form-group">
                            <label className="form-label" htmlFor="donor-name">Full Name *</label>
                            <input
                                type="text"
                                id="donor-name"
                                className={`form-input ${errors.name ? 'error' : ''}`}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            {errors.name && <p className="form-error">{errors.name}</p>}
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="donor-email">Email *</label>
                            <input
                                type="email"
                                id="donor-email"
                                className={`form-input ${errors.email ? 'error' : ''}`}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            {errors.email && <p className="form-error">{errors.email}</p>}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-pink btn-lg btn-full"
                        disabled={processing}
                    >
                        {processing ? 'Processing...' : `Donate $${activeAmount}${frequency === 'monthly' ? '/month' : ''} Now →`}
                    </button>

                    <div className="donation__secure">
                        <p>🔒 Secure · Tax receipt emailed instantly · Powered by Stripe</p>
                        <p className="donation__secure-small">Chemo Cabs is a registered Canadian charity. All donations are tax-deductible.</p>
                    </div>
                </form>

                {/* Impact stats row */}
                <div className="donation__impact stagger-children">
                    <div className="donation__impact-card fade-up">
                        <span className="donation__impact-icon">🚗</span>
                        <span className="donation__impact-num">142</span>
                        <span className="donation__impact-label">Rides Funded This Month</span>
                    </div>
                    <div className="donation__impact-card fade-up">
                        <span className="donation__impact-icon">🎁</span>
                        <span className="donation__impact-num">67</span>
                        <span className="donation__impact-label">Comfort Bags Delivered</span>
                    </div>
                    <div className="donation__impact-card fade-up">
                        <span className="donation__impact-icon">💛</span>
                        <span className="donation__impact-num">318</span>
                        <span className="donation__impact-label">Donors This Month</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DonationWidget
