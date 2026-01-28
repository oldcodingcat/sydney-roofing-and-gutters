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

const RoofersNewcastleEast = () => {
  // Services Array (custom for heritage focus)
  const services = [
    {
      icon: <Hammer className="h-8 w-8" />,
      title: "Roof Repairs",
      description: "Expert heritage roof repairs for Newcastle East historic homes",
      link: "/roof-repairs"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Roof Replacement",
      description: "Premium coastal replacements with authentic materials",
      link: "/roof-replacement"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Roof Restoration",
      description: "Leading specialists in Victorian and Federation roof restoration",
      link: "/roof-restoration"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Emergency Repairs",
      description: "Fast emergency response for historic property protection",
      link: "/emergency-roof-repairs"
    }
  ];

  // Why Choose Us (heritage reasons)
  const whyChooseReasons = [
    {
      title: "Heritage Roofing Expertise",
      description: "Master craftsmen skilled in slate, terracotta, and Victorian iron roofing"
    },
    {
      title: "Coastal-Grade Materials",
      description: "Premium marine-grade systems tailored to headland exposure"
    },
    {
      title: "Council-Compliant Works",
      description: "Authentic restoration that meets heritage and council requirements"
    },
    {
      title: "Trusted Local Specialists",
      description: "Proven restoration results across Newcastle East historic homes"
    }
  ];

  // Suburbs list
  const suburbs = [
    "The Hill", "Cooks Hill", "Newcastle West", "Bar Beach",
    "The Junction", "Hamilton", "Wickham", "Stockton",
    "Merewether", "Islington", "Georgetown", "Carrington"
  ];

  // Testimonials (unique)
  const testimonials = [
    {
      name: "Elizabeth Thornton",
      location: "Newcastle East",
      rating: 5,
      text: "Our 1890s terrace needed authentic slate roof restoration. Their heritage expertise is outstanding. Maintained the period character perfectly while improving weather protection."
    },
    {
      name: "Peter Donaldson",
      location: "Newcastle East",
      rating: 5,
      text: "Coastal exposure was destroying our Victorian iron roof. They installed marine-grade materials that look period-authentic. Best heritage roofers we've worked with."
    },
    {
      name: "Margaret Foster",
      location: "Newcastle East",
      rating: 5,
      text: "Emergency storm repairs on our Federation home. Fast response and they understood the importance of matching original materials. Excellent heritage roofing service."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Best Roofers in Newcastle East | Top Heritage Roofing Experts"
        description="Leading heritage roofing specialists in Newcastle East. Expert restoration of historic roofs, premium coastal materials. Trusted by Newcastle East homeowners. Call (02) 4089 4613."
        keywords="best roofers newcastle east, top heritage roofing, expert roof restoration newcastle east, premium coastal roofing, trusted newcastle east roofers"
        ogTitle="Best Roofers in Newcastle East | Top Heritage Roofing Experts"
        ogDescription="Leading specialists in heritage roof restoration and coastal property protection in Newcastle East."
        ogImage="https://newcastlelocalroofers.com.au/images/roof-repairs-newcastle.jpg"
        schemaType="RoofingContractor"
        location="newcastle"
        customName="Best Roofers in Newcastle East"
        customDescription="Leading heritage roofing specialists in Newcastle East, Newcastle NSW"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden bg-gradient-to-br from-primary to-[rgba(70,159,202,1)]">
        <div className="absolute inset-0 architectural-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
              Newcastle East's Premier Heritage Roofing Experts
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Best Roofers in Newcastle East
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Leading specialists in heritage roof restoration and coastal property protection
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Serving Newcastle East</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>Heritage Roofing Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Trusted by Local Homeowners</span>
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

      {/* About Section - Heritage Focus */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Heritage Roofing Specialists in Newcastle East
              </h2>

              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Sydney Roofing & Gutters is the trusted choice for period-correct restoration and conservation works across Newcastle East's historic headland homes. Our licensed team combines traditional craftsmanship with modern protection systems to preserve original character while delivering long-term performance in coastal conditions.
              </p>

              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Newcastle East's historic headland properties demand exceptional roofing expertise. Our master craftsmen specialize in heritage roof restoration, working with traditional materials and period-appropriate techniques. We're the trusted choice for Victorian and Federation-era homes requiring authentic restoration with modern weatherproofing.
              </p>

              <div className="bg-muted/30 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Why Newcastle East Homeowners Choose Us
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
                From slate and terracotta to original iron roofing, our team understands how to match historical profiles, colours, and finishes. We use marine-grade fasteners, concealed flashings, and breathable underlays tuned for Newcastle East's headland winds and salt air.
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
                Heritage Roofing Services in Newcastle East
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
                Why Choose Sydney Roofing & Gutters in Newcastle East?
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
                  Newcastle East Area Information
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
                    <h3 className="text-xl font-semibold mb-3">Council & Heritage</h3>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="font-medium">Newcastle City Council</p>
                      <p className="text-sm" style={{color: '#666666'}}>
                        We carry out heritage-compliant roofing in coordination with council requirements and conservation guidelines for historic properties.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Common Heritage Needs in Newcastle East</h3>
                    <ul className="space-y-2" style={{color: '#666666'}}>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Slate and terracotta restoration
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Victorian iron roof conservation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Marine-grade material upgrades
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Emergency storm protection
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
              Additional Information About Newcastle East
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Newcastle East occupies the city's historic eastern headland, featuring some of Newcastle's finest heritage architecture. This prestigious coastal enclave attracts professionals and families who value historic character combined with stunning ocean vistas.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-4">
                Historic Roof Challenges in Newcastle East
              </h3>
              <p className="text-base leading-relaxed mb-4" style={{color: '#666666'}}>
                Heritage properties face specialized roofing demands:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span style={{color: '#666666'}}>
                    <strong>Heritage compliance:</strong> Council restrictions require period-appropriate materials and techniques
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span style={{color: '#666666'}}>
                    <strong>Extreme exposure:</strong> Headland position creates severe salt air and wind conditions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span style={{color: '#666666'}}>
                    <strong>Material matching:</strong> Original slate, terracotta, and iron roofing requires authentic restoration
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-primary mb-4">
                Expert Heritage Roofing Solutions
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Sydney Roofing & Gutters delivers specialized heritage roofing for Newcastle East's historic properties. Our master craftsmen provide authentic slate roof restoration, traditional terracotta tile repairs, Victorian iron roof conservation, marine-grade materials in period styles, and heritage-approved modern weatherproofing. We understand both conservation requirements and coastal protection needs.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-4">
                Prime Headland Location
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Accessed from Hunter Street or Watt Street, Newcastle East receives priority service from our heritage specialists. Emergency response typically 10-15 minutes, with detailed heritage assessments and restoration quotations available.
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
  path: "/roofers-newcastle-east/",
  element: <RoofersNewcastleEast />,
  handle: {
    title: "Best Roofers in Newcastle East | Top Heritage Roofing Experts",
    meta: [
      { name: "description", content: "Leading heritage roofing specialists in Newcastle East. Expert restoration of historic roofs, premium coastal materials. Call (02) 4089 4613." }
    ]
  }
};

export default RoofersNewcastleEast;


