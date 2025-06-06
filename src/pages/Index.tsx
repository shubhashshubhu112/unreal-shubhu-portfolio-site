
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Index = () => {
  const handleResumeDownload = () => {
    // Placeholder for resume download functionality
    console.log("Resume download initiated");
    // You can replace this with actual resume file link
    window.open("https://drive.google.com/file/d/your-resume-file-id/view", "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
              alt="Shubhash Nath Thakur"
              className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 animate-fade-in">
            Shubhash Nath Thakur
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
            Technical Artist | Unreal Engine Specialist
          </p>
          
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting immersive digital experiences through innovative technical artistry, 
            specializing in Unreal Engine development, procedural generation, and performance optimization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleResumeDownload}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105"
            >
              Download Resume
            </Button>
            
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-medium transition-all duration-200"
              onClick={() => document.getElementById('about-preview')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section id="about-preview" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-6">About Me</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                As a passionate Technical Artist and Level Designer, I bridge the gap between 
                creative vision and technical implementation. With expertise in Unreal Engine 5.5+, 
                I specialize in creating optimized, visually stunning game environments and systems.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                My experience spans from MergeXR Studios to independent projects, where I've 
                developed advanced shader systems, procedural generation tools, and performance 
                optimization solutions for AR/VR and traditional gaming platforms.
              </p>
              <Button 
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={() => window.location.href = '/about'}
              >
                Read Full Story
              </Button>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                alt="Technical Artist at work"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Highlights */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 text-center mb-12">Core Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Game Development</h3>
              <p className="text-gray-600">Unreal Engine 5.5+, Blueprints, Gameplay Systems, Level Design</p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Optimization</h3>
              <p className="text-gray-600">Rendering Pipeline, LOD Systems, Memory Management</p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Art</h3>
              <p className="text-gray-600">Shaders, Procedural Generation, VFX, Material Editor</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
