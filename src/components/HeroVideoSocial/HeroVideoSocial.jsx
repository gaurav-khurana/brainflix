import SeenIcon from "../../assets/icons/views.svg";
import LikeIcon from "../../assets/icons/likes.svg";

function HeroVideoSocial(props) {
  return (
    <div className="hero-video__social-container">
      <img className="hero-video__seen" src={SeenIcon} alt="Video seen icon" />
      <p className="hero-video__seen-counter">
        {props.defaultVideo.views}
        {/* 980,544 */}
      </p>

      <img
        className="hero-video__likes"
        src={LikeIcon}
        alt="Likes icon for the video"
      />
      <p className="hero-video__likes-counter">
        {props.defaultVideo.likes}
        {/* 22,479 */}
      </p>
    </div>
  );
}
export default HeroVideoSocial;
