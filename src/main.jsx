import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  json,
} from "react-router-dom";
import * as poseApi from "./api/poses.jsx";
import { ErrorPage } from "./components/error-page.jsx";
import Layout from "./components/layout.jsx";
import "./index.css";
import Root from "./root.jsx";
import Index from "./routes/index.jsx";
import Pose from "./routes/pose.jsx";
import Poses from "./routes/poses.jsx";

const router = createBrowserRouter(
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
        <Route index element={<Index />} />
        <Route element={<Layout />}>
          <Route
            path="poses"
            element={<Poses />}
            loader={() => {
              const poseListItems = poseApi.getAll();

              return { poseListItems };
            }}
          />
          <Route
            path="poses/:poseId"
            element={<Pose />}
            loader={({ params }) => {
              const pose = poseApi.getById(params.poseId);
              if (!pose) {
                throw json(
                  { pose },
                  {
                    status: 404,
                    statusText: `Pose by id "${params.poseId}" not found`,
                  },
                );
              }

              return { pose };
            }}
          />
        </Route>
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
