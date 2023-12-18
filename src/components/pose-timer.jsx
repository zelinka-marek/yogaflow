import { useState } from "react";
import useSound from "use-sound";
import chimeSfx from "../assets/chime.mp3";
import { useCountdownTimer } from "../utils/use-countdown-timer.js";

function OpenPoseTimer() {
  const [play] = useSound(chimeSfx);
  const { seconds, running, isDone, start, pause, restart } = useCountdownTimer(
    { initialSeconds: 30, onDone: () => play() },
  );
  const countdown = `00:${seconds.toString().padStart(2, "0")}`;

  return (
    <div className="mx-auto max-w-xs px-8">
      <p className="text-base font-semibold text-gray-600">
        {isDone ? "You did id! Nice job!" : "Hold the pose"}
      </p>
      <p className="mt-6 text-xs leading-5 text-gray-600">
        {isDone
          ? "Purrrfect!"
          : "Try staying in this pose for 30 sec. If you need to come out sooner, that's ok."}
      </p>
      {!isDone ? (
        <p className="mt-6 text-5xl font-bold tracking-tight text-gray-900">
          {countdown}
        </p>
      ) : null}
      <button
        type="button"
        onClick={() => (isDone ? restart() : running ? pause() : start())}
        className="mt-10 block w-full rounded-md bg-amber-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
      >
        {isDone ? "Start over" : running ? "Stop the timer" : "Start the timer"}
      </button>
    </div>
  );
}

function ClosedPoseTimer({ onOpen }) {
  return (
    <div className="mx-auto max-w-xs px-8">
      <p className="text-base font-semibold text-gray-600">Have a go</p>
      <button
        type="button"
        onClick={onOpen}
        className="mt-6 block w-full rounded-md bg-amber-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
      >
        Try this pose
      </button>
    </div>
  );
}

export function PoseTimer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5">
      {isOpen ? (
        <OpenPoseTimer />
      ) : (
        <ClosedPoseTimer onOpen={() => setIsOpen(true)} />
      )}
    </div>
  );
}
