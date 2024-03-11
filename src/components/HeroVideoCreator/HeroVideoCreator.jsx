import { timestampToLocaleDateString } from "../../utils/utils";
import "./HeroVideoCreator.scss";

function HeroVideoCreator(props) {
  return (
    <div className="hero-video__creator-container">
      <h3 className="hero-video__name">By {props.defaultVideo.channel}</h3>

      <p className="hero-video__date">
        {timestampToLocaleDateString(props.defaultVideo.timestamp)}
      </p>
    </div>
  );
}
export default HeroVideoCreator;
