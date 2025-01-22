import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Welcome to TEKNE Club
        </h1> 
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="prose lg:prose-xl mx-auto text-gray-700"
      >
        <p className="text-center max-w-2xl mx-auto mb-6"> 
        TEKNE is a scientific club based at Bouira University, focused on computer science and technology education. The club organizes various training sessions and workshops for students to enhance their skills in programming and design.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-12 text-center"
      >
        <a href="/inscriptions" className="btn-primary inline-block">
        Become part of us
        </a>
      </motion.div>
    </div>
  );
};

export default Home;