import Express from 'express';
import path from 'path';

import * as config from './config';
import * as runtimeConfigMiddleware from './runtimeConfigMiddleware';

// common root directory to client and server
const rootPath = path.join(__dirname, '../../');
const publicPath = path.join(rootPath, '/client/build');
const configDirPath = path.join(rootPath, '/server/config');
// initialize configuration
config.init(configDirPath);
const express = Express();
// runtime configuration middlewarte
express.get(/\/runtimeConfig.js$/, runtimeConfigMiddleware.buildHandleRequest());
// static file server
express.use(Express.static(publicPath));

const port = config.get('port');
express.listen(port, () => {
  console.log(`Server set to publish static files from: ${publicPath}`);
  console.log(`Listening at http://localhost:${port}/`);
  console.log('Press Ctrl+C to quit.');
});
