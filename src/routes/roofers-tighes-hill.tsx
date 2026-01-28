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

const RoofersTighesHill = () => {
  // Services Array (roofing)
  const services = [
    {
      icon: <Hammer className="h-8 w-8" />,
      title: "Roof Repairs",
      description: "Best residential and industrial repairs for Tighes Hill",
      link: "/roof-repairs"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Roof Replacement",
      description: "Top-quality replacements for homes and commercial buildings",
      link: "/roof-replacement"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Roof Restoration",
      description: "Expert restoration for residential and warehouse properties",
      link: "/roof-restoration"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Emergency Repairs",
      description: "Rapid response for inner-city emergency roofing",
      link: "/emergency-roof-repairs"
    }
  ];

  // Why Choose Us (reasons)
  const whyChooseReasons = [
    {
      title: "Inner-City Expertise",
      description: "15+ years serving Tighes Hill's mixed residential and industrial properties"
    },
    {
      title: "24/7 Emergency Service",
      description: "Round-the-clock emergency repairs for Tighes Hill residents"
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
    "Islington", "Wickham", "Carrington", "Mayfield",
    "Hamilton", "Waratah", "Georgetown", "Newcastle West",
    "Stockton", "The Junction", "Merewether", "Bar Beach"
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Paul Richardson",
      location: "Tighes Hill",
      rating: 5,
      text: "Our weatherboard cottage needed careful roof work. They handled it perfectly - respectful of the home's character while ensuring solid weather protection. Best local roofers."
    },
    {
      name: "Linda McCarthy",
      location: "Tighes Hill",
      rating: 5,
      text: "Converted warehouse roof maintenance done professionally. They understand both residential and commercial roofing. Perfect for Tighes Hill's mixed properties."
    },
    {
      name: "Andrew Davis",
      location: "Tighes Hill",
      rating: 5,
      text: "Storm damage repairs completed quickly. Reliable service and fair pricing. They know Tighes Hill's inner-city roofing challenges well. Highly recommended."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Best Roofers in Tighes Hill | Top Inner-City Roofing Experts"
        description="Leading inner-city roofing specialists in Tighes Hill. Expert residential and industrial roofing solutions. Trusted by Tighes Hill residents. Call (02) 4089 4613."
        keywords="best roofers tighes hill, top inner city roofing, expert residential roofing tighes hill, leading industrial roofers, trusted tighes hill roofers"
        ogTitle="Best Roofers in Tighes Hill | Top Inner-City Roofing Experts"
        ogDescription="Leading specialists in residential and light-industrial roofing in Tighes Hill."
        ogImage="https://newcastlelocalroofers.com.au/images/roof-repairs-newcastle.jpg"
        schemaType="RoofingContractor"
        location="newcastle"
        customName="Best Roofers in Tighes Hill"
        customDescription="Leading inner-city roofing specialists in Tighes Hill, Newcastle NSW"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden bg-gradient-to-br from-primary to-[rgba(70,159,202,1)]">
        <div className="absolute inset-0 architectural-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
              Tighes Hill's Premier Inner-City Roofing Experts
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Best Roofers in Tighes Hill
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Expert roofing solutions for Tighes Hill's diverse residential and industrial properties
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Serving Tighes Hill</span>
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

      {/* About Roofing in Tighes Hill */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Professional Roofing Services in Tighes Hill
              </h2>
              
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Sydney Roofing & Gutters has been providing expert roofing services to Tighes Hill residents for over 15 years. Our team of licensed and insured roofers specializes in all aspects of residential and commercial roofing, from emergency repairs to complete roof replacements.
              </p>

              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Tighes Hill's mix of residential homes and light-industrial buildings creates varied roofing demands. Our versatile team handles both family home maintenance and commercial property requirements. We understand this inner-city suburb's character, delivering appropriate solutions whether working on weatherboard cottages or warehouse conversions. Our local expertise spans Tighes Hill's diverse building stock.
              </p>

              <div className="bg-muted/30 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Why Tighes Hill Residents Choose Us
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span style={{color: '#666666'}}>
                      <strong>24/7 Emergency Response:</strong> When you need urgent roof repairs in Tighes Hill, we're available around the clock to prevent further damage to your property.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span style={{color: '#666666'}}>
                      <strong>Local Knowledge:</strong> As Tighes Hill specialists, we understand local building codes, weather patterns, and common roofing issues in the area.
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
                      <strong>Competitive Pricing:</strong> We offer transparent, no-obligation quotes for all roofing services in Tighes Hill, with no hidden costs.
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
                Roofing Services in Tighes Hill
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
                Why Choose Sydney Roofing & Gutters in Tighes Hill?
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
                  Tighes Hill Area Information
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
                    <h3 className="text-xl font-semibold mb-3">Common Roofing Needs in Tighes Hill</h3>
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
              Additional Information About Tighes Hill
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Tighes Hill sits in inner Newcastle, northwest of the CBD. This established suburb blends residential streets with light-industrial zones, attracting working families and young professionals seeking affordable inner-city living with convenient access to employment areas.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-4">
                Inner-City Roofing Challenges
              </h3>
              <p className="text-base leading-relaxed mb-4" style={{color: '#666666'}}>
                Tighes Hill's mixed character creates diverse roofing needs:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span style={{color: '#666666'}}>
                    <strong>Property diversity:</strong> Residential cottages and light-industrial buildings require different approaches
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span style={{color: '#666666'}}>
                    <strong>Aging housing stock:</strong> Many older homes need roof replacement or major repairs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span style={{color: '#666666'}}>
                    <strong>Commercial conversions:</strong> Warehouse-to-residential conversions need specialized roofing
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-primary mb-4">
                Versatile Roofing Solutions
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Sydney Roofing & Gutters provides comprehensive roofing for Tighes Hill's mixed properties. Our services include residential roof maintenance and replacement, light-industrial roofing solutions, warehouse conversion roofing, affordable quality installations, and inner-city emergency response. We understand both residential and commercial requirements in this diverse suburb.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-6">
                <h4 className="text-lg font-semibold text-primary mb-2">
                  Fast Response for Tighes Hill Residents
                </h4>
                <p className="text-base leading-relaxed" style={{color: '#666666'}}>
                  We understand that roofing emergencies can't wait. That's why we offer 24/7 emergency service to Tighes Hill and surrounding suburbs. Call us anytime on <a href="tel:0240894613" className="text-primary font-semibold hover:underline">(02) 4089 4613</a> for immediate assistance.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-primary mb-4">
                Inner Newcastle Location
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Located off Maitland Road or Hanbury Street, Tighes Hill receives regular inner-city service. Emergency response typically 20-25 minutes, with flexible scheduling for both residential and commercial property assessments.
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
  path: "/roofers-tighes-hill/",
  element: <RoofersTighesHill />,
  handle: {
    title: "Best Roofers in Tighes Hill | Top Inner-City Roofing Experts",
    meta: [
      { name: "description", content: "Leading inner-city roofing specialists in Tighes Hill. Expert residential and industrial solutions. Call (02) 4089 4613." }
    ]
  }
};

export default RoofersTighesHill;