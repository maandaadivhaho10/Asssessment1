import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";
import './Footer.css'
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <p className="footer-brand">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span className="brand-name">AuraStyle</span>
          </Link>
          &nbsp;11 Fashion Street, Copenhagen, 1763, Denmark &nbsp;
         <a href="mailto:hello@aurastyle.com" className="email-link">hello@aurastyle.com</a>

        </p>

        <div className="footer-socials">
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Pinterest"><FaPinterestP /></a>
        </div>

        <div className="footer-links">
          <Link to="/shop">SHOP ALL</Link>
          <a href="#">SHIPPING & RETURNS</a>
        </div>
      </div>
    </div>
  );
}
