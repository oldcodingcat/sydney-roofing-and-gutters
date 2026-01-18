import type { Route } from "react-router";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBanner from "@/components/FloatingBanner";
import Testimonials from "@/components/TestimonialsNew";
import ContactCTA from "@/components/ContactCTA";
import ServiceAreas from "@/components/ServiceAreas";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, Award, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Locations() {
  const serviceAreas = [
    {
      name: "The Hills District",
      description: "Premium driveway services in one of Sydney's most prestigious areas",
      suburbs: "Baulkham Hills, Castle Hill, Kellyville, Rouse Hill",
      link: "/locations/driveways-in-the-hills",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=300&fit=crop"
    },
    {
      name: "North Shore",
      description: "Expert driveway construction for North Shore's premium properties",
      suburbs: "Chatswood, Hornsby, Pymble, Turramurra",
      link: "/locations/driveways-north-shore",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop"
    },
    {
      name: "Eastern Suburbs",
      description: "Coastal driveway specialists serving Sydney's eastern communities",
      suburbs: "Bondi, Coogee, Randwick, Maroubra",
      link: "/locations/driveways-eastern-suburbs",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=300&fit=crop"
    },
    {
      name: "Inner West",
      description: "Heritage-sensitive driveway solutions for Inner West homes",
      suburbs: "Newtown, Leichhardt, Marrickville, Balmain",
      link: "/locations/driveways-inner-west",
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=300&fit=crop"
    },
    {
      name: "Western Sydney",
      description: "Comprehensive driveway services across Western Sydney",
      suburbs: "Penrith, Blacktown, Parramatta, Liverpool",
      link: "/locations/driveways-western-sydney",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop"
    },
    {
      name: "Southern Sydney",
      description: "Quality driveway construction for Southern Sydney homes",
      suburbs: "Sutherland, Cronulla, Hurstville, Bankstown",
      link: "/locations/driveways-southern-sydney",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=300&fit=crop"
    },
    {
      name: "Northern Beaches",
      description: "Coastal driveway specialists for the Northern Beaches",
      suburbs: "Manly, Avalon, Mona Vale, Dee Why",
      link: "/locations/driveways-northern-beaches",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop"
    },
    {
      name: "CBD & City Fringe",
      description: "Urban driveway solutions for city and fringe properties",
      suburbs: "Pyrmont, Surry Hills, Redfern, Paddington",
      link: "/locations/driveways-cbd-city",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=300&fit=crop"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Service Areas | Driveways Sydney Locations"
        description="Professional driveway services across all Sydney areas including The Hills District, North Shore, Eastern Suburbs, Inner West, Western Sydney, Southern Sydney, Northern Beaches, and CBD."
        keywords="driveway services sydney, service areas, hills district, north shore, eastern suburbs, inner west, western sydney, southern sydney, northern beaches, cbd, locations"
        schemaType="LocalBusiness"
        location="newcastle"
        customName="Driveways Sydney"
        customDescription="Professional driveway construction services across all Sydney areas"
      />
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 text-white overflow-hidden bg-gradient-to-br from-primary to-[rgba(70,159,202,1)]">
          <div className="absolute inset-0 architectural-pattern opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
                Driveways Specialists
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Driveway Services in Sydney
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Premium driveway construction and maintenance across Sydney
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>Serving all Sydney suburbs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  <span>200+ Projects Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>15+ Years Local Experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <ServiceAreas />

        {/* Testimonials */}
        <Testimonials />

        <ContactCTA />
        <FloatingBanner />
        <Footer />
      </div>
    </>
  );
}

export const route = {
  path: "/locations/",
  element: <Locations />,
  handle: {
    title: "Service Areas | Driveways Sydney Locations",
    meta: [
      { name: "description", content: "Professional driveway services across all Sydney areas including The Hills District, North Shore, Eastern Suburbs, Inner West, Western Sydney, Southern Sydney, Northern Beaches, and CBD." },
      { name: "keywords", content: "driveway services sydney, service areas, hills district, north shore, eastern suburbs, inner west, western sydney, southern sydney, northern beaches, cbd, locations" }
    ]
  }
};
