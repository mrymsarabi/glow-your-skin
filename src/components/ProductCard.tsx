import React from "react";

interface ProductCardProps {
    image: string;
    title: string;
    description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description }) => {
    return (
        <div className="card h-100 shadow rounded-3 border-0 bg-light text-dark">
            <img
                src={image}
                className="card-img-top rounded-2"
                alt={title || "Product Image"}
                style={{ objectFit: "cover", height: "400px" }}
            />
            <div className="card-body">
                <h5 className="card-title fw-bold">{title}</h5>
                <p className="card-text text-muted">{description}</p>
            </div>
        </div>
    );
};

export default ProductCard;