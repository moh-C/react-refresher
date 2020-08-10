import React from "react";
import { HelloWorld } from "./Components/HelloWorld";
import { CounterExample } from "./Components/CounterExample";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />

        <HelloWorld name="Mammad" />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
