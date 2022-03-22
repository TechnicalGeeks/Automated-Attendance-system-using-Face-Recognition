const DailyAttendance=require('../models/DailyAttendance');
const Attendance=require('../models/Attendance');
const Lecture=require('../models/Lecture');
const Course=require('../models/Course');
const mongoose=require('mongoose');

const get_attendance_all=async (req,res)=>{
  Attendance.aggregate([{$lookup:{
        from:'students',
        localField:'studentId',
        foreignField:'id',
        as:'student'
      }},
      {$lookup:{
        from:'courses',
        localField:'courseId',
        foreignField:'id',
        as:'course'
      }},
      {$match:{}},
    ]).then((result)=>{
    console.log(result[0]);
    res.render('Attendance/viewAttendance',{title:'Attendance',attendances:result});
  })
}

module.exports={
  // get_dailyAttendance_get,
  get_attendance_all,
  // post_dailyAttendance_update
}