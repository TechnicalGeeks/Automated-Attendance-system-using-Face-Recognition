const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const AttendanceSchema= new Schema({
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
    default:0
  }]
  
},{timestamps:true});

const Attendance=mongoose.model('attendance',AttendanceSchema);

module.exports=Attendance;