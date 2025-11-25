import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TourPackages from "@/components/TourPackages";
import ImageSlideshow from "@/components/ui/image-slideshow";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  Users, 
  MapPin, 
  Star,
  CheckCircle,
  Calendar,
  Camera,
  Tent,
  Utensils
} from "lucide-react";

// Import local images
import serengetiImage from "@/assets/serengeti-1.jpg";
import tarangireImage from "@/assets/tarangire-1.jpg";
import ngorongoroImage from "@/assets/ngorogoro-crater-1.jpg";
import kilimanjaroImage from "@/assets/hero-kilimanjaro.jpg";
import heroBackgroundImage from "@/assets/migration.jpg";
import ctaBackgroundImage from "@/assets/Zanzibar.jpg";

const Packages = () => {
  const safariImages = [
    {
      src: serengetiImage,
      alt: "Serengeti landscape with wildlife",
      caption: "Serengeti National Park - The Great Migration"
    },
    {
      src: tarangireImage,
      alt: "Tarangire National Park with baobab trees",
      caption: "Tarangire National Park - Baobab Trees"
    },
    {
      src: ngorongoroImage,
      alt: "Ngorongoro Crater scenic view",
      caption: "Ngorongoro Crater - World Heritage Site"
    },
    {
      src: kilimanjaroImage,
      alt: "Mount Kilimanjaro majestic peak",
      caption: "Mount Kilimanjaro - Roof of Africa"
    }
  ];

  const sampleItineraries = [
    {
      day: 1,
      title: "Arrival in Arusha",
      description: "Airport pickup, welcome dinner, safari briefing",
      highlights: ["Meet your guide", "Equipment check", "Cultural orientation"]
    },
    {
      day: 2,
      title: "Tarangire National Park",
      description: "Game drive among baobab trees and elephant herds",
      highlights: ["Big elephant herds", "Baobab trees", "Bird watching"]
    },
    {
      day: 3,
      title: "Serengeti National Park",
      description: "Enter the endless plains, afternoon game drive",
      highlights: ["Great Migration", "Big Five", "Sunset views"]
    },
    {
      day: 4,
      title: "Ngorongoro Crater",
      description: "Descent into the world's largest intact caldera",
      highlights: ["Dense wildlife", "Flamingo lakes", "Maasai culture"]
    },
    {
      day: 5,
      title: "Departure",
      description: "Final game drive, return to Arusha, airport transfer",
      highlights: ["Last wildlife viewing", "Souvenir shopping", "Farewell lunch"]
    }
  ];

  const inclusions = [
    "Professional English-speaking guide",
    "4x4 safari vehicle with pop-up roof",
    "All park entrance fees and taxes",
    "Accommodation as specified",
    "All meals during safari",
    "Drinking water during game drives",
    "Airport transfers",
    "Emergency evacuation insurance"
  ];

  const exclusions = [
    "International flights",
    "Visa fees",
    "Travel insurance",
    "Personal expenses",
    "Alcoholic beverages",
    "Tips for guides and staff",
    "Optional activities",
    "Laundry services"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with Background */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBackgroundImage})`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Safari Packages for Every Adventure
            </h1>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              Choose from our carefully crafted safari packages, each designed to offer 
              unique experiences across Tanzania's most spectacular wildlife destinations.
            </p>
            
            {/* Safari Images Slideshow */}
            <div className="max-w-4xl mx-auto">
              <ImageSlideshow 
                images={safariImages}
                height="h-80"
                className="rounded-xl shadow-2xl"
                autoPlay={true}
                interval={5000}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Tour Packages */}
      <TourPackages />

      {/* Sample Itinerary */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Sample 5-Day Safari Itinerary
              </h2>
              <p className="text-lg text-muted-foreground">
                Here's what a typical safari experience looks like with DeerPark Tours
              </p>
            </div>

            <div className="space-y-6">
              {sampleItineraries.map((item, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-card-custom transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                        {item.day}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          Day {item.day}: {item.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">{item.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.highlights.map((highlight, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included/Excluded */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What's Included in Our Packages
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-secondary">
                    <CheckCircle className="h-6 w-6" />
                    <span>Included</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {inclusions.map((item, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-muted-foreground">
                    <Clock className="h-6 w-6" />
                    <span>Not Included</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exclusions.map((item, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA with Background */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${ctaBackgroundImage})`,
          }}
        />
        <div className="absolute inset-0 bg-primary/80" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
            Contact us today to customize your perfect safari package or book one of our 
            featured tours. Our experts are here to help plan your dream Tanzanian adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Get Custom Quote
            </Button>
            {/* <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Contact Our Experts
            </Button> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Packages;