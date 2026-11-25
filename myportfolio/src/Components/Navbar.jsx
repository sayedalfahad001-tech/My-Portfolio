function Navbar({ activeSection }) {

    const navItems = [
        "HOME",
        "ABOUT",
        "PORTFOLIO",
        "CONTACT"
    ];

    return (
        <nav className="navbar">

            <h2 className="logo">
                SF<span>.</span>
            </h2>

            <div className="nav-links">

                {navItems.map((item) => (

                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className={
                            activeSection === item.toLowerCase()
                                ? "active"
                                : ""
                        }
                    >
                        {item}
                    </a>

                ))}

            </div>

        </nav>
    );
}

export default Navbar;