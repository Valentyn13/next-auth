"use client";
import { UserRole } from "@prisma/client";

import { useCurrentRole } from "@/hooks/use-current-role";
import { FormError } from "@/components/form-error";

type Properties = {
  children: React.ReactNode;
  allowedRoles: UserRole;
};

const RoleGate = ({ children, allowedRoles }: Properties) => {
  const role = useCurrentRole();
  if (role !== allowedRoles) {
    return (
      <FormError message="You don't have permission to view this content" />
    );
  } else {
    <>{children}</>;
  }
};

export { RoleGate };
