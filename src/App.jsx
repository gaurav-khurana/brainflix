import "./App.scss";
import Videos from "./data/video-details.json";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { allVideosContext } from "./context/context";

function App() {
  return (
    <>
      <Header />

      <allVideosContext.Provider value={Videos}>
        <Main />
      </allVideosContext.Provider>
    </>
  );
}

export default App;
