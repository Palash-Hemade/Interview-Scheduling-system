import React from "react";
import QueueManagement from "./components/QueueManagement";
import "./App.css";
//import { LinearQueue } from './LinearQueue'; // If LinearQueue is a named export
//import CircularQueue from './CircularQueue'; // If CircularQueue is a default export

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-center mt-4">Interview Scheduling System</h1>
      <QueueManagement />
    </div>
  );
}

export default App;
