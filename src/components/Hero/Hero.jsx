import HeroVideoElement from "../HeroVideoElement/HeroVideoElement";

function Hero(props) {
  return (
    <section className="hero">
      {/* .filter((video, index) => index === 0) */}
      {/* {props.Videos.map((video) => (
        <HeroVideo key={video.id} video={video} />
      ))} */}
      <HeroVideoElement />
      {/* <video
        className="hero__video"
        controls
        src={props.Videos[0].image}
      ></video> */}
    </section>
  );
}

export default Hero;
