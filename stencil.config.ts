import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.css',
  taskQueue: 'async',
  enableCache: true,
  outputTargets: [{
    type: 'www',
    serviceWorker: null
  }],
};
