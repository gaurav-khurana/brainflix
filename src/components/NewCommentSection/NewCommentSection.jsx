import "./NewCommentSection.scss";
import Button from "../Button/Button";
import UserImage from "../../assets/images/Mohan-muruge.jpg";
import CommentIcon from "../../assets/icons/add_comment.svg";
import axios from "axios";
import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

function NewCommentSection() {
  // base url & api key for axios call
  const baseUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com";
  const apiKey = "5f0fa1cf-41c3-48d9-9f18-aa53a8502f21";

  const [updatedComments, setUpdatedComments] = useState([]);

  let { videoId } = useParams();

  // event handler to Submit Form after validation
  function handleSubmit(event) {
    event.preventDefault();

    const commentName = "bugs bunny";
    const comment = event.target.newcomment.value;

    // form validation for comment
    if (!comment) {
      alert("Cant post empty comment");
    }

    const newComment = {
      name: commentName,
      comment: comment,
    };

    // post methed to post new user comment
    const postComment = async (newComment) => {
      try {
        const { name, comment } = newComment;

        if (!videoId) {
          videoId = "84e96018-4022-434e-80bf-000ce4cd12b8";
        }

        const response = await axios.post(
          `${baseUrl}/videos/${videoId}/comments?api_key=${apiKey}`,
          { name, comment }
        );

        // getDataBack();
      } catch (error) {
        console.log("Error Posting Comment");
      }
    };
    postComment(newComment);

    event.target.newcomment.value = "";
  }

  // function to get comments / updated comments after post
  useEffect(() => {
    const getDataBack = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/videos/${videoId}?api_key=${apiKey}`
        );
        const foundData = response.data.comments;

        const sortedData = foundData.sort((a, b) => a.timestamp - b.timestamp);

        setUpdatedComments(sortedData);
      } catch (error) {
        console.log("Cant get updated comments");
      }
    };
    if (videoId) {
      getDataBack();
    }
  }, [videoId]);

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
        <form className="newcomment__comment-container" onSubmit={handleSubmit}>
          <textarea
            className="newcomment__input"
            name="newcomment"
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
