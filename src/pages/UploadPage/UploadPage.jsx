import "./UploadPage.scss";
import VideoPreview from "../../assets/images/Upload-video-preview.jpg";
import UploadForm from "../../components/UploadForm/UploadForm";

function UploadPage() {
  return (
    <main className="upload">
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
    </main>
  );
}

export default UploadPage;
