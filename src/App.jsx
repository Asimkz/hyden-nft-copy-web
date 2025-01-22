import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import NavBar from "./lib/ui/common/NavBar";
import HowToBuy from "./pages/HowToBuy";
import RoadMap from "./pages/RoadMap";
import Footer from "./lib/ui/common/Footer";
import StuntCollection from "./pages/StuntCollection";
import Landing from "./pages/Landing";
import CatagoriesGallery from "./pages/CatagoriesGallery";
import Sidebar from "./lib/ui/common/Sidebar";
import { useState } from "react";
import OurStory from "./pages/Ourstory";

const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <div className="bg-black">
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          isSidebarOpen
            ? "opacity-80 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      ></div>

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 flex flex-col bg-color pt-5 pb-7 transition-all duration-300">
        <NavBar toggleSidebar={toggleSidebar} />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Landing />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/roadmap"
          element={
            <Layout>
              <RoadMap />
            </Layout>
          }
        />
        <Route
          path="/how-to-buy"
          element={
            <Layout>
              <HowToBuy />
            </Layout>
          }
        />
        <Route
          path="/gallery"
          element={
            <Layout>
              <CatagoriesGallery />
            </Layout>
          }
        />
        <Route
          path="/stunt-collection"
          element={
            <Layout>
              <StuntCollection />
            </Layout>
          }
        />
        <Route
          path="/our-story"
          element={
            <Layout>
              <OurStory />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
