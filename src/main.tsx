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
import Event360Provider from "./Provider/Event360Provider";
import EventItems from "./Pages/Dashboard/EventItems/EventItems";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
      {
        path: "event-items",
        element: <EventItems />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Event360Provider>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </Event360Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
