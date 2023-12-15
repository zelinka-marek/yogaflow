import { useLoaderData } from "react-router-dom";

export default function Pose() {
  let { pose } = useLoaderData();

  return (
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
  );
}
