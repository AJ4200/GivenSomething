import classnames from "classnames";
import { motion } from "framer-motion";
import { FaYoutube, FaTiktok, FaTwitter } from "react-icons/fa";
import React from "react";

const Socials: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50, transform: "skew(-20deg)" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={classnames(
        "text-center border-[0.8rem] w-auto h-3/5",
        "border-black bg-slate-50/50 p-4"
      )}
    >
      <motion.div whileHover={{ scale: 1.1 }} className="mb-4">
        <FaYoutube size={40} />
        @GivenSomething
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} className="mb-4">
        <FaTiktok size={40} />
        @GivenSomethingOnYT
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <FaTwitter size={40} />
        @GivenSomething
      </motion.div>
    </motion.div>
  );
};

export default Socials;
