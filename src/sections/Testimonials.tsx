import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
    {
        name: "Jane Doe",
        review: "This serum has completely transformed my skin. It feels so hydrated and looks radiant! A must-have in my routine.",
        image: "",
    },
    {
        name: "Samantha Lee",
        review: "The Night Repair Cream is a game-changer. I wake up with my skin feeling soft, nourished, and plump. Absolutely love it!",
        image: "",
    },
    {
        name: "Alex Rodriguez",
        review: "I have sensitive skin and the Soothing Aloe Gel is a lifesaver. It calms my redness instantly and feels incredibly refreshing.",
        image: "",
    },
];

const Testimonials = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section id="testimonials" className="bg-light py-5" ref={ref}>
            <div className="container py-5">
                <motion.h2
                    className="text-center text-dark mb-5 fw-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                    transition={{ duration: 0.8 }}
                >
                    What Our Clients Say
                </motion.h2>
                <div className="row justify-content-center g-4">
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
                                        src={testimonial.image}
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