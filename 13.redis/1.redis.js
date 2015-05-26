var redis = require('redis');
var client = redis.createClient(6379,'localhost');
client.on('error',function(err){
    console.log(err);
});
client.set('name','zzzzzz',function(err,result){
    console.log(arguments);
});
//存入
/*
key = person_100
   name tom
   age 100
 再全部获取并输出*/
