"use client";

import { FC } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

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
