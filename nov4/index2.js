
const qr = require('qr-image');
const fs = require('fs');

const data = process.argv[2];
const fileName = process.argv[3];

const result = qr.image(data, {type: 'png'})
result.pipe(fs.createWriteStream(fileName))