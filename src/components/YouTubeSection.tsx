import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Youtube, Users, Video, Play } from "lucide-react";

export const YouTubeSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Abonneer je op ons <span className="text-primary">YouTube kanaal!</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            Abonneer je op ons YouTube kanaal en blijf up-to-date met onze laatste projecten, acties en zoveel meer! 
            Met meer dan <strong>460.000 abonnees</strong> en <strong>400+ video's</strong> zijn we één van de grootste 
            YouTube kanalen binnen de detailing wereld! We uploaden wekelijks nieuwe video's van onze auto detailing behandelingen.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Stats Cards */}
          <Card className="service-card text-center">
            <div className="p-6">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">461,125</div>
              <div className="text-muted-foreground">YouTube Subscribers</div>
            </div>
          </Card>

          <Card className="service-card text-center">
            <div className="p-6">
              <Video className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">400+</div>
              <div className="text-muted-foreground">Video's</div>
            </div>
          </Card>

          <Card className="service-card text-center">
            <div className="p-6">
              <Youtube className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">Wekelijks</div>
              <div className="text-muted-foreground">Nieuwe Content</div>
            </div>
          </Card>
        </div>

        {/* Video Preview */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Card className="service-card overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-navy to-dark-navy flex items-center justify-center relative group cursor-pointer">
                <div className="text-center">
                  <button className="flex items-center justify-center w-16 h-16 bg-primary rounded-full group-hover:scale-110 transition-transform">
                    <Play className="h-6 w-6 text-primary-foreground ml-1" />
                  </button>
                </div>
                <div className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                  LIVE
                </div>
              </div>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Tesla Model S - Keramische Coating
            </h3>
            <p className="text-muted-foreground mb-6">
              Bekijk hoe we deze prachtige Tesla Model S behandelen met onze premium keramische coating. 
              Een complete transformatie van A tot Z!
            </p>
            <Button className="cta-primary">
              <Youtube className="w-5 h-5 mr-2" />
              Abonneren
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};