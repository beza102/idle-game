import React from "react";
import Header from "./components/Header";
import Game from "./components/Game";
import Footer from "./components/Footer";
import './App.css';
import Button from "./components/Button";




function App() {
  return (
    <div className="app-container">
      <Header />
      <Game />
      <Footer />
      <Button />
    </div>
  );
}

export default App;
