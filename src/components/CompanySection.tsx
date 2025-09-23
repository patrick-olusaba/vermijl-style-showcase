export const CompanySection = () => {
  return (
    <section id="over-ons" className="section">
      <div className="section-container">
        <div className="company-grid">
          {/* Content */}
          <div>
            <h2 className="section-title">
              Vermijl Car Detail
            </h2>
            <p className="company-description">
              Bij Vermijl Car Detail bieden we een totaalpakket aan professionele auto detailing diensten. 
              Deze diensten omvatten het grondig reinigen, polieren en beschermen (auto coating) van auto's. 
              Steeds met het doel om jouw wagen terug in absolute showroomstaat te brengen!
            </p>
            <p className="company-description">
              Benieuwd wat ons team voor jouw wagen kan betekenen? Bezoek onze winkel en detail studio in de 
              Toekomststraat 6E te Bree (Limburg, België). Je kan hier terecht voor vrijblijvend advies en 
              de aankoop van car detailing producten.
            </p>
          </div>

          {/* Image/Card */}
          <div className="company-card-container">
            <div className="company-card">
              <div className="company-image">
                <div className="company-icon">
                  <span className="company-emoji">🏢</span>
                </div>
                <h3 className="company-card-title">Detail Studio</h3>
                <p className="company-card-subtitle">Toekomststraat 6E, Bree</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};