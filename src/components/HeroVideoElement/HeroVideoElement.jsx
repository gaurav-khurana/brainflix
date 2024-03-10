import "./HeroVideoElement.scss";
// import { useContext } from "react";
// import { videoContext } from "../../context/context";

function HeroVideoElement(props) {
  console.log(props);
  // console.log(props.defaultVideo.image);
  // console.log(props.defaultVideo.video);
  // const video = useContext(videoContext);
  return (
    <video
      className="hero__video"
      controls
      poster={props.defaultVideo.image}
      src={props.defaultVideo.video}
      // width="250"
      // height="250"
    ></video>
  );
}

export default HeroVideoElement;
