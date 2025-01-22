import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const benefits = [
  'Access to workshops and technical sessions',
  'Networking opportunities with professionals',
  'Hands-on experience with real-world projects',
  'Mentorship from senior members',
  'Priority access to club events and hackathons'
];

const Inscriptions = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Join TEKNE Club
        </h1>
        <p className="text-xl text-gray-600">
          Become part of us
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-8 mb-8"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Member Benefits</h2>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-primary-blue" />
                <span className="text-gray-700">{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <p className="text-gray-600 mb-6">
            Ready to join? Fill out our membership form to get started!
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScqkWdEnyfj3XgVH4FM8j1NQHDWtLfAgEgItaw9uiFMKiEuEg/viewform?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Register Now
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Inscriptions;