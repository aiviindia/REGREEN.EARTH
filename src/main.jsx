import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import AboutUs from "./Pages/AboutUs/AboutUs.jsx";
import Blogs from "./Pages/Blogs/Blogs.jsx";
import ContactUs from "./Pages/ContactUs/ContactUs.jsx";
import Offerings from "./Pages/Offerings/Offerings.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/AboutUs",
    element: <AboutUs />,
  },
  {
    path: "/Blogs",
    element: <Blogs />,
  },
  {
    path: "/ContactUs",
    element: <ContactUs />,
  },
  {
    path: "Offerings",
    element: <Offerings />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
