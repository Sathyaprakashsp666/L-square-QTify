import "./App.css";
import Card from "./components/Card/Card";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import img from "./assests/bg-img.png";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* Custom card component */}
      <Card img={img} title={"New Englsih Songs"} followers={500} />
    </div>
  );
}

export default App;
