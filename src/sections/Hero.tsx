import heroImage from "/src/assets/images/hero01.png";
import Image from "../components/Image";
import Button from "../components/Button";

const Hero = () => {
    return (
        <div>
            <div className={`d-flex m-5`}>
                <div className={`w-50`}>
                    <h1>Glow Your Skin</h1>
                    <p>Clean, conscious skincare for a radiant you.</p>
                    <Button buttonClassName="bg-olive border-0 px-4 py-2 rounded text-white">
                        Shop Now
                    </Button>
                </div>
                <div>
                    <Image src={heroImage} width={"300px"} />
                </div>
            </div>

            <div>
                <p>
                    At Glow Your Skin, we believe in the power of natural ingredients. Our products are carefully
                    crafted to nourish and rejuvenate your skin, using only the purest and most effective botanical extracts.
                </p>
            </div>
        </div>
    );
};

export default Hero;