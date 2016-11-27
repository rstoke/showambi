/**
========================================================================================================
  Generic Imports
========================================================================================================
**/

var path = require('path');
var dir = require('../../config/dir.js');
var ext = require( path.join(dir.CONFIG, 'ext.js') );
var cons = require( path.join(dir.CONFIG, 'cons.js') );
var roam = require( path.join(dir.CONFIG, 'roam.js') );

/**
========================================================================================================
  Routing
========================================================================================================
**/

module.exports = function (req, res) {
  var tag = req.query.tag;
  console.log("hello " + tag);
  var query = 'SELECT red, green, blue FROM genre WHERE genre=?';
  //var query = 'SELECT * from genre';
  roam.con.query(query, tag, function(err,rows) {
    if(err) {
	console.log("Error : " + err);
	throw err;
    }
    console.log("It's ok " + rows);
    res.send(rows[0]);
  });
};
