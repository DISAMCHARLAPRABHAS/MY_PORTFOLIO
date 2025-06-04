
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-heading font-bold mb-2">Prabhas Naidu</h3>
            <p className="text-gray-400">AI Builder & Startup Founder</p>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © {currentYear} Prabhas Naidu. All rights reserved.
              </p>
              <p className="text-gray-400">
                Made with <span className="text-red-500">❤️</span> by me
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
