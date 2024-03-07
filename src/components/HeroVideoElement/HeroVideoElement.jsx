// import { useContext } from "react";
// import { videoContext } from "../../context/context";

function HeroVideoElement(props) {
  // console.log(props);
  // console.log(props.defaultVideo.image);
  // console.log(props.defaultVideo.video);
  // const video = useContext(videoContext);
  return (
    <img
      className="hero__video"
      src={props.defaultVideo.image}
      alt="default video"
    ></img>
  );
}

export default HeroVideoElement;
