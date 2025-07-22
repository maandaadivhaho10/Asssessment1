
import "./TwoImages.css"; // optional external styling
import f1 from "../assets/f1.jpg";
import f2 from "../assets/f2.jpg";


export default function TwoImages() {
  return (
    <div className="image-container">
      <img
     src={f1}
        alt="First"
        className="half-image"
      />
      <img
        src={f2}
        alt="Second"
        className="half-image"
      />
    </div>
  );
}

