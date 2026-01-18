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

const RoofersTheJunctionNewcastle = () => {
  // Services Array (beachside focus)
  const services = [
    {
      icon: <Hammer className="h-8 w-8" />,
      title: "Roof Repairs",
      description: "Best beachside repairs for The Junction coastal properties",
      link: "/roof-repairs"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Roof Replacement",
      description: "Premium replacements for modern and heritage beach homes",
      link: "/roof-replacement"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Roof Restoration",
      description: "Expert restoration for coastal lifestyle properties",
      link: "/roof-restoration"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Emergency Repairs",
      description: "Rapid beach weather storm damage response",
      link: "/emergency-roof-repairs"
    }
  ];

  // Why Choose Us (beachside reasons)
  const whyChooseReasons = [
    {
      title: "Beachside Roofing Specialists",
      description: "Expertise in coastal conditions and beach lifestyle property requirements"
    },
    {
      title: "Boutique Design Focus",
      description: "Aesthetic roofing solutions matching The Junction's trendy character"
    },
    {
      title: "Coastal Material Selection",
      description: "Salt-resistant materials and coastal-appropriate ventilation systems"
    },
    {
      title: "Local Lifestyle Understanding",
      description: "Knowledge of The Junction's unique blend of heritage and modern living"
    }
  ];

  // Suburbs list
  const suburbs = [
    "Bar Beach", "Merewether", "Hamilton", "Hamilton South",
    "Cooks Hill", "The Hill", "Newcastle East", "Adamstown",
    "Broadmeadow", "Islington", "Wickham", "Waratah"
  ];

  // Testimonials (unique)
  const testimonials = [
    {
      name: "Melissa Anderson",
      location: "The Junction",
      rating: 5,
      text: "Our renovated cottage needed roofing that matched The Junction's boutique aesthetic. They delivered beautifully - modern materials with beach house charm. Perfect for this trendy beachside suburb."
    },
    {
      name: "Ryan Phillips",
      location: "The Junction",
      rating: 5,
      text: "Coastal weather testing our roof's limits. Complete replacement with salt-resistant materials has been excellent. They understand The Junction's beachside exposure perfectly."
    },
    {
      name: "Sophie Turner",
      location: "The Junction",
      rating: 5,
      text: "Heritage cottage restoration including authentic roof work. The team balanced period character with coastal durability. Best choice for The Junction's unique beach heritage homes."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Top Roofers in The Junction Newcastle | Best Beachside Roofing"
        description="Leading beachside roofing experts in The Junction, Newcastle. Premium coastal roofing with boutique service. Trusted by The Junction residents. Call (02) 4089 4613."
        keywords="top roofers the junction newcastle, best beachside roofing the junction, expert coastal roofing newcastle, premium junction roofers, trusted beachside roofers"
        ogTitle="Top Roofers in The Junction Newcastle | Best Beachside Roofing"
        ogDescription="Leading specialists in beachside properties and coastal lifestyle roofing in The Junction."
        ogImage="https://newcastlelocalroofers.com.au/images/roof-repairs-newcastle.jpg"
        schemaType="RoofingContractor"
        location="newcastle"
        customName="Top Roofers in The Junction Newcastle"
        customDescription="Leading beachside roofing experts in The Junction, Newcastle NSW"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden bg-gradient-to-br from-primary to-[rgba(70,159,202,1)]">
        <div className="absolute inset-0 architectural-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
              The Junction's Premier Beachside Roofing Experts
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Top Roofers in The Junction Newcastle
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Expert roofing solutions for The Junction's trendy beachside properties
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Serving The Junction</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>Beachside Roofing Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Boutique Service</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
              <Button size="lg" variant="hero" asChild>
                <a href="tel:0240894613">Call (02) 4089 4613</a>
              </Button>
              <Button size="lg" variant="architectural" asChild>
                <a href="#contact-form">Get Free Quote</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Beachside Focus */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Premium Beachside Roofing in The Junction Newcastle
              </h2>

              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Our coastal roofing team delivers sophisticated solutions for The Junction's distinctive beachside properties. We combine coastal durability with aesthetic appeal, understanding this suburb's unique blend of heritage charm and contemporary beach lifestyle.
              </p>

              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                The Junction's beachside character creates specific roofing considerations. Properties benefit from coastal breezes but face moderate salt exposure and beach weather systems. Our Junction specialists balance coastal durability with aesthetic appeal, understanding this suburb's blend of heritage charm and contemporary beach lifestyle. We deliver roofing solutions that complement The Junction's boutique character.
              </p>

              <div className="bg-muted/30 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Why The Junction Property Owners Choose Us
                </h3>
                <ul className="space-y-3">
                  {whyChooseReasons.map((reason, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span style={{color: '#666666'}}>
                        <strong>{reason.title}:</strong> {reason.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                We specify coastal-rated materials, aesthetic ventilation solutions, and boutique-appropriate finishes that enhance The Junction's character. Every installation balances coastal performance with the suburb's trendy beachside aesthetic.
              </p>
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
                Beachside Roofing Services in The Junction
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

      {/* Why Choose Us - Cards */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Why Choose Newcastle Local Roofers in The Junction?
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
                  The Junction Area Information
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
                        We deliver roofing solutions aligned with Newcastle City Council standards for beachside properties.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Common Roofing Needs in The Junction</h3>
                    <ul className="space-y-2" style={{color: '#666666'}}>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Coastal material upgrades
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Boutique renovation roofing
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Heritage cottage restoration
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Beach weather protection
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
              Additional Information About The Junction
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                The Junction nestles between Bar Beach and Merewether, offering boutique shopping and vibrant café culture. This trendy beachside pocket attracts young professionals and families seeking lifestyle convenience with beach access and urban amenities.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-4">
                Beachside Lifestyle Roofing Needs
              </h3>
              <p className="text-base leading-relaxed mb-4" style={{color: '#666666'}}>
                The Junction's coastal position creates balanced roofing requirements:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span style={{color: '#666666'}}>
                    <strong>Moderate salt exposure:</strong> Coastal influence without extreme beachfront conditions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span style={{color: '#666666'}}>
                    <strong>Beach weather:</strong> Storm systems from ocean proximity affect roof performance
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span style={{color: '#666666'}}>
                    <strong>Mixed architecture:</strong> Blend of heritage cottages and contemporary renovations
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-primary mb-4">
                Boutique Roofing Solutions
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Newcastle Local Roofers delivers tailored roofing for The Junction's diverse properties. Our services include coastal-rated modern installations, heritage cottage restoration, boutique renovation roofing, salt-resistant material selection, and aesthetic designs matching The Junction's character. We understand this suburb's unique blend of beach lifestyle and urban sophistication.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-4">
                Prime Beachside Location
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Located off Union Street or Denison Street, The Junction receives regular service from our coastal specialists. Emergency response typically 15-20 minutes, with design-focused assessments and boutique renovation quotations available.
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
  path: "/roofers-the-junction-newcastle/",
  element: <RoofersTheJunctionNewcastle />,
  handle: {
    title: "Top Roofers in The Junction Newcastle | Best Beachside Roofing",
    meta: [
      { name: "description", content: "Leading beachside roofing experts in The Junction, Newcastle. Premium coastal roofing solutions. Call (02) 4089 4613." }
    ]
  }
};

export default RoofersTheJunctionNewcastle;


