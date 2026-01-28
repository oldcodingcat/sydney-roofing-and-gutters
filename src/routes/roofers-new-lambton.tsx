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

const RoofersNewLambton = () => {
  // Services Array (roofing)
  const services = [
    {
      icon: <Hammer className="h-8 w-8" />,
      title: "Roof Repairs",
      description: "Expert repairs for established New Lambton family homes",
      link: "/roof-repairs"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Roof Replacement",
      description: "Modern replacements for aging residential roofs",
      link: "/roof-replacement"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Roof Restoration",
      description: "Cleaning and treatment for moss-affected roofs",
      link: "/roof-restoration"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Emergency Repairs",
      description: "Fast response for tree damage and storm repairs",
      link: "/emergency-roof-repairs"
    }
  ];

  // Why Choose Us (reasons)
  const whyChooseReasons = [
    {
      title: "Family-Focused Service",
      description: "Understanding of residential roofing needs in established neighborhoods"
    },
    {
      title: "Tree Expertise",
      description: "Specialized knowledge in managing tree debris and moss-related issues"
    },
    {
      title: "Aging Roof Specialists",
      description: "Expertise in maintaining and replacing 1970s-90s residential roofing"
    },
    {
      title: "Community Trusted",
      description: "Reliable service with local knowledge of New Lambton's family homes"
    }
  ];

  // Suburbs list
  const suburbs = [
    "Lambton", "North Lambton", "Kotara", "Adamstown",
    "Jesmond", "Garden Suburb", "Waratah", "Broadmeadow",
    "Hamilton East", "Georgetown", "Wallsend", "Adamstown Heights"
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Susan Richards",
      location: "New Lambton",
      rating: 5,
      text: "Our 1980s tile roof was showing its age. They replaced everything efficiently and the house looks rejuvenated. Great work for established homes."
    },
    {
      name: "David Thompson",
      location: "New Lambton",
      rating: 5,
      text: "Tree branches damaged several tiles during a storm. Quick repair service and they cleaned all the leaf debris from the valleys. Very thorough."
    },
    {
      name: "Karen Lee",
      location: "New Lambton",
      rating: 5,
      text: "Moss removal and roof restoration made a huge difference. They understand the challenges of shaded roofs in tree-lined streets."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Roofers in New Lambton | Family Home Roofing Experts | Newcastle"
        description="Trusted roofing services for New Lambton families. Specialists in tile roof maintenance and aging roof replacement. Call (02) 4089 4613."
        keywords="roofers new lambton, family home roofing, tile roof maintenance new lambton, roof replacement new lambton, tree debris roofing"
        ogTitle="Roofers in New Lambton | Family Home Roofing Experts"
        ogDescription="Trusted roofing services for New Lambton families. Specialists in tile roof maintenance and aging roof replacement."
        ogImage="https://newcastlelocalroofers.com.au/images/roof-repairs-newcastle.jpg"
        schemaType="RoofingContractor"
        location="newcastle"
        customName="Roofers in New Lambton"
        customDescription="Trusted roofing services for New Lambton, Newcastle NSW"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden bg-gradient-to-br from-primary to-[rgba(70,159,202,1)]">
        <div className="absolute inset-0 architectural-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
              New Lambton Family Roofing Specialists
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Trusted Roofers in New Lambton
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Reliable roofing solutions for New Lambton's family homes and established properties
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Serving New Lambton</span>
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

      {/* About Roofing in New Lambton */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Trusted Roofing Services in New Lambton
              </h2>
              
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Sydney Roofing & Gutters has been providing reliable roofing solutions to New Lambton families for over 15 years. Our team specializes in residential roofing maintenance, aging roof replacement, and tree-related roofing challenges common to this established suburb.
              </p>

              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                New Lambton's established character presents specific roofing needs. Mature tree canopies create debris accumulation and moss growth on aging roof materials. Our team specializes in maintaining and replacing roofs on 1970s-90s homes while managing tree-related challenges common to this leafy suburb.
              </p>

              <div className="bg-muted/30 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Why New Lambton Families Choose Us
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span style={{color: '#666666'}}>
                      <strong>Family-Focused Approach:</strong> We understand the specific roofing needs of established residential neighborhoods and family homes.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span style={{color: '#666666'}}>
                      <strong>Tree Expertise:</strong> Specialized knowledge in managing tree debris, moss growth, and biological roof contamination common to leafy suburbs.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span style={{color: '#666666'}}>
                      <strong>Aging Roof Specialists:</strong> Expertise in maintaining and replacing 1970s-90s residential roofing systems approaching their lifespan.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span style={{color: '#666666'}}>
                      <strong>Reliable Service:</strong> Trusted local roofing contractor with community knowledge and flexible scheduling for busy families.
                    </span>
                  </li>
                </ul>
              </div>

              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                From routine maintenance to complete roof replacements, our experienced team delivers outstanding results for New Lambton's family homes. We work with modern tile systems, Colorbond steel roofing, and specialized treatments for moss and algae removal on established properties.
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
                Residential Roofing Services in New Lambton
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
                Why Choose Sydney Roofing & Gutters in New Lambton?
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
                  New Lambton Area Information
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
                    <h3 className="text-xl font-semibold mb-3">Family Home Roofing Needs</h3>
                    <ul className="space-y-2" style={{color: '#666666'}}>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Aging roof maintenance
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Tree debris management
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Moss and algae treatment
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Storm damage repairs
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
              Additional Information About New Lambton
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                New Lambton sits in western Newcastle, roughly 8km from the city center. This established residential area attracts families drawn to quality schools, leafy streets, and strong community connections.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-4">
                Tree-Related Roofing Challenges
              </h3>
              <p className="text-base leading-relaxed mb-4" style={{color: '#666666'}}>
                Mature landscaping creates specific maintenance needs:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span style={{color: '#666666'}}>
                    <strong>Debris accumulation:</strong> Leaves and twigs collect in roof valleys and gutters
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span style={{color: '#666666'}}>
                    <strong>Biological growth:</strong> Shaded areas develop moss, algae, and lichen
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span style={{color: '#666666'}}>
                    <strong>Material aging:</strong> Many 1970s-90s roofs approaching replacement timeframe
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-primary mb-4">
                Residential Roofing Expertise
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Our services address New Lambton's established housing needs through comprehensive maintenance programs, moss and algae treatment, aging roof replacement with modern materials, and tree debris management systems. We understand the specific requirements of family homes in leafy suburbs.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-6">
                <h4 className="text-lg font-semibold text-primary mb-2">
                  Family-Friendly Service in New Lambton
                </h4>
                <p className="text-base leading-relaxed" style={{color: '#666666'}}>
                  We understand that roofing work needs to fit around family life. That's why we offer flexible scheduling and clear communication for New Lambton residents. Call us anytime on <a href="tel:0240894613" className="text-primary font-semibold hover:underline">(02) 4089 4613</a> for emergency repairs or to schedule convenient appointments.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-primary mb-4">
                Convenient Location
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Served via Lambton Road or Lookout Road, with our teams frequently working throughout this established suburb. Emergency response averages 25-30 minutes, with flexible scheduling for routine inspections and quotations.
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
  path: "/roofers-new-lambton/",
  element: <RoofersNewLambton />,
  handle: {
    title: "Roofers in New Lambton | Family Home Roofing Experts",
    meta: [
      { name: "description", content: "Trusted roofing services for New Lambton families. Specialists in tile roof maintenance and aging roof replacement. Call (02) 4089 4613." }
    ]
  }
};

export default RoofersNewLambton;