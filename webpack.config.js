const Path = require('path');
const { CssWebpackConfig, JavascriptWebpackConfig } = require('@silverstripe/webpack-config');
const { ModuleFederationPlugin } = require('webpack').container;

const PATHS = {
  ROOT: Path.resolve(),
};

const CssConfig = new CssWebpackConfig('css', PATHS)
  .setEntry({
    bundle: `${PATHS.SRC}/styles/bundle.scss`,
  })
  .getConfig();

const JsConfig = new JavascriptWebpackConfig('js', PATHS)
  .setEntry({
    main: `${PATHS.SRC}/main/main.js`
  })
  .mergeConfig({
    output: {
      path: PATHS.DIST,
      publicPath: 'auto',
      filename: '[name].js',
    },
  })
  .getConfig();

const moduleFedPlugin = new ModuleFederationPlugin({
  name: 'mycounter',
  filename: 'remoteEntry.js',
  remotes: {
    mycounter: 'mycounter@//skeleton2.local/_resources/vendor/marczhermo/sscounter/client/dist/remoteEntry.js',
    // batman: 'batman@http://localhost:8088/remoteEntry.js',
  },
  exposes: {
    './MyTitle': './client/src/components/MyTitle.jsx',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
});

JsConfig.plugins.push(moduleFedPlugin);

const config = [
  JsConfig,
  CssConfig,
];

// Use WEBPACK_CHILD=js or WEBPACK_CHILD=css env var to run a single config
module.exports = (process.env.WEBPACK_CHILD)
  ? config.find((entry) => entry.name === process.env.WEBPACK_CHILD)
  : module.exports = config;

