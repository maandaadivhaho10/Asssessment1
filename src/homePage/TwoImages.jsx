import "./TwoImages.css"; // optional external styling
import ImageWithFallback from "../components/ImageWithFallback";

const f1 = "https://images.unsplash.com/photo-1523381235208-2592230f9119?q=80&w=1000&auto=format&fit=crop";
const f2 = "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1000&auto=format&fit=crop";

export default function TwoImages() {
  return (
    <div className="image-container">
      <ImageWithFallback
        src={f1}
        alt="Premium Clothing"
        className="half-image"
      />
      <ImageWithFallback
        src={f2}
        alt="Modern Fashion"
        className="half-image"
      />
    </div>
  );
}

