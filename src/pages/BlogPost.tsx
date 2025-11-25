import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft,
  ArrowRight,
  Share2,
  Heart,
  Eye,
  Tag,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  CheckCircle
} from "lucide-react";

// Import local images
import serengetiImage from "@/assets/serengeti-1.jpg";
import migrationImage from "@/assets/migration.jpg";
import kilimanjaroImage from "@/assets/hero-kilimanjaro.jpg";
import zanzibarImage from "@/assets/Zanzibar.jpg";
import ngorongoroImage from "@/assets/ngorogoro-crater-1.jpg";
import tarangireImage from "@/assets/tarangire-1.jpg";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  // Mock blog posts data (in real app, this would come from API/CMS)
  const blogPosts = [
    {
      id: 1,
      title: "The Great Migration: Nature's Most Spectacular Show",
      slug: "great-migration-spectacular-show",
      excerpt: "Witness millions of wildebeest, zebras, and gazelles as they embark on their annual journey across the Serengeti ecosystem in one of nature's most incredible spectacles.",
      content: `
        <p>The Great Migration is one of the most awe-inspiring natural phenomena on Earth. Every year, over 1.5 million wildebeest, accompanied by hundreds of thousands of zebras and gazelles, embark on a circular journey across the Serengeti-Mara ecosystem.</p>

        <h2>The Journey Begins</h2>
        <p>The migration follows a predictable pattern driven by rainfall and the search for fresh grazing. The journey typically begins in the southern Serengeti around December and January, when the herds gather on the short-grass plains for the calving season.</p>

        <p>During this time, approximately 400,000 calves are born within a few weeks of each other. This synchronized birthing is nature's way of ensuring that predators cannot possibly catch all the young, giving the majority a better chance of survival.</p>

        <h2>The Great River Crossings</h2>
        <p>Perhaps the most dramatic and photographed part of the migration occurs between July and September, when the herds must cross the crocodile-infested Mara River. These crossings are fraught with danger, as the animals face strong currents, steep banks, and waiting predators.</p>

        <p>The sight of thousands of animals plunging into the river, driven by an ancient instinct, is both thrilling and heart-wrenching. Many don't make it across, but the survival of the species depends on this perilous journey.</p>

        <h2>Best Viewing Locations</h2>
        <p>To witness this incredible spectacle, timing and location are crucial:</p>
        <ul>
          <li><strong>December-March:</strong> Southern Serengeti for calving season</li>
          <li><strong>April-June:</strong> Central and Western Serengeti</li>
          <li><strong>July-September:</strong> Northern Serengeti and Masai Mara for river crossings</li>
          <li><strong>October-November:</strong> Eastern Serengeti as herds return south</li>
        </ul>

        <h2>Photography Tips</h2>
        <p>Capturing the migration requires patience and preparation. Here are some essential tips:</p>
        <ul>
          <li>Use a telephoto lens (300mm or longer) to capture distant action</li>
          <li>Arrive early at crossing points and be prepared to wait</li>
          <li>Focus on individual stories within the larger spectacle</li>
          <li>Don't forget to capture the landscape and context</li>
        </ul>

        <p>The Great Migration is more than just a wildlife spectacle; it's a testament to the resilience of nature and the importance of conservation. Witnessing this ancient journey is a privilege that connects us to the wild heart of Africa.</p>
      `,
      image: migrationImage,
      author: "Sarah Johnson",
      publishDate: "2024-01-15",
      readTime: "8 min read",
      category: "wildlife",
      tags: ["Migration", "Serengeti", "Wildlife", "Photography"],
      views: 1250,
      likes: 89,
      featured: true
    },
    {
      id: 2,
      title: "Climbing Kilimanjaro: A Complete Guide for First-Time Climbers",
      slug: "climbing-kilimanjaro-complete-guide",
      excerpt: "Everything you need to know about conquering Africa's highest peak, from choosing the right route to essential gear and training tips.",
      content: `
        <p>Mount Kilimanjaro, standing at 5,895 meters (19,341 feet), is the highest peak in Africa and the world's tallest free-standing mountain. Unlike other major peaks, Kilimanjaro doesn't require technical climbing skills, making it accessible to determined hikers with proper preparation.</p>

        <h2>Choosing Your Route</h2>
        <p>There are seven official routes to the summit, each offering different experiences:</p>

        <h3>Machame Route (6-7 days)</h3>
        <p>Known as the "Whiskey Route," this is the most popular path. It offers stunning scenery and good acclimatization opportunities, though it's more challenging than Marangu.</p>

        <h3>Marangu Route (5-6 days)</h3>
        <p>The "Coca-Cola Route" is the only route with hut accommodations. It's considered easier but has lower success rates due to rapid ascent.</p>

        <h3>Lemosho Route (7-8 days)</h3>
        <p>This route offers the best scenery and highest success rates. It's longer but provides excellent acclimatization.</p>

        <h2>Essential Gear</h2>
        <p>Proper equipment is crucial for a successful climb:</p>
        <ul>
          <li><strong>Clothing:</strong> Layering system from base layers to insulated jacket</li>
          <li><strong>Footwear:</strong> Waterproof hiking boots and gaiters</li>
          <li><strong>Sleeping:</strong> 4-season sleeping bag rated to -10°C</li>
          <li><strong>Accessories:</strong> Headlamp, sunglasses, sunscreen, water bottles</li>
        </ul>

        <h2>Training and Preparation</h2>
        <p>Start training at least 3-4 months before your climb:</p>
        <ul>
          <li>Build cardiovascular endurance through hiking, running, or cycling</li>
          <li>Practice hiking with a weighted backpack</li>
          <li>Include strength training for legs and core</li>
          <li>Train at altitude if possible</li>
        </ul>

        <h2>Altitude Sickness Prevention</h2>
        <p>Altitude sickness is the primary reason for failed summit attempts. Key prevention strategies include:</p>
        <ul>
          <li>Choose a longer route for better acclimatization</li>
          <li>Follow the "climb high, sleep low" principle</li>
          <li>Stay hydrated and maintain proper nutrition</li>
          <li>Listen to your body and don't ignore symptoms</li>
        </ul>

        <p>Climbing Kilimanjaro is a life-changing experience that tests your physical and mental limits. With proper preparation and the right mindset, standing on the "Roof of Africa" is an achievable dream for most people.</p>
      `,
      image: kilimanjaroImage,
      author: "Michael Thompson",
      publishDate: "2024-01-10",
      readTime: "12 min read",
      category: "destinations",
      tags: ["Kilimanjaro", "Climbing", "Adventure", "Guide"],
      views: 980,
      likes: 67,
      featured: true
    },
    {
      id: 3,
      title: "Zanzibar's Hidden Gems: Beyond the Beaches",
      slug: "zanzibar-hidden-gems-beyond-beaches",
      excerpt: "Discover the cultural treasures, spice plantations, and historical sites that make Zanzibar more than just a beach destination.",
      content: `
        <p>While Zanzibar is famous for its pristine beaches and crystal-clear waters, the island offers so much more than sun and sand. From ancient Stone Town to aromatic spice farms, Zanzibar is a treasure trove of culture, history, and authentic experiences.</p>

        <h2>Stone Town: A Living Museum</h2>
        <p>Stone Town, a UNESCO World Heritage Site, is the cultural heart of Zanzibar. Its narrow alleys, carved doors, and historic buildings tell the story of centuries of Arab, Persian, Indian, and European influences.</p>

        <p>Must-visit sites include:</p>
        <ul>
          <li><strong>House of Wonders:</strong> The former Sultan's palace, now a museum</li>
          <li><strong>Old Fort:</strong> Built by the Portuguese in the 17th century</li>
          <li><strong>Freddie Mercury House:</strong> Birthplace of the Queen frontman</li>
          <li><strong>Darajani Market:</strong> A bustling local market full of spices and crafts</li>
        </ul>

        <h2>Spice Tours: A Sensory Journey</h2>
        <p>Zanzibar's nickname "Spice Island" comes from its rich history of spice cultivation. A spice tour is an essential Zanzibar experience, where you can:</p>
        <ul>
          <li>See, smell, and taste fresh spices growing in their natural environment</li>
          <li>Learn about traditional uses of various spices and herbs</li>
          <li>Enjoy a traditional Swahili lunch prepared with fresh spices</li>
          <li>Purchase authentic spices directly from the source</li>
        </ul>

        <h2>Jozani Forest: Red Colobus Monkeys</h2>
        <p>The Jozani Chwaka Bay National Park is home to the endangered Zanzibar Red Colobus monkey, found nowhere else in the world. The forest also features unique flora and a fascinating mangrove boardwalk.</p>

        <h2>Prison Island: History and Giant Tortoises</h2>
        <p>A short boat ride from Stone Town takes you to Prison Island (Changuu Island), where you can explore the ruins of a former prison and quarantine station, and meet the famous Aldabra giant tortoises.</p>

        <h2>Cultural Experiences</h2>
        <p>Immerse yourself in local culture through:</p>
        <ul>
          <li><strong>Cooking classes:</strong> Learn to prepare traditional Swahili dishes</li>
          <li><strong>Dhow sailing:</strong> Traditional boat trips at sunset</li>
          <li><strong>Local village visits:</strong> Experience authentic island life</li>
          <li><strong>Taarab music:</strong> Enjoy traditional Zanzibar music performances</li>
        </ul>

        <p>Zanzibar's true magic lies in its ability to transport you through time and culture. Beyond the beautiful beaches, the island offers a rich tapestry of experiences that will leave you with lasting memories and a deeper appreciation for East African culture.</p>
      `,
      image: zanzibarImage,
      author: "Amina Hassan",
      publishDate: "2024-01-08",
      readTime: "6 min read",
      category: "culture",
      tags: ["Zanzibar", "Culture", "History", "Spices"],
      views: 750,
      likes: 45,
      featured: false
    }
  ];

  const currentPost = blogPosts.find(post => post.slug === slug);
  const relatedPosts = blogPosts.filter(post => 
    post.slug !== slug && 
    (post.category === currentPost?.category || 
     post.tags.some(tag => currentPost?.tags.includes(tag)))
  ).slice(0, 3);

  if (!currentPost) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <Button onClick={() => navigate('/blog')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = currentPost.title;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
        break;
    }
    setShowShareMenu(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <div className="mb-6">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/blog')}
                className="hover:bg-muted"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </div>

            {/* Article Header */}
            <div className="text-center mb-8">
              <Badge className="mb-4 capitalize">
                {currentPost.category.replace('-', ' ')}
              </Badge>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {currentPost.title}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {currentPost.excerpt}
              </p>
              
              {/* Article Meta */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{currentPost.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(currentPost.publishDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{currentPost.readTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="h-4 w-4" />
                  <span>{currentPost.views} views</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-center gap-4">
                <Button
                  variant={isLiked ? "default" : "outline"}
                  size="sm"
                  onClick={() => setIsLiked(!isLiked)}
                  className="flex items-center space-x-2"
                >
                  <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                  <span>{currentPost.likes + (isLiked ? 1 : 0)}</span>
                </Button>
                
                <div className="relative">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowShareMenu(!showShareMenu)}
                    className="flex items-center space-x-2"
                  >
                    <Share2 className="h-4 w-4" />
                    <span>Share</span>
                  </Button>
                  
                  {showShareMenu && (
                    <div className="absolute top-full mt-2 right-0 bg-background border rounded-lg shadow-lg p-2 z-10">
                      <div className="flex flex-col space-y-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleShare('facebook')}
                          className="justify-start"
                        >
                          <Facebook className="h-4 w-4 mr-2" />
                          Facebook
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleShare('twitter')}
                          className="justify-start"
                        >
                          <Twitter className="h-4 w-4 mr-2" />
                          Twitter
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleShare('linkedin')}
                          className="justify-start"
                        >
                          <Linkedin className="h-4 w-4 mr-2" />
                          LinkedIn
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleShare('copy')}
                          className="justify-start"
                        >
                          {copySuccess ? (
                            <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4 mr-2" />
                          )}
                          {copySuccess ? 'Copied!' : 'Copy Link'}
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-12">
              <img
                src={currentPost.image}
                alt={currentPost.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div 
                  className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-li:text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: currentPost.content }}
                />
                
                {/* Tags */}
                <div className="mt-12 pt-8 border-t">
                  <h4 className="font-semibold mb-4">Tags:</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentPost.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="flex items-center space-x-1">
                        <Tag className="h-3 w-3" />
                        <span>{tag}</span>
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Author Info */}
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-3">About the Author</h4>
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <User className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">{currentPost.author}</div>
                          <div className="text-sm text-muted-foreground">Travel Writer</div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Passionate about wildlife and conservation, sharing stories from the heart of Africa.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Table of Contents (for longer articles) */}
                  {currentPost.readTime.includes('8') || currentPost.readTime.includes('12') ? (
                    <Card>
                      <CardContent className="p-6">
                        <h4 className="font-semibold mb-3">Table of Contents</h4>
                        <nav className="space-y-2 text-sm">
                          <a href="#" className="block text-muted-foreground hover:text-primary">
                            Introduction
                          </a>
                          <a href="#" className="block text-muted-foreground hover:text-primary">
                            Main Content
                          </a>
                          <a href="#" className="block text-muted-foreground hover:text-primary">
                            Key Points
                          </a>
                          <a href="#" className="block text-muted-foreground hover:text-primary">
                            Conclusion
                          </a>
                        </nav>
                      </CardContent>
                    </Card>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
                Related Articles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((post) => (
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
                      
                      <Button variant="ghost" size="sm" asChild>
                        <Link to={`/blog/${post.slug}`}>
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogPost;
