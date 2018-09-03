var https = require("https");

function getHTML(options, callback) {
 /* Add your code here */

  https.get(options, function(response){

  response.setEncoding('utf8');

  var newData =[];

  response.on("data", function(data){
   newData += data;

  });

  response.on("end", function(){
    callback(newData);
  });

  });

};

function printHTML(html) {
  console.log(html);
}

var options = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };

getHTML(options, printHTML);