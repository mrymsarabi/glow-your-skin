import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const blogPosts = [
    {
        title: "5 Tips for a Glowing Summer Skin",
        image: "",
        excerpt: "Learn how to keep your skin hydrated and protected during the summer months with these simple tips.",
    },
    {
        title: "The Power of Vitamin C Serum",
        image: "",
        excerpt: "Discover the amazing benefits of Vitamin C and why it should be a staple in your skincare routine.",
    },
    {
        title: "Understanding Your Skin Type",
        image: "",
        excerpt: "A guide to identifying your skin type and choosing the right products for a healthier complexion.",
    },
];

const Blog = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section id="blog" className="py-5 bg-secondary-light" ref={ref}>
            <div className="container py-5">
                <motion.h2
                    className="text-center text-dark mb-5 fw-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                    transition={{ duration: 0.8 }}
                >
                    Skincare Guides
                </motion.h2>
                <div className="row justify-content-center g-4">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={index}
                            className="col-12 col-md-6 col-lg-4"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <div className="card h-100 shadow-sm rounded-3 border-0">
                                <img
                                    src={post.image}
                                    className="card-img-top rounded-top"
                                    alt={post.title}
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold text-dark">{post.title}</h5>
                                    <p className="card-text text-muted">{post.excerpt}</p>
                                    <a href="#" className="btn btn-sm btn-primary mt-3">Read More</a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;