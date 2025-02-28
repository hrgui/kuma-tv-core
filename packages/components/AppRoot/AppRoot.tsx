//import LoadingOverlay from "@hrgui/kuma-tv-core-react-component-loading";
import AppLayout from "@hrgui/kuma-tv-core-react-component-app-layout";
import { FocusContext, useFocusable } from "@hrgui/react-spatial-navigation";
import { Outlet, useRouterState } from "@tanstack/react-router";
import LoadingOverlay from "../Loading/LoadingOverlay";
import { useSessionData } from "@hrgui/kuma-tv-core-api-hooks/useSessionData";

export function Root() {
  const { isLoading } = useRouterState();
  const { focusKey, ref } = useFocusable({ focusKey: "root" });
  const sessionData = useSessionData();

  return (
    <FocusContext.Provider value={focusKey}>
      <AppLayout sessionData={sessionData} ref={ref}>
        {isLoading && <LoadingOverlay />}
        <Outlet />
      </AppLayout>
    </FocusContext.Provider>
  );
}
