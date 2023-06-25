import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    locales: path.resolve(__dirname, 'public', 'locales'),
    buildLocales: path.resolve(__dirname, 'build', 'locales'),
    logo: path.resolve(__dirname, 'public', 'logo'),
    buildLogo: path.resolve(__dirname, 'build', 'logo'),
  };

  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const apiUrl = env.apiUrl || 'http://localhost:8000';
  const appUrl = env.apiUrl || 'http://localhost:5173';
  const PORT = env.port || 3000;

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    apiUrl,
    appUrl,
    port: PORT,
    project: 'frontend',
  });

  return config;
};
