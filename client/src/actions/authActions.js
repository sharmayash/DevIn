import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";

// register user

export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/auth/register", userData)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// login user

export const loginUser = userData => dispatch => {
  axios
    .post("/api/auth/login", userData)
    .then(res => {
      // save to local storage
      const { token } = res.data;
      // save token to local storage
      localStorage.setItem("jwtToken", token);
      // set token to Auth header
      setAuthToken(token);
      // decode token to get user data
      const decode = jwt_decode(token);
      //set current user
      dispatch(setCurrentUser(decode));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const setCurrentUser = decode => {
  return {
    type: SET_CURRENT_USER,
    payload: decode
  };
};
