import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const events = [
  {
    title: 'Web Development / Front-end workshop ',
    date: '2025-01-27', 
    description: 'Learn how to create a static website from scratch.',
  },
  
  {
    title: 'Web Development / Back-end workshop ',
    date: '2025-01-28', 
    description: 'Learn how to create a dynamic website from scratch.',
  },
  {
    title: 'Personal Branding',
    date: '2025-01-30', 
    description: 'Master the art of personal branding to define your unique professional identity.',
  },
  {
    title: 'Introduction to Machine Learning Workshop',
    date: '', 
    description: 'Learn the basics of machine learning with hands-on exercises.',
  },

  {
    title: 'Introduction to Artificial Intelligence workshop ',
    date: ' ', 
    description: 'Learn the basics of Artificial Intelligence with hands-on exercises.',
  },

  {
    title: 'Augmented Reality workshop ',
    date: ' ', 
    description: ' learn the basics of AR development, and hands-on projects to bring your ideas to life. ',
  } 
];

const Events = () => { 
  const isValidDate = (dateString: string) => {
    const date = new Date(dateString);
    return !isNaN(date.getTime());  
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center text-gray-900 mb-12"
      >
        Upcoming Events
      </motion.h1>

      <div className="space-y-6">
        {events.map((event, index) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card hover:shadow-lg"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Calendar className="w-6 h-6 text-primary-blue" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                <p className="text-primary-blue font-medium mt-1">
                  {event.date.trim() && isValidDate(event.date) ? ( 
                    new Date(event.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })
                  ) : ( 
                    'Date to be announced'
                  )}
                </p>
                <p className="text-gray-600 mt-2">{event.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Events;