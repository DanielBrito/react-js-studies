import React from "react";

import TimesList from "./components/TimesList";
import EntryForm from "./components/EntryForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Clock It!</h1>
      </header>
      <TimesList />
      <EntryForm />
    </div>
  );
}

export default App;
