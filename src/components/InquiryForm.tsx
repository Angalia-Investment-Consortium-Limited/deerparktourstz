import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { 
  CalendarIcon, 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  Heart,
  DollarSign,
  Crown,
  Briefcase,
  Send
} from "lucide-react";

interface InquiryFormProps {
  userType?: "budget" | "family" | "luxury" | "agents";
  packageId?: string;
  onSubmit?: (data: any) => void;
}

const InquiryForm = ({ userType = "family", packageId, onSubmit }: InquiryFormProps) => {
  const [formData, setFormData] = useState({
    // Basic Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    
    // Trip Details
    travelDate: undefined as Date | undefined,
    duration: "",
    groupSize: "",
    budget: "",
    
    // Preferences
    accommodationType: "",
    specialRequests: "",
    dietaryRestrictions: "",
    
    // User-type specific
    ageGroup: "", // for budget
    occasion: "", // for luxury
    businessName: "", // for agents
    experienceLevel: "",
    
    // Additional
    hearAboutUs: "",
    newsletter: false
  });

  const userTypeConfigs = {
    budget: {
      title: "Budget Safari Inquiry",
      subtitle: "Let's plan an amazing adventure within your budget",
      icon: DollarSign,
      color: "tertiary",
      budgetOptions: ["Under $1,000", "$1,000-$2,000", "$2,000-$3,000", "Flexible"],
      accommodationOptions: ["Camping", "Basic Lodge", "Guesthouse", "Hostel"]
    },
    family: {
      title: "Family Safari Inquiry", 
      subtitle: "Create unforgettable memories for the whole family",
      icon: Heart,
      color: "accent",
      budgetOptions: ["$2,000-$4,000", "$4,000-$6,000", "$6,000-$8,000", "Premium Budget"],
      accommodationOptions: ["Family Lodge", "Safari Camp", "Resort", "Private Villa"]
    },
    luxury: {
      title: "Luxury Safari Inquiry",
      subtitle: "Experience Tanzania in ultimate comfort and style",
      icon: Crown,
      color: "primary", 
      budgetOptions: ["$5,000-$8,000", "$8,000-$12,000", "$12,000+", "No Budget Limit"],
      accommodationOptions: ["Luxury Lodge", "Tented Camp", "Private Estate", "Exclusive Resort"]
    },
    agents: {
      title: "Travel Agent Partnership",
      subtitle: "Professional packages with exclusive agent rates",
      icon: Briefcase,
      color: "accent",
      budgetOptions: ["Group Rates", "Premium Packages", "Custom Pricing", "Volume Discounts"],
      accommodationOptions: ["Various Options", "Client Choice", "Tiered Packages", "Custom Selection"]
    }
  };

  const config = userTypeConfigs[userType];
  const IconComponent = config.icon;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { userType, packageId, ...formData });
    onSubmit?.({ userType, packageId, ...formData });
  };

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="max-w-2xl mx-auto shadow-card-custom">
      <CardHeader className="text-center">
        <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${config.color}/10 flex items-center justify-center`}>
          <IconComponent className={`h-8 w-8 text-${config.color}`} />
        </div>
        <CardTitle className="text-2xl font-bold">{config.title}</CardTitle>
        <p className="text-muted-foreground">{config.subtitle}</p>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Personal Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => updateFormData("firstName", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => updateFormData("lastName", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    className="pl-10"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    className="pl-10"
                    value={formData.phone}
                    onChange={(e) => updateFormData("phone", e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="country">Country/Region</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="country"
                  className="pl-10"
                  value={formData.country}
                  onChange={(e) => updateFormData("country", e.target.value)}
                  placeholder="Where are you traveling from?"
                />
              </div>
            </div>

            {/* User-type specific fields */}
            {userType === "budget" && (
              <div>
                <Label htmlFor="ageGroup">Age Group</Label>
                <Select onValueChange={(value) => updateFormData("ageGroup", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your age group" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="18-25">18-25 (Student/Young Traveler)</SelectItem>
                    <SelectItem value="26-35">26-35</SelectItem>
                    <SelectItem value="36-50">36-50</SelectItem>
                    <SelectItem value="50+">50+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {userType === "luxury" && (
              <div>
                <Label htmlFor="occasion">Special Occasion</Label>
                <Select onValueChange={(value) => updateFormData("occasion", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="What's the occasion?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="honeymoon">Honeymoon</SelectItem>
                    <SelectItem value="anniversary">Anniversary</SelectItem>
                    <SelectItem value="birthday">Birthday Celebration</SelectItem>
                    <SelectItem value="retirement">Retirement Trip</SelectItem>
                    <SelectItem value="leisure">Luxury Leisure</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {userType === "agents" && (
              <div>
                <Label htmlFor="businessName">Business/Agency Name *</Label>
                <Input
                  id="businessName"
                  value={formData.businessName}
                  onChange={(e) => updateFormData("businessName", e.target.value)}
                  placeholder="Your travel agency name"
                  required={userType === "agents"}
                />
              </div>
            )}
          </div>

          {/* Trip Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Trip Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Preferred Travel Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !formData.travelDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.travelDate ? format(formData.travelDate, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={formData.travelDate}
                      onSelect={(date) => updateFormData("travelDate", date)}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Label htmlFor="duration">Trip Duration</Label>
                <Select onValueChange={(value) => updateFormData("duration", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="How long?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3-4">3-4 Days</SelectItem>
                    <SelectItem value="5-7">5-7 Days</SelectItem>
                    <SelectItem value="8-10">8-10 Days</SelectItem>
                    <SelectItem value="11-14">11-14 Days</SelectItem>
                    <SelectItem value="15+">15+ Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="groupSize">Group Size</Label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Select onValueChange={(value) => updateFormData("groupSize", value)}>
                    <SelectTrigger className="pl-10">
                      <SelectValue placeholder="Number of travelers" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Just me (1 person)</SelectItem>
                      <SelectItem value="2">Couple (2 people)</SelectItem>
                      <SelectItem value="3-4">Small group (3-4 people)</SelectItem>
                      <SelectItem value="5-8">Medium group (5-8 people)</SelectItem>
                      <SelectItem value="9+">Large group (9+ people)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="budget">Budget Range (per person)</Label>
                <Select onValueChange={(value) => updateFormData("budget", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    {config.budgetOptions.map((option) => (
                      <SelectItem key={option} value={option}>{option}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Preferences</h3>
            
            <div>
              <Label htmlFor="accommodationType">Accommodation Preference</Label>
              <Select onValueChange={(value) => updateFormData("accommodationType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select accommodation type" />
                </SelectTrigger>
                <SelectContent>
                  {config.accommodationOptions.map((option) => (
                    <SelectItem key={option} value={option}>{option}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="experienceLevel">Safari Experience Level</Label>
              <Select onValueChange={(value) => updateFormData("experienceLevel", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Your safari experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="first-time">First-time safari goer</SelectItem>
                  <SelectItem value="some">Some safari experience</SelectItem>
                  <SelectItem value="experienced">Experienced traveler</SelectItem>
                  <SelectItem value="expert">Safari expert</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="dietaryRestrictions">Dietary Restrictions</Label>
              <Input
                id="dietaryRestrictions"
                value={formData.dietaryRestrictions}
                onChange={(e) => updateFormData("dietaryRestrictions", e.target.value)}
                placeholder="Vegetarian, allergies, etc."
              />
            </div>

            <div>
              <Label htmlFor="specialRequests">Special Requests or Questions</Label>
              <Textarea
                id="specialRequests"
                rows={4}
                value={formData.specialRequests}
                onChange={(e) => updateFormData("specialRequests", e.target.value)}
                placeholder={
                  userType === "luxury" 
                    ? "Private dining, helicopter transfers, exclusive experiences..."
                    : userType === "budget"
                    ? "Group discounts, student rates, flexible itinerary..."
                    : userType === "agents"
                    ? "Commission structure, group rates, marketing materials..."
                    : "Activities for kids, accessibility needs, photography tours..."
                }
              />
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Additional Information</h3>
            
            <div>
              <Label htmlFor="hearAboutUs">How did you hear about us?</Label>
              <Select onValueChange={(value) => updateFormData("hearAboutUs", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="google">Google Search</SelectItem>
                  <SelectItem value="social">Social Media</SelectItem>
                  <SelectItem value="referral">Friend/Family Referral</SelectItem>
                  <SelectItem value="agent">Travel Agent</SelectItem>
                  <SelectItem value="review">Review Sites</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="newsletter"
                checked={formData.newsletter}
                onCheckedChange={(checked) => updateFormData("newsletter", checked)}
              />
              <Label htmlFor="newsletter" className="text-sm">
                Subscribe to our newsletter for exclusive offers and travel tips
              </Label>
            </div>
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            size="lg" 
            className={`w-full bg-${config.color} hover:bg-${config.color}/90 transition-colors`}
          >
            <Send className="mr-2 h-4 w-4" />
            {userType === "agents" ? "Request Partnership Info" : "Send Inquiry"}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            We'll respond within 24 hours with a personalized quote and itinerary.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default InquiryForm;