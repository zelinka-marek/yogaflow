import { Link, useLoaderData } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Poses() {
  let { poseListItems } = useLoaderData();

  return (
    <div>
      <div className="border-b border-gray-200 pb-2">
        <h3 className="text-base/6 font-semibold text-gray-900">Poses</h3>
      </div>
      <ul role="list" className="divide-y divide-gray-100">
        {poseListItems.map((pose) => (
          <li
            key={pose.id}
            className="group relative flex items-center gap-6 py-5"
          >
            <pose.icon className="h-12 w-auto flex-none text-amber-600" />
            <p className="flex-auto truncate text-sm font-semibold leading-6 text-gray-900">
              <Link to={`pose/${pose.id}`}>
                <span className="absolute inset-x-0 -top-px bottom-0" />
                {pose.name}
              </Link>
            </p>
            <ChevronRightIcon className="h-5 w-5 flex-none text-gray-400 group-hover:text-gray-900" />
          </li>
        ))}
      </ul>
    </div>
  );
}
