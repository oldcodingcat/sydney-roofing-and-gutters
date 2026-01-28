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

const RoofersMayfield = () => {
  // Services Array (roofing)
  const services = [
    {
      icon: <Hammer className="h-8 w-8" />,
      title: "Roof Repairs",
      description: "Fast fixes for damaged roofs across Mayfield's homes and businesses",
      link: "/roof-repairs"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Roof Replacement",
      description: "Full roof replacements with quality materials and expert fitting",
      link: "/roof-replacement"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Roof Restoration",
      description: "Cleaning, repainting and resealing to refresh aging roofs",
      link: "/roof-restoration"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Emergency Repairs",
      description: "Immediate response service for urgent roofing problems in Mayfield",
      link: "/emergency-roof-repairs"
    }
  ];

  // Why Choose Us (reasons)
  const whyChooseReasons = [
    {
      title: "Mayfield Experience",
      description: "Over 15 years working on Mayfield properties with proven results"
    },
    {
      title: "Always Available",
      description: "24-hour emergency service for Mayfield homes and businesses"
    },
    {
      title: "Fully Qualified",
      description: "Licensed roofing professionals with comprehensive insurance"
    },
    {
      title: "Premium Results",
      description: "Top-quality materials combined with expert workmanship"
    }
  ];

  // Suburbs list
  const suburbs = [
    "Mayfield West", "Warabrook", "Tighes Hill", "Wallsend",
    "Jesmond", "Broadmeadow", "Hamilton", "Newcastle West",
    "Wickham", "Carrington", "Maryville", "Islington"
  ];

  // Testimonials
  const testimonials = [
    {
      name: "James Rodriguez",
      location: "Mayfield",
      rating: 5,
      text: "Quick response to our leaking warehouse roof. Fixed properly and the price was fair. Would definitely use again for commercial work."
    },
    {
      name: "Sarah McDonald",
      location: "Mayfield",
      rating: 5,
      text: "Replaced our entire tile roof last month. The crew was efficient and the cleanup was thorough. Very happy with the result."
    },
    {
      name: "Tom Phillips",
      location: "Mayfield",
      rating: 5,
      text: "Restored our old roof and it looks fantastic. Good communication from start to finish. Highly professional service."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Roofers in Mayfield | 24/7 Emergency Service | Sydney Roofing & Gutters"
        description="Expert roofing contractors in Mayfield, Newcastle. Specializing in emergency repairs, roof replacements and industrial roofing. Call (02) 4089 4613."
        keywords="roofers mayfield, roofing mayfield, roof repairs mayfield, industrial roofing mayfield, emergency roofer mayfield"
        ogTitle="Roofers in Mayfield | 24/7 Emergency Service"
        ogDescription="Expert roofing services in Mayfield. Emergency repairs, replacements, and restorations. Available 24/7."
        ogImage="https://newcastlelocalroofers.com.au/images/roof-repairs-newcastle.jpg"
        schemaType="RoofingContractor"
        location="newcastle"
        customName="Roofers in Mayfield"
        customDescription="Professional roofing services in Mayfield, Newcastle NSW"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden bg-gradient-to-br from-primary to-[rgba(70,159,202,1)]">
        <div className="absolute inset-0 architectural-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
              Mayfield Roofing Specialists
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Professional Roofers in Mayfield
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Expert roofing services available 24/7 for Mayfield's residential and industrial properties
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Serving Mayfield</span>
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

      {/* About Roofing in Mayfield */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Professional Roofing Services in Mayfield
              </h2>
              
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                For over 15 years, Sydney Roofing & Gutters has delivered exceptional roofing solutions to Mayfield property owners. Our qualified team handles everything from urgent repairs to full-scale roof installations across residential and commercial buildings.
              </p>

              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Mayfield presents distinct roofing challenges with its combination of industrial warehouses and family homes. Our contractors have specialized knowledge in both commercial flat roof systems and traditional residential pitched roofs, ensuring proper solutions for this diverse suburb's building stock.
              </p>

              <div className="bg-muted/30 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Why Mayfield Residents Choose Us
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span style={{color: '#666666'}}>
                      <strong>Emergency Availability:</strong> Round-the-clock response for urgent roof damage in Mayfield, minimizing disruption to your home or business operations.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span style={{color: '#666666'}}>
                      <strong>Suburb Expertise:</strong> Extensive experience with Mayfield's industrial and residential properties, including knowledge of local building requirements.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span style={{color: '#666666'}}>
                      <strong>Certified Professionals:</strong> Every project completed by licensed roofing specialists with full insurance coverage and industry qualifications.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span style={{color: '#666666'}}>
                      <strong>Upfront Pricing:</strong> Clear, detailed quotes for all Mayfield roofing projects with comprehensive breakdowns and no surprise charges.
                    </span>
                  </li>
                </ul>
              </div>

              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                From storm-damaged roofs requiring immediate attention to planned replacement projects, our experienced team delivers outstanding results. We're equipped to work with Colorbond steel, concrete and terracotta tiles, and commercial roofing membranes.
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
                Roofing Services in Mayfield
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
                Why Choose Sydney Roofing & Gutters in Mayfield?
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
                  Mayfield Area Information
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
                    <h3 className="text-xl font-semibold mb-3">Common Roofing Needs in Mayfield</h3>
                    <ul className="space-y-2" style={{color: '#666666'}}>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Industrial roof maintenance
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Commercial flat roof repairs
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Residential roof replacements
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
              Additional Information About Mayfield
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Mayfield sits in Newcastle's northwest, blending industrial zones with established residential streets. The suburb appeals to working families and business owners drawn by affordable properties and proximity to employment hubs.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-4">
                Common Roofing Issues in Mayfield
              </h3>
              <p className="text-base leading-relaxed mb-4" style={{color: '#666666'}}>
                Mayfield's industrial character creates specific roofing challenges:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span style={{color: '#666666'}}>
                    <strong>Industrial impact:</strong> Factory emissions can accelerate deterioration of roofing materials
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span style={{color: '#666666'}}>
                    <strong>Commercial roofing:</strong> Flat warehouse roofs require specialized maintenance and waterproofing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span style={{color: '#666666'}}>
                    <strong>Drainage concerns:</strong> Industrial properties need effective stormwater systems on low-pitch roofs
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-primary mb-4">
                Our Approach to Mayfield Properties
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Sydney Roofing & Gutters provides specialized roofing services for Mayfield's mixed property types. We handle commercial emergency callouts, residential roof maintenance programs, complete replacement installations, and restoration services for aging roofs. Our team understands both residential and light-industrial roofing requirements.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-6">
                <h4 className="text-lg font-semibold text-primary mb-2">
                  Fast Response for Mayfield Residents
                </h4>
                <p className="text-base leading-relaxed" style={{color: '#666666'}}>
                  We understand that roofing emergencies can't wait. That's why we offer 24/7 emergency service to Mayfield and surrounding suburbs. Call us anytime on <a href="tel:0240894613" className="text-primary font-semibold hover:underline">(02) 4089 4613</a> for immediate assistance.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-primary mb-4">
                Reaching Mayfield
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Access via Maitland Road or Hanbury Street makes Mayfield easily reachable. Our crews service this area frequently, with typical response times of 20-25 minutes for emergency situations or scheduled appointments for assessments and quotations.
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
  path: "/roofers-mayfield/",
  element: <RoofersMayfield />,
  handle: {
    title: "Roofers in Mayfield | 24/7 Emergency Service",
    meta: [
      { name: "description", content: "Expert roofing contractors in Mayfield, Newcastle. Specializing in emergency repairs, roof replacements and industrial roofing. Call (02) 4089 4613." }
    ]
  }
};

export default RoofersMayfield;