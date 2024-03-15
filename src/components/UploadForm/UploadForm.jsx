import { useNavigate } from "react-router-dom";
import "./UploadForm.scss";
import PublishIcon from "../../assets/icons/publish.svg";
import Button from "../../components/Button/Button";

function UploadForm() {
  let navigate = useNavigate();

  function handleFormSubmit(event) {
    // console.log("i run");
    event.preventDefault();
    alert("Form submitted successfully !");
    navigate("/");
  }

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <label className="form__title" htmlFor="title">
        TITLE FOR VIDEO
      </label>

      <input
        className="form__input"
        type="text"
        name="title"
        placeholder="Add a title to your video"
      />

      <label className="form__title" htmlFor="description">
        ADD A VIDEO DESCRIPTION
      </label>

      <textarea
        className="form__textarea"
        name="description"
        id="description"
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
