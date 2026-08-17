import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Homepage from "../views/Homepage";
import Info from "../views/Info";
import { getPostsLoader } from "../components/loaders";
import { getPostLoader } from "../components/loaders";
import Detail from "../views/Detail";
import Register from "../views/Register";
import Login from "../views/Login";



let router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Homepage,
        
      },
       {
        path: "/info",
        Component: Info,
        loader: getPostsLoader,
      },
       {
        path: "/info/detail/:id",
        Component: Detail,
        loader:getPostLoader
      },
       {
        path: "/register",
        Component: Register,
        
      },
       {
        path: "/login",
        Component: Login,
        
      },
    ],
  },
]);

export default router;
