
import { Button } from "@/components/ui/button";
import { Download, Mail, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const handleResumeDownload = () => {
    // Convert Google Drive view link to direct download link
    const driveFileId = "1tK4sBRl0DJy7a-9Yzb2wK_wkEzoWLqbh";
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${driveFileId}`;
    window.open(downloadUrl, '_blank');
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-slow" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-40 left-40 w-60 h-60 bg-indigo-400 dark:bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-slow" style={{animationDelay: '6s'}}></div>
        
        {/* Additional flowing particles */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-blue-500 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-purple-500 rounded-full animate-pulse opacity-60" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-indigo-500 rounded-full animate-pulse opacity-60" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-scale-in-center">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center transition-colors duration-300">
                <span className="text-3xl font-bold text-gray-700 dark:text-gray-300 transition-colors duration-300">PN</span>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="mb-6 animate-slide-up" style={{animationDelay: '0.3s'}}>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">Prabhas Naidu</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium mb-4 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              Turning Ideas into AI | Living Data | Breathing Innovation
            </h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.9s'}}>
              Turning innovative ideas into powerful digital products that make a difference.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{animationDelay: '1.2s'}}>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-8 py-4 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 group"
              onClick={handleResumeDownload}
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white font-medium px-8 py-4 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 group"
              onClick={() => window.location.href = 'mailto:prabhasnaidu863@gmail.com'}
            >
              <Mail className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Email Me
            </Button>
            
            <Button 
              size="lg"
              variant="ghost"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium px-8 py-4 hover:bg-white/50 dark:hover:bg-white/10 transition-all duration-500 group transform hover:scale-105"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              My Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-500" />
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center hover:border-blue-500 transition-colors duration-300 cursor-pointer" 
                 onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
              <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-scroll-indicator"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
