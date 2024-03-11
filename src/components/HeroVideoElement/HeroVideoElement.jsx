import "./HeroVideoElement.scss";

function HeroVideoElement(props) {
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
