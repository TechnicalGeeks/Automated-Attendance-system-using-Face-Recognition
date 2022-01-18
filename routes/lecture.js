const express=require('express');
const router=express.Router();
const Lecture=require('../controllers/lecture');

router.get('/create',Lecture.get_lecture_create);

router.post('/create', Lecture.post_lecture_create);

router.get('/all',Lecture.get_lecture_all);

router.get('/delete/:id',Lecture.get_lecture_delete);

router.post('/update',Lecture.post_lecture_update);

module.exports=router;