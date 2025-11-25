import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mountain, 
  Trees, 
  Waves, 
  Camera,
  MapPin,
  Clock,
  Users,
  Star
} from "lucide-react";

// Import local images
import serengetiImage from "@/assets/serengeti-1.jpg";
import kilimanjaroImage from "@/assets/hero-kilimanjaro.jpg";
import zanzibarImage from "@/assets/Zanzibar.jpg";
import ngorongoroImage from "@/assets/ngorogoro-crater-1.jpg";
import tarangireImage from "@/assets/tarangire-1.jpg";
import manyaraImage from "@/assets/Arusha.jpg";

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Serengeti National Park",
      location: "Northern Tanzania",
      description: "Witness the Great Migration and encounter the Big Five in Africa's most famous safari destination.",
      highlights: ["Great Migration", "Big Five", "Endless Plains", "Hot Air Balloon Safaris"],
      bestTime: "June - October",
      duration: "3-5 Days",
      difficulty: "Easy",
      icon: Trees,
      image: serengetiImage,
      rating: 4.9
    },
    {
      id: 2,
      name: "Mount Kilimanjaro",
      location: "Northern Tanzania",
      description: "Conquer Africa's highest peak and stand on the Roof of Africa with breathtaking sunrise views.",
      highlights: ["Roof of Africa", "5 Climate Zones", "Machame Route", "Uhuru Peak"],
      bestTime: "January - March, June - October",
      duration: "5-9 Days",
      difficulty: "Challenging",
      icon: Mountain,
      image: kilimanjaroImage,
      rating: 4.8
    },
    {
      id: 3,
      name: "Zanzibar Island",
      location: "Indian Ocean",
      description: "Relax on pristine beaches, explore Stone Town's rich history, and experience Swahili culture.",
      highlights: ["Pristine Beaches", "Stone Town", "Spice Tours", "Dhow Cruises"],
      bestTime: "June - September, December - February",
      duration: "3-7 Days",
      difficulty: "Easy",
      icon: Waves,
      image: zanzibarImage,
      rating: 4.7
    },
    {
      id: 4,
      name: "Ngorongoro Crater",
      location: "Northern Tanzania",
      description: "Descend into the world's largest intact volcanic caldera, home to incredible wildlife density.",
      highlights: ["Volcanic Caldera", "Dense Wildlife", "Flamingo Lakes", "Maasai Culture"],
      bestTime: "Year Round",
      duration: "1-2 Days",
      difficulty: "Easy",
      icon: Mountain,
      image: ngorongoroImage,
      rating: 4.8
    },
    {
      id: 5,
      name: "Tarangire National Park",
      location: "Northern Tanzania",
      description: "Famous for its massive elephant herds and iconic baobab trees dotting the landscape.",
      highlights: ["Elephant Herds", "Baobab Trees", "Bird Watching", "River Wildlife"],
      bestTime: "June - October",
      duration: "1-2 Days",
      difficulty: "Easy",
      icon: Trees,
      image: tarangireImage,
      rating: 4.6
    },
    {
      id: 6,
      name: "Lake Manyara National Park",
      location: "Northern Tanzania", 
      description: "Discover tree-climbing lions, vibrant birdlife, and stunning alkaline lake views.",
      highlights: ["Tree-climbing Lions", "Pink Flamingos", "Hot Springs", "Canopy Walkway"],
      bestTime: "July - October, December - March",
      duration: "1 Day",
      difficulty: "Easy",
      icon: Waves,
      image: manyaraImage,
      rating: 4.5
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "secondary";
      case "Challenging": return "destructive";
      default: return "outline";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Discover Tanzania's Wonders
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From the endless plains of the Serengeti to the pristine beaches of Zanzibar, 
              explore the diverse landscapes and incredible wildlife that make Tanzania 
              one of Africa's premier destinations.
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => {
              const IconComponent = destination.icon;
              return (
                <Card 
                  key={destination.id} 
                  className="overflow-hidden hover:shadow-safari transition-all duration-300 hover:-translate-y-2"
                >
                  <div 
                    className="h-48 bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${destination.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-foreground">
                        {destination.location}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 rounded-full p-2">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-white font-medium">{destination.rating}</span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {destination.name}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {destination.description}
                    </p>

                    {/* Quick Info */}
                    <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{destination.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-primary" />
                        <Badge variant={getDifficultyColor(destination.difficulty)} className="text-xs">
                          {destination.difficulty}
                        </Badge>
                      </div>
                    </div>

                    {/* Best Time */}
                    <div className="mb-4">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <span className="font-medium">Best Time:</span>
                        <span>{destination.bestTime}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="font-medium text-sm mb-2">Highlights:</h4>
                      <div className="flex flex-wrap gap-1">
                        {destination.highlights.map((highlight, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1 bg-primary" asChild>
                        <Link to={`/destinations/${destination.id}`}>
                          Learn More
                        </Link>
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1" asChild>
                        <Link to={`/destinations/${destination.id}`}>
                          <Camera className="h-4 w-4 mr-1" />
                          Gallery
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Essential Travel Tips
              </h2>
              <p className="text-lg text-muted-foreground">
                Make the most of your Tanzanian adventure with these insider tips
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Best Time to Visit</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Dry Season (June-October):</strong> Best for wildlife viewing</li>
                    <li>• <strong>Wet Season (November-May):</strong> Fewer crowds, lush landscapes</li>
                    <li>• <strong>Migration Season (December-July):</strong> Witness the Great Migration</li>
                    <li>• <strong>Climbing Season:</strong> January-March, June-October for Kilimanjaro</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">What to Pack</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Neutral-colored clothing for safari</li>
                    <li>• Sun protection (hat, sunscreen, sunglasses)</li>
                    <li>• Comfortable walking boots</li>
                    <li>• Binoculars for wildlife viewing</li>
                    <li>• Camera with extra batteries</li>
                    <li>• Light jacket for early morning drives</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Health & Safety</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Yellow fever vaccination required</li>
                    <li>• Malaria prophylaxis recommended</li>
                    <li>• Travel insurance mandatory</li>
                    <li>• Stay hydrated (bottled water provided)</li>
                    <li>• Follow guide instructions at all times</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Cultural Etiquette</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Learn basic Swahili greetings</li>
                    <li>• Respect local customs and traditions</li>
                    <li>• Ask permission before photographing people</li>
                    <li>• Dress modestly when visiting villages</li>
                    <li>• Tip guides and staff appropriately</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Explore Tanzania?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let our expert guides show you the wonders of Tanzania. From safari adventures 
            to cultural experiences, we'll create your perfect itinerary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Plan Your Safari
            </Button>
            {/* <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Download Brochure
            </Button> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Destinations;