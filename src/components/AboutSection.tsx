
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I'm a passionate AI builder and startup founder with a strong background in Electronics & Communication Engineering. 
                Currently building innovative solutions that bridge the gap between technology and real-world problems.
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                As the founder of Synapse Hub, I'm revolutionizing commerce with AI-powered platforms that deliver 
                from Kashmir to Kanyakumari. My expertise spans data science, product strategy, and turning ideas into reality.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-heading font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-3">💭</span>
                  Philosophy
                </h3>
                <p className="text-gray-700 italic">
                  "Building the future, one idea at a time."
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-gray-100">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">🎓</span>
                  <div>
                    <h3 className="font-heading font-semibold text-gray-900">Education</h3>
                    <p className="text-gray-600">Electronics & Communication Engineering</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl border border-gray-100">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">💡</span>
                  <div>
                    <h3 className="font-heading font-semibold text-gray-900">Founder</h3>
                    <p className="text-gray-600">Synapse Hub - AI Commerce Platform</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-gray-100">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">📊</span>
                  <div>
                    <h3 className="font-heading font-semibold text-gray-900">Expertise</h3>
                    <p className="text-gray-600">Data Science | AI | Product Strategy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
