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

  // event handler for getting id for selected video & changing state of selected video
  const handleVideoItem = (videoId) => {
    const foundVideo = allVideos.find((video) => video.id === videoId);
    setSelectedVideo(foundVideo);
  };

  return (
    <main className="main">
      <Hero defaultVideo={selectedVideo} setSelectedVideo={setSelectedVideo} />

      <div className="main--mobile main--desktop">
        <VideoSection
          defaultVideo={selectedVideo}
          setSelectedVideo={setSelectedVideo}
        />

        <VideoList
          key={allVideos.id}
          defaultVideo={selectedVideo}
          handleVideoItem={handleVideoItem}
          setSelectedVideo={setSelectedVideo}
        />
      </div>
    </main>
  );
}

export default Main;
