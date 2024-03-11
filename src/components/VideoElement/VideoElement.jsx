import "./VideoElement.scss";

function VideoElement(props) {
  // state func to set selected video
  function setSelectedVideo(selectedVideo) {
    return selectedVideo === props.video;
  }

  return (
    <li
      className="nextvideos__individual"
      onClick={() => setSelectedVideo(props.handleVideoItem(props.video.id))}
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
