"use client";

import { ReactNode, FC } from "react";

import { logout } from "@/actions/logout";

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
