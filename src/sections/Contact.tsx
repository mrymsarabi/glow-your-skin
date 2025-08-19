import { motion } from 'framer-motion';

const Contact = () => {
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
                            Get in Touch
                        </motion.h2>
                        <motion.p
                            className="lead text-dark mb-5"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Have questions or want to know more about our products? We'd love to hear from you!
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
                            placeholder="Your Name"
                            className="form-control form-control-lg mb-3"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="form-control form-control-lg mb-3"
                            required
                        />
                        <textarea
                            placeholder="Your Message"
                            className="form-control form-control-lg mb-4"
                            rows={4}
                            required
                        />
                        <button
                            type="submit"
                            className="btn btn-primary btn-lg rounded-pill px-5 py-3 shadow-lg w-100"
                        >
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;