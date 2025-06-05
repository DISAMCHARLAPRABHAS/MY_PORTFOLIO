
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award } from "lucide-react";

const CertificatesSection = () => {
  const certificates = [
    {
      title: "Python 101 for Data Science",
      issuer: "IBM SkillsBuild",
      link: "https://courses.yl-ptech.skillsnetwork.site/certificates/f88f049bbbc1425a91e6d576f8ca8376"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-green-900 dark:to-blue-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
              Certificates
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300">Professional certifications and achievements</p>
          </div>

          <div className="grid gap-8">
            {certificates.map((cert, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden dark:bg-gray-800">
                <div className="h-2 bg-gradient-to-r from-green-500 to-blue-600"></div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <Award className="h-8 w-8 text-green-600 mr-4" />
                      <div>
                        <CardTitle className="text-xl font-heading font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                          {cert.title}
                        </CardTitle>
                        <p className="text-gray-600 dark:text-gray-300 mt-1">
                          Issued by <span className="font-semibold text-blue-600 dark:text-blue-400">{cert.issuer}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <Button 
                    className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white transform group-hover:scale-105 transition-all duration-300"
                    onClick={() => window.open(cert.link, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Certificate
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
