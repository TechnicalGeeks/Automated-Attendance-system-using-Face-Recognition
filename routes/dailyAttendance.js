const express=require('express');
const router=express.Router();
const DailyAttendance=require('../controllers/dailyAttendance');

router.get('/get/:id',DailyAttendance.get_dailyAttendance_get);

// router.post('/create', Lecture.post_lecture_create);

router.get('/all',DailyAttendance.get_dailyAttendance_all);

// router.get('/delete/:id',Lecture.get_lecture_delete);

router.post('/update/:id',DailyAttendance.post_dailyAttendance_update);



module.exports=router;