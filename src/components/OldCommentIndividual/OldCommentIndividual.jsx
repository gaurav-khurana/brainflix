import OldCommentDetails from "../OldCommentDetails/OldCommentDetails";

function OldCommentIndividual() {
  return (
    <article className="oldcomments-individual">
      {/* //NOTE can explore to c if static missing img shld mk a component */}
      <figure className="oldcomments__image-container">
        <img className="oldcomments__image" src="" alt="missing user" />
      </figure>

      <OldCommentDetails />
      {/* <div className="oldcomments__details-container">
        <div className="oldcomments__details">
          <h3 className="oldcomments__name">Noah Duncan</h3>
          <p className="oldcomments__date">8/11/2023</p>
        </div>
        <p className="oldcomments__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          voluptate sed aliquam corporis ratione voluptatum dolores est atque
          blanditiis officiis!
        </p>
      </div> */}
    </article>
  );
}

export default OldCommentIndividual;
