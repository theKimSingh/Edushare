import "./App.css";
import Navbar from "../elements/Navbar";
import Carousels from "../elements/Carousels";
import Footer from "../elements/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        {/*         <Carousels />
         */}{" "}
        <h3>Welcome to E-Waste</h3>
        <p>
          Our goal is to provide children with increasing access to resources
          around the globe
        </p>
      </header>
      <Footer />
    </div>
  );
}

export default App;
