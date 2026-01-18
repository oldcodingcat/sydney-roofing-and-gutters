import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, ArrowRight } from "lucide-react";

const FeaturedProjects = () => {
  const base = import.meta.env.BASE_URL;

  const featuredProjects = [
    {
      id: 1,
      title: "Colorbond Roof Replacement",
      type: "Metal Roofing",
      location: "Merewether, NSW",
      image: `/images/complete-roof-replacement-after.jpg`,
      alt: "Complete Colorbond roof replacement on residential home in Merewether, Newcastle",
      slug: "colorbond-roof-merewether",
    },
    {
      id: 2,
      title: "Heritage Tile Roof Restoration",
      type: "Tile Restoration",
      location: "The Junction, NSW",
      image: `/images/roof-restoration-project-after.jpg`,
      alt: "Heritage terracotta tile roof restoration in The Junction, Newcastle",
      slug: "heritage-tile-restoration-junction",
    },
    {
      id: 3,
      title: "Emergency Storm Damage Repair",
      type: "Emergency Repairs",
      location: "Charlestown, NSW",
      image: `/images/emergency-roof-repairs-1.jpg`,
      alt: "Emergency roof repair after storm damage in Charlestown, Newcastle",
      slug: "emergency-repair-charlestown",
    },
    {
      id: 4,
      title: "Modern Metal Roof Installation",
      type: "Standing Seam Metal",
      location: "Adamstown, NSW",
      image: `/images/re-roof-gutter-replacing-wall-cladding-1.jpg`,
      alt: "Modern standing seam metal roof installation in Adamstown, Newcastle",
      slug: "metal-roof-adamstown",
    },
    {
      id: 5,
      title: "Complete Roof Replacement",
      type: "Concrete Tile",
      location: "New Lambton, NSW",
      image: `/images/288 box rd sylvania.jpg`,
      alt: "Complete concrete tile roof replacement in New Lambton, Newcastle",
      slug: "concrete-tile-new-lambton",
    },
    {
      id: 6,
      title: "Commercial Roof Restoration",
      type: "Commercial Roofing",
      location: "Mayfield, NSW",
      image: `/images/roof-repair-and-restoration-1.jpg`,
      alt: "Commercial roof restoration and waterproofing in Mayfield, Newcastle",
      slug: "commercial-roof-mayfield",
    },
  ];

  return (
    <section className="py-16 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 architectural-grid opacity-10"></div>
      <div className="container mx-auto px-7 lg:px-14 xl:px-20 relative">
        
        {/* Header */}
        <div className="text-center mb-12">
          {/* Línea amarilla */}
          <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold architectural-heading mb-4">
            Our Latest Projects
          </h2>
          {/* Texto con el mismo estilo que en services.tsx */}
          <p className="text-base max-w-2xl mx-auto" style={{ color: "#666666" }}>
            Recent roof installations, repairs, and restorations across Newcastle and the Hunter Region
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-black/50 text-white backdrop-blur-sm">
                    {project.type}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                {/* Localización con color #666666 */}
                <div className="flex items-center gap-1 text-sm" style={{ color: "#666666" }}>
                  <MapPin className="h-3 w-3" />
                  <span>{project.location}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="professional" size="lg" asChild>
              <a href="/projects">
                View All Projects
                <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </Button>
            <Button variant="attention" size="lg" asChild>
              <a href="/gallery">
                View Gallery
                <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
