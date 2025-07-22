import fp1 from "../assets/imae5frist.png";
import fp2 from "../assets/latF.jpeg";
import fp3 from "../assets/lastS.jpeg";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="">
      <div className="box1">
        <h1 className="about">They talk about us</h1>
        <img src={fp1} alt="First"/>
      </div>  
      <div className="box2">
       <h1 className="about">Follow us on Instagram</h1>
<a href="https://www.instagram.com/melula_copenhagen" target="_blank" rel="noopener noreferrer" className="medullalink">@melula_copenhagen</a>

        <img src={fp2} alt="second"/>
         <img src={fp3} alt="second"/>
        
      </div>      
    </div>
  );
}
