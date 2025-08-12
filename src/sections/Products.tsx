import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Carousel from "../components/Carousel";

const Products = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const products = [
        { image: "/products/product01.png", title: "Glow Serum", description: "A hydrating serum that gives your skin a radiant glow." },
        { image: "/products/product02.png", title: "Night Repair Cream", description: "Revitalize your skin overnight with our nourishing formula." },
        { image: "/products/product03.png", title: "Hydration Elixir", description: "A lightweight elixir that locks in moisture and boosts elasticity." },
        { image: "/products/product04.png", title: "Vitamin C Boost", description: "Brightens and evens skin tone for a natural radiance." },
        { image: "/products/product05.png", title: "Soothing Aloe Gel", description: "Calms redness and hydrates sensitive skin." },
        { image: "/products/product06.png", title: "SPF 50+ Sunscreen", description: "Protects from harmful UV rays with a lightweight formula." },
        { image: "/products/product07.png", title: "Collagen Cream", description: "Improves firmness and reduces fine lines." },
        { image: "/products/product08.png", title: "Exfoliating Scrub", description: "Removes dead skin cells for a smoother texture." },
        { image: "/products/product09.png", title: "Overnight Mask", description: "Deeply nourishes while you sleep." },
        { image: "/products/product10.png", title: "Green Tea Mist", description: "Refreshes and hydrates throughout the day." },
        { image: "/products/product11.png", title: "Eye Revive Gel", description: "Reduces puffiness and dark circles." },
        { image: "/products/product12.png", title: "Rose Water Toner", description: "Balances skin pH and tightens pores." },
        { image: "/products/product13.png", title: "Niacinamide Serum", description: "Minimizes pores and improves skin barrier." },
        { image: "/products/product14.png", title: "Lip Hydration Balm", description: "Keeps lips soft and moisturized." },
        { image: "/products/product15.png", title: "Glow Your Skin Cream", description: "Moisturizes & replenishes with a natural glow." },
        { image: "/products/product16.png", title: "Charcoal Clay Mask", description: "Detoxifies and purifies skin." },
        { image: "/products/product17.png", title: "Peptide Complex Serum", description: "Boosts elasticity and smooths fine lines." },
        { image: "/products/product18.png", title: "Hyaluronic Acid Drops", description: "Locks in intense moisture for plump skin." },
    ];

    return (
        <section id="products" className="py-5 bg-primary" ref={ref}>
            <div className="container py-5 px-3">
                <h2 className="text-center text-espresso mb-5">Product Highlights</h2>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                    transition={{ duration: 0.6 }}
                >
                    <Carousel items={products} />
                </motion.div>
            </div>
        </section>
    );
};

export default Products;
