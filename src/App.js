import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import CenPlus from "./pages/CenPlus";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Signinup from "./pages/Signinup";
import Events from "./pages/Events";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Events" element={<Events />} />
          <Route path="CenPlus" element={<CenPlus />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Signinup" element={<Signinup/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}