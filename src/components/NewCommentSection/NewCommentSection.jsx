import "./NewCommentSection.scss";
import Button from "../Button/Button";
import UserImage from "../../assets/images/Mohan-muruge.jpg";

import CommentIcon from "../../assets/icons/add_comment.svg";

function NewCommentSection() {
  // event handler to Submit Form - sprint 2
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <article className="newcomment">
      <h3 className="newcomment__title">JOIN THE CONVERSATION</h3>

      <div className="newcomment__userimage-container">
        <img
          className="newcomment__userimage"
          src={UserImage}
          alt="Active user"
        />
      </div>

      <div className="newcomment__comment-container">
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
      </div>
    </article>
  );
}

export default NewCommentSection;
