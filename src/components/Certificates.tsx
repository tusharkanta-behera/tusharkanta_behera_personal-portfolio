
import { useState } from "react";
import { Award, Star, ChevronLeft, ChevronRight } from "lucide-react";

export const Certificates = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const certificates = [
    {
      title: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      date: "2024",
      description: "Advanced penetration testing and ethical hacking certification",
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Python for Data Analytics",
      issuer: "IBM",
      date: "2024",
      description: "Comprehensive data analysis and visualization with Python",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cybersecurity Fundamentals",
      issuer: "Cisco",
      date: "2024",
      description: "Core cybersecurity principles and network security",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "AI & Machine Learning",
      issuer: "Google",
      date: "2024",
      description: "Advanced AI concepts and machine learning algorithms",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Cloud Security",
      issuer: "Microsoft",
      date: "2024",
      description: "Cloud infrastructure security and compliance",
      color: "from-orange-500 to-red-500"
    }
  ];

  const nextCertificate = () => {
    setActiveIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setActiveIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  return (
    <div className="min-h-screen py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Certificates & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Achievements</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300">Professional certifications and recognitions</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* 3D Card Stack */}
          <div className="relative h-96 perspective-1000">
            {certificates.map((cert, index) => {
              const isActive = index === activeIndex;
              const distance = Math.abs(index - activeIndex);
              const isVisible = distance <= 2;
              
              let transform = '';
              let zIndex = certificates.length - distance;
              let opacity = 1;
              
              if (!isActive) {
                const offset = index > activeIndex ? 1 : -1;
                transform = `translateX(${offset * (distance * 20)}px) translateY(${distance * 20}px) scale(${1 - distance * 0.1}) rotateY(${offset * distance * 15}deg)`;
                opacity = Math.max(0.3, 1 - distance * 0.3);
              }

              return isVisible ? (
                <div
                  key={index}
                  className="absolute inset-0 transition-all duration-700 ease-out cursor-pointer"
                  style={{
                    transform,
                    zIndex,
                    opacity
                  }}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className={`h-full w-full bg-gradient-to-br ${cert.color} p-1 rounded-2xl`}>
                    <div className="h-full w-full bg-gray-900/90 backdrop-blur-lg rounded-xl p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <Award className="w-12 h-12 text-white" />
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-3">{cert.title}</h3>
                        <p className="text-lg text-gray-300 mb-4">{cert.issuer}</p>
                        <p className="text-gray-400 leading-relaxed">{cert.description}</p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-blue-400 font-medium">{cert.date}</span>
                        <div className="px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm">
                          <span className="text-white font-medium">Certified</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null;
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevCertificate}
              className="p-3 bg-white/5 backdrop-blur-lg border border-gray-700/30 rounded-full hover:border-blue-500/50 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <div className="flex space-x-2">
              {certificates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-blue-500' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextCertificate}
              className="p-3 bg-white/5 backdrop-blur-lg border border-gray-700/30 rounded-full hover:border-blue-500/50 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Swipe Instructions */}
          <div className="text-center mt-6">
            <p className="text-gray-400 text-sm">Click on cards or use navigation to explore certificates</p>
          </div>
        </div>
      </div>
    </div>
  );
};
