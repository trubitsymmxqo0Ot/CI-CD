import { AboutPage } from "@/pages/AboutPage/index";
import { MainPage } from "@/pages/MainPage/index";
import { NotFoundPage } from "@/pages/NotFoundPage/index";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "aboute",
  NOT_FOUND = '*',
}

export const PathRoute: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: PathRoute.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: PathRoute.aboute,
    element: <AboutPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: PathRoute["*"],
    element: <NotFoundPage/>
  }
};
