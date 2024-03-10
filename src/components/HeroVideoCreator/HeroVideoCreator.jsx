import { timestampToLocaleDateString } from "../../utils/utils";
import "./HeroVideoCreator.scss";

function HeroVideoCreator(props) {
  console.log(props);
  console.log(props.defaultVideo.timestamp);

  // func to convert timestamp to date
  // function timestampToLocaleDateString(timestamp) {
  //   const date = new Date(timestamp);
  //   return date.toLocaleDateString();
  // }

  return (
    <div className="hero-video__creator-container">
      <h3 className="hero-video__name">
        By {props.defaultVideo.channel}
        {/* By Aiden Thompson */}
      </h3>

      <p className="hero-video__date">
        {timestampToLocaleDateString(props.defaultVideo.timestamp)}
        {/* 8/8/2023 */}
      </p>
    </div>
  );
}
export default HeroVideoCreator;
