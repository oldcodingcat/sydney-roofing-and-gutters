import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, ArrowRight, Phone } from "lucide-react";

const ServiceAreas = () => {
  const serviceAreas = [
    {
      area: "Newcastle City & Beaches",
      suburbs: ["Newcastle CBD", "Merewether", "Bar Beach"],
      link: "/roof-repairs",
      description: "Coastal roofing solutions and emergency repairs"
    },
    {
      area: "Lake Macquarie",
      suburbs: ["Charlestown", "Belmont", "Warners Bay"],
      link: "/roof-replacement",
      description: "Complete roof replacements and restorations"
    },
    {
      area: "Western Newcastle",
      suburbs: ["Adamstown", "New Lambton", "Kotara"],
      link: "/roof-restoration",
      description: "Heritage and modern roof restoration services"
    },
    {
      area: "Hunter Valley",
      suburbs: ["Maitland", "Cessnock", "Kurri Kurri"],
      link: "/new-roof-installation",
      description: "New roof installations for homes and businesses"
    },
    {
      area: "Port Stephens",
      suburbs: ["Raymond Terrace", "Medowie", "Nelson Bay"],
      link: "/emergency-roof-repairs",
      description: "24/7 emergency roofing and storm damage repair"
    },
    {
      area: "Lower Hunter",
      suburbs: ["Singleton", "Muswellbrook", "Dungog"],
      link: "/roof-inspections",
      description: "Comprehensive roof inspections and assessments"
    },
    {
      area: "Newcastle Suburbs",
      suburbs: ["Wallsend", "Jesmond", "Hamilton"],
      link: "/gutter-repairs",
      description: "Gutter repairs, replacement and maintenance"
    },
    {
      area: "Commercial District",
      suburbs: ["Mayfield", "Wickham", "Carrington"],
      link: "/leak-detection",
      description: "Commercial and industrial roofing services"
    }
  ];

  return (
    <section className="py-16 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 architectural-grid opacity-10"></div>
      
      <div className="container mx-auto px-7 lg:px-14 xl:px-20 relative">
        <div className="text-center mb-12">
          {/* Línea amarilla */}
          <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold architectural-heading mb-4">
            Service Areas Across Newcastle & Hunter Region
          </h2>
          {/* Subtítulo con estilo consistente */}
          <p className="text-base max-w-2xl mx-auto" style={{ color: "#666666" }}>
            Professional roofing services throughout Newcastle and the Hunter Region. From emergency repairs 
            to complete roof replacements, we serve all local suburbs with 24/7 availability.
          </p>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {serviceAreas.map((area, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group hover:shadow-xl transition-all duration-300 blueprint-hover bg-card border-border"
            >
              <div className="relative p-6 pb-4">
                <div className="flex items-center gap-2 mb-2" style={{ color: "#666666" }}>
                  <MapPin className="h-3 w-3" />
                  <span className="text-xs font-medium">Hunter Region</span>
                </div>
              </div>
              
              <CardHeader className="pt-0 pb-3">
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {area.area}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4 pt-0">
                <div>
                  <p className="text-sm mb-3 leading-relaxed" style={{ color: "#666666" }}>
                    {area.description}
                  </p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-primary mb-2">Key Suburbs:</p>
                  <p className="text-sm" style={{ color: "#666666" }}>
                    {area.suburbs.join(", ")}
                  </p>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:border-primary group-hover:bg-primary/5" 
                  asChild
                >
                  <a href={area.link}>
                    View Services
                    <ArrowRight className="h-3 w-3 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA inferior */}
        <div className="text-center">
          <div className="bg-gray-50 border border-gray-200 hover:bg-white hover:border-primary/30 rounded-lg p-8 max-w-3xl mx-auto transition-all duration-300">
            <h3 className="text-xl font-semibold text-primary mb-3">
              Get a Free Roof Inspection in Your Area
            </h3>
            <p className="mb-6" style={{ color: "#666666" }}>
              No matter where you are in Newcastle or the Hunter Region, our licensed roofers are ready to help. 
              Contact us today for a free roof inspection and quote - available 24/7 for emergencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="important" size="lg" asChild>
                <a href="#contact-form">
                  <Phone className="h-4 w-4 mr-2" />
                  Get Free Inspection
                </a>
              </Button>
              <Button variant="professional" size="lg" asChild>
                <a href="/locations">
                  View All Locations
                  <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;