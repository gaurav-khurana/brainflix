import "./HeroVideoElement.scss";
// import { useContext } from "react";
// import { videoContext } from "../../context/context";

function HeroVideoElement(props) {
  // const video = useContext(videoContext);

  return (
    <video
      className="hero__video"
      controls
      poster={props.defaultVideo.image}
      src={props.defaultVideo.video}
    ></video>
  );
}

export default HeroVideoElement;
