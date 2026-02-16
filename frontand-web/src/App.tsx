// import { Button } from "@/components/ui/button";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { router } from "./routes";
import { RouterProvider } from "react-router-dom";

export function App() {
  // return <RouterProvider router={router} />;
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
  
}
