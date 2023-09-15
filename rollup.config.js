// rollup.config.js
import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/components/prototype-2/checkbox_toggle.svelte",
  output: {
    file: "public/bundle.js",
    format: "iife",
  },
  plugins: [
    svelte({ emitCss: false }),
    // see NOTICE below
    resolve({
      browser: true,
      exportConditions: ["svelte"],
      extensions: [".svelte"],
    }),
    // ...
  ],
};
