import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import product01 from "/src/assets/products/product01.png";
import product02 from "/src/assets/products/product02.png";
import product03 from "/src/assets/products/product15.png";
import ProductCard from "../components/ProductCard";
import Carousel from "../components/Carousel";

const Products = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }); // 'once: true' ensures the animation runs only once

    const images = Array.from({ length: 12 }, (_, i) => {
        const index = i + 1;
        return `/products/product${index.toString().padStart(2, "0")}.png`;
    });

    return (
        <section id="products" className="py-5 bg-primary" ref={ref}>
            <div className="container py-5 px-3">
                <h2 className="text-center text-espresso mb-5">Product Highlights</h2>
                <div className="row justify-content-center g-4">
                    {/* Product 1 */}
                    <motion.div
                        className="col-12 col-md-4 d-flex justify-content-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <ProductCard
                            image={product03}
                            title="Glow Serum"
                            description="A hydrating serum that gives your skin a radiant glow."
                        />
                    </motion.div>
                    {/* Product 2 */}
                    <motion.div
                        className="col-12 col-md-4 d-flex justify-content-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <ProductCard
                            image={product02}
                            title="Night Repair Cream"
                            description="Revitalize your skin overnight with our nourishing formula."
                        />
                    </motion.div>
                    {/* Product 3 */}
                    <motion.div
                        className="col-12 col-md-4 d-flex justify-content-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <ProductCard
                            image={product01}
                            title="Hydration Elixir"
                            description="A lightweight elixir that locks in moisture and boosts elasticity."
                        />
                    </motion.div>
                </div>
            </div>
                <Carousel images={images} visibleCount={3} />
        </section>
    );
};

export default Products;