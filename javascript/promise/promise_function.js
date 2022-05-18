// Завернуть функцию с обратным вызовом в промис

const fs = require('fs');

function promisify(fn) {
  return function(...args) {
      return new Promise((resolve, reject) => {
          fn(...args, (err, data) => {
              if (err) return reject(err);
              resolve(data);
          });
      });
  }
}

const readdir = promisify(fs.readdir);

readdir(__dirname)
  .then(files => console.log(files))
  .catch(err => console.log(err));