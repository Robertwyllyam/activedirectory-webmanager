import React from "react";
import Card from "../../components/Card";
import Computer from "../../assets/computer.svg";
import Computer2 from "../../assets/comp.svg";


const ComputerManagement = () => {

  
  return (
    <div className="flex">
      <Card title="Find a PC" linkTo="pcSearch" img={Computer}></Card>
      <Card title="Create a PC" linkTo="pcCreate" img={Computer2}></Card>
    </div>
  );
};

export default ComputerManagement;
