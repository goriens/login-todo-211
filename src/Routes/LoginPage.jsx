import axios from "axios";
import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Login } from "../Components/Login";
import { loginUser } from "../Redux/auth/action";

function LoginPage() {
  const dispatch = useDispatch();
  const { isAuth, isLoading, token, isError } = useSelector(
    (state) => state.auth,
    shallowEqual
  );
  const handleLogin = ({ email, password }) => {
    dispatch(loginUser({ email, password }));
  };
  if (isAuth) {
    return <Navigate to="/" />;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Login handleLogin={handleLogin} />
      {isError && <div>Login failed</div>}
    </div>
  );
}

export { LoginPage };
