import bg from "../assets/imageass1.jpg";
import headpic from "../assets/adivhaho.png";
import { FiShoppingCart } from 'react-icons/fi';
import "../App.css";
export default function Header() {
  return (
      <div className="container" style={{ backgroundImage: `url(${bg})` }}>
      {/* Logo */}
       <header> 
      <div className="top-bar">
     <div className="logopic">

    <img
      src={headpic}
      alt="Melula Logo"
      className="logo-img"
    />
  </div>
  <div className="nav" >
  <nav style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
    <a href="#shop">SHOP</a>
    <a href="#about">ABOUT</a>
    <div className="cart-container">
      <div className="cart"><FiShoppingCart size={24} color="#fff" /></div>
      <div className="cart-badge">0</div>
    </div>
  </nav>
  </div>
  
</div>

</header>


  {/* Centered Content */}
  <div className="content-at-center">
    <div className="stick white">
      <h1 className="about">for colourful <br />   steps in life</h1>
    </div>
    <div className="mybutton">
      <button>visit our stores</button>
    </div>
  </div>
</div>
 
  );
}
