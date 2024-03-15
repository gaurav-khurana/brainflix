import "./NewCommentSection.scss";
import Button from "../Button/Button";
import UserImage from "../../assets/images/Mohan-muruge.jpg";
import CommentIcon from "../../assets/icons/add_comment.svg";
import axios from "axios";

function NewCommentSection() {
  // base url & api key for axios call
  const baseUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com";
  const apiKey = "5f0fa1cf-41c3-48d9-9f18-aa53a8502f21";

  // NOTE event handler to Submit Form - sprint 2
  // function handleSubmit(event) {
  //   event.preventDefault();

  //   const postComment = async () => {
  //     const response = await axios.post(
  //       `${baseUrl}/videos/${commentId}/comments`
  //     );

  //   };
  // }

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
        <form
          className="newcomment__comment-container"
          // onSubmit={handleSubmit}
        >
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
            containerClassName="newcomment__button-container"
            buttonType="submit"
            className="button--comment"
            btnImageClassName="button__image--comment"
            srcImage={CommentIcon}
            altText="Add Comment Icon"
            text="COMMENT"
          />
        </form>
      </div>
    </article>
  );
}

export default NewCommentSection;
