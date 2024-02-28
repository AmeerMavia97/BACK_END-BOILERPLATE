const mongoose = require('mongoose')

const Schema = mongoose.Schema;


const CourseSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    duration:{
        type: String,
        require: ture
    }

})

module.exports = monggose.model('Course' , CourseSchema)