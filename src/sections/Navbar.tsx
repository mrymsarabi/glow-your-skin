import { useState } from "react";

const Navbar = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(prev => !prev);
    };

    return (
        <nav className="bg-cream text-espresso py-3 px-4 border-bottom shadow position-sticky top-0" style={{ zIndex: 1030 }}>
            <div className="d-flex justify-content-between align-items-center">
                {/* Logo */}
                <h1 className="h4 m-0 fw-bold">Glow Your Skin</h1>

                {/* Hamburger (only shows on mobile) */}
                <button
                    className="d-md-none border-0 bg-transparent fs-3"
                    onClick={handleShow}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>
            </div>

            {/* Nav Links - collapsible on mobile */}
            <ul className={`list-unstyled d-md-flex flex-md-row mt-3 mt-md-0 ${show ? 'd-block' : 'd-none'} d-md-block`}>
                {["Home", "About", "Products", "Contact"].map((item, index) => (
                    <li key={index} className="mx-md-3 mb-2 mb-md-0">
                        <a href={`#${item.toLowerCase()}`} className="text-decoration-none text-espresso fw-medium">
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
