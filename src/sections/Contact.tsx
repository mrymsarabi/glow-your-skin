import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="bg-cream py-5">
            <div className="container w-75 m-auto text-left">
                <motion.h2 
                    className="text-espresso mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    Get in Touch
                </motion.h2>
                <motion.p 
                    className="mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Have questions or want to know more about our products? We'd love to hear from you!
                </motion.p>
                <motion.form 
                    className="d-flex flex-column align-items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="form-control mb-3 w-100 w-md-50"
                        style={{ maxWidth: "500px" }}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="form-control mb-3 w-100 w-md-50"
                        style={{ maxWidth: "500px" }}
                        required
                    />
                    <textarea
                        placeholder="Your Message"
                        className="form-control mb-3 w-100 w-md-50"
                        rows={4}
                        style={{ maxWidth: "500px" }}
                        required
                    />
                    <button
                        type="submit"
                        className="btn bg-olive text-white px-4 py-2 w-100 w-md-auto"
                    >
                        Send Message
                    </button>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
