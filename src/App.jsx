import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Demo from "./pages/Demo"; // Fixed path
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/demo/:category" element={<Demo />} />{" "}
        {/* Changed 'type' to 'category' */}
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;