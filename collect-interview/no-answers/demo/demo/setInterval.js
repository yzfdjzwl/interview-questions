var i = 0;
var timer = setInterval(function() {
  console.log('in....');
  if (++i === 5) {
    clearInterval(timer);
  }
}, 5000);
