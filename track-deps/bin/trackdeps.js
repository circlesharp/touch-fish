#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const dirName = 'trackDepsTempDir';
const pwd = process.cwd();
const desPath = `${pwd}/${dirName}`;
const srcPath = path.resolve(__dirname, '../lib');

// 复制文件
fs.cpSync(srcPath, desPath, { recursive: true });
console.log('ok');
