import {FC} from "react";

export const Spinner: FC = () => {
    return (
        <div className="flex flex-col w-full h-full justify-center items-center">
            <div className='flex space-x-2 justify-center items-center bg-white h-screen dark:bg-transparent'>
                <span className='sr-only'>Loading...</span>
                <div className='h-8 w-8 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                <div className='h-8 w-8 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                <div className='h-8 w-8 bg-primary rounded-full animate-bounce'></div>
            </div>
        </div>
    );
};
