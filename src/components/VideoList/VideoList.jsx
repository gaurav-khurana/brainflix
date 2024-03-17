import "./VideoList.scss";
import VideoElement from "../VideoElement/VideoElement";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function VideoList() {
  const baseUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com";
  const apiKey = "5f0fa1cf-41c3-48d9-9f18-aa53a8502f21";

  const defaultVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";

  // set state for all videos
  const [allVideos, setAllVideos] = useState([]);

  let { videoId } = useParams();
  if (!videoId) {
    videoId = defaultVideoId;
  }

  useEffect(() => {
    async function videoList() {
      const response = await axios.get(`${baseUrl}/videos?api_key=${apiKey}`);

      const getAllVideosData = response.data;

      setAllVideos(getAllVideosData);
    }

    videoList();
  }, []);

  return (
    <section className="nextvideos">
      <h2 className="nextvideos__heading">NEXT VIDEOS</h2>

      <ul className="nextvideos__list">
        {allVideos
          .filter((video) => video.id !== videoId)
          .map((video) => (
            <VideoElement key={video.id} video={video} />
          ))}
      </ul>
    </section>
  );
}

export default VideoList;
