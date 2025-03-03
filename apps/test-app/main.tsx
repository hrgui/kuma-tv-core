import "./polyfills";
import "./index.css";

import eventBus from "@hrgui/kuma-tv-core-api-eda-client/eventEmitter";
import { init as setupApiEdaClient } from "@hrgui/kuma-tv-core-mock-eda-client";
import { createAppRouter } from "@hrgui/kuma-tv-test-app-router/createRouter";
import { auth } from "@hrgui/kuma-tv-test-app-router/createRouteTree";
import { queryClient } from "@hrgui/kuma-tv-core-query-client";
import { init as setupSpatialNavigation } from "@hrgui/spatial-navigation-core";

import { StrictMode } from "react";
import { Container, createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import App from "./App.tsx";

export function bootstrap(el: Container) {
  setupApiEdaClient(eventBus);
  setupSpatialNavigation({
    debug: import.meta.env.VITE_TEREBI_SPATIAL_NAV_DEBUG === "1",
    visualDebug: import.meta.env.VITE_TEREBI_SPATIAL_NAV_VISUAL_DEBUG === "1",
    useGetBoundingClientRect: true,
  });
  const router = createAppRouter({ auth, queryClient });
  createRoot(el).render(
    <StrictMode>
      <App routerProvider={<RouterProvider router={router} />} />
    </StrictMode>
  );
}
