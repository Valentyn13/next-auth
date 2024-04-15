"use client";

import { ReactNode, FC } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Header } from "./header";
import { Social } from "./social";
import { BackButton } from "./back-button";
import { AppRoutes } from "@/constants/app-routes";

type Properties = {
  children: ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: AppRoutes;
  showSocial?: boolean;
};

const CardWrapper: FC<Properties> = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial = false,
}) => {
  return (
    <Card className="w-[400px] shadow-md p-3">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && <Social />}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};

export { CardWrapper };
