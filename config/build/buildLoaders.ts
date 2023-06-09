import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';
import { buildCssLoader } from '../loaders/buildCssLoader';
import { buildBabelLoader } from '../loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const {
    isDev,
  } = options;

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const cssLoaders = buildCssLoader(isDev);

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const babelLoader = buildBabelLoader(options);

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    cssLoaders,
  ];
}
