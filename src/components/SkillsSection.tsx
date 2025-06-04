
const SkillsSection = () => {
  const techSkills = [
    { name: "Python", icon: "🐍" },
    { name: "SQL", icon: "🗄️" },
    { name: "Pandas", icon: "🐼" },
    { name: "NumPy", icon: "🔢" },
    { name: "Bubble.io", icon: "💭" },
    { name: "Rapid API", icon: "⚡" },
    { name: "VS Code", icon: "💻" },
    { name: "Jupyter", icon: "📓" },
    { name: "Google Colab", icon: "☁️" },
    { name: "Tableau", icon: "📊" },
  ];

  const softSkills = [
    "Leadership",
    "Communication", 
    "Startup Strategy",
    "Product Design",
    "Problem Solving"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Skills & Tools
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">Technologies and tools I work with</p>
          </div>

          {/* Tech Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-8 text-center">
              Technical Stack
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {techSkills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center group hover:shadow-md transition-all duration-300 transform hover:-translate-y-2"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h4 className="font-medium text-gray-900">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-8 text-center">
              Core Competencies
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {softSkills.map((skill, index) => (
                <div 
                  key={skill}
                  className="bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full border border-blue-200 text-gray-800 font-medium hover:from-blue-200 hover:to-purple-200 transition-all duration-300 transform hover:scale-105"
                  style={{animationDelay: `${index * 150}ms`}}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
