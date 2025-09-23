import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroImage from "@/assets/hero-car-washing.jpg";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional car washing - Porsche detailing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tagline */}
        <p className="text-primary font-medium text-lg mb-6 tracking-wide">
          Professionele autoreiniging
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
          CAR CLEANING &<br />
          <span className="text-primary">DETAILING</span> LIMBURG
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button className="cta-primary text-lg px-8 py-4">
            🛒 WEBSHOP
          </Button>
          <Button variant="outline" className="cta-secondary text-lg px-8 py-4">
            ➡️ ONZE DIENSTEN
          </Button>
        </div>

        {/* Video Play Button */}
        <div className="relative inline-block">
          <button className="flex items-center justify-center w-20 h-20 bg-primary/20 backdrop-blur-sm rounded-full border-2 border-primary hover:bg-primary/30 transition-all duration-300 group">
            <Play className="h-8 w-8 text-primary ml-1 group-hover:scale-110 transition-transform" />
          </button>
          <div className="absolute inset-0 rounded-full border-2 border-primary animate-pulse opacity-50"></div>
        </div>
        <p className="text-sm text-muted-foreground mt-3">Play Video</p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};