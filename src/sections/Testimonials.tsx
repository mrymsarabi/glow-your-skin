import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

// Update the interface to include the optional image property
interface Testimonial {
    name: string;
    review: string;
    image?: string;
}

const Testimonials = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const { t } = useTranslation();

    const testimonials = t("testimonials", { returnObjects: true }) as Testimonial[];

    // This is a placeholder for a real image, assuming you'll have profile pictures later
    const placeholderImage = "https://via.placeholder.com/80";

    return (
        <section id="testimonials" className="bg-light py-5" ref={ref}>
            <div className="container py-5">
                <motion.h2
                    className="text-center text-dark mb-5 fw-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                    transition={{ duration: 0.8 }}
                >
                    {t("testimonials_title")}
                </motion.h2>
                <div className="row justify-content-center g-4 shadow p-4 pt-0">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="col-12 col-md-6 col-lg-4"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <div className="card h-100 shadow rounded-3 border-0 p-4">
                                <div className="card-body d-flex flex-column align-items-center text-center">
                                    <img
                                        src={testimonial.image || placeholderImage}
                                        alt={testimonial.name}
                                        className="rounded-circle mb-3"
                                        style={{ width: "80px", height: "80px", objectFit: "cover" }}
                                    />
                                    <p className="card-text text-muted fst-italic">
                                        "{testimonial.review}"
                                    </p>
                                    <h5 className="card-title mt-auto fw-bold text-dark">{testimonial.name}</h5>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;