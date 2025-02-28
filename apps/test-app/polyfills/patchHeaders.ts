/**
 * Patch 'Headers' to accept 'undefined'.
 * Fixes `TypeError: Failed to construct 'Headers': No matching constructor signature.`
 * Affected platforms:
 *   - Tizen 3
 *   - Tizen 4
 *   - webOS 4
 */

(function (window) {
  "use strict";

  if (window.Headers) {
    try {
      new window.Headers(undefined);
    } catch (_) {
      console.debug("patch 'Headers' to accept 'undefined'", _);

      const _Headers = window.Headers;

      //@ts-expect-error patch Headers
      window.Headers = function (init: any) {
        return init ? new _Headers(init) : new _Headers();
      };
    }
  }
})(window);
