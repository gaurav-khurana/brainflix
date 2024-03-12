import "./VideoList.scss";
import VideoElement from "../VideoElement/VideoElement";
import { allVideosContext } from "../../context/context";
import { useContext, useEffect } from "react";
import axios from "axios";

function VideoList(props) {
  const allVideos = useContext(allVideosContext);
  const baseUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com";
  const apiKey = "5f0fa1cf-41c3-48d9-9f18-aa53a8502f21";

  useEffect(() => {
    async function videoList() {
      const response = await axios.get(`${baseUrl}/videos?api_key=${apiKey}`);
      console.log(response);
      const getAllVideosData = response.data;
      console.log(getAllVideosData);
      props.setAllVideosData(getAllVideosData);
      return getAllVideosData;
    }

    videoList();
  }, []);

  return (
    <section className="nextvideos">
      <h2 className="nextvideos__heading">NEXT VIDEOS</h2>

      <ul className="nextvideos__list">
        {/* {allVideos */}
        {props.allVideosData
          .filter((video) => video.id !== props.defaultVideo.id)
          .map((video) => (
            <VideoElement
              key={video.id}
              video={video}
              handleVideoItem={props.handleVideoItem}
            />
          ))}
      </ul>
    </section>
  );
}

export default VideoList;
