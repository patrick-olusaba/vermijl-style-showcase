const partners = [
  { name: "CARPRO CQuartz Finest Reserve", logo: "🏆" },
  { name: "Koch Chemie", logo: "🧪" },
  { name: "P&S Detail Products", logo: "💎" },
  { name: "The Rag Company", logo: "🧽" },
  { name: "Rupes", logo: "⚡" },
  { name: "CARPRO", logo: "🛡️" }
];

export const PartnersSection = () => {
  return (
    <section className="py-16 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            De beste kwaliteit, de beste merken.
          </h3>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {partner.logo}
              </div>
              <p className="text-sm text-muted-foreground text-center font-medium">
                {partner.name}
              </p>
            </div>
          ))}
        </div>

        {/* Infinite scroll animation */}
        <div className="mt-12 overflow-hidden">
          <div className="flex animate-scroll space-x-8">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-20 bg-card border border-border rounded-lg flex items-center justify-center group hover:border-primary/50 transition-colors"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">
                  {partner.logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};