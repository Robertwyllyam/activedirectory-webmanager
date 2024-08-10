import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Users from "../../assets/users.svg";
import { api } from "../../services/api";

const UserManagement = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  if (loading) {
    return (
      <div style={{ textAlign: "center", color: "white" }}>Loading...</div>
    );
  }

  if (error) {
    return <p className="text-error">{error}</p>;
  }

  return (
    <div className="flex">
      <Card
        linkTo="listUsers"
        title={`Find User`}
        img={Users}
      ></Card>

      <Card linkTo="newUser" title={`Create a New User`} img={Users}></Card>
    </div>
  );
};

export default UserManagement;
