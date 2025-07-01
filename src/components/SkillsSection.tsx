
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, BarChart3, Zap, Monitor, FileText, Globe, Github, Radical, Airplay } from "lucide-react";
import Floating3DIcon from "@/components/3d/Floating3DIcon";

const SkillsSection = () => {
  const techStack = [
    { name: "Python", category: "Programming", icon: Code },
    { name: "SQL", category: "Database", icon: Database },
    { name: "Pandas", category: "Data Science", icon: BarChart3 },
    { name: "NumPy", category: "Data Science", icon: Radical },
    { name: "Bubble.io", category: "No-Code", icon: Zap },
    { name: "Rapid API", category: "API", icon: Globe },
    { name: "VS Code", category: "Tools", icon: Airplay },
    { name: "Jupyter Notebook", category: "Tools", icon: FileText },
    { name: "Google Colab", category: "Tools", icon: Monitor },
    { name: "Git", category: "Tools", icon: Github },
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

  const category3DColors = {
    "Programming": "#3b82f6",
    "Database": "#10b981", 
    "Data Science": "#8b5cf6",
    "No-Code": "#f59e0b",
    "API": "#ef4444",
    "Tools": "#6366f1",
    "Visualization": "#ec4899"
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-400/10 rounded-full animate-float-slow" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
              Skills & Tools
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 animate-width-expand"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300">Technologies and expertise that power my projects</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Technical Skills */}
            <div className="lg:col-span-2 animate-slide-in-left">
              <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-6 text-center lg:text-left">
                Technical Stack
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {techStack.map((skill, index) => (
                  <Card key={skill.name} className="group hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 border-0 shadow-sm overflow-hidden dark:bg-gray-800 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up relative" style={{animationDelay: `${index * 0.1}s`}}>
                    <Floating3DIcon color={category3DColors[skill.category]} />
                    <CardContent className="p-4 text-center">
                      <div className="flex justify-center mb-3">
                        <div className={`w-12 h-12 bg-gradient-to-r ${categoryColors[skill.category]} rounded-lg flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                          <skill.icon className="h-6 w-6 text-white group-hover:animate-pulse" />
                        </div>
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{skill.name}</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">{skill.category}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="animate-slide-in-right">
              <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-6 text-center lg:text-left">
                Soft Skills
              </h3>
              <Card className="shadow-xl hover:shadow-2xl border-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 dark:bg-gray-800 transition-all duration-500 hover:scale-105 transform relative">
                <Floating3DIcon color="#8b5cf6" />
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {softSkills.map((skill, index) => (
                      <div key={skill} className="flex items-center group animate-fade-in-right" style={{animationDelay: `${index * 0.2}s`}}>
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 group-hover:scale-150 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-500"></div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-gray-900 dark:group-hover:text-white group-hover:translate-x-2 transition-all duration-500">
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
