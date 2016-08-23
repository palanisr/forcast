var mongoose = require('mongoose');
var _=require('lodash');


var walmartSchema = mongoose.Schema ({
  "Vendor Nbr": Number,
 "Buyer Full Name": String,
 "Item Nbr": Number,
 "Item Flags": String,
 "Item Desc 1": String,
 "Item Type": Number,
 "Vendor Stk Nbr": String,
 "VNPK Qty": Number,
 "Store Nbr": Number,
 "Range 1 Max Shelf Qty": Number,
 "Range 1 Curr Traited Store": Number,
 "Range 1 Curr Valid Store": Number,
 "Range 1 Curr Instock": String,
 "Range 1 Curr Str On Hand Qty": Number,
 "Range 1 Curr Str In Transit Qty": Number,
 "Range 1 Curr Str In Whse Qty": Number,
 "Range 1 Curr Str On Order Qty": Number,
 "Pipline Inv": Number,
 "AVG POS": Number,
 "Range 1 POS Qty": Number,
 "Range 2 POS Qty": Number,
 "Range 3 POS Qty": Number,
 "Range 4 POS Qty": Number,
 "Week 44 Forecast": Number,
 "Week 45 Forecast": Number,
 "Week 46 Forecast": Number,
 "Week 47 Forecast": Number,
 "CASE PUSH": Number,
 "Item Retail": String,
 "Total Retail": String

}, {
  collection: 'wallmart'
});


var Walmart= module.exports = mongoose.model('Walmart', walmartSchema);
