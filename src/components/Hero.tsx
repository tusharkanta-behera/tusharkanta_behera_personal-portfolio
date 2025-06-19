
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

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* 3D Avatar/Logo */}
        <div 
          ref={avatarRef}
          className="mb-6 sm:mb-8 mx-auto w-32 h-32 sm:w-48 sm:h-48 relative transition-transform duration-300 ease-out"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-2xl rotate-45 animate-spin-slow"></div>
          <div className="absolute inset-1 sm:inset-2 bg-gray-900 rounded-2xl flex items-center justify-center overflow-hidden">
            <img
              src="/lovable-uploads/6470e9b8-1d2f-4c8e-bf7d-4244f503c546.png"
              alt="Tusharkanta Behera"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          {/* Data Flow Animation */}
          <div className="absolute -inset-2 sm:-inset-4">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-ping"
                style={{
                  top: `${Math.sin(i * Math.PI / 4) * 60 + 50}%`,
                  left: `${Math.cos(i * Math.PI / 4) * 60 + 50}%`,
                  animationDelay: `${i * 200}ms`,
                }}
              />
            ))}
          </div>
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
              onClick={scrollToAbout}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Explore My Work
            </button>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 border border-blue-500/30 text-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300 backdrop-blur-sm">
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
