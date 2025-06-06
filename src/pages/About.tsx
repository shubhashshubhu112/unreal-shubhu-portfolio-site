
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
              alt="Shubhash Nath Thakur"
              className="w-40 h-40 rounded-full mx-auto mb-8 shadow-lg object-cover"
            />
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">About Me</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A passionate Technical Artist bridging creativity and technology
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">My Journey</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                My passion for technical artistry began with a fascination for how digital worlds come to life. 
                As a Technical Artist and Level Designer, I specialize in creating immersive experiences that 
                push the boundaries of what's possible in real-time rendering and interactive media.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With expertise in Unreal Engine 5.5+, I focus on developing efficient workflows, optimizing 
                performance, and creating tools that empower creative teams to achieve their vision without 
                technical limitations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Education</h2>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Game Design & Development</h3>
                  <p className="text-blue-600 font-medium mb-2">Arena Animation, Varanasi</p>
                  <p className="text-gray-600">2022</p>
                  <p className="text-gray-700 mt-3">
                    Comprehensive program covering game development pipelines, 3D modeling, 
                    animation, and technical implementation.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Specializations</h2>
                <div className="space-y-3">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900">Unreal Engine Development</h4>
                    <p className="text-blue-700 text-sm">Advanced blueprint systems, gameplay mechanics</p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900">Performance Optimization</h4>
                    <p className="text-green-700 text-sm">LOD systems, culling, memory management</p>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-900">Procedural Generation</h4>
                    <p className="text-purple-700 text-sm">Algorithmic content creation, automation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Work Experience</h2>
              
              <div className="space-y-8">
                <div className="border-l-4 border-blue-600 pl-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">Technical Artist | Level Designer</h3>
                    <span className="text-blue-600 font-medium">Aug 2023 – Aug 2024</span>
                  </div>
                  <p className="text-lg text-blue-600 font-medium mb-3">MergeXR Studios</p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Developed advanced shader systems and material libraries for AR/VR applications</li>
                    <li>• Optimized rendering pipelines for mobile and standalone VR platforms</li>
                    <li>• Created procedural level generation tools using Unreal Engine's blueprint system</li>
                    <li>• Collaborated with artists and programmers to streamline content creation workflows</li>
                    <li>• Implemented performance monitoring and optimization strategies</li>
                  </ul>
                </div>

                <div className="border-l-4 border-gray-400 pl-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">Video Editor</h3>
                    <span className="text-gray-600 font-medium">July 2022 – July 2023</span>
                  </div>
                  <p className="text-lg text-gray-600 font-medium mb-3">Nalli Silk Sarees Pvt Ltd</p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Created high-quality promotional videos and product showcases</li>
                    <li>• Developed brand-consistent visual content across multiple platforms</li>
                    <li>• Collaborated with marketing team to produce engaging social media content</li>
                    <li>• Managed post-production workflows and asset organization</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Philosophy</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                "I believe that the best technical art is invisible to the end user but foundational 
                to the experience. My goal is to create solutions that enable creativity while maintaining 
                the highest standards of performance and visual quality. Every optimization, every shader, 
                and every tool I create is designed to serve the greater vision of immersive, 
                engaging digital experiences."
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
