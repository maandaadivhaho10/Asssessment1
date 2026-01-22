import "./AboutUs.css";
import ImageWithFallback from "../components/ImageWithFallback";

const fp1 = "https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=1000&auto=format&fit=crop";
const fp2 = "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop";
const fp3 = "https://images.unsplash.com/photo-1445205170230-053b830c6050?q=80&w=1000&auto=format&fit=crop";

const AboutUs = () => {
  return (
    <div className="melula-container">
      <div className="header-section">
        <h1 className="main-title">They talk about us</h1>
        
        <div className="logo-strip" style={{ display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '1.2rem', fontWeight: 'bold', color: '#555' }}>
          <span>VOGUE</span>
          <span>BAZAAR</span>
          <span>ELLE</span>
          <span>GQ</span>
        </div>
        
        <hr className="divider-line" />
      </div>

      <div className="content-wrapper">
        <div className="instagram-section">
          <p className="instagram-text">
            Follow us on Instagram{' '}
            <a 
              href="https://www.instagram.com/aurastyle" 
              className="instagram-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              @aurastyle_official
            </a>
          </p>
        </div>

        <div className="main-content">
          <div className="images-section">
            <ImageWithFallback 
              src={fp2} 
              alt="AuraStyle product showcase 1" 
              className="product-image"
            />
            <ImageWithFallback 
              src={fp3} 
              alt="AuraStyle product showcase 2" 
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

