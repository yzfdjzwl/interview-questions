const fs = require('fs');

function copy(src, dist) {
  fs.createReadStream(src).pipe(fs.createWriteStream(dist));
}

function main(argv) {
  copy(argv[0], argv[1]);
}

main(process.argv.slice(2));
