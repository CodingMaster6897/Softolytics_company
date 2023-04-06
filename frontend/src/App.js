import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import OneService from "./components/OneService";
import ScrollDownButton from "./components/ScrollDownButton";
import Services from "./components/Services";
import Slider from "./components/Slider";
import Social from "./components/Social";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <Slider />
              <About />
              <Services />
              <Clients />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div>
              <Navbar />
              <Contact />
            </div>
          }
        />
        <Route path="/web" element={<OneService />} />
      </Routes>
      <Social />
      {/* <ScrollDownButton /> */}
      <Footer />
    </div>
  );
}

export default App;
