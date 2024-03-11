import HeroVideoElement from "../HeroVideoElement/HeroVideoElement";
import "./Hero.scss";

function Hero(props) {
  return (
    <section className="hero">
      <HeroVideoElement {...props} />
    </section>
  );
}

export default Hero;
