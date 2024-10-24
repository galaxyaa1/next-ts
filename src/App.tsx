import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
