import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Logo from "@/components/ui/logo";
import { 
  Tent, 
  Hotel, 
  Crown, 
  Users, 
  Calendar, 
  MapPin, 
  Star,
  Check,
  Filter,
  DollarSign,
  Heart,
  Briefcase,
  UserCheck
} from "lucide-react";

const TourPackages = () => {
  const [selectedUserType, setSelectedUserType] = useState("all");

  const userTypes = [
    { id: "all", label: "All Packages", icon: Filter },
    { id: "budget", label: "Budget Travelers", icon: DollarSign, description: "Solo travelers, students" },
    { id: "family", label: "Families & Couples", icon: Heart, description: "Mid-range comfort" },
    { id: "luxury", label: "Luxury Travelers", icon: Crown, description: "Honeymooners, VIPs" },
    { id: "agents", label: "Travel Agents", icon: Briefcase, description: "B2B packages" }
  ];

  const packages = [
    {
      id: 1,
      name: "Essential Safari",
      category: "Budget",
      userTypes: ["budget", "agents"],
      price: "$1,299",
      agentPrice: "$999",
      duration: "5 Days",
      groupSize: "8-12 People",
      icon: Tent,
      color: "secondary",
      features: [
        "Comfortable camping accommodations",
        "Shared safari vehicles",
        "Professional guide included",
        "All meals during safari",
        "Park entrance fees",
        "Airport transfers"
      ],
      destinations: ["Serengeti", "Ngorongoro", "Tarangire"],
      rating: 4.2,
      idealFor: "Solo travelers, students, budget-conscious groups",
      commissionRate: "15%"
    },
    {
      id: 2,
      name: "Classic Safari",
      category: "Mid-Range",
      userTypes: ["family", "agents"],
      price: "$2,499",
      agentPrice: "$1,999",
      duration: "7 Days",
      groupSize: "4-8 People",
      icon: Hotel,
      color: "accent",
      features: [
        "Lodge accommodations",
        "Private safari vehicles",
        "Expert naturalist guide",
        "All meals & beverages",
        "Cultural village visit",
        "Hot air balloon safari"
      ],
      destinations: ["Serengeti", "Ngorongoro", "Kilimanjaro", "Zanzibar"],
      rating: 4.7,
      popular: true,
      idealFor: "Families with children, couples seeking comfort",
      commissionRate: "18%"
    },
    {
      id: 3,
      name: "Premium Safari",
      category: "Luxury",
      userTypes: ["luxury", "agents"],
      price: "$4,999",
      agentPrice: "$3,999",
      duration: "10 Days",
      groupSize: "2-4 People",
      icon: Crown,
      color: "primary",
      features: [
        "Luxury tented camps & lodges",
        "Private vehicle & guide",
        "Gourmet dining experiences",
        "Premium beverages included",
        "Helicopter transfers",
        "Exclusive wildlife experiences"
      ],
      destinations: ["Serengeti", "Ngorongoro", "Kilimanjaro", "Zanzibar", "Ruaha"],
      rating: 4.9,
      idealFor: "Honeymooners, VIP travelers, luxury seekers",
      commissionRate: "20%"
    },
    {
      id: 4,
      name: "Student Adventure",
      category: "Budget Plus",
      userTypes: ["budget"],
      price: "$899",
      duration: "4 Days",
      groupSize: "12-16 People",
      icon: UserCheck,
      color: "tertiary",
      features: [
        "Camping accommodations",
        "Shared transportation",
        "Young traveler guide",
        "Basic meals included",
        "Group activities",
        "Student discounts"
      ],
      destinations: ["Tarangire", "Ngorongoro"],
      rating: 4.0,
      idealFor: "Students, young backpackers, gap year travelers"
    },
    {
      id: 5,
      name: "Honeymoon Special",
      category: "Romance",
      userTypes: ["luxury"],
      price: "$6,999",
      duration: "8 Days",
      groupSize: "2 People",
      icon: Heart,
      color: "tertiary",
      features: [
        "Romantic luxury lodges",
        "Private butler service",
        "Candlelit dinners",
        "Couples spa treatments",
        "Hot air balloon ride",
        "Beach extension"
      ],
      destinations: ["Serengeti", "Ngorongoro", "Zanzibar"],
      rating: 5.0,
      idealFor: "Honeymoon couples, romantic getaways"
    }
  ];

  const filteredPackages = selectedUserType === "all" 
    ? packages 
    : packages.filter(pkg => pkg.userTypes?.includes(selectedUserType));

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Subtle watermark logo */}
      <Logo 
        variant="watermark" 
        size="xl" 
        className="top-10 left-10 text-primary/10"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-primary text-3xl md:text-4xl text-foreground mb-4">
            Choose Your Perfect Safari Adventure
          </h2>
          <p className="body-large text-lg text-muted-foreground">
            From essential experiences to luxury expeditions, we have the perfect 
            safari package tailored to your dreams and budget.
          </p>
        </div>

        {/* User Type Filter */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-center mb-6">Find packages perfect for:</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {userTypes.map((type) => {
              const IconComponent = type.icon;
              const isActive = selectedUserType === type.id;
              return (
                <Button
                  key={type.id}
                  variant={isActive ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedUserType(type.id)}
                  className={`flex items-center space-x-2 transition-all ${
                    isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{type.label}</span>
                </Button>
              );
            })}
          </div>
          
          {selectedUserType !== "all" && (
            <div className="text-center mt-4">
              <p className="text-sm text-muted-foreground">
                {userTypes.find(t => t.id === selectedUserType)?.description}
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => {
            const IconComponent = pkg.icon;
            return (
              <Card 
                key={pkg.id} 
                className={`relative overflow-hidden shadow-card-custom hover:shadow-safari transition-all duration-300 hover:-translate-y-2 ${
                  pkg.popular ? 'border-primary border-2' : ''
                }`}
              >
                {pkg.popular && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${pkg.color}/10 flex items-center justify-center`}>
                    <IconComponent className={`h-8 w-8 text-${pkg.color}`} />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                  <Badge variant="outline" className="w-fit mx-auto">
                    {pkg.category}
                  </Badge>
                  
                  <div className="text-center space-y-2 pt-4">
                    <div className="text-3xl font-bold text-primary">
                      {selectedUserType === "agents" && pkg.agentPrice ? pkg.agentPrice : pkg.price}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {selectedUserType === "agents" ? "agent price" : "per person"}
                    </div>
                    {selectedUserType === "agents" && pkg.commissionRate && (
                      <Badge variant="secondary" className="text-xs">
                        {pkg.commissionRate} commission
                      </Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Package Info */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{pkg.groupSize}</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{pkg.rating}</span>
                    <span className="text-sm text-muted-foreground">(150+ reviews)</span>
                  </div>

                  {/* Ideal For */}
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="font-medium text-sm">Ideal for:</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{pkg.idealFor}</p>
                  </div>

                  {/* Destinations */}
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="font-medium text-sm">Destinations:</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {pkg.destinations.map((dest) => (
                        <Badge key={dest} variant="secondary" className="text-xs">
                          {dest}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-medium mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm">
                          <Check className="h-3 w-3 text-secondary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    className={`w-full transition-opacity ${
                      selectedUserType === "agents" 
                        ? "bg-accent text-accent-foreground hover:bg-accent/90" 
                        : "bg-safari-gradient hover:opacity-90"
                    }`}
                    onClick={() => {
                      // Navigate to contact page with pre-selected user type and package
                      window.location.href = `/contact?userType=${selectedUserType}&package=${pkg.id}`;
                    }}
                  >
                    {selectedUserType === "agents" ? "Request Agent Info" : "Get Quote & Book"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredPackages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">
              No packages found for this category. 
            </p>
            <Button 
              variant="outline" 
              onClick={() => setSelectedUserType("all")}
            >
              View All Packages
            </Button>
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            {selectedUserType === "agents" 
              ? "Partner with us for exclusive rates and dedicated support."
              : "Need a custom package? We create personalized safaris tailored to your preferences."
            }
          </p>
          <Button variant="outline" size="lg" asChild>
            <Link to="/contact">
              {selectedUserType === "agents" ? "Become a Partner" : "Create Custom Safari"}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TourPackages;