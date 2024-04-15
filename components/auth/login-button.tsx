"use client";

import { FC, ReactNode } from "react";
import { useRouter } from "next/navigation";

import { AppRoutes } from "@/constants/app-routes";

type Properties = {
  children: ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
};

const LoginButton: FC<Properties> = ({
  children,
  mode = "redirect",
}) => {
  const router = useRouter();
  const onClick = () => {
    router.push(AppRoutes.LOGIN);
  };

  if (mode === "modal") {
    return <span>TODO: implement modal</span>;
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};

export { LoginButton };
