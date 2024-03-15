import Hero from "../Hero/Hero";
import "./VideoDetails.scss";
import VideoSection from "../VideoSection/VideoSection";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import {useParams} from "useParams"  doing it params way
// const id = useParams()   doing it the params way

function VideoDetails() {
  const { videoId } = useParams();

  // base url & api key for axios call
  const baseUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com";
  const apiKey = "5f0fa1cf-41c3-48d9-9f18-aa53a8502f21";

  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const defaultVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";
    // const defaultVideoId2 = defaultVideoId;

    async function getVideoDetails(id) {
      const response = await axios.get(
        `${baseUrl}/videos/${id}?api_key=${apiKey}`
      );

      const videoDetails = response.data;

      setSelectedVideo(videoDetails);
    }

    if (videoId) {
      getVideoDetails(videoId);
    } else {
      getVideoDetails(defaultVideoId);
      // getVideoDetails(defaultVideoId2);
    }
  }, [videoId]);

  return (
    selectedVideo && (
      <>
        {/* <div> */}
        <Hero
          selectedVideo={selectedVideo}
          setSelectedVideo={setSelectedVideo}
        />

        {/* <div className="main--mobile main--desktop"> */}
        <VideoSection selectedVideo={selectedVideo} />
        {/* </div> */}
        {/* </div> */}
      </>
    )
  );
}

export default VideoDetails;
