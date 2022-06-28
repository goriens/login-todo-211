import React from "react";
import { TodoInput } from "./Components/TodoInput";
import { TodoList } from "./Components/TodoList";
import { RoutesFun } from "./Routes/Routes";
//import "./styles.css";

import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <RoutesFun />
    </div>
  );
}

export default App;
