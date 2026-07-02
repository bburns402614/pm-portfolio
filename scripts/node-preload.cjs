/**
 * Node.js v25 enables Web Storage globals by default, but without a valid
 * storage backing file they can behave unexpectedly and break SSR tooling.
 * For Next.js dev on Node v25, it's safer to remove them entirely so libraries
 * that guard with `typeof localStorage !== "undefined"` don't crash server-side.
 */
try {
  // eslint-disable-next-line no-undef
  if (typeof globalThis !== "undefined") {
    // eslint-disable-next-line no-undef
    delete globalThis.localStorage;
    // eslint-disable-next-line no-undef
    delete globalThis.sessionStorage;
  }
} catch {
  // best-effort only
}

