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

const RoofersSoldiersPoint = () => {
  // Services Array (waterfront focus)
  const services = [
    {
      icon: <Hammer className="h-8 w-8" />,
      title: "Roof Repairs",
      description: "Premium repairs for Soldiers Point waterfront properties",
      link: "/roof-repairs"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Roof Replacement",
      description: "Best marina-grade installations for bay-side homes",
      link: "/roof-replacement"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Roof Restoration",
      description: "Expert restoration for holiday and permanent waterfront homes",
      link: "/roof-restoration"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Emergency Repairs",
      description: "Rapid response for bay weather storm damage",
      link: "/emergency-roof-repairs"
    }
  ];

  // Why Choose Us (waterfront reasons)
  const whyChooseReasons = [
    {
      title: "Waterfront Roofing Experts",
      description: "Specialized knowledge of marina environments and bay-side property requirements"
    },
    {
      title: "Marina-Grade Materials",
      description: "Corrosion-resistant systems designed for sheltered bay conditions"
    },
    {
      title: "Holiday Property Specialists",
      description: "Understanding of seasonal occupancy and maintenance needs"
    },
    {
      title: "Premium Resort Standards",
      description: "High-quality finishing matching Port Stephens' resort community standards"
    }
  ];

  // Suburbs list
  const suburbs = [
    "Nelson Bay", "Salamander Bay", "Corlette", "Fingal Bay",
    "Shoal Bay", "Anna Bay", "Boat Harbour", "Taylors Beach",
    "One Mile", "Stockton", "Fern Bay", "Fullerton Cove"
  ];

  // Testimonials (unique)
  const testimonials = [
    {
      name: "Richard Hamilton",
      location: "Soldiers Point",
      rating: 5,
      text: "Our waterfront property needed marina-appropriate roofing. They installed salt-resistant systems perfect for bay-side conditions. Premium work for this beautiful Port Stephens location."
    },
    {
      name: "Catherine Bennett",
      location: "Soldiers Point",
      rating: 5,
      text: "Holiday home roof restoration completed perfectly. They understand seasonal property needs and marine environment challenges. Best waterfront roofers in Port Stephens."
    },
    {
      name: "Steven Walsh",
      location: "Soldiers Point",
      rating: 5,
      text: "Marina salt air was corroding our roof fixtures. Complete upgrade with marine-grade materials has been outstanding. They know Soldiers Point's waterfront conditions perfectly."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Premium Roofers in Soldiers Point | Best Waterfront Roofing Experts"
        description="Top waterfront roofing specialists in Soldiers Point. Expert marina and bay-side property roofing. Trusted by Port Stephens residents. Call (02) 4089 4613."
        keywords="premium roofers soldiers point, best waterfront roofing port stephens, expert marina roofing, top bayside roofers, trusted soldiers point roofers"
        ogTitle="Premium Roofers in Soldiers Point | Best Waterfront Roofing"
        ogDescription="Top specialists in waterfront and marina property roofing in Soldiers Point."
        ogImage="https://newcastlelocalroofers.com.au/images/roof-repairs-newcastle.jpg"
        schemaType="RoofingContractor"
        location="newcastle"
        customName="Premium Roofers in Soldiers Point"
        customDescription="Top waterfront roofing specialists in Soldiers Point, Port Stephens NSW"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden bg-gradient-to-br from-primary to-[rgba(70,159,202,1)]">
        <div className="absolute inset-0 architectural-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
              Soldiers Point's Premier Waterfront Roofing Specialists
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Premium Roofers in Soldiers Point
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Expert roofing solutions for waterfront properties and marina homes
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Serving Soldiers Point</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>Waterfront Roofing Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Port Stephens Experts</span>
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

      {/* About Section - Waterfront Focus */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Premium Waterfront Roofing in Soldiers Point
              </h2>

              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Our waterfront roofing team delivers specialized solutions for Soldiers Point's marina and bay-side properties. We understand both holiday home requirements and permanent residence needs, providing roofing systems tailored to Port Stephens' premier waterfront community.
              </p>

              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Soldiers Point's sheltered bay environment presents distinct roofing considerations. Marina proximity and waterfront positions create salt exposure without extreme ocean conditions. Our waterfront specialists understand holiday home requirements and permanent residence needs, delivering roofing solutions for this premier Port Stephens location. We address both seasonal property challenges and year-round marine environment demands.
              </p>

              <div className="bg-muted/30 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Why Soldiers Point Property Owners Choose Us
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
                We specify marina-grade corrosion protection, holiday home maintenance programs, and resort-quality finishing standards. Every installation accounts for Soldiers Point's unique sheltered bay environment and premium waterfront lifestyle expectations.
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
                Waterfront Roofing Services in Soldiers Point
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
                Why Choose Newcastle Local Roofers in Soldiers Point?
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
                  Soldiers Point Area Information
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
                      <p className="font-medium">Port Stephens Council</p>
                      <p className="text-sm" style={{color: '#666666'}}>
                        We deliver roofing solutions aligned with Port Stephens Council standards for waterfront properties.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Common Roofing Needs in Soldiers Point</h3>
                    <ul className="space-y-2" style={{color: '#666666'}}>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Marina-grade corrosion protection
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Holiday home maintenance
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Bay weather storm protection
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Resort-quality finishing
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
              Additional Information About Soldiers Point
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Soldiers Point extends into Port Stephens' sheltered waters, approximately 30km northeast of Newcastle. This waterfront resort community features marina facilities and premium bay-side properties, attracting retirees and holiday home owners seeking waterfront lifestyle with resort amenities.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-4">
                Waterfront Property Roofing Challenges
              </h3>
              <p className="text-base leading-relaxed mb-4" style={{color: '#666666'}}>
                Soldiers Point's sheltered bay position creates specific demands:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span style={{color: '#666666'}}>
                    <strong>Marina environment:</strong> Salt air from marine facilities requires corrosion-resistant materials
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span style={{color: '#666666'}}>
                    <strong>Holiday property needs:</strong> Seasonal occupancy creates unique maintenance requirements
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span style={{color: '#666666'}}>
                    <strong>Bay weather systems:</strong> Sheltered position still faces storm damage from bay conditions
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-primary mb-4">
                Premium Waterfront Solutions
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Newcastle Local Roofers provides specialized waterfront roofing for Soldiers Point properties. We deliver marina-grade corrosion protection, holiday home maintenance programs, permanent residence installations, bay-appropriate material selection, and resort-quality finishing standards. Our team understands both seasonal property challenges and premium waterfront living requirements.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-4">
                Port Stephens Access
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Located off Nelson Bay Road via Salamander Bay, Soldiers Point receives regular waterfront specialist service. Emergency response averages 45-50 minutes, with comprehensive waterfront property assessments and premium resort-quality quotations available.
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
  path: "/roofers-soldiers-point/",
  element: <RoofersSoldiersPoint />,
  handle: {
    title: "Premium Roofers in Soldiers Point | Best Waterfront Roofing",
    meta: [
      { name: "description", content: "Top waterfront roofing specialists in Soldiers Point. Expert marina and bay-side property roofing. Call (02) 4089 4613." }
    ]
  }
};

export default RoofersSoldiersPoint;


