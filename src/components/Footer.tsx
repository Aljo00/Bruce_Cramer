import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const footerLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Method', href: '#method' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const contactInfo = [
    { icon: Phone, text: '+1-262-945-5057', href: 'tel:+1-262-945-5057' },
    { icon: Mail, text: 'bcramer@focalpointcoaching.com', href: 'mailto:bcramer@focalpointcoaching.com' },
    { icon: MapPin, text: 'Wisconsin, USA', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold gradient-text mb-4">Bruce Cramer</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Transformational business coach helping leaders scale their businesses profitably while achieving work-life balance.
              </p>
              <div className="flex space-x-4">
                <a
                  href="http://www.linkedin.com/in/bruce-j-cramer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-3">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        <IconComponent size={16} />
                        <span className="text-sm">{item.text}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 sm:mb-0">
              © 2025 Bruce Cramer. All Rights Reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}