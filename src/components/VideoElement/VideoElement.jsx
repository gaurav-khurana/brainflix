import "./VideoElement.scss";
// import videoContext from "../../context/context";
// import { useContext } from "react";

function VideoElement(props) {
  // const video = useContext(videoContext);

  // state func to set selected video
  function setSelectedVideo(selectedVideo) {
    return selectedVideo === props.video;
    // return props.defaultVideo.id === foundVideo;
  }

  return (
    <li
      className="nextvideos__individual"
      onClick={() => setSelectedVideo(props.handleVideoItem(props.video.id))}
      // onClick={() => props.handleVideoItem(props.video.id)}
    >
      <img
        className="nextvideos__image"
        src={props.video.image}
        alt={props.video.title}
      />
      <div className="nextvideos__details-container">
        <h3 className="nextvideos__title">{props.video.title}</h3>
        <p className="nextvideos__channel">{props.video.channel}</p>
      </div>
    </li>
  );
}

export default VideoElement;
