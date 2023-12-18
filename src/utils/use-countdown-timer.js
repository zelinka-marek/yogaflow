import { useEffect, useState } from "react";

export function useCountdownTimer({
  initiallyRunning = false,
  initialSeconds = 30,
} = {}) {
  const [running, setRunning] = useState(initiallyRunning);
  const [seconds, setSeconds] = useState(initialSeconds);
  const isDone = seconds === 0;

  function start() {
    return setRunning(true);
  }

  function pause() {
    return setRunning(false);
  }

  function restart() {
    setSeconds(initialSeconds);
    setRunning(false);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (running) {
        setSeconds((seconds) => {
          const nextSeconds = seconds - 1;
          if (nextSeconds === 0) {
            pause();
          }

          return nextSeconds;
        });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [running]);

  return { seconds, running, isDone, start, pause, restart };
}
