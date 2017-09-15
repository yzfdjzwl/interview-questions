const http = require('http');
const url = require('url');

const start = (route, handle) => {
  const onRequest = (request, response) => {
    const pathname = url.parse(request.url).pathname;
    console.log(`Request for ${pathname} received.`);

    route(handle, pathname, response);
  };
  http.createServer(onRequest).listen(8888);
  console.log('Server has started');
};

exports.start = start;
