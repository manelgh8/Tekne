import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Users, Rocket, BookOpen } from 'lucide-react';

const goals = [
  {
    icon: <Code2 className="w-8 h-8 text-primary-blue" />,
    title: 'Technical Excellence',
    description: 'Develop strong programming skills through hands-on projects and workshops.'
  },
  {
    icon: <Users className="w-8 h-8 text-primary-blue" />,
    title: 'Community Building',
    description: 'Foster a supportive environment for learning and collaboration among members.'
  },
  {
    icon: <Rocket className="w-8 h-8 text-primary-blue" />,
    title: 'Innovation',
    description: 'Encourage creative problem-solving and innovative thinking in technology.'
  },
  {
    icon: <BookOpen className="w-8 h-8 text-primary-blue" />,
    title: 'Knowledge Sharing',
    description: 'Facilitate the exchange of ideas and experiences among members.'
  }
];

const Goals = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center text-gray-900 mb-12"
      >
        Our Goals
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {goals.map((goal, index) => (
          <motion.div
            key={goal.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                {goal.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{goal.title}</h3>
                <p className="text-gray-600">{goal.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Goals;