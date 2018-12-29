import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "./actions/authActions";
import store from "./store";
import "./App.css";

// importing components
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Landing from "./components/layouts/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

//check for tokens
if (localStorage.jwtToken) {
  //set auth token header
  setAuthToken(localStorage.jwtToken);
  //decode token and get user information
  const decoded = jwt_decode(localStorage.jwtToken);
  //set user and isSuthenticated
  store.dispatch(setCurrentUser(decoded));
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
