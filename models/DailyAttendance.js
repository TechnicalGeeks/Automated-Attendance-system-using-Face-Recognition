const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const DailyAttendanceSchema= new Schema({
  studentId:{
    type: String,
    required:true,
  },
  lectureId:{
    type: String,
    required:true,
  },
  Attendance:{
    type: String,
    required:true,
    default: 'A'
  }
  
},{timestamps:true});

const DailyAttendance=mongoose.model('dailyattendance',DailyAttendanceSchema);

module.exports=DailyAttendance;