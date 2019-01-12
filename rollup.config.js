import { uglify } from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'
import json from 'rollup-plugin-json';
import pkg from './package.json'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

const BASE_PLUGINS = [ json() ];
const DIR = 'dist';
const MODULE_NAME = 'SchemaRenderVue'

const BANNER = `/* ${pkg.name} v${pkg.version} (c) ${pkg.author} - ${pkg.license} */`
const PLUGINS = [
  resolve({
    jsnext: true,
    main: true,
    browser: true
  }),
  commonjs(),
  babel({
    exclude: 'node_modules/**',
    babelrc: false,
    presets: [['@babel/env', { modules: false }]]
  }),
  uglify(),
]

function build (format, suffix = `${format}.min`) {
  return {
    input: 'src/SchemaRenderVue.js',
    cache: false,
    output: {
      file: `${DIR}/${MODULE_NAME}.${suffix}.js`,
      format: format,
      name: MODULE_NAME,
      indent: false,
      sourcemap: true,
      exports: 'named',
      banner: BANNER
    },
    plugins: format === 'es' ? BASE_PLUGINS : PLUGINS.concat(BASE_PLUGINS)
  }
}

export default [
  build('amd'),
  build('cjs'),
  build('system'),
  build('es', 'esm'),
  build('iife'),
  build('umd')
]