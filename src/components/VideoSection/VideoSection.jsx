import HeroVideoSection from "../HeroVideoSection/HeroVideoSection";
import VideoCommentsSection from "../VideoCommentsSection/VideoCommentsSection";

function VideoSection() {
  return (
    <section className="video">
      <HeroVideoSection />

      {/* <section className="hero-video">
        <div className="hero-video__title-container">
          <h1 className="hero-video__title">
            The Future of Artificial Intelligence
          </h1>
        </div>
        <div className="hero-video__details-container">
          <div className="hero-video__creator-container">
            <h3 className="hero-video__name">By Aiden Thompson</h3>
            <p className="hero-video__date">8/8/2023</p>
          </div>
          <div className="hero-video__social-container">
            <img className="hero-video__seen" src="" alt="Video seen icon" />
            <p className="hero-video__seen-counter">980,544</p>
            <img
              className="hero-video__likes"
              src=""
              alt="Likes icon for the video"
            />
            <p className="hero-video__likes-counter">22,479</p>
          </div>
        </div>
        // <div className="hero-video__description-container">
        <p className="hero-video__description"></p>
        // </div>
      </section> */}

      <VideoCommentsSection />

      {/* <section className="video-comments">
        <h3 className="video-comments__counter">3 Comments</h3>
        <article className="newcomment">
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
        </article>
        <div className="oldcomments">
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
        </div>
      </section> */}
    </section>
  );
}

export default VideoSection;
