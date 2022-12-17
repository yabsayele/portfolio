import React from "react";
import NavBar from "./components/NavBar"
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div  style={{ backgroundColor: '#0E0E0E', color: '#FFFCF9'}}>
      <NavBar/>
      <Header/>
      <AboutMe/>
    </div>
  );
}

export default App;
