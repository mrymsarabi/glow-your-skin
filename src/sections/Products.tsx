import product01 from "/src/assets/products/product01.png";
import product02 from "/src/assets/products/product02.png";
import ProductCard from "../components/ProductCard";

const Products = () => {
    return (
        <section id="products" className="py-5 bg-primary">
            <div className="container">
                <h2 className="text-center text-espresso mb-5">Product Highlights</h2>
                <div className="row justify-content-center g-4">
                    <div className="col-md-4 d-flex justify-content-center">
                        <ProductCard
                        image={product01}
                        title="Glow Serum"
                        description="A hydrating serum that gives your skin a radiant glow."
                        />
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <ProductCard
                        image={product02}
                        title="Night Repair Cream"
                        description="Revitalize your skin overnight with our nourishing formula."
                        />
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <ProductCard
                        image={product01}
                        title="Hydration Elixir"
                        description="A lightweight elixir that locks in moisture and boosts elasticity."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
