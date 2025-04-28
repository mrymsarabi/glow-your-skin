const Navbar = () => {
    return (
        <nav className="bg-cream text-espresso py-3 px-4 border-bottom shadow position-sticky top-0" style={{ zIndex: 1030 }}>
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                {/* Logo */}
                <h1 className="h4 m-0 fw-bold text-center text-md-start">Glow Your Skin</h1>

                {/* Navbar Links */}
                <ul className="d-flex flex-column flex-md-row list-unstyled m-0 mt-3 mt-md-0">
                    {["Home", "About", "Products", "Contact"].map((item, index) => (
                        <li key={index} className="mx-3 mb-2 mb-md-0">
                            <a href={`#${item.toLowerCase()}`} className="text-decoration-none text-espresso fw-medium">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
