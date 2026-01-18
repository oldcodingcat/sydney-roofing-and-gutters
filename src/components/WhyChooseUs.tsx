import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Ruler, HeartHandshake } from "lucide-react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Award,
      title: "Licensed & Insured",
      description: "Fully qualified roofers with comprehensive insurance coverage for your peace of mind."
    },
    {
      icon: Users,
      title: "1000+ Roofs Completed",
      description: "Over a thousand successful roofing projects across Newcastle and the Hunter Region."
    },
    {
      icon: Ruler,
      title: "Quality Workmanship",
      description: "Expert installation using premium materials with comprehensive warranties."
    },
    {
      icon: HeartHandshake,
      title: "24/7 Emergency Service",
      description: "Available around the clock for urgent repairs and storm damage response."
    }
  ];

  // Imágenes reales de proyectos de techos
  const projectImages1 = [
    "/images/complete-roof-replacement-after.jpg",
    "/images/roof-restoration-project-after.jpg",
    "/images/emergency-roof-repairs-1.jpg",
    "/images/roof painting transformation after.jpg"
  ];
  
  const projectImages2 = [
    "/images/re-roof-gutter-replacing-wall-cladding-1.jpg",
    "/images/roof-repair-and-restoration-1.jpg",
    "/images/288 box rd sylvania.jpg",
    "/images/emergency-roof-repairs-before.jpg"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-7 lg:px-14 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Side */}
          <div>
            <div className="blueprint-line border-t-2 border-accent w-20 mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold architectural-heading text-primary mb-6">
              Why Newcastle Trusts Our Roofing Services
            </h2>
            <p className="text-base mb-8 leading-relaxed" style={{ color: '#666666' }}>
              We're licensed roofing professionals who understand your roof protects what matters most. 
              Our commitment to quality workmanship and 24/7 emergency service sets us apart in Newcastle's roofing industry.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-accent/20 p-3 rounded-lg flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">{benefit.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Carousel Side */}
          <div className="relative">
            <div className="flex h-[600px] space-x-4 justify-center">
              <InfiniteSlider direction='vertical' duration={22} className="w-[288px]">
                {projectImages1.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Roofing project in Newcastle ${index + 1}`}
                    className='aspect-square w-[270px] rounded-lg object-cover shadow-lg border-2 border-white'
                  />
                ))}
              </InfiniteSlider>
              
              <InfiniteSlider direction='vertical' reverse duration={28} className="w-[288px]">
                {projectImages2.map((src, index) => (
                  <img
                    key={index + 4}
                    src={src}
                    alt={`Roofing project in Newcastle ${index + 5}`}
                    className='aspect-square w-[270px] rounded-lg object-cover shadow-lg border-2 border-white'
                  />
                ))}
              </InfiniteSlider>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;