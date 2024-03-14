import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import UploadPage from "./pages/UploadPage/UploadPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="home" element={<Navigate to="/" />} />

          <Route path="uploadpage" element={<UploadPage />} />

          <Route path="videos/:videoId" element={<Main />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
