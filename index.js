"use strict";

module.exports = (Franz) =>
  class BoostNote extends Franz {
    overrideUserAgent() {
      return window.navigator.userAgent.replace(
        /(Ferdi|Electron)\/\S+ \([^)]+\)/g,
        ""
      );
    }
  };
