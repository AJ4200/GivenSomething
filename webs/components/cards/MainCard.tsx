import React from "react";
import { FaArrowRight, FaYoutube } from "react-icons/fa";


const MainCard: React.FC = () => {
  return (
    <div className="w-1/2 h-4/5">
      <label htmlFor="embed">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/your-video-id"
          title="Embedded YouTube Video"
          allowFullScreen
        ></iframe>
      </label>
      <span className="w-full">
        Full video on YouTube <FaArrowRight /> <FaYoutube />
      </span>
    </div>
  );
};

export default MainCard;