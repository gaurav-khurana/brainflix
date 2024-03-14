import "./HeroVideoElement.scss";

function HeroVideoElement(props) {
  return (
    <video
      className="hero__video"
      controls
      poster={props.selectedVideo.image}
      src={props.selectedVideo.video}
    ></video>
  );
}

export default HeroVideoElement;
