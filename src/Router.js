import * as React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home/Home";
import KioskVendingMachine from "./pages/KioskVendingMachine/KioskVendingMachine";
import GreenEnergy from "./pages/GreenEnergy/GreenEngergy";
import Merchaindise from "./pages/Merchaindise/Merchaindise";
import Commodity from "./pages/Commodity";
import LunarNewYearFestivalProducts from "./components/Vendors/ZYIntl/LunarNewYearFesstivalProducts";
import IPhone from "./pages/iPhone/IPhone";
import NetlifyContactForm from "./components/ContactUs/NetlifyContactForm";
import DistributorsPage from "./pages/Distributors";
import TiktokShop from "./pages/Tiktokshop";
import Partners from "./pages/Partners";
import HomeMain from "./pages/Home/HomeMain";
import LogisticsPage from "./pages/Logistics/LogisticsPage";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <HomeMain />,
      },
      {
        path: "app",
        element: <App />,
      },
      {
        path: "partners",
        element: <Partners />,
      },
      {
        path: "distributors",
        element: <DistributorsPage />,
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
        path: "logistics",
        element: <LogisticsPage />,
      },
      {
        path: "tiktokshop",
        element: <TiktokShop />,
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
      {
        path: "lunar-new-year-festival-products",
        element: <LunarNewYearFestivalProducts />,
      },
      {
        path: "iphone",
        element: <IPhone />,
      },
      {
        path: "netlify-contact-form",
        element: <NetlifyContactForm />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
