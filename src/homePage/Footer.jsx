import React from "react";
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";
import './Footer.css'
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <p className="footer-brand">
          <span className="brand-name">Melula</span>
          &nbsp;11 Dannevirkegade, København, 1763, Denmark &nbsp;
         <a href="mailto:hello@melula.com" className="email-link">hello@melula.com</a>

        </p>

        <div className="footer-socials">
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Pinterest"><FaPinterestP /></a>
        </div>

        <div className="footer-links">
          <a href="#">CONTACT & WHOLESALE</a>
          <a href="#">TERMS AND CONDITIONS</a>
          <a href="#">SHIPPING & RETURNS</a>
        </div>
      </div>
    </div>
  );
}
