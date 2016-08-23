var mongoose = require ('mongoose');

module.exports = function(app) {
  var forcast = require('../lib/lib.forcast')(app);

  app.route('/api/forcast')
  .get(function(req,res){
    forcast.getSKU(null,function(err,forcast){
      if (err){
        console.log('Problem');
      }else {
        res.json(forcast);
      }
    })
  });
};
