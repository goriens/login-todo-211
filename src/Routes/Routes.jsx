import React from "react";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { LoginPage } from "./LoginPage";

function RoutesFun() {
  return (
    <>
      <div className="nav">
        <Link to="/">TASKS</Link>
        <Link to="/login">LOGIN</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<div>Error</div>} />
      </Routes>
    </>
  );
}

export { RoutesFun };
