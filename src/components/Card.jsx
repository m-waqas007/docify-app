import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react";

const Card = ({ data, reference }) => {
  return (
    <motion.div
      animate="{ opacity: 1 }"
      drag
      dragConstraints={reference}
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        transition: { duration: 1 },
      }}
      whileTap={{ scale: 0.9 }}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.2}
      className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden"
    >
      <FaRegFileAlt />

      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>

      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-8 py-3 mb-3">
          <h5> {data.fileSize} </h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center ">
            {/* conditional rendring  */}
            {data.close ? (
              <IoClose size=".7em" color="#fff" />
            ) : (
              <LuDownload size=".7em" color="#fff" />
            )}
          </span>
        </div>

        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle} </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;