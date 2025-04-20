import product01 from "/src/assets/products/product01.png";
import product02 from "/src/assets/products/product02.png";
import ProductCard from "../components/ProductCard";

const Products = () => {
    return (
        <div className={`p-5 bg-primary`}>
            <h2 className={`text-center m-5 mt-0`}>Product Hightlights</h2>
            <div className={`d-flex justify-content-between`}>
                <ProductCard
                    image={product01}
                    title="Glow Serum"
                    description="A hydrating serum that gives your skin a radiant glow."
                />
                <ProductCard
                    image={product02}
                    title="Night Repair Cream"
                    description="Revitalize your skin overnight with our nourishing formula."
                />
                <ProductCard
                    image={product02}
                    title="Night Repair Cream"
                    description="Revitalize your skin overnight with our nourishing formula."
                />
            </div>
        </div>
    );
};

export default Products;