import './PatientStories.css'

const testimonials = [
    {
        quote: "I was so scared about how I'd get to chemo three times a week. Chemo Cabs lifted that weight off my shoulders completely. I could just focus on fighting.",
        name: 'Sarah M.',
        detail: 'Breast cancer patient, Toronto',
    },
    {
        quote: "As a single mom with two kids, I had no idea how I'd get to the hospital. My volunteer driver showed up with a smile every single time. That kindness carried me through treatment.",
        name: 'Maria L.',
        detail: 'Leukemia patient, Vancouver',
    },
    {
        quote: "The Comfort Bag was the nicest surprise. The blanket, the snacks, the little handwritten card — it reminded me that people out there actually care. That matters more than you know.",
        name: 'David R.',
        detail: 'Colon cancer patient, Calgary',
    },
]

const PatientStories = () => (
    <section className="stories" id="stories" aria-labelledby="stories-heading">
        <div className="container">
            <div className="text-center fade-up">
                <p className="section-label">PATIENT STORIES</p>
                <h2 className="section-heading" id="stories-heading">Voices of Hope</h2>
                <p className="section-subheading">
                    Real stories from patients who got the rides they needed — when they needed them most.
                </p>
            </div>
            <div className="stories__grid stagger-children">
                {testimonials.map((t, i) => (
                    <div className="stories__card card fade-up" key={i}>
                        <span className="stories__quote-mark" aria-hidden="true">"</span>
                        <blockquote className="stories__quote">{t.quote}</blockquote>
                        <div className="stories__author">
                            <p className="stories__name">{t.name}</p>
                            <p className="stories__detail">{t.detail}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
)

export default PatientStories
