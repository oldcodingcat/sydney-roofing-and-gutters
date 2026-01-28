import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBanner from "@/components/FloatingBanner";
import FeaturedProjects from "@/components/FeaturedProjects";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// removed form-related imports
import {
  MapPin,
  
  CheckCircle,
  Star,
  Award,
  Users,
  Hammer,
  Truck,
  Shield,
  Building
} from "lucide-react";

const RoofersMerewetherHeights = () => {
  // Services Array (roofing)
  const services = [
    {
      icon: <Hammer className="h-8 w-8" />,
      title: "Roof Repairs",
      description: "Wind damage repairs for elevated Merewether Heights homes",
      link: "/roof-repairs"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Roof Replacement",
      description: "High-wind rated installations for hilltop properties",
      link: "/roof-replacement"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Roof Restoration",
      description: "Protective treatments for altitude-exposed roofs",
      link: "/roof-restoration"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Emergency Repairs",
      description: "Priority response for storm-damaged elevated properties",
      link: "/emergency-roof-repairs"
    }
  ];

  // Why Choose Us (reasons)
  const whyChooseReasons = [
    {
      title: "Elevation Specialists",
      description: "Expertise in high-wind rated systems for elevated coastal properties"
    },
    {
      title: "Engineered Solutions",
      description: "Cyclone-rated installations designed for extreme wind conditions"
    },
    {
      title: "Altitude Experience",
      description: "Understanding of enhanced salt exposure and wind forces at height"
    },
    {
      title: "Premium Installation",
      description: "Reinforced batten spacing and marine-grade fixings for hilltop homes"
    }
  ];

  // Suburbs list
  const suburbs = [
    "Merewether", "Bar Beach", "Adamstown Heights", "Adamstown",
    "Hamilton South", "The Junction", "Garden Suburb", "Kotara",
    "New Lambton", "Charlestown", "Glendale", "Highfields"
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Patricia Anderson",
      location: "Merewether Heights",
      rating: 5,
      text: "The wind exposure up here is intense. They installed high-wind rated tiles and reinforced fixings. No problems through multiple storms since."
    },
    {
      name: "Mark Stevens",
      location: "Merewether Heights",
      rating: 5,
      text: "Our elevated property needed specialized attention. The team understood the unique challenges and delivered a robust roofing system."
    },
    {
      name: "Emily Zhang",
      location: "Merewether Heights",
      rating: 5,
      text: "Exceptional roof restoration with altitude-appropriate materials. The views are worth it, but you need the right roofing experts."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Roofers in Merewether Heights | Elevated Coastal Experts | Newcastle"
        description="Specialist roofing for Merewether Heights' elevated properties. Wind-rated systems and altitude-resistant materials. Call (02) 4089 4613."
        keywords="roofers merewether heights, elevated property roofing, wind resistant roofing, merewether heights roofers, coastal heights roofing"
        ogTitle="Roofers in Merewether Heights | Elevated Coastal Experts"
        ogDescription="Specialist roofing for Merewether Heights' elevated properties. Wind-rated systems and altitude-resistant materials."
        ogImage="https://newcastlelocalroofers.com.au/images/roof-repairs-newcastle.jpg"
        schemaType="RoofingContractor"
        location="newcastle"
        customName="Roofers in Merewether Heights"
        customDescription="Specialist roofing services for Merewether Heights, Newcastle NSW"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden bg-gradient-to-br from-primary to-[rgba(70,159,202,1)]">
        <div className="absolute inset-0 architectural-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
              Merewether Heights Elevation Specialists
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Expert Roofers in Merewether Heights
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Wind-resistant roofing solutions for elevated coastal properties
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Serving Merewether Heights</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>1000+ Roofs Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>24/7 Emergency Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Roofing in Merewether Heights */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Specialist Roofing Services in Merewether Heights
              </h2>
              
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Sydney Roofing & Gutters has been providing specialized roofing solutions to Merewether Heights' elevated properties for over 15 years. Our team understands the unique challenges of hillside coastal properties and delivers engineered solutions designed for extreme conditions.
              </p>

              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Elevated coastal properties face intensified roofing challenges. Merewether Heights homes experience stronger winds and greater salt exposure than sea-level properties. Our installations use enhanced wind ratings and altitude-appropriate fixings to withstand these extreme conditions.
              </p>

              <div className="bg-muted/30 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Why Merewether Heights Residents Choose Us
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span style={{color: '#666666'}}>
                      <strong>Elevation Expertise:</strong> Specialized knowledge in high-wind rated roofing systems designed specifically for elevated coastal properties.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span style={{color: '#666666'}}>
                      <strong>Engineered Solutions:</strong> Cyclone-rated installations with reinforced batten spacing and enhanced structural support for hilltop conditions.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span style={{color: '#666666'}}>
                      <strong>Altitude Understanding:</strong> Recognition of how elevation amplifies salt exposure and wind forces, requiring specialized materials and installation techniques.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span style={{color: '#666666'}}>
                      <strong>Premium Materials:</strong> Marine-grade fixings with extra penetration and engineered flashing details for extreme wind resistance.
                    </span>
                  </li>
                </ul>
              </div>

              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                From wind damage repairs to complete engineered roof replacements, our experienced team delivers outstanding results for Merewether Heights' demanding conditions. We work with cyclone-rated tile systems, reinforced structural components, and specialized high-wind roofing membranes designed for elevated installations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" variant="hero" asChild>
                  <a href="tel:0240894613">
                    Call (02) 4089 4613
                  </a>
                </Button>
                <Button size="lg" variant="architectural" asChild>
                  <a href="#contact-form">
                    Get Free Quote
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Elevated Property Roofing Services
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                  <a href={service.link} className="block">
                    <CardHeader>
                      <div className="text-primary group-hover:scale-110 transition-transform duration-300 flex justify-center mb-4">
                        {service.icon}
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm" style={{color: '#666666'}}>
                        {service.description}
                      </p>
                    </CardContent>
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Why Choose Sydney Roofing & Gutters in Merewether Heights?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {whyChooseReasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
                    <p style={{color: '#666666'}}>{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Local Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">
                  Merewether Heights Area Information
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Nearby Suburbs We Serve</h3>
                    <div className="flex flex-wrap gap-2">
                      {suburbs.map((suburb, index) => (
                        <Badge key={index} variant="secondary">
                          {suburb}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Council Information</h3>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="font-medium">Newcastle City Council</p>
                      <p className="text-sm" style={{color: '#666666'}}>
                        We handle all roofing work in compliance with Newcastle City Council regulations.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Elevated Property Roofing Needs</h3>
                    <ul className="space-y-2" style={{color: '#666666'}}>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        High-wind rated systems
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Storm damage repairs
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Altitude-resistant materials
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Reinforced installations
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">
                  Client Testimonials
                </h2>
                <div className="space-y-6">
                  {testimonials.map((testimonial, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-[#FFCA7B] text-[#FFCA7B]" />
                          ))}
                        </div>
                        <p className="mb-4 italic" style={{color: '#666666'}}>
                          "{testimonial.text}"
                        </p>
                        <div className="text-sm">
                          <p className="font-semibold">{testimonial.name}</p>
                          <p style={{color: '#666666'}}>{testimonial.location}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information About Suburb */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="blueprint-line border-t-2 border-accent w-20 mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Additional Information About Merewether Heights
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Perched above Merewether Beach, Merewether Heights offers stunning ocean vistas from elevated terrain. The suburb appeals to professionals and retirees willing to invest in premium hillside properties.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-4">
                Elevation Roofing Challenges
              </h3>
              <p className="text-base leading-relaxed mb-4" style={{color: '#666666'}}>
                Height amplifies coastal roofing demands:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span style={{color: '#666666'}}>
                    <strong>Wind multiplication:</strong> Elevated positions experience significantly stronger wind forces
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span style={{color: '#666666'}}>
                    <strong>Salt concentration:</strong> Higher altitude means increased salt particle exposure
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span style={{color: '#666666'}}>
                    <strong>Weather exposure:</strong> Unobstructed weather systems impact roofs with full force
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-primary mb-4">
                Engineered Solutions for Heights
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                We deliver specialized roofing for Merewether Heights' demanding conditions. This includes cyclone-rated tile systems, reinforced batten spacing, marine-grade fixings with extra penetration, and engineered flashing details for extreme wind resistance.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-6">
                <h4 className="text-lg font-semibold text-primary mb-2">
                  Priority Response for Elevated Properties
                </h4>
                <p className="text-base leading-relaxed" style={{color: '#666666'}}>
                  Elevated properties face increased weather risks. We provide priority emergency service to Merewether Heights residents. Call us anytime on <a href="tel:0240894613" className="text-primary font-semibold hover:underline">(02) 4089 4613</a> for immediate assistance with storm damage or urgent repairs.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-primary mb-4">
                Service Access
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Accessible via Scenic Drive or The Terrace, our crews regularly service this elevated suburb. Typical response time of 25-30 minutes for emergencies, with convenient scheduling for assessments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FloatingBanner />
      <Footer />
    </div>
  );
};

export const route = {
  path: "/roofers-merewether-heights/",
  element: <RoofersMerewetherHeights />,
  handle: {
    title: "Roofers in Merewether Heights | Elevated Coastal Experts",
    meta: [
      { name: "description", content: "Specialist roofing for Merewether Heights' elevated properties. Wind-rated systems and altitude-resistant materials. Call (02) 4089 4613." }
    ]
  }
};

export default RoofersMerewetherHeights;