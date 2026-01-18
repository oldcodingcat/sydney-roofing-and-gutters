import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBanner from "@/components/FloatingBanner";
import FeaturedProjects from "@/components/FeaturedProjects";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Star,
  Award,
  Users,
  Hammer,
  Truck,
  Shield,
  Building
} from "lucide-react";

const RoofersCarrington = () => {
  const services = [
    {
      icon: <Hammer className="h-8 w-8" />,
      title: "Roof Repairs",
      description: "Emergency repairs and maintenance for Carrington properties",
      link: "/roof-repairs"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Roof Replacement",
      description: "Complete roof replacement using premium materials",
      link: "/roof-replacement"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Roof Restoration",
      description: "Professional cleaning, painting and sealing services",
      link: "/roof-restoration"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Emergency Repairs",
      description: "24/7 emergency roofing service in Carrington",
      link: "/emergency-roof-repairs"
    }
  ];

  const whyChooseReasons = [
    {
      title: "Local Newcastle Experience",
      description: "15+ years serving Carrington and surrounding Newcastle suburbs"
    },
    {
      title: "24/7 Emergency Service",
      description: "Round-the-clock emergency repairs for Carrington residents"
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

  const suburbs = [
    "Wickham", "Tighes Hill", "Islington", "Stockton",
    "Newcastle West", "The Junction", "Bar Beach", "Merewether",
    "Hamilton", "Mayfield", "Georgetown", "Waratah"
  ];

  const testimonials = [
    {
      name: "Michael Thompson",
      location: "Carrington",
      rating: 5,
      text: "Excellent roofing service! They responded quickly to our emergency leak and fixed it professionally. Highly recommend for Carrington residents."
    },
    {
      name: "Lisa Chen",
      location: "Carrington",
      rating: 5,
      text: "Professional team who completed our roof replacement on time and within budget. Great communication throughout the entire process."
    },
    {
      name: "David Wilson",
      location: "Carrington",
      rating: 5,
      text: "Outstanding roof restoration work. Our 20-year-old tiles look brand new. The team was respectful and cleaned up perfectly."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Roofers in Carrington | 24/7 Emergency Service | Newcastle Local Roofers"
        description="Professional roofing services in Carrington, Newcastle. Emergency repairs, roof replacement, restoration. Licensed & insured. Call (02) 4089 4613 for free quote."
        keywords="roofers carrington, roofing carrington, roof repairs carrington, emergency roofer carrington, newcastle roofers"
        ogTitle="Roofers in Carrington | 24/7 Emergency Service"
        ogDescription="Expert roofing services in Carrington. Emergency repairs, replacements, and restorations. Available 24/7."
        ogImage="https://newcastlelocalroofers.com.au/images/roof-repairs-newcastle.jpg"
        schemaType="RoofingContractor"
        location="newcastle"
        customName="Roofers in Carrington"
        customDescription="Professional roofing services in Carrington, Newcastle NSW"
      />
      <Header />

      <section className="relative py-20 text-white overflow-hidden bg-gradient-to-br from-primary to-[rgba(70,159,202,1)]">
        <div className="absolute inset-0 architectural-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
              Carrington Roofing Specialists
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Professional Roofers in Carrington
            </h1>
            <p className="text-lg md:text-xl mb-2 opacity-90">
              24/7 emergency roofing services for Carrington and surrounding Newcastle areas
            </p>
            <p className="text-sm md:text-base mb-8 opacity-90">
              Historic waterfront suburb with character homes and industrial heritage
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Serving Carrington</span>
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

      {/* About Roofing in Carrington */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Professional Roofing Services in Carrington
              </h2>
              
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Newcastle Local Roofers has been providing expert roofing services to Carrington residents for over 15 years. Our team of licensed and insured roofers specializes in all aspects of residential and commercial roofing, from emergency repairs to complete roof replacements.
              </p>

              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                We understand the unique roofing challenges that Carrington properties face, including historic waterfront properties with unique architectural features. With many character homes that require specialized roofing expertise, our team ensures your roof maintains its heritage appeal while meeting modern performance standards.
              </p>

              <div className="bg-muted/30 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Why Carrington Residents Choose Us
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span style={{color: '#666666'}}>
                      <strong>24/7 Emergency Response:</strong> When you need urgent roof repairs in Carrington, we're available around the clock to prevent further damage to your property.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span style={{color: '#666666'}}>
                      <strong>Local Knowledge:</strong> As Carrington specialists, we understand local building codes, weather patterns, and common roofing issues in the area.
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
                      <strong>Competitive Pricing:</strong> We offer transparent, no-obligation quotes for all roofing services in Carrington, with no hidden costs.
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

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Roofing Services in Carrington
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

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Why Choose Newcastle Local Roofers in Carrington?
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

      <FeaturedProjects />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">
                  Carrington Area Information
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
                    <h3 className="text-xl font-semibold mb-3">Common Roofing Needs in Carrington</h3>
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
              Additional Information About Carrington
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Carrington is a historic waterfront suburb located in Newcastle Harbour, west of Newcastle CBD. Known for its industrial heritage and character homes, the area attracts history enthusiasts and families who value unique character and waterfront access.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-4">
                Common Roofing Issues in Carrington
              </h3>
              <p className="text-base leading-relaxed mb-4" style={{color: '#666666'}}>
                Due to Carrington's waterfront position and maritime weather, properties in the area commonly experience:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span style={{color: '#666666'}}>
                    <strong>Weather-related damage:</strong> Heritage roof maintenance on older character homes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span style={{color: '#666666'}}>
                    <strong>Material deterioration:</strong> Salt air damage to metal roofing components
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span style={{color: '#666666'}}>
                    <strong>Structural concerns:</strong> Water damage from harbour-side weather systems
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-primary mb-4">
                Our Roofing Solutions for Carrington
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                At Newcastle Local Roofers, we provide comprehensive roofing solutions tailored to Carrington properties. Our services include emergency repairs for storm damage, preventative maintenance to extend your roof's lifespan, complete roof replacements with modern materials, and roof restoration to improve both appearance and performance. All work is carried out by licensed professionals who understand the specific requirements of Carrington homes.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-6">
                <h4 className="text-lg font-semibold text-primary mb-2">
                  Fast Response for Carrington Residents
                </h4>
                <p className="text-base leading-relaxed" style={{color: '#666666'}}>
                  We understand that roofing emergencies can't wait. That's why we offer 24/7 emergency service to Carrington and surrounding suburbs. Call us anytime on <a href="tel:0240894613" className="text-primary font-semibold hover:underline">(02) 4089 4613</a> for immediate assistance.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-primary mb-4">
                Getting to Carrington
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Carrington is easily accessible from Hannell Street or via Stockton Bridge. Our roofing team services Carrington regularly and can typically arrive on-site within 20-30 minutes for emergency calls, or schedule convenient appointments for inspections and quotes.
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
  path: "/roofers-carrington/",
  element: <RoofersCarrington />,
  handle: {
    title: "Roofers in Carrington | 24/7 Emergency Service",
    meta: [
      { name: "description", content: "Professional roofing services in Carrington. Emergency repairs, roof replacements and restorations. Call (02) 4089 4613." },
      { name: "keywords", content: "roofers carrington, roofing carrington, roof repairs carrington, emergency roofer carrington" }
    ]
  }
};

export default RoofersCarrington;
