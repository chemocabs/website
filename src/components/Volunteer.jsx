import './Volunteer.css'

const roles = [
    { emoji: '🚗', label: 'Volunteer Driver' },
    { emoji: '📣', label: 'Community Fundraiser' },
    { emoji: '🎁', label: 'Comfort Bag Packer' },
    { emoji: '💻', label: 'Digital Ambassador' },
    { emoji: '🎵', label: 'Event Volunteer' },
]

const Volunteer = () => (
    <section className="volunteer" id="volunteer" aria-labelledby="volunteer-heading">
        <div className="container">
            <div className="text-center fade-up">
                <h2 className="section-heading" id="volunteer-heading">Drive Hope in Your Community</h2>
                <p className="section-subheading">
                    Whether you can drive, fundraise, pack Comfort Bags, or spread the word on social — there's a place
                    for you at Chemo Cabs. Every action brings someone closer to the treatment they need.
                </p>
            </div>
            <div className="volunteer__roles fade-up">
                {roles.map((role, i) => (
                    <button className="volunteer__pill" key={i} type="button">
                        <span>{role.emoji}</span> {role.label}
                    </button>
                ))}
            </div>
            <div className="text-center fade-up" style={{ marginBottom: 0 }}>
                <a href="mailto:info@chemocabs.org" className="btn btn-pink btn-lg">Sign Up to Volunteer</a>
                <p className="volunteer__count">Join 200+ volunteers across Canada</p>
            </div>
        </div>
    </section>
)

export default Volunteer
