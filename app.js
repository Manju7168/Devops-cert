var http=require("http");
http.createServer(function(request,response) {
response.write("This is demo app!!");
response.end();
}).listen(8090);

