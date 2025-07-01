import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, BarChart3, Zap, Settings, Monitor, FileText, Globe } from "lucide-react";

const SkillsSection = () => {
  const techStack = [
    { name: "Python", category: "Programming", icon: Code },
    { name: "SQL", category: "Database", icon: Database },
    { name: "Pandas", category: "Data Science", icon: BarChart3 },
    { name: "NumPy", category: "Data Science", icon: BarChart3 },
    { name: "Bubble.io", category: "No-Code", icon: Zap },
    { name: "Rapid API", category: "API", icon: Globe },
    { name: "VS Code", category: "Tools", icon: Settings },
    { name: "Jupyter Notebook", category: "Tools", icon: FileText },
    { name: "Google Colab", category: "Tools", icon: Monitor },
    { name: "Git", category: "Tools", icon: Code },
    { name: "Tableau", category: "Visualization", icon: BarChart3 }
  ];

  const softSkills = [
    "Leadership",
    "Communication", 
    "Startup Strategy",
    "Product Management",
    "Market Research",
    "Team Building"
  ];

  const categoryColors = {
    "Programming": "from-blue-500 to-blue-600",
    "Database": "from-green-500 to-green-600", 
    "Data Science": "from-purple-500 to-purple-600",
    "No-Code": "from-orange-500 to-orange-600",
    "API": "from-red-500 to-red-600",
    "Tools": "from-indigo-500 to-indigo-600",
    "Visualization": "from-pink-500 to-pink-600"
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
              Skills & Tools
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300">Technologies and expertise that power my projects</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Technical Skills */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-6 text-center lg:text-left">
                Technical Stack
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {techStack.map((skill) => (
                  <Card key={skill.name} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm overflow-hidden dark:bg-gray-800">
                    <CardContent className="p-4 text-center">
                      <div className="flex justify-center mb-3">
                        <div className={`w-12 h-12 bg-gradient-to-r ${categoryColors[skill.category]} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <skill.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{skill.name}</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">{skill.category}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-6 text-center lg:text-left">
                Soft Skills
              </h3>
              <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {softSkills.map((skill, index) => (
                      <div key={skill} className="flex items-center group">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;


