#!/usr/bin/env node

const cli = require('eslint/cli');

// const [, , ...args] = process.argv;

// console.log(2333, eslint);

cli.execute([1, 2, './src', '--ext', '.js,ts']);
