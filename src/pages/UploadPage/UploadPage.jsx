import "./UploadPage.scss";
import Button from "../../components/Button/Button";
import UploadForm from "../../components/UploadForm/UploadForm";

function UploadPage() {
  return (
    <>
      {/* <p>Page for video upload here</p>; */}
      <h1>Upload Video</h1>;
      <article>
        <h3>VIDEO THUMBNAIL</h3>
        <img
          src="../../assets/images/Upload-video-preview.jpg"
          alt="upload video preview thumbnail"
        />
      </article>
      <UploadForm />
      {/* <form>
        <label htmlFor="title">TITLE FOR VIDEO</label>
        <input
          type="text"
          name="title"
          placeholder="Add a title to your video"
        />
        <label htmlFor="description">ADD A VIDEO DESCRIPTION</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          placeholder="Add a description to your video"
        ></textarea>
      </form> */}
      <div>
        <Button
          containerClassName=""
          className="button--publish"
          altText="publish video button"
          text="PUBLISH"
        />
        <Button
          containerClassName=""
          className="button--inverted"
          altText="cancel publishing video button"
          text="CANCEL"
        />
      </div>
    </>
  );
}

export default UploadPage;
