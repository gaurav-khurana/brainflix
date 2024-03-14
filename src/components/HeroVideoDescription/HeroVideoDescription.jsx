import "./HeroVideoDescription.scss";

function HeroVideoDescription(props) {
  return (
    <div className="hero-video__description-container">
      <p className="hero-video__description">
        {props.selectedVideo.description}
      </p>

      <h3 className="video-comments__counter">
        {props.selectedVideo.comments.length} Comments
      </h3>
    </div>
  );
}

export default HeroVideoDescription;
