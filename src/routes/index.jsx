import { Link } from "react-router-dom";
import { Logo } from "../components/logo.jsx";

export default function Index() {
  return (
    <div className="flex min-h-full flex-col items-center justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
        <Logo className="mx-auto h-8 w-auto text-amber-600" />
        <div className="mt-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Welcome to YogaFlow
          </h1>
          <p className="mt-6 text-lg/8 text-gray-600">
            Your favorite cat-themed yoga app.
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            to="/poses"
            className="rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
}
