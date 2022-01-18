const express=require('express');
const router=express.Router();
const Lecture=require('../controllers/lecture');

router.get('/create',Lecture.get_lecture_create);

router.post('/create', Lecture.post_lecture_create);

router.get('/all',Lecture.get_lecture_all);

module.exports=router;