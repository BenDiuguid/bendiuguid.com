import path from 'path';

export default (config, env, helpers) => {
  if (env.ssr) {
    return;
  }
  const { plugin: htmlWebpackPlugin } = helpers.getPluginsByName(
    config,
    'HtmlWebpackPlugin'
  )[0];
  htmlWebpackPlugin.options.template = `!!ejs-loader!${path.resolve(
    __dirname,
    './src/index.html'
  )}`;
};
