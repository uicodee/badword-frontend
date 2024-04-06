import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Spinner, Toaster } from "@/shared/ui";
import { ThemeProvider } from "@/shared/providers";

export const PageLayout: FC = () => {
  return (
    <ThemeProvider>
      <Suspense fallback={<Spinner />}>
        <div className="h-full flex flex-col">
          <Outlet />
          <Toaster />
        </div>
      </Suspense>
    </ThemeProvider>
  );
};
