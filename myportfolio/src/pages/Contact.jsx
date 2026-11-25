import { useState } from "react";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);

    function handleChange(e) {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

    }

    function handleSubmit(e) {

        e.preventDefault();

        setSubmitted(true);

        setFormData({
            name: "",
            email: "",
            message: ""
        });

    }

    return (

        <section id="contact" className="section contact">

            <div className="section-heading">

                <p>GET IN TOUCH</p>

                <h1>
                    Contact <span>Me</span>
                </h1>

            </div>

            <form
                className="contact-form"
                onSubmit={handleSubmit}
            >

                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />

                <button type="submit">
                    Send Message
                </button>

            </form>

            {submitted && (

                <div className="popup">

                    <div className="popup-content">

                        <h2>Message Submitted!</h2>

                        <p>
                            Thank you for contacting me.
                        </p>

                        <button
                            onClick={() => setSubmitted(false)}
                        >
                            Close
                        </button>

                    </div>

                </div>

            )}

        </section>

    );

}

export default Contact;