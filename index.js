const { Command } = require('commander');
const express = require('express');

const program = new Command();
const app = express();

program
    .requiredOption('-h, --host <host>', 'Server host')
    .requiredOption('-p, --port <port>', 'Server port')
    .requiredOption('-c, --cache <cache>', 'Cache directory path')
    .parse(process.argv);

const options = program.opts();

app.listen(options.port, options.host, () => {
    console.log(`Server running at http://${options.host}:${options.port}/`);
});
