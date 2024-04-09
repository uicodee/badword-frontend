import {RouteObject} from "react-router-dom";
import {PageLayout} from "@/shared/ui";
import {lazy} from "react";
import {PermissionProvider} from "@/shared/providers";
import {DisclaimerProvider} from "@/shared/providers/disclaimer-provider.tsx";


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
const DisclaimerPage = lazy(() =>
    import("@/pages/disclaimer-page").then((module) => ({
        default: module.DisclaimerPage,
    })),
);

export const paths: RouteObject[] = [
    {
        path: "/",
        element: <DisclaimerProvider><PageLayout/></DisclaimerProvider>,
        children: [
            {
                path: "login",
                element: <LoginPage/>,
            },
            {
                path: "disclaimer",
                element: <DisclaimerPage/>
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
