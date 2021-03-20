var http=require("http");
http.createServer(function(request,response) {
response.write("This demo app is updated to version 6.0 !!");
response.end();
}).listen(8090);

