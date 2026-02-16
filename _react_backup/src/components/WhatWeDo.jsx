import './WhatWeDo.css'

const services = [
    {
        icon: '🚗',
        title: 'Volunteer Drivers',
        description: 'Compassionate community volunteers provide door-to-door rides to and from treatment centres across Canada. A friendly face on a tough day makes all the difference.'
    },
    {
        icon: '📱',
        title: 'Rideshare Coverage',
        description: 'We cover Uber, Lyft, Hopp, and other rideshare costs so patients can get to treatment on their schedule — no wallet required, no stress involved.'
    },
    {
        icon: '🎁',
        title: 'Comfort Bags',
        description: 'Our Deluxe Comfort Bags are packed with oncology-recommended essentials — from cozy blankets to nausea relief — because care extends beyond the ride.'
    }
]

const WhatWeDo = () => (
    <section className="what-we-do" id="what-we-do" aria-labelledby="what-we-do-heading">
        <div className="container">
            <div className="text-center fade-up">
                <p className="section-label">WHAT WE DO</p>
                <h2 className="section-heading" id="what-we-do-heading">Three Ways We Drive Hope</h2>
            </div>
            <div className="what-we-do__grid stagger-children">
                {services.map((service, i) => (
                    <div className="what-we-do__card card fade-up" key={i}>
                        <span className="what-we-do__icon" aria-hidden="true">{service.icon}</span>
                        <h3 className="what-we-do__title">{service.title}</h3>
                        <p className="what-we-do__desc">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
)

export default WhatWeDo
