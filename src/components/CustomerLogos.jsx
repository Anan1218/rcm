import { motion } from 'framer-motion';

const CustomerLogos = () => {
  const customers = [
    { name: 'Aspen Dental', logo: 'AD' },
    { name: 'Heartland Dental', logo: 'HD' },
    { name: 'Pacific Dental Services', logo: 'PDS' },
    { name: 'Great Expressions', logo: 'GE' },
    { name: 'Smile Brands', logo: 'SB' },
    { name: 'Dental One Partners', logo: 'DOP' },
    { name: 'Coast Dental', logo: 'CD' },
    { name: 'MB2 Dental', logo: 'MB2' },
    { name: 'Lone Star Dental', logo: 'LSD' },
    { name: 'Sage Dental', logo: 'SD' },
    { name: 'Bright Now', logo: 'BN' },
    { name: 'Dental Dreams', logo: 'DD' }
  ];

  const duplicatedCustomers = [...customers, ...customers];

  return (
    <section className="py-16 bg-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-300 text-lg">
            Join the dental organizations that rely on CareStack for their success
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="flex space-x-8 animate-scroll">
            {duplicatedCustomers.map((customer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 group"
              >
                <div className="w-32 h-20 bg-gradient-to-br from-primary-700/50 to-primary-600/50 rounded-lg border border-primary-500 flex items-center justify-center hover:border-accent-green/50 transition-all duration-300 group-hover:scale-110">
                  <div className="text-white font-bold text-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    {customer.logo}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-primary-800 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-primary-800 to-transparent z-10"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-green mb-2">500+</div>
              <div className="text-gray-300">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-green mb-2">15K+</div>
              <div className="text-gray-300">Dental Locations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-green mb-2">98%</div>
              <div className="text-gray-300">Client Retention Rate</div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default CustomerLogos;