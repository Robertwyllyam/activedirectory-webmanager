import React, { useState } from "react";
import { api } from "../services/api";

export const useFetch = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  async function request(method: string, endpoint: string, body?: Object) {
    try {
      setResult(null);
      setError(null);
      setLoading(true);
      const { data } = await api.request({
        method,
        url: `http://localhost:5000/${endpoint}`,
        data: body,
      });
      setResult(data);
    } catch (err: any) {
      const errorMessage = err?.response?.data ?? err.toString();
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  return { loading, result, error, request };
};
