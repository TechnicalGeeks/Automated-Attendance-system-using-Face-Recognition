const DailyAttendance=require('../models/DailyAttendance');

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
  await Object.keys(data).forEach((key)=>{
    DailyAttendance.findByIdAndUpdate(key,{$set:{Attendance:data[key]}}).then((result)=>{
      console.log("Modified",result._id,result.lectureId);
      lectureId=result.lectureId;
    })
  })
  res.redirect('/dailyAttendance/get/'+lectureId);
}

module.exports={
  get_dailyAttendance_get,
  post_dailyAttendance_update
}
