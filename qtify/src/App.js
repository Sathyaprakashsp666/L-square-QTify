import "./App.css";
import Card from "./components/Card/Card";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import img from "./assests/bg-img.png";
import TopAlbums from "./components/TopAlbums/TopAlbums";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TopAlbums />
    </div>
  );
}

export default App;
