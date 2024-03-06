function HeroVideoElement(props) {
  return (
    <video className="hero__video" controls src={props.video.image}></video>
  );
}

export default HeroVideoElement;
