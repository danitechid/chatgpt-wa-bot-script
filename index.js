const server = require('@danitech/wa-web-api');
const fs = require('fs');
const chalk = require('chalk');
const config = require('./config/settings.js');
const client = require('./includes/client.js');

const startServer = (config, client) => {
  return server.start(config, client);
};

startServer(config, client);