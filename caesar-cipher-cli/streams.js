const Stream = require('stream');
const path = require('path');
const fs = require('fs');

const { encode } = require('./utils');
const { decode } = require('./utils');

const { action } = require('./arguments');
const { shift } = require('./arguments');
const { input } = require('./arguments');
const { output } = require('./arguments');

const cypher = action === 'encode' ? encode : decode;

const readStream = input ? fs.createReadStream(path.join(__dirname, input)) : process.stdin;
const writeStream = output ? fs.createWriteStream(path.join(__dirname, output), { 'flags': 'a+' }) : process.stdout;

const transformStream = new Stream.Transform({
    transform(chunk, encoding, callback) {
        const transformed = cypher(chunk.toString(), shift);
        // this.push(transformed);
        // callback(); 
        callback(null, transformed);
    }
})

module.exports = {
    readStream, writeStream, transformStream
}