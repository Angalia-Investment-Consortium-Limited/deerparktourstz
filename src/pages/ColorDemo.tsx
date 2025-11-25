import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ColorPalette from "@/components/ColorPalette";

const ColorDemo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <ColorPalette />
      </div>
      <Footer />
    </div>
  );
};

export default ColorDemo;
