var request1 = function(x) {
  var promise = new Promise(function(){
     setTimeout(function() {
        console.log('Hey i am Request1 ' + x);
     }, 5000); 
  });
  return promise;
};


var request2 = function(x) {
  var promise2 = new Promise(function(){
    setTimeout(function() {
      console.log('Hey i am Request2 ' + x);
   }, 5000); 
  });
  return promise2;
};

function callRequest1() {
  try{
    request1("callRequest 1 Response 1")
    .then(request2("callRequest 1 Response 2"))
  }
  catch{
    console.log('Your promise fail')
  }
}
    

callRequest1()


function callRequest2() {
  try{
    request1("callRequest 2 Response 1")
    request2("callRequest 2 Response 2")
  }
  catch{
    console.log('Your promise fail')
  }
}

callRequest2()

function callRequest3() {
  try{
    request1("callRequest 3 Response 1")
      .then(request2("callRequest 3 Response 2"))
  }
  catch{
    console.log('Your promise fail')
  }
}

callRequest3()