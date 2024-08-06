import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import ComputerManagement from "./pages/ComputerManagement";
import UserManagement from "./pages/UserManagement/UserManagement";
import PasswordReset from "./pages/PasswordReset";
import CreateUser from "./pages/UserManagement/CreateUser";
import GetUser from "./pages/UserManagement/GetUser";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Link style={{ textDecoration: "none" }} to="/">
        <header className="App-header">AD Web Manager</header>
      </Link>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pcMgmt" element={<ComputerManagement />} />
        <Route path="/pwreset" element={<PasswordReset />} />
        <Route path="/userMgmt" element={<UserManagement />} />
        <Route path="/userMgmt/newUser" element={<CreateUser />} />
        <Route path="/userMgmt/listUsers" element={<GetUser />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
