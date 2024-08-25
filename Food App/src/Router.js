import { createBrowserRouter } from "react-router-dom";
import Login from "./component/Login";
import Registeration from "./component/Registeration";
import App from "./App";
import ReserveSeats from "./component/ReserveSeats";
import TheatreList from "./component/TheatreList";

import Drink from "./component/Drink";
import Food from "./component/Food";
import Home from "./component/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Registeration/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/home",
    element: <App />,
    
    children: [
     
      {
        path: "/home/register",
        element: <Registeration />,
      },
      {
        path: "/home/login",
        element: <Login />,
      },
      {
        path: "/home/reserveSeats",
        element: <TheatreList />,
      },
      {
        path: "/home/seats/:id",
        element: <ReserveSeats />,
      },
      {
        path: "/home/drink",
        element: <Drink />,
      },
      {
        path: "/home/food",
        element: <Food />,
      },
    ],
  },
]);
