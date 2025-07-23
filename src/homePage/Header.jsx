
import bg from "../assets/imageass1.jpg";
import headpic from "../assets/adivhaho.png";
import { FiShoppingCart } from 'react-icons/fi';
import "../App.css";
export default function Header() {
  return (
     <div className="container" style={{ backgroundImage: `url(${bg})` }}>
      {/* Logo */}
      
      <div className="top-bar">
     <div className="logopic">

    <img
      src={headpic}
      alt="Melula Logo"
      className="logo-img"
    />
  </div>
  <div className="nav" >
  <nav >
    <a href="#shop">SHOP</a>
    <a href="#about">ABOUT</a>
  </nav>
  </div>

  <div className="cart-container">
      <FiShoppingCart size={24} color="#fff" />
      <div className="cart-badge">0</div>
    </div>
  
</div>



  {/* Centered Content */}
  <div className="content-at-center">
    <div className="stick white">
      <h1 className="about">for colourful steps in life</h1>
    </div>
    <div className="mybutton">
      <button>visit our stores</button>
    </div>
  </div>
</div>
  );
}