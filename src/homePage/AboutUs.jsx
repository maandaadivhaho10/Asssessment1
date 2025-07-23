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
      <div className="horizontal-line"></div>
      <div className="box2">
       <h1 className="about">Follow us on Instagram <a href="https://www.instagram.com/melula_copenhagen" target="_blank" rel="noopener noreferrer" className="medullalink">@melula_copenhagen</a></h1>
 </div>
 <div className="outer-Container">
<div className="box-image">
  <img src={fp2} alt="second" className="small-image" />
  <img src={fp3} alt="second" className="small-image" />
</div>
<div className="forminput">
  <h1>Subscribe</h1>
  <p className="myp">Sign up with your email address to receive news and updates.</p>
  <div className="input-group">
    <input type="text" placeholder="Email Address" />
    <button>SIGN UP</button>
  </div>
  <p className="privacy-note">We respect your privacy.</p>
</div>
</div>
          
    </div>
  );
}
