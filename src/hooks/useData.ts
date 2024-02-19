import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Response<T> {
  count: number;
  results: T[];
}

const useData = <T>(path: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<Response<T>>(path)
      .then((res) => setData(res.data.results))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, error, isLoading };
};

export default useData;
