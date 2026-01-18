import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Layers, Home, Palette, Gem, Trees, Mountain } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Roof Repairs",
      description: "Fast and reliable roof repairs for leaks, broken tiles, and storm damage across Newcastle.",
      icon: Layers,
      image: "/images/roof-repair-and-restoration-1.jpg",
      alt: "Professional roof repair work on residential home in Newcastle",
      features: ["Leak repairs", "Tile replacement", "Flashing repairs", "Storm damage"],
    },
    {
      title: "Roof Replacement",
      description: "Complete roof replacement services with premium materials and expert installation.",
      icon: Home,
      image: "/images/complete-roof-replacement-after.jpg",
      alt: "Complete roof replacement on home in Newcastle",
      features: ["Full tear-off", "New installation", "Material upgrades", "Warranty included"],
    },
    {
      title: "Roof Restoration",
      description: "Restore your roof's appearance and extend its life with professional cleaning and resealing.",
      icon: Palette,
      image: "/images/roof-restoration-project-after.jpg",
      alt: "Roof restoration and resealing work in Newcastle",
      features: ["Pressure cleaning", "Tile resealing", "Paint coating", "Life extension"],
    },
    {
      title: "New Roof Installation",
      description: "Expert installation of new roofs for home extensions, renovations, and new builds.",
      icon: Gem,
      image: "/images/complete-roof-replacement-after.jpg",
      alt: "New roof installation on residential property in Newcastle",
      features: ["Metal roofing", "Tile roofing", "Colorbond", "Custom designs"],
    },
    {
      title: "Emergency Roof Repairs",
      description: "24/7 emergency response for urgent roof repairs and storm damage throughout Newcastle.",
      icon: Trees,
      image: "/images/emergency-roof-repairs-1.jpg",
      alt: "Emergency roof repair service available 24/7 in Newcastle",
      features: ["24/7 availability", "Rapid response", "Temporary repairs", "Insurance claims"],
    },
    {
      title: "Roof Inspections",
      description: "Comprehensive roof inspections and condition reports for buyers, sellers, and homeowners.",
      icon: Mountain,
      image: "/images/roof-repair-and-restoration-1.jpg",
      alt: "Thorough roof inspection service in Newcastle",
      features: ["Pre-purchase", "Condition reports", "Maintenance checks", "Photo documentation"],
    },
    {
      title: "Gutter Repairs & Replacement",
      description: "Professional gutter installation, repairs, and maintenance to protect your home's foundation.",
      icon: Layers,
      image: "/images/re-roof-gutter-replacing-wall-cladding-1.jpg",
      alt: "Gutter repair and replacement services in Newcastle",
      features: ["Gutter cleaning", "Leak repairs", "New installation", "Downpipe work"],
    },
    {
      title: "Leak Detection & Repairs",
      description: "Advanced leak detection technology and expert repairs to solve persistent roof leaks.",
      icon: Home,
      image: "/images/emergency-roof-repairs-before.jpg",
      alt: "Professional leak detection and repair in Newcastle",
      features: ["Thermal imaging", "Water testing", "Source location", "Permanent fixes"],
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-7 lg:px-14 xl:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-4">
            Our Roofing Services
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>
            Professional roofing solutions for Newcastle homes and businesses. From emergency repairs to complete installations, we deliver quality workmanship with comprehensive warranties.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="blueprint-hover group overflow-hidden bg-card border-border/40">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3 architectural-heading">
                    {service.title}
                  </h3>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: '#666666' }}>
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm"
                        style={{ color: '#666666' }}
                      >
                        <div className="w-1 h-1 bg-accent rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button variant="outline" className="w-full group" asChild>
                    <a
                      href={
                        service.title === "Roof Repairs" ? "/roof-repairs" :
                        service.title === "Roof Replacement" ? "/roof-replacement" :
                        service.title === "Roof Restoration" ? "/roof-restoration" :
                        service.title === "New Roof Installation" ? "/new-roof-installation" :
                        service.title === "Emergency Roof Repairs" ? "/emergency-roof-repairs" :
                        service.title === "Roof Inspections" ? "/roof-inspections" :
                        service.title === "Gutter Repairs & Replacement" ? "/gutter-repairs" :
                        service.title === "Leak Detection & Repairs" ? "/leak-detection" : "#"
                      }
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-muted/50 p-8 rounded-lg geometric-frame max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Not Sure Which Roofing Service You Need?
            </h3>
            <p className="text-sm mb-6" style={{ color: '#666666' }}>
              Our licensed roofers will inspect your roof and recommend the best solution for your needs. Free inspections and quotes available throughout Newcastle and the Hunter Region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="important" size="lg" asChild>
                <a href="#contact-form">
                  Get Free Roof Inspection
                </a>
              </Button>
              <Button variant="professional" size="lg" asChild>
                <a href="/gallery">
                  View Our Gallery
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;