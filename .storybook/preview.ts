import type { Preview } from "@storybook/react";
import { init as setupSpatialNavigation } from "@hrgui/spatial-navigation-core";
import "@hrgui/kuma-tv-core-app/index.css";

setupSpatialNavigation({
  debug: true,
  visualDebug: false,
  distanceCalculationMethod: "center",
});

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    options: {
      storySort: {
        method: "alphabetical",
      },
    },
    backgrounds: {
      values: [{ name: "Dark", value: "#000" }],
      default: "Dark",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        "720p": {
          name: "720p",
          styles: { width: "1280px", height: "720px" },
          type: "tablet",
        },
        "1080p": {
          name: "1080p",
          styles: { width: "1920px", height: "1080px" },
          type: "tablet",
        },
        "4K": {
          name: "4K",
          styles: { width: "3840px", height: "2160px" },
          type: "tablet",
        },
      },
      defaultViewport: "720p",
    },
  },
};

export default preview;
