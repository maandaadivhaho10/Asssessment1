import fp1 from "../assets/firstImage.jpg";
import fp2 from "../assets/secodImg.jpg";
import fp3 from "../assets/thirdImg.jpg";
import "./AnotherShoes.css"; // 👈 external styling

export default function AnotherShoes() {
  return (
    <div className="image-container1">
      <img src={fp3} alt="First" className="main-image1" />

      <div className="side-images1">
        
        <img src={fp1} alt="Third" className="side-image1" />
        <img src={fp2} alt="Second" className="side-image1" />
      </div>
    </div>
  );
}
