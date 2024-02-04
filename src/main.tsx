import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Main from "./Layout/Main/Main";
import Home from "./Pages/Home/Home/Home";
import DashboardLayout from "./Layout/DashboardLayout/DashboardLayout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Events from "./Pages/Dashboard/Events/Events";
import EventServices from "./Pages/Dashboard/EventServices/EventServices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard/my-dashboard" />,
      },
      {
        path: "my-dashboard",
        element: <Dashboard />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "event-services",
        element: <EventServices />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
