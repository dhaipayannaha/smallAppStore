import { createBrowserRouter } from "react-router";
import RootLayouts from "../layOuts/RootLayouts";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import Installation from "../pages/Installation";
import NotFound from "../pages/NotFound";
import AppDetails from "../pages/AppDetails";


import About from "../pages/About";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayouts,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/apps",
                Component: Apps
            },
            {
                path: "/apps/:id",
                Component: AppDetails
            },
            {
                path: "/installation",
                Component: Installation
            },
            {
                path: "/about",
                Component: About
            },
            {
                path: "/contact",
                Component: Contact
            },
            {
                path: "*",
                Component: NotFound
            }
        ],
    },
]);