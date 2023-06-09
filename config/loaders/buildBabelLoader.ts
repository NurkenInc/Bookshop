import { BuildOptions } from '../build/types/config';

export function buildBabelLoader({ isDev }: BuildOptions) {
  return {
    test: /\.[jt]sx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
        },
      },
    ],
  };
}
