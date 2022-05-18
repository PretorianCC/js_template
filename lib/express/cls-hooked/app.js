const express = require("express");
const pino = require("pino");

const logger = pino({
  prettyPrint: true,
})

const app = express();

app.get('', (req, res) => {
  res.end('ok');
})

app.listen(3000, () => {
  logger.info("Application started")
})