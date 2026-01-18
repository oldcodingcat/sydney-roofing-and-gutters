import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import { useState } from "react";

const FloatingBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-primary to-secondary shadow-lg border-t border-accent/20">
      {/* Padding lateral unificado */}
      <div className="container mx-auto px-7 lg:px-14 xl:px-20 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-sm md:text-base truncate">
              Need emergency roofing service? Available 24/7 - Call now!
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0 pr-[30px]">
            <Button
              variant="important"
              size="sm"
              asChild
            >
              <a href="tel:0240894613" className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">Call Us Now</span>
              </a>
            </Button>
            <Button
              variant="professional"
              size="sm"
              asChild
            >
              <a href="#contact-form" className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">Get Free Quote</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingBanner;