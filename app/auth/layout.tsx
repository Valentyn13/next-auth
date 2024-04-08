import { FC, ReactNode } from "react";

type Properties = {
    children: ReactNode;
}

const AuthLayout:FC<Properties> = ({ children }) => {
    return (
        <div className="h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
            {children}
        </div>
    );
}

export default AuthLayout;