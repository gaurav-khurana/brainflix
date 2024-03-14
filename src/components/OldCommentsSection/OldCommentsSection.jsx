import "./OldCommentsSection.scss";
import OldCommentIndividual from "../OldCommentIndividual/OldCommentIndividual";

function OldCommentsSection(props) {
  const commentsArr = props.selectedVideo.comments;

  return (
    <div className="oldcomments">
      {commentsArr.map((comment) => {
        return <OldCommentIndividual key={comment.id} comment={comment} />;
      })}
    </div>
  );
}

export default OldCommentsSection;
