import { Card } from "@/components/ui/card";

export const CompanySection = () => {
  return (
    <section id="over-ons" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Vermijl Car Detail
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Bij Vermijl Car Detail bieden we een totaalpakket aan professionele auto detailing diensten. 
              Deze diensten omvatten het grondig reinigen, polieren en beschermen (auto coating) van auto's. 
              Steeds met het doel om jouw wagen terug in absolute showroomstaat te brengen!
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Benieuwd wat ons team voor jouw wagen kan betekenen? Bezoek onze winkel en detail studio in de 
              Toekomststraat 6E te Bree (Limburg, België). Je kan hier terecht voor vrijblijvend advies en 
              de aankoop van car detailing producten.
            </p>
          </div>

          {/* Image/Card */}
          <div className="relative">
            <Card className="service-card">
              <div className="aspect-video bg-gradient-to-br from-navy to-dark-navy rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Detail Studio</h3>
                  <p className="text-muted-foreground">Toekomststraat 6E, Bree</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};