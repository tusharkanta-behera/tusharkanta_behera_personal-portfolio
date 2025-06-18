
import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  const avatarRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (avatarRef.current) {
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
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* 3D Avatar/Logo */}
        <div 
          ref={avatarRef}
          className="mb-8 mx-auto w-48 h-48 relative transition-transform duration-300 ease-out"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-2xl rotate-45 animate-spin-slow"></div>
          <div className="absolute inset-2 bg-gray-900 dark:bg-gray-800 rounded-2xl flex items-center justify-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              TB
            </div>
          </div>
          {/* Data Flow Animation */}
          <div className="absolute -inset-4">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-ping"
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
        <div ref={textRef} className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white">
            <span className="block">Tusharkanta</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
              Behera
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 space-y-2">
            <div className="flex items-center justify-center space-x-4">
              <span className="px-3 py-1 bg-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
                Data
              </span>
              <span className="text-cyan-400">•</span>
              <span className="px-3 py-1 bg-cyan-500/20 rounded-full border border-cyan-500/30 backdrop-blur-sm">
                Defense
              </span>
              <span className="text-blue-400">•</span>
              <span className="px-3 py-1 bg-blue-500/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
                Dialogue with AI
              </span>
            </div>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate tech enthusiast specializing in Data Analytics, Cyber Security, and Prompt Engineering. 
            Transforming data into insights, securing digital landscapes, and pioneering AI interactions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button 
              onClick={scrollToAbout}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Explore My Work
            </button>
            <button className="px-8 py-3 border border-blue-500/30 text-blue-500 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300 backdrop-blur-sm">
              Download Resume
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </div>
    </div>
  );
};
