import VideoPlayerPage from "@hrgui/kuma-tv-core-video-player-page";
import BrowsePage from "@hrgui/kuma-tv-core-browse-page";
import SeriesPage from "@hrgui/kuma-tv-core-series-page";
import SearchPage from "@hrgui/kuma-tv-core-search-page";
import HistoryPage from "@hrgui/kuma-tv-core-history-page";
import { Root } from "@hrgui/kuma-tv-core-react-component-app-root";
import ErrorPage from "@hrgui/kuma-tv-core-error-page";
import EntryPage from "@hrgui/kuma-tv-core-entry-page";
import LoginPage from "@hrgui/kuma-tv-core-login-page";
import SettingsPage from "@hrgui/kuma-tv-core-settings-page";
import WatchlistPage from "@hrgui/kuma-tv-core-watchlist-page";
import HomePage from "@hrgui/kuma-tv-core-home-page";

import { createRootRouteWithContext, createRoute, redirect } from "@tanstack/react-router";
import { fetchAsEventsToPromise } from "@hrgui/kuma-tv-core-api-eda-client/fetchAsEventsToPromise";
import { Session } from "@hrgui/kuma-tv-core-api-eda-client/types";
import { QueryClient } from "@tanstack/react-query";

export type RouterAuth = {
  data?: Session;
  resolved?: boolean;
  loader: () => Promise<Session>;
  invalidate: () => void;
  loaderPromise?: Promise<Session>;
  startLoading: () => Promise<Session>;
};

export type RouterContext = {
  auth: RouterAuth;
  queryClient: QueryClient;
};

export const auth: RouterAuth = {
  resolved: false,
  loader: async () => {
    const data = await fetchAsEventsToPromise({
      id: "session",
      requestEventName: "session/request",
      responseEventName: "session/response",
      errorEventName: "session/error",
      cancelEventName: "session/cancel",
      requestParams: {},
    });
    auth.data = data as Session;
    auth.resolved = true;
    return data as Session;
  },
  startLoading: async () => {
    const promise = auth.loader();
    auth.loaderPromise = promise;
    const res = await auth.loaderPromise;
    return res;
  },
  invalidate: () => {
    auth.resolved = false;
    auth.data = undefined;
  },
};

const rootRoute = createRootRouteWithContext<RouterContext>()({
  component: Root,
  errorComponent: ErrorPage,
  loader: async ({ context }) => {
    if (context.auth.resolved) {
      return context.auth.data;
    } else {
      return context.auth.startLoading();
    }
  },
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  loader: async (params) => {
    await params.context.auth.loaderPromise;
    const sessionData = params.context.auth.data;
    if (!sessionData && params.route.path === "/") {
      throw redirect({ to: "/welcome" });
    } else {
      throw redirect({ to: "/home" });
    }
  },
});
const watchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/watch/$guid",
  component: VideoPlayerPage,
  errorComponent: ErrorPage,
});
const historyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/history",
  component: HistoryPage,
  errorComponent: ErrorPage,
});
const welcomeRoute = createRoute({
  getParentRoute: () => rootRoute,
  loader: async () => {
    return { foo: true };
  },
  path: "/welcome",
  component: EntryPage,
  errorComponent: ErrorPage,
});
const browseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/browse",
  component: BrowsePage,
  errorComponent: ErrorPage,
});
const seriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/series",
  component: SeriesPage,
  errorComponent: ErrorPage,
});
const searchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/search",
  component: SearchPage,
  errorComponent: ErrorPage,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
  errorComponent: ErrorPage,
});
const settingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/settings",
  component: SettingsPage,
  errorComponent: ErrorPage,
});
const watchlistRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/watchlist",
  component: WatchlistPage,
  errorComponent: ErrorPage,
});
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/home",
  component: HomePage,
  errorComponent: ErrorPage,
});

export const routeTree = rootRoute.addChildren([
  indexRoute,
  watchRoute,
  historyRoute,
  welcomeRoute,
  browseRoute,
  seriesRoute,
  searchRoute,
  loginRoute,
  settingsRoute,
  watchlistRoute,
  homeRoute,
]);
