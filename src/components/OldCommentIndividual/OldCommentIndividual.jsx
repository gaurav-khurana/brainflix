import "./OldCommentIndividual.scss";
import { dynamicTimestamp } from "../../utils/utils";

function OldCommentIndividual(props) {
  return (
    <article className="oldcomments-individual">
      <figure className="oldcomments__image-container">
        <img className="oldcomments__image" alt="" />
      </figure>

      <div className="oldcomments__details-container">
        <div className="oldcomments__details">
          <h3 className="oldcomments__name">{props.comment.name}</h3>

          <p className="oldcomments__date">
            {dynamicTimestamp(props.comment.timestamp)}
          </p>
        </div>

        <p className="oldcomments__text">{props.comment.comment}</p>
      </div>
    </article>
  );
}

export default OldCommentIndividual;
