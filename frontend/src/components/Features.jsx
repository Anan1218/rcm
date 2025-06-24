import { motion } from 'framer-motion';
import { 
  FaFileInvoiceDollar, 
  FaCreditCard, 
  FaChartLine, 
  FaClipboardCheck, 
  FaUserMd, 
  FaShieldAlt,
  FaPhoneAlt,
  FaCogs,
  FaCalendarCheck,
  FaHeadset,
  FaSearch,
  FaMoneyBillWave
} from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: FaClipboardCheck,
      title: 'Eligibility & Benefits Verification',
      description: 'Real-time verification of patient insurance coverage and benefits before appointments across all healthcare specialties.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaFileInvoiceDollar,
      title: 'Medical Claims Processing',
      description: 'Comprehensive claims submission for all healthcare verticals with advanced scrubbing technology to minimize rejections.',
      gradient: 'from-accent-green to-emerald-500'
    },
    {
      icon: FaSearch,
      title: 'Denial Management & Appeals',
      description: 'Proactive follow-ups and appeals management to track claim status, resolve denials, and maximize reimbursements.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: FaMoneyBillWave,
      title: 'Payment Posting & Collections',
      description: 'Systematic posting of insurance and patient payments with automated ERA processing and patient collection services.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: FaUserMd,
      title: 'Multi-Specialty Billing',
      description: 'Expert billing services for all healthcare specialties including primary care, specialty practices, and ancillary services.',
      gradient: 'from-teal-500 to-blue-500'
    },
    {
      icon: FaChartLine,
      title: 'Revenue Cycle Analytics',
      description: 'Comprehensive reporting on KPIs, A/R aging, denial trends, and collection rates across all service lines.',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: FaCalendarCheck,
      title: 'Prior Authorization',
      description: 'Streamlined prior authorization and referral management for all healthcare services to reduce claim delays.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: FaShieldAlt,
      title: 'Compliance & Security',
      description: 'HIPAA-compliant RCM processes with enterprise-grade security, audit trails, and regulatory compliance.',
      gradient: 'from-violet-500 to-purple-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Complete Revenue Cycle Services
            <span className="text-accent-green"> End-to-End Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From eligibility verification to payment posting, our comprehensive services optimize every aspect of your healthcare revenue cycle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 h-full border border-gray-200 hover:border-accent-green/50 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="text-white text-2xl" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-accent-green/10 to-blue-500/10 rounded-3xl p-8 lg:p-12 border border-accent-green/20">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Optimize Your Revenue Cycle?
            </h3>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-lg">
              Partner with our revenue cycle experts to maximize collections, reduce denials, and improve your healthcare organization's profitability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent-green hover:bg-accent-green-light text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Quote
              </button>
              <button className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;