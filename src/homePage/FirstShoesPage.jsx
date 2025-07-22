import fp1 from "../assets/s1.jpg";
import fp2 from "../assets/s2.jpg";
import fp3 from "../assets/s3.jpg";
import "./FirstShoes.css"; // 👈 external styling

export default function FirstShoesPage() {
  return (
    <div className="image-container3">
      <img src={fp1} alt="First" className="main-image3" />

      <div className="side-images3">
        
        <img src={fp2} alt="Third" className="side-image3" />
        <img src={fp3} alt="Second" className="side-image3" />
      </div>
    </div>
  );
}
