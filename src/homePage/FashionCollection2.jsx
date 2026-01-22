import "./FashionCollection2.css"; // 👈 external styling
import ImageWithFallback from "../components/ImageWithFallback";

const fp1 = "https://images.unsplash.com/photo-1554412930-c74161d7fae8?q=80&w=1000&auto=format&fit=crop";
const fp2 = "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop";
const fp3 = "https://images.unsplash.com/photo-1467043237213-65f2da53396f?q=80&w=1000&auto=format&fit=crop";

export default function FashionCollection2() {
  return (
    <div className="image-container1">
      <ImageWithFallback src={fp3} alt="Classic Fit" className="main-image1" />

      <div className="side-images1">
        <ImageWithFallback src={fp1} alt="Accessories" className="side-image1" />
        <ImageWithFallback src={fp2} alt="Evening Wear" className="side-image1" />
      </div>
    </div>
  );
}
