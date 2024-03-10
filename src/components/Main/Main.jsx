import "./Main.scss";
import Hero from "../Hero/Hero";
import VideoSection from "../VideoSection/VideoSection";
import VideoList from "../VideoList/VideoList";
import { useContext, useState } from "react";
import { allVideosContext } from "../../context/context";

function Main() {
  const allVideos = useContext(allVideosContext);
  const defaultVideo = allVideos[0];

  // state
  const [selectedVideo, setSelectedVideo] = useState(defaultVideo);

  //TODO-DO V NEED CLICK EVENT FOR HERO VIDEO ELE - if not dont pass func to hero & video sect

  // event handler for getting id for selected video & changing state of selected video

  const handleVideoItem = (videoId) => {
    // console.log(videoId);
    const foundVideo = allVideos.find((video) => video.id === videoId);
    // console.log(foundVideo);
    setSelectedVideo(foundVideo);
  };

  return (
    <main>
      {/* Hero section */}
      {/* <videoContext.Provider */}
      <Hero
        // key={selectedVideo.id}
        defaultVideo={selectedVideo}
        // handleVideoItem={handleVideoItem}
        setSelectedVideo={setSelectedVideo}
      />

      {/* video section - has hero-video details, new comment & old comments section */}
      <VideoSection
        // key={selectedVideo.id}
        defaultVideo={selectedVideo}
        // handleVideoItem={handleVideoItem}
        setSelectedVideo={setSelectedVideo}
      />

      {/* Video list Section */}
      <VideoList
        key={allVideos.id}
        defaultVideo={selectedVideo}
        handleVideoItem={handleVideoItem}
        setSelectedVideo={setSelectedVideo}
      />
    </main>
  );
}

export default Main;
