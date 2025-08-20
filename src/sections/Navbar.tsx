import { useState } from "react";
import { motion } from "framer-motion";
import ThemeSwitcher from "../components/ThemeSwitcher"; 

const Navbar = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(prev => !prev);

    const mobileMenuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    };

    return (
        <nav className="bg-light text-dark py-3 px-4 border-bottom shadow position-sticky top-0" style={{ zIndex: 1030 }}>
            {/* Top Navbar Row */}
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="h4 m-0 fw-bold">Glow Your Skin</h1>

                {/* Desktop Nav */}
                <ul className="d-none d-md-flex list-unstyled m-0 align-items-center">
                    {["Home", "Products", "Testimonials", "Our Story", "About Us", "Blog", "Contact"].map((item, index) => (
                        <li key={index} className="mx-3">
                            <a 
                                href={`#${item.toLowerCase().replace(/\s/g, '')}`} 
                                className="text-decoration-none text-dark fw-medium"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                    <li className="ms-3">
                        <ThemeSwitcher />
                    </li>
                </ul>

                {/* Hamburger */}
                <div className="d-md-none d-flex align-items-center">
                    <ThemeSwitcher />
                    <button
                        className="border-0 bg-transparent fs-3 text-dark ms-2"
                        onClick={handleShow}
                        aria-label="Toggle menu"
                    >
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {show && (
                <motion.div
                    className="d-md-none w-100 bg-secondary pt-3 pb-4 position-absolute w-100 shadow"
                    style={{top: "73px", left: "0"}}
                    variants={mobileMenuVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <ul className="list-unstyled text-center m-0">
                        {["Home", "Products", "Testimonials", "Our Story", "About Us", "Blog", "Contact"].map((item, index) => (
                            <li key={index} className="my-2">
                                <a
                                    href={`#${item.toLowerCase().replace(/\s/g, '')}`}
                                    className="text-decoration-none text-dark fw-bold fs-5"
                                    onClick={handleShow}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;