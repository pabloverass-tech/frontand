// import { Button } from "@/components/ui/button";

import { Toaster } from "sonner";
import { router } from "./routes";
import { RouterProvider } from "react-router-dom";
// import { Toaster } from 'sonner'

export function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster richColors  />
    </>
  );
}
