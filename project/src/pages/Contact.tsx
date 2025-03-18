import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, MessageCircle, Mail, MessagesSquare , Tiktok } from 'lucide-react';

const socialLinks = [
  {
    icon: <Instagram className="w-6 h-6" />,
    name: 'Instagram',
    description: 'Follow us for event photos and updates',
    url: 'https://www.instagram.com/tekne__club/',
  },
  {
    icon: <Tiktok className="w-6 h-6" />,
    name: 'TikTok',
    description: 'Follow us on TikTok for short videos and updates',
    url: 'https://www.tiktok.com/@tekneclub11.9 ',  
  },
  
  {
    icon: <Facebook className="w-6 h-6" />,
    name: 'Facebook',
    description: 'Join our Facebook page',
    url: 'https://www.facebook.com/share/tpjEPwe3gsdu2aGF/?mibextid=qi2Omg',
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    name: 'Telegram',
    description: 'Join our Telegram group for discussions',
    url: 'https://t.me/+t6msRZf-gRtmYTc8',
  },
  {
    icon: <MessagesSquare className="w-6 h-6" />,
    name: 'Discord',
    description: 'Connect with members on Discord',
    url: 'https://discord.gg/sjMq4nSH',
  },
  {
    icon: <Mail className="w-6 h-6" />,
    name: 'Email',
    description: 'Reach out to us directly',
    url: 'https://mail.google.com/mail/?view=cm&fs=1&to=tekne.club@univ-bouira.dz&su=Inquiry&body=Hello TEKNE Club,', // Gmail URL
  },
];

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center text-gray-900 mb-12"
      >
        Get in Touch
      </motion.h1>

      <div className="max-w-3xl mx-auto">
        <div className="space-y-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank" // Open all links in a new tab
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="social-link block"
            >
              <div className="flex items-center">
                <div className="text-primary-blue">{link.icon}</div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{link.name}</h3>
                  <p className="text-gray-600">{link.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;