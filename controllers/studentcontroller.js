const {default: mongoose} = require('mongoose');
const Student = require('../models/studentModel')


const addStudent = async (req , res)=>{
    const {name , email, age} = req.body;
    try {
        const student = await Student.create({name , email ,age})
        res.send({message : 'Student Added'})
    } catch (error) {
        res.send({message: 'Errorssss'})
        
    }
};
const getStudent = async (req , res)=>{
    try {
        const students = await Student.find({})
        res.send({student: students})
    } catch (error) {
        res.send({message: 'Error'})
    }
};


const deleteStudent = async (req , res)=>{
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.send({ message: 'no such student' })
        return
    }
    const student = await Student.findOneAndDelete({ _id: id})
    if(!student){
        res.send({message: 'User not found'})
    }else{
        res.send({message: "student Delete"})
    }

};
const editStudent = async (req, res)=>{
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.send({ message: 'no such student' })
        return
    }

    const student = await Student.findOneAndUpdate(
        { _id: id},
        {...req.body}
        )
    if(!student){
        res.send({message: 'User not found'})
    }else{
        res.send({message: "student Update", student: student})
    }
};

module.exports = {addStudent , getStudent , deleteStudent , editStudent}









