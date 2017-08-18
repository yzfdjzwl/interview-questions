const fs = require('fs');

function copy(src, dist) {
  fs.writeFileSync(dist, fs.readFileSync(src));
}

function main(argv) {
  copy(argv[0], argv[1]);
}

main(process.argv.slice(2));
