"use client";

import { ReactNode, FC } from "react";

import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { AppRoutes } from "@/constants/app-routes";
import { BackButton } from "@/components/auth/back-button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

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
