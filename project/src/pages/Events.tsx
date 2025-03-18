import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const events = [

 
  
 

  {
    title: 'Introduction to Artificial Intelligence ',
    date: '',
    description: 'Learn the basics of Artificial Intelligence with hands-on exercises.',
    link: '', 
  },
  {
    title: 'Augmented Reality workshop',
    date: '' ,
    description: 'Learn the basics of AR development, and hands-on projects to bring your ideas to life.',
    link: '', 
  },
  {
    title: 'Web Development / Front-end workshop',
    date: '2025-01-27',
    description: 'Learn how to create a static website from scratch.',
    link: '', 
  },
  {
    title: 'Web Development / Back-end workshop',
    date: '2025-01-28',
    description: 'Learn how to create a dynamic website from scratch.',
    link: '',  
  } , 
  {
    title: 'C++ Workshop' ,
    date: '2025-01-30',
    description: 'Learn and Master Modern C++, take your skills to a new level',
    link:  '',  
  },
  {
    title: 'Personal Branding Workshop' ,
    date:  '2025-02-06',
    description: 'Master the art of personal branding to define your unique professional identity.',
    link: '',  
  }, 
  {
    title: 'Web full-stack' ,
    date:  '2025-02-27',
    description: 'Create a website from scratch with HTML,CSS,BOOTSTRAP,JS,PHP,MYSQL | for L3 students specifically',
    link: '',  
  }, 
  {
    title: '3D design introduction | Blender Workshop' ,
    date:  '2025-03-01',
    description: 'Dive into the world of 3D design with our exclu-sive Blender workshop! From basic modeling to bringing your ideas into vivid reality',
    link: '',  
  }, 
];

const Events = () => {
  const isValidDate = (dateString: string) => {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
  };

  const handleEventClick = (link: string) => {
    if (link) {
      window.open(link, '_blank'); 
    }
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
            className="card hover:shadow-lg cursor-pointer"  
            onClick={() => handleEventClick(event.link)} 
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