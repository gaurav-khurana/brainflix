import "./SearchBar.scss";
import UserImage from "../../assets/images/Mohan-muruge.jpg";
import SearchIcon from "../../assets/icons/search.svg";
import UploadIcon from "../../assets/icons/upload.svg";
import Button from "../Button/Button";

function SearchBar() {
  return (
    <>
      <div className="navbar__search">
        <div className="navbar__search-element">
          <img
            className="navbar__search-image"
            src={SearchIcon}
            alt="Search icon"
          />
          <input
            className="navbar__search-text"
            type="text"
            placeholder="Search"
          />
        </div>

        <img
          className="navbar__userimage navbar__userimage--mobile"
          src={UserImage}
          alt="Active User"
          loading="lazy"
        />
      </div>

      <Button
        containerClassName="navbar__button-container"
        className="button--navbar"
        btnImageClassName="button__image--navbar"
        srcImage={UploadIcon}
        altText="Upload video icon"
        text="UPLOAD"
      />

      <img
        className="navbar__userimage navbar__userimage--tablet"
        src={UserImage}
        alt="Active User"
      />
    </>
  );
}
export default SearchBar;
