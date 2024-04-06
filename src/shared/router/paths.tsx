import { RouteObject } from "react-router-dom";
import { PageLayout } from "@/shared/ui";
import { lazy } from "react";

const LoginPage = lazy(() =>
  import("@/pages/login-page").then((module) => ({
    default: module.LoginPage,
  })),
);
const RootPage = lazy(() =>
  import("@/pages/root-page").then((module) => ({ default: module.RootPage })),
);
const HomePage = lazy(() =>
  import("@/pages/home-page").then((module) => ({ default: module.HomePage })),
);
const AdminPage = lazy(() =>
  import("@/pages/admin-page").then((module) => ({
    default: module.AdminPage,
  })),
);

export const paths: RouteObject[] = [
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "/",
        element: <RootPage />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "admin", element: <AdminPage /> },
        ],
      },
      // {
      //   path: "*",
      //   element: <NotFound />,
      // },
    ],
  },
];
