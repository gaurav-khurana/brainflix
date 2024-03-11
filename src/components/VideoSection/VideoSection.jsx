import "./VideoSection.scss";
import HeroVideoSection from "../HeroVideoSection/HeroVideoSection";
import VideoCommentsSection from "../VideoCommentsSection/VideoCommentsSection";

function VideoSection(props) {
  return (
    <section className="video">
      <HeroVideoSection {...props} />

      <VideoCommentsSection {...props} />
    </section>
  );
}

export default VideoSection;
