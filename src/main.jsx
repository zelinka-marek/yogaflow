import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { getAllPoses } from "./api/poses.jsx";
import { ErrorPage } from "./components/error-page.jsx";
import "./index.css";
import Root from "./root.jsx";
import Poses from "./routes/poses.jsx";

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      errorElement={
        <div className="flex h-full items-center justify-center">
          <ErrorPage />
        </div>
      }
    >
      <Route errorElement={<ErrorPage />}>
        <Route
          index
          element={<Poses />}
          loader={() => {
            let poseListItems = getAllPoses();

            return { poseListItems };
          }}
        />
      </Route>
    </Route>,
  ),
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
    },
  },
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
