import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Interieur reiniging",
    description: "Dieptereiniging en bescherming van het volledige interieur",
    icon: "🧽"
  },
  {
    title: "Polijsten",
    description: "Verwijderen van krassen en optimaliseren van glans",
    icon: "✨"
  },
  {
    title: "Keramische coating",
    description: "Optimale bescherming met zelfreinigende eigenschappen",
    icon: "🛡️"
  },
  {
    title: "Premium wasbeurt",
    description: "Professionele wasbeurt van je wagen",
    icon: "🚿"
  }
];

export const ServicesSection = () => {
  return (
    <section id="diensten" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Cardetailingdiensten
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Door gebruik te maken van de beste materialen, producten en technieken kunnen wij het allerbeste 
            resultaat behalen. Of je nu kiest voor een auto coating, polijstbehandeling, interieurreiniging 
            of een andere detailing service, bij Vermijl Car Detail wordt jouw auto met de grootste zorg behandeld.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="service-card group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button className="cta-primary text-lg">
            Bekijk alle diensten
          </Button>
        </div>
      </div>
    </section>
  );
};