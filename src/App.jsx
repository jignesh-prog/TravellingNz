import Layout from "./LayoutComponent/Layout";
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import About from "./Screens/About";
import Home from "./Screens/Home";
import Contact from "./Screens/Contact";
import Navbar from "./Screens/Navbar/Navbar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
