import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/ui/logo";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo 
              variant="full" 
              size="lg" 
              inverted={true}
              className="filter brightness-0 invert"
            />
            <p className="text-sm text-background/80">
              Experience the authentic beauty of Tanzania with our expertly crafted safari tours and cultural adventures.
            </p>
            <div className="flex space-x-3">
              <Facebook className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link to="/" className="block hover:text-primary transition-colors">Home</Link>
              <Link to="/packages" className="block hover:text-primary transition-colors">Tour Packages</Link>
              <Link to="/destinations" className="block hover:text-primary transition-colors">Destinations</Link>
              <Link to="/about" className="block hover:text-primary transition-colors">About Us</Link>
              <Link to="/contact" className="block hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-semibold mb-4">Popular Destinations</h4>
            <div className="space-y-2 text-sm">
              <Link to="/destinations/serengeti" className="block hover:text-primary transition-colors">Serengeti National Park</Link>
              <Link to="/destinations/kilimanjaro" className="block hover:text-primary transition-colors">Mount Kilimanjaro</Link>
              <Link to="/destinations/zanzibar" className="block hover:text-primary transition-colors">Zanzibar</Link>
              <Link to="/destinations/ngorongoro" className="block hover:text-primary transition-colors">Ngorongoro Crater</Link>
              <Link to="/destinations/tarangire" className="block hover:text-primary transition-colors">Tarangire National Park</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p>Arusha Office:</p>
                  <p className="text-background/80">Plot 123, Safari Road, Arusha, Tanzania</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p>Dar es Salaam Office:</p>
                  <p className="text-background/80">Plot 456, Ocean Drive, Dar es Salaam</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+255 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@deerparktours.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-sm text-background/60">
            © 2024 DeerPark Tours. All rights reserved. Proudly Tanzanian.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;