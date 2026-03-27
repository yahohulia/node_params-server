/* eslint-disable no-console */
'use strict';

const http = require('http');

function createServer() {
  const server = http.createServer((req, res) => {
    let parts;

    res.setHeader('Content-Type', 'application/json');

    if (!req.url) {
      res.end();

      return;
    }

    const urlArguments = req.url.split('?');

    if (urlArguments[0].includes('//')) {
      parts = urlArguments[0].slice(1).split('//');
    } else {
      parts = urlArguments[0].slice(1).split('/');
    }

    const query = Object.fromEntries(new URLSearchParams(urlArguments[1]));

    const result = { parts: parts, query: query };

    console.log(parts, query);

    res.end(JSON.stringify(result));
  });

  return server;
}

module.exports = {
  createServer,
};
