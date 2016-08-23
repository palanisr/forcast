var mongoose = require('mongoose');
var _=require('lodash');

var forcastSchema = mongoose.Schema ({
  "Item Nbr" : Number,
  "Item Flags" : String,
  "Vendor Nbr" : Number,
  "Vendor Name" : String,
  "Segment" : String,
  "Brand" : String,
  "Fineline Desc" : String,
  "Item Desc 1" : String,
  "Signing Desc" : String,
  "UPC" : Number,
  "Data Type" : String,
  "201201" : Number,
  "201202" : Number,
  "201203" : Number,
  "201204" : Number,
  "201205" : Number,
  "201206" : Number,
  "201207" : Number,
  "201208" : Number,
  "201209" : Number,
  "201210" : Number,
  "201211" : Number,
  "201212" : Number,
  "201213" : Number,
  "201214" : Number,
  "201215" : Number,
  "201216" : Number,
  "201217" : Number,
  "201218" : Number,
  "201219" : Number,
  "201220" : Number,
  "201221" : Number,
  "201222" : Number,
  "201223" : Number,
  "201224" : Number,
  "201225" : Number,
  "201226" : Number,
  "201227" : Number,
  "201228" : Number,
  "201229" : Number,
  "201230" : Number,
  "201231" : Number,
  "201232" : Number,
  "201233" : Number,
  "201234" : Number,
  "201235" : Number,
  "201236" : Number,
  "201237" : Number,
  "201238" : Number,
  "201301" : Number,
  "201302" : Number,
  "201303" : Number,
  "201304" : Number,
  "201305" : Number,
  "201306" : Number,
  "201307" : Number,
  "201308" : Number,
  "201309" : Number,
  "201310" : Number,
  "201311" : Number,
  "201312" : Number,
  "201313" : Number,
  "201314" : Number,
  "201315" : Number,
  "201316" : Number,
  "201317" : Number,
  "201318" : Number,
  "201319" : Number,
  "201320" : Number,
  "201321" : Number,
  "201322" : Number,
  "201323" : Number,
  "201324" : Number,
  "201325" : Number,
  "201326" : Number,
  "201327" : Number,
  "201328" : Number,
  "201329" : Number,
  "201330" : Number,
  "201331" : Number,
  "201332" : Number,
  "201333" : Number,
  "201334" : Number,
  "201335" : Number,
  "201336" : Number,
  "201337" : Number,
  "201338" : Number,
  "Range 1 Curr On Hand Retail" : Number,
  "Range 1 Avg On Hand Rtl" : Number,
  "Range 2 Curr On Hand Retail" : Number,
  "Range 2 Avg On Hand Rtl" : Number,
  "LAST WEEK YA" : Number,
  "PREV WEEK" : Number,
  "LAST WEEK" : Number,
  "Change%" : Number,
  "LY YTD" : Number,
  "TY YTD" : Number
},{
  collection:'forcast'
});


forcastSchema.virtual('DD_2013').get(function(){
  var self=this;

  return parseInt((self["201337"]+
  self["201336"]+
  self["201335"]+
  self["201334"]+
  self["201333"]+
  self["201332"]+
  self["201331"]+
  self["201330"]+
  self["201329"]+
  self["201328"]+
  self["201327"]+
  self["201326"]+
  self["201325"])/13);
});

forcastSchema.virtual('FDD_2013').get(function(){
  var self=this;

  return parseInt((self["201337"]+
  self["201336"]+
  self["201335"]+
  self["201334"])/4);
});

forcastSchema.virtual('Diff').get(function(){
  var self=this;
  var DD=((self["201337"]+
  self["201336"]+
  self["201335"]+
  self["201334"]+
  self["201333"]+
  self["201332"]+
  self["201331"]+
  self["201330"]+
  self["201329"]+
  self["201328"]+
  self["201327"]+
  self["201326"]+
  self["201325"])/13);

  var FDD = ((self["201337"]+
  self["201336"]+
  self["201335"]+
  self["201334"])/4);

  return parseInt(DD-FDD);
});
forcastSchema.set('toObject', {
  getters: true
});
forcastSchema.set('toJSON', {
  getters: true
});

var forcast= module.exports = mongoose.model('Forcast', forcastSchema);
