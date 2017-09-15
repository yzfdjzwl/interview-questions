const exec = require('child_process').exec;

const start = (response) => {
  console.log('Request handler "start" was called');

  exec('ls -lah',
    { timeout: 100000, maxBuffer: 20000*1024 },
    (error, stdout, stderr) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(stdout);
    response.end();
  });
}

const upload = (response) => {
  console.log('Request handler "upload" was called');
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Uplaod");
  response.end();
}

exports.start = start;
exports.upload = upload;
