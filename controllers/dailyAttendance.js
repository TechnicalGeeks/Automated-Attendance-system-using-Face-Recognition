const DailyAttendance=require('../models/DailyAttendance');
const Attendance=require('../models/Attendance');
const Lecture=require('../models/Lecture');
const Course=require('../models/Course');
const mongoose=require('mongoose');

const get_dailyAttendance_get=(req,res)=>{
  let lectureId=req.params.id
  DailyAttendance.aggregate([{$lookup:{
      from:'students',
      localField:'studentId',
      foreignField:'id',
      as:'student'
    }},
    {$match:{lectureId:lectureId}},
  ]).then((result)=>{
    res.render('DailyAttendance/verifyAttendance',{title:'Daily Attendance',attendances:result, lectureId:lectureId});
  })
  // DailyAttendance.find({lectureId:lectureId}).then((result)=>{
  //   res.render('DailyAttendance/verifyAttendance',{title:'Daily Attendance',attendances:result, lectureId:lectureId});
  // })
}

const post_dailyAttendance_update=async (req,res)=>{
  const data=req.body;
  console.log(data);
  let lectureId=req.params.id;
  console.log(lectureId);
  Lecture.aggregate([
    {$lookup:{
      from:'courses',
      localField:'courseId',
      foreignField:'id',
      as:'course'
    }},
    {$match:{_id:mongoose.mongo.ObjectId(lectureId)}},
  ]).then((lecture)=>{
    lecture=lecture[0];
    // console.log("Leccc",lecture.subject);
    let course=lecture.course[0];
    console.log("Course",course);
    let index=course.subjects.indexOf(lecture.subject);
    // console.log("-----",course.count[index],index);
    return [course.count[index],index];
  }).then(async ([count,index])=>{
    // console.log("Count",count,index);
      await Object.keys(data).forEach((key)=>{
        
        DailyAttendance.findByIdAndUpdate(key,{$set:{Attendance:data[key]}}).then((result)=>{
          console.log("Modified",result._id,result.lectureId);
          lectureId=result.lectureId;
          // updateoverallAttendance(result.studentId);
          // key=result.studentId
          // console.log("@@@",result.studentId);
          Attendance.find({studentId:result.studentId}).then((student)=>{
            console.log(student);
            student=student[0];
            let attendance=student.subjects[index];
            console.log("Attendance",attendance,data[key]=="P"?100:0);
            // attendance=( attendance *  (count-1) )/100
            // attendance+=((data[key]=='P' ? 100 : 0 )/count)
            // attendance*=100;
            attendance=(attendance*(count-1)+(data[key]=='P'?100:0))/count;
            console.log("###",attendance,count);
            student.subjects[index]=attendance;
            Attendance.findOneAndUpdate({studentId:result.studentId},{$set:{subjects:student.subjects}}).then((result)=>{
              console.log("Updated Overall Attendance of ",result._id,result.studentId);
            })
          })
        })
      })  
  }).then(()=>{
    res.redirect('/lecture/create');
  })
  
}

const get_dailyAttendance_all= (req,res)=>{
  DailyAttendance.aggregate([{$lookup:{
      from:'students',
      localField:'studentId',
      foreignField:'id',
      as:'student'
    }},
    {$lookup:{
      from:'lectures',
      localField:'lectureId',
      foreignField:'_id',
      as:'lecture'
    }},
    {$sort:{updatedAt:-1}},
  ]).then((result)=>{
    console.log(result[0]);
    res.render('DailyAttendance/viewDailyAttendance',{title:'Daily Attendance',attendances:result});
  })
}

module.exports={
  get_dailyAttendance_get,
  get_dailyAttendance_all,
  post_dailyAttendance_update
}
