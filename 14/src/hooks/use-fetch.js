import { useState } from "react";

const URL =
  "https://react-fetch-api-learning-default-rtdb.europe-west1.firebasedatabase.app/tasks.json";

const useFetch = (requestHeaders, onSuccessFn, onErrorFn) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTasks = async (taskText) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(URL, requestHeaders);

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      onSuccessFn(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
      onErrorFn(err);
    }
    setIsLoading(false);
  };
  return { isLoading, error };
};

export default useFetch;
