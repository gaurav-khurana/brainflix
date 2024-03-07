import Hero from "../Hero/Hero";
import VideoSection from "../VideoSection/VideoSection";
import VideoList from "../VideoList/VideoList";
import { useContext } from "react";
import { allVideosContext } from "../../context/context";

function Main() {
  const allVideos = useContext(allVideosContext);
  return (
    <main>
      {/* Hero section */}
      {/* <videoContext.Provider */}
      <Hero defaultVideo={allVideos[0]} />

      {/* video section - has hero-video details, new comment & old comments section */}
      <VideoSection defaultVideo={allVideos[0]} />

      {/* Video list Section */}
      <VideoList />
    </main>
  );
}

export default Main;
