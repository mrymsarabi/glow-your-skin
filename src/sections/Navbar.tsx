import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ThemeSwitcher from "../components/ThemeSwitcher";

const Navbar = () => {
    const [show, setShow] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const { t, i18n } = useTranslation();

    const handleShow = () => setShow(prev => !prev);

    const handleLanguageChange = (lng: string) => {
        i18n.changeLanguage(lng);
        setShowDropdown(false);
    };

    const toggleDropdown = () => setShowDropdown(prev => !prev);

    const mobileMenuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    };

    const navLinks = [
        { key: "nav_home", href: "#home" },
        { key: "nav_products", href: "#products" },
        { key: "nav_testimonials", href: "#testimonials" },
        { key: "nav_our_story", href: "#ourstory" },
        { key: "nav_about_us", href: "#aboutus" },
        { key: "nav_blog", href: "#blog" },
        { key: "nav_contact", href: "#contact" },
    ];

    return (
        <nav className="bg-light text-dark py-3 px-4 border-bottom shadow position-sticky top-0" style={{ zIndex: 1030 }}>
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="h4 m-0 fw-bold">Glow Your Skin</h1>

                {/* Desktop Nav */}
                <ul className="d-none d-md-flex list-unstyled m-0 align-items-center">
                    {navLinks.map((link, index) => (
                        <li key={index} className="mx-3">
                            <a 
                                href={link.href} 
                                className="text-decoration-none text-dark fw-medium"
                            >
                                {t(link.key)}
                            </a>
                        </li>
                    ))}
                    <li className="ms-3 d-flex align-items-center">
                        <ThemeSwitcher />
                        <span className="vr mx-2"></span>

                        {/* Language Dropdown for Desktop */}
                        <div className="dropdown position-relative"> {/* Change 1: Add position-relative */}
                            <button 
                                className="btn btn-sm dropdown-toggle" 
                                type="button" 
                                onClick={toggleDropdown}
                                aria-expanded={showDropdown}
                            >
                                {i18n.language.toUpperCase()}
                            </button>
                            <ul className={`dropdown-menu dropdown-menu-end mt-2 ${showDropdown ? 'show' : ''}`} style={{ left: 'auto', right: 0 }}> {/* Change 2: Add inline style for right alignment */}
                                <li><button className="dropdown-item" onClick={() => handleLanguageChange('en')}>English</button></li>
                                <li><button className="dropdown-item" onClick={() => handleLanguageChange('fr')}>Français</button></li>
                                <li><button className="dropdown-item" onClick={() => handleLanguageChange('es')}>Español</button></li>
                                <li><button className="dropdown-item" onClick={() => handleLanguageChange('it')}>Italiano</button></li>
                            </ul>
                        </div>
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
                        {navLinks.map((link, index) => (
                            <li key={index} className="my-2">
                                <a
                                    href={link.href}
                                    className="text-decoration-none text-dark fw-bold fs-5"
                                    onClick={handleShow}
                                >
                                    {t(link.key)}
                                </a>
                            </li>
                        ))}
                        <li className="my-2 d-flex justify-content-center">
                            {/* Simple language buttons for mobile */}
                            <button className="btn btn-sm" onClick={() => { handleLanguageChange('en'); handleShow(); }}>EN</button>
                            <span className="vr mx-2"></span>
                            <button className="btn btn-sm" onClick={() => { handleLanguageChange('es'); handleShow(); }}>ES</button>
                            <span className="vr mx-2"></span>
                            <button className="btn btn-sm" onClick={() => { handleLanguageChange('fr'); handleShow(); }}>FR</button>
                            <span className="vr mx-2"></span>
                            <button className="btn btn-sm" onClick={() => { handleLanguageChange('it'); handleShow(); }}>IT</button>
                        </li>
                    </ul>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;