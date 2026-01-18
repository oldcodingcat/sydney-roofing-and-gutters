import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Clock, Mail, Phone, User } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString()
      });
      
      if (response.ok) {
        setShowSuccess(true);
        form.reset();
        // Hide success message after 8 seconds
        setTimeout(() => setShowSuccess(false), 8000);
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen lg:h-[90vh] flex items-center">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect width='1920' height='1080' fill='%23374151'/%3E%3C/svg%3E"
        >
          <source
            src="/videos/newcastle-local-roofers.mp4"
            type="video/mp4"
          />
          {/* Fallback image in case video fails to load */}
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/40 to-primary/30"></div>
        <div className="absolute inset-0 bg-accent/10"></div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-7 lg:px-14 xl:px-20 py-8 lg:py-[60px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-white">
            {/* Blueprint Line Decoration */}
            <div className="blueprint-line border-t-2 border-accent w-20 mb-8"></div>
            
            <h1 className="architectural-heading mb-6 leading-tight font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-[3.24rem]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Newcastle's Trusted <span className="text-accent">Roofing</span> Experts
            </h1>
            
            <p className="mb-8 text-white/90 leading-relaxed" style={{ fontSize: '15px', fontFamily: 'Inter, sans-serif' }}>
              Professional roof repairs, replacement, and restoration services. Available 24/7 for emergencies across Newcastle and the Hunter Region.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="xl" className="group" asChild>
                <a href="tel:0240894613">
                  Emergency Repairs 24/7
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="architectural" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary" asChild>
                <a href="/roof-inspections">
                  Free Roof Inspection
                </a>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
              <div className="flex items-center gap-3 text-white/90">
                <div className="bg-accent/20 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="font-semibold" style={{ fontSize: '0.9rem', fontFamily: 'Inter, Inc., sans-serif' }}>Licensed Roofers</div>
                  <div className="text-white/70" style={{ fontSize: '0.765rem', fontFamily: 'Inter, sans-serif' }}>Fully qualified & insured</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-white/90">
                <div className="bg-accent/20 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="font-semibold" style={{ fontSize: '0.9rem', fontFamily: 'Inter, sans-serif' }}>1000+ Roofs</div>
                  <div className="text-white/70" style={{ fontSize: '0.765rem', fontFamily: 'Inter, sans-serif' }}>Across Newcastle</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-white/90">
                <div className="bg-accent/20 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="font-semibold" style={{ fontSize: '0.9rem', fontFamily: 'Inter, sans-serif' }}>24/7 Service</div>
                  <div className="text-white/70" style={{ fontSize: '0.765rem', fontFamily: 'Inter, sans-serif' }}>Emergency response</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 lg:p-8 shadow-2xl mt-8 lg:mt-0" style={{ fontFamily: 'Inter, sans-serif' }}>
            {showSuccess ? (
              // Success Message
              <div className="text-center py-8">
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 mb-4">
                  <div className="flex justify-center mb-3">
                    <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    Thank You! Message Received
                  </h3>
                  <p className="text-sm text-green-700 mb-2">
                    We've received your request and will contact you soon to schedule your free roof inspection and quote.
                  </p>
                  <p className="text-xs text-green-600">
                    One of our roofing experts will be in touch within 24 hours.
                  </p>
                </div>
                <Button 
                  variant="architectural" 
                  size="lg"
                  onClick={() => setShowSuccess(false)}
                  className="text-sm"
                >
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h3 className="font-bold text-primary mb-2" style={{ fontSize: '1.44rem', fontFamily: 'Inter, sans-serif' }}>Get Your Free Roof Inspection</h3>
                  <p className="text-gray-600" style={{ fontSize: '0.9rem', fontFamily: 'Inter, sans-serif' }}>Fill out the form and we'll contact you within 24 hours</p>
                </div>
                
                <form name="home-roof-quote" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="home-roof-quote" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-medium text-gray-700 mb-2" style={{ fontSize: '0.9rem', fontFamily: 'Inter, sans-serif' }}>
                        <User className="inline h-4 w-4 mr-2" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="Enter your full name"
                        style={{ fontSize: '0.9rem', fontFamily: 'Inter, sans-serif' }}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block font-medium text-gray-700 mb-2" style={{ fontSize: '0.9rem', fontFamily: 'Inter, sans-serif' }}>
                        <Phone className="inline h-4 w-4 mr-2" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="Enter your phone number"
                        style={{ fontSize: '0.9rem', fontFamily: 'Inter, sans-serif' }}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-medium text-gray-700 mb-2" style={{ fontSize: '0.9rem', fontFamily: 'Inter, sans-serif' }}>
                        <Mail className="inline h-4 w-4 mr-2" />
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="Enter your email"
                        style={{ fontSize: '0.9rem', fontFamily: 'Inter, sans-serif' }}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block font-medium text-gray-700 mb-2" style={{ fontSize: '0.9rem', fontFamily: 'Inter, sans-serif' }}>
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="Enter your address"
                        style={{ fontSize: '0.9rem', fontFamily: 'Inter, sans-serif' }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block font-medium text-gray-700 mb-2" style={{ fontSize: '0.9rem', fontFamily: 'Inter, sans-serif' }}>
                      Project Details
                    </label>
                    <textarea
                      rows={3}
                      name="details"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us about your roofing needs (repairs, replacement, inspection, emergency, etc.)..."
                      style={{ fontSize: '0.9rem', fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white py-3" 
                    style={{ fontSize: '0.9rem', fontFamily: 'Inter, sans-serif' }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Request Free Inspection'}
                    {!isSubmitting && <ArrowRight className="h-4 w-4 ml-2" />}
                  </Button>
                </form>
                
                <div className="mt-4 text-center">
                  <p className="text-gray-500" style={{ fontSize: '0.765rem', fontFamily: 'Inter, sans-serif' }}>
                    By submitting this form, you agree to our privacy policy
                  </p>
                </div>
              </>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;