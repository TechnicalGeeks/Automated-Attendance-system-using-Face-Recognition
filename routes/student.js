const express=require('express');
const router=express.Router();
const Student=require('../controllers/student');

router.get("/add",Student.get_student_add);

router.post("/add",Student.post_student_add);

module.exports=router;