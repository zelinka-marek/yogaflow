import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { Link, useLoaderData } from "react-router-dom";
import { PoseTimer } from "../components/pose-timer.jsx";

export default function Pose() {
  let { pose } = useLoaderData();

  return (
    <>
      <nav className="border-b border-gray-200" aria-label="Back">
        <div className="mx-auto max-w-2xl px-4 py-3 sm:px-6 lg:px-8">
          <Link
            to="/poses"
            className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            <ChevronLeftIcon className="-ml-1 h-5 w-5 flex-none text-gray-400" />
            Back
          </Link>
        </div>
      </nav>
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="space-y-10">
          <div>
            <pose.icon className="mx-auto h-20 w-20 rounded-full text-amber-600" />
            <div className="mt-4 text-center">
              <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
                {pose.name}
              </h1>
              <p className="text-sm font-medium text-gray-600">{pose.asana}</p>
            </div>
          </div>
          <PoseTimer />
          <div>
            <p className="mt-6 text-sm/6 text-gray-700">{pose.description}</p>
            <h2 className="mt-6 text-base font-semibold leading-7 text-gray-900">
              Steps
            </h2>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm/6 text-gray-700">
              {pose.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
            <h2 className="mt-6 text-base font-semibold leading-7 text-gray-900">
              Top tip
            </h2>
            <p className="mt-2 text-sm/6 text-gray-700">{pose.topTip}</p>
          </div>
        </div>
      </div>
    </>
  );
}
