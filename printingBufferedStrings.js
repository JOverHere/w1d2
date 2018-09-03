var https = require("https");

function getAndPrintHTMLChunks () {


  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */

  https.get(requestOptions, function(response){

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
getAndPrintHTMLChunks();