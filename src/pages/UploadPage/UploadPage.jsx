import "./UploadPage.scss";
import VideoPreview from "../../assets/images/Upload-video-preview.jpg";
import PublishIcon from "../../assets/icons/publish.svg";
import Button from "../../components/Button/Button";
import UploadForm from "../../components/UploadForm/UploadForm";

function UploadPage() {
  return (
    <main className="upload">
      {/* <p>Page for video upload here</p>; */}
      <h1 className="upload__title">Upload Video</h1>;
      <article className="hero">
        <h3 className="hero__title">VIDEO THUMBNAIL</h3>
        <img
          className="hero__image"
          src={VideoPreview}
          alt="upload video preview thumbnail"
        />
      </article>
      <UploadForm />
      {/* <form  className="form">
        <label className="form__label" htmlFor="title">TITLE FOR VIDEO</label>
        <input className="form__input"
          type="text"
          name="title"
          placeholder="Add a title to your video"
        />
        <label className="form__label" htmlFor="description">ADD A VIDEO DESCRIPTION</label>
        <textarea  className="form__textarea"
          name="description"
          id="description"
          cols="30"
          rows="10"
          placeholder="Add a description to your video"
        ></textarea>
      </form> */}
      <div>
        <Button
          containerClassName="upload__button-container"
          className="button--publish"
          srcImage={PublishIcon}
          altText="publish video button"
          text="PUBLISH"
        />
        <Button
          containerClassName=""
          className="button--inverted"
          srcImage={PublishIcon}
          altText="cancel publishing video button"
          text="CANCEL"
        />
      </div>
    </main>
  );
}

export default UploadPage;
