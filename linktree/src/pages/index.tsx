import { useState, useEffect } from "react";
import { FaYoutube, FaTiktok, FaTwitter, FaArrowRight } from "react-icons/fa";
import Wallpapers from "@/data";


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
  };

  return (
    <>
      <header className="bg-slate-950/30 fixed text-black z-10 w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl text-outline" style={{ fontFamily: "Manga" }}>
          GivenSomethingWebs
        </h1>
        <span
          className="text-sm text-outline"
          style={{ fontFamily: "MangaSpeak" }}
        >
          link.tree
        </span>
      </header>

      <img
        className="filter grayscale border-[2px] rounded-full fixed z-10 top-[20%] left-[35%] w-24 h-24"
        src="https://yt3.ggpht.com/F6zDkdXLSWnnEIyEgCUJ3Pu3DGpLOf-OCnMaqqY2awhyxli8nC35hdvQ-zlpTqvzBOTBlsFAUA=s176-c-k-c0x00ffffff-no-rj-mo"
      />
      <a
        className="z-10 fixed top-[35%] text-black text-outline text-xl flex space-x-2 right-0"
        style={{ fontFamily: "MangaSpeak" }}
        href="https://givensomethingwebs.vercel.app"
      >
        <FaArrowRight /> Official Website
      </a>
      <span
        className="fixed top-[50%] text-black text-xl text-outline z-10"
        style={{ fontFamily: "MangaSpeak" }}
      >
        Follow My Socials
      </span>
      <div
        className="z-10 fixed bottom-[20%] right-0 p-1 space-y-4"
        style={{ fontFamily: "MangaSpeak" }}
      >
        <a
          className="flex text-xl text-black text-outline "
          href="https://www.youtube.com/@GivenSomething"
        >
          <FaYoutube size={40} />
          YouTube
        </a>
        <a
          className="flex text-xl text-black text-outline"
          href="tiktok.com/@givensomething"
        >
          <FaTiktok size={40} />
          TikTok
        </a>
        <a
          className="flex text-xl text-black text-outline"
          href="tiktok.com/@givensomething"
        >
          <FaTwitter size={40} />
          twitter
        </a>
      </div>
      <main
        className={`-z-10 blur-sm flex flex-col items-center justify-between p-24`}
        style={mainStyle}
      />
    </>
  );
}
