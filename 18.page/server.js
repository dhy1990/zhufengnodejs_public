var http = require('http');
//Request URL:https://www.baidu.com/
//Request Method:GET
var fs = require('fs');
var mime = require('mime');
var path = require('path');
var server = http.createServer(function(req,res){
    var method = req.method;
    var url = req.url;
    if(url == '/'){
        fs.createReadStream('./index.html').pipe(res);
    }else{
        res.writeHead(200,{'Content-Type':mime.lookup(url)});
        fs.exists(path.join(__dirname,url),function(exists){
            if(exists){
                fs.createReadStream(path.join(__dirname,url)).pipe(res);
            }else{
                res.end('404');
            }
        });
    }
});

server.listen(80);