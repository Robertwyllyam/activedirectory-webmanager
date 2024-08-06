import React, { useState } from "react";
import Input from "../components/Input";
import { api } from "../services/api";

const PasswordReset = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<any>("");
  const [error, setError] = useState<any>("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      setResult(null);
      setError(null);
      setLoading(true);
      const { data } = await api.post("/pwreset", { username, password });
      setResult(data);
    } catch (err: any) {
      setError(err.toString());
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Password Reset</h1>
      <Input
        name="username"
        label="Username (SamAccountName)"
        state={username}
        setState={setUsername}
        type="text"
      ></Input>
      <Input
        name="Password"
        label="New Password"
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

export default PasswordReset;
