
import { Linkedin, Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Shubhash Nath Thakur</h3>
            <p className="text-gray-600 mb-4">
              Technical Artist & Level Designer specializing in Unreal Engine, 
              procedural generation, and performance optimization.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/portfolio" className="block text-gray-600 hover:text-blue-600 transition-colors">Portfolio</a>
              <a href="/skills" className="block text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
              <a href="/blog" className="block text-gray-600 hover:text-blue-600 transition-colors">Blog</a>
              <a href="/contact" className="block text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/shubhash-n/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:unreal.shubhu@gmail.com"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://www.instagram.com/unrealshubhu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            © 2025 Shubhash Nath Thakur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
