import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Wrench, CheckCircle, ArrowRight } from "lucide-react";

const RoofingTypesGuide = () => {
  const materials = [
    {
      name: "Colorbond Metal",
      lifespan: "50+ years",
      cost: "Moderate",
      maintenance: "Very Low",
      bestFor: "Modern homes, coastal areas",
      features: ["Weather-resistant finish", "Energy efficient", "Lightweight and durable"],
      image: "/images/complete-roof-replacement-after.jpg",
      alt: "Colorbond metal roof installation on modern home in Newcastle",
      costLevel: "moderate"
    },
    {
      name: "Concrete Tile",
      lifespan: "40+ years",
      cost: "Budget-friendly",
      maintenance: "Low",
      bestFor: "Traditional homes, all climates",
      features: ["Classic appearance", "Fire resistant", "Most economical option"],
      image: "/images/roof-restoration-project-after.jpg",
      alt: "Concrete tile roof on traditional home in Newcastle",
      costLevel: "budget"
    },
    {
      name: "Terracotta Tile",
      lifespan: "60+ years",
      cost: "Premium",
      maintenance: "Low",
      bestFor: "Heritage homes, Mediterranean style",
      features: ["Timeless elegance", "Excellent insulation", "Premium aesthetics"],
      image: "/images/roof painting transformation after.jpg",
      alt: "Terracotta tile roof on heritage home in Newcastle",
      costLevel: "premium"
    },
    {
      name: "Standing Seam Metal",
      lifespan: "50+ years",
      cost: "Premium",
      maintenance: "Very Low",
      bestFor: "Contemporary designs, commercial buildings",
      features: ["Sleek modern look", "Maximum water shedding", "Architectural statement"],
      image: "/images/re-roof-gutter-replacing-wall-cladding-1.jpg",
      alt: "Standing seam metal roof on contemporary building in Newcastle",
      costLevel: "premium"
    }
  ];

  const getCostBadgeVariant = (costLevel: string) => {
    switch (costLevel) {
      case "budget": return "secondary";
      case "moderate": return "outline";
      case "premium": return "default";
      default: return "outline";
    }
  };

  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="absolute inset-0 architectural-grid opacity-5"></div>
      
      <div className="container mx-auto px-7 lg:px-14 xl:px-20 relative">
        <div className="text-center mb-12">
          {/* Línea amarilla igual que en Services */}
          <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold architectural-heading mb-4">
            Choose the Right Roofing Solution
          </h2>
          {/* Fuente y estilo iguales al de Services */}
                          <p className="text-base max-w-2xl mx-auto" style={{ color: '#666666' }}>
            Each roofing type offers unique benefits for different climates and budgets. Our licensed roofers help you select 
            the perfect solution for your Newcastle home or business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {materials.map((material, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group hover:shadow-xl transition-all duration-300 blueprint-hover bg-gray-50 border border-gray-200 hover:bg-white hover:border-primary/30"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={material.image} 
                  alt={material.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <Badge variant={getCostBadgeVariant(material.costLevel)} className="backdrop-blur-sm">
                    {material.cost}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {material.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-[#666666]" />
                <span className="text-[#666666]">{material.lifespan}</span>
                  </div>
                  <div className="flex items-center gap-2">
                                    <Wrench className="h-4 w-4 text-[#666666]" />
                <span className="text-[#666666]">{material.maintenance}</span>
                  </div>
                </div>
                
                <div>
                                  <p className="text-sm font-medium text-[#666666] mb-2">Best for:</p>
                <p className="text-sm text-[#666666]">{material.bestFor}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-[#666666] mb-2">Key Features:</p>
                  <ul className="space-y-1 mb-4">
                    {material.features.map((feature, idx) => (
                                      <li key={idx} className="flex items-start gap-2 text-sm text-[#666666]">
                  <CheckCircle className="h-3 w-3 text-[#666666] mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  variant="attention" 
                  size="sm" 
                  className="w-full"
                  asChild
                >
                  <a href={
                    material.name === "Colorbond Metal" ? "/roof-replacement/" :
                    material.name === "Concrete Tile" ? "/new-roof-installation/" :
                    material.name === "Terracotta Tile" ? "/roof-restoration/" :
                    material.name === "Standing Seam Metal" ? "/roof-replacement/" : "#"
                  }>
                    Find Out More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gray-50 border border-gray-200 hover:bg-white hover:border-primary/30 rounded-lg p-8 max-w-2xl mx-auto transition-all duration-300">
            <h3 className="text-xl font-semibold text-primary mb-3">
              Need Help Choosing the Right Roofing Type?
            </h3>
            <p className="mb-6 text-[#666666]">
              Our roofing experts will inspect your roof and recommend the perfect roofing 
              solution based on your home style, budget, and Newcastle's coastal climate.
            </p>
            <Button variant="professional" size="lg" asChild>
              <a href="#contact-form">
                Get Expert Consultation
                <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoofingTypesGuide;

