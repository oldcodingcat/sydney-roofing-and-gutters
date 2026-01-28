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

const RoofersWaratah = () => {
  // Services Array (roofing)
  const services = [
    {
      icon: <Hammer className="h-8 w-8" />,
      title: "Roof Repairs",
      description: "Expert repairs for Waratah homes and businesses",
      link: "/roof-repairs"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Roof Replacement",
      description: "Best replacements for residential and commercial buildings",
      link: "/roof-replacement"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Roof Restoration",
      description: "Top restoration for established Waratah properties",
      link: "/roof-restoration"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Emergency Repairs",
      description: "Rapid emergency response for Waratah properties",
      link: "/emergency-roof-repairs"
    }
  ];

  // Why Choose Us (reasons)
  const whyChooseReasons = [
    {
      title: "Established Suburb Experience",
      description: "15+ years serving Waratah's residential and commercial properties"
    },
    {
      title: "24/7 Emergency Service",
      description: "Round-the-clock emergency repairs for Waratah residents"
    },
    {
      title: "Licensed & Insured",
      description: "Fully licensed roofing contractors with comprehensive insurance"
    },
    {
      title: "Quality Workmanship",
      description: "Premium materials and expert installation guaranteed"
    }
  ];

  // Suburbs list
  const suburbs = [
    "Georgetown", "Mayfield", "Jesmond", "Lambton",
    "North Lambton", "Tighes Hill", "Islington", "Kotara",
    "Broadmeadow", "Hamilton", "Wallsend", "New Lambton"
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Robert Collins",
      location: "Waratah",
      rating: 5,
      text: "Our family home needed complete re-roofing. Professional work from start to finish with quality materials. Best roofers in Waratah without question."
    },
    {
      name: "Sandra Mitchell",
      location: "Waratah",
      rating: 5,
      text: "Business premises roof maintenance handled efficiently. They understand both residential and commercial needs. Reliable Waratah roofing specialists."
    },
    {
      name: "Mark Thompson",
      location: "Waratah",
      rating: 5,
      text: "Storm repairs completed quickly. Fair pricing and solid workmanship. They know Waratah properties well. Highly recommended local roofers."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Expert Roofers in Waratah | Best Established Suburb Roofing"
        description="Leading roofing specialists in Waratah. Expert service for established homes and commercial properties. Trusted Waratah roofers since 2005. Call (02) 4089 4613."
        keywords="expert roofers waratah, best established roofing waratah, top waratah roofers, leading residential roofing, trusted waratah roofing"
        ogTitle="Expert Roofers in Waratah | Best Established Suburb Roofing"
        ogDescription="Leading specialists in established residential and commercial roofing in Waratah."
        ogImage="https://newcastlelocalroofers.com.au/images/roof-repairs-newcastle.jpg"
        schemaType="RoofingContractor"
        location="newcastle"
        customName="Expert Roofers in Waratah"
        customDescription="Leading roofing specialists in Waratah, Newcastle NSW"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden bg-gradient-to-br from-primary to-[rgba(70,159,202,1)]">
        <div className="absolute inset-0 architectural-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
              Waratah's Premier Established Suburb Roofing Experts
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Expert Roofers in Waratah
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Top-quality roofing solutions for Waratah's residential and commercial properties
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Serving Waratah</span>
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

      {/* About Roofing in Waratah */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Professional Roofing Services in Waratah
              </h2>
              
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Sydney Roofing & Gutters has been providing expert roofing services to Waratah residents for over 15 years. Our team of licensed and insured roofers specializes in all aspects of residential and commercial roofing, from emergency repairs to complete roof replacements.
              </p>

              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Waratah's established character combines residential streets with commercial development. Our experienced team serves both family homes and business properties in this convenient inner-western suburb. We understand Waratah's mix of housing ages and commercial requirements, delivering appropriate roofing solutions from heritage restorations to modern commercial installations.
              </p>

              <div className="bg-muted/30 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Why Waratah Residents Choose Us
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span style={{color: '#666666'}}>
                      <strong>24/7 Emergency Response:</strong> When you need urgent roof repairs in Waratah, we're available around the clock to prevent further damage to your property.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span style={{color: '#666666'}}>
                      <strong>Local Knowledge:</strong> As Waratah specialists, we understand local building codes, weather patterns, and common roofing issues in the area.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span style={{color: '#666666'}}>
                      <strong>Quality Workmanship:</strong> All our roofing work comes with comprehensive warranties and is performed by fully licensed and insured professionals.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span style={{color: '#666666'}}>
                      <strong>Competitive Pricing:</strong> We offer transparent, no-obligation quotes for all roofing services in Waratah, with no hidden costs.
                    </span>
                  </li>
                </ul>
              </div>

              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Whether you need emergency storm damage repairs, a complete roof replacement, or regular maintenance to extend your roof's lifespan, our team has the expertise and equipment to deliver exceptional results. We work with all roofing materials including Colorbond metal, concrete tiles, terracotta tiles, and asphalt shingles.
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
                Roofing Services in Waratah
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
                Why Choose Sydney Roofing & Gutters in Waratah?
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
                  Waratah Area Information
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
                    <h3 className="text-xl font-semibold mb-3">Common Roofing Needs in Waratah</h3>
                    <ul className="space-y-2" style={{color: '#666666'}}>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Storm damage repairs
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Tile roof maintenance
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Metal roof installations
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Emergency leak repairs
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
              Additional Information About Waratah
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Waratah sits in Newcastle's inner west, offering convenient access to the city and major roads. This established suburb blends residential areas with commercial development, attracting families and businesses seeking accessible locations with established infrastructure and community facilities.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-4">
                Established Suburb Roofing Challenges
              </h3>
              <p className="text-base leading-relaxed mb-4" style={{color: '#666666'}}>
                Waratah's mixed character creates varied roofing demands:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span style={{color: '#666666'}}>
                    <strong>Mixed property types:</strong> Residential homes and commercial buildings need different roofing approaches
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span style={{color: '#666666'}}>
                    <strong>Aging infrastructure:</strong> Many established homes require roof replacement or major repairs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span style={{color: '#666666'}}>
                    <strong>Commercial activity:</strong> Business properties need reliable roofing for operations
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-primary mb-4">
                Comprehensive Roofing Solutions
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Sydney Roofing & Gutters provides complete roofing services for Waratah's diverse properties. Our expertise includes residential roof maintenance and replacement, commercial building roofing, established property restoration, modern installation techniques, and reliable emergency response. We serve both Waratah families and businesses with equal commitment to quality.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-6">
                <h4 className="text-lg font-semibold text-primary mb-2">
                  Fast Response for Waratah Residents
                </h4>
                <p className="text-base leading-relaxed" style={{color: '#666666'}}>
                  We understand that roofing emergencies can't wait. That's why we offer 24/7 emergency service to Waratah and surrounding suburbs. Call us anytime on <a href="tel:0240894613" className="text-primary font-semibold hover:underline">(02) 4089 4613</a> for immediate assistance.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-primary mb-4">
                Convenient Inner-West Location
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Accessed via Newcastle Inner City Bypass or Lambton Road, Waratah receives regular service coverage. Emergency response typically 25-30 minutes, with flexible scheduling for residential and commercial property needs.
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
  path: "/roofers-waratah/",
  element: <RoofersWaratah />,
  handle: {
    title: "Expert Roofers in Waratah | Best Established Suburb Roofing",
    meta: [
      { name: "description", content: "Leading roofing specialists in Waratah. Expert service for homes and businesses. Call (02) 4089 4613." }
    ]
  }
};

export default RoofersWaratah;