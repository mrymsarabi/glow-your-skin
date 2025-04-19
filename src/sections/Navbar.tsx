const Navbar = () => {
    return (
        <nav className="bg-cream text-espresso py-4 px-5 d-flex justify-content-between ">
            {/* <h1>Glow Your Skin</h1> */}
            <ul className="d-flex list-unstyled justify-content-between">
                <li><a href="#home" className="text-decoration-none mx-2">Home</a></li>
                <li><a href="#about" className="text-decoration-none mx-2">About</a></li>
                <li><a href="#products" className="text-decoration-none mx-2">Products</a></li>
                <li><a href="#contact" className="text-decoration-none mx-2">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;