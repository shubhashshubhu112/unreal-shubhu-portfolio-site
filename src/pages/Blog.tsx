
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  // Mock blog data - In a real application, this would come from a CMS
  const blogPosts = [
    {
      id: 1,
      title: "Optimizing Unreal Engine 5 for Mobile AR Applications",
      excerpt: "Learn advanced techniques for maintaining 60fps performance in mobile AR experiences while preserving visual quality.",
      content: "Detailed guide on mobile optimization strategies...",
      author: "Shubhash Nath Thakur",
      date: "2024-12-15",
      tags: ["Unreal Engine", "Mobile", "AR", "Optimization"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=300&fit=crop",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Procedural Landscape Generation: Advanced Techniques",
      excerpt: "Exploring algorithmic approaches to creating diverse, realistic terrain systems that scale efficiently.",
      content: "In-depth tutorial on procedural generation...",
      author: "Shubhash Nath Thakur",
      date: "2024-12-08",
      tags: ["Procedural Generation", "Landscapes", "Technical Art"],
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=300&fit=crop",
      readTime: "12 min read"
    },
    {
      id: 3,
      title: "Shader Optimization: From Concept to Implementation",
      excerpt: "A comprehensive guide to writing efficient shaders that balance visual impact with performance constraints.",
      content: "Step-by-step shader optimization process...",
      author: "Shubhash Nath Thakur",
      date: "2024-11-28",
      tags: ["Shaders", "HLSL", "Performance", "Graphics"],
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=300&fit=crop",
      readTime: "10 min read"
    },
    {
      id: 4,
      title: "Building Scalable Asset Pipelines for Game Development",
      excerpt: "Streamlining content creation workflows for large-scale projects with automated tools and processes.",
      content: "Pipeline development best practices...",
      author: "Shubhash Nath Thakur",
      date: "2024-11-20",
      tags: ["Pipeline", "Automation", "Workflow", "Tools"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop",
      readTime: "15 min read"
    }
  ];

  const categories = ["All", "Technical Art", "Optimization", "Tutorials", "Pipeline", "AR/VR"];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on technical artistry and game development
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={`px-6 py-2 rounded-full transition-all duration-200 ${
                  category === "All" 
                    ? "bg-blue-600 text-white hover:bg-blue-700" 
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Post */}
          {blogPosts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Featured Post</h2>
              <Card className="border-0 shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blogPosts[0].tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      {blogPosts[0].title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(blogPosts[0].date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {blogPosts[0].author}
                      </span>
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                    <Button className="w-fit bg-blue-600 hover:bg-blue-700 text-white">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CMS Note */}
          <div className="mt-16 text-center">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Blog Management</h3>
              <p className="text-blue-700 text-sm mb-4">
                This blog is powered by a content management system. 
                Articles can be easily created, edited, or published through the admin dashboard.
              </p>
              <Button 
                variant="outline" 
                size="sm"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={() => window.location.href = '/admin-login'}
              >
                Admin Access
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
