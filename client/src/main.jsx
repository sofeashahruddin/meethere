//below is from documentation
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import Nav from './Components/Nav.jsx';
import Home from './Components/Home.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Nav />,
        children: [
            { index: true, element: <Home /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

