import "./UploadForm.scss";

function UploadForm() {
  return (
    <form className="form">
      <label className="form__input" htmlFor="title">
        TITLE FOR VIDEO
      </label>

      <input
        className="form__title"
        type="text"
        name="title"
        placeholder="Add a title to your video"
      />

      <label className="form__input" htmlFor="description">
        ADD A VIDEO DESCRIPTION
      </label>

      <textarea
        className="form__textarea"
        name="description"
        id="description"
        cols="30"
        rows="10"
        placeholder="Add a description to your video"
      ></textarea>
    </form>
  );
}

export default UploadForm;
