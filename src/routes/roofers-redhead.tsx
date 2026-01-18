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

const RoofersRedhead = () => {
  // Services Array (beach property focus)
  const services = [
    {
      icon: <Hammer className="h-8 w-8" />,
      title: "Roof Repairs",
      description: "Best beach property repairs for Redhead coastal homes",
      link: "/roof-repairs"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Roof Replacement",
      description: "Top-quality sand and salt-resistant roof systems",
      link: "/roof-replacement"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Roof Restoration",
      description: "Premium beach property restoration and protection",
      link: "/roof-restoration"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Emergency Repairs",
      description: "Leading emergency service for coastal storm damage",
      link: "/emergency-roof-repairs"
    }
  ];

  // Why Choose Us (coastal village reasons)
  const whyChooseReasons = [
    {
      title: "Coastal Roofing Specialists",
      description: "Engineered systems for sand, salt, and surf exposure in Redhead"
    },
    {
      title: "Marine-Grade Materials",
      description: "Corrosion-resistant fasteners, flashings, and coatings throughout"
    },
    {
      title: "Beach-Ready Designs",
      description: "Ventilation and drainage tailored for sandy environments"
    },
    {
      title: "Trusted Local Team",
      description: "Regularly servicing Redhead with fast emergency response"
    }
  ];

  // Suburbs list
  const suburbs = [
    "Jewells", "Belmont", "Belmont South", "Valentine",
    "Charlestown", "Adamstown Heights", "Tingira Heights", "Glendale",
    "Kahibah", "Whitebridge", "Dudley", "Caves Beach"
  ];

  // Testimonials (unique)
  const testimonials = [
    {
      name: "Craig Morrison",
      location: "Redhead",
      rating: 5,
      text: "Beach house needed specialized roofing for sand and salt. They installed sand-resistant systems that handle the coastal conditions perfectly. Top beachside roofers."
    },
    {
      name: "Natalie Brooks",
      location: "Redhead",
      rating: 5,
      text: "Our coastal property takes a beating from beach weather. Complete roof replacement with marine-grade materials has been fantastic. Best investment for beach living."
    },
    {
      name: "Daniel Wright",
      location: "Redhead",
      rating: 5,
      text: "Salt corrosion was destroying our roof near the beach. Their expertise in coastal roofing systems made all the difference. Highly recommend for Redhead properties."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Top Roofers in Redhead | Best Beach Property Roofing Specialists"
        description="Leading beachside roofing experts in Redhead. Premium sand and salt-resistant systems. Trusted by Redhead beach property owners. Call (02) 4089 4613."
        keywords="top roofers redhead, best beach roofing redhead, expert coastal roofing, premium beachside roofers, trusted redhead roofers"
        ogTitle="Top Roofers in Redhead | Best Beach Property Roofing"
        ogDescription="Expert roofing solutions for beachfront properties and coastal homes in Redhead."
        ogImage="https://newcastlelocalroofers.com.au/images/roof-repairs-newcastle.jpg"
        schemaType="RoofingContractor"
        location="newcastle"
        customName="Top Roofers in Redhead"
        customDescription="Leading beachside roofing experts in Redhead, Newcastle NSW"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden bg-gradient-to-br from-primary to-[rgba(70,159,202,1)]">
        <div className="absolute inset-0 architectural-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
              Redhead's Leading Beachside Roofing Specialists
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Top Roofers in Redhead
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Expert roofing solutions for beachfront properties and coastal homes
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Serving Redhead</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>Beach Property Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>24/7 Emergency Service</span>
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

      {/* About Section - Coastal Focus */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Premium Roofing for Redhead's Beach Properties
              </h2>

              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Our coastal roofing team delivers high-performance systems engineered for Redhead's beachside climate. We combine marine-grade components and beach-appropriate ventilation with the aesthetics homeowners expect from a premium installation.
              </p>

              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Redhead's beachfront environment presents intense roofing challenges. Sandy conditions combined with salt spray create accelerated wear on standard materials. Our beach property specialists use sand-resistant fixings, enhanced corrosion protection, and beach-appropriate ventilation systems designed specifically for coastal village conditions.
              </p>

              <div className="bg-muted/30 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Why Redhead Property Owners Choose Us
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
                We specify UV-stable coatings, corrosion-proof fasteners, sealed laps, and sand-managed ridge designs to ensure long-term performance. Every system is tailored to the precise wind exposure and proximity to surf zones in Redhead.
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
                Roofing Services in Redhead
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
                Why Choose Newcastle Local Roofers in Redhead?
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
                  Redhead Area Information
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
                      <p className="font-medium">Lake Macquarie City Council</p>
                      <p className="text-sm" style={{color: '#666666'}}>
                        We deliver roofing solutions aligned with coastal regulations and standards for beachside properties within Lake Macquarie City Council areas.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Common Roofing Needs in Redhead</h3>
                    <ul className="space-y-2" style={{color: '#666666'}}>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Sand-resistant ventilation upgrades
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Corrosion-proof fixings and flashings
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        UV-stable protective coatings
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
              Additional Information About Redhead
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Redhead sits on Lake Macquarie's stunning coastline, approximately 15km south of Newcastle. This coastal village combines pristine beaches with relaxed beachside living, attracting surfers and families seeking an authentic beach lifestyle.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-4">
                Beach Environment Roofing Challenges
              </h3>
              <p className="text-base leading-relaxed mb-4" style={{color: '#666666'}}>
                Redhead's sandy coastal location creates unique demands:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span style={{color: '#666666'}}>
                    <strong>Sand infiltration:</strong> Beach sand enters roof spaces and damages ventilation systems
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span style={{color: '#666666'}}>
                    <strong>Salt and sand combination:</strong> Dual assault accelerates corrosion beyond typical coastal exposure
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span style={{color: '#666666'}}>
                    <strong>Wind-driven particles:</strong> Sandy winds create abrasive damage to roof surfaces
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-primary mb-4">
                Premium Beach Property Solutions
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Newcastle Local Roofers provides specialized beach property roofing for Redhead homes. We deliver sand-resistant ventilation systems, enhanced marine-grade materials, beach-appropriate drainage design, corrosion-proof fixings throughout, and UV-resistant coatings for intense sun exposure. Every installation accounts for Redhead's unique sandy coastal environment.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-4">
                Coastal Village Access
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{color: '#666666'}}>
                Located off Lake Road or Redhead Road, our crews service this beachside community regularly. Emergency response averages 30-35 minutes, with comprehensive beach property assessments and specialized quotations available.
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
  path: "/roofers-redhead/",
  element: <RoofersRedhead />,
  handle: {
    title: "Top Roofers in Redhead | Best Beach Property Roofing",
    meta: [
      { name: "description", content: "Leading beachside roofing experts in Redhead. Premium sand and salt-resistant systems. Call (02) 4089 4613." }
    ]
  }
};

export default RoofersRedhead;


