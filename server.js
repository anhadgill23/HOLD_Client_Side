const webpack = require( 'webpack' );
const WebpackDevServer = require( 'webpack-dev-server' );
const config = require( './webpack.config' );

new WebpackDevServer( webpack( config ), {
  publicPath: config.output.publicPath,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/,
  },
  historyApiFallback: true,
  proxy: {
    '/api': 'http://localhost:8080',
  },
} )
  .listen( 3000, '0.0.0.0', ( err, result ) => {
    if ( err ) {
      console.log( err );
    }

    console.log( 'Running at http://0.0.0.0:3000' );
  } );
