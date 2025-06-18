
import { useState } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentProject, setCurrentProject] = useState(0);

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "data", name: "Data Analytics" },
    { id: "security", name: "Cyber Security" },
    { id: "ai", name: "Prompt Engineering" }
  ];

  const projects = [
    {
      id: 1,
      title: "Advanced Excel Dashboard",
      category: "data",
      description: "Interactive financial analytics dashboard with real-time data visualization and automated reporting features.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      tech: ["Excel", "VBA", "Power BI", "SQL"],
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Python Data Visualization Suite",
      category: "data",
      description: "Comprehensive data analysis toolkit with machine learning models and interactive visualizations.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "SIEM Security Monitor",
      category: "security",
      description: "Real-time security information and event management system with threat detection algorithms.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      tech: ["Splunk", "Python", "Elasticsearch", "Kibana"],
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Malware Analysis Framework",
      category: "security",
      description: "Automated malware detection and analysis system with behavioral pattern recognition.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tech: ["Python", "Nessus", "Wireshark", "YARA"],
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "AI Prompt Optimization Engine",
      category: "ai",
      description: "Advanced prompt engineering toolkit for optimizing GPT-4 interactions and automation workflows.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      tech: ["GPT-4", "Python", "Flask", "React"],
      link: "#",
      github: "#"
    },
    {
      id: 6,
      title: "Conversational AI Assistant",
      category: "ai",
      description: "Intelligent chatbot with context awareness and multi-domain knowledge integration.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
      tech: ["ChatGPT", "LangChain", "Vector DB", "API"],
      link: "#",
      github: "#"
    }
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <div className="min-h-screen py-20 px-6 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Showcasing innovation across data, security, and AI</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setCurrentProject(0);
              }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                  : 'bg-white/10 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 hover:bg-blue-500/20 border border-gray-200/20 dark:border-gray-700/30'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* 3D Project Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl">
            {filteredProjects.length > 0 && (
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentProject * 100}%)` }}
              >
                {filteredProjects.map((project, index) => (
                  <div key={project.id} className="w-full flex-shrink-0">
                    <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg border border-gray-200/20 dark:border-gray-700/30 rounded-2xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
                      <div className="relative overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-3 py-1 bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full text-sm border border-blue-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex space-x-4">
                          <a 
                            href={project.link}
                            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Live Demo</span>
                          </a>
                          <a 
                            href={project.github}
                            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                          >
                            <Github className="w-4 h-4" />
                            <span>Code</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Navigation Arrows */}
            {filteredProjects.length > 1 && (
              <>
                <button 
                  onClick={prevProject}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 dark:bg-gray-800/50 backdrop-blur-lg rounded-full hover:bg-white/30 dark:hover:bg-gray-700/50 transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </button>
                <button 
                  onClick={nextProject}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 dark:bg-gray-800/50 backdrop-blur-lg rounded-full hover:bg-white/30 dark:hover:bg-gray-700/50 transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </button>
              </>
            )}
          </div>
          
          {/* Project Indicators */}
          {filteredProjects.length > 1 && (
            <div className="flex justify-center space-x-2 mt-6">
              {filteredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject 
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500' 
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
