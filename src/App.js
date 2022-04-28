import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
