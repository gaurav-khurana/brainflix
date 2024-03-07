import "./VideoElement.scss";
// import videoContext from "../../context/context";
// import { useContext } from "react";

function VideoElement(props) {
  // const video = useContext(videoContext);

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
