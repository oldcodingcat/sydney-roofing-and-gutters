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

const RoofersMerewether = () => {
  // Services Array (roofing)
  const services = [
    {
      icon: <Hammer className="h-8 w-8" />,
      title: "Roof Repairs",
      description: "Coastal-specific repairs for Merewether beachside homes",
      link: "/roof-repairs"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Roof Replacement",
      description: "Premium replacements using salt-resistant materials",
      link: "/roof-replacement"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Roof Restoration",
      description: "Restoration and protective coating for coastal properties",
      link: "/roof-restoration"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Emergency Repairs",
      description: "Storm damage response for Merewether residents",
      link: "/emergency-roof-repairs"
    }
  ];

  // Why Choose Us (reasons)
  const whyChooseReasons = [
    {
      title: "Coastal Expertise",
      description: "Specialized knowledge in salt-resistant roofing for beachside properties"
    },
    {
      title: "Premium Materials",
      description: "Marine-grade components designed for harsh coastal environments"
    },
    {
      title: "Storm Response",
      description: "Rapid emergency service for coastal weather damage"
    },
    {
      title: "Quality Craftsmanship",
      description: "Expert installation using corrosion-resistant fixings and materials"
    }
  ];

  // Suburbs list
  const suburbs = [
    "Bar Beach", "The Junction", "Merewether Heights", "Hamilton South",
    "Adamstown Heights", "The Hill", "Cooks Hill", "Hamilton",
    "Broadmeadow", "Newcastle West", "Adamstown", "Garden Suburb"
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Robert Chen",
      location: "Merewether",
      rating: 5,
      text: "Our beachfront property needed salt-resistant roofing materials. The team delivered exceptional results with marine-grade components. Perfect for coastal conditions."
    },
    {
      name: "Jennifer Walsh",
      location: "Merewether",
      rating: 5,
      text: "Storm damaged our roof tiles near the beach. Quick emergency response and quality repairs. They understand coastal roofing challenges."
    },
    {
      name: "Andrew Mitchell",
      location: "Merewether",
      rating: 5,
      text: "Complete roof replacement on our Merewether home. Premium materials and expert installation. Worth every dollar for the beachside location."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Roofers in Merewether | Premium Coastal Roofing | Newcastle"
        description="Premium roofing services for Merewether's beachside properties. Specialists in salt-resistant materials and coastal installations. Call (02) 4089 4613."
        keywords="roofers merewether, coastal roofing merewether, beach property roofing, salt resistant roofing, merewether beach roofers"
        ogTitle="Roofers in Merewether | Premium Coastal Roofing"
        ogDescription="Premium roofing services for Merewether's beachside properties. Specialists in salt-resistant materials."
        ogImage="https://newcastlelocalroofers.com.au/images/roof-repairs-newcastle.jpg"
        schemaType="RoofingContractor"
        location="newcastle"
        customName="Roofers in Merewether"
        customDescription="Premium roofing services for Merewether, Newcastle NSW"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden bg-gradient-to-br from-primary to-[rgba(70,159,202,1)]">
        <div className="absolute inset-0 architectural-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
              Merewether Coastal Roofing Experts
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Premium Roofers in Merewether
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Specialist roofing solutions for Newcastle's premier beachside suburb
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Serving Merewether</span>
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

      {/* About Roofing in Merewether */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Premium Roofing Services in Merewether
              </h2>
              
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Sydney Roofing & Gutters has been delivering exceptional roofing solutions to Merewether's prestigious beachside properties for over 15 years. Our team specializes in premium coastal installations using marine-grade materials designed to withstand the harsh beachside environment.
              </p>

              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Merewether's beachfront location demands specialized roofing expertise. Our team understands how salt spray, coastal winds, and intense sun exposure affect premium roofing materials. We use marine-grade fixings and corrosion-resistant materials designed for harsh coastal environments.
              </p>

              <div className="bg-muted/30 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Why Merewether Residents Choose Us
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span style={{color: '#666666'}}>
                      <strong>Coastal Specialization:</strong> Expert knowledge of salt-resistant materials and marine-grade roofing systems perfect for beachside properties.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span style={{color: '#666666'}}>
                      <strong>Premium Materials:</strong> We use only the highest quality, corrosion-resistant roofing components designed for coastal environments.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span style={{color: '#666666'}}>
                      <strong>Storm Response:</strong> Rapid emergency service for coastal weather damage, with priority response for beachfront properties.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span style={{color: '#666666'}}>
                      <strong>Quality Assurance:</strong> All coastal installations come with extended warranties and premium workmanship guarantees.
                    </span>
                  </li>
                </ul>
              </div>

              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                From storm damage repairs to complete premium roof replacements, our experienced team delivers outstanding results for Merewether's high-end properties. We work with Colorbond steel with enhanced corrosion protection, premium tile systems with wind ratings, and specialized coastal roofing membranes.
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
                Coastal Roofing Services in Merewether
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
                Why Choose Sydney Roofing & Gutters in Merewether?
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
                  Merewether Area Information
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
                    <h3 className="text-xl font-semibold mb-3">Common Coastal Roofing Needs</h3>
                    <ul className="space-y-2" style={{color: '#666666'}}>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Salt corrosion repairs
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Storm damage restoration
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        UV-resistant coatings
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Marine-grade installations
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
              Additional Information About Merewether
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Merewether occupies Newcastle's southern beachfront, approximately 5km from the CBD. This prestigious coastal suburb features the iconic Merewether Beach and attracts affluent families seeking premium beachside living.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-4">
                Coastal Roofing Challenges in Merewether
              </h3>
              <p className="text-base leading-relaxed mb-4" style={{color: '#666666'}}>
                Direct ocean exposure creates unique roofing demands:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span style={{color: '#666666'}}>
                    <strong>Corrosion acceleration:</strong> Salt spray rapidly corrodes standard roofing metals and fixings
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span style={{color: '#666666'}}>
                    <strong>Storm intensity:</strong> Coastal weather systems bring high winds and driving rain
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span style={{color: '#666666'}}>
                    <strong>Sun degradation:</strong> North-facing roof surfaces experience accelerated UV breakdown
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-primary mb-4">
                Premium Roofing for Merewether
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Sydney Roofing & Gutters delivers specialized coastal roofing for Merewether properties. We use marine-grade Colorbond, premium tile systems with enhanced wind ratings, UV-resistant coatings, and corrosion-proof fixings throughout. Every installation considers the harsh beachside environment.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-6">
                <h4 className="text-lg font-semibold text-primary mb-2">
                  Fast Response for Merewether Residents
                </h4>
                <p className="text-base leading-relaxed" style={{color: '#666666'}}>
                  We understand that coastal roofing emergencies can't wait. That's why we offer 24/7 emergency service to Merewether and surrounding suburbs. Call us anytime on <a href="tel:0240894613" className="text-primary font-semibold hover:underline">(02) 4089 4613</a> for immediate assistance.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-primary mb-4">
                Location & Access
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Located off Merewether Road and The Esplanade, this beachside suburb is serviced regularly by our crews. Emergency response typically within 20-25 minutes, with scheduled appointments available for inspections and detailed quotes.
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
  path: "/roofers-merewether/",
  element: <RoofersMerewether />,
  handle: {
    title: "Roofers in Merewether | Premium Coastal Roofing",
    meta: [
      { name: "description", content: "Premium roofing services for Merewether's beachside properties. Specialists in salt-resistant materials and coastal installations. Call (02) 4089 4613." }
    ]
  }
};

export default RoofersMerewether;