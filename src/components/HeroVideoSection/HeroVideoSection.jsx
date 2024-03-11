import HeroVideoCreator from "../HeroVideoCreator/HeroVideoCreator";
import HeroVideoDescription from "../HeroVideoDescription/HeroVideoDescription";
import HeroVideoSocial from "../HeroVideoSocial/HeroVideoSocial";
import HeroVideoTitle from "../HeroVideoTitle/HeroVideoTitle";
import "./HeroVideoSection.scss";

function HeroVideoSection(props) {
  return (
    <section className="hero-video">
      <HeroVideoTitle {...props} />

      <div className="hero-video__details-container">
        <HeroVideoCreator {...props} />

        <HeroVideoSocial {...props} />
      </div>

      <HeroVideoDescription {...props} />
    </section>
  );
}

export default HeroVideoSection;
