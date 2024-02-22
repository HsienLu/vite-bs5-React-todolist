import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Login from "./component/Login.tsx";
import {HashRouter, Route, Routes} from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./component/TodoList.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/TodoList" element={<TodoList />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
