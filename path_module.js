const path = require('path');

// to get platform specific seperator
console.log(path.sep);

// to get normalized path
const filePath = path.join("/content/", 'subfolder', 'test.txt');
console.log(filePath);

// to return the last portion of a path 
const base = path.basename(filePath);
console.log(base);

// to get the absolute bath
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absolute);
