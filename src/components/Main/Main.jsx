import "./Main.scss";
import VideoDetails from "../VideoDetails/VideoDetails";
import VideoList from "../VideoList/VideoList";

function Main() {
  return (
    <main className="main">
      <div className="main--mobile main--desktop">
        <VideoDetails />
        <VideoList />
      </div>
    </main>
  );
}

export default Main;
