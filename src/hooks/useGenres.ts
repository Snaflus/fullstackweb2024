import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface Genre {
  id: number;
  name: string;
}

interface GenreResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<GenreResponse>("genres")
      .then((res) => setGenres(res.data.results))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
