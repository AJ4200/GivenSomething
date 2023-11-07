import classnames from "classnames";
import React from "react";
import { motion } from "framer-motion";
import { FaShoppingBag, FaBullhorn, FaClock } from "react-icons/fa";

const AdSpace: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 ,transform:"skew(-20deg)"}}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={classnames(
        "text-center border-[0.8rem] w-auto h-3/5",
        "border-black bg-slate-50/50 p-4"
      )}
    >
      <p>
        <FaBullhorn size={30} /> Future
      </p>
      <p>
        <FaShoppingBag size={30} /> Merch
      </p>
      <p>
        <FaClock size={30} /> Store
      </p>
      <p className="text-sm">Stay Tuned</p>
    </motion.div>
  );
};

export default AdSpace;
