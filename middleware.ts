import authConfig from "./auth.config"
import NextAuth  from "next-auth"
import{DEFAULT_LOGIN_REDIRECT, apiAuthPrefix, publicRoutes, authRoutes} from '@/routes'

const {auth} = NextAuth(authConfig)

export default auth((request) => {
 const {nextUrl} = request
 const isLoggedIn = !!request.auth

 const isApiAuthRoutes = nextUrl.pathname.startsWith(apiAuthPrefix)
 const isPublicRoutes = publicRoutes.includes(nextUrl.pathname)
 const isAuthRoutes = authRoutes.includes(nextUrl.pathname)

 if(isApiAuthRoutes){
    return
 }

 if (isAuthRoutes) {
    if(isLoggedIn){
        return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }
    return
 }
 if(!isLoggedIn && !isPublicRoutes){
    return Response.redirect(new URL('/auth/login', nextUrl))
 }
 return
})

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
  };