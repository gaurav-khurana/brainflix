import { useNavigate } from "react-router-dom";
import "./UploadForm.scss";
import PublishIcon from "../../assets/icons/publish.svg";
import Button from "../../components/Button/Button";
import { useState } from "react";
import axios from "axios";

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

  // to check if form data is valid

  function isTitleValid() {
    if (typeof videoTitle === "string" && videoTitle.length > 3) {
      return true;
    } else {
      videoTitle.classList?.remove("form__input--error");
    }
  }

  function isDescriptionValid() {
    if (typeof videoDescription === "string" && videoDescription.length > 5) {
      videoDescription.classList?.remove("form__input--error");
      return true;
    } else {
      videoDescription.classList?.remove("form__input--error");
    }
  }

  // check all details in form are filled

  function isFormComplete() {
    if (!videoTitle || !videoDescription) {
      alert("Video submission form incomplete");
      return false;
    } else {
      videoTitle.classList?.remove("form__input--error");
      videoDescription.classList?.remove("form__input--error");
      return true;
    }
  }

  // event handler to submit form after validation

  function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;

    const title = form.title.value;

    const description = form.description.value;

    if (isFormComplete()) {
      alert("Video uploaded successfully !");
      form.reset();
      navigate("/");

      const newVideo = {
        title: title,
        description: description,
      };

      const uploadVideo = async () => {
        try {
          const response = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/videos`,
            newVideo
          );
        } catch (error) {
          console.log(error, "Error while Uploading");
        }
      };

      uploadVideo(newVideo);
    }
  }

  // function to clear input fields on cancel button
  function handleClearForm(event) {
    const form = event.target.form;

    form.title.value = "";
    form.description.value = "";

    navigate("/");
  }

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <label className="form__title" htmlFor="title">
        TITLE FOR VIDEO
      </label>

      <input
        className={`form__input ${isTitleValid() ? "" : "form__input--error"} `}
        type="text"
        name="title"
        id="title"
        value={videoTitle}
        onChange={handleVideoTitle}
        autoFocus
        placeholder="Add a title to your video"
      />

      <label className="form__title " htmlFor="description">
        ADD A VIDEO DESCRIPTION
      </label>

      <textarea
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
          handleFunction={handleClearForm}
        />
      </div>
    </form>
  );
}

export default UploadForm;
