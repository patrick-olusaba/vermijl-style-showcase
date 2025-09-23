import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingBag, Wrench, Sparkles } from "lucide-react";

export const WebshopSection = () => {
  return (
    <section id="webshop" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Card className="service-card">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-navy/20 rounded-lg flex items-center justify-center">
                <div className="grid grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-xs text-muted-foreground">Producten</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Wrench className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-xs text-muted-foreground">Machines</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <ShoppingBag className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-xs text-muted-foreground">Accessoires</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Auto detailing winkel & <span className="text-primary">webshop</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Ontdek ons uitgebreid assortiment aan auto poetsproducten van bekende topmerken! 
              In onze fysieke winkel en online kan je terecht voor de aankoop van de beste car 
              detailing producten, accessoires en machines zoals hogedrukreinigers en polijstmachines.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Bekende topmerken</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Fysieke winkel & online webshop</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Machines & accessoires</span>
              </div>
            </div>

            <Button className="cta-primary">
              Bezoek onze webshop
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};