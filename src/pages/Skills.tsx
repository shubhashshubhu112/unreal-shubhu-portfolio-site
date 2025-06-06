
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Game Engines",
      icon: "🎮",
      skills: [
        { name: "Unreal Engine 5.5+", level: 95, description: "Advanced blueprint systems, rendering pipeline" },
        { name: "Unity", level: 75, description: "Cross-platform development, AR/VR" },
        { name: "Godot", level: 60, description: "Indie game development, scripting" }
      ]
    },
    {
      title: "Technical Art",
      icon: "🎨",
      skills: [
        { name: "Shader Development", level: 90, description: "HLSL, Material Editor, Custom shaders" },
        { name: "Procedural Generation", level: 85, description: "Algorithmic content creation, automation" },
        { name: "Lighting & Rendering", level: 88, description: "Real-time lighting, post-processing" },
        { name: "VFX & Particles", level: 82, description: "Niagara, Cascade, visual effects" }
      ]
    },
    {
      title: "Programming & Scripting",
      icon: "💻",
      skills: [
        { name: "Python", level: 80, description: "Tool development, automation scripts" },
        { name: "C++", level: 70, description: "Engine programming, performance optimization" },
        { name: "Blueprints", level: 95, description: "Visual scripting, gameplay systems" },
        { name: "HLSL", level: 85, description: "Shader programming, graphics pipeline" }
      ]
    },
    {
      title: "3D Art & Design",
      icon: "🔨",
      skills: [
        { name: "3ds Max", level: 85, description: "3D modeling, animation, rigging" },
        { name: "Blender", level: 80, description: "Modeling, sculpting, texture painting" },
        { name: "Substance Suite", level: 75, description: "Material authoring, texture creation" },
        { name: "ZBrush", level: 70, description: "Digital sculpting, high-poly modeling" }
      ]
    },
    {
      title: "Optimization & Performance",
      icon: "⚡",
      skills: [
        { name: "Performance Profiling", level: 90, description: "Bottleneck identification, optimization" },
        { name: "LOD Systems", level: 88, description: "Level of detail, culling systems" },
        { name: "Memory Management", level: 85, description: "Resource optimization, streaming" },
        { name: "Platform Optimization", level: 82, description: "Mobile, console, PC optimization" }
      ]
    },
    {
      title: "Tools & Pipeline",
      icon: "🛠️",
      skills: [
        { name: "Git/Perforce", level: 85, description: "Version control, team collaboration" },
        { name: "Jenkins/CI", level: 70, description: "Build automation, continuous integration" },
        { name: "Figma", level: 80, description: "UI/UX design, prototyping" },
        { name: "Photoshop", level: 85, description: "Texture creation, image editing" }
      ]
    }
  ];

  const certifications = [
    "Unreal Engine 5 Advanced Certification",
    "NVIDIA RTX Technical Artist Certification",
    "Unity Certified Technical Artist"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Skills & Expertise</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and professional capabilities
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl text-gray-900">
                    <span className="text-2xl">{category.icon}</span>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-900">{skill.name}</span>
                          <span className="text-sm text-gray-600">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2 mb-2" />
                        <p className="text-sm text-gray-600">{skill.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Specializations */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-gray-900 text-center mb-8">Core Specializations</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Unreal Engine Development",
                "Performance Optimization",
                "Shader Programming",
                "Procedural Generation",
                "AR/VR Development",
                "Level Design",
                "Technical Pipeline",
                "Cross-platform Development"
              ].map((specialization, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-200"
                >
                  <span className="text-sm font-medium text-gray-800">{specialization}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">Certifications & Training</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                >
                  {cert}
                </Badge>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-6 text-sm">
              Continuously updating skills through industry certifications and professional development
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Skills;
