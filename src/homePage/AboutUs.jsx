import fp1 from "../assets/imae5frist.png";
import fp2 from "../assets/latF.jpeg";
import fp3 from "../assets/lastS.jpeg";
import "./AboutUs.css";

const AboutUs = () => {


  return (
    <div className="melula-container">
      <div className="header-section">
        <h1 className="main-title">They talk about us</h1>
        
        <div className="logo-strip">
          <img 
            src={fp1}
            alt="VOGUE MilK KiDS Enfants Terribles Childhood Business BAZAAR" 
            className="logo-strip-image"
          />
        </div>
        
        <hr className="divider-line" />
      </div>

      <div className="content-wrapper">
        <div className="instagram-section">
          <p className="instagram-text">
            Follow us on Instagram{' '}
            <a 
              href="https://www.instagram.com/melula_copenhagen" 
              className="instagram-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              @melula_copenhagen
            </a>
          </p>
        </div>

        <div className="main-content">
          <div className="images-section">
            <img 
              src={fp2} 
              alt="Melula product showcase 1" 
              className="product-image"
            />
            <img 
              src={fp3} 
              alt="Melula product showcase 2" 
              className="product-image"
            />
          </div>

          <div className="subscribe-section">
            <h3 className="subscribe-title">Subscribe</h3>
            <p className="subscribe-description">
              Sign up with your email address to receive news and updates.
            </p>
            
            <div className="email-form">
              <input
                type="email"
      
                placeholder="Email Address"
                className="email-input"
              />
              <button 
                className="signup-button"
              >
                SIGN UP
              </button>
            </div>
            
            <p className="privacy-text">We respect your privacy.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

