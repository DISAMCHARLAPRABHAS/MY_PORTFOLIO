
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Lightbulb, BarChart3, Quote } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Electronics & Communication Engineering",
      description: "Strong foundation in technology and engineering principles"
    },
    {
      icon: Lightbulb,
      title: "Founder of Synapse Hub",
      description: "Building the next-gen AI commerce platform"
    },
    {
      icon: BarChart3,
      title: "Data Science | AI | Product Strategy",
      description: "Transforming data into actionable business insights"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate about leveraging technology to solve real-world problems and create meaningful impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Content */}
            <div className="space-y-6">
              <div className="prose prose-lg">
                <p className="text-gray-700 leading-relaxed text-lg">
                  I'm an ambitious entrepreneur and tech enthusiast with a passion for building innovative solutions. 
                  Currently pursuing Electronics & Communication Engineering while simultaneously building my startup, 
                  Synapse Hub - an AI-powered commerce platform.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  My journey spans from data science and machine learning to product development and startup strategy. 
                  I believe in the power of technology to transform businesses and improve lives.
                </p>
              </div>

              {/* Fun Fact Quote */}
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-lg">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-blue-600 mb-4" />
                  <blockquote className="text-xl font-medium text-gray-800 italic">
                    "Building the future, one innovative idea at a time."
                  </blockquote>
                </CardContent>
              </Card>
            </div>

            {/* Highlights */}
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <Card key={item.title} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading font-bold text-gray-900 text-lg mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
