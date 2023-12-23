import { defineConfig } from 'tsup'

export default defineConfig(options => ({
  entry: ['src/index.ts'],
  sourcemap: true,
  clean: true,
  format: ['cjs', 'esm'],
  minify: !options.watch,
  dts: true,
}))
