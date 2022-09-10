// react-router-dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Footerbottom from "./components/footerbottom/Footerbottom";
// components
import Navbar from "./components/navbar/Navbar";
// pages
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
      <Footerbottom/>
    </Router>
  );
}

export default App;