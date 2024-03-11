import "./HeroVideoSocial.scss";
import SeenIcon from "../../assets/icons/views.svg";
import LikeIcon from "../../assets/icons/likes.svg";

function HeroVideoSocial(props) {
  return (
    <div className="hero-video__social-container">
      <figure className="hero-video__social">
        <img
          className="hero-video__seen"
          src={SeenIcon}
          alt="Video seen icon"
        />
        <p className="hero-video__seen-counter">{props.defaultVideo.views}</p>
      </figure>

      <figure className="hero-video__social">
        <img
          className="hero-video__likes"
          src={LikeIcon}
          alt="Likes icon for the video"
        />
        <p className="hero-video__likes-counter">{props.defaultVideo.likes}</p>
      </figure>
    </div>
  );
}
export default HeroVideoSocial;
