import React, { useState } from "react";

interface CarouselProps {
    images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div style={{ position: "relative", width: "400px", margin: "auto" }}>
            {/* Image */}
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                transition: "0.5s ease"
                }}
            />

            {/* Prev Button */}
            <button
                onClick={prevSlide}
                style={{
                position: "absolute",
                top: "50%",
                left: "0",
                transform: "translateY(-50%)",
                background: "#0008",
                color: "white",
                border: "none",
                padding: "10px",
                cursor: "pointer"
                }}
            >
                ❮
            </button>

            {/* Next Button */}
            <button
                onClick={nextSlide}
                style={{
                position: "absolute",
                top: "50%",
                right: "0",
                transform: "translateY(-50%)",
                background: "#0008",
                color: "white",
                border: "none",
                padding: "10px",
                cursor: "pointer"
                }}
            >
                ❯
            </button>
        </div>
    );
};

export default Carousel;
