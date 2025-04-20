import React from "react";

interface ProductCardProps {
    image: string;
    title: string;
    description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description }) => {
    return (
        <div className="card shadow-sm border-0" style={{ width: "18rem", backgroundColor: "#E3DEC8" }}>
            <img src={image} className="card-img-top" alt={title} style={{ objectFit: "cover", height: "250px" }} />
            <div className="card-body text-espresso">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
};

export default ProductCard;
