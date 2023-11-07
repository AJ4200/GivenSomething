import React, { useState, useEffect } from "react";


const More: React.FC = () => {
  const [showList, setShowList] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const channelId = "https://www.youtube.com/@GivenSomething"; // Replace with your channel ID
      const apiKey = "AIzaSyB_7vZ1QRlmfVxW5FU-ZsSsQkPaEtBtMSI"; // Replace with your API key
      const maxResults = 10; // Change to fetch more or less videos

      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=${maxResults}&key=${apiKey}`
      );
      const data = await response.json();

      setVideos(data.items);
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
    <div>
      {showList ? (
        <div>
          <ul>
            {videos.map((video:any) => (
              <li key={video.id.videoId}>{video.snippet.title}</li>
            ))}
          </ul>
          <button onClick={handleCloseClick}>Close</button>
        </div>
      ) : (
        <button onClick={handleMoreClick}>More</button>
      )}
    </div>
  );
};

export default More;
