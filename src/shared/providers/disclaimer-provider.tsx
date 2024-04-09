import {FC, ReactNode, useEffect} from "react";
import {useNavigate} from "react-router-dom";


interface DisclaimerProviderProps {
    children: ReactNode;
}

export const DisclaimerProvider: FC<DisclaimerProviderProps> = ({children}) => {
    const navigate = useNavigate()
    useEffect(() => {
        const isAgree: boolean | null = Boolean(localStorage.getItem('isAgree'));
        if (!isAgree) {
            navigate('/disclaimer');
        }
    }, [navigate]);
    return (
        <>{children}</>
    );
};
