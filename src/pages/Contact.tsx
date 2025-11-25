import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryForm from "@/components/InquiryForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageCircle,
  DollarSign,
  Heart,
  Crown,
  Briefcase
} from "lucide-react";

const Contact = () => {
  const [selectedUserType, setSelectedUserType] = useState<"budget" | "family" | "luxury" | "agents">("family");

  const userTypes = [
    { id: "budget" as const, label: "Budget Travelers", icon: DollarSign, description: "Students, solo travelers, backpackers" },
    { id: "family" as const, label: "Families & Couples", icon: Heart, description: "Mid-range comfort seekers" },
    { id: "luxury" as const, label: "Luxury Travelers", icon: Crown, description: "VIP experiences, honeymooners" },
    { id: "agents" as const, label: "Travel Agents", icon: Briefcase, description: "B2B partnerships" }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+255 123 456 789", "+255 987 654 321"],
      availability: "24/7 Emergency Line Available"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@deerparktours.com", "bookings@deerparktours.com"],
      availability: "Response within 24 hours"
    },
    {
      icon: MapPin,
      title: "Office Location",
      details: ["Arusha, Tanzania", "P.O. Box 12345"],
      availability: "Mon-Fri: 8AM-6PM EAT"
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Sat-Sun: 9:00 AM - 4:00 PM"],
      availability: "East Africa Time (EAT)"
    }
  ];

  const handleFormSubmit = (data: any) => {
    console.log("Inquiry submitted:", data);
    // Here you would typically send the data to your backend
    alert("Thank you for your inquiry! We'll get back to you within 24 hours.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's Plan Your Perfect Safari
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Get in touch with our safari experts for personalized recommendations, 
              custom itineraries, and exclusive deals tailored to your travel style.
            </p>
          </div>
        </div>
      </section>

      {/* User Type Selection */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Choose Your Inquiry Type</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {userTypes.map((type) => {
                const IconComponent = type.icon;
                const isActive = selectedUserType === type.id;
                return (
                  <Card 
                    key={type.id}
                    className={`cursor-pointer transition-all hover:shadow-card-custom ${
                      isActive ? "border-primary border-2 bg-primary/5" : "hover:border-primary/50"
                    }`}
                    onClick={() => setSelectedUserType(type.id)}
                  >
                    <CardContent className="p-6 text-center">
                      <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center ${
                        isActive ? "bg-primary text-primary-foreground" : ""
                      }`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="font-semibold mb-2">{type.label}</h3>
                      <p className="text-xs text-muted-foreground">{type.description}</p>
                      {isActive && (
                        <Badge variant="default" className="mt-2">Selected</Badge>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <InquiryForm 
            userType={selectedUserType}
            onSubmit={handleFormSubmit}
          />
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Other Ways to Reach Us
              </h2>
              <p className="text-lg text-muted-foreground">
                We're here to help with any questions about your Tanzania safari adventure
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-card-custom transition-shadow">
                    <CardHeader>
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{info.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-4">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-foreground font-medium">{detail}</p>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">{info.availability}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <MessageCircle className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Our safari specialists are standing by to help you plan the perfect 
              Tanzania adventure. Get instant answers to your questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Phone className="mr-2 h-4 w-4" />
                Call Now: +255 123 456 789
              </Button>
              {/* <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <MessageCircle className="mr-2 h-4 w-4" />
                Live Chat Support
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;