import { useState, useEffect, useRef } from 'react'
import './StickyDonationBar.css'

const messages = [
    'Every $35 gets a patient to treatment',
    '$170 delivers a Comfort Bag to a patient',
    '$500 covers a full month of rides',
    'Join 200+ volunteers driving hope across Canada',
]

const StickyDonationBar = () => {
    const [visible, setVisible] = useState(false)
    const [dismissed, setDismissed] = useState(false)
    const [messageIndex, setMessageIndex] = useState(0)
    const lastSectionRef = useRef('')

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = document.querySelector('.hero')?.offsetHeight || 800
            setVisible(window.scrollY > heroHeight)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Rotate messages
    useEffect(() => {
        const interval = setInterval(() => {
            setMessageIndex(prev => (prev + 1) % messages.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    // Re-show on new section scroll
    useEffect(() => {
        if (!dismissed) return
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && entry.target.id !== lastSectionRef.current) {
                        lastSectionRef.current = entry.target.id
                        setDismissed(false)
                    }
                })
            },
            { threshold: 0.3 }
        )
        document.querySelectorAll('section[id]').forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [dismissed])

    if (!visible || dismissed) return null

    return (
        <div className="sticky-bar" role="complementary" aria-label="Donation prompt">
            <div className="sticky-bar__inner container">
                <p className="sticky-bar__message">
                    <span className="sticky-bar__icon">🩷</span>
                    {messages[messageIndex]}
                </p>
                <div className="sticky-bar__actions">
                    <a
                        href="#donate"
                        className="btn btn-pink btn-sm"
                        onClick={(e) => { e.preventDefault(); document.querySelector('#donate')?.scrollIntoView({ behavior: 'smooth' }) }}
                    >
                        Donate Now
                    </a>
                    <button
                        className="sticky-bar__close"
                        onClick={() => setDismissed(true)}
                        aria-label="Dismiss donation bar"
                    >
                        ✕
                    </button>
                </div>
            </div>
        </div>
    )
}

export default StickyDonationBar
