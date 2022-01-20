const express=require('express');
const router=express.Router();
const Student=require('../controllers/student');

router.get("/add",Student.get_student_add);

router.post("/add",Student.post_student_add);

router.get("/all",Student.get_student_all);

router.get('/delete/:id',Student.get_student_delete);

router.post('/update',Student.post_student_update);

module.exports=router;