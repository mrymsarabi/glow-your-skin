import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const OurStory = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section id="our-story" className="py-5 bg-white" ref={ref}>
            <div className="container py-5">
                <div className="row align-items-center">
                    {/* Image Column */}
                    <motion.div
                        className="col-lg-6 mb-4 mb-lg-0 order-lg-2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src=""
                            alt="Brand Founder"
                            className="img-fluid rounded-3 shadow-lg"
                        />
                    </motion.div>

                    {/* Text Column */}
                    <motion.div
                        className="col-lg-6 order-lg-1 text-center text-lg-start"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="display-5 fw-bold text-dark mb-4">Our Journey to Glow</h2>
                        <p className="lead text-dark">
                            It all began with a simple idea: skincare should be pure, effective, and a joy to use. Frustrated with products full of harsh chemicals, our founder, a passionate esthetician, set out to create a line that celebrates the power of natural ingredients.
                        </p>
                        <p className="lead text-dark mb-0">
                            Every product is a testament to our commitment to clean beauty and sustainable practices. We believe in creating skincare that not only makes you look good but also makes you feel good about what you're putting on your skin.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;