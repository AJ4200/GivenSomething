import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import classnames from 'classnames';

const Footer: React.FC = () => {
  return (
    <footer
      className={classnames(
        'fixed w-[95%] bottom-0 text-center border-[0.8rem]',
        'border-black bg-slate-50/80 h-16'
      )}
      style={{
        transform: 'skew(-20deg)',
      }}
    >
      <div className="flex justify-center items-center h-full">
        <div className="mr-2">
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.5,opacity:0.5 }}
          >
            <FaGithub size={24} />
          </motion.a>
        </div>
        <div className="mr-2">
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.5,opacity:0.5 }}
          >
            <FaLinkedin size={24} />
          </motion.a>
        </div>
        <div>
          <p className="text-xs"> ©2023 GivenSomethingWebs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;