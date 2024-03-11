import "./VideoList.scss";
import VideoElement from "../VideoElement/VideoElement";
import { allVideosContext } from "../../context/context";
import { useContext } from "react";

function VideoList(props) {
  const allVideos = useContext(allVideosContext);

  return (
    <section className="nextvideos">
      <h2 className="nextvideos__heading">NEXT VIDEOS</h2>

      <ul className="nextvideos__list">
        {allVideos
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
