import "./Button.scss";

function Button(props) {
  return (
    <div className={props.containerClassName}>
      <img
        className={`button ${props.className}`}
        src={props.srcImage}
        alt={props.altText}
      />
      {/* <img className="button button--navbar button--comment" src="" alt="" /> */}

      {/* <p className="button "></p> */}
      <p className="button button__text">{props.text}</p>
      {/* <p className="navbar__button-text"></p> */}
    </div>
  );
}

export default Button;
