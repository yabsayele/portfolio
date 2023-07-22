import React from "react";
import NavBar from "./components/NavBar"
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div  style={{ backgroundColor: '#E6E3D3', color: '#403F3B'}}>
      <NavBar/>
      <Header/>
      <AboutMe/>
    </div>
  );
}

export default App;
