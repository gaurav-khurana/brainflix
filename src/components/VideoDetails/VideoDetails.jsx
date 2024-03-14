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

  const [selectedVideo, setSelectedVideo] = useState(null); // change null to the default video

  useEffect(() => {
    async function getVideoDetails() {
      if (selectedVideo === null) {
        const response = await axios.get(`${baseUrl}/videos?api_key=${apiKey}`);
        const allVideos = response.data;
        const defaultVideoId = allVideos[0].id;

        const defaultVideoResponse = await axios.get(
          `${baseUrl}/videos/${defaultVideoId}?api_key=${apiKey}`
        );
        const videoDetails = defaultVideoResponse.data;
        setSelectedVideo(videoDetails);
      }

      if (videoId) {
        const response = await axios.get(
          `${baseUrl}/videos/${videoId}?api_key=${apiKey}`
        );

        const videoDetails = response.data;

        setSelectedVideo(videoDetails);
      }
    }
    getVideoDetails();
  }, [videoId]);

  return (
    selectedVideo && (
      <div>
        <Hero
          selectedVideo={selectedVideo}
          setSelectedVideo={setSelectedVideo}
        />
        {/* <div className="main--mobile main--desktop"> */}

        <VideoSection selectedVideo={selectedVideo} />
        {/* </div> */}
      </div>
    )
  );
}

export default VideoDetails;
