import typescript from 'rollup-plugin-typescript2';
import { join } from 'path';

const cwd = __dirname;

const baseConfig = {
  input: join(cwd, 'src/index.ts'),
  output: [
    {
      file: join(cwd, 'dist/index.js'),
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
  ],
  plugins: [
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          preserveConstEnums: true,
        },
      },
    }),
  ],
};

const esmConfig = Object.assign({}, baseConfig, {
  output: Object.assign({}, baseConfig.output, {
    sourcemap: true,
    format: 'es',
    file: join(cwd, 'dist/shared.esm.js'),
  }),
  plugins: [typescript()],
});

module.exports = [baseConfig, esmConfig];
