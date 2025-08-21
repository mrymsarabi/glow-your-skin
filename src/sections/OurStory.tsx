import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next"; // Import the hook

const OurStory = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const { t } = useTranslation(); // Initialize the hook

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
                            src="/src/assets/images/our-story.jpg"
                            alt={t("our_story_title")}
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
                        <h2 className="display-5 fw-bold text-dark mb-4">{t("our_story_title")}</h2>
                        <p className="lead text-dark">
                            {t("our_story_text_1")}
                        </p>
                        <p className="lead text-dark mb-0">
                            {t("our_story_text_2")}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;