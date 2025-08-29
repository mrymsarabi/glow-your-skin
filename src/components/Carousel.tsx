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
        <div className="position-relative d-flex justify-content-center align-items-center gap-3">
            {/* Prev Button */}
            <button
                onClick={prevSlide}
                className="btn btn-outline-secondary rounded-circle shadow-sm opacity-75"
                style={{
                    width: "40px",
                    height: "40px",
                    zIndex: 1
                }}
            >
                ❮
            </button>

            {/* Product Cards Container */}
            <div className="row flex-nowrap g-3 justify-content-center w-100">
                {visibleItems.map((product, idx) => (
                    <div key={idx} className="col-12 col-sm-6 col-lg-4">
                        <ProductCard
                            image={product.image}
                            title={product.title}
                            description={product.description}
                        />
                    </div>
                ))}
            </div>

            {/* Next Button */}
            <button
                onClick={nextSlide}
                className="btn btn-outline-secondary rounded-circle shadow-sm opacity-75"
                style={{
                    width: "40px",
                    height: "40px",
                    zIndex: 1
                }}
            >
                ❯
            </button>
        </div>
    );
};

export default Carousel;