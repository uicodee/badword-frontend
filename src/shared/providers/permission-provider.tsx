import {FC, ReactNode, useEffect} from "react";
import {useNavigate} from "react-router-dom";


interface PermissionProviderProps {
    children: ReactNode;
}

export const PermissionProvider: FC<PermissionProviderProps> = ({children}) => {
    const navigate = useNavigate()
    useEffect(() => {
        const accessToken: string | null = localStorage.getItem('accessToken');
        if (!accessToken) {
            navigate('/login');
        }
    }, [navigate]);
    return (
        <>{children}</>
    );
};
