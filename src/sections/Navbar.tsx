const Navbar = () => {
    return (
        <nav className="bg-cream text-espresso py-3 px-4 border-bottom shadow position-sticky top-0" style={{ zIndex: 1030 }}>
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="h4 m-0 fw-bold">Glow Your Skin</h1>
                <ul className="d-flex list-unstyled m-0">
                    {["Home", "About", "Products", "Contact"].map((item, index) => (
                        <li key={index} className="mx-3">
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
