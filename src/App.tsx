import React, { useEffect, useState } from "react";
import "./App.css";
import Search from "./assets/search.svg";
import Computer from "./assets/computer.svg";
import Password from "./assets/password.svg";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <main>
        <Card title="User Management" linkTo="userMgmt" img={Search}></Card>
        <Card title="Password Reset" linkTo="pwreset" img={Password}></Card>
        <Card title="Computer Management" linkTo="pcMgmt" img={Computer}></Card>
      </main>
    </div>
  );
}

export default App;
