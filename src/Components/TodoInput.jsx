import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo } from "../Redux/todos/action";

const TodoInput = () => {
  const [title, setTitle] = React.useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    //const payload = {
    //  title,
    //  status: false,
    //  id: uuid(),
    //};
    const addTodoAction = addTodo(title);
    dispatch(addTodoAction);
    setTitle("");
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="add something"
      />
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
};

export { TodoInput };
