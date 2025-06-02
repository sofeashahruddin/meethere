//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css';

function App() {
    //const [count, setCount] = useState(0)
    const router = createBrowserRouter([
        {
            path: "/",
            element: <div>Hello world!</div>,
        },
    ]);
}

    //ReactDOM.createRoot(document.getElementById("root")).render(
    //    <React.StrictMode>
    //        <RouterProvider router={router} />
    //    </React.StrictMode>)

  //return (
  //    <>
  //        <div className="bg-red-200">
  //            <h2>React App</h2>
  //        </div>
  //  </>
  //)

export default App
