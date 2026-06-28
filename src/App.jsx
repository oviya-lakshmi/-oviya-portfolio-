import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import FeaturedWork from "./components/FeaturedWork/FeaturedWork";
import Achievements from "./components/Achievements/Achievements";
import Github from "./components/Github/Github";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <div className="container">
          <About />
        </div>

        <div className="container">
          <Skills />
        </div>

        <div className="container">
          <FeaturedWork />
        </div>

        <div className="container">
          <Achievements />
        </div>

        <div className="container">
          <Github />
        </div>

        <div className="container">
          <Certifications />
        </div>

        <div className="container">
          <Contact />
        </div>

      </main>

      <Footer />
    </>
  );
}

export default App;