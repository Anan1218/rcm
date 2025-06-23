import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Martinez',
      title: 'CFO',
      practice: 'Regional Medical Center',
      content: 'Our RCM partner transformed our multi-specialty billing operations. We reduced days in A/R from 140 to 65 days across all service lines, and our first-pass clean claim rate improved to 96%. The impact on cash flow has been remarkable.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Michael Thompson',
      title: 'Administrator',
      practice: 'Orthopedic Specialists Group',
      content: 'The prior authorization and eligibility verification services have eliminated surprise denials across our surgical cases. Our providers can focus on patient care while the RCM team handles the complex billing requirements. Revenue increased 35% in year one.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      title: 'Medical Director',
      practice: 'Cardiology Associates',
      content: 'Working with this RCM team has been transformative for our cardiology practice. They identified significant revenue opportunities in our procedure coding and payer contracts. Our collections improved by 40% while reducing our administrative burden.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1594824947018-514fe02e1def?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 4,
      name: 'James Wilson',
      title: 'Practice Manager',
      practice: 'Family Medicine Network',
      content: 'The automated payment posting and denial management has revolutionized our multi-location primary care operations. We now have real-time visibility into our revenue cycle performance across 12 locations with detailed analytics and reporting.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            RCM Success
            <span className="text-accent-green"> Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how healthcare organizations across all specialties are transforming their revenue cycle with our comprehensive RCM solutions.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary-700/50 to-primary-800/50 rounded-3xl p-8 lg:p-12 border border-primary-600 backdrop-blur-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <FaQuoteLeft className="text-4xl text-accent-green mx-auto mb-6" />
                
                <blockquote className="text-xl lg:text-2xl text-white leading-relaxed mb-8 font-light">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                
                <div className="flex justify-center items-center mb-6">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xl mx-1" />
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-accent-green">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="text-xl font-semibold text-white mb-1">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-accent-green font-medium">
                      {testimonials[currentIndex].title}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {testimonials[currentIndex].practice}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <FaChevronLeft className="text-xl" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <FaChevronRight className="text-xl" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-accent-green' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-accent-green/20 to-blue-500/20 rounded-2xl p-8 border border-accent-green/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready for Your RCM Success Story?
            </h3>
            <p className="text-gray-300 mb-6">
              Join hundreds of healthcare organizations maximizing revenue with our proven RCM solutions.
            </p>
            <button className="bg-accent-green hover:bg-accent-green-light text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Start Your RCM Journey
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;