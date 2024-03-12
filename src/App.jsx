import "./App.scss";
import Videos from "./data/video-details.json";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Page from "./pages/Page/Page";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import { allVideosContext } from "./context/context";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <allVideosContext.Provider value={Videos}>
                <Main />
              </allVideosContext.Provider>
            }
          />
          <Route path="home" element={<Navigate to="/" />} />

          <Route path="page" element={<Page />} />

          <Route path="videos/:videoId" element={<Main />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      {/* <allVideosContext.Provider value={Videos}>
        <Main />
      </allVideosContext.Provider> */}
    </>
  );
}

export default App;
