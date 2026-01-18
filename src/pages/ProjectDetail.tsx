import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBanner from "@/components/FloatingBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Calendar, Ruler, Users, Star, CheckCircle } from "lucide-react";

const ProjectDetail = () => {
  const relatedProjects = [
    {
      title: "Heritage Sandstone Entry",
      location: "Mosman, NSW",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=250&fit=crop",
      slug: "heritage-sandstone-mosman"
    },
    {
      title: "Eco-Friendly Paver Design",
      location: "Hornsby, NSW",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop",
      slug: "eco-paver-hornsby"
    },
    {
      title: "Pattern Concrete Feature",
      location: "Neutral Bay, NSW",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=250&fit=crop",
      slug: "pattern-concrete-neutral-bay"
    }
  ];

  const processSteps = [
    {
      title: "Site Preparation",
      description: "Excavation and proper base preparation",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=300&fit=crop"
    },
    {
      title: "Formwork Installation",
      description: "Precise formwork setup for perfect edges",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=300&fit=crop"
    },
    {
      title: "Concrete Pouring",
      description: "Professional concrete placement and finishing",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop"
    },
    {
      title: "Final Finishing",
      description: "Exposed aggregate finishing and sealing",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0 architectural-grid opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center text-white">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-bold architectural-heading mb-6">
              Modern Concrete Driveway
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              A stunning contemporary concrete driveway in Killara featuring exposed aggregate 
              finish with integrated lighting and landscape borders.
            </p>
          </div>
        </div>
      </section>

      {/* Project Hero Image */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1200&h=600&fit=crop" 
              alt="Modern Concrete Driveway - Killara"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Overview */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    This exceptional Killara property required a driveway solution that would complement 
                    its contemporary architecture while providing practical functionality for a busy family. 
                    Our team of experts designed a stunning exposed aggregate concrete driveway that 
                    seamlessly integrates with the home's modern aesthetic.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The project featured several innovative elements including integrated LED strip lighting 
                    for evening ambiance, custom aggregate selection to match the home's color palette, 
                    and carefully planned drainage systems to manage stormwater runoff effectively.
                  </p>
                </div>
              </div>

              {/* Before & After */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Before & After</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=600&h=400&fit=crop" 
                        alt="Before - Old Driveway"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-black/50 text-white">
                          Before
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <p className="text-muted-foreground">
                        Old cracked asphalt driveway with poor drainage and outdated appearance.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop" 
                        alt="After - New Concrete Driveway"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge variant="default">
                          After
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <p className="text-muted-foreground">
                        Beautiful exposed aggregate concrete with integrated lighting and landscaping.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Materials Used */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Materials & Specifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Primary Materials</h3>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>40MPa concrete mix with fiber reinforcement</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>Premium crushed granite aggregate</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>Steel mesh reinforcement</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>High-grade concrete sealer</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Special Features</h3>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>Integrated LED strip lighting</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>Custom drainage channels</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>Decorative concrete borders</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span>Anti-slip surface treatment</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Construction Process */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Construction Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {processSteps.map((step, index) => (
                    <Card key={index}>
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={step.image} 
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="text-lg font-bold mb-2">
                          {index + 1}. {step.title}
                        </h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Project Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-[#666666]" />
                      <div>
                        <div className="font-semibold">Location</div>
                        <div className="text-sm text-muted-foreground">Killara, NSW</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Ruler className="h-5 w-5 text-[#666666]" />
                      <div>
                        <div className="font-semibold">Area</div>
                        <div className="text-sm text-muted-foreground">180m²</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-[#666666]" />
                      <div>
                        <div className="font-semibold">Duration</div>
                        <div className="text-sm text-muted-foreground">5 days</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-[#666666]" />
                      <div>
                        <div className="font-semibold">Team Size</div>
                        <div className="text-sm text-muted-foreground">6 specialists</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Client Testimonial */}
              <Card className="bg-gradient-to-br from-primary to-secondary text-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <blockquote className="text-white/90 mb-4">
                    "The team at Driveways Sydney exceeded all our expectations. The attention 
                    to detail and quality of workmanship is outstanding. Our new driveway has 
                    completely transformed the front of our home."
                  </blockquote>
                  <div className="text-sm">
                    <div className="font-semibold text-accent">Sarah & Michael Chen</div>
                    <div className="text-white/80">Killara Homeowners</div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4">Interested in a Similar Project?</h3>
                  <p className="text-muted-foreground mb-6">
                    Get a free consultation and quote for your own architect-designed driveway.
                  </p>
                  <Button className="w-full mb-3">
                    Get Free Quote
                  </Button>
                  <Button variant="outline" className="w-full">
                    Schedule Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Related Projects</h2>
            <p className="text-muted-foreground">
              Explore more of our architect-designed driveway projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <Button variant="outline" className="w-full group/btn" asChild>
                    <a href={`/projects/${project.slug}`}>
                      View Project
                      <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingBanner />
    </div>
  );
};

export default ProjectDetail;