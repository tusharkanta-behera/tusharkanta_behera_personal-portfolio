
import { useState } from "react";
import { Download, User, Code, Shield } from "lucide-react";

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

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Passionate about technology and innovation</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 3D Rotating Card */}
          <div className="flex justify-center">
            <div 
              className="relative w-80 h-96 cursor-pointer"
              onMouseEnter={() => setIsFlipped(true)}
              onMouseLeave={() => setIsFlipped(false)}
            >
              <div className={`absolute inset-0 transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                {/* Front of card */}
                <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg border border-blue-500/30 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6 flex items-center justify-center">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Tusharkanta Behera</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">Tech Enthusiast & Security Researcher</p>
                  <div className="text-sm text-gray-500 dark:text-gray-500">Hover to learn more</div>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-lg border border-cyan-500/30 rounded-2xl p-8">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Professional Bio</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    Dedicated technology professional with expertise spanning data analytics, cybersecurity, and AI. 
                    Passionate about leveraging cutting-edge technologies to solve complex problems and drive innovation.
                  </p>
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Download Resume</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Expertise Cards */}
          <div className="space-y-6">
            {expertise.map((item, index) => (
              <div 
                key={index}
                className="group p-6 bg-white/5 dark:bg-gray-800/50 backdrop-blur-lg border border-gray-200/20 dark:border-gray-700/30 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
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
