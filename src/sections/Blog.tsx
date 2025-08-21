import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

// Update the interface to include the optional image property
interface BlogPost {
    title: string;
    excerpt: string;
    image?: string;
}

const Blog = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const { t } = useTranslation();

    const blogPosts = t("blog_posts", { returnObjects: true }) as BlogPost[];
    const placeholderImage = "https://via.placeholder.com/400x200";

    return (
        <section id="blog" className="py-5 bg-secondary-light" ref={ref}>
            <div className="container py-5">
                <motion.h2
                    className="text-center text-dark mb-5 fw-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                    transition={{ duration: 0.8 }}
                >
                    {t("blog_title")}
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
                                    src={post.image || placeholderImage}
                                    className="card-img-top rounded-top"
                                    alt={post.title}
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold text-dark">{post.title}</h5>
                                    <p className="card-text text-muted">{post.excerpt}</p>
                                    <a href="#" className="btn btn-sm btn-primary mt-3">{t("blog_read_more")}</a>
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