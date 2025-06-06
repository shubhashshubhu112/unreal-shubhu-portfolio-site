
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code, 
  Palette, 
  Zap, 
  Monitor, 
  Wrench, 
  Camera,
  Gamepad2,
  Layers,
  Sparkles,
  Database
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Game Engines",
      icon: Gamepad2,
      color: "blue",
      skills: [
        { name: "Unreal Engine 5.5+", level: 95, description: "Advanced blueprint scripting, rendering pipeline" },
        { name: "Blueprints & Gameplay", level: 90, description: "Complex systems, AI behavior, game mechanics" },
        { name: "Level Design", level: 85, description: "Environmental storytelling, player flow" },
        { name: "Performance Profiling", level: 88, description: "Optimization, debugging, memory management" }
      ]
    },
    {
      title: "Technical Art",
      icon: Palette,
      color: "purple",
      skills: [
        { name: "Shader Development", level: 92, description: "HLSL, material editor, custom effects" },
        { name: "Procedural Generation", level: 88, description: "PCG framework, runtime generation" },
        { name: "Lighting & Rendering", level: 90, description: "Lumen, ray tracing, global illumination" },
        { name: "Material Systems", level: 87, description: "PBR workflows, texture optimization" }
      ]
    },
    {
      title: "Optimization",
      icon: Zap,
      color: "green",
      skills: [
        { name: "Performance Analysis", level: 93, description: "Profiling, bottleneck identification" },
        { name: "Memory Optimization", level: 89, description: "Asset streaming, garbage collection" },
        { name: "Rendering Optimization", level: 91, description: "Draw call reduction, LOD systems" },
        { name: "Mobile Optimization", level: 85, description: "Cross-platform performance tuning" }
      ]
    },
    {
      title: "Tools & Scripting",
      icon: Wrench,
      color: "orange",
      skills: [
        { name: "Python Scripting", level: 82, description: "Pipeline automation, tool development" },
        { name: "Version Control", level: 88, description: "Git, Perforce, branching strategies" },
        { name: "Pipeline Development", level: 85, description: "Custom tools, workflow automation" },
        { name: "Data Management", level: 80, description: "Asset organization, build systems" }
      ]
    },
    {
      title: "VFX & Post-Processing",
      icon: Sparkles,
      color: "pink",
      skills: [
        { name: "Niagara Particle Systems", level: 87, description: "Dynamic effects, simulation" },
        { name: "Post-Process Effects", level: 85, description: "Screen-space effects, tone mapping" },
        { name: "DaVinci Resolve", level: 83, description: "Color grading, video editing" },
        { name: "After Effects", level: 78, description: "Motion graphics, compositing" }
      ]
    },
    {
      title: "UI/UX & Design",
      icon: Monitor,
      color: "indigo",
      skills: [
        { name: "Figma", level: 80, description: "Interface design, prototyping" },
        { name: "Photoshop", level: 85, description: "Texture creation, concept art" },
        { name: "UMG/UI Systems", level: 82, description: "Interactive interfaces, HUD design" },
        { name: "User Experience", level: 78, description: "Player interaction, accessibility" }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200" },
      purple: { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-200" },
      green: { bg: "bg-green-100", text: "text-green-600", border: "border-green-200" },
      orange: { bg: "bg-orange-100", text: "text-orange-600", border: "border-orange-200" },
      pink: { bg: "bg-pink-100", text: "text-pink-600", border: "border-pink-200" },
      indigo: { bg: "bg-indigo-100", text: "text-indigo-600", border: "border-indigo-200" }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-light text-gray-900 mb-6">
              Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my technical expertise, from game engine development 
              to optimization and creative problem-solving.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const colorClasses = getColorClasses(category.color);
              const IconComponent = category.icon;
              
              return (
                <Card 
                  key={category.title}
                  className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 ${colorClasses.bg} rounded-lg flex items-center justify-center`}>
                        <IconComponent className={`w-6 h-6 ${colorClasses.text}`} />
                      </div>
                      <h2 className="text-2xl font-semibold text-gray-900">{category.title}</h2>
                    </div>
                    
                    <div className="space-y-6">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <h3 className="font-medium text-gray-900">{skill.name}</h3>
                            <Badge className={`${colorClasses.bg} ${colorClasses.text} border-0`}>
                              {skill.level}%
                            </Badge>
                          </div>
                          
                          <Progress 
                            value={skill.level} 
                            className="h-2"
                            style={{
                              '--progress-background': colorClasses.bg.replace('bg-', ''),
                              '--progress-foreground': colorClasses.text.replace('text-', '')
                            } as React.CSSProperties}
                          />
                          
                          <p className="text-sm text-gray-600">{skill.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Skills */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Card className="border-0 shadow-xl bg-gradient-to-r from-gray-900 to-gray-800 text-white">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-light mb-6">Additional Expertise</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  <div className="space-y-2">
                    <Layers className="w-8 h-8 mx-auto text-blue-400" />
                    <h3 className="font-semibold">AR/VR Development</h3>
                    <p className="text-gray-400 text-sm">Cross-platform XR experiences</p>
                  </div>
                  <div className="space-y-2">
                    <Database className="w-8 h-8 mx-auto text-green-400" />
                    <h3 className="font-semibold">Data Visualization</h3>
                    <p className="text-gray-400 text-sm">Interactive data presentation</p>
                  </div>
                  <div className="space-y-2">
                    <Camera className="w-8 h-8 mx-auto text-purple-400" />
                    <h3 className="font-semibold">Virtual Production</h3>
                    <p className="text-gray-400 text-sm">Real-time cinematography</p>
                  </div>
                  <div className="space-y-2">
                    <Sparkles className="w-8 h-8 mx-auto text-pink-400" />
                    <h3 className="font-semibold">Creative Coding</h3>
                    <p className="text-gray-400 text-sm">Generative art & algorithms</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "Landscape Systems", "Foliage Tools", "Material Editor", "Sequencer",
                    "World Partition", "PCG Framework", "Chaos Physics", "MetaHuman",
                    "Lumen", "Nanite", "World Machine", "Houdini"
                  ].map((skill) => (
                    <Badge key={skill} className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h2 className="text-3xl font-light text-gray-900 mb-4">Ready to Collaborate?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how these skills can bring your project to life. 
              I'm always excited to tackle new challenges and push creative boundaries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                View Portfolio
              </button>
              <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Skills;
