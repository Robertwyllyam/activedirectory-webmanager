import React, { createContext, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import Login from "../pages/Login/Login";
import { api } from "../services/api";

export interface AuthContextInterface {
  authenticated: boolean;
  token: string;
  setAuthenticated: (val: boolean) => void;
}

export const AuthContext = createContext<AuthContextInterface | undefined>(
  undefined
);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { request, loading, error, result } = useFetch();
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    (async () => {
      const localToken = localStorage.getItem("AUTH");
      api.defaults.headers.common.Authorization = localToken;
      const data = await request("GET", "validateToken");
      if (data) {
        setAuthenticated(true);
      } else {
        localStorage.clear();
      }
    })();
  }, []);

  if (loading) {
    return <div>Validating your access...</div>;
  }

  return (
    <AuthContext.Provider value={{ authenticated, token, setAuthenticated }}>
      {authenticated && !loading ? children : <Login />}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
