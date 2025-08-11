import React, { useState, useEffect } from "react";

interface CarouselProps {
    images: string[];
    defaultVisibleCount?: number;
}

const Carousel: React.FC<CarouselProps> = ({ images, defaultVisibleCount = 3 }) => {
    const [visibleCount, setVisibleCount] = useState(defaultVisibleCount);
    const [currentIndex, setCurrentIndex] = useState(0);

    const length = images.length;

    // Function to determine visibleCount based on screen size
    const updateVisibleCount = () => {
        const width = window.innerWidth;
        if (width < 576) {
        setVisibleCount(1); // phones
        } else if (width < 992) {
        setVisibleCount(2); // tablets
        } else {
        setVisibleCount(3); // desktops
        }
    };

    useEffect(() => {
        updateVisibleCount(); // run once on mount
        window.addEventListener("resize", updateVisibleCount);
        return () => window.removeEventListener("resize", updateVisibleCount);
    }, []);

    // Prev / Next
    const prevSlide = () => {
        setCurrentIndex((prev) =>
        prev === 0 ? length - visibleCount : Math.max(prev - 1, 0)
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prev) =>
        prev >= length - visibleCount ? 0 : prev + 1
        );
    };

    // Slice images to show
    const visibleImages = images.slice(currentIndex, currentIndex + visibleCount);
    if (visibleImages.length < visibleCount) {
        visibleImages.push(...images.slice(0, visibleCount - visibleImages.length));
    }

    return (
        <div
            style={{
                position: "relative",
                gap: "10px",
            }}
            className="position-relative d-flex justify-content-center align-items-center"
        >
            {/* Prev Button */}
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

            {/* Images */}
            {visibleImages.map((img, idx) => (
                <img
                    key={idx}
                    src={img}
                    alt={`Slide ${currentIndex + idx}`}
                    style={{
                        width: "200px", // fixed width
                        height: "auto",
                        borderRadius: "8px",
                        transition: "0.5s ease",
                    }}
                />
            ))}

            {/* Next Button */}
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
