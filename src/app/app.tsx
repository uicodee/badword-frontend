import {FC} from "react";
import {RouterProvider} from "react-router-dom";
import {router} from "@/shared/router";

export const App: FC = () => {
    return <RouterProvider router={router}></RouterProvider>
}