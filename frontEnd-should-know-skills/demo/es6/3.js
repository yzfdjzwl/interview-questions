setTimeout(function(){
      console.log(4)
}, 300)
setTimeout(function(){
      console.log(3)
}, 200)
for (var i=0; i<1000000; i++) {
      console.log(1)
}
setTimeout(function(){
      console.log(2)
}, 100);
