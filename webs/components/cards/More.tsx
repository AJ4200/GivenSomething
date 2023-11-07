import classnames from "classnames";
import React, { useState, useEffect } from "react";
import { AiFillRightCircle, AiFillCloseCircle } from "react-icons/ai";
import axios from "axios";

const More: React.FC = () => {
  const [showList, setShowList] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const channelId = "https://www.youtube.com/@GivenSomething"; 
      const apiKey =
        process.env.GOOGLE_API_KEY; 
      const maxResults = 10;

      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=${maxResults}&key=${apiKey}`
        );
        setVideos(response.data.items);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVideos();
  }, []);

  const handleMoreClick = () => {
    setShowList(true);
  };

  const handleCloseClick = () => {
    setShowList(false);
  };

  return (
    <div
      className={classnames(
        "text-center border-[0.8rem] w-auto h-3/5",
        "border-black bg-slate-50/50"
      )}
      style={{
        transform: "skew(-20deg)",
      }}
    >
      {showList ? (
        <div>
          <ul>
            {videos &&
              videos.map((video: any) => (
                <li key={video.id.videoId}>{video.snippet.title}</li>
              ))}
          </ul>
          <button className="md:w-auto m-4 -ml-12 -mr-12 md:m-0 " onClick={handleCloseClick}>
            close
            <AiFillCloseCircle size={35} />
          </button>
        </div>
      ) : (
        <button className="md:w-auto m-4 -ml-12 -mr-12 md:m-0 " onClick={handleMoreClick}>
          more
          <AiFillRightCircle size={35} />
        </button>
      )}
    </div>
  );
};

export default More;