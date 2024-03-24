import Hero from "../Hero/Hero";
import "./VideoDetails.scss";
import VideoSection from "../VideoSection/VideoSection";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function VideoDetails() {
  const { videoId } = useParams();

  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const defaultVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";

    async function getVideoDetails(id) {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/videos/${id}`
      );

      const videoDetails = response.data;

      setSelectedVideo(videoDetails);
    }

    if (videoId) {
      getVideoDetails(videoId);
    } else {
      getVideoDetails(defaultVideoId);
    }
  }, [videoId]);

  return (
    selectedVideo && (
      <>
        <Hero
          selectedVideo={selectedVideo}
          setSelectedVideo={setSelectedVideo}
        />

        <VideoSection selectedVideo={selectedVideo} />
      </>
    )
  );
}

export default VideoDetails;
