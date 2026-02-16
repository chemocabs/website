import './HowItWorks.css'

const steps = [
    {
        num: 1,
        title: 'Submit a Request',
        description: 'Fill out our simple form with your treatment details and pickup location.',
    },
    {
        num: 2,
        title: 'We Match You',
        description: 'Our team matches you with a volunteer driver or arranges a rideshare.',
    },
    {
        num: 3,
        title: 'Ride to Treatment',
        description: 'Your ride arrives at your door — completely free. No wallet needed.',
    },
    {
        num: 4,
        title: 'Get Home Safe',
        description: 'After your appointment, we get you home safely to rest and recover.',
    },
]

const HowItWorks = () => (
    <section className="how-it-works" id="how-it-works" aria-labelledby="how-heading">
        <div className="container">
            <div className="text-center fade-up">
                <h2 className="section-heading" id="how-heading">From Request to Ride in Four Simple Steps</h2>
            </div>
            <div className="how-it-works__steps">
                {steps.map((step, i) => (
                    <div className="how-it-works__step fade-up" key={i}>
                        <div className="how-it-works__num">{step.num}</div>
                        {i < steps.length - 1 && <div className="how-it-works__connector" aria-hidden="true"></div>}
                        <h3 className="how-it-works__title">{step.title}</h3>
                        <p className="how-it-works__desc">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
)

export default HowItWorks
