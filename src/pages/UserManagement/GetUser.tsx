import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import Input from "../../components/Input";

const GetUser = () => {
  const [username, setUsername] = useState<string>("");
  const { request, result, error, loading } = useFetch();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await request("GET", `users?username=${username}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Get an user</h1>
      <Input
        name="username"
        label="Type the username"
        state={username}
        setState={setUsername}
        type="text"
      ></Input>
      <button disabled={loading || !username}>Search</button>

      {result && (
        <div className="user-table">
          <p>Name: {result.givenName}</p>
          <p>DN: {result.dn}</p>
        </div>
      )}
    </form>
  );
};

export default GetUser;
