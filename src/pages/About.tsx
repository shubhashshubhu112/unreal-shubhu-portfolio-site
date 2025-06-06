
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <InteractiveBackground />
      <Navigation />
      
      <div className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-light text-foreground mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A Technical Artist passionate about pushing the boundaries of real-time graphics 
              and creating efficient, scalable systems for immersive experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Section */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm animate-fade-in">
                <CardContent className="p-8 text-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-full mx-auto mb-6 overflow-hidden border-4 border-background shadow-lg">
                    <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                      <span className="text-lg font-medium">Profile Photo</span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground mb-2">Shubhash Nath Thakur</h2>
                  <p className="text-muted-foreground mb-4">Technical Artist & Level Designer</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800/50">Unreal Engine</Badge>
                    <Badge className="bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-800/50">Procedural Art</Badge>
                    <Badge className="bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 hover:bg-green-200 dark:hover:bg-green-800/50">Optimization</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span className="text-muted-foreground">Varanasi, India</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-muted-foreground">unreal.shubhu@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-muted-foreground">+91 90765 33088</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Bio */}
              <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">My Journey</h3>
                  <div className="prose prose-lg text-muted-foreground leading-relaxed space-y-4">
                    <p>
                      I am a passionate Technical Artist and Level Designer specializing in Unreal Engine development, 
                      with a strong focus on procedural generation, performance optimization, and creating tools that 
                      bridge the gap between artistic vision and technical implementation.
                    </p>
                    <p>
                      My expertise lies in developing efficient workflows, optimizing rendering pipelines, and creating 
                      dynamic systems that enable artists to work more effectively while maintaining high performance 
                      standards. I enjoy solving complex technical challenges and turning creative concepts into 
                      interactive realities.
                    </p>
                    <p>
                      With experience in both technical implementation and creative problem-solving, I bring a unique 
                      perspective to game development projects, always striving to push the boundaries of what's 
                      possible in real-time graphics and interactive experiences.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Education */}
              <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                    Education
                  </h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-600 pl-6">
                      <h4 className="text-lg font-semibold text-foreground">Game Design & Development</h4>
                      <p className="text-blue-600 font-medium">Arena Animation, Varanasi</p>
                      <div className="flex items-center gap-2 text-muted-foreground mt-2">
                        <Calendar className="w-4 h-4" />
                        <span>2022</span>
                      </div>
                      <p className="text-muted-foreground mt-3">
                        Comprehensive program covering game development fundamentals, 3D modeling, 
                        animation, and real-time rendering techniques.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Experience */}
              <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                    <Briefcase className="w-6 h-6 text-purple-600" />
                    Professional Experience
                  </h3>
                  <div className="space-y-8">
                    <div className="border-l-4 border-purple-600 pl-6">
                      <h4 className="text-lg font-semibold text-foreground">Technical Artist | Level Designer</h4>
                      <p className="text-purple-600 font-medium">MergeXR Studios</p>
                      <div className="flex items-center gap-2 text-muted-foreground mt-2">
                        <Calendar className="w-4 h-4" />
                        <span>August 2023 – August 2024</span>
                      </div>
                      <ul className="text-muted-foreground mt-3 space-y-2">
                        <li>• Developed procedural landscape systems and optimization tools</li>
                        <li>• Created custom shaders and materials for enhanced visual quality</li>
                        <li>• Implemented AR/VR workflows and performance optimization strategies</li>
                        <li>• Collaborated with artists and developers to streamline production pipelines</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-600 pl-6">
                      <h4 className="text-lg font-semibold text-foreground">Video Editor</h4>
                      <p className="text-green-600 font-medium">Nalli Silk Sarees Pvt Ltd</p>
                      <div className="flex items-center gap-2 text-muted-foreground mt-2">
                        <Calendar className="w-4 h-4" />
                        <span>July 2022 – July 2023</span>
                      </div>
                      <ul className="text-muted-foreground mt-3 space-y-2">
                        <li>• Created high-quality promotional videos and marketing content</li>
                        <li>• Managed post-production workflows using DaVinci Resolve and After Effects</li>
                        <li>• Collaborated with creative teams to develop visual storytelling strategies</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
