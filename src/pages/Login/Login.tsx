import React, { useContext, useState } from "react";
import Input from "../../components/Input";
import { useFetch } from "../../hooks/useFetch";
import { AuthContext, AuthContextInterface } from "../../contexts/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const nav = useNavigate();
  const { authenticated, setAuthenticated } = useContext(
    AuthContext
  ) as AuthContextInterface;

  const { request, loading, result, error } = useFetch();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const data = await request("POST", "login", { username, password });
    if (data.token) {
      setAuthenticated(true);
      localStorage.setItem("AUTH", data.token);
      api.defaults.headers.common.Authorization = data.token;
      return nav("/");
    }
  }

  if (authenticated) {
    return <Navigate to="/"></Navigate>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          name="username"
          state={username}
          setState={setUsername}
          label="Username"
        ></Input>
        <Input
          name="password"
          state={password}
          setState={setPassword}
          label="Password"
          type="password"
        ></Input>
        <button disabled={loading || [username, password].some((i) => !i)}>
          Login
        </button>
        {error && <p className="text-error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
