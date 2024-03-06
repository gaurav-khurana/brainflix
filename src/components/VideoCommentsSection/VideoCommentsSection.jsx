import NewCommentSection from "../NewCommentSection/NewCommentSection";
import OldCommentsSection from "../OldCommentsSection/OldCommentsSection";

function VideoCommentsSection() {
  return (
    <section className="video-comments">
      {/* //TODO - FINALIZE WHR 3 COMMENTS WL GO WT HERO-VIDEO-SECT OR COMMENTS-SECT */}

      <NewCommentSection />
      {/* <article className="newcomment">
        <div className="newcomment__userimage-container">
          <img
            className="newcomment__userimage"
            src={UserImage}
            alt="Active user"
          />
        </div>
        <div className="newcomment__comment-container">
          <h3 className="newcomment__title">JOIN THE CONVERSATION</h3>
          <input className="newcomment__input" type="textarea" />
          <div className="newcomment__button-container">
            <img className="button__image" src="" alt="" />
            <img className="newcomment__button-image" src="" alt="" />
            <p className="newcomment__button-text"></p>
            <p className="button__text"></p>
          </div>
        </div>
      </article> */}

      <OldCommentsSection />
      {/* <div className="oldcomments">
        <article className="oldcomments-individual">
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
              voluptate sed aliquam corporis ratione voluptatum dolores est
              atque blanditiis officiis!
            </p>
          </div>
        </article>
        <article className="oldcomments-individual">
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
              voluptate sed aliquam corporis ratione voluptatum dolores est
              atque blanditiis officiis!
            </p>
          </div>
        </article>
        <article className="oldcomments-individual">
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
              voluptate sed aliquam corporis ratione voluptatum dolores est
              atque blanditiis officiis!
            </p>
          </div>
        </article>
      </div> */}
    </section>
  );
}

export default VideoCommentsSection;
