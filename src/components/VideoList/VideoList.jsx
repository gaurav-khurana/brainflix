import "./VideoList.scss";
import VideoElement from "../VideoElement/VideoElement";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function VideoList(props) {
  const baseUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com";
  const apiKey = "5f0fa1cf-41c3-48d9-9f18-aa53a8502f21";

  // set state for all videos
  const [allVideos, setAllVideos] = useState([]);

  const { videoId } = useParams();

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
          // .filter((video) => video.id !== props.defaultVideo.id) //TODO FILTER FUNCT DOESNT WORK ON 1ST RENDER; WORKS AFTER 1 SELECTION
          .filter((video) => video.id !== videoId)
          .map((video) => (
            <VideoElement key={video.id} video={video} />
          ))}
      </ul>
    </section>
  );
}

export default VideoList;
