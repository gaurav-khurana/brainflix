function HeroVideoDescription(props) {
  console.log(props);

  return (
    <div className="hero-video__description-container">
      <p className="hero-video__description">
        {props.defaultVideo.description}
        {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, veniam
        architecto deleniti est cupiditate neque eos. A, at. Libero nisi magni
        sequi, ratione esse deleniti. */}
      </p>

      <h3 className="video-comments__counter">
        {props.defaultVideo.comments.length} Comments
      </h3>
    </div>
  );
}

export default HeroVideoDescription;
