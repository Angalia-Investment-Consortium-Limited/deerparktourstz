import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  Clock, 
  User, 
  Search,
  Tag,
  ArrowRight,
  Eye
} from "lucide-react";

// Import local images
import serengetiImage from "@/assets/serengeti-1.jpg";
import migrationImage from "@/assets/migration.jpg";
import kilimanjaroImage from "@/assets/hero-kilimanjaro.jpg";
import zanzibarImage from "@/assets/Zanzibar.jpg";
import ngorongoroImage from "@/assets/ngorogoro-crater-1.jpg";
import tarangireImage from "@/assets/tarangire-1.jpg";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Posts" },
    { id: "wildlife", label: "Wildlife" },
    { id: "destinations", label: "Destinations" },
    { id: "travel-tips", label: "Travel Tips" },
    { id: "culture", label: "Culture" },
    { id: "conservation", label: "Conservation" }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Great Migration: Nature's Most Spectacular Show",
      slug: "great-migration-spectacular-show",
      excerpt: "Witness millions of wildebeest, zebras, and gazelles as they embark on their annual journey across the Serengeti ecosystem in one of nature's most incredible spectacles.",
      content: "Full blog post content here...",
      image: migrationImage,
      author: "Sarah Johnson",
      publishDate: "2024-01-15",
      readTime: "8 min read",
      category: "wildlife",
      tags: ["Migration", "Serengeti", "Wildlife", "Photography"],
      views: 1250,
      featured: true
    },
    {
      id: 2,
      title: "Climbing Kilimanjaro: A Complete Guide for First-Time Climbers",
      slug: "climbing-kilimanjaro-complete-guide",
      excerpt: "Everything you need to know about conquering Africa's highest peak, from choosing the right route to essential gear and training tips.",
      content: "Full blog post content here...",
      image: kilimanjaroImage,
      author: "Michael Thompson",
      publishDate: "2024-01-10",
      readTime: "12 min read",
      category: "destinations",
      tags: ["Kilimanjaro", "Climbing", "Adventure", "Guide"],
      views: 980,
      featured: true
    },
    {
      id: 3,
      title: "Zanzibar's Hidden Gems: Beyond the Beaches",
      slug: "zanzibar-hidden-gems-beyond-beaches",
      excerpt: "Discover the cultural treasures, spice plantations, and historical sites that make Zanzibar more than just a beach destination.",
      content: "Full blog post content here...",
      image: zanzibarImage,
      author: "Amina Hassan",
      publishDate: "2024-01-08",
      readTime: "6 min read",
      category: "culture",
      tags: ["Zanzibar", "Culture", "History", "Spices"],
      views: 750,
      featured: false
    },
    {
      id: 4,
      title: "Best Time to Visit Serengeti National Park",
      slug: "best-time-visit-serengeti",
      excerpt: "Plan your perfect safari with our comprehensive guide to Serengeti's seasons, wildlife patterns, and weather conditions.",
      content: "Full blog post content here...",
      image: serengetiImage,
      author: "David Mwangi",
      publishDate: "2024-01-05",
      readTime: "5 min read",
      category: "travel-tips",
      tags: ["Serengeti", "Planning", "Seasons", "Safari"],
      views: 1100,
      featured: false
    },
    {
      id: 5,
      title: "Ngorongoro Crater: The Garden of Eden",
      slug: "ngorongoro-crater-garden-eden",
      excerpt: "Explore the world's largest intact volcanic caldera and its incredible concentration of wildlife in this natural wonder.",
      content: "Full blog post content here...",
      image: ngorongoroImage,
      author: "Grace Kimani",
      publishDate: "2024-01-03",
      readTime: "7 min read",
      category: "destinations",
      tags: ["Ngorongoro", "Crater", "Wildlife", "Geology"],
      views: 890,
      featured: false
    },
    {
      id: 6,
      title: "Conservation Efforts in Tanzania's National Parks",
      slug: "conservation-efforts-tanzania-parks",
      excerpt: "Learn about the ongoing conservation initiatives protecting Tanzania's wildlife and how tourism contributes to these efforts.",
      content: "Full blog post content here...",
      image: tarangireImage,
      author: "Dr. James Mollel",
      publishDate: "2024-01-01",
      readTime: "10 min read",
      category: "conservation",
      tags: ["Conservation", "Wildlife", "Sustainability", "Parks"],
      views: 650,
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Safari Stories & Travel Insights
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Discover the wonders of Tanzania through expert insights, travel tips, 
              and captivating stories from the heart of East Africa.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="transition-all"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && selectedCategory === "all" && !searchTerm && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-foreground mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary">
                      Featured
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{post.views}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{post.author}</span>
                      </div>
                      
                      <Button variant="ghost" size="sm" asChild>
                        <Link to={`/blog/${post.slug}`}>
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">
              {searchTerm ? `Search Results (${filteredPosts.length})` : 
               selectedCategory === "all" ? "Latest Articles" : 
               `${categories.find(c => c.id === selectedCategory)?.label} Articles`}
            </h2>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">
                No articles found matching your criteria.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge 
                      variant="secondary" 
                      className="absolute top-4 left-4 capitalize"
                    >
                      {post.category.replace('-', ' ')}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{post.author}</span>
                      </div>
                      
                      <Button variant="ghost" size="sm" asChild>
                        <Link to={`/blog/${post.slug}`}>
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
