import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";

const Contact = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="py-5 bg-light">
            <div className="container px-4 px-md-0">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 text-center">
                        <motion.h2
                            className="text-dark mb-4 fw-bold"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.8 }}
                        >
                            {t("contact_title")}
                        </motion.h2>
                        <motion.p
                            className="lead text-dark mb-5"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {t("contact_slogan")}
                        </motion.p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <motion.form
                        className="col-12 col-md-6 d-flex flex-column align-items-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <input
                            type="text"
                            placeholder={t("contact_name_placeholder")}
                            className="form-control form-control-lg mb-3"
                            required
                        />
                        <input
                            type="email"
                            placeholder={t("contact_email_placeholder")}
                            className="form-control form-control-lg mb-3"
                            required
                        />
                        <textarea
                            placeholder={t("contact_message_placeholder")}
                            className="form-control form-control-lg mb-4"
                            rows={4}
                            required
                        />
                        <button
                            type="submit"
                            className="btn btn-primary btn-lg rounded-pill px-5 py-3 shadow-lg w-100"
                        >
                            {t("contact_cta")}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;