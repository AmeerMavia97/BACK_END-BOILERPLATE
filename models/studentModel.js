const mongoose = require('mongoose')
const Schema = mongoose.Schema;



const studnetSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type : String,
        require: true,
        unique: true,
    },
    age:{
        type: Number,
        require: true,
    }
})


module.exports = mongoose.model('Student' , studnetSchema)




