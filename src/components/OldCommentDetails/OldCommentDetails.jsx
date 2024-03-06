function OldCommentDetails(props) {
  //NOTE- props.name, props.date, props.text

  return (
    <div className="oldcomments__details-container">
      <div className="oldcomments__details">
        <h3 className="oldcomments__name">Noah Duncan</h3>
        <p className="oldcomments__date">8/11/2023</p>
      </div>
      <p className="oldcomments__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
        voluptate sed aliquam corporis ratione voluptatum dolores est atque
        blanditiis officiis!
      </p>
    </div>
  );
}

export default OldCommentDetails;
