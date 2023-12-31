import { Outlet } from "react-router-dom";
import { Logo } from "../components/logo.jsx";

export default function Layout() {
  return (
    <div className="min-h-full ">
      <nav className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16">
            <div className="flex flex-none items-center">
              <Logo className="h-8 w-auto text-amber-600" />
            </div>
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
