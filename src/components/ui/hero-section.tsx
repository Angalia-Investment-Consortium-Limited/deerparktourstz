import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-kilimanjaro.jpg";
import { AdinkraPattern, BaobabLeaves } from "@/components/ui/african-patterns";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Logo from "@/components/ui/logo";

const HeroSection = () => {
  const heroRef = useScrollAnimation("scroll-fade-in");

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10"
    >
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
          <h1 className="heading-display my-16 text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight animate-fade-in">
            Discover the
            <span className="block text-primary-glow gentle-float inline-block mt-2">
              Heart of Tanzania
            </span>
          </h1>

          <p
            className="body-large text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto animate-fade-in px-4"
            style={{ animationDelay: "0.2s" }}
          >
            Embark on unforgettable safari adventures through pristine
            wilderness, witness the Great Migration, and experience authentic
            Tanzanian culture.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-6 md:pt-8 animate-fade-in px-4"
            style={{ animationDelay: "0.4s" }}
          >
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
