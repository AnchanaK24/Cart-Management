const mongoose=require('mongoose');

var orderSchema= new mongoose.Schema({
    order:String,
    total:String
});
mongoose.model('Order',orderSchema);