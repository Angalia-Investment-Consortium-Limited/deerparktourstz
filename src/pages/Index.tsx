import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/ui/hero-section";
import TourPackages from "@/components/TourPackages";
import Testimonials from "@/components/Testimonials";
import ImageSlideshow from "@/components/ui/image-slideshow";
import GalleryGrid from "@/components/ui/gallery-grid";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Users, 
  Award, 
  Heart,
  MapPin,
  Camera,
  Binoculars
} from "lucide-react";

// Import local images
import migrationImage from "@/assets/migration.jpg";
import cheetahImage from "@/assets/cheeter.jpg";
import giraffeImage from "@/assets/Giraffe.jpg";
import balloonImage from "@/assets/baloon.jpg";
import serengetiImage from "@/assets/serengeti-1.jpg";
import ngorongoroImage from "@/assets/ngorogoro-crater-1.jpg";
import tarangireImage from "@/assets/tarangire-1.jpg";
import manyaraImage from "@/assets/Arusha.jpg";
import kilimanjaroImage from "@/assets/hero-kilimanjaro.jpg";
import zanzibarImage from "@/assets/Zanzibar.jpg";
import backgroundImage from "@/assets/serengeti-1.jpg";

const Index = () => {
  const heroImages = [
    {
      src: migrationImage,
      alt: "Great Migration in Serengeti",
      caption: "Witness majestic wildlife in their natural habitat"
    },
    {
      src: cheetahImage,
      alt: "Cheetah in the wild",
      caption: "Experience the Great Migration up close"
    },
    {
      src: giraffeImage,
      alt: "Giraffe in African savanna",
      caption: "Explore diverse landscapes and cultures"
    },
    {
      src: balloonImage,
      alt: "Hot air balloon safari",
      caption: "Encounter the Big Five in pristine wilderness"
    }
  ];

  const galleryImages = [
    {
      src: serengetiImage,
      alt: "Serengeti landscape with wildlife",
      caption: "Serengeti National Park"
    },
    {
      src: ngorongoroImage,
      alt: "Ngorongoro Crater view",
      caption: "Ngorongoro Crater"
    },
    {
      src: tarangireImage,
      alt: "Tarangire National Park landscape",
      caption: "Tarangire National Park"
    },
    {
      src: manyaraImage,
      alt: "Arusha city and Mount Meru view",
      caption: "Arusha - Gateway to Safari"
    },
    {
      src: kilimanjaroImage,
      alt: "Mount Kilimanjaro majestic view",
      caption: "Kilimanjaro Views"
    },
    {
      src: zanzibarImage,
      alt: "Zanzibar beach and coastline",
      caption: "Zanzibar Beaches"
    }
  ];
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Company Introduction with Background */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
        <div className="absolute inset-0 bg-white/90" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Experience Tanzania with 
                <span className="text-primary block">Local Experts</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                DeerPark Tours is a proudly Tanzanian company dedicated to showcasing 
                the authentic beauty of our homeland. With over a decade of experience, 
                we combine local expertise with international standards to create 
                unforgettable safari experiences.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-8 w-8 text-primary" />
                  <div>
                    <div className="font-semibold">Safety First</div>
                    <div className="text-sm text-muted-foreground">Licensed & Insured</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-8 w-8 text-primary" />
                  <div>
                    <div className="font-semibold">Expert Guides</div>
                    <div className="text-sm text-muted-foreground">Local Knowledge</div>
                  </div>
                </div>
                {/* <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-primary" />
                  <div>
                    <div className="font-semibold">Award Winning</div>
                    <div className="text-sm text-muted-foreground">TripAdvisor Excellence</div>
                  </div>
                </div> */}
                <div className="flex items-center space-x-3">
                  <Heart className="h-8 w-8 text-primary" />
                  <div>
                    <div className="font-semibold">Conservation</div>
                    <div className="text-sm text-muted-foreground">Supporting Wildlife</div>
                  </div>
                </div>
              </div>
              <Button size="lg" className="bg-safari-gradient" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            
            <div className="space-y-6">
              {/* Hero Slideshow */}
              <ImageSlideshow 
                images={heroImages}
                height="h-80"
                className="rounded-xl shadow-safari"
                autoPlay={true}
                interval={4000}
              />
              
              <div className="grid grid-cols-3 gap-4">
                <Card className="overflow-hidden">
                  <div className="h-24 bg-primary/10 flex items-center justify-center">
                    <Camera className="h-8 w-8 text-primary" />
                  </div>
                  <CardContent className="p-3">
                    <h4 className="font-semibold text-sm mb-1">Wildlife Photography</h4>
                    <p className="text-xs text-muted-foreground">
                      Expert guidance
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden">
                  <div className="h-24 bg-secondary/10 flex items-center justify-center">
                    <Binoculars className="h-8 w-8 text-secondary" />
                  </div>
                  <CardContent className="p-3">
                    <h4 className="font-semibold text-sm mb-1">Game Viewing</h4>
                    <p className="text-xs text-muted-foreground">
                      Big Five spots
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden">
                  <div className="h-24 bg-accent/10 flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-accent" />
                  </div>
                  <CardContent className="p-3">
                    <h4 className="font-semibold text-sm mb-1">Cultural Tours</h4>
                    <p className="text-xs text-muted-foreground">
                      Local experiences
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Gallery */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore Tanzania's Iconic Destinations
            </h2>
            <p className="text-lg text-muted-foreground">
              From the endless plains of Serengeti to the pristine beaches of Zanzibar, 
              discover the diverse landscapes that make Tanzania extraordinary.
            </p>
          </div>
          
          <GalleryGrid 
            images={galleryImages} 
            columns={3}
            showCaptions={true}
            className="mb-8"
          />
          
          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/destinations">View All Destinations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tour Packages Preview */}
      <TourPackages />

      {/* Testimonials */}
      <Testimonials />

      <Footer />
    </div>
  );
};

export default Index;
