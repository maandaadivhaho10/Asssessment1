import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import "../App.css";
import placeholder from "../assets/imageholder.jpg";

const initialBg = "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bg, setBg] = useState(initialBg);

  useEffect(() => {
    const img = new Image();
    img.src = initialBg;
    img.onerror = () => {
      setBg(placeholder);
    };
  }, []);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div 
      className={isHome ? "container" : "nav-only-container"} 
      style={isHome ? { backgroundImage: `url(${bg})` } : { backgroundColor: '#000' }}
    >
      <header>
        <div className="top-bar">
          {/* Logo */}
          <div className="logopic">
             <Link to="/" style={{ textDecoration: 'none' }}>
                <h2 style={{color: '#fff', margin: 0, letterSpacing: '2px'}}>AURASTYLE</h2>
             </Link>
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
              <Link to="/shop" onClick={() => setIsMenuOpen(false)}>SHOP</Link>
              <a href="/#about" onClick={() => setIsMenuOpen(false)}>ABOUT</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Centered content - Only show on Home page */}
      {isHome && (
        <div className="content-at-center">
          <div className="stick white">
            <h1 className="about">elevate your <br /> everyday style</h1>
          </div>
          <div className="mybutton">
            <button onClick={() => navigate('/store')}>visit our stores</button>
          </div>
        </div>
      )}
    </div>
  );
}
