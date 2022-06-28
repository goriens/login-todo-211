import { loadData, saveData } from "../../Utils/localStorage";
import {
  ADD_TODO,
  ADD_TODO_FAILURE,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  GET_TODO_FAILURE,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
} from "./actionTypes";

const initState = {
  todos: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case ADD_TODO_SUCCESS: {
      return {
        ...state,
        todos: [...state.todos, payload],
        isLoading: false,
        isError: false,
      };
    }
    case ADD_TODO_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    case GET_TODO_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_TODO_SUCCESS: {
      return {
        ...state,
        todos: payload,
        isLoading: false,
      };
    }
    case GET_TODO_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};

export { reducer };