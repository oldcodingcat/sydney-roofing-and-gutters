import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-7 lg:px-14 xl:px-20 py-16">
        {/* Grid personalizado - Columna 1: 40%, Columnas 2-4: 20% cada una */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
          
          {/* Columna 1 - Company Info (40% del ancho) */}
          <div className="space-y-4 lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-accent mb-2">Newcastle Local Roofers</h3>
              <p className="text-sm text-primary-foreground/80">Professional Roofing Services</p>
            </div>
            <p className="text-primary-foreground/90 leading-relaxed">
              Newcastle's trusted roofing specialists, providing 24/7 emergency services. 
              We bring precision, reliability, and professional excellence to every roofing project.
            </p>
          </div>

          {/* Columna 2 - Services (20% del ancho) */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-accent">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="/roof-repairs" className="text-primary-foreground/90 hover:text-accent transition-colors">Roof Repairs</a></li>
              <li><a href="/roof-replacement" className="text-primary-foreground/90 hover:text-accent transition-colors">Roof Replacement</a></li>
              <li><a href="/roof-restoration" className="text-primary-foreground/90 hover:text-accent transition-colors">Roof Restoration</a></li>
              <li><a href="/new-roof-installation" className="text-primary-foreground/90 hover:text-accent transition-colors">New Roof Installation</a></li>
              <li><a href="/emergency-roof-repairs" className="text-primary-foreground/90 hover:text-accent transition-colors">Emergency Roof Repairs</a></li>
              <li><a href="/roof-inspections" className="text-primary-foreground/90 hover:text-accent transition-colors">Roof Inspections</a></li>
            </ul>
          </div>

          {/* Columna 3 - Quick Links (20% del ancho) */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/about-us" className="text-primary-foreground/90 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="/contact-us" className="text-primary-foreground/90 hover:text-accent transition-colors">Contact</a></li>
              <li><a href="/blog" className="text-primary-foreground/90 hover:text-accent transition-colors">Blog</a></li>
              <li><a href="/gutter-repairs" className="text-primary-foreground/90 hover:text-accent transition-colors">Gutter Repairs</a></li>
              <li><a href="/leak-detection" className="text-primary-foreground/90 hover:text-accent transition-colors">Leak Detection</a></li>
              <li><a href="/locations" className="text-primary-foreground/90 hover:text-accent transition-colors">Service Areas</a></li>
            </ul>
          </div>

          {/* Columna 4 - Contact Info (20% del ancho) */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-accent">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:0240894613" className="text-primary-foreground/90 hover:text-accent transition-colors">
                    (02) 4089 4613
                  </a>
                  <p className="text-sm text-primary-foreground/70">24/7 Emergency Service</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/90">1 Tudor Street, Newcastle West NSW 2302</p>
                  <p className="text-sm text-primary-foreground/70">Serving Newcastle & Surrounding Areas</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-primary-foreground/90">Monday to Sunday - 24 hours</p>
                  <p className="text-sm text-primary-foreground/70">24/7 Emergency Roofing Service</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/80">
              © {new Date().getFullYear()} Newcastle Local Roofers. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="/privacy-policy" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;