import "./App.scss";
import {
  Navbar,
  Hero,
  About,
  Skill,
  Work,
  Articles,
  Testimonials,
  Contact,
  Footer,
} from "./container/index";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Work />
      <Articles />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
