import React, { useState } from "react";
import Input from "../../components/Input";
import { useFetch } from "../../hooks/useFetch";

const CreateUser = () => {
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { request, loading, result, error } = useFetch();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await request("POST", "createUser", { name, username, password });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create an user</h1>
      <Input
        name="name"
        label="FullName"
        state={name}
        setState={setName}
        type="text"
      ></Input>
      <Input
        name="username"
        label="Username"
        state={username}
        setState={setUsername}
        type="text"
      ></Input>
      <Input
        name="password"
        label="Password"
        state={password}
        setState={setPassword}
        type="password"
      ></Input>
      <button disabled={loading}>{loading ? "Loading..." : "Send"}</button>
      {error && <p className="text-error">Error: {error}</p>}
      {result && <p className="text-success">Result: {result.toString()}</p>}
    </form>
  );
};

export default CreateUser;
