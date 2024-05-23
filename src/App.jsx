import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { About, Collections, Contact, Home, Men, Women } from "./pages";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "collections",
          element: <Collections />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "men",
          element: <Men />,
        },
        {
          path: "women",
          element: <Women />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
