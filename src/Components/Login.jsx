import React from "react";

function Login({ handleLogin }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = { email, password };
    handleLogin(payload);
  };
  return (
    <>
      <h1>Please Login</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setEmail(e.target.value)} placeholder="email" />
        <br />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          type="password"
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}

export { Login };
