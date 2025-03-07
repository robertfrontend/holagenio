import { useState, useEffect } from "react";

const useRateLimiter = (limit, windowTime) => {
  const [requestCount, setRequestCount] = useState(0);
  const [isLimited, setIsLimited] = useState(false);

  useEffect(() => {
    const storedCount = parseInt(localStorage.getItem("requestCount")) || 0;
    const storedTime =
      parseInt(localStorage.getItem("requestTime")) || Date.now();

    if (Date.now() - storedTime > windowTime) {
      localStorage.setItem("requestCount", 0);
      localStorage.setItem("requestTime", Date.now());
      setRequestCount(0);
    } else {
      setRequestCount(storedCount);
    }

    if (storedCount >= limit) {
      setIsLimited(true);
    }
  }, [limit, windowTime]);

  const incrementRequestCount = () => {
    const newCount = requestCount + 1;
    localStorage.setItem("requestCount", newCount);
    setRequestCount(newCount);

    if (newCount >= limit) {
      setIsLimited(true);
    }
  };

  return { requestCount, isLimited, incrementRequestCount };
};

export default useRateLimiter;
