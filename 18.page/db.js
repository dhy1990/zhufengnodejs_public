var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://123.57.143.189/zry';
var assert = require('assert');
exports.insert = function(user,callback){
    MongoClient.connect(url,function(err,db){
        assert.equal(null,err);
        db.collection('user').save(user,function(err,ret){
            db.close();
            callback(null,ret);
        });
    });
}