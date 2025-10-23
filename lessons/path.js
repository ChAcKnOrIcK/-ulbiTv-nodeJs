const path = require('path'); 

console.log('Склеить участки пути', path.join(__dirname, '..', '..'));
console.log('Склеить участки пути', path.resolve(__dirname, '..', '..'));