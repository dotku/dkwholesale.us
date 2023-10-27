import * as React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home/Home";
import KioskVendingMachine from "./pages/KioskVendingMachine/KioskVendingMachine";
import GreenEnergy from "./pages/GreenEnergy/GreenEngergy";
import Merchaindise from "./pages/Merchaindise/Merchaindise";
import Commodity from "./pages/Commodity";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "app",
        element: <App />,
      },
      {
        path: "green-energy",
        element: <GreenEnergy />,
      },
      {
        path: "kiosk-vending-machine",
        element: <KioskVendingMachine />,
      },
      {
        path: "merchaindise",
        element: <Merchaindise />,
      },
      {
        path: "vending-machine",
        element: <KioskVendingMachine />,
      },
      {
        path: "commodity",
        element: <Commodity />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
