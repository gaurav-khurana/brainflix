import "./NewCommentSection.scss";
import Button from "../Button/Button";
import UserImage from "../../assets/images/Mohan-muruge.jpg";
// import CommentIcon from "../../assets/icons/add_comment.svg";
import CommentIcon from "../../assets/icons/add_comment.svg";

function NewCommentSection() {
  // NOTE - event handler to Submit Form

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

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
        <textarea
          className="newcomment__input"
          name="newcomment__input"
          type="textarea"
          rows={4}
          cols={5}
          resize="none"
          placeholder="Add a new comment"
        />

        <Button
          onClick={handleSubmit}
          containerClassName="newcomment__button-container"
          className="button--comment"
          btnImageClassName="button__image--comment"
          srcImage={CommentIcon}
          altText="Add Comment Icon"
          text="COMMENT"
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
