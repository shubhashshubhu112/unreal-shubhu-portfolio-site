
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Procedural Landscape System",
      description: "Advanced procedural terrain generation system with real-time foliage placement, weather dynamics, and optimized LOD management for large-scale environments.",
      technologies: ["Unreal Engine 5", "Blueprints", "Procedural Generation", "Optimization"],
      image: "/placeholder.svg",
      category: "Technical Art",
      featured: true
    },
    {
      id: 2,
      title: "AR Visualization Platform",
      description: "Interactive AR application for architectural visualization with real-time lighting, material switching, and cross-platform deployment.",
      technologies: ["Unreal Engine", "AR Foundation", "Mobile Optimization", "UI/UX"],
      image: "/placeholder.svg",
      category: "AR/VR"
    },
    {
      id: 3,
      title: "Performance Optimization Suite",
      description: "Comprehensive optimization tools and workflows for reducing draw calls, memory usage, and improving frame rates across multiple platforms.",
      technologies: ["Unreal Engine", "Performance Analysis", "Memory Optimization", "Profiling"],
      image: "/placeholder.svg",
      category: "Optimization"
    },
    {
      id: 4,
      title: "Shader Collection",
      description: "Custom shader library featuring advanced materials, special effects, and procedural textures for various artistic styles.",
      technologies: ["HLSL", "Material Editor", "Procedural Textures", "VFX"],
      image: "/placeholder.svg",
      category: "Shaders"
    },
    {
      id: 5,
      title: "Level Design Portfolio",
      description: "Collection of immersive level designs showcasing gameplay flow, environmental storytelling, and player guidance techniques.",
      technologies: ["Level Design", "Environmental Art", "Lighting", "Gameplay Flow"],
      image: "/placeholder.svg",
      category: "Level Design"
    },
    {
      id: 6,
      title: "Niagara VFX Systems",
      description: "Dynamic particle systems and visual effects created with Niagara, including weather effects, magical spells, and environmental ambience.",
      technologies: ["Niagara", "VFX", "Particle Systems", "Real-time Effects"],
      image: "/placeholder.svg",
      category: "VFX"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-light text-gray-900 mb-6">
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A showcase of technical artistry, innovative solutions, and creative implementations 
              in game development and real-time graphics.
            </p>
          </div>

          {/* Featured Project */}
          {projects.filter(p => p.featured).map((project, index) => (
            <Card key={project.id} className="mb-16 border-0 shadow-2xl bg-white/80 backdrop-blur-sm overflow-hidden animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-full bg-gradient-to-br from-blue-100 to-purple-100">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    <Play className="w-16 h-16" />
                  </div>
                  <Badge className="absolute top-4 left-4 bg-blue-600 text-white">Featured</Badge>
                </div>
                <CardContent className="p-8 lg:p-12">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl font-semibold text-gray-900 mb-4">{project.title}</h2>
                      <p className="text-gray-600 leading-relaxed text-lg">{project.description}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 group">
                        <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        View Project
                      </Button>
                      <Button variant="outline" className="rounded-full px-6 hover:bg-gray-50 group">
                        <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => !p.featured).map((project, index) => (
              <Card key={project.id} className="group border-0 shadow-xl bg-white/80 backdrop-blur-sm overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500 group-hover:scale-110 transition-transform duration-500">
                    <Play className="w-12 h-12" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <Badge className="mb-2 bg-blue-100 text-blue-800">{project.category}</Badge>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mt-2">{project.description}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full rounded-full group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors"
                    >
                      View Details
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 animate-fade-in">
            <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="p-12">
                <h2 className="text-3xl font-light mb-4">Interested in Collaboration?</h2>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                  I'm always excited to work on new projects and explore innovative solutions. 
                  Let's create something amazing together.
                </p>
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-blue-600 hover:bg-gray-50 rounded-full px-8 py-4 hover:scale-105 transition-all duration-300"
                >
                  Get in Touch
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
