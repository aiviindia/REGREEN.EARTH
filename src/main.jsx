import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./Pages/Home/Home.jsx";
import AboutUs from "./Pages/AboutUs/AboutUs.jsx";
import Blogs from "./Pages/Blogs/Blogs.jsx";
import ContactUs from "./Pages/ContactUs/ContactUs.jsx";
import Offerings from "./Pages/Offerings/Offerings.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/AboutUs", element: <AboutUs /> },
      { path: "/Blogs", element: <Blogs /> },
      { path: "/ContactUs", element: <ContactUs /> },
      { path: "/Offerings", element: <Offerings /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
