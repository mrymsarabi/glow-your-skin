import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import heroImage from "/src/assets/images/hero12.png";
import heroImage2 from "/src/assets/images/hero08.png";
import heroImage3 from "/src/assets/images/hero06.png";
import Image from "../components/Image";
import Button from "../components/Button";
import GradientText from "../components/GradientText";

const Hero = () => {
    const { t } = useTranslation();

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
                                {t("hero_slogan_title")} {/* Using the translation key */}
                            </GradientText>
                        </motion.h1>
                        <motion.p
                            className="lead text-dark mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {t("hero_slogan")} {/* Using the translation key */}
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <Button buttonClassName="btn btn-primary btn-lg rounded-pill px-5 py-3 shadow-lg">
                                {t("hero_cta")} {/* Using the translation key */}
                            </Button>
                        </motion.div>
                    </div>
                    {/* Image */}
                    <div className="col-md-6 text-center mt-4 mt-md-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="d-flex"
                        >
                            <div className="me-3">
                                <Image src={heroImage2} width="100%" alt={t("hero_slogan_title")} className="img-fluid rounded-3 shadow-lg mb-3" />
                                <Image src={heroImage} width="100%" alt={t("hero_slogan_title")} className="img-fluid rounded-3 shadow-lg mt-3" />
                            </div>
                            <Image src={heroImage3} width="65%" alt={t("hero_slogan_title")} className="img-fluid rounded-3 shadow-lg" />
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
                        {/* This text has multiple bolded words, which makes a single key difficult. 
                          It's best to split it or use interpolation. A simple solution is to split it. 
                        */}
                        {t("hero_text_part1")} <span className="fw-bold">{t("hero_text_part2")}</span>
                        {t("hero_text_part3")} <span className="fw-bold">{t("hero_text_part4")}</span>
                        {t("hero_text_part5")}
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default Hero;