import { Facebook, Youtube, Instagram, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import vermijlLogo from "@/assets/vermijl-logo.png";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-navy border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={vermijlLogo} alt="Vermijl Car Detail" className="h-10 w-auto" />
              <div className="text-lg font-bold text-primary">
                VERMIJL
                <span className="text-sm block text-muted-foreground tracking-wide">CAR DETAIL</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Professionele auto detailing diensten in Limburg. Van interieur reiniging tot keramische coatings - 
              wij brengen jouw auto terug in showroomstaat.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/vermijlcardetail" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://youtube.com/vermijlcardetail" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a 
                href="https://instagram.com/vermijlcardetail" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Diensten</h4>
            <ul className="space-y-2">
              <li><a href="#interieur" className="text-muted-foreground hover:text-primary transition-colors">Interieur reiniging</a></li>
              <li><a href="#polijsten" className="text-muted-foreground hover:text-primary transition-colors">Polijsten</a></li>
              <li><a href="#coating" className="text-muted-foreground hover:text-primary transition-colors">Keramische coating</a></li>
              <li><a href="#wasbeurt" className="text-muted-foreground hover:text-primary transition-colors">Premium wasbeurt</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Toekomststraat 6E</p>
              <p>3960 Bree, België</p>
              <p className="mt-4">
                <a href="#contact" className="text-primary hover:text-primary/80 transition-colors">
                  Contact opnemen
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2025 Vermijl Car Detail. Alle rechten voorbehouden.
          </p>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="text-muted-foreground hover:text-primary"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Terug naar boven
          </Button>
        </div>
      </div>
    </footer>
  );
};