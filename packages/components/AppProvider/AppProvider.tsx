import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@hrgui/kuma-tv-core-query-client";

export type Props = {
  children?: React.ReactNode;
  routerProvider: any;
};

export function AppProvider({ children, routerProvider }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      {routerProvider}
      {children}
    </QueryClientProvider>
  );
}
