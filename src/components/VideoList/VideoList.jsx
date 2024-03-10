import "./VideoList.scss";
import VideoElement from "../VideoElement/VideoElement";
import { allVideosContext } from "../../context/context";
import { useContext } from "react";
// import Videos from "../../data/video-details.json";

function VideoList(props) {
  console.log(props);
  const allVideos = useContext(allVideosContext);

  // const handleVideoItem = (videoId) => {
  //   console.log(videoId);
  //   const foundVideo = allVideos.find((video) => video.id === videoId);
  //   console.log(foundVideo);
  // };

  return (
    <section className="nextvideos">
      <h2 className="nextvideos__heading">NEXT VIDEOS</h2>
      <ul className="nextvideos__list">
        {/* .filter((currEl, index) => index !== 2) */}
        {/* console.log(props.Videos); */}
        {/* /* console.log(props); */}

        {allVideos
          // .filter((video, index) => index !== 0)
          .filter((video) => video.id !== props.defaultVideo.id)
          .map((video) => (
            <VideoElement
              key={video.id}
              video={video}
              handleVideoItem={props.handleVideoItem}
              // setSelectedVideo={setSelectedVideo};
            />
          ))}

        {/* MOCK VIDEO LIST STRUCTURE */}
        {/* <VideoElement Videos={props.Video} /> */}
        {/* <li className="nextvideos__individual">
          <img className="nextvideos__image" src="" alt="" />
          <div className="nextvideos__details-container">
            <h3 className="nextvideos__title">Video 1</h3>
            <p className="nextvideos__author"></p>
          </div>
        </li>
        <li className="nextvideos-individual">
          <img className="nextvideos-image" src="" alt="" />
          <div className="nextvideos__details-container">
            <h3 className="nextvideos__title">Video 2</h3>
            <p className="nextvideos__author"></p>
          </div>
        </li>
        <li className="nextvideos-individual">
          <img className="nextvideos-image" src="" alt="" />
          <div className="nextvideos__details-container">
            <h3 className="nextvideos__title">Video 3</h3>
            <p className="nextvideos__author"></p>
          </div>
        </li>
        <li className="nextvideos-individual">
          <img className="nextvideos-image" src="" alt="" />
          <div className="nextvideos__details-container">
            <h3 className="nextvideos__title">Video 4</h3>
            <p className="nextvideos__author"></p>
          </div>
        </li>
        <li className="nextvideos-individual">
          <img className="nextvideos-image" src="" alt="" />
          <div className="nextvideos__details-container">
            <h3 className="nextvideos__title">Video 5</h3>
            <p className="nextvideos__author"></p>
          </div>
        </li>
        <li className="nextvideos-individual">
          <img className="nextvideos-image" src="" alt="" />
          <div className="nextvideos__details-container">
            <h3 className="nextvideos__title">Video 6</h3>
            <p className="nextvideos__author"></p>
          </div>
        </li>
        <li className="nextvideos-individual">
          <img className="nextvideos-image" src="" alt="" />
          <div className="nextvideos__details-container">
            <h3 className="nextvideos__title">Video 7</h3>
            <p className="nextvideos__author"></p>
          </div>
        </li>
        <li className="nextvideos-individual">
          <img className="nextvideos-image" src="" alt="" />
          <div className="nextvideos__details-container">
            <h3 className="nextvideos__title">Video 8</h3>
            <p className="nextvideos__author"></p>
          </div>
        </li> */}
      </ul>
    </section>
  );
}

export default VideoList;
