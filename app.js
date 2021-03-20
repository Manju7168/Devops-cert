var http=require("http");
http.createServer(function(request,response) {
response.write("Running App Version is 1.0!!!");
response.end();
}).listen(8090);

