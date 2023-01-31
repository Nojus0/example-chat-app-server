import {nodeResolve} from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import {terser} from "rollup-plugin-terser";

/**
 * @type {import("rollup").RollupOptions}
 */
export default {
    input: "./src/index.ts",
    output: {
        file: "output/bundle.js",
        format: "cjs"
    },
    plugins: [
        typescript(),
        json(),
        nodeResolve({browser: false}),
        commonjs(),
        terser()
    ]
}