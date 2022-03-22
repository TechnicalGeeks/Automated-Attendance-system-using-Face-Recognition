const express=require('express');
const router=express.Router();
const Attendance=require('../controllers/attendance');

// router.get('/get/:id',DailyAttendance.get_dailyAttendance_get);

// router.post('/create', Lecture.post_lecture_create);

router.get('/all',Attendance.get_attendance_all);

// router.get('/delete/:id',Lecture.get_lecture_delete);

// router.post('/update/:id',DailyAttendance.post_dailyAttendance_update);



module.exports=router;