import { FC } from "react";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

type Properties = {
  label: string;
};

const Header: FC<Properties> = ({ label }) => {
  return (
    <div className="w-full flex flex-col gapy-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold", font.className)}>🔑 Auth</h1>
      <p className="tex-muted-foreground text-sm">{label}</p>
    </div>
  );
};

export { Header };
