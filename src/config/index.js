//Store client config values here

import config from './../../server/config';

const defaults = {
  debug: false, //Includes stats and helpers
  dataPlayback: {
    ports: {
      outgoing: config.dataPlayback.ports.outgoing,
    },
  },
};

module.exports = defaults;
