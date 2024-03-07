import VideoElement from "../VideoElement/VideoElement";
// import Videos from "../../data/video-details.json";
import "./VideoList.scss";
import { allVideosContext } from "../../context/context";
import { useContext } from "react";

function VideoList() {
  const allVideos = useContext(allVideosContext);
  return (
    <section className="nextvideos">
      <h2 className="nextvideos__heading">NEXT VIDEOS</h2>
      <ul>
        {/* .filter((currEl, index) => index !== 2) */}
        {/* console.log(props.Videos); */}
        {/* /* console.log(props); */}
        {allVideos
          .filter((video, index) => index !== 0)
          .map((video) => (
            <VideoElement key={video.id} video={video} />
          ))}
        {/* MOCK VIDEO LIST STRUCTURE */}
        {/* <VideoElement Videos={props.Video} /> */}
        {/* <li className="nextvideos-individual">
          <img className="nextvideos-image" src="" alt="" />
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
