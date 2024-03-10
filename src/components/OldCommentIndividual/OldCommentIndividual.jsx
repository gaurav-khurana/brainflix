// import OldCommentDetails from "../OldCommentDetails/OldCommentDetails";
import "./OldCommentIndividual.scss";
// import UserImage from "../../assets/images/Mohan-muruge.jpg";
import { timestampToLocaleDateString } from "../../utils/utils";

function OldCommentIndividual(props) {
  return (
    <article className="oldcomments-individual">
      <figure className="oldcomments__image-container">
        <img
          className="oldcomments__image"
          // src={UserImage}
          // src={UserImage}
          // src=""
          alt=""
        />
      </figure>
      {/* <OldCommentDetails {...props} /> */}
      {/* commentsArr.map((comment) => (
      <div>
        console.log(comment);
        <p>{comment.name}</p>
        <p>{timestampToLocaleDateString(comment.timestamp)}</p>
        <p>{comment.comment}</p>
      </div>
      )) */}

      <div className="oldcomments__details-container">
        <div className="oldcomments__details">
          <h3 className="oldcomments__name">
            {props.comment.name}
            {/* Noah Duncan */}
          </h3>

          <p className="oldcomments__date">
            {timestampToLocaleDateString(props.comment.timestamp)}
            {/* 8/11/2023 */}
          </p>
        </div>

        <p className="oldcomments__text">
          {props.comment.comment}
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            voluptate sed aliquam corporis ratione voluptatum dolores est atque
            blanditiis officiis! */}
        </p>
      </div>
    </article>
  );
}

export default OldCommentIndividual;
