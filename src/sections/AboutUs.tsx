import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation, Trans } from "react-i18next"; // Import Trans

const AboutUs = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const { t } = useTranslation();

    return (
        <section id="about" className="container my-5 py-5" ref={ref}>
            <motion.h2
                className="text-center text-md-start text-dark mb-4 fw-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.8 }}
            >
                {t("about_title")}
            </motion.h2>
            <motion.p
                className="text-dark fs-5 px-3 px-md-5 text-center text-md-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <Trans i18nKey="about_text_1">
                    At <strong className="text-secondary">Glow Your Skin</strong>, we believe that skincare is not just a routine—it's a ritual of self-love.
                    Our mission is to create simple, effective, and gentle skincare products that celebrate the natural beauty
                    in every skin type. With a blend of clean ingredients, soothing formulations, and elegant design,
                    we aim to bring a touch of calm and glow to your everyday skincare routine.
                </Trans>
                <br /><br />
                {t("about_text_2")}
            </motion.p>
        </section>
    );
};

export default AboutUs;