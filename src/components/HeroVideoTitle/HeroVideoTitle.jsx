import "./HeroVideoTitle.scss";

function HeroVideoTitle(props) {
  console.log(props);
  return (
    <div className="hero-video__title-container">
      <h1 className="hero-video__title">
        {props.defaultVideo.title}
        {/* The Future of Artificial Intelligence */}
      </h1>
    </div>
  );
}

export default HeroVideoTitle;
