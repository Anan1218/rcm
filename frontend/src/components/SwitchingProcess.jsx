import { motion } from 'framer-motion';
import { FaDatabase, FaGraduationCap, FaHandshake, FaLifeRing } from 'react-icons/fa';

const SwitchingProcess = () => {
  const steps = [
    {
      icon: FaDatabase,
      title: 'SEAMLESS MIGRATION',
      heading: 'Complete data protection during transition',
      description: 'Our experienced team handles the migration from your existing billing system with zero data loss. We ensure all patient records, billing history, and claims data transfer securely.'
    },
    {
      icon: FaGraduationCap,
      title: 'PERSONALIZED TRAINING',
      heading: 'Comprehensive staff training program',
      description: 'We provide tailored training sessions for your entire team, scheduled around your operations. Everyone gets hands-on experience before going live.'
    },
    {
      icon: FaHandshake,
      title: 'LAUNCH ASSISTANCE',
      heading: '90-days of dedicated implementation support',
      description: 'Our implementation specialists work closely with your team to ensure smooth operations, optimal workflows, and maximum revenue capture from day one.'
    },
    {
      icon: FaLifeRing,
      title: 'ONGOING SUCCESS',
      heading: 'Unlimited support and performance monitoring',
      description: 'Your dedicated Account Manager provides continuous support, monthly performance reviews, and strategic guidance to maximize your practice revenue.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Switching to <span className="text-accent-green">CareRevenue</span> is Easy
          </h2>
        </motion.div>

        <div className="relative">
          {/* Progress Line - Desktop */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gray-200">
            <motion.div
              className="h-full bg-accent-green"
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 2, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step Number Circle */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                      <span className="text-2xl font-bold text-white">{index + 1}</span>
                    </div>
                  </div>
                </div>

                {/* Step Content */}
                <div className="text-center">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    {step.title}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-tight">
                    {step.heading}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Mobile Progress Line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8">
                    <motion.div
                      className="w-0.5 h-12 bg-accent-green"
                      initial={{ height: 0 }}
                      whileInView={{ height: '3rem' }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-16"
        >
          <button className="bg-accent-green hover:bg-accent-green-light text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Book Free Demo
          </button>
          <button className="border-2 border-gray-300 text-gray-700 hover:border-accent-green hover:text-accent-green px-8 py-3 rounded-lg font-semibold transition-all duration-300">
            More About Onboarding
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SwitchingProcess;