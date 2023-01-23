import { useState, useEffect } from "react";

const useCounter = (action) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (action === "ADD") {
        setCounter((prevCounter) => prevCounter + 1);
      } else if(action === "MINUS") {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [action]);

  return counter;
};

export default useCounter;
