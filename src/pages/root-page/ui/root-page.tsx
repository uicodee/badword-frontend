import {FC, Suspense} from "react";
import {Spinner, Toaster} from "@/shared/ui";
import {Outlet} from "react-router-dom";

export const RootPage: FC = () => {
    return (
        <>
            <Suspense fallback={<Spinner/>}>
                <div className="flex-grow w-full bg-muted/40 px-2 md:px-10 py-5">
                    <Outlet/>
                    <Toaster/>
                </div>
            </Suspense>
        </>
    );
};
