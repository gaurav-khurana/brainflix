import "./Button.scss";

function Button(props) {
  return (
    <div className={props.containerClassName}>
      <button type="submit" className={`button ${props.className}`}>
        <img
          className={`button__image ${props.btnImageClassName}`}
          src={props.srcImage}
          alt={props.altText}
        />
        {props.text}
      </button>
    </div>
  );
}

export default Button;
