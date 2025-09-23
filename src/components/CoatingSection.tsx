import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Sparkles, Droplets } from "lucide-react";

export const CoatingSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CARPRO Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <Card className="service-card bg-gradient-to-br from-navy to-dark-navy">
              <div className="aspect-video flex items-center justify-center">
                <div className="text-center">
                  <Shield className="w-20 h-20 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-2">CARPRO CQuartz</h3>
                  <p className="text-primary/80">Finest Reserve</p>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              CARPRO CQuartz <span className="text-primary">Finest Reserve</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Vermijl Car Detail is een gecertificeerd installateur van CARPRO C.Quartz Finest Reserve. 
              Wij hebben de exclusiviteit jouw wagen te beschermen met de beste keramische coating op de 
              huidige markt! Deze glascoating heeft een levensduur van 2 tot 3 jaar, zorgt voor een extreme 
              glans en is enorm vuil- en waterafstotend!
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <Sparkles className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium">Extreme glans</span>
              </div>
              <div className="flex items-center space-x-3">
                <Droplets className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium">Waterafstotend</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium">2-3 jaar bescherming</span>
              </div>
            </div>

            <Button className="cta-primary">
              Bekijk behandelingen
            </Button>
          </div>
        </div>

        {/* New Car Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Nieuwe auto <span className="text-primary">coaten</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Bescherm je nieuwe auto met een keramische coating en geniet van een ongekend gemak in onderhoud, 
              enorme glans en jarenlange bescherming! Met een ceramic coating behoudt je jouw auto in absolute topstaat!
            </p>
            <Button className="cta-primary">
              Bekijk behandelingen
            </Button>
          </div>

          <div className="order-1 lg:order-2 relative">
            <Card className="service-card">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🚗</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Nieuwe Auto Coating</h3>
                  <p className="text-muted-foreground">Jarenlange bescherming</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};