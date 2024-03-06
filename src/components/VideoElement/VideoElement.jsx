import "./VideoElement.scss";

function VideoElement(props) {
  return (
    <li className="nextvideos-individual">
      <img
        className="nextvideos-image"
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
