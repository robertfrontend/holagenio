import { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { GetDataUserById } from "@/api";

const useRateLimiter = (defaultLimit, windowTime) => {
  const { user } = UserAuth();

  const [requestCount, setRequestCount] = useState(0);
  const [isLimited, setIsLimited] = useState(false);
  const [userInfo, setUserInfo] = useState("");
  const [limit, setLimit] = useState(defaultLimit);

  const fullRateLimit = 200;

  useEffect(() => {
    if (user) {
      handleDBUser(user.uid);
    } else {
      console.log("no user rate limit");
    }
  }, [user]);

  const handleDBUser = async (id) => {
    const userResponse = await GetDataUserById(id);
    setUserInfo(userResponse);

    if (userResponse && userResponse.plan === "Standard") {
      setLimit(fullRateLimit);
      console.log("Change plan to Standard");
    } else {
      setLimit(defaultLimit);
      console.log("Free plan");
    }
  };

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
    } else {
      setIsLimited(false);
    }
  }, [windowTime, limit]);

  const incrementRequestCount = () => {
    const newCount = requestCount + 1;
    localStorage.setItem("requestCount", newCount);
    setRequestCount(newCount);

    if (newCount >= limit) {
      setIsLimited(true);
    } else {
      setIsLimited(false);
    }
  };

  return { requestCount, isLimited, incrementRequestCount };
};

export default useRateLimiter;
