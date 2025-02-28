import { AppProvider } from "@hrgui/kuma-tv-core-react-component-app-provider";
import type { Props } from "@hrgui/kuma-tv-core-react-component-app-provider";

function App({ routerProvider }: { routerProvider: Props["routerProvider"] }) {
  return <AppProvider routerProvider={routerProvider} />;
}

export default App;
