import { motion } from "framer-motion";
import heroImage from "/src/assets/images/hero01.png";
import Image from "../components/Image";
import Button from "../components/Button";

const Hero = () => {
    return (
        <section className="container my-5 py-5">
            <div className="row align-items-center">
                {/* Text Content */}
                <div className="col-md-6 mb-4 mb-md-0 text-center text-md-start">
                    <motion.h1
                        className="display-5 fw-bold text-espresso mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Glow Your Skin
                    </motion.h1>
                    <motion.p
                        className="lead text-forest mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Clean, conscious skincare for a radiant you.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Button buttonClassName="bg-olive border-0 px-4 py-2 rounded text-white">
                            Shop Now
                        </Button>
                    </motion.div>
                </div>
                {/* Image */}
                <div className="col-md-6 text-center mt-4 mt-md-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Image src={heroImage} width="100%" alt="Glow Your Skin Product" />
                    </motion.div>
                </div>
            </div>
            {/* Description */}
            <div className="mt-5 text-center text-md-start px-md-5">
                <motion.p
                    className="text-sage fs-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    At <strong>Glow Your Skin</strong>, we believe in the power of natural ingredients.
                    Our products are carefully crafted to nourish and rejuvenate your skin,
                    using only the purest and most effective botanical extracts.
                </motion.p>
            </div>
        </section>
    );
};

export default Hero;