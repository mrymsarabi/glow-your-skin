import { useState} from "react";
const Carousel = () => {
    const images = [];
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
        <div>

        </div>
    );
};

export default Carousel;