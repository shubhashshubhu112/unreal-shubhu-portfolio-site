
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, ArrowRight, Code, Palette, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <InteractiveBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-foreground leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Technical
                  </span>
                  <br />
                  Artist
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Crafting immersive experiences through cutting-edge technology, 
                  procedural systems, and optimized performance in Unreal Engine.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/resume.pdf';
                    link.download = 'Shubhash_Nath_Thakur_Resume.pdf';
                    link.click();
                  }}
                >
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download Resume
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  asChild
                  className="px-8 py-4 rounded-full border-2 hover:bg-accent transition-all duration-300 hover:scale-105 group"
                >
                  <Link to="/portfolio">
                    View Portfolio
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                  <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                    <span className="text-lg font-medium">Profile Photo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl font-light text-center text-foreground mb-12">Core Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                  <Code className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Unreal Engine</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Expert in UE5+ development, Blueprints, and gameplay systems with focus on performance optimization.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-card/80 backdrop-blur-sm" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors">
                  <Palette className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Procedural Art</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Creating dynamic environments through procedural generation, materials, and advanced shader work.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-card/80 backdrop-blur-sm" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Performance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Optimizing rendering pipelines, memory usage, and frame rates for high-quality real-time experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-light text-foreground mb-8">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            I'm a passionate Technical Artist and Level Designer with expertise in Unreal Engine, 
            procedural generation, and performance optimization. I bridge the gap between creative 
            vision and technical implementation, creating tools and systems that empower artists 
            while maintaining optimal performance.
          </p>
          <Button 
            variant="outline" 
            size="lg"
            asChild
            className="rounded-full px-8 py-4 hover:bg-accent transition-all duration-300 hover:scale-105"
          >
            <Link to="/about">
              Learn More About Me
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
