
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";


const App = () => {
  return (<>
    <div className="relative z-0 bg-primary text-white">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>

      <div className="relative z-0">
      </div>
    </div>
  </>
  
  );
};

export default App;