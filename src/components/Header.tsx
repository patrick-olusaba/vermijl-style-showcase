import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, Facebook, Youtube, Instagram } from "lucide-react";
import vermijlLogo from "@/assets/vermijl-logo.png";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={vermijlLogo} alt="Vermijl Car Detail" className="h-12 w-auto" />
            <div className="text-xl font-bold text-primary">
              VERMIJL
              <span className="text-sm block text-muted-foreground tracking-wide">CAR DETAIL</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link">HOME</a>
            <a href="#over-ons" className="nav-link">OVER ONS</a>
            <div className="relative group">
              <button className="nav-link flex items-center">
                DIENSTEN <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-4 space-y-2">
                  <a href="#interieur" className="block py-2 px-3 hover:bg-secondary rounded-md transition-colors">Interieur reiniging</a>
                  <a href="#polijsten" className="block py-2 px-3 hover:bg-secondary rounded-md transition-colors">Polijsten</a>
                  <a href="#coating" className="block py-2 px-3 hover:bg-secondary rounded-md transition-colors">Keramische coating</a>
                  <a href="#wasbeurt" className="block py-2 px-3 hover:bg-secondary rounded-md transition-colors">Premium wasbeurt</a>
                </div>
              </div>
            </div>
            <a href="#webshop" className="nav-link">WEBSHOP</a>
            <a href="#faq" className="nav-link">FAQ</a>
            <a href="#contact" className="nav-link">CONTACT</a>
          </nav>

          {/* Social Icons & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Social Icons - Desktop */}
            <div className="hidden md:flex items-center space-x-3">
              <a href="https://facebook.com/vermijlcardetail" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/vermijlcardetail" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/vermijlcardetail" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 hover:bg-secondary rounded-md">HOME</a>
              <a href="#over-ons" className="block px-3 py-2 hover:bg-secondary rounded-md">OVER ONS</a>
              <a href="#diensten" className="block px-3 py-2 hover:bg-secondary rounded-md">DIENSTEN</a>
              <a href="#webshop" className="block px-3 py-2 hover:bg-secondary rounded-md">WEBSHOP</a>
              <a href="#faq" className="block px-3 py-2 hover:bg-secondary rounded-md">FAQ</a>
              <a href="#contact" className="block px-3 py-2 hover:bg-secondary rounded-md">CONTACT</a>
              
              <div className="flex items-center justify-center space-x-6 pt-4 border-t border-border mt-4">
                <a href="https://facebook.com/vermijlcardetail" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://youtube.com/vermijlcardetail" className="text-muted-foreground hover:text-primary transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="https://instagram.com/vermijlcardetail" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};