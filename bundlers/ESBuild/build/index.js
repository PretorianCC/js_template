"use strict";
(() => {
  // bundlers/ESBuild/src/second.mjs
  function getName() {
    return "Name";
  }

  // bundlers/ESBuild/src/index.mjs
  function someFn() {
    return "123";
  }
  console.log("Hello world" + getName() + someFn());
})();
