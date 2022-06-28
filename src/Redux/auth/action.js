import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_REQUEST } from "./actionTypes";
import axios from "axios";

const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: token,
  };
};

const loginFailure = (err) => {
  return {
    type: LOGIN_FAILURE,
    payload: err,
  };
};

const loginUser = (payload) => (dispatch) => {
  const requestAction = loginRequest();
  dispatch(requestAction);
  const { email, password } = payload;
  axios
    .post("https://reqres.in/api/login", {
      email,
      password,
    })
    .then((res) => {
      const successAction = loginSuccess(res.data.token);
      dispatch(successAction);
    })
    .catch((err) => {
      const failureAction = loginFailure(err.message);
      dispatch(failureAction);
    });
  //if (email === "admin" && password === "admin2") {
  //  const action = loginSuccess("fakeToken");
  //  dispatch(action);
  //} else {
  //  const action = loginFailure("wrong credentials");
  //  dispatch(action);
  //}
  //function logoutFun(key) {
  //localStorage.removeItem("token");
  //}
};

export { loginRequest, loginSuccess, loginFailure, loginUser };
