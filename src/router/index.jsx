import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Content from "../pages/Content";
import User from "../pages/User";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "content",
                element: <Content />
            },
            {
                path: "user",
                element: <User />
            }
        ]
    },
]);

export default router;