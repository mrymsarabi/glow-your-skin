import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import Carousel from "../components/Carousel";

interface Product {
    title: string;
    description: string;
}

const Products = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const { t } = useTranslation();

    // Explicitly cast the return value to an array of Products
    const products = t("products", { returnObjects: true }) as Product[];

    // Add image paths back to the objects, and explicitly type the 'product' parameter
    const productsWithImages = products.map((product, index) => ({
        ...product,
        image: `/products/product${String(index + 1).padStart(2, "0")}.png`
    }));

    return (
        <section id="products" className="py-5 bg-light" ref={ref}>
            <div className="container py-5 px-3">
                <motion.h2
                    className="text-center text-dark mb-5 fw-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                    transition={{ duration: 0.8 }}
                >
                    {t("products_title")}
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Carousel items={productsWithImages} />
                </motion.div>
            </div>
        </section>
    );
};

export default Products;