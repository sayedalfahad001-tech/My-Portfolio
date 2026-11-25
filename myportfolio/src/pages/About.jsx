function About() {

  const skills = [
    "Python",
    "JavaScript",
    "SQL",
    "React",
    "Git",
    "GitHub"

  ];

  return (

    <section id="about" className="section about">

      <div className="section-heading">

        <p>GET TO KNOW ME</p>

        <h1>
          About <span>Me</span>
        </h1>

      </div>

      <div className="about-content">

        <div className="about-text">

          <h2>Who am I?</h2>

          <p>
            Hi! I'm Sayed Al Fahad, a Computer Science
            student with an interest in programming
            and web development.
          </p>

          <p>
            I'm currently at the beginning of my
            development journey, learning programming
            languages, understanding web technologies
            and improving my problem-solving skills.
          </p>

          <p>
            My goal is to gain practical experience
            by building projects and continuously
            learning new technologies.
          </p>

          <h3>Education</h3>

          <p>
            Computer Science Engineering
          </p>

        </div>

        <div className="skills">

          <h2>Technical Skills</h2>

          <div className="skill-list">

            {skills.map((skill) => (

              <span key={skill}>
                {skill}
              </span>

            ))}

          </div>

        </div>

      </div>

    </section>

  );

}

export default About;