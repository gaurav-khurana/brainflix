import HeroVideoElement from "../HeroVideoElement/HeroVideoElement";
// import { useContext } from "react";
// import { allVideosContext } from "../../context/context";

function Hero(props) {
  // const allVideos = useContext(allVideosContext);
  return (
    <section className="hero">
      {/* .filter((video, index) => index === 0) */}
      {/* {props.Videos.map((video) => (
        <HeroVideo key={video.id} video={video} />
        
      ))} */}
      {/* console.log({allVideos}); */}
      <HeroVideoElement {...props} />
      {/* defaultVideo={allVideos[0]} */}
      {/* <video
        className="hero__video"
        controls
        src={props.Videos[0].image}
      ></video> */}
    </section>
  );
}

export default Hero;
