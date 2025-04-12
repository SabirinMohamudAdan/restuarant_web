import React from 'react';
import { motion } from 'framer-motion';
import event1 from "../image/event1.jpg";
import event2 from "../image/event2.jpg";
import event3 from "../image/event3.jpg";

const EventsSection = () => {
  const events = [
    {
      title: "Barbeque Party",
      date: "20 April 2025",
      time: "12:00 - 13:30",
      description: "Join us for our famous backyard BBQ with live grilling stations",
      image: event1,
      cta: "Reserve Your Spot"
    },
    {
      title: "Friday Jazz",
      date: "20 April 2025",
      time: "12:00 - 13:30",
      description: "Smooth jazz evenings with local musicians and craft cocktails",
      image: event2,
      cta: "Get Tickets"
    },
    {
      title: "Romantic Night",
      date: "20 April 2025",
      time: "12:00 - 13:30",
      description: "Special couples menu with candlelit ambiance and wine pairing",
      image: event3,
      cta: "Book Table"
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 uppercase tracking-wider mb-2">
            LATEST EVENTS
          </h1>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
            className="w-24 h-1 bg-amber-500 mx-auto mb-4"
          />
          <h2 className="text-xl md:text-2xl text-amber-600 italic">Come & Join</h2>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {/* Event Image */}
              <div className="h-48 overflow-hidden">
                <motion.img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                <div className="flex items-center text-gray-600 mb-3">
                  <svg className="w-5 h-5 mr-2 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <svg className="w-5 h-5 mr-2 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{event.time}</span>
                </div>
                <p className="text-gray-600 mb-6">{event.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-lg font-medium transition"
                >
                  {event.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsSection;