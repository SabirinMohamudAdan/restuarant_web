import React from 'react';
import { motion } from 'framer-motion';

const StatsSection = () => {
  const stats = [
    { number: "8,330", label: "Home of Works" },
    { number: "248", label: "Products Complete" },
    { number: "852", label: "Size of Pros" },
    { number: "615", label: "Days of Coffee" }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <motion.p 
                className="text-4xl font-bold text-amber-500 mb-2"
                whileHover={{ scale: 1.1 }}
              >
                {stat.number}
              </motion.p>
              <p className="text-lg text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;