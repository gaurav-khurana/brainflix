import Hero from "../Hero/Hero";
import "./VideoDetails.scss";
import VideoSection from "../VideoSection/VideoSection";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function VideoDetails() {
  const { videoId } = useParams();

  // base url & api key for axios call
  // const baseUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com";
  // const apiKey = "5f0fa1cf-41c3-48d9-9f18-aa53a8502f21";

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
