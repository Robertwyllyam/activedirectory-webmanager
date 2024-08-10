import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import ComputerManagement from "./pages/ComputerManagement/ComputerManagement";
import UserManagement from "./pages/UserManagement/UserManagement";
import PasswordReset from "./pages/PasswordReset";
import CreateUser from "./pages/UserManagement/CreateUser";
import GetUser from "./pages/UserManagement/GetUser";
import GetComputer from "./pages/ComputerManagement/GetComputer";
import CreateComputer from "./pages/ComputerManagement/CreateComputer";
import Login from "./pages/Login/Login";
import AuthContextProvider from "./contexts/AuthContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Link style={{ textDecoration: "none" }} to="/">
        <header className="App-header">AD Web Manager</header>
      </Link>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pwreset" element={<PasswordReset />} />
          <Route path="/userMgmt" element={<UserManagement />} />
          <Route path="/userMgmt/newUser" element={<CreateUser />} />
          <Route path="/userMgmt/listUsers" element={<GetUser />} />
          <Route path="/pcMgmt" element={<ComputerManagement />} />
          <Route path="/pcMgmt/pcSearch" element={<GetComputer />} />
          <Route path="/pcMgmt/pcCreate" element={<CreateComputer />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
