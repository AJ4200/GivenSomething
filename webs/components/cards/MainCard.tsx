import classnames from "classnames";
import React from "react";
import { FaArrowRight, FaYoutube } from "react-icons/fa";

const MainCard: React.FC = () => {
  return (
    <div
      className={classnames(
        "text-center border-[0.8rem] md:w-full -ml-12 -mr-12 md:m-0 md:min-w-[60%] md:h-3/5",
        "border-black"
      )}
      style={{
        transform: "skew(-20deg)",
      }}
    >
      <iframe
        width="100%"
        height="80%"
        src="https://www.youtube.com/embed/rcW3XbLvkD8"
      ></iframe>
      <span
        className={classnames(
          "p-2",
          "text-xs backdrop-blur-md w-full flex text-center"
        )}
      >
        The Downfall Of Mobile Games...
      </span>
      <span className="w-full flex bg-black p-2">
        Full video on YouTube{" "}
        <a className="text-white m-1">
          <FaArrowRight />
        </a>
        <a className="text-white m-1">
          <FaYoutube />
        </a>
      </span>
    </div>
  );
};

export default MainCard;
