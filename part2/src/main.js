import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import SharedPage from "./pages/SharedPage";
import FolderPage from "./pages/FolderPage";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/shared" element={<SharedPage />} />
          <Route path="/folder" element={<FolderPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
