export default function ContactSection() {

  const downloadCV = () => {
    // Create a link to download the CV
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Muhammad_Sohaib_Jameel_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-20 bg-slate-800/50 section">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Ready to bring your mobile app ideas to life? Let's discuss your project and create something amazing together.</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-envelope text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-400">Email</h4>
                  <p className="text-slate-300">sohaibjameel3@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-phone text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-400">Phone</h4>
                  <p className="text-slate-300">+92 3115244602</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <i className="fab fa-whatsapp text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-green-400">WhatsApp</h4>
                  <p className="text-slate-300">+92 3485149386</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-cyan-400">Location</h4>
                  <p className="text-slate-300">Islamabad, Punjab, Pakistan</p>
                </div>
              </div>
              
              <div className="glass-effect p-6 rounded-xl">
                <button
                  onClick={downloadCV}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-4 rounded-lg font-semibold hover:scale-105 transition-transform"
                >
                  <i className="fas fa-download"></i>
                  <span>Download CV</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-8 text-blue-400">Connect With Me</h3>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://linkedin.com/in/sohaibjameel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors hover:scale-110 transform"
              >
                <i className="fab fa-linkedin text-white text-xl"></i>
              </a>
              <a 
                href="https://github.com/sohaibjameelkhan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors hover:scale-110 transform"
              >
                <i className="fab fa-github text-white text-xl"></i>
              </a>
              <a 
                href="https://wa.me/923485149386" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors hover:scale-110 transform"
              >
                <i className="fab fa-whatsapp text-white text-xl"></i>
              </a>
              <a 
                href="https://www.fiverr.com/sohaibjameel176" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors hover:scale-110 transform"
              >
                <img 
                  src="/fiverr-icon.png" 
                  alt="Fiverr" 
                  className="w-8 h-8" 
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
