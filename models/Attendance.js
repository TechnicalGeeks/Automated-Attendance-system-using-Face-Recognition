const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const StudentSchema= new Schema({
  studentId:{
    type: String,
    required:true,
  },
  courseId:{
    type: String,
    required:true,
  },
  subjects:[{
    type: String,
    required:true,
  }]
  
},{timestamps:true});

const Student=mongoose.model('Student',StudentSchema);

module.exports=Student;