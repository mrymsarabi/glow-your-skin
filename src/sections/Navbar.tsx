import { useState } from "react";

const Navbar = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(prev => !prev);

    return (
        <nav className="bg-light text-espresso py-3 px-4 border-bottom shadow position-sticky top-0" style={{ zIndex: 1030 }}>
            {/* Top Navbar Row */}
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="h4 m-0 fw-bold">Glow Your Skin</h1>

                {/* Desktop Nav */}
                <ul className="d-none d-md-flex list-unstyled m-0">
                    {["Home", "About", "Products", "Contact"].map((item, index) => (
                        <li key={index} className="mx-3">
                            <a href={`#${item.toLowerCase()}`} className="text-decoration-none text-espresso fw-medium">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Hamburger */}
                <button
                    className="d-md-none border-0 bg-transparent fs-3"
                    onClick={handleShow}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>
            </div>

            {/* Mobile Dropdown Menu (only visible when show is true) */}
            {show && (
                <div className="d-md-none w-100 bg-cream pt-3 pb-4 position-absolute w-100 shadow" style={{top: "73px", left: "0"}}>
                    <ul className="list-unstyled text-center m-0">
                        {["Home", "About", "Products", "Contact"].map((item, index) => (
                            <li key={index} className="my-2">
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="text-decoration-none text-espresso fw-bold fs-5"
                                    onClick={handleShow}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
