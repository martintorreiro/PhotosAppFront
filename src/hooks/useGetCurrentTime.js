import { useEffect, useState } from "react";

export const useGetCurrentTime = (ms) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const currentSeconds = Math.round(Number(Date.now() - ms) / 1000);

    const currentMinuts = Math.floor(currentSeconds / 60);
    const currentHours = Math.floor(currentMinuts / 60);
    const currentDays = Math.floor(currentHours / 24);
    const currentWeeks = Math.floor(currentDays / 7);
    if (currentWeeks) {
      setCurrentTime(`${currentWeeks} week${currentWeeks > 1 ? "s" : ""} ago`);
    } else if (currentDays) {
      setCurrentTime(`${currentDays} day${currentDays > 1 ? "s" : ""} ago`);
    } else if (currentHours) {
      setCurrentTime(`${currentHours} hour${currentHours > 1 ? "s" : ""} ago`);
    } else if (currentMinuts) {
      setCurrentTime(
        `${currentMinuts} minut${currentMinuts > 1 ? "s" : ""} ago`
      );
    } else {
      setCurrentTime(
        `${currentSeconds} second${currentSeconds > 1 ? "s" : ""} ago`
      );
    }
  }, [ms]);

  return currentTime;
};
