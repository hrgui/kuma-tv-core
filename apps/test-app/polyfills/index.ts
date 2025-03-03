import "event-target-polyfill";

// to get @tanstack/react-query to work
import "./patchHeaders.ts";
import "abortcontroller-polyfill";

// for scrolling with scrollIntoView
import ScrollPolyfill from "scroll-polyfill";
ScrollPolyfill({ force: true });
