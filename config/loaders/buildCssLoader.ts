import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader(isDev: boolean) {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:5]',
          },
        },
      },
      'sass-loader',
    ],
  };
}

// import glob from 'glob';
// {
//   loader: require.resolve('postcss-loader'),
//   options: {
//     indent: 'postcss',
//     syntax: 'postcss-scss',
//     plugins: () => [
//       // Purge unused CSS from .js and .jsx files
//       // eslint-disable-next-line global-require
//       require('@fullhuman/postcss-purgecss')({
//         // You'll want to modify this glob if you're using TypeScript
//         content: glob.sync('src/**/*.{ts,tsx}', { nodir: true }),
//         extractors: [
//           {
//             extractor: (content: string) => content.match(/\w+/g) || [],
//             extensions: ['ts', 'tsx'],
//           },
//         ],
//       }),
//       // eslint-disable-next-line global-require
//       require('cssnano'),
//     ],
//   },
// },
