"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { AppRoutes } from "@/constants/app-routes";
import { UserButton } from "@/components/auth/user-button";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl w-[600px] shadow-sm">
      <div className="flex gap-x-2">
        <Button
          asChild
          variant={pathname === AppRoutes.SERVER ? "default" : "outline"}
        >
          <Link href={AppRoutes.SERVER}>Server</Link>
        </Button>
        <Button
          asChild
          variant={pathname === AppRoutes.CLIENT ? "default" : "outline"}
        >
          <Link href={AppRoutes.CLIENT}>Client</Link>
        </Button>
        <Button
          asChild
          variant={pathname === AppRoutes.ADMIN ? "default" : "outline"}
        >
          <Link href={AppRoutes.ADMIN}>Admin</Link>
        </Button>
        <Button
          asChild
          variant={pathname === AppRoutes.SETTINGS ? "default" : "outline"}
        >
          <Link href={AppRoutes.SETTINGS}>Settings</Link>
        </Button>
      </div>
      <UserButton />
    </nav>
  );
};

export { Navbar };
