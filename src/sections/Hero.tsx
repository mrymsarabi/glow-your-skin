import heroImage from "/src/assets/images/hero01.png";
import Image from "../components/Image";
import Button from "../components/Button";

const Hero = () => {
    return (
        <section className="container my-5 py-5">
            <div className="row align-items-center">
                {/* Text Content */}
                <div className="col-md-6 mb-4 mb-md-0">
                    <h1 className="display-5 fw-bold text-espresso mb-3">Glow Your Skin</h1>
                    <p className="lead text-forest mb-4">
                        Clean, conscious skincare for a radiant you.
                    </p>
                    <Button buttonClassName="bg-olive border-0 px-4 py-2 rounded text-white">
                        Shop Now
                    </Button>
                </div>

                {/* Image */}
                <div className="col-md-6 text-center">
                    <Image src={heroImage} width="100%" alt="Glow Your Skin Product" />
                </div>
            </div>

            {/* Description */}
            <div className="mt-5 text-left px-md-5">
                <p className="text-sage fs-5">
                    At <strong>Glow Your Skin</strong>, we believe in the power of natural ingredients.
                    Our products are carefully crafted to nourish and rejuvenate your skin,
                    using only the purest and most effective botanical extracts.
                </p>
            </div>
        </section>
    );
};

export default Hero;