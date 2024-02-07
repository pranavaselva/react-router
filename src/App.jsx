import './App.css';
import { Route, Routes } from "react-router-dom";
import Contacts from "./Component/Contact.jsx";
import Navbar from "./Component/Navbar.jsx";
import Home from "./Component/Home.jsx";
import About from "./Component/About.jsx";


function App() {
  return (
    <>
     <Navbar/>
   <Routes>
    <Route path="/Home" element={<Home />} />
    <Route exact path="/contacts" element={<Contacts />} />
    <Route exact path="/about" element={<About />} />
    <Route exact path="*" element={<h1>404 Page not found</h1>} />
  </Routes>
        
    </>
  )
}

export default App
