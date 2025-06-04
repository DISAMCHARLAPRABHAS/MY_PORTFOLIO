
const ExperienceSection = () => {
  const experiences = [
    {
      title: "TCS CodeVita",
      role: "Rank #3284",
      description: "Data Structure + Algorithm Programming Competition",
      period: "2024",
      icon: "🏆"
    },
   
    {
      title: "Startup Experience",
      role: "Founder & Product Lead",
      description: "Product Design, MVP Development, Pitch Decks, Market Research",
      period: "2023-Present",
      icon: "💼"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300">Professional journey and achievements</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={exp.title} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-white dark:bg-gray-800 border-4 border-blue-500 rounded-full"></div>
                  
                  {/* Content */}
                  <div className="ml-20 bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600 w-full group hover:shadow-md transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">{exp.icon}</span>
                      <div className="flex-1">
                        <h3 className="font-heading font-bold text-gray-900 dark:text-white text-xl">{exp.title}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.role}</p>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-600 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
