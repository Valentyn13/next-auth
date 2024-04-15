'use client'

import { useCurrentRole } from "@/hooks/use-current-role";
import { UserRole } from "@prisma/client";
import { FormError } from "../form-error";

type Properties = {
    children: React.ReactNode;
    allowedRoles: UserRole
}

export const RoleGate = ({ children, allowedRoles }: Properties) => {
    const role = useCurrentRole();
    if (role !== allowedRoles) {
        return <FormError message="You don't have permission to view this content"/>
    } else {
        <>
            {children}
        </>
    }
}