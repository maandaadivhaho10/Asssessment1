import { useState } from "react";
import bg from "../assets/imageass1.jpg";
import headpic from "../assets/adivhaho.png";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import "../App.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="container" style={{ backgroundImage: `url(${bg})` }}>
      <header>
        <div className="top-bar">
          {/* Logo */}
          <div className="logopic">
            <img src={headpic} alt="Melula Logo" className="logo-img" />
          </div>

          {/* Cart (always visible, just position changes on small screens) */}
          <div className="cart-container">
            <FiShoppingCart size={24} color="#fff" />
            <div className="cart-badge">0</div>
          </div>

          {/* Hamburger (visible on mobile only) */}
          <div className="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? <FiX size={28} color="#fff" /> : <FiMenu size={28} color="#fff" />}
          </div>

          {/* Navigation links */}
          <div className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            <nav>
              <a href="#shop" onClick={() => setIsMenuOpen(false)}>SHOP</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>ABOUT</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Centered content */}
      <div className="content-at-center">
        <div className="stick white">
          <h1 className="about">for colourful <br /> steps in life</h1>
        </div>
        <div className="mybutton">
          <button>visit our stores</button>
        </div>
      </div>
    </div>
  );
}
