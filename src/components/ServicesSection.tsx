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
    <section id="diensten" className="section services-section">
      <div className="section-container">
        {/* Header */}
        <div className="services-header">
          <h2 className="section-title">
            Cardetailingdiensten
          </h2>
          <p className="services-description">
            Door gebruik te maken van de beste materialen, producten en technieken kunnen wij het allerbeste 
            resultaat behalen. Of je nu kiest voor een auto coating, polijstbehandeling, interieurreiniging 
            of een andere detailing service, bij Vermijl Car Detail wordt jouw auto met de grootste zorg behandeld.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-header">
                <div className="service-icon-container">
                  <span className="service-icon">{service.icon}</span>
                </div>
                <h3 className="service-title">{service.title}</h3>
              </div>
              <div className="service-content">
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="services-cta">
          <a href="#diensten" className="cta-primary">
            Bekijk alle diensten
          </a>
        </div>
      </div>
    </section>
  );
};