import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Heart, 
  Award, 
  Shield,
  Target,
  Eye,
  MapPin,
  Calendar,
  Globe
} from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Joseph Mwangi",
      role: "Founder & Lead Guide",
      experience: "15+ Years",
      speciality: "Big Five & Bird Watching",
      description: "Born and raised in Arusha, Joseph's passion for wildlife started in childhood."
    },
    {
      name: "Amina Hassan",
      role: "Operations Manager", 
      experience: "10+ Years",
      speciality: "Logistics & Client Relations",
      description: "Ensures every detail of your safari is perfectly coordinated."
    },
    {
      name: "Michael Ole Sankale",
      role: "Cultural Experience Guide",
      experience: "12+ Years", 
      speciality: "Maasai Culture & Traditions",
      description: "A proud Maasai warrior sharing authentic cultural experiences."
    },
    {
      name: "Sarah Kimario",
      role: "Wildlife Photographer Guide",
      experience: "8+ Years",
      speciality: "Photography & Conservation",
      description: "Award-winning photographer helping capture your perfect safari moments."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Authentic Experiences",
      description: "We showcase the real Tanzania through genuine cultural interactions and pristine wilderness encounters."
    },
    {
      icon: Shield,
      title: "Safety & Responsibility",
      description: "Your safety is our priority. We maintain the highest standards in vehicle maintenance and guide training."
    },
    {
      icon: Globe,
      title: "Conservation Commitment",
      description: "We actively support wildlife conservation and community development projects across Tanzania."
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "Every safari is tailored to your interests, ensuring a unique and memorable experience."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About DeerPark Tours
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a proudly Tanzanian company dedicated to sharing the incredible 
              wildlife, landscapes, and culture of our beautiful country with the world.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2013 by wildlife enthusiast Joseph Mwangi, DeerPark Tours 
                began as a dream to share Tanzania's incredible natural heritage with 
                visitors from around the world. Growing up in the shadow of Mount 
                Kilimanjaro, Joseph witnessed firsthand the majesty of Africa's wildlife 
                and the rich cultural traditions of Tanzania's diverse communities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we're a team of passionate locals who combine traditional 
                knowledge with modern safari standards. Our guides aren't just 
                experts—they're storytellers, conservationists, and cultural ambassadors 
                who bring Tanzania to life for every guest.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Guests</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Destinations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <Card className="p-6 bg-primary/5 border-primary/20">
                <div className="flex items-center space-x-3 mb-3">
                  <Eye className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground">
                  To be Tanzania's leading sustainable tourism company, showcasing our 
                  country's natural wonders while supporting conservation and local communities.
                </p>
              </Card>
              
              <Card className="p-6 bg-secondary/5 border-secondary/20">
                <div className="flex items-center space-x-3 mb-3">
                  <Target className="h-6 w-6 text-secondary" />
                  <h3 className="text-xl font-semibold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground">
                  To create authentic, transformative travel experiences that connect 
                  people with Tanzania's wildlife, landscapes, and cultures while 
                  contributing to conservation and community development.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground">
              These core principles guide everything we do, from planning your safari 
              to supporting local conservation efforts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-card-custom transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      {/* <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Our passionate team of local experts brings years of experience and 
              deep knowledge of Tanzania's wildlife and culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-card-custom transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Users className="h-16 w-16 text-primary" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {member.experience}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {member.speciality}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Certifications & Awards */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Trusted & Recognized
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* <div className="text-center">
                <Award className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">TripAdvisor Excellence</h3>
                <p className="text-sm opacity-90">Certificate of Excellence 2020-2024</p>
              </div> */}
              
              <div className="text-center">
                <Shield className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Licensed Operator</h3>
                <p className="text-sm opacity-90">Tanzania Tourism License TL-001234</p>
              </div>
              
              <div className="text-center">
                <Heart className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Conservation Partner</h3>
                <p className="text-sm opacity-90">Supporting local wildlife projects</p>
              </div>
            </div>
            
            <div className="mt-12">
              <Button size="lg" variant="secondary">
                Start Your Journey With Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;