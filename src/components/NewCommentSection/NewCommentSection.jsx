import Button from "../Button/Button";
import UserImage from "../../assets/images/Mohan-muruge.jpg";
import CommentIcon from "../../assets/icons/add_comment.svg";

function NewCommentSection() {
  return (
    <article className="newcomment">
      <div className="newcomment__userimage-container">
        <img
          className="newcomment__userimage"
          src={UserImage}
          alt="Active user"
        />
      </div>
      <div className="newcomment__comment-container">
        <h3 className="newcomment__title">JOIN THE CONVERSATION</h3>
        <input className="newcomment__input" type="textarea" />

        <Button
          containerClassName="newcomment__button-container"
          className="button--comment"
          src={CommentIcon}
          altText="Add Comment Icon"
        />

        {/* <div className="newcomment__button-container">
          <img className="button button--comment" src="" alt="" />
          <img className="newcomment__button-image" src="" alt="" />
          <p className="newcomment__button-text"></p>
          <p className="button button__text"></p>
        </div> */}
      </div>
    </article>
  );
}

export default NewCommentSection;
