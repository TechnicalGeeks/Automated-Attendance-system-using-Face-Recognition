const express=require('express');
const router=express.Router();
const Course=require('../controllers/course');

router.get("/add", Course.get_course_add);

router.post("/add", Course.post_course_add);

router.get("/all", Course.get_course_all);

router.post("/update", Course.post_course_update);

router.get("/delete/:id", Course.get_course_delete);

module.exports=router;