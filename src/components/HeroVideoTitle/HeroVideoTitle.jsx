import "./HeroVideoTitle.scss";

function HeroVideoTitle(props) {
  return (
    <div className="hero-video__title-container">
      <h1 className="hero-video__title">{props.selectedVideo.title}</h1>
    </div>
  );
}

export default HeroVideoTitle;
