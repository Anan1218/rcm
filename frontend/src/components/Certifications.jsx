import { motion } from 'framer-motion';
import { FaStar, FaShieldAlt, FaCertificate, FaAward } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      icon: FaShieldAlt,
      title: 'HIPAA Compliant',
      description: 'Fully compliant with HIPAA regulations',
      badge: 'Certified',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FaCertificate,
      title: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality',
      badge: 'Certified',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FaAward,
      title: 'ISO 27001',
      description: 'Information security management',
      badge: 'Certified',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FaCertificate,
      title: 'GDPR Ready',
      description: 'European data protection compliance',
      badge: 'Compliant',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const ratings = [
    {
      platform: 'G2',
      rating: 4.8,
      reviews: '2,500+',
      badge: "Leader's Choice"
    },
    {
      platform: 'Capterra',
      rating: 4.7,
      reviews: '1,800+',
      badge: 'Best Value'
    },
    {
      platform: 'Software Advice',
      rating: 4.9,
      reviews: '1,200+',
      badge: 'Top Performer'
    },
    {
      platform: 'TrustPilot',
      rating: 4.6,
      reviews: '800+',
      badge: 'Excellent'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Security & Recognition
            <span className="text-accent-green"> You Can Trust</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to security and excellence is recognized by industry leaders and customers worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center lg:text-left">
              Security Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-accent-green/50 transition-all duration-300 group shadow-lg hover:shadow-xl"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${cert.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <cert.icon className="text-white text-xl" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    {cert.description}
                  </p>
                  <span className="inline-block bg-accent-green/20 text-accent-green px-3 py-1 rounded-full text-xs font-medium">
                    {cert.badge}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center lg:text-left">
              Customer Reviews & Ratings
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {ratings.map((rating, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-accent-green/50 transition-all duration-300 text-center group shadow-lg hover:shadow-xl"
                >
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    {rating.platform}
                  </div>
                  <div className="flex justify-center items-center mb-2">
                    <span className="text-3xl font-bold text-accent-green mr-2">
                      {rating.rating}
                    </span>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-lg ${
                            i < Math.floor(rating.rating)
                              ? 'text-yellow-400'
                              : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    Based on {rating.reviews} reviews
                  </p>
                  <span className="inline-block bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium">
                    {rating.badge}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-accent-green/10 to-blue-500/10 rounded-3xl p-8 border border-accent-green/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join the Most Trusted Platform
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Experience enterprise-grade security and award-winning support with RevyHealth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent-green hover:bg-accent-green-light text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Get Started Securely
              </button>
              <button className="border border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-300">
                Learn About Security
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;