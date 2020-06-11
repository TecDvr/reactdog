const tracer = require('dd-trace').init({
  logInjection: true
});
const StatsD = require('node-dogstatsd').StatsD;
const dogstatsd = new StatsD();
const express = require('express')
const app = express()
const port = 5000
const { createLogger, format, transports } = require('winston');

require('dotenv').config();
const yourAPI = process.env.APIKEY

dogstatsd.increment('page.views')

// LOGGING TO LOCAL FILE
// const logger = createLogger({
//   level: 'info',
//   exitOnError: false,
//   format: format.json(),
//   transports: [
//     new transports.File({ filename: `./logs/server.log` }),
//   ],
// });

// AGENTLESS LOGGING
const httpTransportOptions = {
  host: 'http-intake.logs.datadoghq.com',
  path: `/v1/input/${yourAPI}?ddsource=nodejs&service=nodedog`,
  ssl: true
};

const logger = createLogger({
  level: 'info',
  exitOnError: false,
  format: format.json(),
  transports: [
    new transports.Http(httpTransportOptions),
  ],
});

module.exports = logger;

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });

app.get('/', (req, res) => {
    res.json({message: "hello world from nodedog server"})
    logger.log('info', 'My nodedog logs!!');
})

app.get('/api/four', (req, res) => {
  res.status(400);
  res.json({message: "test"})
  logger.log('warn', '400 button was clicked');
})

app.get('/api/five', (req, res) => {
  res.status(500);
  res.json({message: "test"})
  logger.log('error', '500 button was clicked');
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))