import axios from "axios";
import {
  ADD_TODO,
  ADD_TODO_FAILURE,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  GET_TODO_FAILURE,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
} from "./actionTypes";

// action creator
export const getTodoRequest = () => {
  return {
    type: GET_TODO_REQUEST,
  };
};
export const getTodoSuccess = (payload) => {
  return {
    type: GET_TODO_SUCCESS,
    payload,
  };
};
export const getTodoFailure = (error) => {
  return {
    type: GET_TODO_FAILURE,
    payload: error,
  };
};

export const getTodo = (payload) => (dispatch) => {
  dispatch(getTodoRequest());
  return axios
    .get("http://localhost:8080/tasks")
    .then((response) => {
      console.log(response);
      dispatch(getTodoSuccess(response.data));
      //dispatch(getTodo());
    })
    .catch((error) => {
      dispatch(getTodoFailure());
    });
};

//for get todo

export const addTodoRequest = () => {
  return {
    type: ADD_TODO_REQUEST,
  };
};
export const addTodoSuccess = (payload) => {
  return {
    type: ADD_TODO_SUCCESS,
    payload,
  };
};
export const addTodoFailure = (error) => {
  return {
    type: ADD_TODO_FAILURE,
    payload: error,
  };
};

export const addTodo = (payload) => (dispatch) => {
  dispatch(addTodoRequest());
  return axios
    .post("http://localhost:8080/tasks", {
      title: payload,
      status: false,
    })
    .then((response) => {
      dispatch(addTodoSuccess(response.data));
    })
    .catch((error) => {
      dispatch(addTodoFailure());
    });
};
