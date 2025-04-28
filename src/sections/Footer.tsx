const Footer = () => {
    return (
        <footer className="bg-espresso text-cream text-center py-3 mt-5">
            <p className="m-0" style={{ fontSize: "14px", padding: "0 15px" }}>
                &copy; {new Date().getFullYear()} Glow Your Skin. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
