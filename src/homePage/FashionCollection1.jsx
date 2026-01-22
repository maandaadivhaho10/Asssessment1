import "./FashionCollection1.css"; // 👈 external styling
import ImageWithFallback from "../components/ImageWithFallback";

const fp1 = "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop";
const fp2 = "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop";
const fp3 = "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop";

export default function FashionCollection1() {
  return (
    <div className="image-container3">
      <ImageWithFallback src={fp1} alt="Summer Collection" className="main-image3" />

      <div className="side-images3">
        <ImageWithFallback src={fp2} alt="Urban Wear" className="side-image3" />
        <ImageWithFallback src={fp3} alt="Chic Style" className="side-image3" />
      </div>
    </div>
  );
}
