import type { Route } from "react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBanner from "@/components/FloatingBanner";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Calendar, Ruler } from "lucide-react";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Concrete Driveway",
      location: "Killara, NSW",
      type: "Exposed Aggregate Concrete",
      area: "180m²",
      duration: "5 days",
      description: "A stunning contemporary concrete driveway featuring exposed aggregate finish with integrated lighting and landscape borders.",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop",
      tags: ["Premium", "Modern", "Lighting"],
      slug: "modern-concrete-driveway-killara"
    },
    {
      id: 2,
      title: "Heritage Sandstone Entry",
      location: "Mosman, NSW",
      type: "Natural Sandstone",
      area: "120m²",
      duration: "7 days",
      description: "Elegant heritage-style driveway using locally sourced Sydney sandstone with traditional laying patterns.",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=600&h=400&fit=crop",
      tags: ["Heritage", "Premium", "Sandstone"],
      slug: "heritage-sandstone-mosman"
    },
    {
      id: 3,
      title: "Eco-Friendly Paver Design",
      location: "Hornsby, NSW",
      type: "Permeable Pavers",
      area: "200m²",
      duration: "6 days",
      description: "Sustainable paver driveway with integrated stormwater management and native landscaping elements.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      tags: ["Eco-Friendly", "Permeable", "Landscaped"],
      slug: "eco-paver-hornsby"
    },
    {
      id: 4,
      title: "Pattern Concrete Feature",
      location: "Neutral Bay, NSW",
      type: "Stamped Pattern Concrete",
      area: "150m²",
      duration: "4 days",
      description: "Decorative stamped concrete driveway with custom pattern design mimicking natural stone texture.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=600&h=400&fit=crop",
      tags: ["Decorative", "Custom", "Textured"],
      slug: "pattern-concrete-neutral-bay"
    },
    {
      id: 5,
      title: "Luxury Natural Stone",
      location: "Lane Cove, NSW",
      type: "Bluestone Pavers",
      area: "250m²",
      duration: "8 days",
      description: "Premium bluestone paver installation with precision cutting and seamless integration with existing architecture.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop",
      tags: ["Luxury", "Bluestone", "Precision"],
      slug: "luxury-bluestone-lane-cove"
    },
    {
      id: 6,
      title: "Contemporary Gravel Design",
      location: "Chatswood, NSW",
      type: "Landscaped Gravel",
      area: "180m²",
      duration: "3 days",
      description: "Modern gravel driveway with architectural edging, drainage system, and integrated garden features.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      tags: ["Modern", "Drainage", "Gardens"],
      slug: "gravel-design-chatswood"
    },
    {
      id: 7,
      title: "Family-Friendly Concrete",
      location: "Wahroonga, NSW",
      type: "Broom Finish Concrete",
      area: "220m²",
      duration: "5 days",
      description: "Practical and beautiful concrete driveway with non-slip broom finish, perfect for families with young children.",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=600&h=400&fit=crop",
      tags: ["Family", "Safety", "Practical"],
      slug: "family-concrete-wahroonga"
    },
    {
      id: 8,
      title: "Artistic Paver Mosaic",
      location: "Cremorne, NSW",
      type: "Designer Pavers",
      area: "140m²",
      duration: "6 days",
      description: "Unique paver design featuring custom mosaic patterns and contrasting materials for a truly artistic entrance.",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop",
      tags: ["Artistic", "Custom", "Unique"],
      slug: "paver-mosaic-cremorne"
    },
    {
      id: 9,
      title: "Minimalist Stone Strips",
      location: "Willoughby, NSW",
      type: "Stone Strip Design",
      area: "160m²",
      duration: "7 days",
      description: "Clean, minimalist design using alternating stone strips with grass joints for a contemporary architectural look.",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=600&h=400&fit=crop",
      tags: ["Minimalist", "Contemporary", "Stone"],
      slug: "stone-strips-willoughby"
    },
    {
      id: 10,
      title: "Circular Feature Drive",
      location: "Roseville, NSW",
      type: "Mixed Material Design",
      area: "300m²",
      duration: "10 days",
      description: "Grand circular driveway combining multiple materials including concrete, pavers, and natural stone feature elements.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop",
      tags: ["Grand", "Mixed Materials", "Feature"],
      slug: "circular-drive-roseville"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Recent Projects | Driveways Sydney Completed Work"
        description="Discover the breadth and quality of our work across Sydney. Each project represents our commitment to architectural excellence and construction mastery."
        keywords="Sydney driveway projects, completed driveways, concrete driveways, paver driveways, natural stone driveways, driveway portfolio, Sydney suburbs"
        ogTitle="Recent Projects | Driveways Sydney Completed Work"
        ogDescription="Discover the breadth and quality of our work across Sydney. Each project represents our commitment to architectural excellence and construction mastery."
        schemaType="LocalBusiness"
        location="newcastle"
        customName="Driveways Sydney"
        customDescription="Professional driveway construction services in Sydney - View our completed projects"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0 architectural-grid opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center text-white">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-bold architectural-heading mb-6">
              Our Projects
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover the breadth and quality of our work across Sydney. Each project 
              represents our commitment to architectural excellence and construction mastery.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-black/50 text-white">
                      {project.type}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Project Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Ruler className="h-4 w-4 text-[#666666]" />
                      <span>{project.area}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-[#666666]" />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full group/btn" asChild>
                    <a href={`/projects/${project.slug}`}>
                      View Project Details
                      <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Project Portfolio Overview</h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              Our diverse portfolio showcases the range and quality of our architect-designed driveways
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-white/90">Driveways Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-white/90">Sydney Suburbs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">10+</div>
              <div className="text-white/90">Material Types</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-white/90">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground mb-8">
              Every great driveway starts with a conversation. Let's discuss your vision 
              and create something exceptional together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Get Free Consultation
              </Button>
              <Button variant="outline" size="lg">
                View Gallery
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingBanner />
    </div>
  );
};

export const route: Route = {
  path: "/projects/",
  element: <ProjectsPage />,
  handle: {
    title: "Recent Projects | Driveways Sydney Completed Work",
    meta: [
      { name: "description", content: "Discover the breadth and quality of our work across Sydney. Each project represents our commitment to architectural excellence and construction mastery." },
      { name: "keywords", content: "Sydney driveway projects, completed driveways, concrete driveways, paver driveways, natural stone driveways, driveway portfolio, Sydney suburbs" }
    ]
  }
};

export default ProjectsPage;
