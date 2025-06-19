
import { useState } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const itemsPerSlide = window.innerWidth >= 768 ? 2 : 1;
  const maxSlides = Math.ceil(filteredProjects.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  const getVisibleProjects = () => {
    if (activeCategory === "all" && window.innerWidth >= 768) {
      return filteredProjects;
    }
    const startIndex = currentSlide * itemsPerSlide;
    return filteredProjects.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <div className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400">Showcasing innovation across data, security, and AI</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setCurrentSlide(0);
              }}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                  : 'bg-white/10 text-gray-400 hover:bg-blue-500/20 border border-gray-700/30'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Display */}
        <div className="relative">
          {activeCategory === "all" ? (
            // Show all projects in grid for "All Projects"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            // Show sliding carousel for specific categories
            <div className="relative max-w-5xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {Array.from({ length: maxSlides }, (_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className={`grid ${itemsPerSlide === 2 ? 'grid-cols-2' : 'grid-cols-1'} gap-6`}>
                        {filteredProjects
                          .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                          .map((project) => (
                            <ProjectCard key={project.id} project={project} />
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation Arrows */}
              {maxSlides > 1 && (
                <>
                  <button 
                    onClick={prevSlide}
                    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 bg-white/20 backdrop-blur-lg rounded-full hover:bg-white/30 transition-all duration-300 z-10"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 bg-white/20 backdrop-blur-lg rounded-full hover:bg-white/30 transition-all duration-300 z-10"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </button>
                </>
              )}
              
              {/* Slide Indicators */}
              {maxSlides > 1 && (
                <div className="flex justify-center space-x-2 mt-6">
                  {Array.from({ length: maxSlides }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500' 
                          : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }: { project: any }) => (
  <div className="bg-white/10 backdrop-blur-lg border border-gray-700/30 rounded-2xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
    <div className="relative overflow-hidden">
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    
    <div className="p-4 sm:p-6 lg:p-8">
      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">{project.title}</h3>
      <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">{project.description}</p>
      
      <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
        {project.tech.map((tech: string, techIndex: number) => (
          <span 
            key={techIndex}
            className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs sm:text-sm border border-blue-500/30"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        <a 
          href={project.link}
          className="flex items-center justify-center space-x-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 text-sm sm:text-base"
        >
          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>Live Demo</span>
        </a>
        <a 
          href={project.github}
          className="flex items-center justify-center space-x-2 px-3 sm:px-4 py-2 border border-gray-600 text-gray-400 rounded-lg hover:bg-gray-800 transition-all duration-300 text-sm sm:text-base"
        >
          <Github className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>Code</span>
        </a>
      </div>
    </div>
  </div>
);
