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

const RoofersStockton = () => {
  // Services Array (peninsula focus)
  const services = [
    {
      icon: <Hammer className="h-8 w-8" />,
      title: "Roof Repairs",
      description: "Top-quality repairs for Stockton's peninsula properties",
      link: "/roof-repairs"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Roof Replacement",
      description: "Best dual-exposure resistant roofing systems",
      link: "/roof-replacement"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Roof Restoration",
      description: "Expert restoration for harbour and ocean-exposed roofs",
      link: "/roof-restoration"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Emergency Repairs",
      description: "Leading emergency response for peninsula storm damage",
      link: "/emergency-roof-repairs"
    }
  ];

  // Why Choose Us (peninsula reasons)
  const whyChooseReasons = [
    {
      title: "Peninsula Roofing Experts",
      description: "Systems engineered for dual harbour and ocean exposure"
    },
    {
      title: "Marine-Grade Throughout",
      description: "Materials, fixings, and flashings rated for maximum salt exposure"
    },
    {
      title: "Sand-Ready Design",
      description: "Enhanced ventilation and detailing for dune-side properties"
    },
    {
      title: "Fast Emergency Response",
      description: "Rapid mobilisation across Stockton via bridge access"
    }
  ];

  // Suburbs list
  const suburbs = [
    "Fern Bay", "Fullerton Cove", "Carrington", "Mayfield",
    "Wickham", "Newcastle East", "The Hill", "Anna Bay",
    "Williamtown", "Medowie", "Salt Ash", "Nelson Bay"
  ];

  // Testimonials (unique)
  const testimonials = [
    {
      name: "Graham Patterson",
      location: "Stockton",
      rating: 5,
      text: "Peninsula location means we get salt from harbour and ocean. They installed dual-exposure resistant materials that handle both perfectly. Best roofers for Stockton conditions."
    },
    {
      name: "Helen Murphy",
      location: "Stockton",
      rating: 5,
      text: "Beach sand and harbour salt were destroying our roof. Complete replacement with marine-grade systems has been excellent. Top-quality peninsula roofing specialists."
    },
    {
      name: "John Mitchell",
      location: "Stockton",
      rating: 5,
      text: "Emergency repairs after coastal storm. Fast ferry-crossing response and expert work. They understand Stockton's unique peninsula challenges. Highly recommended."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Expert Roofers in Stockton | Best Peninsula Roofing Specialists"
        description="Top peninsula roofing experts in Stockton. Leading specialists in harbour and ocean-exposed properties. Trusted Stockton roofers. Call (02) 4089 4613."
        keywords="expert roofers stockton, best peninsula roofing, top harbour roofing stockton, leading coastal roofers, trusted stockton roofers"
        ogTitle="Expert Roofers in Stockton | Best Peninsula Roofing"
        ogDescription="Top-rated specialists for peninsula properties with dual coastal exposure in Stockton."
        ogImage="https://newcastlelocalroofers.com.au/images/roof-repairs-newcastle.jpg"
        schemaType="RoofingContractor"
        location="newcastle"
        customName="Expert Roofers in Stockton"
        customDescription="Top peninsula roofing experts in Stockton, Newcastle NSW"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden bg-gradient-to-br from-primary to-[rgba(70,159,202,1)]">
        <div className="absolute inset-0 architectural-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
              Stockton's Premier Peninsula Roofing Experts
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Expert Roofers in Stockton
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Top-rated specialists for peninsula properties with dual coastal exposure
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Serving Stockton</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>Peninsula Roofing Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Fast Emergency Service</span>
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

      {/* About Section - Peninsula Focus */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Specialized Roofing for Stockton's Peninsula Conditions
              </h2>

              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Our team delivers resilient roofing systems designed specifically for Stockton's dual salt exposure. From specification through installation, we employ practices that combat corrosion, manage sand movement, and secure roofs against shifting wind directions along the peninsula.
              </p>

              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Stockton's unique peninsula position creates exceptional roofing demands. Properties face both harbour salt spray and ocean winds, creating dual coastal exposure few other suburbs experience. Our peninsula specialists understand these combined challenges, using reinforced systems designed for maximum saltwater exposure from multiple directions.
              </p>

              <div className="bg-muted/30 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Why Stockton Homeowners Choose Us
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
                We specify sealed fasteners, heavy-duty flashings, double-sided protective coatings, and breathable underlays optimised for high humidity and salt. Our approach ensures longevity across both harbour-facing and ocean-facing roof sections.
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
                Roofing Services in Stockton
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
                Why Choose Newcastle Local Roofers in Stockton?
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
                  Stockton Area Information
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
                      <p className="font-medium">City of Newcastle</p>
                      <p className="text-sm" style={{color: '#666666'}}>
                        We comply with City of Newcastle standards and coastal corrosion guidelines for peninsula properties.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Common Roofing Needs in Stockton</h3>
                    <ul className="space-y-2" style={{color: '#666666'}}>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Dual-exposure corrosion control
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Sand management ventilation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Reinforced flashings and fixings
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Emergency storm repairs
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
              Additional Information About Stockton
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Stockton occupies a narrow peninsula across Newcastle Harbour, featuring the expansive Stockton Beach along its ocean side. This unique coastal community offers beachside living with strong community connections, attracting diverse families and retirees seeking authentic beach town atmosphere.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-4">
                Peninsula Roofing Challenges
              </h3>
              <p className="text-base leading-relaxed mb-4" style={{color: '#666666'}}>
                Dual coastal exposure creates intensified demands:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span style={{color: '#666666'}}>
                    <strong>Harbour salt spray:</strong> Western exposure brings harbour salt air and industrial particles
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span style={{color: '#666666'}}>
                    <strong>Ocean exposure:</strong> Eastern beach side faces pure ocean salt and sand infiltration
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span style={{color: '#666666'}}>
                    <strong>Sand accumulation:</strong> Proximity to massive dune systems means constant sandy conditions
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-primary mb-4">
                Specialized Peninsula Solutions
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Newcastle Local Roofers delivers expert peninsula roofing for Stockton's challenging environment. Our services include dual-exposure marine-grade materials, enhanced ventilation for sand management, reinforced fixings for multi-directional wind loads, specialized flashing for saltwater exposure, and comprehensive corrosion protection systems. We understand Stockton's unique peninsula microclimate.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-4">
                Peninsula Access
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Accessed via Stockton Bridge from Newcastle, our teams regularly service this peninsula community. Typical emergency response time 25-30 minutes, with detailed peninsula-specific assessments and quotations available.
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
  path: "/roofers-stockton/",
  element: <RoofersStockton />,
  handle: {
    title: "Expert Roofers in Stockton | Best Peninsula Roofing",
    meta: [
      { name: "description", content: "Top peninsula roofing experts in Stockton. Leading specialists in harbour and ocean-exposed properties. Call (02) 4089 4613." }
    ]
  }
};

export default RoofersStockton;


