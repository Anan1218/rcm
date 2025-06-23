import { motion } from 'framer-motion';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';

const Footer = () => {
  const footerLinks = {
    'Services': [
      'Claims Processing',
      'Denial Management',
      'Payment Posting',
      'Prior Authorization'
    ],
    'Company': [
      'About',
      'Contact',
      'Careers',
      'Blog'
    ],
    'Support': [
      'Help Center',
      'Documentation',
      'System Status'
    ]
  };

  const socialLinks = [
    { icon: FaFacebookF, href: '#', name: 'Facebook' },
    { icon: FaTwitter, href: '#', name: 'Twitter' },
    { icon: FaLinkedinIn, href: '#', name: 'LinkedIn' },
    { icon: FaInstagram, href: '#', name: 'Instagram' },
    { icon: FaYoutube, href: '#', name: 'YouTube' }
  ];

  return (
    <footer className="bg-primary-900 border-t border-primary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="text-3xl font-bold text-white mb-4">
                CareRevenue
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Expert revenue cycle management solutions for healthcare organizations.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-400">
                  <FaPhone className="mr-3 text-accent-green" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <FaEnvelope className="mr-3 text-accent-green" />
                  <span>rcm@carerevenue.com</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <FaMapMarkerAlt className="mr-3 text-accent-green" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gradient-to-r from-accent-green to-accent-green-light rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="text-sm" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-white font-semibold mb-4 text-lg">
                      {category}
                    </h3>
                    <ul className="space-y-3">
                      {links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            href="#"
                            className="text-gray-400 hover:text-accent-green transition-colors duration-200 text-sm"
                          >
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-primary-700">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
              <div className="mb-4 md:mb-0">
                <p>&copy; 2024 CareRevenue. All rights reserved.</p>
              </div>
              <div className="flex flex-wrap gap-6">
                <a href="#" className="hover:text-accent-green transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-accent-green transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-accent-green transition-colors duration-200">
                  Security
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;