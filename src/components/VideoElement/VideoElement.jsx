import { Link } from "react-router-dom";
import "./VideoElement.scss";

function VideoElement(props) {
  return (
    <>
      <Link to={`/videos/${props.video.id}`}>
        <li className="nextvideos__individual">
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
      </Link>
    </>
  );
}

export default VideoElement;
