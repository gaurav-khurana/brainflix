import OldCommentIndividual from "../OldCommentIndividual/OldCommentIndividual";

function OldCommentsSection(props) {
  return (
    <div className="oldcomments">
      {/* //NOTE use map func to loop over comments in array to update name date text */}

      <OldCommentIndividual {...props} />
      {/* <article className="oldcomments-individual">
        <figure className="oldcomments__image-container">
          <img className="oldcomments__image" src="" alt="missing user" />
        </figure>
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
      </article> */}

      <OldCommentIndividual {...props} />
      {/* <article className="oldcomments-individual">
        <figure className="oldcomments__image-container">
          <img className="oldcomments__image" src="" alt="missing user" />
        </figure>
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
      </article> */}

      <OldCommentIndividual {...props} />
      {/* <article className="oldcomments-individual">
        <figure className="oldcomments__image-container">
          <img className="oldcomments__image" src="" alt="missing user" />
        </figure>
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
      </article> */}
    </div>
  );
}

export default OldCommentsSection;
