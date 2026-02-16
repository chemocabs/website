import { useState, useEffect, useRef } from 'react'
import './TheProblem.css'

const stats = [
    { value: '3.6M', label: 'Canadians face barriers accessing healthcare' },
    { value: '42%', label: 'Of cancer patients report transportation as a top concern' },
    { value: '1 in 4', label: 'Patients delay treatment due to lack of transport' },
    { value: '$0', label: 'What patients pay for a Chemo Cabs ride — always' }
]

const TheProblem = () => {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
            { threshold: 0.2 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section className="the-problem" id="problem" aria-labelledby="problem-heading">
            <div className="container">
                <div className="text-center fade-up">
                    <p className="section-label">THE PROBLEM</p>
                    <h2 className="section-heading" id="problem-heading">Cancer Doesn't Wait. Neither Should a Ride.</h2>
                    <p className="section-subheading">
                        Across Canada, thousands of cancer patients delay or miss treatment because they can't get
                        a ride. They're too sick to drive, too proud to ask, or too broke to afford it. Some give up
                        entirely. Chemo Cabs exists to make sure that never happens.
                    </p>
                </div>
                <div className="the-problem__stats stagger-children" ref={ref}>
                    {stats.map((stat, i) => (
                        <div className={`the-problem__stat card-dark fade-up ${visible ? 'visible' : ''}`} key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                            <span className="the-problem__value">{stat.value}</span>
                            <span className="the-problem__label">{stat.label}</span>
                        </div>
                    ))}
                </div>
                <div className="text-center fade-up" style={{ marginTop: '40px', marginBottom: 0 }}>
                    <a
                        href="#donate"
                        className="the-problem__cta"
                        onClick={(e) => { e.preventDefault(); document.querySelector('#donate')?.scrollIntoView({ behavior: 'smooth' }) }}
                    >
                        Help us change these numbers →
                    </a>
                </div>
            </div>
        </section>
    )
}

export default TheProblem
