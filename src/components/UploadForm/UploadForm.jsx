import { useNavigate } from "react-router-dom";
import "./UploadForm.scss";
import PublishIcon from "../../assets/icons/publish.svg";
import Button from "../../components/Button/Button";
import { useState } from "react";

function UploadForm() {
  const navigate = useNavigate();

  const [videoTitle, setVideoTitle] = useState("");
  const [videoDescription, setVideoDescription] = useState("");

  const handleVideoTitle = (event) => {
    setVideoTitle(event.target.value);
  };

  const handleVideoDescription = (event) => {
    setVideoDescription(event.target.value);
  };

  console.log(videoTitle);
  console.log(videoDescription);

  // to check if form data is valid

  function isTitleValid() {
    if (typeof videoTitle === "string" && videoTitle.length > 3) {
      console.log("Data Valid");
      return true;
    } else {
      videoTitle.classList?.remove("form__input--error");
    }
  }
  function isDescriptionValid() {
    if (typeof videoDescription === "string" && videoDescription.length > 5) {
      videoDescription.classList?.remove("form__input--error");
      console.log("Data Valid");
      return true;
    } else {
      videoDescription.classList?.remove("form__input--error");
    }
  }

  // check all details in form are filled

  function isFormComplete() {
    if (!videoTitle || !videoDescription) {
      console.log("form INCOMPLETE");
      alert("Video submission form incomplete");
      return false;
    } else {
      videoTitle.classList?.remove("form__input--error");
      videoDescription.classList?.remove("form__input--error");
      console.log("form COMPLETE");
      return true;
    }
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(event.target);
    const form = event.target;

    // form validation before upload
    // const videoTitle = form.title;
    // console.log(videoTitle.value);
    // const videoDescription = form.description;
    // console.log(videoDescription.value);

    // isFormComplete();
    // check
    // if (
    //   typeof videoTitle.value === "string" &&
    //   typeof videoDescription.value === "string"
    // ) {
    //   // videoTitle.classList.remove("input__form--error");
    //   // videoDescription.classList.remove("input__form--error");
    //   alert("Video uploaded successfully !");
    //   navigate("/");
    // }
    if (isFormComplete()) {
      console.log("form valid & complete so UPLOADED");
      alert("Video uploaded successfully !");
      form.reset();
      navigate("/");
    }
  }

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <label className="form__title" htmlFor="title">
        TITLE FOR VIDEO
      </label>

      <input
        // className={`form__input`}
        className={`form__input ${isTitleValid() ? "" : "form__input--error"} `}
        type="text"
        name="title"
        value={videoTitle}
        onChange={handleVideoTitle}
        autoFocus
        placeholder="Add a title to your video"
      />

      <label className="form__title" htmlFor="description">
        ADD A VIDEO DESCRIPTION
      </label>

      <textarea
        // className="form__textarea"
        className={`form__textarea ${
          isDescriptionValid() ? "" : "form__input--error"
        } `}
        id="description"
        name="description"
        value={videoDescription}
        onChange={handleVideoDescription}
        cols="30"
        rows="3"
        placeholder="Add a description to your video"
      ></textarea>

      <div className="button-container">
        <Button
          containerClassName="upload__button-container"
          buttonType="submit"
          className="button--publish"
          btnImageClassName="button__image--publish"
          srcImage={PublishIcon}
          altText="publish video button"
          text="PUBLISH"
        />

        <Button
          containerClassName="upload__button-container"
          buttonType="reset"
          className="button--inverted"
          btnImageClassName="button__image--inverted"
          srcImage={PublishIcon}
          altText="cancel publishing video button"
          text="CANCEL"
        />
      </div>
    </form>
  );
}

export default UploadForm;
