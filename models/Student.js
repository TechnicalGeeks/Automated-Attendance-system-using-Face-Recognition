const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const StudentSchema= new Schema({
  id:{
    type: String,
    required:true,
    unique:true,
    index:true
  },
  fname:{
    type: String,
    required:true,
  },
  mname:{
    type: String,
  },
  lname:{
    type: String,
    required:true,
  },
  courseId:{
    type: String,
    required:true,
  },
  rollNo:{
    type: String,
    required:true,
  },
  
},{timestamps:true});

const Student=mongoose.model('Student',StudentSchema);

module.exports=Student;