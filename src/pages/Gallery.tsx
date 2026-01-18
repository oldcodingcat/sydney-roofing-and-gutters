import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBanner from "@/components/FloatingBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const categories = ["All", "Concrete", "Paver", "Natural Stone", "Pattern Concrete", "Landscaped"];

  const projects = [
    {
      id: 1,
      title: "Modern Concrete Driveway - Killara",
      category: "Concrete",
      location: "Killara, NSW",
      beforeImage: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=600&h=400&fit=crop",
      tags: ["Modern", "Exposed Aggregate", "Large"]
    },
    {
      id: 2,
      title: "Natural Stone Entrance - Mosman",
      category: "Natural Stone",
      location: "Mosman, NSW",
      beforeImage: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop",
      tags: ["Premium", "Sandstone", "Heritage"]
    },
    {
      id: 3,
      title: "Paver Driveway with Garden - Hornsby",
      category: "Paver",
      location: "Hornsby, NSW",
      beforeImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      tags: ["Landscaped", "Permeable", "Family"]
    },
    {
      id: 4,
      title: "Pattern Concrete Feature - Neutral Bay",
      category: "Pattern Concrete",
      location: "Neutral Bay, NSW",
      beforeImage: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop",
      tags: ["Decorative", "Stamped", "Contemporary"]
    },
    {
      id: 5,
      title: "Landscaped Gravel Drive - Chatswood",
      category: "Landscaped",
      location: "Chatswood, NSW",
      beforeImage: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=600&h=400&fit=crop",
      tags: ["Eco-Friendly", "Drainage", "Native Plants"]
    },
    {
      id: 6,
      title: "Exposed Aggregate - Lane Cove",
      category: "Concrete",
      location: "Lane Cove, NSW",
      beforeImage: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      tags: ["Textured", "Slip-Resistant", "Durable"]
    }
  ];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Driveway Gallery - Our Best Projects in Sydney"
        description="View our portfolio of completed driveway projects across Sydney. Concrete, brick, paver, and natural stone driveways showcasing our expertise."
        keywords="driveway gallery sydney, concrete driveway projects, paver driveway examples, brick driveway photos, natural stone driveways"
        ogTitle="Driveway Gallery - Our Best Projects"
        ogDescription="Explore our portfolio of beautifully crafted driveways across Sydney. Quality workmanship and design excellence."
        ogImage="https://drivewayssydney.com.au/images/concrete-driveways.jpg"
        schemaType="LocalBusiness"
        location="newcastle"
        customName="Driveways Sydney"
        customDescription="Professional driveway construction services in Sydney"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0 architectural-grid opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center text-white">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-bold architectural-heading mb-6">
              Project Gallery
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Explore our portfolio of beautifully designed and expertly constructed 
              driveways across Sydney's finest suburbs.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-muted/30 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden group">
                <div className="relative">
                  {/* Before/After Slider */}
                  <div className="aspect-video relative overflow-hidden">
                    <div className="absolute inset-0 grid grid-cols-2">
                      <div className="relative">
                        <img 
                          src={project.beforeImage} 
                          alt={`${project.title} - Before`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 left-2">
                          <Badge variant="secondary" className="bg-black/50 text-white">
                            Before
                          </Badge>
                        </div>
                      </div>
                      <div className="relative">
                        <img 
                          src={project.afterImage} 
                          alt={`${project.title} - After`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge variant="default">
                            After
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => setLightboxImage(project.afterImage)}
                      >
                        <ZoomIn className="h-4 w-4 mr-2" />
                        View Larger
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline">{project.category}</Badge>
                    <span className="text-sm text-muted-foreground">{project.location}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg">
              Load More Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={() => setLightboxImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <img 
              src={lightboxImage} 
              alt="Project detail"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Dream Driveway?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Let our architect-led team design and build a beautiful, functional driveway 
            that enhances your property's value and curb appeal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Get Free Quote
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary" asChild>
              <a href="/contact-us">
                Schedule Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingBanner />
    </div>
  );
};

export default Gallery;