import { motion } from "framer-motion";
import heroImage from "/src/assets/images/hero01.png";
import Image from "../components/Image";
import Button from "../components/Button";
import GradientText from "../components/GradientText";

const Hero = () => {
    return (
        <section className="container my-5 py-5">
            <div className="row align-items-center">
                {/* Text Content */}
                <div className="col-md-6 mb-4 mb-md-0 text-center text-md-start">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <GradientText
                            colors={[
                                "#20190F", // espresso
                                "#4B3621", // dark mocha
                                "#5C4033", // chocolate brown
                                "#4B3621",
                                "#20190F"
                            ]}
                            animationSpeed={3}
                            showBorder={false}
                            className="display-5 fw-bold mb-3"
                        >
                            Glow Your Skin
                        </GradientText>
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
                        <Image src={heroImage} width="90%" alt="Glow Your Skin Product" />
                    </motion.div>
                </div>
            </div>

            <hr className="my-5" />

            {/* Description */}
            <div className="mt-5 text-center text-md-start px-md-5">
                <motion.p
                    className="text-muted fs-5 lh-base"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    At **Glow Your Skin**, we believe that **skincare is self-love**. We harness the power of **pure, natural ingredients**
                    to craft products that nourish and rejuvenate, celebrating your unique radiance and leaving your skin glowing.
                </motion.p>
            </div>
        </section>
    );
};

export default Hero;