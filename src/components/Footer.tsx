import { Facebook, Youtube, Instagram, ArrowUp } from "lucide-react";
import vermijlLogo from "@/assets/vermijl-logo.png";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Logo & Description */}
          <div className="footer-main">
            <div className="footer-logo">
              <img src={vermijlLogo} alt="Vermijl Car Detail" className="footer-logo-image" />
              <div className="footer-logo-text">
                VERMIJL
                <span className="footer-logo-subtitle">CAR DETAIL</span>
              </div>
            </div>
            <p className="footer-description">
              Professionele auto detailing diensten in Limburg. Van interieur reiniging tot keramische coatings - 
              wij brengen jouw auto terug in showroomstaat.
            </p>
            <div className="footer-social">
              <a 
                href="https://facebook.com/vermijlcardetail" 
                className="social-link"
                aria-label="Facebook"
              >
                <Facebook className="social-icon-large" />
              </a>
              <a 
                href="https://youtube.com/vermijlcardetail" 
                className="social-link"
                aria-label="YouTube"
              >
                <Youtube className="social-icon-large" />
              </a>
              <a 
                href="https://instagram.com/vermijlcardetail" 
                className="social-link"
                aria-label="Instagram"
              >
                <Instagram className="social-icon-large" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h4 className="footer-title">Diensten</h4>
            <ul className="footer-links">
              <li><a href="#interieur" className="footer-link">Interieur reiniging</a></li>
              <li><a href="#polijsten" className="footer-link">Polijsten</a></li>
              <li><a href="#coating" className="footer-link">Keramische coating</a></li>
              <li><a href="#wasbeurt" className="footer-link">Premium wasbeurt</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h4 className="footer-title">Contact</h4>
            <div className="footer-contact">
              <p>Toekomststraat 6E</p>
              <p>3960 Bree, België</p>
              <p className="footer-contact-link">
                <a href="#contact" className="footer-primary-link">
                  Contact opnemen
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 Vermijl Car Detail. Alle rechten voorbehouden.
          </p>
          
          <button
            onClick={scrollToTop}
            className="footer-back-to-top"
          >
            <ArrowUp className="back-to-top-icon" />
            Terug naar boven
          </button>
        </div>
      </div>
    </footer>
  );
};