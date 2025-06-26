
import { useState } from "react";
import { Award, Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

export const Certificates = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const certificates = [
    {
      title: "Prompt Engineering",
      issuer: "Infosys",
      date: "June 22, 2025",
      description: "Advanced prompt engineering techniques and AI optimization",
      color: "from-blue-500 to-cyan-500",
      image: "/lovable-uploads/c78081a4-cd17-432d-8d79-48bf129e9123.png",
      link: "https://drive.google.com/file/d/1aPILPVUFHmpKr8uMXtcPrYcz8lBo66Ow/view"
    },
    {
      title: "Learning Microsoft Power BI",
      issuer: "Infosys",
      date: "June 23, 2025",
      description: "Data visualization and business intelligence with Power BI",
      color: "from-purple-500 to-indigo-500",
      image: "/lovable-uploads/266787b3-5b93-4f35-85ee-e85550055da3.png",
      link: "https://drive.google.com/file/d/1on_NaV_b6UuBzcHGu5H0J0zCOD6PlB98/view"
    },
    {
      title: "Excel",
      issuer: "Infosys",
      date: "June 21, 2025",
      description: "Advanced Excel skills for data analysis and visualization",
      color: "from-green-500 to-teal-500",
      image: "/lovable-uploads/93037309-e345-4e55-b3bb-f265b1294a6c.png",
      link: "https://drive.google.com/file/d/1yfgYSK-bRYABkcTp9E-ti1V1L1QKuLny/view"
    },
    {
      title: "Foundations of Cybersecurity",
      issuer: "Google via Coursera",
      date: "Dec 29, 2023",
      description: "Core cybersecurity principles and network security fundamentals",
      color: "from-red-500 to-pink-500",
      image: "/lovable-uploads/382424a5-2727-4b5d-ac4c-65863cb85284.png",
      link: "https://drive.google.com/file/d/14nKx1b8-UAHpYTKukzIoPoFBHx1gNwhU/view"
    },
    {
      title: "Play It Safe: Manage Security Risks",
      issuer: "Google via Coursera",
      date: "Mar 20, 2024",
      description: "Risk management and security assessment strategies",
      color: "from-orange-500 to-red-500",
      image: "/lovable-uploads/1d15688b-57e7-408b-856c-f24db7e9dbcc.png",
      link: "https://drive.google.com/file/d/11jBxmYX8xKpjn3cTnpTsdw958hb2wkgh/view"
    },
    {
      title: "Connect and Protect: Networks and Network Security",
      issuer: "Google via Coursera",
      date: "Mar 20, 2024",
      description: "Network security architecture and protection mechanisms",
      color: "from-cyan-500 to-blue-500",
      image: "/lovable-uploads/0680a056-4384-4585-8fb1-9c8953f9bc3d.png",
      link: "https://drive.google.com/file/d/1_xa3LemghP1qbsLx-uj3PYZ1K3tyLfN7/view"
    },
    {
      title: "Web Application Security",
      issuer: "CyberYaan Training & Consultancy",
      date: "June 30, 2024",
      description: "Advanced web application security testing and vulnerability assessment",
      color: "from-indigo-500 to-purple-500",
      image: "/lovable-uploads/b3ac344f-99ce-4399-b990-d7833cba727f.png",
      link: "https://drive.google.com/file/d/1qGxIN6RwcQy7fAR1dAzcBl5qgwH5_5M9/view"
    },
    {
      title: "Network Penetration Testing",
      issuer: "CyberYaan Training & Consultancy",
      date: "June 30, 2024",
      description: "Advanced network penetration testing methodologies and tools",
      color: "from-pink-500 to-red-500",
      image: "/lovable-uploads/4151e235-5e50-46b3-9dfa-7c987d2200b1.png",
      link: "https://drive.google.com/file/d/1CpDWPq70AyWSEJICV-_GDROA99QefB2-/view"
    }
  ];

  const nextCertificate = () => {
    setActiveIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setActiveIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const handleCertificateClick = (link: string) => {
    window.open(link, '_blank');
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
                  className="absolute inset-0 transition-all duration-700 ease-out cursor-pointer group"
                  style={{
                    transform,
                    zIndex,
                    opacity
                  }}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className={`h-full w-full bg-gradient-to-br ${cert.color} p-1 rounded-2xl`}>
                    <div className="h-full w-full bg-gray-900/90 backdrop-blur-lg rounded-xl p-8 flex flex-col justify-between relative">
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
                        <div className="flex items-center space-x-2">
                          <div className="px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm">
                            <span className="text-white font-medium">Certified</span>
                          </div>
                          {isActive && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCertificateClick(cert.link);
                              }}
                              className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg backdrop-blur-sm border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 flex items-center space-x-2 group"
                            >
                              <span className="text-blue-400 font-medium">View</span>
                              <ExternalLink className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                            </button>
                          )}
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

          {/* Certificate Details */}
          <div className="text-center mt-6">
            <p className="text-gray-400 text-sm mb-2">
              Certificate {activeIndex + 1} of {certificates.length}
            </p>
            <p className="text-gray-400 text-sm">Click on cards to select • Click "View" button to see original certificate</p>
          </div>
        </div>
      </div>
    </div>
  );
};
