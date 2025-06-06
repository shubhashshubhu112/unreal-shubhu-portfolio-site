import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Search, ArrowRight, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Optimizing Unreal Engine 5 for Mobile AR Applications",
      excerpt: "Deep dive into performance optimization techniques for mobile AR development, covering rendering pipelines, memory management, and platform-specific optimizations.",
      category: "Optimization",
      date: "2024-12-15",
      readTime: "8 min read",
      featured: true,
      tags: ["Unreal Engine", "Mobile", "AR", "Performance"],
      url: "https://www.artstation.com/shubhashn4"
    },
    {
      id: 2,
      title: "Procedural Landscape Generation with PCG Framework",
      excerpt: "Exploring the new Procedural Content Generation framework in UE5 for creating dynamic, scalable landscape systems.",
      category: "Technical Art",
      date: "2024-12-08",
      readTime: "12 min read",
      tags: ["PCG", "Procedural", "Landscapes", "UE5"]
    },
    {
      id: 3,
      title: "Advanced Shader Techniques for Stylized Rendering",
      excerpt: "Creating custom shaders for non-photorealistic rendering, including toon shading, rim lighting, and artistic effects.",
      category: "Shaders",
      date: "2024-12-01",
      readTime: "15 min read",
      tags: ["Shaders", "HLSL", "NPR", "Materials"]
    },
    {
      id: 4,
      title: "Building Efficient Asset Pipelines for Large Projects",
      excerpt: "Streamlining content creation workflows with automation tools, version control strategies, and team collaboration best practices.",
      category: "Pipeline",
      date: "2024-11-25",
      readTime: "10 min read",
      tags: ["Pipeline", "Automation", "Workflow", "Tools"]
    },
    {
      id: 5,
      title: "Niagara VFX: From Concept to Implementation",
      excerpt: "Step-by-step guide to creating compelling visual effects using Unreal Engine's Niagara particle system.",
      category: "VFX",
      date: "2024-11-18",
      readTime: "14 min read",
      tags: ["Niagara", "VFX", "Particles", "Real-time"]
    },
    {
      id: 6,
      title: "Level Design Psychology: Guiding Player Behavior",
      excerpt: "Understanding how environmental design influences player decisions and creating intuitive level flow through visual communication.",
      category: "Level Design",
      date: "2024-11-10",
      readTime: "11 min read",
      tags: ["Level Design", "Psychology", "Player Flow", "UX"]
    }
  ];

  const categories = ["All", "Technical Art", "Optimization", "Shaders", "VFX", "Level Design", "Pipeline"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-blue-50 dark:to-blue-950">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-light text-foreground mb-6">
              Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Insights, tutorials, and thoughts on technical art, game development, 
              and real-time graphics from the trenches of production.
            </p>
            
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10 py-3 rounded-full border-2 focus:border-blue-300"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.slice(0, 4).map((category) => (
                  <Badge 
                    key={category}
                    variant="outline"
                    className="cursor-pointer hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-blue-950 transition-colors px-4 py-2"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Post */}
          {blogPosts.filter(post => post.featured).map((post) => (
            <Card key={post.id} className="mb-16 border-0 shadow-2xl bg-card/80 backdrop-blur-sm overflow-hidden animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-full bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <Bookmark className="w-16 h-16 mx-auto mb-4" />
                      <span className="text-lg font-medium">Featured Article</span>
                    </div>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-blue-600 text-white">Featured</Badge>
                </div>
                <CardContent className="p-8 lg:p-12">
                  <div className="space-y-6">
                    <div>
                      <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">{post.category}</Badge>
                      <h2 className="text-3xl font-semibold text-foreground mb-4 leading-tight">{post.title}</h2>
                      <p className="text-muted-foreground leading-relaxed text-lg">{post.excerpt}</p>
                    </div>
                    
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-secondary text-secondary-foreground">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 group">
                      <a href={post.url} target="_blank" rel="noopener noreferrer">
                        Read Full Article
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <Card 
                key={post.id}
                className="group border-0 shadow-xl bg-card/80 backdrop-blur-sm overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 bg-gradient-to-br from-secondary via-blue-50 to-purple-50 dark:via-blue-950 dark:to-purple-950 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground group-hover:scale-110 transition-transform duration-500">
                    <Bookmark className="w-12 h-12" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                  <Badge className="absolute top-4 left-4 bg-background/90 text-foreground border-0">
                    {post.category}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-blue-600 transition-colors leading-tight mb-3">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs bg-secondary text-secondary-foreground">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild
                      className="w-full rounded-full group-hover:bg-blue-50 group-hover:border-blue-200 dark:group-hover:bg-blue-950 transition-colors group"
                    >
                      <a href="https://www.artstation.com/shubhashn4" target="_blank" rel="noopener noreferrer">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-light mb-4">Stay Updated</h2>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                  Get the latest articles, tutorials, and insights delivered straight to your inbox. 
                  No spam, just valuable content for technical artists and developers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    placeholder="Enter your email"
                    className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70 rounded-full"
                  />
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="bg-white text-blue-600 hover:bg-gray-50 rounded-full px-8 hover:scale-105 transition-all duration-300"
                  >
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
