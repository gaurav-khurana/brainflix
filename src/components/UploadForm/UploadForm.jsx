import "./UploadForm.scss";

function UploadForm() {
  return (
    <form>
      <label htmlFor="title">TITLE FOR VIDEO</label>
      <input type="text" name="title" placeholder="Add a title to your video" />
      <label htmlFor="description">ADD A VIDEO DESCRIPTION</label>
      <textarea
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
