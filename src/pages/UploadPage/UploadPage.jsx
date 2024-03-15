import "./UploadPage.scss";
import VideoPreview from "../../assets/images/Upload-video-preview.jpg";
import UploadForm from "../../components/UploadForm/UploadForm";
// import { useNavigate } from "react-router-dom";

function UploadPage() {
  return (
    <main className="upload">
      {/* <p>Page for video upload here</p>; */}
      <h1 className="upload__title">Upload Video</h1>;
      <div className="upload--desktop">
        <article className="upload-hero">
          <h3 className="upload-hero__title">VIDEO THUMBNAIL</h3>
          <img
            className="upload-hero__image"
            src={VideoPreview}
            alt="upload video preview thumbnail"
          />
        </article>
        <UploadForm />
      </div>
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
    </main>
  );
}

export default UploadPage;
