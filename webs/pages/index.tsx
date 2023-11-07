import { useState, useEffect } from "react";
import Wallpapers from "@/data";
import Homepage from "./Homepage";

export default function Home() {

const [backgroundImage, setBackgroundImage] = useState(getRandomWallpaper());

useEffect(() => {
  const intervalId = setInterval(() => {
    setBackgroundImage(getRandomWallpaper());
  }, 30000);
  return () => clearInterval(intervalId);
}, []);

function getRandomWallpaper() {
  const randomIndex = Math.floor(Math.random() * Wallpapers.length);
  return Wallpapers[randomIndex];
}

const mainStyle = {
  backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
        backgroundRepeat: "repeat",
  backgroundPosition: "center",
      
};

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
      style={mainStyle}
    >
<Homepage/>
    </main>
  );
}
