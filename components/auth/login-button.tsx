"use client";

import { FC, ReactNode } from "react";
import { useRouter } from "next/navigation";

type Properties = {
    children: ReactNode;
    mode?: "modal" | "redirect";
    asChild?: boolean;
}

const LoginButton:FC<Properties> = ({children, mode = 'redirect', asChild}) => {
    const router = useRouter();
    const onClick = () => {
        router.push('/auth/login')
    }

    if(mode === 'modal'){
        return(
            <span>
                TODO: implement modal
            </span>
        )
    }

    return(
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    )
}

export {LoginButton}