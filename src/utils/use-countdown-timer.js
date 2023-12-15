import { useCallback, useEffect, useState } from "react";

export function useCountdownTimer({
  initialSeconds = 30,
  initiallyRunning = false,
} = {}) {
  let [seconds, setSeconds] = useState(initialSeconds);
  let [running, setRunning] = useState(initiallyRunning);

  let isDone = seconds === 0;

  function start() {
    return setRunning(true);
  }

  function pause() {
    return setRunning(false);
  }

  let restart = useCallback(() => {
    setSeconds(initialSeconds);
    setRunning(false);
  }, [initialSeconds]);

  useEffect(() => {
    let intervalId = setInterval(() => {
      if (running) {
        setSeconds((seconds) => {
          let nextSeconds = seconds - 1;
          if (nextSeconds === 0) {
            pause();
          }

          return nextSeconds;
        });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [restart, running]);

  return { seconds, running, isDone, start, pause, restart };
}
