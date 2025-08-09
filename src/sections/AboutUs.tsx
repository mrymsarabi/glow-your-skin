import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutUs = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section id="about" className="container my-5 py-5" ref={ref}>
            <motion.h2
                className="text-center text-md-start text-espresso mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.8 }}
            >
                About Us
            </motion.h2>
            <motion.p
                className="text-sage fs-5 px-3 px-md-5 text-center text-md-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                At <strong>Glow Your Skin</strong>, we believe that skincare is not just a routine — it’s a ritual of self-love. 
                Our mission is to create simple, effective, and gentle skincare products that celebrate the natural beauty 
                in every skin type. With a blend of clean ingredients, soothing formulations, and elegant design, 
                we aim to bring a touch of calm and glow to your everyday skincare routine. 
                <br /><br />
                Because glowing skin is always in.
            </motion.p>
        </section>
    );
};

export default AboutUs;