import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';


export default {
    input: 'zx.mjs',
    output: {
        dir: 'output',
        format: 'es'
    },
    plugins: [json(), nodeResolve(), commonjs()]
}
