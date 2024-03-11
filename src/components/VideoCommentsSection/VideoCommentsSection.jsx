import "./VideoCommentsSection.scss";
import NewCommentSection from "../NewCommentSection/NewCommentSection";
import OldCommentsSection from "../OldCommentsSection/OldCommentsSection";

function VideoCommentsSection(props) {
  return (
    <section className="video-comments">
      <NewCommentSection />

      <OldCommentsSection {...props} />
    </section>
  );
}

export default VideoCommentsSection;
