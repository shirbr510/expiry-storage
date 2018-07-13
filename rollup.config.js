// node-resolve will resolve all the node dependencies
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

// Convert CJS modules to ES6, so they can be included in a bundle
import commonjs from 'rollup-plugin-commonjs';


const cssExportMap = {};

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}