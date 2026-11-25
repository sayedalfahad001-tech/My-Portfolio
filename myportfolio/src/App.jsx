import { useEffect, useState } from "react";

import Navbar from "./Components/Navbar.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Contact from "./pages/Contact.jsx";

function App() {

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {

    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            setActiveSection(entry.target.id);

          }

        });

      },

      {
        threshold: 0.5
      }

    );

    sections.forEach((section) => {

      observer.observe(section);

    });

    return () => {

      observer.disconnect();

    };

  }, []);

  return (

    <>

      <Navbar activeSection={activeSection} />

      <main>

        <Home />

        <About />

        <Portfolio />

        <Contact />

      </main>

    </>

  );

}

export default App;