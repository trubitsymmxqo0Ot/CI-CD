import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routeConfig } from "@/shared/config/routeConfig/routeConfig";
import { PageLoader } from "@/widgets/PageLoader/index";

export default function AppRouter() {
  return (
    <Routes>
      {Object.values(routeConfig).map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<PageLoader />}>
              <div className="main-content">{element}</div>
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
}
