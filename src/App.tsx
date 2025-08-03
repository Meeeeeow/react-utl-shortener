import "./App.css";
import {
  createBrowserRouter,
  Link,
  Router,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./layouts/app-layout";
import LandingPage from "./pages/landing-page";
import Auth from "./pages/auth";
import Dashboard from "./pages/dashboard";
import LinkPage from "./pages/link-page";
import RedirectLink from "./pages/redirect-link";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/auth",
          element: <Auth />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/link/:linkId",
          element: <LinkPage />,
        },
        {
          path: "/:linkId",
          element: <RedirectLink />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
