
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/ContactForm";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Instagram, 
  ExternalLink,
  Clock,
  Globe
} from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-blue-50 dark:to-blue-950">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-light text-foreground mb-6">
              Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Let's collaborate on your next project. I'm always excited to discuss new opportunities, 
              share knowledge, and create something amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm animate-fade-in">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Email</h3>
                        <a 
                          href="mailto:unreal.shubhu@gmail.com"
                          className="text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          unreal.shubhu@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors">
                        <Phone className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Phone</h3>
                        <a 
                          href="tel:+919076533088"
                          className="text-green-600 hover:text-green-700 transition-colors"
                        >
                          +91 90765 33088
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center group-hover:bg-purple-200 dark:group-hover:bg-purple-800 transition-colors">
                        <MapPin className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Location</h3>
                        <span className="text-muted-foreground">Varanasi, India</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center group-hover:bg-orange-200 dark:group-hover:bg-orange-800 transition-colors">
                        <Clock className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Response Time</h3>
                        <span className="text-muted-foreground">Within 24 hours</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">Connect Online</h2>
                  
                  <div className="space-y-4">
                    <a
                      href="https://www.linkedin.com/in/shubhash-n/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-blue-300 hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-300 group"
                    >
                      <Linkedin className="w-6 h-6 text-blue-600" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">LinkedIn</h3>
                        <p className="text-sm text-muted-foreground">Professional network</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-blue-600 transition-colors" />
                    </a>
                    
                    <a
                      href="https://www.instagram.com/unrealshubhu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-pink-300 hover:bg-pink-50 dark:hover:bg-pink-950 transition-all duration-300 group"
                    >
                      <Instagram className="w-6 h-6 text-pink-600" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">Instagram</h3>
                        <p className="text-sm text-muted-foreground">Behind the scenes</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-pink-600 transition-colors" />
                    </a>
                    
                    <a
                      href="https://www.artstation.com/shubhashn4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-all duration-300 group"
                    >
                      <Globe className="w-6 h-6 text-indigo-600" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">ArtStation</h3>
                        <p className="text-sm text-muted-foreground">Portfolio & artwork</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-indigo-600 transition-colors" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="border-0 shadow-xl bg-gradient-to-r from-green-600 to-blue-600 text-white animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-8 text-center">
                  <h2 className="text-xl font-semibold mb-4">Currently Available</h2>
                  <p className="text-green-100 mb-4">
                    Open for freelance projects and full-time opportunities
                  </p>
                  <Badge className="bg-white/20 text-white border-white/30">
                    Accepting New Projects
                  </Badge>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-2xl bg-card/80 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <CardContent className="p-8 lg:p-12">
                  <h2 className="text-3xl font-semibold text-foreground mb-8">Send Me a Message</h2>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
              <CardContent className="p-12">
                <h2 className="text-3xl font-light text-center text-foreground mb-12">Frequently Asked Questions</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">What services do you offer?</h3>
                      <p className="text-muted-foreground">
                        I specialize in technical art, level design, performance optimization, 
                        procedural content generation, and Unreal Engine development consulting.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">What's your typical project timeline?</h3>
                      <p className="text-muted-foreground">
                        Project timelines vary based on scope and complexity. I provide detailed 
                        estimates after understanding your specific requirements and constraints.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Do you work remotely?</h3>
                      <p className="text-muted-foreground">
                        Yes, I work with clients globally. I'm experienced in remote collaboration 
                        and use modern tools to ensure seamless communication and project delivery.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">What's your rate structure?</h3>
                      <p className="text-muted-foreground">
                        I offer flexible pricing based on project scope, timeline, and deliverables. 
                        Contact me to discuss your specific needs and get a customized quote.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
