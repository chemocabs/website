import { useState } from 'react'
import './RideRequest.css'

const RideRequest = () => {
    const [form, setForm] = useState({
        name: '', email: '', phone: '', city: '', facility: '',
        date: '', preference: 'no-preference', notes: ''
    })
    const [errors, setErrors] = useState({})
    const [submitting, setSubmitting] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const validate = () => {
        const errs = {}
        if (!form.name.trim()) errs.name = 'Full name is required'
        if (!form.email.trim()) errs.email = 'Email is required'
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email'
        if (!form.phone.trim()) errs.phone = 'Phone number is required'
        if (!form.city.trim()) errs.city = 'City / Province is required'
        if (!form.facility.trim()) errs.facility = 'Treatment facility is required'
        if (!form.date) errs.date = 'Appointment date is required'
        setErrors(errs)
        return Object.keys(errs).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!validate()) return
        setSubmitting(true)
        // In production: POST to backend / webhook → info@chemocabs.org
        await new Promise(r => setTimeout(r, 1500))
        setSubmitting(false)
        setSuccess(true)
    }

    // Minimum date = today
    const today = new Date().toISOString().split('T')[0]

    if (success) {
        return (
            <section className="ride-request" id="ride-request">
                <div className="ride-request__orbs" aria-hidden="true">
                    <div className="ride-request__orb ride-request__orb--1"></div>
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="ride-request__success">
                        <div className="ride-request__success-icon">✅</div>
                        <h2>Thank you, {form.name.split(' ')[0]}!</h2>
                        <p>We'll be in touch within 24 hours to confirm your ride.</p>
                        <p className="ride-request__success-sub">You are not alone. 🩷</p>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="ride-request" id="ride-request" aria-labelledby="ride-heading">
            <div className="ride-request__orbs" aria-hidden="true">
                <div className="ride-request__orb ride-request__orb--1"></div>
                <div className="ride-request__orb ride-request__orb--2"></div>
            </div>
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="ride-request__grid">
                    {/* Left: Info */}
                    <div className="ride-request__info">
                        <h2 className="ride-request__heading" id="ride-heading">
                            You Focus on Getting Better. We'll Handle the Ride.
                        </h2>
                        <p className="ride-request__body">
                            Whether it's chemo, radiation, surgery, or a follow-up — submit a request and we'll take care
                            of the rest. Every ride is 100% free, always.
                        </p>
                        <ul className="ride-request__features">
                            <li>🚗 Volunteer drivers or rideshare — your choice</li>
                            <li>💰 Always 100% free for patients</li>
                            <li>🏥 Rides to any cancer treatment facility in Canada</li>
                            <li>🔄 Round-trip coverage included</li>
                            <li>🇨🇦 Available coast to coast</li>
                            <li>⏰ We respond within 24 hours</li>
                        </ul>
                    </div>

                    {/* Right: Form */}
                    <div className="ride-request__form-card">
                        <h3 className="ride-request__form-title">Request Your Free Ride</h3>
                        <p className="ride-request__form-sub">We'll confirm within 24 hours.</p>

                        <form onSubmit={handleSubmit} noValidate>
                            <div className="form-group">
                                <label className="form-label" htmlFor="ride-name">Full Name *</label>
                                <input id="ride-name" name="name" className={`form-input form-input-dark ${errors.name ? 'error' : ''}`} value={form.name} onChange={handleChange} required />
                                {errors.name && <p className="form-error">{errors.name}</p>}
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="ride-email" style={{ color: 'rgba(255,255,255,0.9)' }}>Email *</label>
                                <input id="ride-email" name="email" type="email" className={`form-input form-input-dark ${errors.email ? 'error' : ''}`} value={form.email} onChange={handleChange} required />
                                {errors.email && <p className="form-error">{errors.email}</p>}
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="ride-phone" style={{ color: 'rgba(255,255,255,0.9)' }}>Phone *</label>
                                <input id="ride-phone" name="phone" type="tel" className={`form-input form-input-dark ${errors.phone ? 'error' : ''}`} placeholder="(555) 123-4567" value={form.phone} onChange={handleChange} required />
                                {errors.phone && <p className="form-error">{errors.phone}</p>}
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="ride-city" style={{ color: 'rgba(255,255,255,0.9)' }}>City / Province *</label>
                                <input id="ride-city" name="city" className={`form-input form-input-dark ${errors.city ? 'error' : ''}`} value={form.city} onChange={handleChange} required />
                                {errors.city && <p className="form-error">{errors.city}</p>}
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="ride-facility" style={{ color: 'rgba(255,255,255,0.9)' }}>Treatment Facility Name *</label>
                                <input id="ride-facility" name="facility" className={`form-input form-input-dark ${errors.facility ? 'error' : ''}`} value={form.facility} onChange={handleChange} required />
                                {errors.facility && <p className="form-error">{errors.facility}</p>}
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="ride-date" style={{ color: 'rgba(255,255,255,0.9)' }}>Next Appointment Date *</label>
                                <input id="ride-date" name="date" type="date" min={today} className={`form-input form-input-dark ${errors.date ? 'error' : ''}`} value={form.date} onChange={handleChange} required />
                                {errors.date && <p className="form-error">{errors.date}</p>}
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="ride-pref" style={{ color: 'rgba(255,255,255,0.9)' }}>Ride Preference</label>
                                <select id="ride-pref" name="preference" className="form-input form-input-dark" value={form.preference} onChange={handleChange}>
                                    <option value="no-preference">No Preference</option>
                                    <option value="volunteer">Volunteer Driver</option>
                                    <option value="rideshare">Rideshare (Uber/Lyft/Hopp)</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="ride-notes" style={{ color: 'rgba(255,255,255,0.9)' }}>Anything else we should know?</label>
                                <textarea id="ride-notes" name="notes" className="form-input form-input-dark" rows="3" value={form.notes} onChange={handleChange} placeholder="Optional"></textarea>
                            </div>

                            <button type="submit" className="btn btn-pink btn-lg btn-full" disabled={submitting}>
                                {submitting ? 'Submitting...' : 'Submit Ride Request →'}
                            </button>

                            <p className="ride-request__secure">🔒 Your information is confidential and secure.</p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RideRequest
