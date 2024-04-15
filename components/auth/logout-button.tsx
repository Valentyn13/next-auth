"use client";

import { logout } from "@/actions/logout";
import { ReactNode, FC } from "react";

type Properties = {
  children?: ReactNode;
};

const LogoutButton: FC<Properties> = ({ children }) => {
  const handleLogout = () => {
    logout();
  };

  return (
    <span onClick={handleLogout} className="cursor-pointer">
      {children}
    </span>
  );
};

export { LogoutButton };
