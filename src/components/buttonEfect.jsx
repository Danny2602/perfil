import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Icon = ({ icon,className }) => { return (
    <div className={`${className}`}>{icon}</div>
); };

const ButtonEfect = ({ text,icon, className, onClick, href }) => {
  return (
    <motion.button
      className={`bg-white text-black flex rounded-2xl cursor-pointer text-center content-center items-center justify-center space-x-3 p-3 w-40 shadow-md ${className}`}
      initial={{ scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      href={href}
      whileHover={{
        rotateZ: -3, // inclinación hacia la izquierda
        y: -4, // se levanta un poco
        transition: { type: "spring", stiffness: 150, damping: 10 },
      }}
      whileTap={{
        scale: 0.95,
        boxShadow: "2px 3px 0px rgba(0,0,0,0.3)",
      }}
    >
      <Icon icon={icon} className={` ${className}`} />
      <span className="relative font-semibold text-black">{text}</span>
    </motion.button>
  );
};

export { ButtonEfect };