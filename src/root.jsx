import { Outlet } from "react-router-dom";
import { Logo } from "./logo.jsx";

export default function Root() {
  return (
    <div className="min-h-full">
      <nav className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16">
            <div className="flex flex-none items-center">
              <Logo
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
            </div>
          </div>
        </div>
      </nav>
      <main className="py-10">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
