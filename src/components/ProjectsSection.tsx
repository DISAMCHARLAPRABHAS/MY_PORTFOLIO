
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Synapse Hub",
      description: "All-in-one AI commerce & booking platform",
      features: [
        "Fast delivery for small towns and villages within 24 hrs",
        "Group buying & livestream shopping",
        "AI-powered recommendations",
        "Real-time order tracking"
      ],
      liveUrl: "https://synapse-hub-central9898-rn5s.vercel.app/",
      status: "Live",
      tech: ["AI", "Commerce", "Booking"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Smart Basket",
      description: "AI-powered smart shopping basket with IoT integration",
      features: [
        "Real-time weight detection",
        "Automatic product logging",
        "Edge Impulse integration",
        "Raspberry Pi powered"
      ],
      status: "completed",
      tech: ["IoT", "AI", "Edge Computing"],
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "IPL Data Visualization", 
      description: "Comprehensive cricket analytics dashboard",
      features: [
        "Interactive player statistics",
        "Team performance metrics",
        "Predictive match outcomes",
        "Dynamic visualizations"
      ],
      status: "Completed",
      tech: ["Python", "Pandas", "Matplotlib"],
      gradient: "from-orange-500 to-red-600",
      link: "https://github.com/DISAMCHARLAPRABHAS/IPL_Visualization.git"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300">Innovative solutions that showcase my technical expertise</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden transform hover:-translate-y-2 dark:bg-gray-800">
                {/* Project Header with Gradient */}
                <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Live' ? 'bg-green-500 text-white' :
                      project.status === 'In Development' ? 'bg-yellow-500 text-white' :
                      'bg-blue-500 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs text-white font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-heading font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                        <ArrowRight className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <Button 
                        size="sm"
                        className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white flex-1 transform group-hover:scale-105 transition-all duration-300`}
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    )}
                    
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 flex-1 group-hover:shadow-md transition-all duration-300 dark:bg-gray-700 dark:text-gray-300"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </div>
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
