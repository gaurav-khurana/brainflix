import "./App.scss";
import Videos from "./data/video-details.json";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import { allVideosContext } from "./context/context";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Page from "./pages/Page/Page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="home" element={<Navigate to="/" />} />
          <Route path="page" element={<Page />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <allVideosContext.Provider value={Videos}>
        <Main />
      </allVideosContext.Provider>
    </>
  );
}

export default App;
