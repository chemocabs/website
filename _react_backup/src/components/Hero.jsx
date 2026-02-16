import { useState, useEffect, useRef } from 'react'
import './Hero.css'

const Hero = () => {
    const countersRef = useRef(null)
    const imageFrameRef = useRef(null)
    const [countersVisible, setCountersVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setCountersVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.3 }
        )
        if (countersRef.current) observer.observe(countersRef.current)
        return () => observer.disconnect()
    }, [])

    // 3D Tilt Effect
    useEffect(() => {
        const frame = imageFrameRef.current
        if (!frame) return

        const handleMouseMove = (e) => {
            const { left, top, width, height } = frame.getBoundingClientRect()
            const x = (e.clientX - left) / width - 0.5
            const y = (e.clientY - top) / height - 0.5

            // Max tilt angle
            const tiltX = y * 20 // vertical tilt
            const tiltY = x * -20 // horizontal tilt

            frame.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`
            // Add subtle lighting effect
            frame.querySelector('.hero__image-glow').style.background = `radial-gradient(circle at ${e.clientX - left}px ${e.clientY - top}px, rgba(255,255,255,0.2), transparent 40%)`
        }

        const handleMouseLeave = () => {
            frame.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
            frame.querySelector('.hero__image-glow').style.background = 'transparent'
        }

        frame.addEventListener('mousemove', handleMouseMove)
        frame.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            frame.removeEventListener('mousemove', handleMouseMove)
            frame.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [])

    return (
        <section className="hero" aria-labelledby="hero-heading">
            {/* Animated orbs */}
            <div className="hero__orbs" aria-hidden="true">
                <div className="hero__orb hero__orb--1"></div>
                <div className="hero__orb hero__orb--2"></div>
                <div className="hero__orb hero__orb--3"></div>
            </div>

            <div className="hero__container container">
                <div className="hero__content">
                    <h1 id="hero-heading" className="hero__title">
                        <span className="gradient-text">Driving Hope</span>
                        <br />
                        <span>Across Canada</span>
                    </h1>
                    <p className="hero__tagline">No patient rides alone.</p>
                    <p className="hero__body">
                        We provide free rides to cancer treatment for patients across Canada — through volunteer
                        drivers, Uber, Lyft, and Hopp. Because getting to your appointment should never be a
                        barrier to beating cancer.
                    </p>
                    <div className="hero__ctas">
                        <a href="#donate" className="btn btn-pink btn-lg" onClick={(e) => { e.preventDefault(); document.querySelector('#donate')?.scrollIntoView({ behavior: 'smooth' }) }}>
                            🩷 Donate — Fund a Ride
                        </a>
                        <a href="#ride-request" className="btn btn-outline btn-lg" onClick={(e) => { e.preventDefault(); document.querySelector('#ride-request')?.scrollIntoView({ behavior: 'smooth' }) }}>
                            🚗 Request a Free Ride
                        </a>
                    </div>
                    <div className="hero__trust">
                        <span>100% free for patients</span>
                        <span className="hero__trust-dot">·</span>
                        <span>Canada-wide</span>
                        <span className="hero__trust-dot">·</span>
                        <span>Registered Canadian Charity</span>
                        <span className="hero__trust-dot">·</span>
                        <span>Tax receipts issued</span>
                    </div>
                </div>

                <div className="hero__visual">
                    <div className="hero__image-frame 3d-tilt" ref={imageFrameRef}>
                        <div className="hero__image-glow"></div>
                        <img
                            src="/images/hero-car.png"
                            alt="The Pink 1957 Chevrolet Bel Air - Chemo Cabs mascot"
                            className="hero__image"
                            loading="eager"
                        />
                        <div className="hero__image-badge">
                            The Pink '57 Bel Air — Our Mascot
                        </div>
                    </div>
                </div>
            </div>

            {/* Impact counters */}
            <div className="hero__counters" ref={countersRef}>
                <div className="container">
                    <div className="hero__counters-grid">
                        <CounterCard amount="$35" label="Gets a patient to their appointment" visible={countersVisible} delay={0} />
                        <CounterCard amount="$170" label="Delivers a Comfort Bag to a patient in treatment" visible={countersVisible} delay={200} />
                        <CounterCard amount="$500" label="Covers a full month of rides" visible={countersVisible} delay={400} />
                    </div>
                </div>
            </div>
        </section>
    )
}

const CounterCard = ({ amount, label, visible, delay }) => {
    const [displayAmount, setDisplayAmount] = useState('$0')
    const targetNum = parseInt(amount.replace('$', ''))

    useEffect(() => {
        if (!visible) return
        const timeout = setTimeout(() => {
            let start = 0
            const duration = 1500
            const startTime = performance.now()

            const animate = (currentTime) => {
                const elapsed = currentTime - startTime
                const progress = Math.min(elapsed / duration, 1)
                const eased = 1 - Math.pow(1 - progress, 3)
                const current = Math.round(eased * targetNum)
                setDisplayAmount(`$${current}`)
                if (progress < 1) requestAnimationFrame(animate)
            }
            requestAnimationFrame(animate)
        }, delay)
        return () => clearTimeout(timeout)
    }, [visible, targetNum, delay])

    return (
        <div className="counter-card">
            <span className="counter-card__amount">{displayAmount}</span>
            <span className="counter-card__label">{label}</span>
        </div>
    )
}

export default Hero
