
import { useEffect, useRef, useState } from "react";

export const Skills = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const radarRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      name: "Data Analytics",
      skills: [
        { name: "Python", level: 90, icon: "🐍" },
        { name: "Excel", level: 95, icon: "📊" },
        { name: "SQL", level: 85, icon: "🗃️" },
        { name: "Power BI", level: 80, icon: "📈" },
        { name: "Tableau", level: 75, icon: "📋" }
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Cyber Security",
      skills: [
        { name: "Splunk", level: 88, icon: "🔍" },
        { name: "Nessus", level: 82, icon: "🛡️" },
        { name: "Wireshark", level: 79, icon: "🌐" },
        { name: "SIEM", level: 85, icon: "⚡" },
        { name: "Penetration Testing", level: 77, icon: "🔓" }
      ],
      color: "from-red-500 to-red-600"
    },
    {
      name: "Prompt Engineering",
      skills: [
        { name: "GPT-4", level: 93, icon: "🤖" },
        { name: "LangChain", level: 86, icon: "🔗" },
        { name: "AI Automation", level: 89, icon: "⚙️" },
        { name: "Conversation Design", level: 91, icon: "💬" },
        { name: "Model Optimization", level: 84, icon: "🎯" }
      ],
      color: "from-green-500 to-green-600"
    },
    {
      name: "Development",
      skills: [
        { name: "Flask", level: 83, icon: "🌶️" },
        { name: "React", level: 87, icon: "⚛️" },
        { name: "JavaScript", level: 85, icon: "🟨" },
        { name: "Git", level: 89, icon: "📝" },
        { name: "API Development", level: 81, icon: "🔌" }
      ],
      color: "from-purple-500 to-purple-600"
    }
  ];

  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Expertise across multiple technology domains</p>
        </div>

        {/* 3D Skill Globe/Radar */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Radar Chart */}
          <div className="relative">
            <div 
              ref={radarRef}
              className="relative w-96 h-96 mx-auto"
            >
              {/* Radar Background Circles */}
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute border border-gray-300/30 dark:border-gray-600/30 rounded-full ${
                    i === 0 ? 'inset-4' :
                    i === 1 ? 'inset-8' :
                    i === 2 ? 'inset-12' :
                    i === 3 ? 'inset-16' : 'inset-20'
                  }`}
                />
              ))}

              {/* Radar Lines */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 bg-gray-300/30 dark:bg-gray-600/30 top-1/2 left-1/2 origin-bottom"
                  style={{
                    height: '48%',
                    transform: `translate(-50%, -100%) rotate(${i * 45}deg)`,
                  }}
                />
              ))}

              {/* Skill Points */}
              {skillCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="absolute inset-0">
                  {category.skills.map((skill, skillIndex) => {
                    const angle = (skillIndex * 72 + categoryIndex * 18) * (Math.PI / 180);
                    const radius = (skill.level / 100) * 140;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    
                    return (
                      <div
                        key={skill.name}
                        className="absolute w-4 h-4 cursor-pointer transition-all duration-300 hover:scale-150"
                        style={{
                          left: '50%',
                          top: '50%',
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        }}
                        onMouseEnter={() => setActiveSkill(skill.name)}
                        onMouseLeave={() => setActiveSkill(null)}
                      >
                        <div className={`w-full h-full rounded-full bg-gradient-to-r ${category.color} shadow-lg animate-pulse`} />
                        {activeSkill === skill.name && (
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                            {skill.name} - {skill.level}%
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Skill Categories */}
          <div className="space-y-6">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                  hoveredCategory === index
                    ? 'bg-white/20 dark:bg-gray-800/50 border-blue-500/50 shadow-lg transform scale-105'
                    : 'bg-white/5 dark:bg-gray-800/30 border-gray-200/20 dark:border-gray-700/30'
                }`}
                onMouseEnter={() => setHoveredCategory(index)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.name}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center space-x-3">
                      <span className="text-lg">{skill.icon}</span>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                          <div 
                            className={`h-1.5 rounded-full bg-gradient-to-r ${category.color} transition-all duration-500`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
