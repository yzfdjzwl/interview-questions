var i = 0;
var j = 0;

setInterval(function() {
  i = i + 1;
  console.log(i, 'setInterval');
}, 1000);

function mock() {
  setTimeout(function() {
    j = j + 1;
    console.log(j, 'setTimeout');
    mock();
  }, 1000);
}
mock();
