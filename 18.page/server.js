var http = require('http');
//Request URL:https://www.baidu.com/
//Request Method:GET
var fs = require('fs');
var server = http.createServer(function(req,res){
    var method = req.method;
    var url = req.url;
    if(url == '/'){
        fs.createReadStream('./index.html').pipe(res);
    }else{

    }
});

server.listen(80);