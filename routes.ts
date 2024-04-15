import { ApiRoutes } from "./constants/api-routes";
import { AppRoutes } from "./constants/app-routes";

export const publicRoutes = [AppRoutes.ROOT, AppRoutes.VERIFICATION];

export const authRoutes = [
  AppRoutes.LOGIN,
  AppRoutes.REGISTER,
  AppRoutes.ERROR,
  AppRoutes.FORGOT_PASSWORD,
  AppRoutes.RESET_PASSWORD,
  AppRoutes.RESET,
  AppRoutes.NEW_PASSWORD,
];

export const apiAuthPrefix = ApiRoutes.API_PREFIX;

export const DEFAULT_LOGIN_REDIRECT = AppRoutes.SETTINGS;
