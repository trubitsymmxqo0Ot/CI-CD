import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@/app/providers/ThemeProviders/index";
import App from "./app/App";
import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import "@/shared/config/i18n/i18n";
import { PageLoader } from "@/widgets/PageLoader/index"
import { ErrorBoundary } from "@/app/providers/ErrorBoundary/index";

const root = document.getElementById("root");
if (!root) throw new Error("root is not found");

const container = createRoot(root);
container.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Suspense fallback={<PageLoader/>}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
