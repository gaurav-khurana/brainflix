import "./Button.scss";

function Button(props) {
  return (
    <div className={props.containerClassName}>
      <button
        type={props.buttonType}
        className={`button ${props.className}`}
        onClick={props.handleFunction}
      >
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
