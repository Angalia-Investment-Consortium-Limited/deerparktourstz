import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-kilimanjaro.jpg";
import { AdinkraPattern, BaobabLeaves } from "@/components/ui/african-patterns";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Logo from "@/components/ui/logo";

const HeroSection = () => {
  const heroRef = useScrollAnimation('scroll-fade-in');

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-hero-gradient"></div>
        {/* African patterns overlay */}
        <AdinkraPattern className="text-white" opacity={0.05} />
        <BaobabLeaves className="text-primary-glow" opacity={0.03} />
        
        {/* Watermark logo */}
        <Logo 
          variant="watermark" 
          size="2xl" 
          className="bottom-10 right-10 text-white/20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          <h1 className="heading-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight animate-fade-in">
            Discover the
            <span className="block text-primary-glow gentle-float inline-block mt-2">Heart of Tanzania</span>
          </h1>
          
          <p className="body-large text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto animate-fade-in px-4" style={{ animationDelay: '0.2s' }}>
            Embark on unforgettable safari adventures through pristine wilderness, 
            witness the Great Migration, and experience authentic Tanzanian culture.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-6 md:pt-8 animate-fade-in px-4" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg group shadow-safari hover:shadow-safari/50 transition-all duration-300"
              asChild
            >
              <Link to="/packages">
                Plan Your Dream Safari
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            {/* <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 py-4 text-lg hover:scale-105 transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Our Story
            </Button> */}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-8 sm:pt-12 md:pt-16 max-w-2xl mx-auto animate-fade-in px-4" style={{ animationDelay: '0.6s' }}>
            <div className="text-center group cursor-pointer">
              <div className="heading-secondary text-2xl sm:text-3xl md:text-4xl font-bold text-primary-glow group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="body-medium text-xs sm:text-sm text-white/80">Happy Travelers</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="heading-secondary text-2xl sm:text-3xl md:text-4xl font-bold text-primary-glow group-hover:scale-110 transition-transform duration-300">15+</div>
              <div className="body-medium text-xs sm:text-sm text-white/80">Destinations</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="heading-secondary text-2xl sm:text-3xl md:text-4xl font-bold text-primary-glow group-hover:scale-110 transition-transform duration-300">10</div>
              <div className="body-medium text-xs sm:text-sm text-white/80">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;