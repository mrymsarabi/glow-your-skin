import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

interface Product {
    image: string;
    title: string;
    description: string;
}

interface CarouselProps {
    items: Product[];
    defaultVisibleCount?: number;
}

const Carousel: React.FC<CarouselProps> = ({ items, defaultVisibleCount = 3 }) => {
    const [visibleCount, setVisibleCount] = useState(defaultVisibleCount);
    const [currentIndex, setCurrentIndex] = useState(0);

    const length = items.length;

    const updateVisibleCount = () => {
        const width = window.innerWidth;
        if (width < 576) setVisibleCount(1);
        else if (width < 992) setVisibleCount(2);
        else setVisibleCount(3);
    };

    useEffect(() => {
        updateVisibleCount();
        window.addEventListener("resize", updateVisibleCount);
        return () => window.removeEventListener("resize", updateVisibleCount);
    }, []);

    const prevSlide = () => {
        setCurrentIndex(prev =>
            prev === 0 ? length - visibleCount : Math.max(prev - 1, 0)
        );
    };

    const nextSlide = () => {
        setCurrentIndex(prev =>
            prev >= length - visibleCount ? 0 : prev + 1
        );
    };

    const visibleItems = items.slice(currentIndex, currentIndex + visibleCount);
    if (visibleItems.length < visibleCount) {
        visibleItems.push(...items.slice(0, visibleCount - visibleItems.length));
    }

    return (
        <div
            style={{ gap: "10px" }}
            className="position-relative d-flex justify-content-center align-items-center"
        >
            {/* Prev */}
            <button
                onClick={prevSlide}
                style={{
                    background: "#0008",
                    color: "white",
                    border: "none",
                    padding: "10px",
                    cursor: "pointer",
                    zIndex: 1,
                }}
            >
                ❮
            </button>

            {/* Product Cards */}
            {visibleItems.map((product, idx) => (
                <div key={idx} style={{ flex: "0 0 auto" }}>
                    <ProductCard
                        image={product.image}
                        title={product.title}
                        description={product.description}
                    />
                </div>
            ))}

            {/* Next */}
            <button
                onClick={nextSlide}
                style={{
                background: "#0008",
                color: "white",
                border: "none",
                padding: "10px",
                cursor: "pointer",
                zIndex: 1,
                }}
            >
                ❯
            </button>
        </div>
    );
};

export default Carousel;
