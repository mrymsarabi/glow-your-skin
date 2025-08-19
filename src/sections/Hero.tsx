import { motion } from "framer-motion";
import heroImage from "/src/assets/images/hero01.png";
import Image from "../components/Image";
import Button from "../components/Button";
import GradientText from "../components/GradientText";

const Hero = () => {
    return (
        <section className="container-fluid my-5 py-5 bg-secondary-light">
            <div className="container">
                <div className="row align-items-center">
                    {/* Text Content */}
                    <div className="col-md-6 mb-4 mb-md-0 text-center text-md-start">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <GradientText
                                colors={["#2C2C2C", "#6BA7D6", "#F4D9DF", "#6BA7D6", "#2C2C2C"]}
                                animationSpeed={3}
                                showBorder={false}
                                className="display-4 fw-bold mb-3"
                            >
                                Glow Your Skin
                            </GradientText>
                        </motion.h1>
                        <motion.p
                            className="lead text-dark mb-4"
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
                            <Button buttonClassName="btn btn-primary btn-lg rounded-pill px-5 py-3 shadow-lg">
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
                            <Image src={heroImage} width="90%" alt="Glow Your Skin Product" className="img-fluid rounded-3 shadow-lg" />
                        </motion.div>
                    </div>
                </div>
            </div>
            <hr className="my-5" />
            {/* Description */}
            <div className="container">
                <div className="text-center text-md-start px-md-5">
                    <motion.p
                        className="text-dark fs-5 lh-base"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        At <span className="fw-bold">Glow Your Skin</span>, we believe that <span className="fw-bold">skincare is self-love</span>. We harness the power of <span className="fw-bold">pure, natural ingredients</span>
                        to craft products that nourish and rejuvenate, celebrating your unique radiance and leaving your skin glowing.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default Hero;