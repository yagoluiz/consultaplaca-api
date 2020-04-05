const logger = require('simple-node-logger').createSimpleLogger();

const app = require('../src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => logger.info(`API listening on port => ${port}`));
