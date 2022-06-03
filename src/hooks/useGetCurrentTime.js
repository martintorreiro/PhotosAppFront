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
      setCurrentTime(`${currentWeeks} weeks`);
    } else if (currentDays) {
      setCurrentTime(`${currentDays} d`);
    } else if (currentHours) {
      setCurrentTime(`${currentHours} h`);
    } else if (currentMinuts) {
      setCurrentTime(`${currentMinuts} m`);
    } else {
      setCurrentTime(`${currentSeconds} s`);
    }
  }, [ms]);

  return currentTime;
};
