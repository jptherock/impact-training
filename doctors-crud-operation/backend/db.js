const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017')

const doctorschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        maxLength:10
    },

    specialization:{
        type:String,
        required:true,
        maxLength:50
    },

    phoneno:{
        type:String,
        required:true,
        maxLength:10
    },

    location:{
        type:String,
        required:true,
    },

    hospitalname:{
        type:String,
        required:true
    }

})

const Doctor = mongoose.model('doctors',doctorschema);
module.exports = Doctor;