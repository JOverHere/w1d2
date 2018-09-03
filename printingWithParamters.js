var https = require("https");

function getAndPrintHTML (options) {
 /* Add your code here */

  https.get(options, function(response){

  response.setEncoding('utf8');

  var newData =[];

  response.on("data", function(data){
   newData += data;

  });

  response.on("end", function(){
    var buffered = Buffer.from(newData)
     buffedData = buffered.toString();
     console.log(buffedData);
    //console.log("response stream complete.");
  });

  });

};

var options = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

getAndPrintHTML(options);