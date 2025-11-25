import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import Logo from "@/components/ui/logo";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      country: "United States",
      rating: 5,
      text: "DeerPark Tours exceeded all our expectations! The guides were incredibly knowledgeable, and we saw all the Big Five. The accommodations were perfect, and the attention to detail was outstanding.",
      initials: "SJ"
    },
    {
      id: 2,
      name: "Marco & Elena Rossi",
      country: "Italy",
      rating: 5,
      text: "Our honeymoon safari was absolutely magical. From the Serengeti to Zanzibar, every moment was perfectly planned. The cultural experiences were authentic and deeply moving.",
      initials: "MR"
    },
    {
      id: 3,
      name: "David Thompson",
      country: "United Kingdom",
      rating: 5,
      text: "As a photographer, I was amazed by the opportunities DeerPark provided. They knew exactly where to be at the right time for the best wildlife shots. Truly professional service.",
      initials: "DT"
    },
    {
      id: 4,
      name: "Hiroshi Tanaka",
      country: "Japan",
      rating: 5,
      text: "The luxury package was worth every penny. The private guide shared incredible insights about Tanzanian wildlife and culture. An unforgettable experience!",
      initials: "HT"
    },
    {
      id: 5,
      name: "Emma & James Wilson",
      country: "Australia",
      rating: 5,
      text: "Traveling with teenagers can be challenging, but DeerPark made it seamless. The kids were engaged throughout, and we all learned so much about conservation.",
      initials: "EW"
    },
    {
      id: 6,
      name: "Ana Rodriguez",
      country: "Spain",
      rating: 5,
      text: "Solo female traveler here - I felt completely safe and welcomed. The group was friendly, and the guides were respectful and professional. Highly recommend!",
      initials: "AR"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Subtle watermark logo */}
      <Logo 
        variant="watermark" 
        size="lg" 
        className="top-1/2 right-10 -translate-y-1/2 text-muted/20"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-primary text-3xl md:text-4xl text-foreground mb-4">
            What Our Travelers Say
          </h2>
          <p className="body-large text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our guests have to say about 
            their unforgettable Tanzania adventures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-card-custom transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Quote className="h-8 w-8 text-primary/30 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-foreground mb-4 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="flex items-center space-x-1 mb-3">
                      {Array.from({ length: testimonial.rating }).map((_, index) => (
                        <Star key={index} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-primary/10 text-primary font-medium">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.country}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex items-center space-x-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-bold text-lg">4.9/5</span>
          </div>
          <p className="text-muted-foreground">
            Based on 500+ verified reviews from TripAdvisor, Google, and direct feedback
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;