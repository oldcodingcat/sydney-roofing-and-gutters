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

const RoofersTheHillNewcastle = () => {
  // Services Array (heritage focus)
  const services = [
    {
      icon: <Hammer className="h-8 w-8" />,
      title: "Roof Repairs",
      description: "Premium repairs for The Hill's elevated Victorian properties",
      link: "/roof-repairs"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Roof Replacement",
      description: "Heritage-appropriate replacements for period homes",
      link: "/roof-replacement"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Roof Restoration",
      description: "Expert Victorian terrace and slate roof restoration",
      link: "/roof-restoration"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Emergency Repairs",
      description: "Rapid response for storm damage on elevated properties",
      link: "/emergency-roof-repairs"
    }
  ];

  // Why Choose Us (heritage reasons)
  const whyChooseReasons = [
    {
      title: "Heritage Roofing Expertise",
      description: "Master craftsmen skilled in Victorian slate, terracotta, and period iron roofing"
    },
    {
      title: "Elevated Property Specialists",
      description: "Understanding of wind exposure and structural requirements for hill-top homes"
    },
    {
      title: "Period-Appropriate Materials",
      description: "Authentic restoration using traditional materials and techniques"
    },
    {
      title: "Trusted Heritage Contractors",
      description: "Proven track record preserving The Hill's architectural character"
    }
  ];

  // Suburbs list
  const suburbs = [
    "Cooks Hill", "Newcastle East", "Newcastle West", "Bar Beach",
    "Hamilton", "The Junction", "Wickham", "Islington",
    "Georgetown", "Merewether", "Carrington", "Stockton"
  ];

  // Testimonials (unique)
  const testimonials = [
    {
      name: "Christopher Barnes",
      location: "The Hill",
      rating: 5,
      text: "Our Victorian terrace roof was in desperate need of authentic restoration. The team's period roofing knowledge is exceptional. Perfect slate work that honors the home's 1880s heritage."
    },
    {
      name: "Rebecca Hamilton",
      location: "The Hill",
      rating: 5,
      text: "Wind exposure on The Hill is no joke. They reinforced our heritage roof with modern fixings hidden from view. Best of both worlds - authentic appearance with superior protection."
    },
    {
      name: "Simon Crawford",
      location: "The Hill",
      rating: 5,
      text: "Emergency terracotta repairs after severe winds. Quick arrival and expert heritage work. They understand The Hill's unique elevated heritage roofing challenges perfectly."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Leading Roofers in The Hill Newcastle | Best Heritage Roofing"
        description="Top heritage roofing specialists in The Hill, Newcastle. Expert Victorian roof restoration and elevated property roofing. Trusted since 2005. Call (02) 4089 4613."
        keywords="leading roofers the hill newcastle, best heritage roofing newcastle, expert victorian roof restoration, top elevated roofing, trusted the hill roofers"
        ogTitle="Leading Roofers in The Hill Newcastle | Best Heritage Roofing"
        ogDescription="Top specialists in heritage roof restoration and elevated inner-city properties in The Hill."
        ogImage="https://newcastlelocalroofers.com.au/images/roof-repairs-newcastle.jpg"
        schemaType="RoofingContractor"
        location="newcastle"
        customName="Leading Roofers in The Hill Newcastle"
        customDescription="Top heritage roofing specialists in The Hill, Newcastle NSW"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden bg-gradient-to-br from-primary to-[rgba(70,159,202,1)]">
        <div className="absolute inset-0 architectural-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
              The Hill's Premier Heritage Roofing Specialists
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Leading Roofers in The Hill Newcastle
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Expert heritage roof restoration for The Hill's iconic Victorian homes
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Serving The Hill</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>Heritage Roofing Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Trusted Since 2005</span>
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
                Heritage Roofing Specialists in The Hill Newcastle
              </h2>

              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Sydney Roofing & Gutters is the trusted choice for heritage roof restoration across The Hill's iconic Victorian terraces. Our licensed craftsmen combine traditional techniques with modern weather protection to preserve architectural character while ensuring elevated properties meet contemporary performance standards.
              </p>

              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                The Hill's elevated Victorian terraces present distinctive roofing requirements. Our heritage craftsmen excel at period roof restoration, combining authentic materials with contemporary weather protection. We're specialists in maintaining The Hill's architectural character while ensuring homes meet modern performance standards for this wind-exposed elevated location.
              </p>

              <div className="bg-muted/30 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Why The Hill Homeowners Choose Us
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
                From authentic slate and terracotta restoration to Victorian iron roof conservation, our team understands period-appropriate techniques. We use wind-rated fixings, concealed modern reinforcement, and breathable underlays designed for The Hill's elevated exposure conditions.
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
                Heritage Roofing Services in The Hill
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
                Why Choose Sydney Roofing & Gutters in The Hill?
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
                  The Hill Area Information
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
                        We carry out heritage-compliant roofing in coordination with council requirements and conservation guidelines for The Hill's historic properties.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Common Heritage Needs in The Hill</h3>
                    <ul className="space-y-2" style={{color: '#666666'}}>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Victorian slate roof restoration
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Terracotta tile repairs
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Elevated wind protection
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
              Additional Information About The Hill
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                The Hill rises above central Newcastle, showcasing the city's finest Victorian and Federation architecture. This elevated inner-city enclave appeals to young professionals and students who appreciate heritage character combined with urban lifestyle convenience.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-4">
                Elevated Heritage Roofing Challenges
              </h3>
              <p className="text-base leading-relaxed mb-4" style={{color: '#666666'}}>
                The Hill's elevated position creates specific heritage roofing demands:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span style={{color: '#666666'}}>
                    <strong>Wind intensification:</strong> Elevated Victorian terraces face stronger wind forces than sea-level properties
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span style={{color: '#666666'}}>
                    <strong>Period materials:</strong> Authentic terracotta and slate require specialized restoration techniques
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span style={{color: '#666666'}}>
                    <strong>Terrace roofing:</strong> Shared party walls and connected rooflines need coordinated approaches
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-primary mb-4">
                Heritage Restoration Expertise
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Sydney Roofing & Gutters provides specialized heritage roofing for The Hill's Victorian properties. Our craftsmen deliver authentic slate roof restoration, period terracotta tile repairs, Victorian iron roof conservation, wind-rated heritage fixings, and concealed modern reinforcement systems. We understand both heritage preservation and elevated exposure requirements.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-4">
                Central Newcastle Location
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Located off King Street or Brown Street, The Hill receives priority heritage service. Emergency response typically 10-15 minutes, with detailed heritage assessments and period-appropriate restoration quotations available.
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
  path: "/roofers-the-hill-newcastle/",
  element: <RoofersTheHillNewcastle />,
  handle: {
    title: "Leading Roofers in The Hill Newcastle | Best Heritage Roofing",
    meta: [
      { name: "description", content: "Top heritage roofing specialists in The Hill, Newcastle. Expert Victorian roof restoration. Call (02) 4089 4613." }
    ]
  }
};

export default RoofersTheHillNewcastle;


