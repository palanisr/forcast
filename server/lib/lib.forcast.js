var mongoose = require ('mongoose');
var Forcast = mongoose.model('Forcast');


module.exports = function(System){
  return {
  	getSKU:function(param1, callback){
      Forcast.find().limit().exec(function(err,results){
        if(err) return callback(err);
        console.log('Returning Results');
        //console.log(results);
        callback(null,results);
      })
    }
  }}
