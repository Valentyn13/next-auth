"use client";

import { FC } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

type Properties = {
  href: string;
  label: string;
};

const BackButton: FC<Properties> = ({ label, href }) => {
  return (
    <Button variant="link" className="font-normal w-full" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export { BackButton };
