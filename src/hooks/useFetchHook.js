import { useState } from "react";

const useFetchHook = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(0);
  const request = async (method) => {
    setLoading(true);
    try {
      const response = await method;
      return response.data;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { request, loading, error };
};

export default useFetchHook;
