import React from "react";

import Header from "./components/header/header";
import Todos from "./components/todos-container/todos-container";

import './App.css'

function App() {
  return (
    <div className="App">
     <Header />

     <Todos/>
     </div>
  );
}

export default App;
