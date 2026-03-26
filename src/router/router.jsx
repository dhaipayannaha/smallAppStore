import { createBrowserRouter } from "react-router";
import RootLayouts from "../layOuts/RootLayouts";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import Installation from "../pages/Installation";
import NotFound from "../pages/NotFound";


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
                path: "/installation",
                Component: Installation
            },
            {
                path: "*",
                Component: NotFound
            }
        ],
    },
]);