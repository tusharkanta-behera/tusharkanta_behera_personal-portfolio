
import { useState } from "react";
import { Download, User, Code, Shield, GraduationCap } from "lucide-react";

export const About = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const expertise = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Data Analytics",
      description: "Python, Excel, Visualization, Statistical Analysis"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cyber Security",
      description: "SIEM, Malware Analysis, Penetration Testing, Web Security"
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "Prompt Engineering",
      description: "GPT-4, AI Automation, Conversation Design, ML Optimization"
    }
  ];

  const education = [
    {
      level: "B.Tech (7th Semester)",
      institution: "GIET University",
      board: "GIET University",
      score: "8.3 CGPA",
      status: "Pursuing"
    },
    {
      level: "12th Grade",
      institution: "CHSE Board",
      board: "CHSE",
      score: "84.66%",
      status: "Completed"
    },
    {
      level: "10th Grade",
      institution: "BSE Board",
      board: "BSE",
      score: "82.33%",
      status: "Completed"
    }
  ];

  const downloadResume = () => {
    window.open("https://drive.google.com/file/d/1swmV3R16jUK6JoSSqqM2FUyo6dyh1dWr/view", "_blank");
  };

  return (
    <div className="min-h-screen py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300">Passionate about technology and innovation</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-16">
          {/* 3D Rotating Card */}
          <div className="flex justify-center order-2 lg:order-1">
            <div 
              className="relative w-72 h-80 sm:w-80 sm:h-96 cursor-pointer mx-auto"
              onMouseEnter={() => setIsFlipped(true)}
              onMouseLeave={() => setIsFlipped(false)}
            >
              <div className={`absolute inset-0 transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                {/* Front of card */}
                <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg border border-blue-500/30 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 mb-4 sm:mb-6 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-cyan-500 bg-gradient-to-r from-blue-500 to-cyan-500 p-1">
                    <img
                      src="/lovable-uploads/dba53566-a3a2-4b80-99fc-04fd6c4e984e.png"
                      alt="Tusharkanta Behera"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Tusharkanta Behera</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">Tech Enthusiast & Security Researcher</p>
                  <div className="text-xs sm:text-sm text-gray-400">Hover to learn more</div>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-lg border border-cyan-500/30 rounded-2xl p-6 sm:p-8">
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Professional Bio</h4>
                  <p className="text-xs sm:text-sm text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                    Dedicated technology professional with expertise spanning data analytics, cybersecurity, and AI. 
                    Passionate about leveraging cutting-edge technologies to solve complex problems and drive innovation.
                  </p>
                  <button 
                    onClick={downloadResume}
                    className="w-full px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base transform hover:scale-105"
                  >
                    <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Download Resume</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Expertise Cards */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            {expertise.map((item, index) => (
              <div 
                key={index}
                className="group p-4 sm:p-6 bg-white/5 backdrop-blur-lg border border-gray-700/30 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-white group-hover:scale-110 transition-transform duration-300 shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm sm:text-base">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center justify-center space-x-2">
              <GraduationCap className="w-8 h-8 text-blue-400" />
              <span>Education</span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-gray-700/30 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{edu.level}</h4>
                  <p className="text-gray-300 text-sm mb-2">{edu.institution}</p>
                  <div className="text-2xl font-bold text-blue-400 mb-2">{edu.score}</div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    edu.status === 'Pursuing' 
                      ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      : 'bg-green-500/20 text-green-400 border border-green-500/30'
                  }`}>
                    {edu.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
