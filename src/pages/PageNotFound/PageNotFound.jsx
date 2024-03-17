import "./PageNotFound.scss";
import MissingPage from "../../assets/images/404 Error Page Confused.jpeg";

function PageNotFound() {
  return (
    <div className="page404">
      <img
        className="page404__image"
        src={MissingPage}
        alt="404 page not found"
      />
    </div>
  );
}

export default PageNotFound;
