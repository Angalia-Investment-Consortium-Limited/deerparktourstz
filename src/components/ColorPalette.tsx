import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ColorPalette = () => {
  const colors = [
    {
      name: "Primary",
      hex: "#2A678C",
      description: "Deep blue - Used for main branding, primary buttons, and key elements",
      className: "bg-primary text-primary-foreground",
      usage: "Headers, primary CTAs, navigation"
    },
    {
      name: "Secondary", 
      hex: "#03A66A",
      description: "Vibrant green - Used for success states, nature elements, and secondary actions",
      className: "bg-secondary text-secondary-foreground",
      usage: "Success messages, nature icons, secondary buttons"
    },
    {
      name: "Accent",
      hex: "#F2911B", 
      description: "Bright orange - Used for highlights, warnings, and call-to-action elements",
      className: "bg-accent text-accent-foreground",
      usage: "Highlights, badges, important notifications"
    },
    {
      name: "Tertiary",
      hex: "#F2BB77",
      description: "Light orange/peach - Used for warm accents, romantic packages, and soft highlights",
      className: "bg-tertiary text-tertiary-foreground",
      usage: "Warm accents, romantic themes, soft backgrounds"
    },
    {
      name: "Background",
      hex: "#F2F2F2",
      description: "Light gray - Used as the main background color throughout the site",
      className: "bg-background text-foreground border border-border",
      usage: "Page backgrounds, card backgrounds, neutral areas"
    }
  ];

  const gradients = [
    {
      name: "Safari Gradient",
      description: "Primary to Secondary - Main brand gradient",
      className: "bg-safari-gradient text-white"
    },
    {
      name: "Sunset Gradient", 
      description: "Accent to Tertiary - Warm sunset colors",
      className: "bg-sunset-gradient text-white"
    },
    {
      name: "Warm Gradient",
      description: "Accent to Tertiary - Alternative warm gradient",
      className: "bg-warm-gradient text-white"
    }
  ];

  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Adobe Color Palette Integration
          </h2>
          <p className="text-lg text-muted-foreground">
            Your complete color palette (#2A678C, #03A66A, #F2911B, #F2BB77, #F2F2F2) 
            is now fully integrated into the Tanzanian Safari Journeys website.
          </p>
        </div>

        {/* Individual Colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {colors.map((color) => (
            <Card key={color.name} className="overflow-hidden">
              <div className={`h-24 ${color.className} flex items-center justify-center`}>
                <div className="text-center">
                  <div className="font-bold text-lg">{color.name}</div>
                  <div className="text-sm opacity-90">{color.hex}</div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">{color.name} Color</h3>
                <p className="text-sm text-muted-foreground mb-3">{color.description}</p>
                <Badge variant="outline" className="text-xs">
                  Usage: {color.usage}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Gradients */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Available Gradients</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gradients.map((gradient) => (
              <Card key={gradient.name} className="overflow-hidden">
                <div className={`h-32 ${gradient.className} flex items-center justify-center`}>
                  <div className="text-center">
                    <div className="font-bold text-lg">{gradient.name}</div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">{gradient.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Usage Examples */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center">Usage Examples</h3>
          
          {/* Buttons */}
          <div className="text-center space-y-4">
            <h4 className="text-lg font-semibold">Button Variations</h4>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-primary hover:bg-primary/90">Primary Button</Button>
              <Button className="bg-secondary hover:bg-secondary/90">Secondary Button</Button>
              <Button className="bg-accent hover:bg-accent/90">Accent Button</Button>
              <Button className="bg-tertiary hover:bg-tertiary/90">Tertiary Button</Button>
              <Button className="bg-safari-gradient hover:opacity-90">Safari Gradient</Button>
            </div>
          </div>

          {/* Badges */}
          <div className="text-center space-y-4">
            <h4 className="text-lg font-semibold">Badge Variations</h4>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge className="bg-primary text-primary-foreground">Primary Badge</Badge>
              <Badge className="bg-secondary text-secondary-foreground">Secondary Badge</Badge>
              <Badge className="bg-accent text-accent-foreground">Accent Badge</Badge>
              <Badge className="bg-tertiary text-tertiary-foreground">Tertiary Badge</Badge>
            </div>
          </div>

          {/* Cards with different color schemes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-primary">Primary Theme</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Card with primary color theme</p>
              </CardContent>
            </Card>
            
            <Card className="border-secondary/20 bg-secondary/5">
              <CardHeader>
                <CardTitle className="text-secondary">Secondary Theme</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Card with secondary color theme</p>
              </CardContent>
            </Card>
            
            <Card className="border-accent/20 bg-accent/5">
              <CardHeader>
                <CardTitle className="text-accent">Accent Theme</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Card with accent color theme</p>
              </CardContent>
            </Card>
            
            <Card className="border-tertiary/20 bg-tertiary/5">
              <CardHeader>
                <CardTitle className="text-tertiary">Tertiary Theme</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Card with tertiary color theme</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-12 p-6 bg-muted/30 rounded-lg">
          <h4 className="text-lg font-semibold mb-2">Integration Complete!</h4>
          <p className="text-muted-foreground">
            All five colors from your Adobe Color palette are now available throughout the website. 
            You can use classes like <code className="bg-muted px-2 py-1 rounded">bg-primary</code>, 
            <code className="bg-muted px-2 py-1 rounded">bg-secondary</code>, 
            <code className="bg-muted px-2 py-1 rounded">bg-accent</code>, 
            <code className="bg-muted px-2 py-1 rounded">bg-tertiary</code>, and 
            <code className="bg-muted px-2 py-1 rounded">bg-background</code> in any component.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;
