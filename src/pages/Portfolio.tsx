
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";

const Portfolio = () => {
  // Mock portfolio data - In a real application, this would come from a CMS
  const projects = [
    {
      id: 1,
      title: "Procedural Landscape System",
      description: "Advanced terrain generation system with real-time LOD optimization for large-scale environments in Unreal Engine 5.",
      technologies: ["Unreal Engine 5", "Blueprints", "Material Editor", "Landscape"],
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
      demoLink: "https://drive.google.com/your-demo-link",
      category: "Technical Art"
    },
    {
      id: 2,
      title: "AR Visualization Platform",
      description: "Interactive AR application for architectural visualization with real-time material swapping and lighting adjustment.",
      technologies: ["Unreal Engine", "AR Foundation", "Mobile Optimization", "Niagara VFX"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      demoLink: "https://www.artstation.com/your-project",
      category: "AR/VR"
    },
    {
      id: 3,
      title: "Performance Optimization Suite",
      description: "Comprehensive toolkit for monitoring and optimizing game performance across different platforms and hardware configurations.",
      technologies: ["Python", "Unreal Engine", "Performance Analysis", "Automation"],
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop",
      demoLink: "https://github.com/your-repo",
      category: "Tools"
    },
    {
      id: 4,
      title: "Dynamic Shader Library",
      description: "Collection of optimized shaders for various visual effects including water simulation, particle systems, and atmospheric effects.",
      technologies: ["HLSL", "Material Editor", "Shader Optimization", "VFX"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      demoLink: "https://drive.google.com/your-shader-library",
      category: "Shaders"
    }
  ];

  const categories = ["All", "Technical Art", "AR/VR", "Tools", "Shaders"];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Portfolio</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A showcase of technical artistry and innovative solutions in game development
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

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      View Demo
                    </Button>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-gray-900 mb-2">{project.title}</CardTitle>
                      <Badge variant="secondary" className="mb-3">{project.category}</Badge>
                    </div>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CMS Note */}
          <div className="mt-16 text-center">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Portfolio Management</h3>
              <p className="text-blue-700 text-sm mb-4">
                This portfolio is powered by a content management system. 
                Projects can be easily added, edited, or removed through the admin dashboard.
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

export default Portfolio;
