import "./SearchBar.scss";
import UserImage from "../../assets/images/Mohan-muruge.jpg";
import SearchIcon from "../../assets/icons/search.svg";
import Button from "../Button/Button";

function SearchBar() {
  return (
    <div className="navbar__search-container">
      <div className="navbar__search">
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
      />
      {/* <Button className={className} srcImage ={srcImage} altText={altText} /> */}
      <Button
        containerClassName="navbar__button-container"
        className="button--navbar"
        srcImage={SearchIcon}
        altText="Search icon"
        text="UPLOAD"
      />
      <img
        className="navbar__userimage navbar__userimage--tablet"
        src={UserImage}
        alt="Active User"
      />
    </div>
  );
}
export default SearchBar;
