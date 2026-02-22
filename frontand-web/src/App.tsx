// import { Button } from "@/components/ui/button";

import { Toaster } from "sonner";
import { router } from "./routes";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/theme/theme-provider";
// import { Toaster } from 'sonner'

export function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="layout_novo_theme">
        <RouterProvider router={router} />
        <Toaster richColors  />
      </ThemeProvider>
    </>
  );
}
