/**
 * @overview
 *
 * @author
 * @version 2014/04/26
 */

var http = require("http");
var fs = require('fs');


var port = 1337;
var request = require("request");
var url = "https://graph.facebook.com/FireEX?fields=posts&access_token=";
token = 
"CAACEdEose0cBAM1kpYJkBtyTmAZCRCW966libaRWrnHRHJ53JmrxycWbYGNhTTHG5XFIHNHnbjLefcqqYqZBtB8wgIIXBy2AgsquQlAQEefPfApfcPxhpYsffGku9lRx3n238YJIImadws7pzqkGZBTcFzSFZBejZC65cmFd705vZALtevZAs0C3AkWhxHZCx0w28TKCSTEv1wZDZD";
url += token;


http.createServer(function (req, res) {

  res.writeHeader(200, {"Content-Type": "text/html"});

  var data = "<html><head></head><body>"
  request.get(url, function (err, body, response) {
    
    response = JSON.parse(response);
    //console.log(body);
    response.posts.data.forEach(function (val, idx) {
        data += "<div style='text-align:center;'>" + "<p>"+ val.message
        +"</p><br><img src="+val.picture+" ></img>" + "</div>";
    });
   
    data += "</body></html>";
    res.end(data);
  });



}).listen(port);

console.log("start server port: " + port);
