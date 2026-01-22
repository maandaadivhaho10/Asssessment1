import "./FashionCollection3.css"; // 👈 external styling
import ImageWithFallback from "../components/ImageWithFallback";

const fp1 = "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop";
const fp2 = "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1000&auto=format&fit=crop";
const fp3 = "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=1000&auto=format&fit=crop";

export default function FashionCollection3() {
  return (
    <div className="image-container">
      <ImageWithFallback src={fp1} alt="Elegant Wear" className="main-image" />

      <div className="side-images">
        <ImageWithFallback src={fp3} alt="Street Style" className="side-image" />
        <ImageWithFallback src={fp2} alt="Boutique" className="side-image" />
      </div>
    </div>
  );
}
