
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Synapse Hub",
      description: "All-in-one AI commerce & booking platform",
      details: [
        "Fast delivery from Kashmir to Kanyakumari",
        "Group buying, livestream shopping",
        "AI-powered recommendations"
      ],
      liveDemo: "https://synapse-hub-central9898-rn5s.vercel.app/",
      status: "Live",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Smart Basket",
      description: "IoT + AI Project using Edge Impulse & Raspberry Pi",
      details: [
        "Real-time weight detection",
        "Product logging and tracking",
        "AI-powered inventory management"
      ],
      status: "Completed",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "IPL Data Visualization",
      description: "EPL rolling stats dataset project using Pandas & Matplotlib",
      details: [
        "Interactive data visualizations",
        "Statistical analysis of player performance",
        "Trend analysis and predictions"
      ],
      status: "Completed",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">Innovative solutions I've built</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl font-heading font-bold text-gray-900">
                      {project.title}
                    </CardTitle>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Live' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <CardDescription className="text-gray-600 text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {project.details.map((detail, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <span className="text-blue-500 mr-2 mt-1">→</span>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {project.liveDemo && (
                    <Button 
                      className={`w-full bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white font-medium transition-all duration-300`}
                      onClick={() => window.open(project.liveDemo, '_blank')}
                    >
                      🔗 Live Demo
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
