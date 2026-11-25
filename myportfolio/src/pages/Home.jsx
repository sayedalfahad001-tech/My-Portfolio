function Home() {

    return (

        <section id="home" className="home section">

            <div className="home-content">

                <p className="intro">
                    HELLO, I'M
                </p>

                <h1>
                    Fahad<span>.</span>
                </h1>

                <h2>
                    Computer Science Student
                </h2>

                <h3>
                    Beginner Developer
                </h3>

                <p className="description">
                    I'm a beginner in programming and web development,
                    currently learning new technologies and improving
                    my coding skills.

                    I'm interested in creating websites and exploring
                    the world of software development.
                </p>

                <div className="home-buttons">

                    <a href="#about" className="btn primary">
                        About Me
                    </a>

                    <a href="#contact" className="btn secondary">
                        Contact Me
                    </a>

                </div>

            </div>

            <div className="home-image">

                <div className="profile-circle">
                    SF

                </div>

            </div>

        </section>

    );

}

export default Home;