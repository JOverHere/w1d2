var getHTML = require('./http-functions');


var options = {
    host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};


function printReverse (html) {
 var reverse = "";
 for(var i = html.length; i > 0; i--){
reverse += html[i];

 }
 console.log(reverse);

}

getHTML(options, printReverse);