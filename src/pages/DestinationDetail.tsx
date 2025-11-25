import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  Mountain, 
  Trees, 
  Waves, 
  Camera,
  MapPin,
  Clock,
  Users,
  Star,
  Calendar,
  ThermometerSun,
  Binoculars,
  Heart,
  Share2,
  ArrowLeft,
  CheckCircle,
  Info
} from "lucide-react";

// Import local images
import serengetiImage1 from "@/assets/serengeti-1.jpg";
import serengetiImage2 from "@/assets/migration.jpg";
import serengetiImage3 from "@/assets/cheeter.jpg";
import serengetiImage4 from "@/assets/Giraffe.jpg";

import kilimanjaroImage1 from "@/assets/hero-kilimanjaro.jpg";
import kilimanjaroImage2 from "@/assets/Mount-Kilimanjaro-Tanzania-1.jpg";
import kilimanjaroImage3 from "@/assets/ngorogoro-crater-1.jpg";
import kilimanjaroImage4 from "@/assets/rhino.jpg";

import zanzibarImage1 from "@/assets/Zanzibar.jpg";
import zanzibarImage2 from "@/assets/baloon.jpg";
import zanzibarImage3 from "@/assets/Arusha.jpg";
import zanzibarImage4 from "@/assets/tarangire-1.jpg";

const DestinationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  const destinations = [
    {
      id: 1,
      name: "Serengeti National Park",
      location: "Northern Tanzania",
      description: "Witness the Great Migration and encounter the Big Five in Africa's most famous safari destination.",
      longDescription: "The Serengeti National Park is Tanzania's oldest and most iconic national park, covering 14,750 square kilometers of endless plains, woodlands, and riverine forests. Home to the world's largest land animal migration, the park hosts over 1.5 million wildebeest, 300,000 Thomson's gazelles, and 200,000 zebras during their annual circular trek. The park's diverse ecosystems support an incredible variety of wildlife, including the famous Big Five - lions, leopards, elephants, buffalo, and rhinoceros.",
      highlights: ["Great Migration", "Big Five", "Endless Plains", "Hot Air Balloon Safaris"],
      bestTime: "June - October",
      duration: "3-5 Days",
      difficulty: "Easy",
      icon: Trees,
      rating: 4.9,
      temperature: "15-28°C",
      rainfall: "500-1200mm",
      images: [
        serengetiImage1,
        serengetiImage2,
        serengetiImage3,
        serengetiImage4
      ],
      activities: [
        "Game Drives",
        "Hot Air Balloon Safari",
        "Walking Safari",
        "Cultural Tours",
        "Photography Safari",
        "Night Drives"
      ],
      wildlife: [
        "Lions", "Leopards", "Cheetahs", "Elephants", "Rhinoceros", "Buffalo",
        "Wildebeest", "Zebras", "Giraffes", "Hippos", "Crocodiles", "Over 500 bird species"
      ],
      bestTimeDetails: {
        "Dry Season (June-October)": "Best wildlife viewing, Great Migration river crossings",
        "Wet Season (November-May)": "Calving season, lush landscapes, fewer crowds",
        "Migration Timing": "December-July in various parts of the ecosystem"
      },
      itinerary: [
        {
          day: 1,
          title: "Arrival & Central Serengeti",
          activities: ["Airport pickup", "Game drive to camp", "Sunset wildlife viewing"]
        },
        {
          day: 2,
          title: "Full Day Safari",
          activities: ["Early morning game drive", "Picnic lunch in the wild", "Afternoon wildlife tracking"]
        },
        {
          day: 3,
          title: "Migration Experience",
          activities: ["Migration herds viewing", "River crossing observation", "Cultural village visit"]
        }
      ]
    },
    {
      id: 2,
      name: "Mount Kilimanjaro",
      location: "Northern Tanzania",
      description: "Conquer Africa's highest peak and stand on the Roof of Africa with breathtaking sunrise views.",
      longDescription: "Mount Kilimanjaro, standing at 5,895 meters (19,341 feet), is the highest peak in Africa and the world's tallest free-standing mountain. This magnificent stratovolcano consists of three volcanic cones: Kibo, Mawenzi, and Shira. The mountain offers a unique climbing experience, taking trekkers through five distinct climate zones, from tropical rainforest to arctic conditions at the summit. Each year, thousands of adventurers attempt to reach Uhuru Peak, making it one of the most popular mountaineering destinations in the world.",
      highlights: ["Roof of Africa", "5 Climate Zones", "Machame Route", "Uhuru Peak"],
      bestTime: "January - March, June - October",
      duration: "5-9 Days",
      difficulty: "Challenging",
      icon: Mountain,
      rating: 4.8,
      temperature: "-7 to 30°C",
      rainfall: "1000-2000mm",
      images: [
        kilimanjaroImage1,
        kilimanjaroImage2,
        kilimanjaroImage3,
        kilimanjaroImage4
      ],
      activities: [
        "Machame Route Climbing",
        "Marangu Route Climbing", 
        "Lemosho Route Climbing",
        "Photography Expeditions",
        "Cultural Tours",
        "Day Hikes"
      ],
      wildlife: [
        "Blue Monkeys", "Black & White Colobus", "Elephants", "Leopards", "Buffalo",
        "Eland", "Bushbuck", "Duiker", "Over 140 bird species"
      ],
      bestTimeDetails: {
        "Dry Season (June-October)": "Clear skies, best summit success rates",
        "January-March": "Warmer temperatures, fewer crowds",
        "April-May": "Rainy season, not recommended for climbing"
      },
      itinerary: [
        {
          day: 1,
          title: "Machame Gate to Machame Camp",
          activities: ["Registration at gate", "Rainforest trekking", "Camp setup at 3,010m"]
        },
        {
          day: 2,
          title: "Machame Camp to Shira Camp", 
          activities: ["Moorland zone crossing", "Shira Plateau", "Acclimatization walk"]
        },
        {
          day: 3,
          title: "Shira to Barranco Camp",
          activities: ["Lava Tower approach", "Alpine desert zone", "Barranco Wall preparation"]
        }
      ]
    },
    {
      id: 3,
      name: "Zanzibar Island",
      location: "Indian Ocean",
      description: "Relax on pristine beaches, explore Stone Town's rich history, and experience Swahili culture.",
      longDescription: "Zanzibar, the 'Spice Island' of the Indian Ocean, is a captivating archipelago off the coast of Tanzania. The main island, Unguja, boasts pristine white sand beaches, crystal-clear turquoise waters, and a rich cultural heritage spanning over 1,000 years. Stone Town, a UNESCO World Heritage Site, tells the story of centuries of Arab, Persian, Indian, and European influences through its winding alleys, historic buildings, and bustling markets. The island's spice plantations produce some of the world's finest cloves, nutmeg, cinnamon, and black pepper.",
      highlights: ["Pristine Beaches", "Stone Town", "Spice Tours", "Dhow Cruises"],
      bestTime: "June - September, December - February",
      duration: "3-7 Days",
      difficulty: "Easy",
      icon: Waves,
      rating: 4.7,
      temperature: "24-32°C",
      rainfall: "1600mm",
      images: [
        zanzibarImage1,
        zanzibarImage2,
        zanzibarImage3,
        zanzibarImage4
      ],
      activities: [
        "Beach Relaxation",
        "Snorkeling & Diving",
        "Stone Town Walking Tours",
        "Spice Plantation Tours",
        "Dhow Sunset Cruises",
        "Swimming with Dolphins"
      ],
      wildlife: [
        "Dolphins", "Sea Turtles", "Tropical Fish", "Red Colobus Monkeys", 
        "Zanzibar Leopard", "Various Marine Life", "Over 100 bird species"
      ],
      bestTimeDetails: {
        "Dry Season (June-September)": "Perfect beach weather, calm seas",
        "December-February": "Warm temperatures, occasional showers", 
        "March-May": "Long rains, humid conditions"
      },
      itinerary: [
        {
          day: 1,
          title: "Stone Town Exploration",
          activities: ["Historical walking tour", "Spice market visit", "Sunset dhow cruise"]
        },
        {
          day: 2,
          title: "Spice Tour & Beach",
          activities: ["Spice plantation tour", "Traditional lunch", "Beach relaxation"]
        },
        {
          day: 3,
          title: "Marine Adventures",
          activities: ["Snorkeling excursion", "Dolphin watching", "Seafood dinner"]
        }
      ]
    }
  ];

  const destination = destinations.find(d => d.id === parseInt(id || '1'));
  
  if (!destination) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Destination not found</h1>
          <Button onClick={() => navigate('/destinations')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Destinations
          </Button>
        </div>
      </div>
    );
  }

  const IconComponent = destination.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with Image Gallery */}
      <section className="pt-20">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-6">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/destinations')}
              className="hover:bg-muted"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Destinations
            </Button>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-4 gap-4 mb-8 h-96">
            <div className="col-span-3">
              <img
                src={destination.images[selectedImage]}
                alt={destination.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4">
              {destination.images.slice(0, 3).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${destination.name} ${index + 1}`}
                  className={`w-full h-28 object-cover rounded-lg cursor-pointer transition-all ${
                    selectedImage === index ? 'ring-2 ring-primary' : 'hover:opacity-80'
                  }`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          </div>

          {/* Header Info */}
          <div className="flex justify-between items-start mb-8 mt-36 md:mt-40 lg:mt-52">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                    {destination.name}
                  </h1>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{destination.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{destination.rating}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>{destination.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-primary" />
                  <Badge variant="outline">{destination.difficulty}</Badge>
                </div>
              </div>
            </div>

            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="activities">Activities</TabsTrigger>
                  <TabsTrigger value="wildlife">Wildlife</TabsTrigger>
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6 mt-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">About {destination.name}</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {destination.longDescription}
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Highlights</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {destination.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Best Time to Visit</h3>
                    <div className="space-y-3">
                      {Object.entries(destination.bestTimeDetails).map(([period, details]) => (
                        <div key={period} className="bg-muted/30 p-4 rounded-lg">
                          <h4 className="font-medium text-sm mb-1">{period}</h4>
                          <p className="text-sm text-muted-foreground">{details}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="activities" className="mt-6">
                  <h2 className="text-2xl font-bold mb-4">Available Activities</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {destination.activities.map((activity, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-3">
                            <div className="bg-primary/10 rounded-full p-2">
                              <Binoculars className="h-4 w-4 text-primary" />
                            </div>
                            <span className="font-medium">{activity}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="wildlife" className="mt-6">
                  <h2 className="text-2xl font-bold mb-4">Wildlife & Flora</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {destination.wildlife.map((animal, index) => (
                      <Badge key={index} variant="outline" className="justify-center p-2">
                        {animal}
                      </Badge>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="itinerary" className="mt-6">
                  <h2 className="text-2xl font-bold mb-4">Sample Itinerary</h2>
                  <div className="space-y-6">
                    {destination.itinerary.map((day, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">
                              {day.day}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold mb-2">{day.title}</h3>
                              <ul className="space-y-1">
                                {day.activities.map((activity, actIndex) => (
                                  <li key={actIndex} className="text-sm text-muted-foreground flex items-center space-x-2">
                                    <CheckCircle className="h-3 w-3 text-primary" />
                                    <span>{activity}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Quick Info Card */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Quick Information</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-medium">{destination.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Difficulty:</span>
                        <Badge variant="outline" className="text-xs">{destination.difficulty}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Best Time:</span>
                        <span className="font-medium text-xs">{destination.bestTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Temperature:</span>
                        <span className="font-medium">{destination.temperature}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Booking Card */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Plan Your Visit</h3>
                    <div className="space-y-3">
                      <Button className="w-full" size="lg" asChild>
                        <Link to="/contact">
                          <Calendar className="mr-2 h-4 w-4" />
                          Book Now
                        </Link>
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Info className="mr-2 h-4 w-4" />
                        Get Information
                      </Button>
                      <Button variant="ghost" className="w-full">
                        <Camera className="mr-2 h-4 w-4" />
                        View Gallery
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Weather Card */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 flex items-center">
                      <ThermometerSun className="mr-2 h-4 w-4" />
                      Weather Info
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Temperature:</span>
                        <span>{destination.temperature}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Annual Rainfall:</span>
                        <span>{destination.rainfall}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DestinationDetail;