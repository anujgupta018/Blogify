import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CreateBlog from "./Pages/CreateBlog";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
