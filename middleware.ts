import NextAuth from "next-auth";

import authConfig from "@/auth.config";

import { AppRoutes } from "@/constants/app-routes";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  publicRoutes,
  authRoutes,
} from "@/routes";

const { auth } = NextAuth(authConfig);

export default auth((request) => {
  const { nextUrl } = request;
  const pathname = nextUrl.pathname as AppRoutes;
  const isLoggedIn = !!request.auth;

  const isApiAuthRoutes = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoutes = publicRoutes.includes(pathname);
  const isAuthRoutes = authRoutes.includes(pathname);

  if (isApiAuthRoutes) {
    return;
  }

  if (isAuthRoutes) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return;
  }
  if (!isLoggedIn && !isPublicRoutes) {
    return Response.redirect(new URL(AppRoutes.LOGIN, nextUrl));
  }
  return;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
