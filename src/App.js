import logo from "./logo.svg";
import "./App.css";
import Navbars from "./components/Navbar/Navbars";
import HeroSection from "./components/HeroSection/HeroSection";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      {/* <Navbars /> */}
      <HeroSection />
      <Projects />
    </div>
  );
}

export default App;
