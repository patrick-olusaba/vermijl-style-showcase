import { Play } from "lucide-react";
import heroImage from "@/assets/hero-car-washing.jpg";

export const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      {/* Background Image */}
      <div className="hero-background">
        <img
          src={heroImage}
          alt="Professional car washing - Porsche detailing"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-content">
        {/* Tagline */}
        <p className="hero-tagline">
          Professionele autoreiniging
        </p>

        {/* Main Heading */}
        <h1 className="hero-title">
          CAR CLEANING &<br />
          <span className="hero-title-accent">DETAILING</span> LIMBURG
        </h1>

        {/* CTA Buttons */}
        <div className="hero-buttons">
          <a href="#webshop" className="cta-primary hero-button">
            🛒 WEBSHOP
          </a>
          <a href="#diensten" className="cta-secondary hero-button">
            ➡️ ONZE DIENSTEN
          </a>
        </div>

        {/* Video Play Button */}
        <div className="hero-video">
          <button className="play-button">
            <Play className="play-icon" />
          </button>
          <div className="play-pulse"></div>
          <p className="play-text">Play Video</p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </section>
  );
};