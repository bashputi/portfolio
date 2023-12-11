import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MainLayOut from "./MainLayOut";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Project from "./components/pages/Project";


const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path: '/',
                element: <App></App>,

            },
            {
                path: '/about',
                element: <About></About>,

            },
            {
                path: '/contact',
                element: <Contact></Contact>,

            },
            {
                path: '/project',
                element: <Project></Project>,

            }
        ]
    },
  ]);

export default myRouter;