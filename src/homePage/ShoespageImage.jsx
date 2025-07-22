import fp1 from "../assets/p4frist80.jpg";
import fp2 from "../assets/p4c.gif";
import fp3 from "../assets/p4-c1.jpg";
import "./ShoesPageImages.css"; // 👈 external styling

export default function ShoespageImages() {
  return (
    <div className="image-container">
      <img src={fp1} alt="First" className="main-image" />

      <div className="side-images">
        
        <img src={fp3} alt="Third" className="side-image" />
        <img src={fp2} alt="Second" className="side-image" />
      </div>
    </div>
  );
}
