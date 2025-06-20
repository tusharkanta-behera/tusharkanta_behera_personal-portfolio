
import { useState } from "react";
import { MapPin, Calendar, Building } from "lucide-react";

export const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const experiences = [
    {
      company: "Cyber Security Club",
      position: "Member",
      duration: "Jan 2024 - Present",
      location: "GIET University, Gunupur",
      type: "On-site",
      side: "left"
    },
    {
      company: "Cyber Unbound",
      position: "Security Engineer",
      duration: "Jan 2024 - May 2024 (5 Months)",
      location: "Remote",
      type: "Remote",
      side: "right"
    },
    {
      company: "CyberYaan Training & Consultancy",
      position: "Security Analyst",
      duration: "June 2024 - July 2024 (2 Months)",
      location: "Remote",
      type: "Remote",
      side: "left"
    },
    {
      company: "Google Developer Group",
      position: "Cyber Security Lead",
      duration: "Sept 2024 - Present",
      location: "GIET University",
      type: "Remote",
      side: "right"
    },
    {
      company: "DRDO",
      position: "Data Analytics Intern",
      duration: "May 2025 - July 2025",
      location: "On-site",
      type: "On-site",
      side: "left"
    }
  ];

  return (
    <div className="min-h-screen py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Experience</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300">My journey in the tech industry</p>
        </div>

        <div className="relative">
          {/* Central Timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500 h-full rounded-full opacity-60"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${
                  exp.side === 'left' ? 'justify-start' : 'justify-end'
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-gray-900 z-10 animate-pulse"></div>
                
                {/* Experience Card */}
                <div className={`w-full max-w-md ${
                  exp.side === 'left' ? 'mr-auto pr-8' : 'ml-auto pl-8'
                }`}>
                  <div className={`relative p-6 bg-white/5 backdrop-blur-lg border border-gray-700/30 rounded-xl transition-all duration-500 ${
                    hoveredIndex === index 
                      ? 'transform scale-105 border-blue-500/50 shadow-lg shadow-blue-500/20' 
                      : 'hover:border-blue-500/30'
                  }`}>
                    {/* Connection Line */}
                    <div className={`absolute top-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 ${
                      exp.side === 'left' ? 'right-0' : 'left-0'
                    }`}></div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-bold text-white">{exp.position}</h3>
                          <p className="text-blue-400 font-medium">{exp.company}</p>
                        </div>
                        <div className={`px-2 py-1 rounded-full text-xs ${
                          exp.type === 'Remote' 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        }`}>
                          {exp.type}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-gray-300 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-gray-300 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Hover Animation */}
                    {hoveredIndex === index && (
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 animate-pulse"></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
