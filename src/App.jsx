import "./App.scss";
import Videos from "./data/video-details.json";
import BrainflixLogo from "./assets/logo/BrainFlix-logo.svg";
import UserImage from "./assets/images/Mohan-muruge.jpg";
import VideoList from "./components/VideoList/VideoList";

function App() {
  return (
    <div>
      <header>
        <div className="logo-container">
          <img className="logo" src={BrainflixLogo} alt="BrainFlix logo" />
        </div>
        <nav className="navbar">
          <div className="navbar__search-container">
            <div className="navbar__search">
              <img className="navbar__search-image" src="" alt="" />
              {/* <p className="navbar__search-text">Search</p> */}
              <input
                className="navbar__search-text"
                type="text"
                placeholder="Search"
              />
            </div>
            <img className="navbar__userimage" src={UserImage} alt="" />
          </div>
          <div className="navbar__button-container">
            <img className="navbar__button-image" src="" alt="" />
            <img className="button__image" src="" alt="" />
            <p className="navbar__button-text"></p>
            <p className="button__text"></p>
          </div>
        </nav>
      </header>
      <main>
        <section className="hero">
          <video className="hero__video" controls src={UserImage}></video>
        </section>
        <section className="video">
          <article className="video-details">
            <div className="video-details__title-container">
              <h1 className="video-details__title">
                The Future of Artificial Intelligence
              </h1>
            </div>
            <div className="video-details__details-container">
              <div className="video-details__creator-container">
                <h3 className="video-details__name">By Aiden Thompson</h3>
                <p className="video-details__date">8/8/2023</p>
              </div>
              <div className="video-details__social-container">
                <img
                  className="video-details__seen"
                  src=""
                  alt="Video seen icon"
                />
                <p className="video-details__seen-counter">980,544</p>
                <img
                  className="video-details__likes"
                  src=""
                  alt="Likes icon for the video"
                />
                <p className="video-details__likes-counter">22,479</p>
              </div>
            </div>
            {/* <div className="video-details__description-container"> */}
            <p className="video-details__description"></p>
            {/* </div> */}
          </article>
          <article className="video-comments">
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
                <div className="oldcomments__image-container">
                  <img
                    className="oldcomments__image"
                    src=""
                    alt="missing user"
                  />
                </div>
                <div className="oldcomments__details-container">
                  <div className="oldcomments__details">
                    <h3 className="oldcomments__name">Noah Duncan</h3>
                    <p className="oldcomments__date">8/11/2023</p>
                  </div>
                  <p className="oldcomments__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta voluptate sed aliquam corporis ratione voluptatum
                    dolores est atque blanditiis officiis!
                  </p>
                </div>
              </article>
              <article className="oldcomments-individual">
                <div className="oldcomments__image-container">
                  <img
                    className="oldcomments__image"
                    src=""
                    alt="missing user"
                  />
                </div>
                <div className="oldcomments__details-container">
                  <div className="oldcomments__details">
                    <h3 className="oldcomments__name">Noah Duncan</h3>
                    <p className="oldcomments__date">8/11/2023</p>
                  </div>
                  <p className="oldcomments__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta voluptate sed aliquam corporis ratione voluptatum
                    dolores est atque blanditiis officiis!
                  </p>
                </div>
              </article>
              <article className="oldcomments-individual">
                <div className="oldcomments__image-container">
                  <img
                    className="oldcomments__image"
                    src=""
                    alt="missing user"
                  />
                </div>
                <div className="oldcomments__details-container">
                  <div className="oldcomments__details">
                    <h3 className="oldcomments__name">Noah Duncan</h3>
                    <p className="oldcomments__date">8/11/2023</p>
                  </div>
                  <p className="oldcomments__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta voluptate sed aliquam corporis ratione voluptatum
                    dolores est atque blanditiis officiis!
                  </p>
                </div>
              </article>
            </div>
          </article>
        </section>

        {/* Video list Section */}

        <VideoList Videos={Videos} />

        {/* <section className="nextvideos">
          <h2 className="nextvideos__heading">NEXT VIDEOS</h2>
          <ul>
            <li className="nextvideos-individual">
              <img className="nextvideos-image" src="" alt="" />
              <div>
                <h3 className="nextvideos__title">Video 1</h3>
                <p className="nextvideos__channel"></p>
              </div>
            </li>
            <li className="nextvideos-individual">
              <img className="nextvideos-image" src="" alt="" />
              <div className="nextvideos__details-container">
                <h3 className="nextvideos__title">Video 2</h3>
                <p className="nextvideos__channel"></p>
              </div>
            </li>
            <li className="nextvideos-individual">
              <img className="nextvideos-image" src="" alt="" />
              <div className="nextvideos__details-container">
                <h3 className="nextvideos__title">Video 3</h3>
                <p className="nextvideos__channel"></p>
              </div>
            </li>
            <li className="nextvideos-individual">
              <img className="nextvideos-image" src="" alt="" />
              <div className="nextvideos__details-container">
                <h3 className="nextvideos__title">Video 4</h3>
                <p className="nextvideos__channel"></p>
              </div>
            </li>
            <li className="nextvideos-individual">
              <img className="nextvideos-image" src="" alt="" />
              <div className="nextvideos__details-container">
                <h3 className="nextvideos__title">Video 5</h3>
                <p className="nextvideos__channel"></p>
              </div>
            </li>
            <li className="nextvideos-individual">
              <img className="nextvideos-image" src="" alt="" />
              <div className="nextvideos__details-container">
                <h3 className="nextvideos__title">Video 6</h3>
                <p className="nextvideos__channel"></p>
              </div>
            </li>
            <li className="nextvideos-individual">
              <img className="nextvideos-image" src="" alt="" />
              <div className="nextvideos__details-container">
                <h3 className="nextvideos__title">Video 7</h3>
                <p className="nextvideos__channel"></p>
              </div>
            </li>
            <li className="nextvideos-individual">
              <img className="nextvideos-image" src="" alt="" />
              <div className="nextvideos__details-container">
                <h3 className="nextvideos__title">Video 8</h3>
                <p className="nextvideos__channel"></p>
              </div>
            </li>
          </ul>
        </section> */}
      </main>
    </div>
  );
}

export default App;
