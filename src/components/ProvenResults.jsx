import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const CountUpAnimation = ({ end, duration = 2000, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime;
      let animationId;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          animationId = requestAnimationFrame(animate);
        }
      };

      animationId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationId);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
};

const ProvenResults = () => {
  const stats = [
    {
      number: 10,
      suffix: '+%',
      label: 'Increase in Cash Flow',
      description: 'Average improvement in cash flow'
    },
    {
      number: 95,
      suffix: '+%',
      label: 'Net Collection Rate',
      description: 'Optimal collection performance'
    },
    {
      number: 37,
      prefix: '< ',
      label: 'Days in A/R',
      description: 'Reduced accounts receivable'
    },
    {
      number: 24,
      label: 'Hour Claim Turnaround',
      description: 'Fast claim processing time'
    }
  ];

  return (
    <section className="py-20 bg-primary-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/50 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            RCM Results That
            <span className="text-accent-green"> Maximize Revenue</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your healthcare revenue cycle with proven results from our comprehensive RCM services and technology-driven approach.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-primary-700 to-primary-900 rounded-2xl p-8 h-full border border-primary-600 hover:border-accent-green/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-5xl sm:text-6xl font-bold text-accent-green mb-4">
                  <CountUpAnimation end={stat.number} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {stat.description}
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
          <div className="bg-gradient-to-r from-accent-green/10 to-blue-500/10 rounded-2xl p-8 border border-accent-green/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Optimize Your RCM?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let our RCM experts help you reduce denials, accelerate collections, and maximize your healthcare organization's revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent-green hover:bg-accent-green-light text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Get RCM Assessment
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-primary-900 px-8 py-3 rounded-full font-semibold transition-all duration-300">
                Schedule RCM Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProvenResults;