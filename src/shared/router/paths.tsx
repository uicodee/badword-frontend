import {RouteObject} from "react-router-dom";
import {PageLayout} from "@/shared/ui";
import {lazy} from "react";
import {PermissionProvider} from "@/shared/providers";


const LoginPage = lazy(() =>
    import("@/pages/login-page").then((module) => ({
        default: module.LoginPage,
    })),
);
const RootPage = lazy(() =>
    import("@/pages/root-page").then((module) => ({default: module.RootPage})),
);
const HomePage = lazy(() =>
    import("@/pages/home-page").then((module) => ({default: module.HomePage})),
);
const AdminPage = lazy(() =>
    import("@/pages/admin-page").then((module) => ({
        default: module.AdminPage,
    })),
);
const NotFoundPage = lazy(() =>
    import("@/pages/not-found-page").then((module) => ({
        default: module.NotFoundPage,
    })),
);
const InternalServerErrorPage = lazy(() =>
    import("@/pages/internal-server-error-page").then((module) => ({
        default: module.InternalServerErrorPage,
    })),
);

export const paths: RouteObject[] = [
    {
        path: "/",
        element: <PageLayout/>,
        children: [
            {
                path: "login",
                element: <LoginPage/>,
            },
            {
                path: "/",
                element: <RootPage/>,
                children: [
                    {index: true, element: <HomePage/>},
                    {path: "admin", element: <PermissionProvider><AdminPage/></PermissionProvider>},
                ],
                errorElement: <InternalServerErrorPage/>,
            },
            {
                path: "*",
                element: <NotFoundPage/>,
            },
        ],
    },
];
