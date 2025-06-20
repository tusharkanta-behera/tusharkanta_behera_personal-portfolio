
import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  const avatarRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (avatarRef.current && window.innerWidth >= 768) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (clientX / innerWidth - 0.5) * 20;
        const y = (clientY / innerHeight - 0.5) * 20;
        
        avatarRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToExperience = () => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    window.open("https://drive.google.com/file/d/1swmV3R16jUK6JoSSqqM2FUyo6dyh1dWr/view", "_blank");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* Enhanced Circular Profile Image */}
        <div 
          ref={avatarRef}
          className="mb-6 sm:mb-8 mx-auto w-40 h-40 sm:w-56 sm:h-56 relative transition-transform duration-300 ease-out"
        >
          {/* Animated rotating border */}
          <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 animate-spin-slow opacity-75 blur-sm"></div>
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 animate-pulse"></div>
          
          {/* Main image container */}
          <div className="relative w-full h-full rounded-full border-4 border-blue-500/50 overflow-hidden bg-transparent backdrop-blur-sm">
            <img
              src="/lovable-uploads/02080aaa-2e5c-4185-ad60-95a85881ffa9.png"
              alt="Tusharkanta Behera"
              className="w-full h-full object-cover rounded-full scale-110 brightness-110 contrast-110"
            />
          </div>
          
          {/* Additional glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 animate-pulse"></div>
        </div>

        {/* Main Text */}
        <div ref={textRef} className="space-y-4 sm:space-y-6 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white">
            <span className="block">Tusharkanta</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
              Behera
            </span>
          </h1>
          
          <div className="text-base sm:text-xl md:text-2xl text-gray-300 space-y-2">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
              <span className="px-2 sm:px-3 py-1 bg-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm text-sm sm:text-base">
                Data
              </span>
              <span className="text-cyan-400 hidden sm:block">•</span>
              <span className="px-2 sm:px-3 py-1 bg-cyan-500/20 rounded-full border border-cyan-500/30 backdrop-blur-sm text-sm sm:text-base">
                Defense
              </span>
              <span className="text-blue-400 hidden sm:block">•</span>
              <span className="px-2 sm:px-3 py-1 bg-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm text-sm sm:text-base">
                Dialogue with AI
              </span>
            </div>
          </div>

          <p className="text-sm sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
            Passionate tech enthusiast specializing in Data Analytics, Cyber Security, and Prompt Engineering. 
            Transforming data into insights, securing digital landscapes, and pioneering AI interactions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-6 sm:mt-8 px-4">
            <button 
              onClick={scrollToExperience}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Explore My Work
            </button>
            <button 
              onClick={downloadResume}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 border border-blue-500/30 text-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300 backdrop-blur-sm"
            >
              Download Resume
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
        </div>
      </div>
    </div>
  );
};
