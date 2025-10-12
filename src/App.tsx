import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import "./custom.css";
import PortfolioDetails from "./pages/PortfolioDetails";
import AllServices from "./pages/ServicesAll";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<PortfolioDetails />} />
          <Route path="/services" element={<AllServices />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
