import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "./Components/Slider/Slider";
import slides from "./mock.json";
function App() {
  return <Slider slides={slides} />;
}

export default App;
