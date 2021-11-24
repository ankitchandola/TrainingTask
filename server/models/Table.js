const mongoose = require('mongoose')

const TableSchema = new mongoose.Schema({
   
    _id : mongoose.Schema.Types.ObjectId,
    name:{
       type: String,
       required: true


    },
    childrens:{
       type: Array,
       required: true
      

    }



})
const Table = mongoose.model("Tabledata", TableSchema);
module.exports = Table;