import HeroVideoCreator from "../HeroVideoCreator/HeroVideoCreator";
import HeroVideoDescription from "../HeroVideoDescription/HeroVideoDescription";
import HeroVideoSocial from "../HeroVideoSocial/HeroVideoSocial";
import HeroVideoTitle from "../HeroVideoTitle/HeroVideoTitle";

function HeroVideoSection(props) {
  console.log(props);

  return (
    <section className="hero-video">
      <HeroVideoTitle {...props} />

      {/* <div className="hero-video__title-container">
        <h1 className="hero-video__title">
          The Future of Artificial Intelligence
        </h1>
      </div> */}

      <div className="hero-video__details-container">
        <HeroVideoCreator {...props} />

        {/* <div className="hero-video__creator-container">
          <h3 className="hero-video__name">By Aiden Thompson</h3>
          <p className="hero-video__date">8/8/2023</p>
        </div> */}

        <HeroVideoSocial {...props} />

        {/* <div className="hero-video__social-container">
          <img className="hero-video__seen" src="" alt="Video seen icon" />
          <p className="hero-video__seen-counter">980,544</p>
          <img
            className="hero-video__likes"
            src=""
            alt="Likes icon for the video"
          />
          <p className="hero-video__likes-counter">22,479</p>
        </div> */}
      </div>

      <HeroVideoDescription {...props} />
      {/* <div className="hero-video__description-container">
      <p className="hero-video__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, veniam
        architecto</p>
      <h3 className="video-comments__counter">3 Comments</h3>
      </div> */}
    </section>
  );
}

export default HeroVideoSection;
