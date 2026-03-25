import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Vaishali Beauty Parlour</h3>
            <p>Your destination for beauty and elegance</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>Shop No LG-09,10, Jay Laxmi, Shree Complex, Bhestan, Surat, Gujarat 395023</p>
            <p>Phone: +91 97373 16502</p>
            <p>Email: info@Vaishalibeauty.com</p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">i</a>
              <a href="#" aria-label="Twitter">t</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Made with <Heart size={16} className="heart-icon" /> by Vaishali Beauty Parlour © 2026</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
