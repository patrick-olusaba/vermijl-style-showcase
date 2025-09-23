import { useState } from "react";
import { ChevronDown, Menu, X, Facebook, Youtube, Instagram } from "lucide-react";
import vermijlLogo from "@/assets/vermijl-logo.png";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-inner">
          {/* Logo */}
          <div className="logo-container">
            <img src={vermijlLogo} alt="Vermijl Car Detail" className="logo-image" />
            <div className="logo-text">
              VERMIJL
              <span className="logo-subtitle">CAR DETAIL</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <a href="#home" className="nav-link">HOME</a>
            <a href="#over-ons" className="nav-link">OVER ONS</a>
            <div className="dropdown">
              <button className="dropdown-button nav-link">
                DIENSTEN <ChevronDown className="dropdown-icon" />
              </button>
              <div className="dropdown-menu">
                <div className="dropdown-content">
                  <a href="#interieur" className="dropdown-item">Interieur reiniging</a>
                  <a href="#polijsten" className="dropdown-item">Polijsten</a>
                  <a href="#coating" className="dropdown-item">Keramische coating</a>
                  <a href="#wasbeurt" className="dropdown-item">Premium wasbeurt</a>
                </div>
              </div>
            </div>
            <a href="#webshop" className="nav-link">WEBSHOP</a>
            <a href="#faq" className="nav-link">FAQ</a>
            <a href="#contact" className="nav-link">CONTACT</a>
          </nav>

          {/* Social Icons & Mobile Menu */}
          <div className="header-actions">
            {/* Social Icons - Desktop */}
            <div className="social-icons">
              <a href="https://facebook.com/vermijlcardetail" className="social-link">
                <Facebook className="social-icon" />
              </a>
              <a href="https://youtube.com/vermijlcardetail" className="social-link">
                <Youtube className="social-icon" />
              </a>
              <a href="https://instagram.com/vermijlcardetail" className="social-link">
                <Instagram className="social-icon" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-content">
              <a href="#home" className="mobile-menu-item">HOME</a>
              <a href="#over-ons" className="mobile-menu-item">OVER ONS</a>
              <a href="#diensten" className="mobile-menu-item">DIENSTEN</a>
              <a href="#webshop" className="mobile-menu-item">WEBSHOP</a>
              <a href="#faq" className="mobile-menu-item">FAQ</a>
              <a href="#contact" className="mobile-menu-item">CONTACT</a>
              
              <div className="mobile-social">
                <a href="https://facebook.com/vermijlcardetail" className="social-link">
                  <Facebook className="social-icon" />
                </a>
                <a href="https://youtube.com/vermijlcardetail" className="social-link">
                  <Youtube className="social-icon" />
                </a>
                <a href="https://instagram.com/vermijlcardetail" className="social-link">
                  <Instagram className="social-icon" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};