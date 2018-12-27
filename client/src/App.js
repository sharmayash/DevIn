import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

// importing components
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Landing from "./components/layouts/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App blue-grey darken-2">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
