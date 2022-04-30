import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./components/About/About";

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
